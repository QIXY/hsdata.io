function draw_modelnetwork() {
var dom = document.getElementById('modelnetwork');
    var myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    var option;

    myChart.showLoading();
$.getJSON('./data/network.json', function (graph) {
  myChart.hideLoading();
  graph.nodes.forEach(function (node) {
    node.label = {
      show: node.symbolSize > 0
    };
  });
  option = {
    // title: {
    //   text: '中国铁路高速动车组技术发展谱系图',
    //   top: 'bottom',
    //   left: 'center'
    // },
    color: ['#ff6e76', '#7cffb2', '#fddd60',  '#ff8a45', '#58d9f9'],
    tooltip: {},
    legend: [
      {
        x:'left',
        y:'top',
        orient: 'vertical',
        data: graph.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    // animationDurationUpdate: 1500,
    // animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: '中国铁路高速动车组技术发展谱系图',
        type: 'graph',
        layout: 'circular',
        circular: {
          rotateLabel: true
        },
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: false,
        label: {
          position: 'right',
          formatter: '{b}',
        },
        lineStyle: {
          color: 'source',
          curveness: 0.4
        }
      }
    ],
  };
  myChart.setOption(option);
});

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    // window.addEventListener('resize', myChart.resize);
    window.onresize = myChart.resize;
}
