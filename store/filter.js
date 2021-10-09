export const state = () => ({
  categories: [],
  brands: [],
})

export const mutations = {
  setCatAndBrand(state,catAndBrand) {
    state.categories = catAndBrand[1]
    state.brands = catAndBrand[0]
  },
}

export const actions = {
  async catAndBrand({commit}) {
    let categories = await this.$axios.$get('https://611a2bc9cbf1b30017eb5559.mockapi.io/category')
    let brands = await this.$axios.$get('https://611a2bc9cbf1b30017eb5559.mockapi.io/brand')
    // let brands = [{"title":"Insigni","id":"1"},{"title":"Samsung","id":"2"},{"title":"Apple","id":"3"},{"title":"HP","id":"4"},{"title":"Sony","id":"5"},{"title":"title 6","id":"6"},{"title":"title 7","id":"7"},{"title":"title 8","id":"8"},{"title":"title 9","id":"9"},{"title":"title 10","id":"10"}]
    // let categories = [{"name":"Cell Phones","id":"1"},{"name":"Computers & tablets","id":"2"},{"name":"Cell Phone Accessories","id":"3"},{"name":"Appliances","id":"4"},{"name":"Audio","id":"5"},{"name":"iPhone Accessories","id":"6"},{"name":"Cameras & Camcorders","id":"7"},{"name":"iPhone Cases & Clips","id":"8"},{"name":"TV & Home Theater","id":"9"},{"name":"Small Kitchen Appliances","id":"10"}]

    commit('setCatAndBrand', [brands, categories])
  },
}

export const getters = {
  categories: state => state.categories,
  brands: state => state.brands,
}
