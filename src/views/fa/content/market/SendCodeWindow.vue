<template>
    <div id="send-code-block">
        <div id="send-code-center">

        </div>
    </div>
</template>

<script>
    export default {
        name: "SendCodeWindow",

    }
</script>

<style scoped>
    #send-code-block {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1007;
        background: rgba(0,0,0,0.4);
    }

    #send-code-center {
        width: 500px;
        height: 650px;
        background: #FFFFFF;
    }
</style>