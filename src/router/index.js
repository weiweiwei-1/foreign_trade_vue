import { createRouter, createWebHistory } from 'vue-router'

const Market = () => import('views/container/content/menu/subComp/Market');
const Message = () => import('views/container/content/menu/subComp/Message');
const Quote = () => import('views/container/content/menu/subComp/Quote');
const Friend = () => import('views/container/content/menu/subComp/Friend');
const Suggestion = () => import('views/container/content/menu/subComp/Suggestion');
const MessageContent = () => import('views/container/content/menu/subComp/subMessage/MessageContent');
const BlankContent = () => import('views/container/content/menu/subComp/subMessage/BlankContent');
const routes = [
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
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
