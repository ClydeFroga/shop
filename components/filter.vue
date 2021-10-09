<template>
  <section class="filter">
    <span>Фильтр  <svg-icon width="10" height="5" class="" name="chevron-down"></svg-icon></span>
    <form @submit="form" id="mainForm" class="filter__main">
      <div class="filter__mainBox" id="range">
        <span class="filter__mainBoxTitle">
          Multi Range
        </span>
        <div>
          <input id="range1" name="range" type="radio" value="0-10">
          <label for="range1">$10</label>
        </div>
        <div>
          <input id="range2" name="range" type="radio" value="10-100">
          <label for="range2">$10-$100</label>
        </div>
        <div>
          <input id="range3" name="range" type="radio" value="100-500">
          <label for="range3">$100-$500</label>
        </div>
        <div>
          <input id="range4" name="range" type="radio" value="500-99999">
          <label for="range4">$500</label>
        </div>
        <div>
          <input checked id="range5" name="range" type="radio" value="0-999999">
          <label for="range5">All</label>
        </div>
      </div>
      <hr>
      <div class="filter__mainBox filter__mainBoxSlider">
        <div class="filter__mainBoxSliderTop">
          <span class="filter__mainBoxTitle ">
            Slider
          </span>
          <span class="filter__mainBoxSliderResult">
            {{sliderValueMin}} - {{sliderValueMax}}
          </span>
        </div>
        <div id="slider"></div>
      </div>
      <hr>
      <div class="filter__mainBox">
        <span class="filter__mainBoxTitle">
          Category
        </span>
        <div v-for="category of categories" :key="category.id">
          <input :id="category.name" name="category" type="checkbox" :value="category.id">
          <label :for="category.name">{{category.name}} <span>2222</span></label>
        </div>
      </div>
      <hr>
      <div class="filter__mainBox">
        <span class="filter__mainBoxTitle">
          Brand
        </span>
        <div v-for="brand of brands" :key="brand.id">
          <input :id="brand.title" name="brand" type="checkbox" :value="brand.id">
          <label :for="brand.title">{{brand.title}}  <span>2222</span></label>
        </div>
      </div>
      <hr>
      <div class="filter__mainBox filter__mainBoxRating">
        <span class="filter__mainBoxTitle">
          Rating
        </span>
        <div>
          <input  id="radio1" type="radio" name="rating" value="5">
          <label for="radio1">
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
          </label>
          <span>2222</span>
        </div>
        <div >
          <input id="radio2" type="radio" name="rating" value="4">
          <label for="radio2">
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star" name="star"></svg-icon>
          </label>
          <span>2222</span>
        </div>
        <div>
          <input id="radio3" type="radio" name="rating" value="3">
          <label for="radio3">
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star" name="star"></svg-icon>
          </label>
          <span>2222</span>
        </div>
        <div>
          <input id="radio4" type="radio" name="rating" value="2">
          <label for="radio4">
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star " name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star " name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star" name="star"></svg-icon>
          </label>
          <span>2222</span>
        </div>
        <div >
          <input checked id="radio5" type="radio" name="rating" value="1">
          <label for="radio5">
            <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star " name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star " name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star " name="star"></svg-icon>
            <svg-icon width="21" height="19" class="star" name="star"></svg-icon>
          </label>
          <span>2222</span>
        </div>
      </div>
      <button type="submit" class="filter__button">
        FILTER
      </button>
    </form>

    <button class="filter__button" v-on:click="clear">
      CLEAR ALL FILTERS
    </button>
  </section>
</template>

<script>

import noUiSlider from "~/plugins/nouislider.js";

export default {
  data: () => ({
    sliderValueMin: 75,
    sliderValueMax: 400,
    currentRating: 5,
    width: 1920,
  }),
  mounted() {
    this.width = document.documentElement.clientWidth
    this.$nextTick(() => {
      this.slider();
      this.rating();
    })
    if(this.width <= 576) {
      this.filterOpen();
    }
  },
  async fetch() {
    if (this.$store.getters['filter/brands'].length === 0) {
      await this.$store.dispatch('filter/catAndBrand')
    }
  },
  computed: {
    brands() {
      return this.$store.getters['filter/brands']
    },
    categories() {
      return this.$store.getters['filter/categories']
    }
  },
  methods: {
    slider() {
      let slider = document.getElementById('slider');
      noUiSlider.create(slider, {
        start: [this.sliderValueMin, this.sliderValueMax],
        connect: true,
        range: {
          'min': 1,
          'max': 500
        },
        step: 1,
      });
      this.sliderValues()
    },
    sliderValues() {
      let min = document.querySelector('.noUi-handle-lower');
      let max = document.querySelector('.noUi-handle-upper');

      min.addEventListener('mousemove', () => {
        this.sliderValueMin = Number.parseInt(min.attributes[7].value)
      })
      max.addEventListener('mousemove', () => {
        this.sliderValueMax = Number.parseInt(max.attributes[7].value)
      })
    },
    rating() {
      let ratings = document.querySelectorAll('.filter__mainBoxRating > div')
      for (let item of ratings) {
        item.addEventListener('click', () => {
            this.currentRating = +item.dataset.rating;
        })
      }
    },
    clear() {
      let slider = document.getElementById('slider');
      let mr = document.getElementById('range5');
      let catAndBrand = document.querySelectorAll('.filter__mainBox input[type=checkbox]')

      for (let i of catAndBrand) {
        i.checked = false;
      }
      mr.checked = true
      slider.noUiSlider.reset();
      this.sliderValueMin = 75
      this.sliderValueMax = 400
      this.currentRating = 5
    },
    filterOpen() {
      let filterButton = document.querySelector('.filter > span')

      filterButton.addEventListener('click', () => {
        document.querySelector('.filter').classList.toggle('open')
      })
    },
    form(e) {
      e.preventDefault();
      let formData = new FormData(e.target)
      let range = formData.get('range')

      let minrange = range.match(/\d+/)[0]
      let maxrange = range.match(/\d+$/)[0]

      let category = []
      e.target.querySelectorAll('input[name=category]:checked').forEach( element => {
        category.push(element.value)
      })
      category = category.join(',')
      formData.set('category', category)
      category = formData.get('category')

      let brand = []
      e.target.querySelectorAll('input[name=brand]:checked').forEach( element => {
        brand.push(element.value)
      })
      brand = brand.join(',')
      formData.set('brand', brand)

      brand = formData.get('brand')
      let rating = formData.get('rating')


      this.$router.push({
        query: {
          ...this.$route.query,
          minrange: minrange,
          maxrange: maxrange,
          category: category,
          brand: brand,
          rating: rating,
        },
      })
    },

  }
}
</script>

