<template>
  <section class="goods">
    <div v-for="good of goods" class="goods__item" :key="good.id">
      <div class="goods__itemImg">
        <img :src="good.image">
      </div>
      <div class="goods__itemBottom">
        <div>
          <div class="goods__itemBottomRating">
            <span class="">{{good.rating}} <svg-icon width="12" height="12" class="star white" name="star"></svg-icon></span>
          </div>
          <div class="goods__itemBottomPrice">
            <span class="goods__itemBottomPrice">${{good.price}}</span>
          </div>
        </div>
        <span class="goods__itemBottomTitle">{{good.title}}</span>
        <span class="goods__itemBottomDesc">{{good.desc}}</span>
        <div>
          <div class="goods__itemBottomWishlist">
            <span><svg-icon width="15" height="13" class="" name="heart"></svg-icon> WISHLIST</span>
          </div>
          <div class="goods__itemBottomCart">
            <span ><svg-icon width="16" height="18" class="" name="shopping-bag"></svg-icon> ADD TO CART</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    goods: []
  }),
  async fetch() {
    await this.$store.dispatch('goods/loadGoods')
  },
  mounted() {
    this.getGoods()
  },
  watch: {
    '$route'() {
      this.getGoods();
    },
  },
  methods: {
    getGoods(
      page = this.$route.query.page == null ? 1 : this.$route.query.page,
      search = this.$route.query.search ? this.$route.query.search : null,
      maxrange = this.$route.query.maxrange  ? this.$route.query.maxrange : null,
      minrange = this.$route.query.minrange  ? this.$route.query.minrange :  null,
      category = this.$route.query.category  ? this.$route.query.category : null,
      brand = this.$route.query.brand  ? this.$route.query.brand : null,
      rating = this.$route.query.rating  ? this.$route.query.rating : null,
    ) {
      let options = {
        title: search,
        maxrange: maxrange,
        minrange: minrange,
        category: category,
        brand: brand,
        rating: rating,
      }

      let all = this.$store.getters['goods/goods']

      let goodItem = []

      for(let item of all) {
        if(options.title !== null && options.title !== '') {
          if(item.title.toLowerCase().indexOf(options.title.toLowerCase()) === -1) continue;
        }
        if(options.maxrange !== null) {
          if(item.price > options.maxrange) continue;
        }
        if(options.minrange !== null) {
          if(item.price < options.minrange) continue;
        }
        if(options.category !== null) {
          let categories = options.category.split(',')
          let correct = false
          for (let cat of categories) {
            if(+item.categoryId === +cat) {
              correct = true
              break
            }
          }
          if(!correct) continue
        }
        if(options.brand !== null) {
          let brands = options.brand.split(',')
          let correct = false
          for (let brand of brands) {
            if(+item.brandId === +brand) {
              correct = true
              break
            }
          }
          if(!correct) continue
        }
        if(options.rating !== null) {
          if(+item.rating < +options.rating) continue;
        }

        goodItem.push(item)
      }

      let min = page == 1 ? 0 : (page * 9) - 9
      let max = page * 9

      this.goods = goodItem.slice(min, max)

      if(goodItem.length>9) {
        let pages = Math.ceil(all.length / 9)

        this.makePagination(pages)
      }
    },
    makePagination(count) {
      let middle = document.querySelector('.pagination__middle')

      for (let item of middle.children) {
        item.remove()
      }

      for(let i = 0; i < count;i++) {
        let str =`<span id="page${i+1}">${i+1}</span>`
        middle.insertAdjacentHTML('beforeend', str)
      }

      for (let item of middle.children) {
        // item.addEventListener('click',this.loadPage(item))
      }
    },
    async loadPage(event) {
      let all = document.querySelectorAll('.pagination__middle > span')
      for (let i of all) {
        i.classList.remove('nuxt-link-exact-active')
      }
      event.classList.add('nuxt-link-exact-active')

      this.$router.push({
        query: {
          ...this.$route.query,
          page: event.innerText,
        },
      })
    }
  }
}
</script>
