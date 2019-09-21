import TRow from './src/index.vue';

// 按需引入
TRow.install = function(Vue){
    Vue.component(TRow.name,TRow);
};

export default TRow