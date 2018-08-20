<template>
	<div class="multifunction_page">
		<p class="title">DCAR 多功能钱包</p>
		<div class="info">
			<p>笛卡尔矿机, 数字资产统一管理, 跨平台,多终端,每日收益,大盘行情 ,一览无余</p>
			<p>基于 Linux 内核, 内置加密引擎, 金融级安全防护</p>
			<p>技术团队为矿机系统及软件提供终身免费升级</p>
		</div>
		<img class="app" src="../../../assets/img/home/app.png" />
	</div>
</template>

<script>
	export default {
		name: 'multifunctionWrap'
	}
</script>

<style lang="scss" scoped>
	.multifunction_page {
		text-align: center;
		padding: 30px;
		.title {
			font-size: 30px;
			font-weight: bold;
			color: #FFFFFF;
			line-height: 80px;
		}
		.info {
			font-size: 16px;
			color: #FFFFFF;
			line-height: 40px;
			margin-bottom: 50px;
			color: #e6e6f1;
		}
		.app {
			padding: 50px 0;
		}
	}
</style>