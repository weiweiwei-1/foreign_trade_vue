<template>
    <div id="login-block">
        <div id="login-box">
            <div id="login-center">
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginRegister"
    }
</script>

<style scoped>
    #login-block {
        position: absolute;
        z-index: 1001;
        display: flex;
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