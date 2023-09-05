function draw_Italy_hsr() {
var dom = document.getElementById("Itlay_hsr");
var myChart = echarts.init(dom,'dark');
var app = {};

var option;



const pathSymbols = {
  // series0:
  //   'image://日本/0系.jpg',
 ETR450: 'image://意大利/ETR450.png',
  ETR500: 'image://意大利/ETR500.png',
  ETR460: 'image://意大利/ETR460.png',
  ETR470: 'image://意大利/ETR470.png',
  ETR600: 'image://意大利/ETR600.png',
  ETR610: 'image://意大利/ETR610.png',
  ETR575: 'image://意大利/ETR575.png',
  Frecciarossa1000: 'image://意大利/Frecciarossa 1000.png',
  ETR675: 'image://意大利/ETR675.png',
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
  //   text: '意大利高铁车型',
  //   top: 30,
  //   left: 30,
  //   textStyle: {
  //     fontSize: 26,
  //   }
  // },
  xAxis: {
    data: ['1988: ETR450',  '1992: ETR500', '1994: ETR460', '1997: ETR470', '2008: ETR600', '2009: ETR610', '2012: ETR575', '2015: Frecciarossa1000', '2017: ETR675'],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      color: '#fac858',
      fontSize: 14,
      rotate: 22
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false },
    min: 0,
      max: 330,
  },
  color: ['#fac858'],
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
      data: [250,300,250,200,250,250,300,300,250],
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
          value: 250,
          symbol: pathSymbols.ETR450,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 300,
          symbol: pathSymbols.ETR500,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.ETR460,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.ETR470,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.ETR600,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.ETR610,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 300,
          symbol: pathSymbols.ETR575,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 300,
          symbol: pathSymbols.Frecciarossa1000,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.ETR675,
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

window.addEventListener('resize', myChart.resize);
};