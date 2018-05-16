<template>
	<div>
		<div class="productdetail">
			<div class="product-img">
				<img :src="img1" />
			</div>
			<div class="product-info">
				<h1 class="product-name">Apple pod</h1>
				<div class="product-cost">￥1188</div>
				<div class="product-add-cart">加入购物车</div>
			</div>
		</div>
		<div class="product-desc">
			<h2>产品介绍</h2>
			<img :src="img1" />
		</div>
	</div>
</template>

<script>
	import img1 from '../images/1.jpeg'
	
	export default{
		data(){
			return{
				img1:img1
			}
		}
	}
</script>

<style>
	.productdetail{
		margin: 32px;
        padding: 32px;
        background: #fff;
        border: 1px solid #dddee1;
        border-radius: 10px;
        overflow: hidden;
	}
	.product-img{
		width: 50%;
		height: 550px;
		float: left;
		text-align: center;
	}
	.product-img img{
		height: 100%;
	}
	
	.product-info{
		padding: 150px 0 150px;
		width: 50%;
		height: 150px;
		float: left;
		text-align: center;	
	}
	.product-cost{
		color: #f2352e;
		margin: 8px 0;
	}
	.product-add-cart{
		display: inline-block;
		padding: 8px 64px;
		margin: 8px 0;
		background: #2d8cf0;
		border-radius: 4px;
		cursor: pointer;
		color: white;
	}
	
	.product-desc{
		margin: 32px;
        padding: 32px;
        background: #fff;
        border: 1px solid #dddee1;
        border-radius: 10px;
        text-align: center;
	}
.product-desc img{
	display: block;
	width: 50%;
	margin: 32px auto;
	padding: 32px;
	border-bottom: 1px solid #DDDEE1;
}
	

</style>