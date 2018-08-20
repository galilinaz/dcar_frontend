<template>
	<div class="product_page">
		<!--头部-->
		<header-wrap></header-wrap>
		<!--购买-->
		<buy-wrap></buy-wrap>
		<!--价格-->
		<price-wrap></price-wrap>
		<!--特色-->
		<feature-wrap></feature-wrap>
		<!--版本-->
		<detail-wrap></detail-wrap>
		<!--多功能-->
		<multifunction-wrap></multifunction-wrap>
		<!--底部-->
		<div class="footer">
			<copyright-wrap></copyright-wrap>
		</div>
	</div>
</template>
<script>
	import HeaderWrap from "@/components/header/header"
	import buyWrap from "./components/buy"
	import priceWrap from "./components/price"
	import featureWrap from "./components/feature"
	import detailWrap from "./components/detail"
	import multifunctionWrap from "./components/multifunction"
	import copyrightWrap from "@/components/footer/components/copyright"
	export default {
		name: 'Product',
		components: {
			HeaderWrap,
			buyWrap,
			priceWrap,
			featureWrap,
			detailWrap,
			multifunctionWrap,
			copyrightWrap
		}
	}
</script>

<style scoped lang="scss">
	@import '~@/assets/styles/public';
	.product_page {
		background-color: $product_background;
		color: $bright;
	}	
	.footer {
		background-color: #16171a;
		padding: 150px 0;
	}
</style>