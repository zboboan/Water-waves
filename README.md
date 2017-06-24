# bowen
水波纹效果组件

## 关于 数据接口 的说明
 
 > 接收五个参数，el：点击的元素（必填）只能是原生节点
 
 >fn:回调函数，当点击的时候触发的函数
 
 >WH:初始时最小圆，就是点击一瞬间时创建的圆的宽高，数值类形，默认值 20
 
 >backColor：圆的颜色，字符串类形，默认值  '#999'
 
 >scale：放大倍数，从小变大的最大范围，就是 transform:scale() 的值，默认值  7
 
 >目前不支持IE，并继续优化中，有什么BUG欢提交问题
 
 ### 效果
 
 <img src="https://github.com/baymaxking/bowen/blob/master/aaa2.gif" width="365" height="619"/>
 
 ```
  var wat = new WaterWave();
  wat.init({
      el:ali,
      scale:14,
      WH:20,
      backColor:'#00f',
      fn:function (){
        console.log('回调')
      }
  });
 ```
