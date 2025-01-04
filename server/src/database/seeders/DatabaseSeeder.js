module.exports = async (sequelize) => {
    await require("./UserSeeder")(sequelize);
}