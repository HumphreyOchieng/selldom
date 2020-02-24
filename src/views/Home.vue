<template>
<div class="home">
	<nav class="navigation">
		<div href="" class="link header">Selldom</div>
		<sui-button @click="viewCart">
			<span v-show="isCartVisible">Close</span>
			<span v-show="!isCartVisible">Cart ({{cart.length}})</span>
		</sui-button>
	</nav>

	<div class="panels">

		<div class="posts">
			<div class="post" v-for="(post, index) in posts" :key="index" @click="viewProductModal(index)">
				<img src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="image">
				<div class="content">
					<div class="title">{{post.title}}</div>
					<div class="details">
						<div class="price">Sh. {{post.price}}</div>
						<div class="rating">{{post.rating}}</div>
					</div>		
				</div>
			</div>
		</div>

		<div class="cart" :class="isCartVisible ? 'cart__open' : 'cart__closed'">
			<div class="message" v-if="isCartEmpty">
				Your cart is currently empty.
			</div>
			<div class="header">
				<div class="quantity">
					<span style="font-weight: bold;">{{cart.length}}</span>
					<span v-if="cart.length===1"> item</span>
					<span v-if="cart.length!==1"> items</span>
				</div>
				<div class="cost">Total: <span style="font-weight: bold;">Sh. {{totalCostOfCart}}</span></div>
			</div>
			<div class="save" v-for="(post, index) in cart" :key="index">
				<img src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="image">
				<div class="description">
					<div class="title">{{post.title}}</div>
					<div class="price">Sh. {{post.price}}</div>
				</div>
			</div>
		</div>

		<sui-modal v-model="isProductModalVisible">
			<sui-modal-content image>
				<sui-image
					size="large"
					src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"
				/>
				<sui-modal-description class="modal">
					<h3 class="title">{{selectedPost.title}}</h3>
					<p class="price">Sh. {{selectedPost.price}}</p>
					<sui-button primary @click="addToCart(selectedPost.index)">Add to Cart</sui-button>
				</sui-modal-description>
			</sui-modal-content>
		</sui-modal>
	</div>
</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			posts: [
				{title: 'Used Laptop', price: '44000', rating: '3.4'},
				{title: 'Mountain Bike', price: '24000', rating: '3.8'},
				{title: 'T-Shirt', price: '500', rating: '3.8'},
				{title: 'Keyboard and Mouse', price: '1000', rating: '4.3'},
				{title: 'Desk', price: '14000', rating: '4.0'},
				{title: 'Blankets', price: '800', rating: '3.6'},
				{title: 'Mugs', price: '200', rating: '4.1'},
				{title: 'Leather Jacket', price: '4000', rating: '4.5'}
			],
			cart: [],
			isCartVisible: false,
			isProductModalVisible: false,
			selectedPost: {},
			classObject: {
				openCart: 'cart__open',
				closedCart: 'cart__closed'
			}
		}
	},
	computed: {
		isCartEmpty: function () {
			return this.cart.length===0;
		},
		totalCostOfCart: function () {
			let initialCost = 0;
			return this.cart.reduce((accumulator, currentValue) => {
				return accumulator + parseInt(currentValue.price);
			}, initialCost);
		}
	},
	methods: {
		addToCart: function (index) {
			this.cart.push(this.posts[index]);
		},
		viewCart: function () {
			this.isCartVisible = !this.isCartVisible;
		},
		viewProductModal: function (index) {
			this.isProductModalVisible = !this.isProductModalVisible;
			this.selectedPost = this.posts[index];
			this.selectedPost.index = index;
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

			.header {
				display: flex;
				justify-content: space-between;
				padding: 10px 5px;
			}

			.message {
				text-align: center;
				padding: 2em;
			}
		}

		.cart__open {
			height: auto;
		}
		.cart__closed {
			height: 0;
			display: none;
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
	border-top: 1px solid gray;

	.image {
		max-width: 30%;
	}

	.description {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding-left: 10px;

		.title {
			font-weight: bold;
			padding-bottom: 5px;
		}
		.price {
			margin-bottom: auto;
		}
	}
}

.modal {
	font-size: 18px;
	display: flex;
	flex-direction: column;
}

</style>