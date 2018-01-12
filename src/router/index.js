import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import seller from '@/components/seller/seller.vue'
import goods from '@/components/goods/goods.vue'
import ratings from '@/components/ratings/ratings.vue'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    }, {
      path: '/seller',
      name: 'seller',
      component: seller
    }, {
      path: '/goods',
      name: 'goods',
      component: goods
    }, {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ],
  linkActiveClass: 'active'
})
