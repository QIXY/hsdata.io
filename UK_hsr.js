function draw_UK_hsr() {
var dom = document.getElementById("UK_hsr");
var myChart = echarts.init(dom,'dark');
var app = {};

var option;



const pathSymbols = {
  // series0:
  //   'image://日本/0系.jpg',
 IC125: 'image://英国/IC125.png',
  IC225: 'image://英国/IC225.png',
  Class180: 'image://英国/Class180.png',
  Class220: 'image://英国/Class220.png',
  Class390: 'image://英国/Class390.png',
  Class221: 'image://英国/Class221.png',
  Class222: 'image://英国/Class222.png',
  Class395: 'image://英国/Class395.png',
  Class800: 'image://英国/Class800.png',
  Class801: 'image://英国/Class801.png',
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
  //   text: '英国高铁车型',
  //   top: 30,
  //   left: 30,
  //   textStyle: {
  //     fontSize: 26,
  //   }
  // },
  xAxis: {
    data: ['1976: IC125', '1989: IC225',  '2001: Class 180',  '2001: Class 220',  '2002: Class 390',  '2002: Class 221',  '2004: Class 222',  '2009: Class 395',  '2017: Class 800',  '2019: Class 801'],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      color: '#fc8452',
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
  color: ['#fc8452'],
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
      data: [200,200,200,200,200,200,200,225,200,200],
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
          value: 200,
          symbol: pathSymbols.IC125,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.IC225,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.Class180,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.Class220,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.Class390,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.Class221,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.Class222,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 225,
          symbol: pathSymbols.Class395,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.Class800,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.Class801,
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