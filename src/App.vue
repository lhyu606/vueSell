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
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
	/* eslint-disable */
import header from '@/components/header/header.vue'

const ERR_OK = 0;
export default {
  name: 'app',
  data () {
  	return {
  		seller: {}
  	}
  },
  created() {
  	this.$http.get('http://localhost:808/api/seller').then((res) => {
  		console.log(res)
  		res = res.body;
  		if (res.errno === ERR_OK){
  			this.seller = res.data;
  			console.dir(this.seller)
  		}
  	})
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
