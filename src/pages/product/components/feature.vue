<template>
	<div class="feature_page">
		<b-container class="bv-example-row">
			<b-row>
				<b-col cols="12" sm="12" md="6" lg="4" align-self="start" v-for="(item,index) of featureList" :key="item.id">
					<div class="term">
						<p class="title">{{item.title}}</p>
						<span class="line"></span>
						<p class="text">{{item.text}}</p>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {
		name: 'featureWrap',
		data() {
			return {
				featureList: [{
					"id": "001",
					"title": "匠心设计",
					"text": "技术与艺术的完美融合,用 DCAR x1 感受 时代进步"
				}, {
					"id": "002",
					"title": "持续在线",
					"text": "7x24无间断稳定运行, 低功耗, 无噪音"
				}, {
					"id": "003",
					"title": "维护省心",
					"text": "接通电源和网络,无需配置, 自动工作"
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.feature_page {		
		padding: 140px 0;
		/*background-color: #19191c;*/
		/*color: #FFFFFF;*/
		.term {
			max-width: 290px;
			.title {
				font-size: 24px;
				color: #FFFFFF;
				font-weight: bold!important;
				line-height: 50px;
			}
			.line {
				width: 100%;
				height: 6px;
				display: block;
				background: linear-gradient(to right, #747bcc, #465fca);
				margin-bottom: 20px;
			}
			.text{
				font: 16px;
				line-height: 20px;
				color:#e6e6f1;;
			}
		}
	}
</style>