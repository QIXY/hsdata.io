 function draw_scatterbar() {
 var dom = document.getElementById("scatter_bar");
var myChart = echarts.init(dom);
var app = {};

var option;



// prettier-ignore
const ChinaData = [[668,250],[613,250],[622,250],[989,300],[1230,250],[610,310],[630,250],[556,310],[1299,250],[642,250],[610,310],[556,310],[1061,310],[1015,310],[556,310],[556,310],[1015,310],[613,250],[613,250],[556,310],[613,250],[642,250],[642,250],[613,200],[576,350],[576,350],[880,250],[613,250],[613,250],[1193,350],[1193,350],[688,200],[579,310],[1283,350],[576,350],[1283,350],[576,350],[642,250],[613,250],[556,310],[576,350],[578,350],[578,350],[1285,350],[578,350],[1285,350],[613,250],[672,200],[578,350]
];
// prettier-ignore
const FranceData = [[368,300],[377,300],[377,300],[750,300],[485,320],[377,320],[510,320],[510,320],[377,320],[556,320],[900,320]
];
const GermanyData = [[195,200],[369,230],[830,250],[703,280],[391,280],[441,320],[431,320],[460,320]
];
const ItalyData = [[475,200],[390,250],[480,250],[489,250],[489,250],[432,250],[430,250],[479,250],[574,300],[457,300],[450,300]
];
const JapanData = [[1401,210],[1321,230],[399,240],[1235,240],[817,240],[392,260],[924,260],[924,260],[1323,270],[1235,275],[630,275],[814,275],[338,275],[402,275],[394,275],[608,285],[1323,285],[571,285],[1324,300],[1323,300],[546,300],[731,320],[731,320],[332,320]
];
const SpainData = [[160,200],[237,250],[236,250],[237,250],[281,250],[299,250],[265,250],[329,300],[316,310],[365,310],[404,310]
];
const UKData = [[553,200],[535,200],[589,200],[268,200],[200,200],[262,200],[342,200],[651,200],[611,200],[651,200],[352,225]
];
const SwedenData = [[309,200],[228,200],[304,200],[246,200]
];
const NorwayData = [[244,210],[250,210],[295,200],[295,200]
];
const KoreaData = [[935,305],[410,300],[410,300]
];
const TurkeyData = [[409,250],[519,250]
];
const FinlandData = [[308,220],[352,220]
];
const UzbekistanData = [[290,230]
];
const SloveniaData = [[164,200]
];
const SwissData = [[477,200]
];
const PortugalData = [[299,220]
];
const MoroccoData = [[533,320]
];
const USAData = [[304,240]
];
const CzechData = [[304,240]
];
const RussiaData = [[604,250]
];
const DenmarkData = [[204,200]
];
const PolandData = [[402,250]
];
const AustriaData = [[432,230]
];
function calculateAverage(data, dim) {
  let total = 0;
  for (var i = 0; i < data.length; i++) {
    total += data[i][dim];
  }
  return (total /= data.length);
}
function calculateMaxmium(data, dim) {
  let max = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i][dim] > max){
        max = data[i][dim];
    }
    else {
        max = max;
    }
  }
  return (max);
}
const scatterOption = (option = {
  xAxis: {
    scale: true,
    name: '列车定员(人)',
    nameTextStyle: {
          fontSize: 14,
          color:'#ffffff'
        },
    axisLabel: { color:'#ffffff' }
  },
  yAxis: {
    scale: true,
    name: '运营速度(km/h)',
    nameTextStyle: {
          fontSize: 14,
          color:'#ffffff'
        },
    axisLabel: { color:'#ffffff' }
  },

  grid: {
                left: '20%',
            },
  series: [
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'China',
      dataGroupId: 'China',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: ChinaData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'France',
      dataGroupId: 'France',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: FranceData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Germany',
      dataGroupId: 'Germany',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: GermanyData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Italy',
      dataGroupId: 'Italy',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: ItalyData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Janpan',
      dataGroupId: 'Janpan',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: JapanData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Spain',
      dataGroupId: 'Spain',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: SpainData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'UK',
      dataGroupId: 'UK',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: UKData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Sweden',
      dataGroupId: 'Sweden',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: SwedenData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Norway',
      dataGroupId: 'Norway',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: NorwayData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Korea',
      dataGroupId: 'Korea',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: KoreaData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Turkey',
      dataGroupId: 'Turkey',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: TurkeyData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Finland',
      dataGroupId: 'Finland',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: FinlandData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Uzbekistan',
      dataGroupId: 'Uzbekistan',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: UzbekistanData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Slovenia',
      dataGroupId: 'Slovenia',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: SloveniaData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Swiss',
      dataGroupId: 'Swiss',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: SwissData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Portugal',
      dataGroupId: 'Portugal',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: PortugalData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Morocco',
      dataGroupId: 'Morocco',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: MoroccoData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'USA',
      dataGroupId: 'USA',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: USAData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Czech',
      dataGroupId: 'Czech',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: CzechData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Russia',
      dataGroupId: 'Russia',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: RussiaData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Denmark',
      dataGroupId: 'Denmark',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: DenmarkData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Poland',
      dataGroupId: 'Poland',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: PolandData
    },
    {
      type: 'scatter',
      symbolSize: 20,
      id: 'Austria',
      dataGroupId: 'Austria',
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      },
      data: AustriaData
    }
  ],
  // backgroundColor: '#100C2A',
  color: ['#ee6666', '#5470c6', '#91cc75', '#fac858',  '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc', '#96BFFF', '#8378EA', '#b5bd48', '#b55dba', '#37a354', '#e06343', '#37A2DA', '#3b9b64', '#49baa6', '#beaf53', '#b54568', '#6bba49', '#b08fd3', '#6bb6c7']
});
const barOption = {
  xAxis: {
    type: 'category',
    data: ['中国', '法国','德国','意大利','日本','西班牙','英国','瑞典','挪威','韩国','土耳其','芬兰','乌兹别克斯坦','斯洛文尼亚','瑞士','葡萄牙','摩洛哥','美国','捷克','俄罗斯','丹麦','波兰','奥地利'],
    name: '国家',
    nameTextStyle: {
          fontSize: 14,
          color:'#ffffff'
        },
    axisLabel: { interval: 0, rotate: 30, symbolSize:10,color:'#ffffff' }
  },
  yAxis: {
    name: '最大列车定员(人)',
    nameTextStyle: {
          fontSize: 14,
          color:'#ffffff'
        },
    axisLabel: { color:'#ffffff' }
  },
    tooltip:{},
  grid: {
                left: '20%',
            },
  series: [
    {
      type: 'bar',
      id: 'total',
      barWidth: 25,
      data: [
        {
          value: calculateMaxmium(ChinaData, 0),
          groupId: 'China',
          itemStyle: {
            color: '#ee6666'
          }
        },
        {
          value: calculateMaxmium(FranceData, 0),
          groupId: 'France',
          itemStyle: {
            color: '#5470c6'
            }
        },
        {
          value: calculateMaxmium(GermanyData, 0),
          groupId: 'Germany',
          itemStyle: {
            color: '#91cc75'
            }
        },
        {
          value: calculateMaxmium(ItalyData, 0),
          groupId: 'Italy',
          itemStyle: {
            color: '#fac858'
            }
        },
        {
          value: calculateMaxmium(JapanData, 0),
          groupId: 'Janpan',
          itemStyle: {
            color: '#73c0de'
            }
        },
        {
          value: calculateMaxmium(SpainData, 0),
          groupId: 'Spain',
          itemStyle: {
            color: '#3ba272'
            }
        },
        {
          value: calculateMaxmium(UKData, 0),
          groupId: 'UK',
          itemStyle: {
            color: '#fc8452'
            }
        },
        {
          value: calculateMaxmium(SwedenData, 0),
          groupId: 'Sweden',
          itemStyle: {
            color: '#9a60b4'
            }
        },
        {
          value: calculateMaxmium(NorwayData, 0),
          groupId: 'Norway',
          itemStyle: {
            color: '#ea7ccc'
            }
        },
        {
          value: calculateMaxmium(KoreaData, 0),
          groupId: 'Korea',
          itemStyle: {
            color: '#96BFFF'
            }
        },
        {
          value: calculateMaxmium(TurkeyData, 0),
          groupId: 'Turkey',
          itemStyle: {
            color: '#8378EA'
            }
        },
        {
          value: calculateMaxmium(FinlandData, 0),
          groupId: 'Finland',
          itemStyle: {
            color: '#b5bd48'
            }
        },
        {
          value: calculateMaxmium(UzbekistanData, 0),
          groupId: 'Uzbekistan',
          itemStyle: {
            color: '#b55dba'
            }
        },
        {
          value: calculateMaxmium(SloveniaData, 0),
          groupId: 'Slovenia',
          itemStyle: {
            color: '#37a354'
            }
        },
        {
          value: calculateMaxmium(SwissData, 0),
          groupId: 'Swiss',
          itemStyle: {
            color: '#e06343'
            }
        },
        {
          value: calculateMaxmium(PortugalData, 0),
          groupId: 'Portugal',
          itemStyle: {
            color: '#37A2DA'
            }
        },
        {
          value: calculateMaxmium(MoroccoData, 0),
          groupId: 'Morocco',
          itemStyle: {
            color: '#3b9b64'
            }
        },
        {
          value: calculateMaxmium(USAData, 0),
          groupId: 'USA',
          itemStyle: {
            color: '#49baa6'
            }
        },
        {
          value: calculateMaxmium(CzechData, 0),
          groupId: 'Czech',
          itemStyle: {
            color: '#beaf53'
            }
        },
        {
          value: calculateMaxmium(RussiaData, 0),
          groupId: 'Russia',
          itemStyle: {
            color: '#b54568'
            }
        },
        {
          value: calculateMaxmium(DenmarkData, 0),
          groupId: 'Denmark',
          itemStyle: {
            color: '#6bba49'
            }
        },
        {
          value: calculateMaxmium(PolandData, 0),
          groupId: 'Poland',
          itemStyle: {
            color: '#b08fd3'
            }
        },
        {
          value: calculateMaxmium(AustriaData, 0),
          groupId: 'Austria',
          itemStyle: {
            color: '#6bb6c7'
            }
        }
      ],
      universalTransition: {
        enabled: true,
        seriesKey: ['China', 'France','Germany','Italy','Janpan','Spain','UK','Sweden','Norway','Korea','Turkey','Finland','Uzbekistan','Slovenia','Swiss','Portugal','Morocco','USA','Czech','Russia','Denmark','Poland','Austria'],
        delay: function (idx, count) {
          return Math.random() * 400;
        }
      }
    }
  ]
};
let currentOption = scatterOption;
setInterval(function () {
  currentOption = currentOption === scatterOption ? barOption : scatterOption;
  myChart.setOption(currentOption, true);
}, 5000);//两种图切换的周期

if (option && typeof option === 'object') {
    myChart.setOption(option);
}


 }