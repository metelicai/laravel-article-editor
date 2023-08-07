import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import routes from './routes'
import dayjs from 'dayjs'
import ruLocale from 'dayjs/locale/ru'
import { createPinia } from 'pinia'
import { checkToken } from './sdk'
import { useStore } from './store'

const VueRouter = require('vue-router')
const pinia = createPinia()

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
	routes,
});

router.beforeEach(async (to, from, next) => {
	const store = useStore();
	const isLoginRoute = to.name == 'login';
	let localToken = localStorage.getItem('token');
	let isLogined = false;

	if (!isLoginRoute && localToken && !store.getToken()) {
		await checkToken(localToken).then(response => {
			if (response.data?.check) {
				isLogined = true;
				store.setToken(localToken);
				store.reloadPages();
				store.loadBlockTypes();
				store.loadUser();
			}
		}).catch(() => {
			next({ name: 'login' })
		});
	}

	if (isLoginRoute || (localToken && isLogined) || store.getToken()) {
		next()
	} else {
		next({ name: 'login' })
	}
})

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$dayjs.locale(ruLocale);
//app.config.globalProperties.$dayjs.extend(relativeTime)

app.use(router).use(pinia).mount('#app')

window.customCollectionName = (prefix) => {
	return prefix + '_' + ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	);
}
