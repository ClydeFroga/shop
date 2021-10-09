<template>
  <div class="container shop">
    <header-shop/>
    <div class="shop__bottom">
      <filter-shop/>
      <search-shop/>
      <nuxt/>
      <pagination/>
    </div>
  </div>
</template>

<script>
  import headerShop from "../components/header"
  import filterShop from "../components/filter"
  import searchShop from "../components/search"
  import pagination from "../components/pagination"
  export default {
  name: "default",
    components: {
      headerShop,
      filterShop,
      searchShop,
      pagination,
    },
  }
</script>
