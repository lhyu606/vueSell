/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;

const state = {
	onlyContent: false,
	selectType: ALL
}
const actions = {

}
const mutations = {
	toggleOnlyContent(state) {
      // 变更是否只显示有内容
      state.onlyContent = !state.onlyContent
    },
    toggleSelectType(state,type) {
    	state.selectType = type;
    }
}
export default new Vuex.Store({
	state,
	actions,
	mutations
})