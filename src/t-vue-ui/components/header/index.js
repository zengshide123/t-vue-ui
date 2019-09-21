import THeader from './src/index.vue';

THeader.install = function(Vue){
    Vue.component(THeader.name,THeader)
};

export default THeader