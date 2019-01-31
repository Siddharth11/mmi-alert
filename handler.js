'use strict';

const axios = require('axios');
const sendMail = require('./sendMail.js');
const { GREED, FEAR } = require('./zones.json');

module.exports.mmiAlert = async () => {
  const url =
    'https://api.smallcase.com/market/indices/marketMoodIndex/current';

  try {
    const response = await axios.get(url);
    const currentValue = Math.trunc(response.data.data.currentValue);

    let zone;
    const extremeGreed = currentValue >= 71;
    const extremeFear = currentValue <= 29;

    if (extremeGreed) {
      zone = GREED;
      sendMail(zone, currentValue);
    } else if (extremeFear) {
      zone = FEAR;
      sendMail(zone, currentValue);
    }

    return null;
  } catch (error) {
    console.log('An error occurred:');
    console.log(error);
  }
};
