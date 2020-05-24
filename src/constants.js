export const API_ENDPOINT =
  'https://cors-anywhere.herokuapp.com/https://whispering-lake-90400.herokuapp.com';

export const CELL_SIZE = '15px';

export const STATE_CODE_TO_NAME = {
  WA: 'Washington',
  DE: 'Delaware',
  WI: 'Wisconsin',
  WV: 'West Virginia',
  FL: 'Florida',
  WY: 'Wyoming',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  TX: 'Texas',
  LA: 'Louisiana',
  NC: 'North Carolina',
  ND: 'North Dakota',
  NE: 'Nebraska',
  TN: 'Tennessee',
  NY: 'New York',
  PA: 'Pennsylvania',
  CA: 'California',
  NV: 'Nevada',
  VA: 'Virginia',
  CO: 'Colorado',
  AL: 'Alabama',
  AR: 'Arkansas',
  VT: 'Vermont',
  IL: 'Illinois',
  GA: 'Georgia',
  IN: 'Indiana',
  IA: 'Iowa',
  MA: 'Massachusetts',
  AZ: 'Arizona',
  ID: 'Idaho',
  CT: 'Connecticut',
  ME: 'Maine',
  MD: 'Maryland',
  OK: 'Oklahoma',
  OH: 'Ohio',
  UT: 'Utah',
  MO: 'Missouri',
  MN: 'Minnesota',
  MI: 'Michigan',
  RI: 'Rhode Island',
  KS: 'Kansas',
  MT: 'Montana',
  MS: 'Mississippi',
  SC: 'South Carolina',
  KY: 'Kentucky',
  OR: 'Oregon',
  SD: 'South Dakota',
};

export const STATE_CODE_TO_COLOR_INDEX = {
  WA: 0,
  DE: 0,
  WI: 0,
  WV: 0, // green
  FL: 0,
  WY: 0,
  NH: 1, // blue
  NJ: 2, // yellow
  NM: 2,
  TX: 3, // red
  LA: 0,
  NC: 3,
  ND: 0,
  NE: 2,
  TN: 0,
  NY: 0,
  PA: 1,
  CA: 3,
  NV: 1,
  VA: 2,
  CO: 3,
  AL: 2,
  AR: 2,
  VT: 2,
  IL: 2,
  GA: 1,
  IN: 0,
  IA: 1,
  MA: 3,
  AZ: 0,
  ID: 0,
  CT: 1,
  ME: 0,
  MD: 3,
  OK: 0,
  OH: 3,
  UT: 2,
  MO: 3,
  MN: 2,
  MI: 2,
  RI: 2,
  KS: 1,
  MT: 2,
  MS: 3,
  SC: 0,
  KY: 1,
  OR: 2,
  SD: 3,
};

const DISTRICT_COLORS = [
  '#D8334A',
  '#48CFAD',
  '#4FC1E9',
  '#FFCE54',
  '#AC92EC',
  '#FC6E51',
  '#BAA286',
  '#5D9CEC',
  '#EC87C0',
  '#8E8271',
];

export const GET_DISTRICT_COLOR = districtCode =>
  DISTRICT_COLORS[
    parseInt(districtCode.split('-')[1]) % DISTRICT_COLORS.length
  ];
