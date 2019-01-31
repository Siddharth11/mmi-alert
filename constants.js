const ZONES = {
  GREED: 'GREED',
  FEAR: 'FEAR',
};

const COLORS = {
  [ZONES.FEAR]: '#105e62',
  [ZONES.GREED]: '#b5525c',
};

const MESSAGING = {
  [ZONES.FEAR]:
    'A high extreme fear value (<20) suggests a good time to open fresh positions as markets are likely to be oversold and might turn upwards.',
  [ZONES.GREED]:
    'A high extreme greed (>80) suggests to be cautious in opening fresh positions as markets are overbought and likely to turn downwards.',
};

const MMI_UPPER_BOUND = 80;
const MMI_LOWER_BOUND = 20;

module.exports = {
  ZONES,
  COLORS,
  MESSAGING,
  MMI_UPPER_BOUND,
  MMI_LOWER_BOUND,
};
