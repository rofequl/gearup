const { models } = require('../../../app/models')
const { genPassword, validPassword } = require('../../helper/auth/passwordUtils')
const { genUsername } = require('../../helper/helper')
const { GraphQLError } = require('graphql')
const registerValidationSchema = require('../validations/registerValidationSchema')
const { storeUserLoginInfo } = require('../../helper/auth/loginInfo')
const { issueJWT } = require('../../helper/auth/jwtUtils')
const crypto = require("crypto")

const authResolvers = {
    Query: {
        me: () => 'world'
    },
    Mutation: {
        login: async (_, { email, password, deviceId }, context) => {
            try {
                // Extract headers for device detection
                const { request } = context

                const user = await models.User.findOne({
                    where: { email: email },
                    attributes: ['id', 'password', 'salt']
                })
                if (user && user.id) {
                    const isValid = validPassword(password, user.password, user.salt)
                    if (isValid) {
                        if (!deviceId) deviceId = crypto.randomBytes(32).toString('hex')
                        let refreshKey = await storeUserLoginInfo(request, user, deviceId)
                        const tokenObject = issueJWT(user, refreshKey)
                        return {
                            success: true,
                            message: 'Login successful',
                            token: tokenObject.token,
                            expiresIn: tokenObject.expires,
                            deviceId
                        }
                    } else throw new GraphQLError('Authentication failed!')
                } else throw new GraphQLError('Authentication failed!')
            } catch (error) {
                console.error(error) // Log error for debugging
                throw new GraphQLError(error.message, {
                    extensions: {
                        code: error.extensions?.code || 'INTERNAL_SERVER_ERROR',
                        argumentName: error.extensions?.argumentName || null
                    }
                })
            }
        },
        register: async (_, { input }) => {
            try {
                // Validate the input
                const validatedInput = await registerValidationSchema.validateAsync(input, { abortEarly: false })

                const { firstName, lastName, email, password } = validatedInput

                // Check if the email already exists
                const existingUser = await models.User.findOne({ where: { email } })
                if (existingUser) throw new GraphQLError('Validation failed', {
                    extensions: {
                        code: 'BAD_USER_INPUT',
                        argumentName: ['email'],
                        validationErrors: 'Email already exists'
                    }
                })

                // Password Hash & Salt generate and also username
                const { salt, hash: passwordHash } = genPassword(password)
                const username = genUsername(firstName + ' ' + lastName)

                // initialize record
                const user = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: passwordHash,
                    username,
                    salt,
                    profilePicture: 'public/images/profile.png'
                }

                // Create the user record
                const createdUser = await models.User.create(user)

                return {
                    success: true,
                    message: 'User registered successfully',
                    user: createdUser
                }
            } catch (error) {
                // Handle validation errors
                if (error.isJoi) {
                    const messages = error.details.map((detail) => detail.message)
                    throw new GraphQLError('Validation failed', {
                        extensions: { code: 'BAD_USER_INPUT', validationErrors: messages }
                    })
                }

                console.error(error) // Log error for debugging
                throw new GraphQLError(error.message, {
                    extensions: {
                        code: error.extensions?.code || 'INTERNAL_SERVER_ERROR',
                        argumentName: error.extensions?.argumentName || null
                    }
                })
            }
        }
    }
}

module.exports = authResolvers