new Vue({
  el: '#app',
  data: {
    arr: ['Id', 'Name', 'Price']
  },
  methods: {
    del (index) {
      // this.arr.splice(index, 1)
      this.$delete(this.arr, index)
    }
  }
})
