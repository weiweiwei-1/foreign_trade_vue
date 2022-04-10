<template>
    <div id="container">
        <my-header></my-header>
        <content></content>
    </div>
</template>

<script>
    import MyHeader from 'views/container/header/MyHeader'
    import Content from 'views/container/content/Content'
    export default {
        name: "Container",
        components: {
            MyHeader,
            Content
        }
    }
</script>

<style scoped>
    #container {
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