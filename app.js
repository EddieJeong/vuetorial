new Vue({
  el: '#app',
  data: {
    name: 'Eddie',
    hobby: 'Study English'
  },
  methods: {
    decorate: function (adj) {
      return 'so ' + adj + ' ' + this.name
    }
  }
})