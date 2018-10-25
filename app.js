new Vue({
  el: '#app',
  data: {
    name: 'Eddie',
    hobby: 'Study English',
    naver: 'https://naver.com',
    naverTag: '<a href="https://naver.com">naver.com tag</a>'
  },
  methods: {
    decorate: function (adj) {
      return 'so ' + adj + ' ' + this.name
    }
  }
})