<template>
  <section class="pagination">
    <div class="pagination__left">
      <svg-icon width="6" height="12" class="" name="chevron-left"></svg-icon>
    </div>
    <div class="pagination__middle">
<!--      <span id="page1" @click="load(1,$event)">-->
<!--        1-->
<!--      </span>-->
<!--      <span id="page2" @click="load(2,$event)">-->
<!--        2-->
<!--      </span>-->
    </div>
    <div class="pagination__right">
      <svg-icon width="6" height="12" class="" name="chevron-left"></svg-icon>
    </div>

  </section>
</template>

<script>
export default {
  mounted() {
    this.addStyle(this.$route.query.page == null ? 1 : this.$route.query.page)
  },
  methods: {
    addStyle(page) {
        let item = document.querySelector(`#page${page}`)
        if(item) {
          item.classList.add('nuxt-link-exact-active')
        }

    },
    // async load(page, event) {
    //   let all = document.querySelectorAll('.pagination__middle > span')
    //   for (let i of all) {
    //     i.classList.remove('nuxt-link-exact-active')
    //   }
    //   event.target.classList.add('nuxt-link-exact-active')
    //
    //   this.$router.push({
    //     query: {
    //       ...this.$route.query,
    //       page: page,
    //     },
    //   })
    // }
  }
}
</script>

