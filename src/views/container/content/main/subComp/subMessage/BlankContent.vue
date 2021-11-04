<template>
    <div id="blank-content">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "BlankContent"
    }
</script>

<style scoped>
    #blank-content {
        width: 740px;
        height: 530px;
        background: #FFFFFF;
    }
</style>