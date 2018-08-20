<template>
	<div class="detail_page">
		<b-container class="bv-example-row">
			<b-row>
				<b-col cols="12" sm="12" md="6" lg="6" align-self="center" class="chip">
					<img src="../../../assets/img/home/processor.png" />
				</b-col>
				<b-col cols="12" sm="12" md="6" lg="6" align-self="center">
					<div class="term" v-for="(item,index) of detailList" :key="item.id">
						<p class="title">{{item.title}}</p>
						<p class="text">{{item.text}}</p>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {
		name: 'detailWrap',
		data() {
			return {
				detailList: [{
					"id": "001",
					"title": "澎湃动力",
					"text": "企业级4核CPU 64位处理器"
				}, {
					"id": "002",
					"title": "接口丰富",
					"text": "1080P HDMI, IEEE802b/gn, USB, SATA, SPI, JTAG你需要的都在这里"
				}, {
					"id": "003",
					"title": "硬件加密",
					"text": "原生 TrustZone安全加密机制,拆机自毁"
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail_page {
		padding: 30px 0 100px;
		/*color: #FFFFFF;*/
		.chip {
			img {
				width: 400px;
			}
		}
		.term {
			margin-top: 20px;
			.title {
				font-size: 18px;
				font-weight: bolder;
				
				/*line-height: 50px;*/
				/*height: px;*/
			}
			.text {
				color: #e6e6f1;
				font-size: 14px;
				line-height: 30px;
			}
		}
	}
</style>