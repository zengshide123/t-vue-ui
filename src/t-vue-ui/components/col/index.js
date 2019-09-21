import TCol from './src/index.vue';

// 配合按需引入
TCol.install = function(Vue){
    Vue.component(TCol.name,TCol);
};

export default TCol;