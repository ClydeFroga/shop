export const state = () => ({
  goods: [],
})

export const mutations = {
  setGoods(state, goods) {
    state.goods = goods
  },
}

export const actions = {
  async loadGoods({commit}, params) {
    let goods = await this.$axios.$get(`https://611a2bc9cbf1b30017eb5559.mockapi.io/product`)
    // let goods = [{"title":"Apple Watch Series 4 GPS","desc":"Redesigned from scratch and completely revised.","price":20,"image":"https://i.postimg.cc/KzLKwbf7/iphone-x.png","rating":4,"id":"1","brandId":"1","categoryId":"1"},{"title":"JBL Speaker","desc":"Redesigned from scratch and completely revised.","price":325,"image":"https://i.postimg.cc/cHmWr5Ly/jbl-speaker.png","rating":4.5,"id":"2","brandId":"2","categoryId":"2"},{"title":"Apple iPhone X 128GB","desc":"Redesigned from scratch and completely revised.","price":600,"image":"https://i.postimg.cc/Y0DwxGFd/apple-watch.png","rating":4.2,"id":"3","brandId":"6","categoryId":"3"},{"title":"Beats Headphones","desc":"Redesigned from scratch and completely revised.","price":200,"image":"https://i.postimg.cc/GhNC8Dd2/magic-mouse.png","rating":3.2,"id":"4","brandId":"6","categoryId":"9"},{"title":"Apple Macbook Pro 512GB SSD","desc":"Redesigned from scratch and completely revised.","price":800,"image":"https://i.postimg.cc/Y0DwxGFd/apple-watch.png","rating":4.2,"id":"5","brandId":"8","categoryId":"4"},{"title":"Beats Headphones","desc":"Redesigned from scratch and completely revised.","price":678,"image":"https://i.postimg.cc/wM7rgWtk/beats-headphones.png","rating":4.1,"id":"6","brandId":"10","categoryId":"5"},{"title":"Apple Macbook Pro 512GB SSD","desc":"Redesigned from scratch and completely revised.","price":55,"image":"https://i.postimg.cc/mDdqxxrD/macbook-pro.png","rating":2,"id":"7","brandId":"3","categoryId":"6"},{"title":"Apple iPad Pro 64GB","desc":"Redesigned from scratch and completely revised.","price":1700,"image":"https://i.postimg.cc/zvc9hmmM/homepod.png","rating":4.9,"id":"8","brandId":"4","categoryId":"7"},{"title":"Apple Homepod","desc":"Redesigned from scratch and completely revised.","price":2599,"image":"https://i.postimg.cc/GhNC8Dd2/magic-mouse.png","rating":5,"id":"9","brandId":"5","categoryId":"9"},{"title":"JBuds Air Wireless Bluetooth","desc":"Redesigned from scratch and completely revised.","price":145,"image":"https://i.postimg.cc/fLwnnjjH/jlab-audio-wireless.png","rating":1.2,"id":"10","brandId":"5","categoryId":"10"},{"title":"Apple Magic Mouse","desc":"Redesigned from scratch and completely revised.","price":2366,"image":"https://i.postimg.cc/Y0DwxGFd/apple-watch.png","rating":1.7,"id":"11","brandId":"8","categoryId":"6"},{"title":"Beats Headphones","desc":"Redesigned from scratch and completely revised.","price":876,"image":"https://i.postimg.cc/KzLKwbf7/iphone-x.png","rating":3.5,"id":"12","brandId":"7","categoryId":"2"},{"title":"Apple Magic Mouse","desc":"Redesigned from scratch and completely revised.","price":653,"image":"https://i.postimg.cc/GhNC8Dd2/magic-mouse.png","rating":3.5,"id":"13","brandId":"1","categoryId":"1"},{"title":"JBL Speaker","desc":"Redesigned from scratch and completely revised.","price":890,"image":"https://i.postimg.cc/cHmWr5Ly/jbl-speaker.png","rating":3.7,"id":"14","brandId":"2","categoryId":"7"},{"title":"Apple iPad Pro 64GB","desc":"Redesigned from scratch and completely revised.","price":996,"image":"https://i.postimg.cc/L8frJ0xC/ipad-pro.png","rating":2.8,"id":"15","brandId":"3","categoryId":"2"},{"title":"JBuds Air Wireless Bluetooth","desc":"Redesigned from scratch and completely revised.","price":456,"image":"https://i.postimg.cc/wM7rgWtk/beats-headphones.png","rating":3.2,"id":"16","brandId":"1","categoryId":"8"},{"title":"Apple iPhone X 128GB","desc":"Redesigned from scratch and completely revised.","price":855,"image":"https://i.postimg.cc/Y0DwxGFd/apple-watch.png","rating":3.4,"id":"17","brandId":"4","categoryId":"9"}]

    commit('setGoods', goods)
  },

}

export const getters = {
  goods: state => state.goods,
}
