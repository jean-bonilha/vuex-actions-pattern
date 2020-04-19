import axios from 'axios'

const setList = async ({ commit }) => {
  const { data } = await axios.get('http://localhost/api/dqc841')
  commit('SET_LIST', data)
}

export default {
  setList,
}
