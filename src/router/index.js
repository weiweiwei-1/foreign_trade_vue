import { createRouter, createWebHistory } from 'vue-router'

const Market = () => import('views/container/content/main/subComp/Market');
const Message = () => import('views/container/content/main/subComp/Message');
const Quote = () => import('views/container/content/main/subComp/Quote');
const Friend = () => import('views/container/content/main/subComp/Friend');
const Suggestion = () => import('views/container/content/main/subComp/Suggestion');
const MessageContent = () => import('views/container/content/main/subComp/subMessage/MessageContent');
const BlankContent = () => import('views/container/content/main/subComp/subMessage/BlankContent');
const Register = () => import('views/container/header/subComp/userInformation/register/Register');
const Login = () => import('views/container/header/subComp/userInformation/login/Login');
const ForgetPassword = () => import('views/container/header/subComp/userInformation/forgetPassword/ForgetPassword');

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
            register: Register
        },
    },

    //登录路由
    {
        path: '/fa/login',
        name: 'Login',
        components: {
            login: Login
        },
    },

    //重置密码路由
    {
        path: '/fa/forget-password',
        name: 'ForgetPassword',
        components: {
            forgetpassword: ForgetPassword
        },
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
