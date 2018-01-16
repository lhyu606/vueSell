<template>
	<div class="cartcontrol">
		<transition name="move">
			<div class="cart-decrease " v-show="food.count>0" @click="decreaseCart">
				<span class="inner icon-remove_circle_outline"></span>
			</div>
		</transition>
		<transition name="move">
			<div class="cart-count" v-show="food.count>0">
				{{ food.count }}
			</div>
		</transition>
		<div class="cart-add icon-add_circle" @click="addCart">
			
		</div>
	</div>
</template>

<script type="ecmascript-6">
	/* eslint-disable */
	import Vue from 'vue'
	export default {
		props: {
			food: {
				type: Object
			}
		},
		created() {
			//console.log('this.food')
			//console.log(this.food)
		},
		methods: {
			addCart(event) {
				if(!event._constructed){
					return;
				}
				if(!this.food.count){
					Vue.set(this.food,'count',1);
				}else{
					this.food.count++;
				}
			},
			decreaseCart(event) {
				if(!event._constructed){
					return;
				}
				if(this.food.count){
					this.food.count--;
				}
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size: 0
		.cart-decrease
			display: inline-block
			padding: 6px
			&.move-enter-active, &.move-leave-active
				transition: all 0.3s linear
			&.move-enter, &.move-leave-to
				transform: translate3d(24px,0px,0px) rotate(180deg)
				opacity: 0
			.inner
				font-size: 24px
				line-height:24px
				color: rgb(0,160,240)
		.cart-count
			display: inline-block
			vertical-align: top
			width: 12px
			padding-top: 6px
			line-height: 24px
			text-align: center
			font-size: 10px
			color: rgb(147,153,159)
			&.move-enter-active, &.move-leave-active
				transition: all 0.3s linear
			&.move-enter, &.move-leave-to
				transform: translate(5px,0px)
				opacity: 0
		.cart-add
			display: inline-block
			padding: 6px
			font-size: 24px
			line-height:24px
			color: rgb(0,160,240)
</style>