'use strict';

const axios = require('axios');
const sendMail = require('./sendMail.js');
const CONSTANTS = require('./constants');

module.exports.mmiAlert = async () => {
  const url =
    'https://api.smallcase.com/market/indices/marketMoodIndex/current';

  try {
    const response = await axios.get(url);
    const mmi = Math.trunc(response.data.data.currentValue);

    let zone;
    const extremeGreed = mmi > CONSTANTS.MMI_UPPER_BOUND;
    const extremeFear = mmi < CONSTANTS.MMI_LOWER_BOUND;

    if (extremeGreed) {
      zone = CONSTANTS.ZONES.GREED;
      await sendMail(zone, mmi);
    } else if (extremeFear) {
      zone = CONSTANTS.ZONES.FEAR;
      await sendMail(zone, mmi);
    }

    return null;
  } catch (error) {
    console.log('An error occurred:');
    console.log(error);
  }
};
