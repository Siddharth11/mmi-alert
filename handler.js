'use strict';

const axios = require('axios');
const sendMail = require('./sendMail.js');
const { GREED, FEAR } = require('./zones.json');

module.exports.mmiAlert = async () => {
  const url =
    'https://api.smallcase.com/market/indices/marketMoodIndex/current';

  try {
    const response = await axios.get(url);
    const mmi = Math.trunc(response.data.data.currentValue);

    let zone;
    const extremeGreed = mmi >= 71;
    const extremeFear = mmi <= 29;

    if (extremeGreed) {
      zone = GREED;
      await sendMail(zone, mmi);
    } else if (extremeFear) {
      zone = FEAR;
      await sendMail(zone, mmi);
    }

    return null;
  } catch (error) {
    console.log('An error occurred:');
    console.log(error);
  }
};
