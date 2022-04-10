<template>
    <div id="content">
        <Menu></Menu>
        <Main></Main>
        <side-bar></side-bar>
    </div>
</template>

<script>
    import Menu from 'views/fa/content/LeftMenu.vue'
    import Main from 'views/fa/content/MyMain.vue'
    import SideBar from 'views/fa/content/SideBar.vue'
    export default {
        name: "Content",
        components: {
            Menu,
            Main,
            SideBar
        }
    }
</script>

<style scoped>
    #content {
        display: -webkit-box;
        -webkit-box-flex: 1;
        -webkit-box-orient:horizontal;
        width: 1366px;
        height: 530px;
        top: 0;
        background-color: yellow;
    }
</style>