
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'https://my.pzdc.org',
    'port': '443',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'pzdc'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'pzdc_mypzdc',
    'user': 'pzdc_mypzdcuser',
    'pass': 'Explorer!1'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '21212',
    'user': 'pzdcrpc',
    'pass': 'someverysafepassword',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
