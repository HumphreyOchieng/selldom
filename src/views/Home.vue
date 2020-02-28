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
		<product-grid
			:posts = "posts"
			@product-click="openProductModal"
		></product-grid>

		<cart
			:cart="this.cart"
			:isCartVisible="this.isCartVisible"
		></cart>

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
import Cart from "@/components/cart";
import ProductGrid from "@/components/product-grid";

export default {
	name: 'Home',
	components: {
		Cart, ProductGrid
	},
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
			selectedPost: {}
		}
	},
	methods: {
		addToCart: function (index) {
			this.cart.push(this.posts[index]);
		},
		viewCart: function () {
			this.isCartVisible = !this.isCartVisible;
		},
		openProductModal: function (index) {
			this.isProductModalVisible = !this.isProductModalVisible;
			this.selectedPost = this.posts[index];
			this.selectedPost.index = index;
		}
	}
}
</script>

<style lang="scss">
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

.panels {
	padding-top: 5px;
	position: relative;
}

.modal {
	font-size: 18px;
	display: flex;
	flex-direction: column;
}

</style>