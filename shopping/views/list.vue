<template>
	<div>
		<div class="list-control">
			<div class="list-control-filter">
				<span>品牌:</span>
				<span class="list-control-filter-item">Apple</span>
				<span class="list-control-filter-item">Beats</span>
				<span class="list-control-filter-item">B&O</span>
				<span class="list-control-filter-item">Bose</span>
			</div>
			<div class="list-control-filter">
				<span >颜色:</span>
				<span class="list-control-filter-item">白色</span>
				<span class="list-control-filter-item">金色</span>
				<span class="list-control-filter-item">黄色</span>
				<span class="list-control-filter-item">蓝色</span>
			</div>
			<div class="list-control-filter">
				<span>排序:</span>
				<span class="list-control-filter-item">默认</span>
				<span class="list-control-filter-item">销量</span>
				<span class="list-control-filter-item">价格</span>
			</div>
		</div>
		<Product ></Product>
		<Product></Product>
		<Product></Product>
		<Product></Product>
		<Product></Product>
	</div>
</template>

<script>
	import Product from '../components/product.vue';
	export default{
		data(){
			return{
				
			}
		},
		components:{
			Product,
		},
		methods:{
			handleDetail(){
				this.$router.push('/product/123');
			}
		}
	}
</script>

<style>
	.list-control{
		background: #FFFFFF;
		border-radius: 6px;
		margin: 16px;
		padding: 16px;
		box-shadow: 0 1px 1px rgba(0,0,0,.2);
	}
	.list-control-filter{
		margin-bottom: 16px;
	}
	.list-control-filter-item{
		cursor: pointer;
		border: 1px solid #e9eaec;
		border-radius: 4px;
    	margin-right: 6px;
		padding: 2px 6px;
	}
</style>