import AuthForm from './components/AuthFormComponent'
import MenuCreate from './components/MenuItemComponents/MenuItemCreateComponent'
import MenuEdit from './components/MenuItemComponents/MenuItemEditComponent'
import NoticeList from './components/NoticeListComponent'
import ContactList from './components/ContactComponents/ContactListComponent'
import EditUser from './components/UserComponents/EditUserComponent'
import UserList from './components/UserComponents/UserListComponent'

export default [
	{
		path: '/admin/login',
		component: AuthForm,
		name: 'login',
		meta: { title: 'Вход' }
	},
	{
		path: '/admin/menu/:parentItem?/create',
		component: MenuCreate,
		name: 'menu.create',
		meta: { title: 'Админцентр. Создание страницы' }
	},
	{
		path: '/admin/menu/:menuItem/edit',
		component: MenuEdit,
		name: 'menu.edit',
		meta: { title: 'Админцентр. Редактирование страницы' }
	},
	{
		path: '/admin',
		component: NoticeList,
		name: 'notices.list',
		meta: { title: 'Админцентр. Уведомления' }
	},
	{
		path: '/admin/contacts',
		component: ContactList,
		name: 'contacts.list',
		meta: { title: 'Админцентр. Контакты' }
	},
	{
		path: '/admin/user',
		component: UserList,
		name: 'user.list',
		meta: { title: 'Админцентр. Пользователи' }
	},
	{
		path: '/admin/user/:user/edit',
		component: EditUser,
		name: 'user.edit',
		meta: { title: 'Админцентр. Редактирование пользователя' }
	},
]
