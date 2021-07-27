import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        droppedShapes: [],
        fallingShapes: [],
        randomlyPlacedShapes: [],
        isGamePaused: true,
        isModalShown: false,
        fallingIntervalGap: null
    },
    mutations ,
    actions
});