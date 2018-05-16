<template>
	<div class="product" @click="handleDetail">
		<a class="product-main">
		<img :src="images[0]" />
		<h4>AirPods</h4>
		<div class="product-color"></div>
		<div class="product-const">￥19999.9999</div>
		<div class="product-add-cart">加入购物车</div>
		</a>
	</div>
</template>

<script>
	import img1 from '../images/1.jpeg';
	import img2 from '../images/2.jpeg';
	import img3 from '../images/3.jpeg';
	import img4 from '../images/4.jpeg';
	import img5 from '../images/5.jpeg';
	export default{
		data(){
			return{
				images:[img1,img2,img3,img4,img5]
			}
		},
		methods:{
			handleDetail(){
				this.$router.push('/product/123');
			}
		}
	}
</script>

<style>
	.product{
		width: 25%;
		float: left;
	}
	.product-main{
		display: block;
		margin: 16px;
		padding: 16px;
		border: 1px solid #dddee1;
		border-radius: 6px;
		overflow: hidden;
		background: #FFFFFF;
		text-align: center;
		position: relative;
	}
	img{
		width: 100%;
		height: 40%;
	}
	.product-color{
	}
</style>