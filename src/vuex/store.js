/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;

// 虚拟数据
var appData = require('../common/data.json')
// var seller = appData.seller;
// var goods = appData.goods;
// var ratings = appData.ratings;
// 虚拟数据

const state = {
	onlyContent: false,
	selectType: ALL,
	// seller: appData.seller,
	// goods: appData.goods,
	// ratings: appData.ratings
	seller: null,
	goods: null,
	ratings: null,
}
const actions = {
	getSeller({ commit }) {
		return new Promise((resolve, reject) => {
			setTimeout( () => {
				var seller = appData.seller;
				commit('setSeller', seller);
				resolve();
			}, 500);
		});
	},
	getGoods({ commit }) {
		return new Promise((resolve, reject) => {
			setTimeout( () => {
				var goods = appData.goods;
				commit('setGoods', goods);
				resolve();
			}, 200);
		});
	},
	getRatings({ commit }) {
		return new Promise((resolve, reject) => {
			setTimeout( () => {
				var ratings = appData.ratings;
				commit('setRatings', ratings);
				resolve();
			}, 200);
		});
	}
}
const mutations = {
	toggleOnlyContent(state) {
      // 变更是否只显示有内容
      state.onlyContent = !state.onlyContent
    },
    toggleSelectType(state,type) {
    	state.selectType = type;
    },
    setSeller(state, seller) {
    	state.seller = seller;
    },
    setGoods(state, goods) {
    	state.goods = goods;
    },
    setRatings(state, ratings) {
    	state.ratings = ratings;
    }
}
export default new Vuex.Store({
	state,
	actions,
	mutations
})