var vm = new Vue({
    el: '#app',
    data: {
      count: 0,
    },
    methods: {
      updateEvent: function () {
        this.count += 1;
      },
    },
    beforeCreate: function () {
      // 元件實體剛被建立，屬性計算之前。（取不到實體中的data）
      console.log('beforeCreate - this.count: ', this.count);
      console.log('beforeCreate - this.$el: ', this.$el);  //$el指的html中的dom
    },
    created: function () {
      // 元件實體已建立，屬性已綁定，但 DOM 還沒生成。
      console.log('created - this.count: ', this.count);  //可以取得實體資料
      console.log('created - this.$el: ', this.$el);
    },
    beforeMount: function () {
      // 模板 (template) 編譯或掛載至 HTML 之前
      console.log('beforeMount - this.$el: ', this.$el);
    },
    mounted: function () {
      // 模板 (template) 編譯或掛載至 HTML 之後
      console.log('mounted - this.$el: ', this.$el);
    },
    beforeUpdate: function () {
      // 元件被更新之前
      console.log('beforeUpdate: ', 
      this.$el.querySelector('h1').innerText, //這邊就是取得html 的h1
      this.count);
    },
    updated: function () {
      // 元件被更新之後
      console.log('updated: ', 
      this.$el.querySelector('h1').innerText, 
      this.count);
    },
    beforeDestroy: function () {
      // 移除 vue instance 之前
      console.log('beforeDestroy');
    },
    destroyed: function () {
      // 移除 vue instance 之後
      console.log('destroyed');
    },
  });

  document.getElementById('del').addEventListener('click', function () {
    vm.$destroy(); //vm指的是new Instance(vue實體)
  });
