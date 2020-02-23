<template>
<div class="home">
	<nav class="navigation">
		<a href="" class="link header">Store</a>
		<a href="" class="link">Cart ( {{cart.length}} )</a>
	</nav>
	<div class="posts">
		<div class="post" v-for="(post, index) in posts" :key="index" @click="addToCart(index)">
			<img src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="image">
			<div class="content">
				<div class="title">{{post.title}}</div>
				<div class="details">
					<div class="price">{{post.price}}</div>
					<div class="rating">{{post.rating}}</div>	
				</div>		
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			posts: [
				{title: 'Used Laptop', price: 'Sh 44,000', rating: '3.4'},
				{title: 'Mountain Bike', price: 'Sh 24,000', rating: '3.8'},
				{title: 'T-Shirt', price: 'Sh 500', rating: '3.8'},
				{title: 'Keyboard and Mouse', price: 'Sh 1,000', rating: '4.3'},
				{title: 'Desk', price: 'Sh 14,000', rating: '4.0'},
				{title: 'Blankets', price: 'Sh 800', rating: '3.6'},
				{title: 'Mugs', price: 'Sh 200', rating: '4.1'},
				{title: 'Leather Jacket', price: 'Sh 4,000', rating: '4.5'}
			],
			cart: []
		}
	},
	methods: {
		addToCart: function (index) {
			this.cart.push(this.posts[index]);
		}
	}
}
</script>

<style lang="scss">
.navigation {
	display: flex;
	padding: 10px 0;
	border-bottom: 1px solid gray;

	.header {
		flex: 1;
		font-weight: 500;
		font-size: 22px;
	}
	.link {
		color: inherit;
	}
}

.posts {
	padding-top: 15px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 5px;
}

.post {
	border: 1px solid gray;

	.image {
		max-width: 100%;
	}

	.content {
		padding: 5px;

		.title {
			font-weight: bold;
		}

		.details {
			display: flex;
			padding-top: 5px;

			.price {
				flex: 1;
			}
		}
	}

	&:hover {
		cursor: pointer;
		border: 1px solid black;
	}
}


</style>
