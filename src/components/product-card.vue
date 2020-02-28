<template>
<div class="product" @click="$emit('product-click')">
	<img src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="image">
	<div class="content">
		<div class="title">{{post.title}}</div>
		<div class="details">
			<div class="price">Sh. {{post.price}}</div>
		</div>		
	</div>
</div>
</template>

<script>
export default {
	name: "ProductCard",
	props: ["post"]
}	
</script>

<style lang="scss">
.product {
	border: 1px solid gray;
	border-radius: 3px;

	.image {
		max-width: 100%;
	}

	.content {
		padding: 5px;
		display: flex;
		flex-direction: column;

		.title {
			flex: 1;
		}

		.details {
			display: flex;

			.price {
				flex: 1;
				font-weight: bold;
			}
		}
	}

	&:hover {
	cursor: pointer;
	border: 1px solid black;
	}
}
</style>