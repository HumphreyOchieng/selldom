<template>
<div class="posts">
	<product-card 
		v-for="(post, index) in posts" 
		:key="index" 
		@product-click="$emit('product-click', index)"
		:post="post"
	></product-card>
</div>	
</template>

<script>
import ProductCard from './product-card.vue';
export default {
	name: "ProductGrid",
	props: ["posts"],
	components: {
		ProductCard
	},
	methods: {
		openProductModal: function (index) {
			alert("Open modal: " + index);
		}
	}
}
</script>

<style lang="scss">
.posts {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-gap: 5px;
}
</style>