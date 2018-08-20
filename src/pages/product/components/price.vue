<template>
	<div class="price_page">
		<h3 class="title">DCAR Miner   x1</h3>
		<p class="intro">First generation high performance cartesian mining machine</p>
		<h4 class="price">$1820</h4>
		<span class="buybtn">立即购买</span>
		<div class="product">
			<img src="../../../assets/img/home/product_1.png" />
		</div>

	</div>
</template>

<script>
	export default {
		name: 'priceWrap'
	}
</script>

<style lang="scss" scoped>
	@import '~@/assets/styles/public';
	.price_page {
		/*border:1px solid red;*/
		text-align: center;
		box-shadow: 0 50px 50px #1d1e21;
		/*color: #FFFFFF;*/
		padding-top: 120px;
		.title {
			font-size: 30px;
			font-weight: bold;
			color: #455eca;
			line-height: 50px;
		}
		.intro {
			font-size: 18px;
			color: #d8dce6;
		}
		.price {
			font-size: 30px;
			line-height: 95px;
		}
		.product {}
		.buybtn {
			@include btn_product_buy;
			font-size: 16px;
			margin-bottom: 120px;
			/*display: block;*/
		}
	}
</style>