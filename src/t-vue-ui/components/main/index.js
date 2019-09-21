import TMain from './src/index.vue';

TMain.install = function(Vue){
    Vue.component(TMain.name,TMain);
};

export default TMain