import { createRouter, createWebHistory } from 'vue-router'

const Market = () => import('views/fa/content/market/Market.vue');
const Message = () => import('views/fa/content/message/Message.vue');
const Quote = () => import('views/fa/content/quote/Quote.vue');
const Friend = () => import('views/fa/content/friend/Friend.vue');
const Suggestion = () => import('views/fa/content/suggestions/Suggestion.vue');
const MessageContent = () => import('views/fa/content/message/MessageContent.vue');
const BlankContent = () => import('views/fa/content/message/BlankContent.vue');
const Register = () => import('views/fa/head/user/Register.vue');
const Login = () => import('views/fa/head/user/Login.vue');
const ForgetPassword = () => import('views/fa/head/user/ForgetPassword.vue');

const routes = [
    //主路由
    {
        path: '',
        name: 'DefaultHome',
        component: Market
    },
    {
        path: '/',
        name: 'Home',
        component: Market,
    },
    {
        path: '/fa/market',
        name: 'Market',
        component: Market,
    },
    //消息路由
    {
        path: '/fa/message',
        name: 'Messsage',
        component: Message,
        children: [
            {
                path: '',
                component: BlankContent
            },
            {
                path: 'message-content',
                component: BlankContent
            },
            {
                path: 'message-content/:ftsid',
                component: MessageContent
            }

        ]
    },

    //注册路由
    {
        path: '/fa/register',
        name: 'Register',
        components: {
            // default: Register,
            register: Register
        },
        meta: {
            /*title: "注册",
            fullPath: "/fa/register",*/
            keepAlive: true,
            isBack: false
        }
    },

    //登录路由
    {
        path: '/fa/login',
        name: 'Login',
        components: {
            // default: Login,
            login: Login
        },
        meta: {
            title: "登录",
            keepAlive: true
        }
    },

    //重置密码路由
    {
        path: '/fa/forget-password',
        name: 'ForgetPassword',
        components: {
            // default: ForgetPassword,
            forgetpassword: ForgetPassword
        },
        meta: {
            title: "重置密码",
            keepAlive: true
        }
    },
    //子路由的嵌套路由
    {
        path: '/fa/quote',
        name: 'Quote',
        component: Quote,
    },
    {
        path: '/fa/friend',
        name: 'Friend',
        component: Friend,
    },
    {
        path: '/fa/suggestion',
        name: 'Suggestion',
        component: Suggestion,
    },
    {
        path: '/fa/suggestion',
        name: 'Suggestion',
        component: Suggestion,
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
