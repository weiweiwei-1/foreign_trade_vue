<template>
    <div id="main">
        <!--主要内容-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "MyMain"
    }
</script>

<style scoped>
    #main {
        position: relative;
        float: left;
        width: 990px;
        height: 530px;
        background: #42b983;
    }
</style>