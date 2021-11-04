<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="login-block" @click="closeWindow" v-if="bankSwitch === true">
        <div id="login-box">
            <div id="login-center" ref="center">
                <nav-bar>
                    <template v-slot:register>
                        注册
                    </template>
                    <template v-slot:login>
                        登录
                    </template>
                    <template v-slot:forget-password>
                        忘记密码
                    </template>
                </nav-bar>
                <router-view name="login"></router-view>
                <router-view name="register"></router-view>
                <router-view name="forgetpassword"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from 'views/container/header/subComp/userInformation/bar/NavBar'
    export default {
        name: "LoginRegister",
        components: {
            NavBar
        },
        props: {
            bankSwitch: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        methods: {
            closeWindow(e) {
                if (this.$refs.center && !this.$refs.center.contains(e.target)) {
                    if (this.bankSwitch === true) {
                        this.$parent.bankSwitch = false
                    }

                }
            }
        }

    }
</script>

<style scoped>
    #login-block {
        position: absolute;
        z-index: 1001;
        display: -webkit-box;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    #login-box {
        position: relative;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.4);
    }

    #login-center {
        width: 450px;
        height: 440px;
        background-color: white;
        text-align: center;
        border-radius: 10px;
    }
</style>