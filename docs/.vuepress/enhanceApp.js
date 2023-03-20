// import './styles/variable.styl'
//代码高亮文件引入
import Vue from 'vue'
import Toast from './components/core/toast'
Vue.use(Toast)
console.log('1234')
// import hljs from 'highlight.js'
// //样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
// import 'highlight.js/styles/color-brewer.css' 
// Vue.directive('highlight',function (el) {
//   let blocks = el.querySelectorAll('pre code');
//       blocks.forEach((block)=>{
//       hljs.highlightBlock(block)
//   })
// })
export default ({ Vue // VuePress 正在使用的 Vue 构造函数
                }) => {
// ...做一些其他的应用级别的优化
}