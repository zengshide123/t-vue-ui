import TRow from './components/row/index.js';
import TCol from './components/col/index.js';
import TContainer from './components/container/index';

const components = [
    TRow,
    TCol,
    TContainer
];

const install = function(Vue,opts = {}){
    components.forEach(component=>{
        Vue.component(component.name,component);
    });
};

// 无打包编译环境中使用
if(typeof window !=='undefined' && window.Vue){
    install(window.Vue);
};

export default {
    version:'1.0.0',
    // 全局引入
    install,
    // 按需引入
    TRow,
    TCol,
    TContainer

}