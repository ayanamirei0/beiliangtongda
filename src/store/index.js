import 'babel-polyfill'
import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
// import vuexAlong from 'vuex-along'//通过这个插件解决页面刷新清空store的问题
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
    //北粮申请表管理接口 两个固定参数 后台提供
    orgCode: "1013",
    formCode: "zcl_1",//资产使用计划表zcl_1
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    // plugins: [vuexAlong]
})
