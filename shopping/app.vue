<template>
	<div>
		<div class="header">
			<a href="#" class="header-title">电商网站示例</a>
			<div class="header-menu">
				<a href="javascript:;" class="header-title" @click="handlerCart">购物车<span>1</span></a>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import list from './views/list.vue';
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			handlerCart(){
				this.$router.push('/cart');
			},
			
		},
		components:{
			list,
		}
	}
</script>

<style>
	.header{
		height: 48px;
		line-height: 48px;
		background: #323232;
		color: #FFFFFF;
	}
	.header-title{
		color: #FFFFFF;
		padding: 0 32px;
	}
	.header-menu{
		float: right;
		color: #FFFFFF;
	}
	.header-title span{
		display: inline-block;
		width: 16px;
		height: 16px;
		line-height: 16px;
		text-align: center;
		font-size: 12px;
		border-radius: 50%;
		background: #ff5500;
		color: white;
		
	}
</style>