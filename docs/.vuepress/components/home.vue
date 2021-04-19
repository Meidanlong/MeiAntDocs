<template>
	<div>
		<a-button type="primary">我就是你们要找的按钮</a-button>
		
		<a-checkbox checked>Checkbox</a-checkbox>
		
		<a-input placeholder="Basic usage" />
		
		<a-radio checked>Radio</a-radio>
		
		<a-rate :defaultValue="4.5" allowHalf />
	</div>
	
</template>

<script>
	export default {
	  name: 'home',
	  data() {
	    return {};
	  },
	}
</script>

<style>
</style>
