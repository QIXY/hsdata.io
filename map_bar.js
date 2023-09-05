 function draw_mapbar() {

     var dom = document.getElementById('map_bar');
            var myChart = echarts.init(dom, {
              renderer: 'canvas',
              useDirtyRect: false
            });
            var app = {};
            var option;

            myChart.showLoading();
        $.get('./data/world.json', function (worldJson) {
          myChart.hideLoading();
          echarts.registerMap("world", worldJson, {

          });
          var data = [
            { name: '中国', value: 40474 },
            { name: '西班牙', value: 3661 },
            { name: '日本', value: 3081 },
            { name: '法国', value: 2735 },
            { name: '德国', value: 1571 },
            { name: '芬兰', value: 1120 },
            { name: '土耳其', value: 1052 },
            { name: '意大利', value: 921 },
            { name: '韩国', value: 873 },
            { name: '瑞典', value: 860 },
            { name: '美国', value: 735 },
            { name: '沙特阿拉伯', value: 449 },
            { name: '奥地利', value: 254 },
            { name: '波兰', value: 224 },
            { name: '比利时', value: 209 },
            { name: '摩洛哥', value: 186 },
            { name: '瑞士', value: 176 },
            { name: '英国', value: 113 },
            { name: '荷兰', value: 90 },
            { name: '丹麦', value: 56 }
          ];
          data.sort(function (a, b) {
            return a.value - b.value;
          });
          const mapOption = {
            title: {
              text: '各国高铁里程数量',
              left: '20%',
              top: 20,
              textStyle:{
                fontSize:20,
                fontWeight:'bold',
                color:"#FFFFFF"
          }
            },
            visualMap: {
              left: '90%',
              min: 0,
              max: 5000,
              inRange: {
                // prettier-ignore
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
              },
              text: ['里程较长', '里程较短'],
              textStyle:{
                fontSize:12,
                fontWeight:'normal',
                color:"#FFFFFF"
            },
              calculable: false
            },
            series: [
              {
                id: 'population',
                type: 'map',
                roam: false,
                map: 'world',
                animationDurationUpdate: 1000,
                universalTransition: true,
                data: data
              }
            ]
          };
          const barOption = {
            color: ['#3398DB'],
            grid: {
                left: '15%',
                top:'0%'
            },
            // title: {
            //   text: '各国高铁里程数量',
            //   left: '20%',
            //   top: 20,
            //   textStyle:{
            //     fontSize:20,
            //     fontWeight:'bold',
            //     color:"#FFFFFF"
            // }
            // },

            title: {
              text:'数据来源：UIC. ATLAS High-Speed Rail 2022[R]',
              left: '10%',
              top: 'bottom',
              textStyle:{
                fontSize:12,
                fontWeight:'normal',
                color:'grey'
            }
            },


            xAxis: {
              type: 'value',
              min: 0,
              max: 45000,
              interval: 5000,
              name:'高铁里程数量(km)',
              nameTextStyle: {
                  fontSize: 12,
                  color:"#FFFFFF"
                },
              axisLabel: {
                fontSize:12,
                textStyle:{color:"#FFFFFF"}
              }  
            },
            yAxis: {
              type: 'category',
              axisLabel: {
                fontSize:12,
             //   rotate: 30
              },
              axisLabel: {
                fontSize:12,
                textStyle:{color:"#FFFFFF"}
              },

              data: data.map(function (item) {
                return item.name;
              })
            },
            animationDurationUpdate: 1500,
            series: {
              type: 'bar',
              id: 'population',
              data: data.map(function (item) {
                return item.value;
              }),
              label: {
                position: 'right',
                show: true,
                color:"#FFFFFF"
              },
              universalTransition: true
            }
          };
          let currentOption = barOption;
          myChart.setOption(barOption);
          
          // let currentOption = mapOption;
          // myChart.setOption(mapOption);
          // setInterval(function () {
          //   currentOption = currentOption === mapOption ? barOption : mapOption;
          //   myChart.setOption(currentOption, true);
          // }, 5000);
        });

            if (option && typeof option === 'object') {
              myChart.setOption(option);
            }

 }