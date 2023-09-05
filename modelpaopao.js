function modelpaopao() {
	var dom = document.getElementById("modelpaopao");
var myChart = echarts.init(dom,'dark');
var app = {};

var option;



// prettier-ignore
const hours = [
  '1964', '1976', '1981', '1982', '1985', '1988', '1989',
  '1990', '1991', '1992','1994','1995',
  '1996', '1997', '1998', '1999', '2000', '2001',
  '2002', '2004', '2005', '2007', '2008', '2009', '2010', '2011', '2012', '2013',
  '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'
];
// prettier-ignore
const days = [
    '中国', '法国', '德国','意大利', '日本',
    '西班牙', '英国'
];
// prettier-ignore
const data = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 0], [0, 12, 0], [0, 13, 0], [0, 14, 0], [0, 15, 0], [0, 16, 0], [0, 17, 0], [0, 18, 0], [0, 19, 0], [0, 20, 0], [0, 21, 4], [0, 22, 4], [0, 23, 2], [0, 24, 3], [0, 25, 2], [0, 26, 2], [0, 27, 3], [0, 28, 1], [0, 29, 2], [0, 30, 4], [0, 31, 4], [0, 32, 4], [0, 33, 5], [0, 34, 3], [0, 35, 7], [0, 36, 2], [1, 0, 0], [1, 1, 0], [1, 2, 1], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 1], [1, 7, 0], [1, 8, 0], [1, 9, 1], [1, 10, 1], [1, 11, 0], [1, 12, 2], [1, 13, 1], [1, 14, 0], [1, 15, 0], [1, 16, 0], [1, 17, 0], [1, 18, 0], [1, 19, 0], [1, 20, 0], [1, 21, 1], [1, 22, 1], [1, 23, 0], [1, 24, 0], [1, 25, 1], [1, 26, 0], [1, 27, 0], [1, 28, 0], [1, 29, 1], [1, 30, 0], [1, 31, 0], [1, 32, 0], [1, 33, 0], [1, 34, 0], [1, 35, 0], [1, 36, 0], [2, 0, 0], [2, 1, 0], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 2], [2, 9, 0], [2, 10, 0], [2, 11, 0], [2, 12, 0], [2, 13, 0], [2, 14, 0], [2, 15, 2], [2, 16, 1], [2, 17, 1], [2, 18, 0], [2, 19, 0], [2, 20, 0], [2, 21, 0], [2, 22, 0], [2, 23, 0], [2, 24, 0], [2, 25, 0], [2, 26, 0], [2, 27, 2], [2, 28, 0], [2, 29, 0], [2, 30, 0], [2, 31, 0], [2, 32, 0], [2, 33, 0], [2, 34, 0], [2, 35, 0], [2, 36, 0], [3, 0, 0], [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 1], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 1], [3, 10, 1], [3, 11, 0], [3, 12, 0], [3, 13, 3], [3, 14, 0], [3, 15, 0], [3, 16, 0], [3, 17, 0], [3, 18, 0], [3, 19, 0], [3, 20, 0], [3, 21, 0], [3, 22, 1], [3, 23, 1], [3, 24, 0], [3, 25, 0], [3, 26, 1], [3, 27, 0], [3, 28, 0], [3, 29, 1], [3, 30, 0], [3, 31, 1], [3, 32, 0], [3, 33, 0], [3, 34, 0], [3, 35, 0], [3, 36, 0], [4, 0, 1], [4, 1, 0], [4, 2, 0], [4, 3, 1], [4, 4, 1], [4, 5, 0], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 1], [4, 11, 0], [4, 12, 0], [4, 13, 4], [4, 14, 0], [4, 15, 2], [4, 16, 1], [4, 17, 0], [4, 18, 1], [4, 19, 1], [4, 20, 0], [4, 21, 1], [4, 22, 2], [4, 23, 0], [4, 24, 0], [4, 25, 3], [4, 26, 0], [4, 27, 1], [4, 28, 2], [4, 29, 0], [4, 30, 0], [4, 31, 0], [4, 32, 0], [4, 33, 0], [4, 34, 0], [4, 35, 0], [4, 36, 0], [5, 0, 0], [5, 1, 0], [5, 2, 0], [5, 3, 0], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 0], [5, 9, 1], [5, 10, 0], [5, 11, 0], [5, 12, 0], [5, 13, 0], [5, 14, 0], [5, 15, 1], [5, 16, 0], [5, 17, 0], [5, 18, 0], [5, 19, 1], [5, 20, 3], [5, 21, 2], [5, 22, 1], [5, 23, 1], [5, 24, 0], [5, 25, 0], [5, 26, 1], [5, 27, 0], [5, 28, 0], [5, 29, 0], [5, 30, 0], [5, 31, 0], [5, 32, 0], [5, 33, 0], [5, 34, 0], [5, 35, 0], [5, 36, 0], [6, 0, 0], [6, 1, 1], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 1], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 0], [6, 11, 0], [6, 12, 0], [6, 13, 0], [6, 14, 0], [6, 15, 0], [6, 16, 0], [6, 17, 2], [6, 18, 2], [6, 19, 1], [6, 20, 0], [6, 21, 0], [6, 22, 0], [6, 23, 1], [6, 24, 0], [6, 25, 0], [6, 26, 0], [6, 27, 0], [6, 28, 0], [6, 29, 0], [6, 30, 0], [6, 31, 2], [6, 32, 0], [6, 33, 1], [6, 34, 0], [6, 35, 0], [6, 36, 0]];
const title = [];
const singleAxis = [];
const series = [];
days.forEach(function (day, idx) {
  title.push({
    textBaseline: 'middle',
    top: ((idx + 0.5) * 100) / 8 + '%',
    text: day,
    textStyle:{fontSize:14,fontWeight:'normal'}
  });
  singleAxis.push({
    left: 80,
    right: 50,
    type: 'category',
    boundaryGap: false,
    data: hours,
    top: (idx * 100) / 8 + 5 + '%',
    height: 100 / 8 - 10 + '%',
    axisLabel: {
      interval: 0
    }
  });
  series.push({
    singleAxisIndex: idx,
    coordinateSystem: 'singleAxis',
    type: 'scatter',
    data: [],
    symbolSize: function (dataItem) {
      return dataItem[1] * 9;
    }
  });
});
data.forEach(function (dataItem) {
  series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
});
option = {
  // tooltip: {
  //   show: false
  // },
  title: title,
  singleAxis: singleAxis,
  series: series,
  backgroundColor: '#100C2A',
  color: ['#ee6666', '#5470c6', '#91cc75', '#fac858',  '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

}