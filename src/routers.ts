/*
 * @author: phil.li
 */
const arrRoutes = [
	{
		path: '/',
		component: './controller/web/index.ts',
	},
	{
		path: '/api/university',
		component: './controller/university/university.ts',
	},
	{
		path: '/api/tang300',
		component: './controller/tang300.ts',
	},
	{
		path: '/api/wx-login',
		component: './controller/we-app/getUserInfo.ts',
	},
];

export default arrRoutes