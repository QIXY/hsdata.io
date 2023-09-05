function draw_China_hsr() {
var dom = document.getElementById("China_hsr");
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
  C700T: 'image://中国/700T.png',
  CR400AF: 'image://中国/CR400AF.png',
  CR400AFA: 'image://中国/CR400AF-A.png',
  CR400AFB: 'image://中国/CR400AF-B.png',
  CR400BF: 'image://中国/CR400BF.png',
  CR400BFA: 'image://中国/CR400BF-A.png',
  CR400BFB: 'image://中国/CR400BF-B.png',
  CR400BFC: 'image://中国/CR400BF-C.png',
  CR400BFG: 'image://中国/CR400BF-G.png',
  CRH1A: 'image://中国/CRH1A.png',
  CRH1AA: 'image://中国/CRH1A-A.png',
  CRH1B: 'image://中国/CRH1B.png',
  CRH1E: 'image://中国/CRH1E.png',
  CRH2A: 'image://中国/CRH2A.png',
  CRH2B: 'image://中国/CRH2B.png',
  CRH2C: 'image://中国/CRH2C.png',
  CRH2E: 'image://中国/CRH2E.png',
  CRH2G: 'image://中国/CRH2G.png',
  CRH3A: 'image://中国/CRH3A.png',
  CRH3C: 'image://中国/CRH3C.png',
  CRH5A: 'image://中国/CRH5A.png',
  CRH5E: 'image://中国/CRH5E.png',
  CRH5G: 'image://中国/CRH5G.png',
  CRH6A: 'image://中国/CRH6A.png',
  CRH6AA: 'image://中国/CRH6A-A.png',
  CRH380A: 'image://中国/CRH380A.png',
  CRH380AL: 'image://中国/CRH380AL.png',
  CRH380B: 'image://中国/CRH380B.png',
  CRH380BG: 'image://中国/CRH380BG.png',
  CRH380BL: 'image://中国/CRH380BL.png',
  CRH380CL: 'image://中国/CRH380CL.png',
  CRH380D: 'image://中国/CRH380D.png',
  GTCRH380A: 'image://中国/港铁动感号CRH380A.png',
  CR200J: 'image://中国/CR200J.png',
  CJ6: 'image://中国/CJ6.png',
  长城号动车组: 'image://中国/长城号动车组.png',
  CR300BF: 'image://中国/CR300BF.png',
  CRH380AN: 'image://中国/CRH380AN.png',
  CRH6FA: 'image://中国/CRH6F-A.png',
  CR400AFG: 'image://中国/CR400AF-G.png',
  CR400AFC: 'image://中国/CR400AF-C.png',
  CR400AFZ: 'image://中国/CR400AF-Z.png',
  CR400AFBZ: 'image://中国/CR400AF-BZ.png',
  CR400BFGZ: 'image://中国/CR400BF-GZ.png',
  CR400BFBZ: 'image://中国/CR400BF-BZ.png',
  CR300AF: 'image://中国/CR300AF.png',
  CR200JSG: 'image://中国/CR200JS-G.png',
  CRH3AA: 'image://中国/CRH3A-A.png',
  CR400BFZ: 'image://中国/CR400BF-Z.png'
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
//  backgroundColor:'#EFEBE9',
  // title: {
  //   text: '中国高铁车型',
  //   top: 30,
  //   left: 30,
  //   textStyle: {
  //     fontSize: 26,
  //   }
  // },
  xAxis: {
    data: ['2007: CRH1A', '2007: CRH2A',  '2007: CRH5A',  '2007: 700T', '2008: CRH2B',  '2008: CRH2C', '2008: CRH2E',  '2008: CRH3C',  '2009: CRH1B',  '2009: CRH1E',  '2010: CRH380A',  '2011: CRH380AL', '2011: CRH380BL', '2012: CRH380BG', '2013: CRH380B',  '2013: CRH380CL', '2014: CRH5G',  '2015: CRH2G',  '2015: CRH380D',  '2016: CRH6A',  '2016: CRH1A-A',  '2017: CRH3A',  '2017: CR400AF',  '2017: CR400BF',  '2018: CRH6A-A',  '2018: MTR CRH380A', '2018: CR400AF-A',  '2018: CR400BF-A',  '2019: CRH5E',  '2019: CR400AF-B',  '2019: CR400BF-G',  '2019: CR400BF-B',  '2019: CR400BF-C',  '2020: CR300BF',  '2020: CRH380AN',  '2021: CR400AF-G',  '2021: CR400AF-C',  '2021: CR400AF-Z',  '2021: CR400AF-BZ',  '2021: CR400BF-GZ',  '2021: CR400BF-BZ',  '2021: CR300AF',  '2022: CRH3A-A',  '2023: CR400BF-Z'],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
    //  color: '#212121',
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
  color: ['#ee6666'],
  grid:{
    left:'10%'
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
      data: [250, 250,  250,  300,  250, 310, 250,  310,  250,  250,  310,  310,  310,  310,  310,  310,  250,  250,  310,  200,  250,  250,  350,  350,  200,  310,  350,  350,  250,  350,  350,  350,  350,  250,  310,  350,  350,  350,  350,  350,  350,  250,  200,  350],
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
          symbol: pathSymbols.CRH1A,
          symbolSize: [70, 70],
          label: {
            show: true,
        //    color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CRH2A,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CRH5A,
          symbolSize: [70, 70],
          label: {
            show: true,
     //       color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 300,
          symbol: pathSymbols.C700T,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CRH2B,
          symbolSize: [70, 70],
          label: {
            show: true,
     //       color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.CRH2C,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CRH2E,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.CRH3C,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CRH1B,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CRH1E,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.CRH380A,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.CRH380AL,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.CRH380BL,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.CRH380BG,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.CRH380B,
          symbolSize: [70, 70],
          label: {
            show: true,
     //       color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.CRH380CL,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CRH5G,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CRH2G,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.CRH380D,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.CRH6A,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CRH1AA,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CRH3A,
          symbolSize: [70, 70],
          label: {
            show: true,
     //       color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400AF,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400BF,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.CRH6AA,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.GTCRH380A,
          symbolSize: [70, 70],
          label: {
            show: true,
     //       color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400AFA,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400BFA,
          symbolSize: [70, 70],
          label: {
            show: true,
     //       color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CRH5E,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400AFB,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400BFG,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400BFB,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400BFC,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CR300BF,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 310,
          symbol: pathSymbols.CRH380AN,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400AFG,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400AFC,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400AFZ,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400AFBZ,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400BFGZ,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400BFBZ,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.CR300AF,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.CRH3AA,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
            fontSize: 14
          }
        },
        {
          value: 350,
          symbol: pathSymbols.CR400BFZ,
          symbolSize: [70, 70],
          label: {
            show: true,
    //        color: '#212121',
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