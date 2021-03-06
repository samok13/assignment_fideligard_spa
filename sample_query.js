var rawData = {
  "query": {
    "count": 252,
    "created": "2016-03-29T13:10:07Z",
    "lang": "en-US",
    "diagnostics": {
      "url": [
        {
          "execution-start-time": "0",
          "execution-stop-time": "1",
          "execution-time": "1",
          "proxy": "DEFAULT",
          "content": "http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"
        },
        {
          "execution-start-time": "5",
          "execution-stop-time": "27",
          "execution-time": "22",
          "proxy": "DEFAULT",
          "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=AAPL"
        },
        {
          "execution-start-time": "31",
          "execution-stop-time": "33",
          "execution-time": "2",
          "proxy": "DEFAULT",
          "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=AAPL"
        }
      ],
      "publiclyCallable": "true",
      "cache": [
        {
          "execution-start-time": "4",
          "execution-stop-time": "4",
          "execution-time": "0",
          "method": "GET",
          "type": "MEMCACHED",
          "content": "f756d73c9b6c7b01a1d7f9c2ff5f9809"
        },
        {
          "execution-start-time": "30",
          "execution-stop-time": "30",
          "execution-time": "0",
          "method": "GET",
          "type": "MEMCACHED",
          "content": "230584bed0cbcab0d8e6f863db02c098"
        }
      ],
      "query": [
        {
          "execution-start-time": "4",
          "execution-stop-time": "29",
          "execution-time": "25",
          "params": "{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=AAPL]}",
          "content": "select * from csv(0,1) where url=@url"
        },
        {
          "execution-start-time": "30",
          "execution-stop-time": "35",
          "execution-time": "5",
          "params": "{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=AAPL]}",
          "content": "select * from csv(2,0) where url=@url and columns=@columnsNames"
        }
      ],
      "javascript": {
        "execution-start-time": "3",
        "execution-stop-time": "859",
        "execution-time": "856",
        "instructions-used": "24196236",
        "table-name": "yahoo.finance.historicaldata"
      },
      "user-time": "863",
      "service-time": "25",
      "build-version": "0.2.426"
    },
    "results": {
      "quote": [
        {
          "Symbol": "AAPL",
          "Date": "2014-12-31",
          "Open": "112.82",
          "High": "113.129997",
          "Low": "110.209999",
          "Close": "110.379997",
          "Volume": "41403400",
          "Adj_Close": "107.94507"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-30",
          "Open": "113.639999",
          "High": "113.919998",
          "Low": "112.110001",
          "Close": "112.519997",
          "Volume": "29881500",
          "Adj_Close": "110.037862"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-29",
          "Open": "113.790001",
          "High": "114.769997",
          "Low": "113.699997",
          "Close": "113.910004",
          "Volume": "27598900",
          "Adj_Close": "111.397206"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-26",
          "Open": "112.099998",
          "High": "114.519997",
          "Low": "112.010002",
          "Close": "113.989998",
          "Volume": "33721000",
          "Adj_Close": "111.475435"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-24",
          "Open": "112.580002",
          "High": "112.709999",
          "Low": "112.010002",
          "Close": "112.010002",
          "Volume": "14479600",
          "Adj_Close": "109.539117"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-23",
          "Open": "113.230003",
          "High": "113.330002",
          "Low": "112.459999",
          "Close": "112.540001",
          "Volume": "26028400",
          "Adj_Close": "110.057425"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-22",
          "Open": "112.160004",
          "High": "113.489998",
          "Low": "111.970001",
          "Close": "112.940002",
          "Volume": "45167500",
          "Adj_Close": "110.448602"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-19",
          "Open": "112.260002",
          "High": "113.239998",
          "Low": "111.660004",
          "Close": "111.779999",
          "Volume": "88429800",
          "Adj_Close": "109.314188"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-18",
          "Open": "111.870003",
          "High": "112.650002",
          "Low": "110.660004",
          "Close": "112.650002",
          "Volume": "59006200",
          "Adj_Close": "110.164999"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-17",
          "Open": "107.120003",
          "High": "109.839996",
          "Low": "106.82",
          "Close": "109.410004",
          "Volume": "53411800",
          "Adj_Close": "106.996474"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-16",
          "Open": "106.370003",
          "High": "110.160004",
          "Low": "106.260002",
          "Close": "106.75",
          "Volume": "60790700",
          "Adj_Close": "104.395148"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-15",
          "Open": "110.699997",
          "High": "111.599998",
          "Low": "106.349998",
          "Close": "108.230003",
          "Volume": "67218100",
          "Adj_Close": "105.842504"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-12",
          "Open": "110.459999",
          "High": "111.870003",
          "Low": "109.580002",
          "Close": "109.730003",
          "Volume": "56028100",
          "Adj_Close": "107.309414"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-11",
          "Open": "112.260002",
          "High": "113.800003",
          "Low": "111.339996",
          "Close": "111.620003",
          "Volume": "41401700",
          "Adj_Close": "109.157721"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-10",
          "Open": "114.410004",
          "High": "114.849998",
          "Low": "111.540001",
          "Close": "111.949997",
          "Volume": "44565300",
          "Adj_Close": "109.480436"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-09",
          "Open": "110.190002",
          "High": "114.300003",
          "Low": "109.349998",
          "Close": "114.120003",
          "Volume": "60208000",
          "Adj_Close": "111.602573"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-08",
          "Open": "114.099998",
          "High": "114.650002",
          "Low": "111.620003",
          "Close": "112.400002",
          "Volume": "57664900",
          "Adj_Close": "109.920514"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-05",
          "Open": "115.989998",
          "High": "116.080002",
          "Low": "114.639999",
          "Close": "115.00",
          "Volume": "38318900",
          "Adj_Close": "112.463157"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-04",
          "Open": "115.769997",
          "High": "117.199997",
          "Low": "115.290001",
          "Close": "115.489998",
          "Volume": "42044500",
          "Adj_Close": "112.942346"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-03",
          "Open": "115.75",
          "High": "116.349998",
          "Low": "115.110001",
          "Close": "115.93",
          "Volume": "43063400",
          "Adj_Close": "113.372642"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-02",
          "Open": "113.50",
          "High": "115.75",
          "Low": "112.75",
          "Close": "114.629997",
          "Volume": "59348900",
          "Adj_Close": "112.101317"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-01",
          "Open": "118.809998",
          "High": "119.25",
          "Low": "111.269997",
          "Close": "115.07",
          "Volume": "83814000",
          "Adj_Close": "112.531613"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-28",
          "Open": "119.269997",
          "High": "119.400002",
          "Low": "118.050003",
          "Close": "118.93",
          "Volume": "24814400",
          "Adj_Close": "116.306464"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-26",
          "Open": "117.940002",
          "High": "119.099998",
          "Low": "117.830002",
          "Close": "119.00",
          "Volume": "40768300",
          "Adj_Close": "116.374919"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-25",
          "Open": "119.07",
          "High": "119.75",
          "Low": "117.449997",
          "Close": "117.599998",
          "Volume": "68840400",
          "Adj_Close": "115.005801"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-24",
          "Open": "116.849998",
          "High": "118.769997",
          "Low": "116.620003",
          "Close": "118.629997",
          "Volume": "47450800",
          "Adj_Close": "116.013079"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-21",
          "Open": "117.510002",
          "High": "117.57",
          "Low": "116.029999",
          "Close": "116.470001",
          "Volume": "57179300",
          "Adj_Close": "113.900731"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-20",
          "Open": "114.910004",
          "High": "116.860001",
          "Low": "114.849998",
          "Close": "116.309998",
          "Volume": "43395500",
          "Adj_Close": "113.744257"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-19",
          "Open": "115.440002",
          "High": "115.739998",
          "Low": "113.800003",
          "Close": "114.669998",
          "Volume": "41869200",
          "Adj_Close": "112.140435"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-18",
          "Open": "113.940002",
          "High": "115.690002",
          "Low": "113.889999",
          "Close": "115.470001",
          "Volume": "44224000",
          "Adj_Close": "112.922791"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-17",
          "Open": "114.269997",
          "High": "117.279999",
          "Low": "113.300003",
          "Close": "113.989998",
          "Volume": "46746700",
          "Adj_Close": "111.475435"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-14",
          "Open": "113.150002",
          "High": "114.190002",
          "Low": "111.209999",
          "Close": "114.18",
          "Volume": "44063600",
          "Adj_Close": "111.661247"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-13",
          "Open": "111.800003",
          "High": "113.449997",
          "Low": "111.599998",
          "Close": "112.82",
          "Volume": "59522900",
          "Adj_Close": "110.331247"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-12",
          "Open": "109.379997",
          "High": "111.43",
          "Low": "109.370003",
          "Close": "111.25",
          "Volume": "46942400",
          "Adj_Close": "108.795881"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-11",
          "Open": "108.699997",
          "High": "109.75",
          "Low": "108.400002",
          "Close": "109.699997",
          "Volume": "27442300",
          "Adj_Close": "107.28007"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-10",
          "Open": "109.019997",
          "High": "109.330002",
          "Low": "108.669998",
          "Close": "108.830002",
          "Volume": "27195500",
          "Adj_Close": "106.429266"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-07",
          "Open": "108.75",
          "High": "109.32",
          "Low": "108.550003",
          "Close": "109.010002",
          "Volume": "33691500",
          "Adj_Close": "106.605296"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-06",
          "Open": "108.599998",
          "High": "108.790001",
          "Low": "107.800003",
          "Close": "108.699997",
          "Volume": "34968500",
          "Adj_Close": "106.302129"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-05",
          "Open": "109.099998",
          "High": "109.300003",
          "Low": "108.129997",
          "Close": "108.860001",
          "Volume": "37435900",
          "Adj_Close": "105.998973"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-04",
          "Open": "109.360001",
          "High": "109.489998",
          "Low": "107.720001",
          "Close": "108.599998",
          "Volume": "41574400",
          "Adj_Close": "105.745804"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-03",
          "Open": "108.220001",
          "High": "110.300003",
          "Low": "108.010002",
          "Close": "109.400002",
          "Volume": "52282600",
          "Adj_Close": "106.524782"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-31",
          "Open": "108.010002",
          "High": "108.040001",
          "Low": "107.209999",
          "Close": "108.00",
          "Volume": "44639300",
          "Adj_Close": "105.161575"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-30",
          "Open": "106.959999",
          "High": "107.349998",
          "Low": "105.900002",
          "Close": "106.980003",
          "Volume": "40654800",
          "Adj_Close": "104.168385"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-29",
          "Open": "106.650002",
          "High": "107.370003",
          "Low": "106.360001",
          "Close": "107.339996",
          "Volume": "52687900",
          "Adj_Close": "104.518917"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-28",
          "Open": "105.400002",
          "High": "106.739998",
          "Low": "105.349998",
          "Close": "106.739998",
          "Volume": "48060900",
          "Adj_Close": "103.934688"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-27",
          "Open": "104.849998",
          "High": "105.480003",
          "Low": "104.699997",
          "Close": "105.110001",
          "Volume": "34187700",
          "Adj_Close": "102.34753"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-24",
          "Open": "105.18",
          "High": "105.489998",
          "Low": "104.529999",
          "Close": "105.220001",
          "Volume": "47053900",
          "Adj_Close": "102.454639"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-23",
          "Open": "104.080002",
          "High": "105.050003",
          "Low": "103.629997",
          "Close": "104.830002",
          "Volume": "71074700",
          "Adj_Close": "102.07489"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-22",
          "Open": "102.839996",
          "High": "104.110001",
          "Low": "102.599998",
          "Close": "102.989998",
          "Volume": "68263100",
          "Adj_Close": "100.283244"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-21",
          "Open": "103.019997",
          "High": "103.019997",
          "Low": "101.269997",
          "Close": "102.470001",
          "Volume": "94623900",
          "Adj_Close": "99.776914"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-20",
          "Open": "98.32",
          "High": "99.959999",
          "Low": "98.220001",
          "Close": "99.760002",
          "Volume": "77517300",
          "Adj_Close": "97.138138"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-17",
          "Open": "97.50",
          "High": "99.00",
          "Low": "96.809998",
          "Close": "97.669998",
          "Volume": "68179700",
          "Adj_Close": "95.103063"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-16",
          "Open": "95.550003",
          "High": "97.720001",
          "Low": "95.410004",
          "Close": "96.260002",
          "Volume": "72154500",
          "Adj_Close": "93.730124"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-15",
          "Open": "97.970001",
          "High": "99.150002",
          "Low": "95.18",
          "Close": "97.540001",
          "Volume": "100933600",
          "Adj_Close": "94.976482"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-14",
          "Open": "100.389999",
          "High": "100.519997",
          "Low": "98.57",
          "Close": "98.75",
          "Volume": "63688600",
          "Adj_Close": "96.154681"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-13",
          "Open": "101.330002",
          "High": "101.779999",
          "Low": "99.809998",
          "Close": "99.809998",
          "Volume": "53583400",
          "Adj_Close": "97.18682"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-10",
          "Open": "100.690002",
          "High": "102.029999",
          "Low": "100.300003",
          "Close": "100.730003",
          "Volume": "66331600",
          "Adj_Close": "98.082646"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-09",
          "Open": "101.540001",
          "High": "102.379997",
          "Low": "100.610001",
          "Close": "101.019997",
          "Volume": "77376500",
          "Adj_Close": "98.365018"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-08",
          "Open": "98.760002",
          "High": "101.110001",
          "Low": "98.309998",
          "Close": "100.800003",
          "Volume": "57404700",
          "Adj_Close": "98.150806"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-07",
          "Open": "99.43",
          "High": "100.120003",
          "Low": "98.730003",
          "Close": "98.75",
          "Volume": "42094200",
          "Adj_Close": "96.154681"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-06",
          "Open": "99.949997",
          "High": "100.650002",
          "Low": "99.419998",
          "Close": "99.620003",
          "Volume": "37051200",
          "Adj_Close": "97.001818"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-03",
          "Open": "99.440002",
          "High": "100.209999",
          "Low": "99.040001",
          "Close": "99.620003",
          "Volume": "43469600",
          "Adj_Close": "97.001818"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-02",
          "Open": "99.269997",
          "High": "100.220001",
          "Low": "98.040001",
          "Close": "99.900002",
          "Volume": "47757800",
          "Adj_Close": "97.274458"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-01",
          "Open": "100.589996",
          "High": "100.690002",
          "Low": "98.699997",
          "Close": "99.18",
          "Volume": "51491300",
          "Adj_Close": "96.57338"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-30",
          "Open": "100.809998",
          "High": "101.540001",
          "Low": "100.529999",
          "Close": "100.75",
          "Volume": "55264100",
          "Adj_Close": "98.102117"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-29",
          "Open": "98.650002",
          "High": "100.440002",
          "Low": "98.629997",
          "Close": "100.110001",
          "Volume": "49766300",
          "Adj_Close": "97.478938"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-26",
          "Open": "98.529999",
          "High": "100.75",
          "Low": "98.400002",
          "Close": "100.75",
          "Volume": "62370500",
          "Adj_Close": "98.102117"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-25",
          "Open": "100.510002",
          "High": "100.709999",
          "Low": "97.720001",
          "Close": "97.870003",
          "Volume": "100092000",
          "Adj_Close": "95.297811"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-24",
          "Open": "102.160004",
          "High": "102.849998",
          "Low": "101.199997",
          "Close": "101.75",
          "Volume": "60171800",
          "Adj_Close": "99.075836"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-23",
          "Open": "100.599998",
          "High": "102.940002",
          "Low": "100.540001",
          "Close": "102.639999",
          "Volume": "63402200",
          "Adj_Close": "99.942444"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-22",
          "Open": "101.800003",
          "High": "102.139999",
          "Low": "100.580002",
          "Close": "101.059998",
          "Volume": "52788400",
          "Adj_Close": "98.403968"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-19",
          "Open": "102.290001",
          "High": "102.349998",
          "Low": "100.50",
          "Close": "100.959999",
          "Volume": "70902400",
          "Adj_Close": "98.306597"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-18",
          "Open": "101.93",
          "High": "102.349998",
          "Low": "101.559998",
          "Close": "101.790001",
          "Volume": "37299400",
          "Adj_Close": "99.114785"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-17",
          "Open": "101.269997",
          "High": "101.800003",
          "Low": "100.589996",
          "Close": "101.580002",
          "Volume": "60926500",
          "Adj_Close": "98.910305"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-16",
          "Open": "99.800003",
          "High": "101.260002",
          "Low": "98.889999",
          "Close": "100.860001",
          "Volume": "66908100",
          "Adj_Close": "98.209227"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-15",
          "Open": "102.809998",
          "High": "103.050003",
          "Low": "101.440002",
          "Close": "101.629997",
          "Volume": "61316500",
          "Adj_Close": "98.958987"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-12",
          "Open": "101.209999",
          "High": "102.190002",
          "Low": "101.080002",
          "Close": "101.660004",
          "Volume": "62626100",
          "Adj_Close": "98.988204"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-11",
          "Open": "100.410004",
          "High": "101.440002",
          "Low": "99.620003",
          "Close": "101.43",
          "Volume": "62353100",
          "Adj_Close": "98.764246"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-10",
          "Open": "98.010002",
          "High": "101.110001",
          "Low": "97.760002",
          "Close": "101.00",
          "Volume": "100869600",
          "Adj_Close": "98.345547"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-09",
          "Open": "99.080002",
          "High": "103.080002",
          "Low": "96.139999",
          "Close": "97.989998",
          "Volume": "189846300",
          "Adj_Close": "95.414653"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-08",
          "Open": "99.300003",
          "High": "99.309998",
          "Low": "98.050003",
          "Close": "98.360001",
          "Volume": "46356700",
          "Adj_Close": "95.774931"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-05",
          "Open": "98.800003",
          "High": "99.389999",
          "Low": "98.309998",
          "Close": "98.970001",
          "Volume": "58457000",
          "Adj_Close": "96.3689"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-04",
          "Open": "98.849998",
          "High": "100.089996",
          "Low": "97.790001",
          "Close": "98.120003",
          "Volume": "85718000",
          "Adj_Close": "95.541241"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-03",
          "Open": "103.099998",
          "High": "103.199997",
          "Low": "98.580002",
          "Close": "98.940002",
          "Volume": "125421000",
          "Adj_Close": "96.33969"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-02",
          "Open": "103.059998",
          "High": "103.739998",
          "Low": "102.720001",
          "Close": "103.300003",
          "Volume": "53564000",
          "Adj_Close": "100.585102"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-29",
          "Open": "102.860001",
          "High": "102.900002",
          "Low": "102.199997",
          "Close": "102.50",
          "Volume": "44595000",
          "Adj_Close": "99.806124"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-28",
          "Open": "101.589996",
          "High": "102.779999",
          "Low": "101.559998",
          "Close": "102.25",
          "Volume": "68460000",
          "Adj_Close": "99.562695"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-27",
          "Open": "101.019997",
          "High": "102.57",
          "Low": "100.699997",
          "Close": "102.129997",
          "Volume": "52369000",
          "Adj_Close": "99.445846"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-26",
          "Open": "101.419998",
          "High": "101.50",
          "Low": "100.860001",
          "Close": "100.889999",
          "Volume": "33152000",
          "Adj_Close": "98.238437"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-25",
          "Open": "101.790001",
          "High": "102.169998",
          "Low": "101.279999",
          "Close": "101.540001",
          "Volume": "40270000",
          "Adj_Close": "98.871356"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-22",
          "Open": "100.290001",
          "High": "101.470001",
          "Low": "100.190002",
          "Close": "101.32",
          "Volume": "44184000",
          "Adj_Close": "98.657136"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-21",
          "Open": "100.57",
          "High": "100.940002",
          "Low": "100.110001",
          "Close": "100.580002",
          "Volume": "33478000",
          "Adj_Close": "97.936587"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-20",
          "Open": "100.440002",
          "High": "101.089996",
          "Low": "99.949997",
          "Close": "100.57",
          "Volume": "52699000",
          "Adj_Close": "97.926848"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-19",
          "Open": "99.410004",
          "High": "100.68",
          "Low": "99.32",
          "Close": "100.529999",
          "Volume": "69399000",
          "Adj_Close": "97.887898"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-18",
          "Open": "98.489998",
          "High": "99.370003",
          "Low": "97.980003",
          "Close": "99.160004",
          "Volume": "47572000",
          "Adj_Close": "96.553909"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-15",
          "Open": "97.900002",
          "High": "98.190002",
          "Low": "96.860001",
          "Close": "97.980003",
          "Volume": "48951000",
          "Adj_Close": "95.404921"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-14",
          "Open": "97.330002",
          "High": "97.57",
          "Low": "96.800003",
          "Close": "97.50",
          "Volume": "28116000",
          "Adj_Close": "94.937533"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-13",
          "Open": "96.150002",
          "High": "97.239998",
          "Low": "96.040001",
          "Close": "97.239998",
          "Volume": "31916000",
          "Adj_Close": "94.684364"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-12",
          "Open": "96.040001",
          "High": "96.879997",
          "Low": "95.610001",
          "Close": "95.970001",
          "Volume": "33795000",
          "Adj_Close": "93.447745"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-11",
          "Open": "95.269997",
          "High": "96.080002",
          "Low": "94.839996",
          "Close": "95.989998",
          "Volume": "36585000",
          "Adj_Close": "93.467216"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-08",
          "Open": "94.260002",
          "High": "94.82",
          "Low": "93.279999",
          "Close": "94.739998",
          "Volume": "41865000",
          "Adj_Close": "92.250068"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-07",
          "Open": "94.93",
          "High": "95.949997",
          "Low": "94.099998",
          "Close": "94.480003",
          "Volume": "46711000",
          "Adj_Close": "91.996907"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-06",
          "Open": "94.75",
          "High": "95.480003",
          "Low": "94.709999",
          "Close": "94.959999",
          "Volume": "38558000",
          "Adj_Close": "92.006638"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-05",
          "Open": "95.360001",
          "High": "95.68",
          "Low": "94.360001",
          "Close": "95.120003",
          "Volume": "55933000",
          "Adj_Close": "92.161665"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-04",
          "Open": "96.370003",
          "High": "96.580002",
          "Low": "95.169998",
          "Close": "95.589996",
          "Volume": "39958000",
          "Adj_Close": "92.617042"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-01",
          "Open": "94.900002",
          "High": "96.620003",
          "Low": "94.809998",
          "Close": "96.129997",
          "Volume": "48511000",
          "Adj_Close": "93.140248"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-31",
          "Open": "97.160004",
          "High": "97.449997",
          "Low": "95.330002",
          "Close": "95.599998",
          "Volume": "56843000",
          "Adj_Close": "92.626733"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-30",
          "Open": "98.440002",
          "High": "98.699997",
          "Low": "97.669998",
          "Close": "98.150002",
          "Volume": "33010000",
          "Adj_Close": "95.097428"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-29",
          "Open": "99.330002",
          "High": "99.440002",
          "Low": "98.25",
          "Close": "98.379997",
          "Volume": "43143000",
          "Adj_Close": "95.32027"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-28",
          "Open": "97.82",
          "High": "99.239998",
          "Low": "97.550003",
          "Close": "99.019997",
          "Volume": "55318000",
          "Adj_Close": "95.940365"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-25",
          "Open": "96.849998",
          "High": "97.839996",
          "Low": "96.639999",
          "Close": "97.669998",
          "Volume": "43469000",
          "Adj_Close": "94.632353"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-24",
          "Open": "97.040001",
          "High": "97.32",
          "Low": "96.419998",
          "Close": "97.029999",
          "Volume": "45729000",
          "Adj_Close": "94.012258"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-23",
          "Open": "95.419998",
          "High": "97.879997",
          "Low": "95.169998",
          "Close": "97.190002",
          "Volume": "92918000",
          "Adj_Close": "94.167286"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-22",
          "Open": "94.68",
          "High": "94.889999",
          "Low": "94.120003",
          "Close": "94.720001",
          "Volume": "55197000",
          "Adj_Close": "91.774104"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-21",
          "Open": "94.989998",
          "High": "95.00",
          "Low": "93.720001",
          "Close": "93.940002",
          "Volume": "39079000",
          "Adj_Close": "91.018364"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-18",
          "Open": "93.620003",
          "High": "94.739998",
          "Low": "93.019997",
          "Close": "94.43",
          "Volume": "49988000",
          "Adj_Close": "91.493123"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-17",
          "Open": "95.029999",
          "High": "95.279999",
          "Low": "92.57",
          "Close": "93.089996",
          "Volume": "57298000",
          "Adj_Close": "90.194794"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-16",
          "Open": "96.970001",
          "High": "97.099998",
          "Low": "94.739998",
          "Close": "94.779999",
          "Volume": "53396300",
          "Adj_Close": "91.832236"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-15",
          "Open": "96.800003",
          "High": "96.849998",
          "Low": "95.029999",
          "Close": "95.32",
          "Volume": "45477900",
          "Adj_Close": "92.355442"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-14",
          "Open": "95.860001",
          "High": "96.889999",
          "Low": "95.650002",
          "Close": "96.449997",
          "Volume": "42810000",
          "Adj_Close": "93.450295"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-11",
          "Open": "95.360001",
          "High": "95.889999",
          "Low": "94.860001",
          "Close": "95.220001",
          "Volume": "34018000",
          "Adj_Close": "92.258554"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-10",
          "Open": "93.760002",
          "High": "95.550003",
          "Low": "93.519997",
          "Close": "95.040001",
          "Volume": "39686000",
          "Adj_Close": "92.084152"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-09",
          "Open": "95.440002",
          "High": "95.949997",
          "Low": "94.760002",
          "Close": "95.389999",
          "Volume": "36436000",
          "Adj_Close": "92.423265"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-08",
          "Open": "96.269997",
          "High": "96.800003",
          "Low": "93.919998",
          "Close": "95.349998",
          "Volume": "65222000",
          "Adj_Close": "92.384508"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-07",
          "Open": "94.139999",
          "High": "95.989998",
          "Low": "94.099998",
          "Close": "95.970001",
          "Volume": "56468000",
          "Adj_Close": "92.985228"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-03",
          "Open": "93.669998",
          "High": "94.099998",
          "Low": "93.199997",
          "Close": "94.029999",
          "Volume": "22891800",
          "Adj_Close": "91.105562"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-02",
          "Open": "93.870003",
          "High": "94.059998",
          "Low": "93.089996",
          "Close": "93.480003",
          "Volume": "28465000",
          "Adj_Close": "90.572672"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-01",
          "Open": "93.519997",
          "High": "94.07",
          "Low": "93.129997",
          "Close": "93.519997",
          "Volume": "38223000",
          "Adj_Close": "90.611421"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-30",
          "Open": "92.099998",
          "High": "93.730003",
          "Low": "92.089996",
          "Close": "92.93",
          "Volume": "49482300",
          "Adj_Close": "90.039774"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-27",
          "Open": "90.82",
          "High": "92.00",
          "Low": "90.769997",
          "Close": "91.980003",
          "Volume": "64029000",
          "Adj_Close": "89.119323"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-26",
          "Open": "90.370003",
          "High": "91.050003",
          "Low": "89.800003",
          "Close": "90.900002",
          "Volume": "32629000",
          "Adj_Close": "88.072911"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-25",
          "Open": "90.209999",
          "High": "90.699997",
          "Low": "89.650002",
          "Close": "90.360001",
          "Volume": "36869000",
          "Adj_Close": "87.549705"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-24",
          "Open": "90.75",
          "High": "91.739998",
          "Low": "90.190002",
          "Close": "90.279999",
          "Volume": "39036000",
          "Adj_Close": "87.472191"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-23",
          "Open": "91.32",
          "High": "91.620003",
          "Low": "90.599998",
          "Close": "90.830002",
          "Volume": "43694000",
          "Adj_Close": "88.005088"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-20",
          "Open": "91.849998",
          "High": "92.550003",
          "Low": "90.900002",
          "Close": "90.910004",
          "Volume": "100898000",
          "Adj_Close": "88.082602"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-19",
          "Open": "92.290001",
          "High": "92.300003",
          "Low": "91.339996",
          "Close": "91.860001",
          "Volume": "35528000",
          "Adj_Close": "89.003053"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-18",
          "Open": "92.269997",
          "High": "92.290001",
          "Low": "91.349998",
          "Close": "92.18",
          "Volume": "33514000",
          "Adj_Close": "89.3131"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-17",
          "Open": "92.309998",
          "High": "92.699997",
          "Low": "91.800003",
          "Close": "92.080002",
          "Volume": "29726000",
          "Adj_Close": "89.216212"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-16",
          "Open": "91.510002",
          "High": "92.75",
          "Low": "91.449997",
          "Close": "92.199997",
          "Volume": "35561000",
          "Adj_Close": "89.332475"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-13",
          "Open": "92.199997",
          "High": "92.440002",
          "Low": "90.879997",
          "Close": "91.279999",
          "Volume": "54525000",
          "Adj_Close": "88.44109"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-12",
          "Open": "94.040001",
          "High": "94.120003",
          "Low": "91.900002",
          "Close": "92.290001",
          "Volume": "54749000",
          "Adj_Close": "89.41968"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-11",
          "Open": "94.129997",
          "High": "94.760002",
          "Low": "93.470001",
          "Close": "93.860001",
          "Volume": "45681000",
          "Adj_Close": "90.940851"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-10",
          "Open": "94.730003",
          "High": "95.050003",
          "Low": "93.57",
          "Close": "94.25",
          "Volume": "62777000",
          "Adj_Close": "91.318721"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-09",
          "Open": "92.699997",
          "High": "93.879997",
          "Low": "91.75",
          "Close": "93.699997",
          "Volume": "75415000",
          "Adj_Close": "90.785823"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-06",
          "Open": "649.900002",
          "High": "651.259979",
          "Low": "644.470024",
          "Close": "645.570023",
          "Volume": "87484600",
          "Adj_Close": "89.356011"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-05",
          "Open": "646.199997",
          "High": "649.370003",
          "Low": "642.610008",
          "Close": "647.349983",
          "Volume": "75951400",
          "Adj_Close": "89.602383"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-04",
          "Open": "637.44001",
          "High": "647.890022",
          "Low": "636.109993",
          "Close": "644.819992",
          "Volume": "83870500",
          "Adj_Close": "89.252197"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-03",
          "Open": "628.459991",
          "High": "638.740013",
          "Low": "628.25",
          "Close": "637.539986",
          "Volume": "73177300",
          "Adj_Close": "88.244541"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-02",
          "Open": "633.959984",
          "High": "634.830017",
          "Low": "622.500015",
          "Close": "628.650009",
          "Volume": "92337700",
          "Adj_Close": "87.014043"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-30",
          "Open": "637.979996",
          "High": "644.169991",
          "Low": "628.900002",
          "Close": "633.000015",
          "Volume": "141005200",
          "Adj_Close": "87.616145"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-29",
          "Open": "627.849991",
          "High": "636.87001",
          "Low": "627.769989",
          "Close": "635.37999",
          "Volume": "94118500",
          "Adj_Close": "87.945567"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-28",
          "Open": "626.019989",
          "High": "629.830009",
          "Low": "623.779991",
          "Close": "624.01001",
          "Volume": "78870400",
          "Adj_Close": "86.371801"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-27",
          "Open": "615.879997",
          "High": "625.859985",
          "Low": "615.630005",
          "Close": "625.63002",
          "Volume": "87216500",
          "Adj_Close": "86.596033"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-23",
          "Open": "607.25",
          "High": "614.730011",
          "Low": "606.470009",
          "Close": "614.129997",
          "Volume": "58052400",
          "Adj_Close": "85.004268"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-22",
          "Open": "606.599998",
          "High": "609.850006",
          "Low": "604.100021",
          "Close": "607.269974",
          "Volume": "50190000",
          "Adj_Close": "84.054744"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-21",
          "Open": "603.830002",
          "High": "606.699974",
          "Low": "602.059975",
          "Close": "606.310005",
          "Volume": "49214900",
          "Adj_Close": "83.92187"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-20",
          "Open": "604.510017",
          "High": "606.399994",
          "Low": "600.730011",
          "Close": "604.710022",
          "Volume": "58709000",
          "Adj_Close": "83.70041"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-19",
          "Open": "597.849998",
          "High": "607.330002",
          "Low": "597.329987",
          "Close": "604.590019",
          "Volume": "79438800",
          "Adj_Close": "83.6838"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-16",
          "Open": "588.629974",
          "High": "597.529991",
          "Low": "585.399994",
          "Close": "597.510017",
          "Volume": "69064100",
          "Adj_Close": "82.703828"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-15",
          "Open": "594.70002",
          "High": "596.599983",
          "Low": "588.040001",
          "Close": "588.819992",
          "Volume": "57711500",
          "Adj_Close": "81.501005"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-14",
          "Open": "592.430008",
          "High": "597.400002",
          "Low": "591.740005",
          "Close": "593.869987",
          "Volume": "41601000",
          "Adj_Close": "82.199996"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-13",
          "Open": "591.999985",
          "High": "594.540016",
          "Low": "590.699982",
          "Close": "593.760025",
          "Volume": "39934300",
          "Adj_Close": "82.184776"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-12",
          "Open": "587.489975",
          "High": "593.659996",
          "Low": "587.399986",
          "Close": "592.830017",
          "Volume": "53302200",
          "Adj_Close": "82.05605"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-09",
          "Open": "584.540001",
          "High": "586.25",
          "Low": "580.330025",
          "Close": "585.540024",
          "Volume": "72899400",
          "Adj_Close": "81.047012"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-08",
          "Open": "588.249992",
          "High": "594.410027",
          "Low": "586.400017",
          "Close": "587.990013",
          "Volume": "57574300",
          "Adj_Close": "81.386125"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-07",
          "Open": "595.249992",
          "High": "597.289986",
          "Low": "587.72998",
          "Close": "592.329979",
          "Volume": "70716100",
          "Adj_Close": "81.531455"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-06",
          "Open": "601.799995",
          "High": "604.409988",
          "Low": "594.410027",
          "Close": "594.410027",
          "Volume": "93641100",
          "Adj_Close": "81.817764"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-05",
          "Open": "590.140022",
          "High": "600.999977",
          "Low": "589.999992",
          "Close": "600.959976",
          "Volume": "71766800",
          "Adj_Close": "82.719334"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-02",
          "Open": "592.340019",
          "High": "594.199982",
          "Low": "589.709999",
          "Close": "592.580025",
          "Volume": "47878600",
          "Adj_Close": "81.565873"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-01",
          "Open": "591.999985",
          "High": "594.799995",
          "Low": "586.360016",
          "Close": "591.480026",
          "Volume": "61012000",
          "Adj_Close": "81.414463"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-30",
          "Open": "592.639999",
          "High": "599.430008",
          "Low": "589.799988",
          "Close": "590.089981",
          "Volume": "114160200",
          "Adj_Close": "81.22313"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-29",
          "Open": "593.739998",
          "High": "595.979996",
          "Low": "589.509995",
          "Close": "592.329979",
          "Volume": "84344400",
          "Adj_Close": "81.531455"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-28",
          "Open": "572.800026",
          "High": "595.749977",
          "Low": "572.54998",
          "Close": "594.090019",
          "Volume": "167371400",
          "Adj_Close": "81.773717"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-25",
          "Open": "564.529984",
          "High": "571.990021",
          "Low": "563.959984",
          "Close": "571.93998",
          "Volume": "97568800",
          "Adj_Close": "78.724867"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-24",
          "Open": "568.210014",
          "High": "570.000015",
          "Low": "560.730003",
          "Close": "567.770004",
          "Volume": "189977900",
          "Adj_Close": "78.150889"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-23",
          "Open": "529.060013",
          "High": "531.13002",
          "Low": "524.449974",
          "Close": "524.750008",
          "Volume": "98735000",
          "Adj_Close": "72.229388"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-22",
          "Open": "528.309982",
          "High": "531.830009",
          "Low": "526.500008",
          "Close": "531.70002",
          "Volume": "50640800",
          "Adj_Close": "73.186025"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-21",
          "Open": "525.339981",
          "High": "532.139977",
          "Low": "523.959976",
          "Close": "531.170021",
          "Volume": "45637200",
          "Adj_Close": "73.113073"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-17",
          "Open": "519.999992",
          "High": "527.76001",
          "Low": "519.199974",
          "Close": "524.940025",
          "Volume": "71083600",
          "Adj_Close": "72.255543"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-16",
          "Open": "518.049988",
          "High": "521.090004",
          "Low": "514.139992",
          "Close": "519.01001",
          "Volume": "53691400",
          "Adj_Close": "71.439304"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-15",
          "Open": "520.270012",
          "High": "521.639977",
          "Low": "511.329994",
          "Close": "517.959999",
          "Volume": "66622500",
          "Adj_Close": "71.294775"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-14",
          "Open": "521.900009",
          "High": "522.159988",
          "Low": "517.210022",
          "Close": "521.679977",
          "Volume": "51418500",
          "Adj_Close": "71.806813"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-11",
          "Open": "519.000023",
          "High": "522.830017",
          "Low": "517.140007",
          "Close": "519.610023",
          "Volume": "67929400",
          "Adj_Close": "71.521893"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-10",
          "Open": "530.680023",
          "High": "532.240005",
          "Low": "523.169998",
          "Close": "523.480019",
          "Volume": "59913000",
          "Adj_Close": "72.05458"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-09",
          "Open": "522.639999",
          "High": "530.490005",
          "Low": "522.020012",
          "Close": "530.320015",
          "Volume": "51542400",
          "Adj_Close": "72.996073"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-08",
          "Open": "525.190018",
          "High": "526.120026",
          "Low": "518.699989",
          "Close": "523.440018",
          "Volume": "60972100",
          "Adj_Close": "72.049074"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-07",
          "Open": "528.019989",
          "High": "530.900002",
          "Low": "521.890022",
          "Close": "523.469978",
          "Volume": "72462600",
          "Adj_Close": "72.053198"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-04",
          "Open": "539.810005",
          "High": "540.000023",
          "Low": "530.579994",
          "Close": "531.820023",
          "Volume": "68812800",
          "Adj_Close": "73.202542"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-03",
          "Open": "541.390015",
          "High": "542.50",
          "Low": "537.640022",
          "Close": "538.790009",
          "Volume": "40586000",
          "Adj_Close": "74.161928"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-02",
          "Open": "542.379997",
          "High": "543.479996",
          "Low": "540.260002",
          "Close": "542.549988",
          "Volume": "45105200",
          "Adj_Close": "74.679472"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-01",
          "Open": "537.760025",
          "High": "541.870026",
          "Low": "536.769989",
          "Close": "541.649994",
          "Volume": "50190000",
          "Adj_Close": "74.555592"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-31",
          "Open": "539.230019",
          "High": "540.809975",
          "Low": "535.930023",
          "Close": "536.739975",
          "Volume": "42167300",
          "Adj_Close": "73.879751"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-28",
          "Open": "538.319984",
          "High": "538.940025",
          "Low": "534.249985",
          "Close": "536.859978",
          "Volume": "50141000",
          "Adj_Close": "73.896269"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-27",
          "Open": "540.019997",
          "High": "541.499977",
          "Low": "535.120018",
          "Close": "537.459991",
          "Volume": "55507900",
          "Adj_Close": "73.978858"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-26",
          "Open": "546.520012",
          "High": "549.000015",
          "Low": "538.860023",
          "Close": "539.779991",
          "Volume": "74942000",
          "Adj_Close": "74.298195"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-25",
          "Open": "541.499977",
          "High": "545.750008",
          "Low": "539.589973",
          "Close": "544.98999",
          "Volume": "70573300",
          "Adj_Close": "75.015327"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-24",
          "Open": "538.420013",
          "High": "540.500008",
          "Low": "535.05999",
          "Close": "539.190018",
          "Volume": "88925200",
          "Adj_Close": "74.216988"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-21",
          "Open": "531.929985",
          "High": "533.75",
          "Low": "526.330017",
          "Close": "532.86998",
          "Volume": "93511600",
          "Adj_Close": "73.347064"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-20",
          "Open": "529.889992",
          "High": "532.669975",
          "Low": "527.350014",
          "Close": "528.700005",
          "Volume": "52099600",
          "Adj_Close": "72.773086"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-19",
          "Open": "532.259979",
          "High": "536.23999",
          "Low": "528.999985",
          "Close": "531.26001",
          "Volume": "56189000",
          "Adj_Close": "73.125459"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-18",
          "Open": "525.899994",
          "High": "531.969986",
          "Low": "525.200005",
          "Close": "531.399986",
          "Volume": "52411800",
          "Adj_Close": "73.144726"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-17",
          "Open": "527.699982",
          "High": "529.969994",
          "Low": "525.850006",
          "Close": "526.740013",
          "Volume": "49886200",
          "Adj_Close": "72.503303"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-14",
          "Open": "528.789993",
          "High": "530.890015",
          "Low": "523.000008",
          "Close": "524.68998",
          "Volume": "59299800",
          "Adj_Close": "72.221125"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-13",
          "Open": "537.440018",
          "High": "539.659988",
          "Low": "529.159988",
          "Close": "530.650009",
          "Volume": "64435700",
          "Adj_Close": "73.041495"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-12",
          "Open": "534.510017",
          "High": "537.349976",
          "Low": "532.00",
          "Close": "536.609985",
          "Volume": "49831600",
          "Adj_Close": "73.861858"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-11",
          "Open": "535.450012",
          "High": "538.740021",
          "Low": "532.589973",
          "Close": "536.089973",
          "Volume": "69806100",
          "Adj_Close": "73.790281"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-10",
          "Open": "528.360023",
          "High": "533.330017",
          "Low": "528.339996",
          "Close": "530.919975",
          "Volume": "44646000",
          "Adj_Close": "73.078655"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-07",
          "Open": "531.090019",
          "High": "531.980026",
          "Low": "526.050011",
          "Close": "530.440018",
          "Volume": "55182400",
          "Adj_Close": "73.012591"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-06",
          "Open": "532.789978",
          "High": "534.440002",
          "Low": "528.099991",
          "Close": "530.749985",
          "Volume": "46372200",
          "Adj_Close": "73.055257"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-05",
          "Open": "530.919975",
          "High": "534.750023",
          "Low": "529.129974",
          "Close": "532.360008",
          "Volume": "50015700",
          "Adj_Close": "73.276869"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-04",
          "Open": "530.999977",
          "High": "532.640015",
          "Low": "527.769997",
          "Close": "531.239983",
          "Volume": "64785000",
          "Adj_Close": "73.122703"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-03",
          "Open": "523.419991",
          "High": "530.650009",
          "Low": "522.80999",
          "Close": "527.76001",
          "Volume": "59695300",
          "Adj_Close": "72.643701"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-28",
          "Open": "529.079987",
          "High": "532.749977",
          "Low": "522.119987",
          "Close": "526.239975",
          "Volume": "92992200",
          "Adj_Close": "72.434475"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-27",
          "Open": "517.140007",
          "High": "528.780006",
          "Low": "516.049995",
          "Close": "527.670021",
          "Volume": "75470500",
          "Adj_Close": "72.631314"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-26",
          "Open": "523.610008",
          "High": "525.00",
          "Low": "515.599998",
          "Close": "517.349998",
          "Volume": "69054300",
          "Adj_Close": "71.210811"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-25",
          "Open": "529.38002",
          "High": "529.569984",
          "Low": "521.000015",
          "Close": "522.060013",
          "Volume": "57988000",
          "Adj_Close": "71.859123"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-24",
          "Open": "523.150024",
          "High": "529.920006",
          "Low": "522.420021",
          "Close": "527.550018",
          "Volume": "72227400",
          "Adj_Close": "72.614796"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-21",
          "Open": "532.789978",
          "High": "534.569992",
          "Low": "524.599991",
          "Close": "525.249992",
          "Volume": "69696200",
          "Adj_Close": "72.298208"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-20",
          "Open": "532.989983",
          "High": "537.000008",
          "Low": "528.999985",
          "Close": "531.149994",
          "Volume": "76464500",
          "Adj_Close": "73.110316"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-19",
          "Open": "544.749985",
          "High": "546.890007",
          "Low": "534.350014",
          "Close": "537.370003",
          "Volume": "78442000",
          "Adj_Close": "73.966471"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-18",
          "Open": "546.00",
          "High": "551.190025",
          "Low": "545.609978",
          "Close": "545.990013",
          "Volume": "65062900",
          "Adj_Close": "75.152975"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-14",
          "Open": "542.469986",
          "High": "545.980026",
          "Low": "541.209984",
          "Close": "543.990021",
          "Volume": "68231100",
          "Adj_Close": "74.877686"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-13",
          "Open": "534.659981",
          "High": "544.850014",
          "Low": "534.199997",
          "Close": "544.429977",
          "Volume": "76849500",
          "Adj_Close": "74.938244"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-12",
          "Open": "536.95002",
          "High": "539.560013",
          "Low": "533.239975",
          "Close": "535.919983",
          "Volume": "77025200",
          "Adj_Close": "73.766883"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-11",
          "Open": "530.610008",
          "High": "537.749985",
          "Low": "529.500023",
          "Close": "535.959984",
          "Volume": "70564200",
          "Adj_Close": "73.772389"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-10",
          "Open": "518.659988",
          "High": "531.990013",
          "Low": "518.00",
          "Close": "528.989998",
          "Volume": "86389800",
          "Adj_Close": "72.813003"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-07",
          "Open": "521.379997",
          "High": "522.929993",
          "Low": "517.380013",
          "Close": "519.679985",
          "Volume": "92570100",
          "Adj_Close": "71.531523"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-06",
          "Open": "510.060005",
          "High": "513.499977",
          "Low": "507.81002",
          "Close": "512.509995",
          "Volume": "64441300",
          "Adj_Close": "70.544607"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-05",
          "Open": "506.560005",
          "High": "515.279991",
          "Low": "506.249985",
          "Close": "512.589996",
          "Volume": "82086200",
          "Adj_Close": "70.135807"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-04",
          "Open": "505.849976",
          "High": "509.459991",
          "Low": "502.760025",
          "Close": "508.790016",
          "Volume": "94170300",
          "Adj_Close": "69.61587"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-03",
          "Open": "502.610008",
          "High": "507.730019",
          "Low": "499.300026",
          "Close": "501.529984",
          "Volume": "100366000",
          "Adj_Close": "68.622506"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-31",
          "Open": "495.179985",
          "High": "501.529984",
          "Low": "493.549988",
          "Close": "500.599976",
          "Volume": "116199300",
          "Adj_Close": "68.495256"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-30",
          "Open": "502.539993",
          "High": "506.499977",
          "Low": "496.70002",
          "Close": "499.779984",
          "Volume": "169625400",
          "Adj_Close": "68.38306"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-29",
          "Open": "503.950012",
          "High": "507.37001",
          "Low": "498.62001",
          "Close": "500.749992",
          "Volume": "125702500",
          "Adj_Close": "68.515783"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-28",
          "Open": "508.760002",
          "High": "514.999985",
          "Low": "502.070023",
          "Close": "506.499977",
          "Volume": "266380800",
          "Adj_Close": "69.302532"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-27",
          "Open": "550.07",
          "High": "554.799988",
          "Low": "545.750008",
          "Close": "550.500023",
          "Volume": "138719700",
          "Adj_Close": "75.322897"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-24",
          "Open": "554.000023",
          "High": "555.61998",
          "Low": "544.749985",
          "Close": "546.070015",
          "Volume": "107338700",
          "Adj_Close": "74.716755"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-23",
          "Open": "549.94001",
          "High": "556.50",
          "Low": "544.810013",
          "Close": "556.179993",
          "Volume": "100809800",
          "Adj_Close": "76.100066"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-22",
          "Open": "550.910019",
          "High": "557.289978",
          "Low": "547.809975",
          "Close": "551.509979",
          "Volume": "94996300",
          "Adj_Close": "75.461085"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-21",
          "Open": "540.990005",
          "High": "550.07",
          "Low": "540.420006",
          "Close": "549.069977",
          "Volume": "82131700",
          "Adj_Close": "75.127229"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-17",
          "Open": "551.480019",
          "High": "552.069992",
          "Low": "539.899994",
          "Close": "540.669998",
          "Volume": "106684900",
          "Adj_Close": "73.97789"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-16",
          "Open": "554.900017",
          "High": "556.850021",
          "Low": "551.680023",
          "Close": "554.250015",
          "Volume": "57319500",
          "Adj_Close": "75.835994"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-15",
          "Open": "553.520012",
          "High": "560.200005",
          "Low": "551.659996",
          "Close": "557.359993",
          "Volume": "97909700",
          "Adj_Close": "76.261521"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-14",
          "Open": "538.220009",
          "High": "546.730003",
          "Low": "537.659996",
          "Close": "546.390022",
          "Volume": "83140400",
          "Adj_Close": "74.76054"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-13",
          "Open": "529.910019",
          "High": "542.50",
          "Low": "529.880005",
          "Close": "535.730019",
          "Volume": "94623200",
          "Adj_Close": "73.301971"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-10",
          "Open": "539.829979",
          "High": "540.799988",
          "Low": "531.109993",
          "Close": "532.939995",
          "Volume": "76244000",
          "Adj_Close": "72.920222"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-09",
          "Open": "546.800018",
          "High": "546.859993",
          "Low": "535.349983",
          "Close": "536.519997",
          "Volume": "69787200",
          "Adj_Close": "73.410061"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-08",
          "Open": "538.809982",
          "High": "545.55999",
          "Low": "538.68998",
          "Close": "543.460022",
          "Volume": "64632400",
          "Adj_Close": "74.359639"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-07",
          "Open": "544.320015",
          "High": "545.959999",
          "Low": "537.919975",
          "Close": "540.040024",
          "Volume": "79302300",
          "Adj_Close": "73.891693"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-06",
          "Open": "537.450005",
          "High": "546.800018",
          "Low": "533.599983",
          "Close": "543.929993",
          "Volume": "103152700",
          "Adj_Close": "74.423944"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-03",
          "Open": "552.860023",
          "High": "553.699989",
          "Low": "540.429993",
          "Close": "540.980019",
          "Volume": "98116900",
          "Adj_Close": "74.020309"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-02",
          "Open": "555.680008",
          "High": "557.029999",
          "Low": "552.020004",
          "Close": "553.12999",
          "Volume": "58671200",
          "Adj_Close": "75.682745"
        }
      ]
    }
  }
}
