function draw_Japan_hsr() {
var dom = document.getElementById("Japan_hsr");
var myChart = echarts.init(dom,'dark');
var app = {};

var option;



const pathSymbols = {
  // series0:
  //   'image://日本/0系.jpg',
  plane:
    'image://plane.png',
  rocket:
    'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z',
  train:
    'image://HSR.png',
  car: 'image://car.png',
  run: 'image://bike.png',
  walk: 'image://walk.png',
  series0: 'image://日本/0系.png',
  series100: 'image://日本/100系.png',
  series200: 'image://日本/200系.png',
  series300: 'image://日本/300系.png',
  series400: 'image://日本/400系.png',
  series500: 'image://日本/500系.png',
  series700: 'image://日本/700系.png',
  series800: 'image://日本/800系.png',
  seriese1: 'image://日本/E1系.png',
  seriese2: 'image://日本/E2系.png',
  seriese3: 'image://日本/E3系.png',
  seriese4: 'image://日本/E4系.png',
  seriese5: 'image://日本/E5系.png',
  seriese6: 'image://日本/E6系.png',
  seriese7: 'image://日本/E7系.png',
  seriesh5: 'image://日本/H5系.png',
  seriesn700: 'image://日本/N700系.png',
  seriesw7: 'image://日本/W7系.png',
};
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    formatter: function (params) {
      return params[0].name + ': ' + params[0].value;
    }
  },
  // title: {
  //   text: '日本高铁车型',
  //   top: 30,
  //   left: 30,
  //   textStyle: {
  //     fontSize: 26,
  //   }
  // },
  xAxis: {
    data: ['1964: 0-series', '1982: 200-series', '1985: 100-series', '1992: 400-series', '1992: 300-series', '1994: E1-series', '1997: E4-series', '1997: E2-series', '1997: E3-series', '1997: 500-series', '1999: 700-series', '2004: 800-series', '2007: N700-series', '2011: E5-series', '2011: H5-series', '2013: E6-series', '2014: E7-series', '2014: W7-series'],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      color: '#73c0de',
      fontSize: 14,
      rotate: 30
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  color: ['#73c0de'],
  grid:{
    left:'15%'
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 100
    },
    {
      show: true,
      type: 'slider',
      top: '87%',
      start: 0,
      end: 100
    }
  ],
  series: [
    {
      name: 'hill',
      type: 'pictorialBar',
      barCategoryGap: '-130%',
      // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      itemStyle: {
        opacity: 0.5
      },
      emphasis: {
        itemStyle: {
          opacity: 1
        }
      },
      data: [210, 275, 230, 240, 270,240, 240,275,275,300,285, 260,300,320,320,320,260,260],
      z: 10
    },
    {
      name: 'glyph',
      type: 'pictorialBar',
      barGap: '-100%',
      symbolPosition: 'end',
      symbolSize: 50,
      symbolOffset: [0, '-120%'],
      data: [
        {
          value: 210,
          symbol: pathSymbols.series0,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 275,
          symbol: pathSymbols.series200,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 230,
          symbol: pathSymbols.series100,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 240,
          symbol: pathSymbols.series400,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 270,
          symbol: pathSymbols.series300,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 240,
          symbol: pathSymbols.seriese1,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 240,
          symbol: pathSymbols.seriese4,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 275,
          symbol: pathSymbols.seriese2,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 275,
          symbol: pathSymbols.seriese3,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 300,
          symbol: pathSymbols.series500,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 285,
          symbol: pathSymbols.series700,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 260,
          symbol: pathSymbols.series800,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 300,
          symbol: pathSymbols.seriesn700,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.seriese5,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.seriesh5,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.seriese6,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 260,
          symbol: pathSymbols.seriese7,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 260,
          symbol: pathSymbols.seriesw7,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        }
      ]
    }
  ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

};