<template>
	<div class="cart">
		<div class="cart-header">
			<div class="cart-header-title">购物清单</div>
			<div class="cart-header-main">
				<div class="cart-info">商品信息</div>
				<div class="cart-price">单价</div>
				<div class="cart-count">数量</div>
				<div class="cart-cost">小计</div>
				<div class="cart-delete">删除</div>
			</div>
		</div>
		<div class="cart-content">
			<div class="cart-content-main">
				<div class="cart-info">BeatsX入耳式耳机</div>
				<div class="cart-price">￥ 1188</div>
				<div class="cart-count">
					<span class="cart-control-minus">-</span> 1
					<span class="cart-control-minus">+</span>
				</div>
				<div class="cart-cost">￥ 1188</div>
				<div class="cart-delete">
					<span class="cart-control-delete">删除</span>
				</div>
			</div>
		</div>
		<div class="cart-promotion">
			<span>使用优惠码</span>
			<input type="text" />
			<span class="cart-control-promotion">验证</span>
		</div>
		<div class="cart-footer">
			<div class="cart-footer-desc">
				共计
				<span>1</span> 件商品
			</div>
			<div class="cart-footer-desc">
				应付总额
				<span>￥1188</span>
			</div>
			<div class="cart-footer-desc">
				<div class="cart-control-order">现在结算</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	.cart {
		margin: 32px;
		background: #FFFFFF;
		border: 1px solid #DDDEE1;
		border-radius: 10px;
	}
	
	.cart-header-title {
		padding: 16px 32px;
		border-bottom: 1px solid #DDDEE1;
		border-radius: 10px 10px 0 0;
		background: #F8F8F9;
	}
	
	.cart-header-main {
		padding: 8px 32px;
		border-bottom: 1px solid #DDDEE1;
		background: #eee;
		overflow: hidden;
	}
	
	.cart-content {}
	
	.cart-content-main {
		padding: 0 32px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		border-bottom: 1px dashed #E9EAEC;
	}
	
	.cart-info {
		float: left;
		width: 60%;
		text-align: left;
	}
	
	.cart-price {
		float: left;
		width: 10%;
		text-align: center;
	}
	
	.cart-count {
		float: left;
		width: 10%;
		text-align: center;
	}
	
	.cart-cost {
		float: left;
		width: 10%;
		text-align: center;
	}
	
	.cart-delete {
		float: left;
		width: 10%;
		text-align: center;
	}
	
	.cart-promotion {
		padding: 16px 32px;
	}
	
	.cart-control-promotion {
		padding: 2px 6px;
		font-size: 12px;
		border-radius: 3px;
		display: inline-block;
		background: #2d8cf0;
		color: #FFFFFF;
		cursor: pointer;
	}
	
	.cart-footer {
		padding: 32px;
		text-align: right;
	}
	
	.cart-footer-desc {
		display: inline-block;
		padding: 0 16px;
	}
	.cart-footer-desc{
		display: inline-block;
		padding: 0 16px;
	}
	.cart-control-minus{
		display: inline-block;
		margin: 0 4px;
		width: 24px;
		height: 24px;
	    line-height: 22px;
		text-align: center;
		background: #F8F8F9;
		border-radius: 50%;
		box-shadow: 0 1px 1px rgba(0,0,0,0.2);
	    cursor: pointer;
	}
	.cart-control-order{
		display: inline-block;
		padding: 8px 32px;
		border-radius: 6px;
		background: #2d8cf0;
		color: #FFFFFF;
		cursor: pointer;
	}
	
	.cart-footer-desc span{
		font-size: 20px;
		color: red;
	}
</style>