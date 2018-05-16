import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router'
import Vuex from 'vuex';
import App from './app.vue';
import './style.css';

Vue.use(VueRouter);
Vue.use(Vuex);

//路由配置
const RouterConfig={
	mode:'history',
	routes:Routers
};

const router=new VueRouter(RouterConfig);
router.beforeEach((to,from,next)=>{
	window.document.title=to.meta.title;
	next();
});

router.afterEach((to,from,next)=>{
	window,scrollTo(0,0);
});

//数组重排
function getFilterArray(array){
	const res=[];
	const jspn={};
	for(let i=0;i<array;i++){
		const _self=array[i];
		if(!json[_self]){
			res.push(_self);
			json[_self]=1;
		}
	}
	return json;
}

new Vue({
	el:"#app",
	router:router,
	render:h=>{
		return h(App);
	}
})
