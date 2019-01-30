'use strict';

const axios = require('axios');

module.exports.mmiAlert = async () => {
  const url = 'https://api.smallcase.com/market/indices/marketMoodIndex/current';

  try {
    const response = await axios.get(url);
    const { currentValue } = response.data.data;
    console.log(currentValue);
  } catch(error) {
    console.log('An error occurred:');
    console.log(error);
  }
};
