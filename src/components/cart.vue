<template>
<div class="cart" :class="isCartVisible ? 'cart__open' : 'cart__closed'">

	<div class="message" v-if="isCartEmpty">
		Your cart is currently empty.
	</div>

	<div class="header">
		<div class="quantity">
			<span v-if="cart.length===1" style="color:gray">Item: </span>
			<span v-if="cart.length!==1" style="color:gray">Items: </span>
			<span style="font-weight: bold;color:#38f;">{{cart.length}}</span>
		</div>
		<div class="cost">
			<span style="color:gray">Total: </span>
			<span style="font-weight:bold;color:#38f;">Sh. {{totalCostOfCart}}</span>
		</div>
	</div>

	<div class="post" v-for="(post, index) in cart" :key="index">
		<img src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="image">
		<div class="description">
			<div class="title">{{post.title}}</div>
			<div class="price">Sh. {{post.price}}</div>
		</div>
	</div>

	<div class="checkout">
		<sui-button primary fluid large>Checkout</sui-button>
	</div>
</div>
</template>

<script>
export default {
	name: "Cart",
	props: [
		'isCartVisible',
		'isCartEmpty',
		'totalCostOfCart',
		'cart'
	]
}
</script>

<style lang="scss">
.cart {
	border: 1px solid gray;
	border-radius: 3px;
	margin-left: 10px;
	position: absolute;
	top: 5px;
	right: 0;
	background: #fff;
	width: 350px;
	padding: 5px;

	.header {
		display: flex;
		justify-content: space-between;
		padding: 5px 0;
		margin: 0 5px 5px;
		border-bottom: 1px solid gray;
	}

	.message {
		text-align: center;
		padding: 2em;
	}

	.post {
		display: flex;
		padding: 5px;

		.image {
			max-width: 20%;
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

	.checkout {
		margin-top: 5px;
		padding: 0 5px;
	}
}

.cart__open {
	height: auto;
}
.cart__closed {
	height: 0;
	display: none;
}
</style>