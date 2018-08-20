
const params = {
  LAST_POW_BLOCK: 479
};

const avgBlockTime = 30; // 1.5 minutes (90 seconds)

const blocksPerDay = (24 * 60 * 60) / avgBlockTime; // 2880

const blocksPerWeek = blocksPerDay * 7;

const blocksPerMonth = (blocksPerDay * 365.25) / 12;

const blocksPerYear = blocksPerDay * 365.25;

const mncoins = 25000.0;

const getMNBlocksPerDay = (mns) => {
  return blocksPerDay / mns;
};

const getMNBlocksPerWeek = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 52);
};

const getMNBlocksPerMonth = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 12);
};

const getMNBlocksPerYear = (mns) => {
  return getMNBlocksPerDay(mns) * 365.25;
};

const getMNSubsidy = (nHeight = 0) => {
  const blockValue = getSubsidy(nHeight);

  if (nHeight === 0) {
      ret = 0;
  } else if (nHeight < 11520 && nHeight > 0) {
      ret = 0.5;
  } else if (nHeight < 20161 && nHeight >=11520 ) {
      ret = 7;
  } else if (nHeight < 25920 && nHeight >= 20161) {
      ret = 9;
  } else if (nHeight < 31680 && nHeight >= 25920) {
      ret = 11.2;
  } else if (nHeight < 37440 && nHeight >= 31680) {
      ret = 13.6;
  } else if (nHeight < 43200 && nHeight >= 37440) {
      ret = 16.2;
  } else if (nHeight < 48960 && nHeight >= 43200) {
      ret = 19;
  } else if (nHeight < 54720  && nHeight >= 48960) {
      ret = 47.5;
  } else if (nHeight < 60480 && nHeight >= 54720) {
      ret = 57;
  } else if (nHeight < 66240 && nHeight >= 60480) {
      ret = 66.5;
  } else if (nHeight < 72000 && nHeight >= 66240) {
      ret = 76;
  } else if (nHeight < 77760 && nHeight >= 72000) {
      ret = 85.5;
  } else if (nHeight < 83520 && nHeight >= 77760) {
      ret = 95;
  } else if (nHeight < 89280 && nHeight >= 83520) {
      ret = 237.5;
  } else if (nHeight < 95040 && nHeight >= 89200) {
      ret = 285;
  } else if (nHeight < 100800 && nHeight >= 95040) {
      ret = 332.5;
  } else if (nHeight < 106560 && nHeight >= 100800) {
      ret = 380;
  } else if (nHeight < 112320 && nHeight >= 106560) {
      ret = 475;
  } else if (nHeight < 118080 && nHeight >= 112320) {
      ret = 522.5;
  } else if (nHeight >= 118080) {
      ret = blockValue * 0.95;
  } else {
      ret = 0;
  }

  return ret;
};

const getSubsidy = (nHeight = 0) => {
  let nSubsidy = 0.0;

  if (nHeight === 0) {
    nSubsidy = 2100000.00;
  } else if (nHeight < 11520 && nHeight > 0) {
    nSubsidy = 1;
  } else if (nHeight < 20161 && nHeight >=11520 ) {
    nSubsidy =  10;
  } else if (nHeight < 25920 && nHeight >= 20161) {
    nSubsidy = 12;
  } else if (nHeight < 31680 && nHeight >= 25920) {
    nSubsidy = 14;
  } else if (nHeight < 37440 && nHeight >= 31680) {
    nSubsidy = 16;
  } else if (nHeight < 43200 && nHeight >= 37440) {
    nSubsidy = 18;
  } else if (nHeight < 48960 && nHeight >= 43200) {
    nSubsidy = 20;
  } else if (nHeight < 54720  && nHeight >= 48960) {
    nSubsidy = 50;
  } else if (nHeight < 60480 && nHeight >= 54720) {
    nSubsidy = 60;
  } else if (nHeight < 66240 && nHeight >= 60480) {
    nSubsidy = 70;
  } else if (nHeight < 72000 && nHeight >= 66240) {
    nSubsidy = 80;
  } else if (nHeight < 77760 && nHeight >= 72000) {
    nSubsidy = 90;
  } else if (nHeight < 83520 && nHeight >= 77760) {
    nSubsidy = 100;
  } else if (nHeight < 89280 && nHeight >= 83520) {
    nSubsidy = 250;
  } else if (nHeight < 95040 && nHeight >= 89200) {
    nSubsidy = 300;
  } else if (nHeight < 100800 && nHeight >= 95040) {
    nSubsidy = 350;
  } else if (nHeight < 106560 && nHeight >= 100800) {
    nSubsidy = 400;
  } else if (nHeight < 112320 && nHeight >= 106560) {
    nSubsidy = 500;
  } else if (nHeight < 118080 && nHeight >= 112320) {
    nSubsidy = 550;
  } else if (nHeight >= 118080) {
		nSubsidy = 550;
		nSubsidy -= (nSubsidy/100)*20;
		per= (int) ((nHeight-118080)/86400);

		for (int i=0; i<per; i++) {
			nSubsidy -= (nSubsidy/100)*20;
		}
  } else {
    nSubsidy = 0;
  }
  return nSubsidy;
};

const getROI = (subsidy, mns) => {
  return ((getMNBlocksPerYear(mns) * subsidy) / mncoins) * 100.0;
};

const isAddress = (s) => {
  return typeof(s) === 'string' && s.length === 34;
};

const isBlock = (s) => {
  return !isNaN(s) || (typeof(s) === 'string');
};

const isPoS = (b) => {
  return !!b && b.height > params.LAST_POW_BLOCK; // > 182700
};

const isTX = (s) => {
  return typeof(s) === 'string' && s.length === 64;
};

module.exports = {
  avgBlockTime,
  blocksPerDay,
  blocksPerMonth,
  blocksPerWeek,
  blocksPerYear,
  mncoins,
  params,
  getMNBlocksPerDay,
  getMNBlocksPerMonth,
  getMNBlocksPerWeek,
  getMNBlocksPerYear,
  getMNSubsidy,
  getSubsidy,
  getROI,
  isAddress,
  isBlock,
  isPoS,
  isTX
};
