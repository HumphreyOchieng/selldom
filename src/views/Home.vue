<template>
<div class="home">
	<nav class="navigation">
		<div href="" class="link header">Selldom</div>
		<sui-button @click="openCart">Cart ({{cart.length}})</sui-button>
	</nav>

	<div class="panels">

		<div class="posts">
			<div class="post" v-for="(post, index) in posts" :key="index" @click="viewProductDetails(index)">
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

		<div class="cart" :class="isCartVisible ? 'cart__open' : 'cart__closed'">
			<div class="message" v-if="isCartEmpty">
				Your cart is currently empty.
			</div>
			<div class="save" v-for="(post, index) in cart" :key="index">
				<img src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="image">
				<div class="content">
					<div class="title">{{post.title}}</div>
					<div class="price">{{post.price}}</div>
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
			cart: [],
			isCartVisible: false,
			classObject: {
				openCart: 'cart__open',
				closedCart: 'cart__closed'
			}
		}
	},
	computed: {
		isCartEmpty: function () {
			return this.cart.length===0;
		}
	},
	methods: {
		addToCart: function (index) {
			this.cart.push(this.posts[index]);
		},
		openCart: function () {
			this.isCartVisible = !this.isCartVisible;
		},
		viewProductDetails: function (index) {
			alert("open product: " + index);
		}
	}
}
</script>

<style lang="scss">
.home {
	.panels {
		padding-top: 5px;
		position: relative;

		.cart {
			border: 1px solid gray;
			border-radius: 3px;
			margin-left: 10px;
			position: absolute;
			top: 5px;
			right: 0;
			background: #fff;
			width: 400px;

			.message {
				text-align: center;
				padding: 2em;
			}
		}

		.cart__open {
			height: auto;
			opacity: 1;
		}
		.cart__closed {
			height: 0;
			opacity: 0;
		}
	}
}

.navigation {
	display: flex;
	padding: 10px 0;

	.header {
		margin-right: auto;
		font-weight: 500;
		font-size: 26px;
		align-self: center;
	}
}

.posts {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 5px;
}

.post {
	border: 1px solid gray;
	border-radius: 3px;

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

.save {
	display: flex;
	padding: 5px;
	border-bottom: 1px solid gray;

	.image {
		max-width: 30%;
	}

	.content {
		display: flex;
		flex-direction: column;
		padding-left: 10px;

		.title {
			font-weight: bold;
		}
	}
}


</style>
