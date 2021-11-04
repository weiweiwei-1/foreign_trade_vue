<template>
    <div id="user">
        <a @click="openWindow">登录 | 注册</a>
    </div>
    <login-register :bankSwitch="bankSwitch"></login-register>
</template>

<script>
    import LoginRegister from 'views/container/header/subComp/userInformation/LoginRegister'
    import router from "../../../../../router";
    export default {
        name: "UserInformation",
        components: {
            LoginRegister
        },
        data() {
            return {
                bankSwitch:false
            }
        },
        methods: {
            openWindow() {
                this.bankSwitch = true;
                router.push('/fa/login')
            }
        }

    }
</script>

<style scoped>
    #user {
        position: relative;
        width: 450px;
        height: 100%;
        text-align: center;
        background: deeppink;
    }
    a {
        cursor: pointer;
        color: #FFFFFF;
    }
</style>