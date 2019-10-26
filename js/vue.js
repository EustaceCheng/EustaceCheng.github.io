
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '測試' },
      { id: 1, text: 'vue' },
      { id: 2, text: '學習' }
    ]
  }
})

