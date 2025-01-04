const crypto = require('crypto');
const generateRandomString = (myLength) => {
    const chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
    const randomArray = Array.from(
        {length: myLength},
        (v, k) => chars[Math.floor(Math.random() * chars.length)]
    );
    return randomArray.join("");
};

module.exports.generateRandomString = generateRandomString;

function genUsername(data) {
    return (data.toLowerCase()).replace(/[^a-zA-Z]/g, "") + generateRandomString(10).toLowerCase().replace(/[^a-zA-Z]/g, "");
}

module.exports.genUsername = genUsername;

/**
 * Generates a tracking ID based on the last insert ID and an optional token type.
 *
 * @param {number} lastInsertId - The last insert ID.
 * @param {string} [tokenType=''] - The optional token type. Defaults to an empty string.
 * @return {string} The generated tracking ID.
 */
const generateTrackingId = (lastInsertId, tokenType = '') => {
    const zerosString = '1' + '0'.repeat(String(lastInsertId).length);
    const randomPart = crypto.randomInt(parseInt(zerosString.slice(0, -1)), parseInt(zerosString));
    const idString = lastInsertId + randomPart ;
    return `${tokenType}${String(idString).padStart(6, '0')}`;
};

module.exports.generateTrackingId = generateTrackingId