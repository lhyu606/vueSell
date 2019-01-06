<template>
  <div id="app">
   <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive  v-if="$route.meta.keepAlive">
    	<router-view :seller="seller" keep-alive></router-view>
    </keep-alive>
    
  </div>
</template>

<script type="text/ecmascript-6">
	/* eslint-disable */
import header from '@/components/header/header.vue'
import {urlParse} from '@/common/js/util.js'

const ERR_OK = 0;
export default {
  name: 'app',
  data () {
  	return {
  		seller: {
  			id: (() => {
  				let queryParam = urlParse();
  				return queryParam.id;
  			})()
  		}
  	}
  },
  created() {
    // 使用 resource 请求数据
  	// this.$http.get('http://localhost:808/api/seller?id=12345').then((res) => {
  	// 	res = res.body;
  	// 	if (res.errno === ERR_OK){
  	// 		this.seller = Object.assign({},this.seller,res.data);
  	// 		//this.seller = res.data;
  	// 	}
  	// })
    // 使用 resource 请求数据

    // 模拟请求数据（实为本地数据）
    this.$store.dispatch('getSeller').then(() => {
      this.seller = this.$store.state.seller; 
    });    
    // 模拟请求数据（实为本地数据）
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus">
@import "common/stylus/base.styl"
#app .tab
	display: flex
	width: 100%
	height: 40px
	line-height: 40px
	.tab-item
		flex: 1
		text-align: center
		a
			display: block
			font-size: 14px
			color: rgb(77,85,93)
			&.active
				color: rgb(240,20,20)
</style>
