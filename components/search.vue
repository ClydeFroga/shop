<template>
  <section class="search">
    <div class="search__top">
      <span class="search__topLeft">7,618 results found in 5ms</span>
      <div class="search__topRight">
        <div class="search__topRightBlock dropdown">
          <span class="dropdown__current">Default <svg-icon width="10" height="5" class="" name="chevron-down"></svg-icon></span>
          <ul class="dropdown__list">
            <li>
              Cheaper
            </li>
            <li>
              Expensive
            </li>
          </ul>
        </div>
        <div v-on:click="toGrid" class="search__topRightBlock search__topRightBlockSvg">
          <svg-icon width="16" height="16" class="" name="grid"></svg-icon>
        </div>
        <div v-on:click="toList"  class="search__topRightBlock search__topRightBlockSvg">
          <svg-icon width="16" height="16" class="" name="list"></svg-icon>
        </div>
      </div>
    </div>
    <form @submit="search" class="search__bottom">
      <input placeholder="Search hear" type="text" v-model="searchValue">
      <button type="submit"><svg-icon width="19" height="18" class="" name="search"></svg-icon></button>
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    searchValue: ''
  }),
  mounted() {

  },
  methods: {
    toGrid() {
      document.querySelector('.goods').classList.remove('horizontal')
    },
    toList() {
      document.querySelector('.goods').classList.add('horizontal')
    },
    search(e) {
      e.preventDefault();
      this.$router.push({
        query: {
          ...this.$route.query,
          search: this.searchValue.toLowerCase(),
        },
      })
    }
  }
}
</script>

