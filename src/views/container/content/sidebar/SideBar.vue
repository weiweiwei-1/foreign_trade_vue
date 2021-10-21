<template>
    <div id="sidebar">
        侧边栏
        <!--<slot></slot>-->
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
    #sidebar {
        position: relative;
        float: left;
        width: 276px;
        height: 530px;
        background: red;
    }
</style>