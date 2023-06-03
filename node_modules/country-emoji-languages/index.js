const data = require("./data.json");

/**
 * Check if provided code is a valid country code
 * @param {string} code
 */
function isValidCode(code) {
    return data.find((country) => country.country_code === code.toLowerCase()) ? true : false;
}

/**
 * Check if provided emoji is a valid country emoji
 * @param {string} emoji
 */
function isValidEmoji(emoji) {
    return data.find((country) => country.flag_emoji === emoji) ? true : false;
}

/**
 * Get languages from country code
 * @param {string} code
 */
function getLanguagesFromCode(code) {
    if (!code) throw new Error("Country Code is required");
    const value = data.find((country) => country.country_code === code.toLowerCase());
    return value ? value.languages : [];
}

/**
 * Get languages from country emoji
 * @param {string} emoji
 */
function getLanguagesFromEmoji(emoji) {
    if (!emoji) throw new Error("Emoji is required");
    const value = data.find((country) => country.flag_emoji === emoji);
    return value ? value.languages : [];
}

module.exports = {
    isValidCode,
    isValidEmoji,
    getLanguagesFromCode,
    getLanguagesFromEmoji,
};
