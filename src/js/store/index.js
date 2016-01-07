import Vue from 'vue';
import Vuex from 'vuex';
import {chatListInitialState, chatListMutations} from './module/chatlist.js';
import {initialState, initialMutations} from './module/initial.js'
import {membersState, membersMutations} from './module/members.js'
import * as actions from "./actions.js";

Vue.use(Vuex);

Vue.config.debug = true

const store = new Vuex.Store({
	strict: true,
	middlewares: [Vuex.createLogger()],
	state: {
		members: membersState,
		view: initialState.view,
		currentChatIndex: initialState.currentChatIndex,
		chatList: chatListInitialState
	},

	mutations: [chatListMutations, initialMutations],
	
	actions,
})



export default store;