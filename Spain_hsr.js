 function draw_Spain_hsr() {
var dom = document.getElementById("Spain_hsr");
var myChart = echarts.init(dom,'dark');
var app = {};

var option;



const pathSymbols = {
  // series0:
  //   'image://日本/0系.jpg',
 AVES100: 'image://西班牙/AVE S100.png',
  AvantS104: 'image://西班牙/Avant S104.png',
  AlviaS120: 'image://西班牙/Alvia S120.png',
  AVES102: 'image://西班牙/AVE S102.png',
  AlviaS130: 'image://西班牙/Alvia S130.png',
  AVES103: 'image://西班牙/AVE S103.png',
  AvantS114: 'image://西班牙/Avant S114.png',
  AlviaS730: 'image://西班牙/Alvia S730.png',
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
  //   text: '西班牙高铁车型',
  //   top: 30,
  //   left: 30,
  //   textStyle: {
  //     fontSize: 26,
  //   }
  // },
  xAxis: {
    data: ['1992: AVE S100',  '2004: Avant S104', '2005: Alvia S120', '2005: AVE S102', '2007: Alvia S130', '2007: AVE S103', '2009: Avant S114', '2012: Alvia S730'],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      color: '#3ba272',
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
  color: ['#3ba272'],
  grid:{
    left:'15%',
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
      data: [300,250,250,310,250,310,250,250],
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
          value: 300,
          symbol: pathSymbols.AVES100,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.AvantS104,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.AlviaS120,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.AVES102,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.AlviaS130,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.AVES103,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.AvantS114,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.AlviaS730,
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