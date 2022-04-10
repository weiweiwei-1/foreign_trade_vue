<template>
    <div id="home">
        <my-header></my-header>
        <content></content>
    </div>
</template>

<script>
    import MyHeader from 'views/fa/head/MyHeader.vue'
    import Content from 'views/fa/content/Content.vue'
    export default {
        name: "Home",
        components: {
            MyHeader,
            Content
        }
    }
</script>

<style scoped>
    #home {
        float: none;
        width: 1366px;
        height: 625px;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
</style>