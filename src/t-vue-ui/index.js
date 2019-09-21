import TRow from './components/row/index';
import TCol from './components/col/index';
import TContainer from './components/container/index';
import THeader from './components/header/index';
import TMain from './components/main/index';
import TFooter from './components/footer/index';
import TAside from './components/aside/index';

const components = [
    TRow,
    TCol,
    TContainer,
    THeader,
    TMain,
    TFooter,
    TAside
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
    TContainer,
    THeader,
    TMain,
    TFooter,
    TAside

}