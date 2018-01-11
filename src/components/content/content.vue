<template>
	<div class="app">
		
	</div>
</template>

<script type="ecmascript-6">
	import header from '@/components/header/header.vue'
	export default {
		name: 'body',
	  components: {
	    'v-header': header
	  }
	}
</script>

<style >
.app .tab{display: flex;width: 100%;height: 40px;line-height: 40px;}
.app .tab .tab-item{flex: 1;text-align: center;}
</style>