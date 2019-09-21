import TContainer from './src/index.vue';

TContainer.install = function(Vue){
    Vue.component(TContainer.name,TContainer)
};

export default TContainer