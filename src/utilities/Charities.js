const charities = require('../../resources/data/UseThisDataForNow.json');

/**
 * Checks the lower case version and the title case version of
 * the input and if both are recognized as misspelled, returns
 * true.
 * @param {*} input word whose spelling is to be checked.
 */
module.exports.getRandomCharities = () => {
    return [charities[0].name, charities[1].name, charities[2].name];
};

// --------------- Utility functions -----------------------

