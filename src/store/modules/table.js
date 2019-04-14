import tableData from '../../api/table';


// initial state
const state = {
  data: [],
  rendered: false,
}

// getters
const getters = {};

// actions
const actions = {
  getTableData({
    commit
  }) {
    tableData.getTableDataRequest(products => {
      console.log(products)
      console.log("here we work with dispatched action");
      commit('setTableData', products);
      commit('setRenderedStatus');
    })
  }
  // getTableData({
  //   commit
  // }) {
  //   const response = tableData.getTableDataRequest();
  //   console.log(tableData.getTableDataRequest());
  //   commit('setTableData', response);
  //   commit('setRenderedStatus')
  // }
}

// mutations
const mutations = {
  setTableData(state, products) {
    // console.log('here we set products into state');
    state.data = products;
  },
  setRenderedStatus(state) {
    // console.log('here we set status into state');
    state.rendered = true;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}