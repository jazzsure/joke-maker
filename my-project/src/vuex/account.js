export default {
  // 定义状态
  namespaced: true,
  state: {
    author: 'Wise Wrong'
  },
  mutations: {
    newAuthor (state, msg) {
        state.author = msg;
    }
  },
  getters: {
    doubleCount (state) {
      return state.author + state.author
    }
  }
}