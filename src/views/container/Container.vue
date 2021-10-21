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
        /*border: 2px solid #44c4b8;*/
        /*border-top-left-radius: 15px;*/
        /*border-top-right-radius: 15px;*/
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    /*display: -webkit-box;
    -webkit-box-flex: 1;
    -webkit-box-orient: vertical;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin:0;
    padding:0;
    width:1366px;
    height: 625px;
    background: deepskyblue;*/
    }
</style>