$(()=>{let t=[],e=[];for(let n=0;n<=1;n+=.1)t.push(i(n,1)),e.push(i(-1*(o(a=n)+o(1-a)),2));var a;let n={title:{text:"二进熵函数曲线"},tooltip:{},legend:{data:["信息量"]},xAxis:{data:t},yAxis:{},series:[{name:"信息量",type:"line",smooth:"true",data:e}]};function i(t,e){return Math.round(t*Math.pow(10,e))/Math.pow(10,e)}function o(t){return 0===t?0:t*Math.log2(t)}echarts.init($(".main").get(0)).setOption(n)});