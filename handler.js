'use strict';

const axios = require('axios');
const sendMail = require('./sendMail.js');
const { GREED, FEAR } = require('./zones.json');

module.exports.mmiAlert = async () => {
  const url =
    'https://api.smallcase.com/market/indices/marketMoodIndex/current';
  const upperBound = 80;
  const lowerBound = 20;

  try {
    const response = await axios.get(url);
    const mmi = Math.trunc(response.data.data.currentValue);

    let zone;
    const extremeGreed = mmi > upperBound;
    const extremeFear = mmi < lowerBound;

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
