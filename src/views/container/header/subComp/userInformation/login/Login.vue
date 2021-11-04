<template>
    <div id="login-block">
        <div id="email-block">
            <div id="email-text">
                <input type="text" id="email">
            </div>
            <div id="email-error-span">
                <span id="email-error">email-error</span>
            </div>
        </div>
        <div id="password-block">
            <div id="password-text">
                <input type="text" id="password">
            </div>
            <div id="password-error-span">
                <span id="password-error">password-error</span>
            </div>
        </div>
        <div id="rememberMe-block">
            <input id="rememberMe" type="checkbox">
            <span id="rememberMe-text"></span>
        </div>
        <div id="login-btn">
            <button>登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    input {
        outline: 0;
        border-radius: 8px;
        font-size: 17px;
        border: 1px solid #ccc;
    }

    #login-block {
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items: center;
        background-color: greenyellow;
        width: 100%;
        height: 360px;
        border-radius: 0 0 10px 10px;
    }

    #email-block, #password-block {
        display: block;
        align-items: center;
        width: 450px;
        height: 80px;
    }

    #email-text, #password-text {
        display: block;
        text-align: center;
        height: 60px;
    }

    #email, #password {
        letter-spacing: 6px;
        position: relative;
        width: 272px;
        height: 39px;
        top: 20px;
    }
</style>