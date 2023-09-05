 function draw_France_hsr() {
var dom = document.getElementById("France_hsr");
var myChart = echarts.init(dom,'dark');
var app = {};

var option;



const pathSymbols = {
  // series0:
  //   'image://日本/0系.jpg',
 TGVPSE: 'image://法国/TGV-PSE.png',
  ThalysPBA: 'image://法国/Thalys PBA.png',
  ThalysPBKA: 'image://法国/Thalys PBKA.png',
  EurostarE300: 'image://法国/Eurostar E300.png',
  TGVA: 'image://法国/TGV-A.png',
  TGVR: 'image://法国/TGV-R.png',
  TGVD: 'image://法国/TGV-D.png',
  TGVDasye: 'image://法国/TGV-Dasye.png',
  TGVPOS: 'image://法国/TGV-POS.png',
  TGVEuroduplex: 'image://法国/TGV-Euroduplex.png',
  EurostarE320: 'image://法国/Eurostar E320.png',
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
  //   text: '法国高铁车型',
  //   top: 30,
  //   left: 30,
  //   textStyle: {
  //     fontSize: 26,
  //   }
  // },
  xAxis: {
    data: ['1981: TGV-PSE', '1989: TGV-A',  '1992: TGV-R',  '1994: Eurostar E300',  '1996: Thalys PBA', '1996: TGV-D',  '1997: Thalys PBKA',    '2007: TGV-POS',    '2008: TGV-Dasye',  '2011: TGV-Euroduplex', '2015: Eurostar E320'],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      color: '#5470c6',
      fontSize: 14,
      rotate: 23
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  color: ['#5470c6'],
grid: {
                left: '15%',

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
      data: [300,320,320,300,300,320,300,320,320,320,320],
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
          symbol: pathSymbols.TGVPSE,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.TGVA,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.TGVR,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 300,
          symbol: pathSymbols.EurostarE300,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 300,
          symbol: pathSymbols.ThalysPBA,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.TGVD,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 300,
          symbol: pathSymbols.ThalysPBKA,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.TGVPOS,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.TGVDasye,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.TGVEuroduplex,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.EurostarE320,
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