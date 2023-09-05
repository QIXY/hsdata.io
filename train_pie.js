function draw_trainpie() {
	var dom = document.getElementById('train_pie');
    var myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  tooltip: {
    trigger: 'item'
  },
  // legend: {
  //   top: '5%',
  //   left: 'center'
  // },
  series: [
    {
      name: '各国高铁动车组数量占比',
      type: 'pie',
      radius: ['50%', '85%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      // label: {
      //   show: true,
      //   formatter(param) {
      //     // correct the percentage
      //     return param.name + ' (' + param.percent * 2 + '%)';
      //   },
      // },
      emphasis: {
        label: {
          show: true,
          fontSize: 36,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: true
      },
      data: [
        { value: 54.7, name: '中国' },
        { value: 7, name: '英国' },
        { value: 6.5, name: '德国' },
        { value: 6.3, name: '法国' },
        { value: 6.2, name: '日本' },
        { value: 3.9, name: '意大利' },
        { value: 3.7, name: '西班牙' },
        { value: 2.8, name: '韩国' },
        { value: 1.9, name: '瑞典' },
        { value: 1.8, name: '瑞士' },
        { value: 1.4, name: '奥地利' },
        { value: 0.7, name: '土耳其' },
        { value: 0.5, name: '沙特阿拉伯' },
        { value: 0.3, name: '波兰' },
        { value: 0.3, name: '美国' },
        { value: 0.2, name: '摩洛哥' },
        { value: 1.8, name: '其他' }
      ]
    }
  ],
  color:['#ee6666', '#fc8452', '#91cc75', '#5470c6',  '#73c0de', '#fac858', '#3ba272', '#96BFFF','#9a60b4','#e06343','#6bb6c7', '#8378EA','#37A2DA','#b08fd3','#49baa6','#3b9b64','#6bba49']
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}