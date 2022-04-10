<template>
    <div id="header">
        <my-pic></my-pic>
        <advertisement></advertisement>
        <user-information></user-information>
    </div>
</template>

<script>
    import MyPic from 'views/fa/head/pic/MyPic.vue'
    import Advertisement from 'views/fa/head/advertisement/Advertisement.vue'
    import UserInformation from 'views/fa/head/user/UserInformation.vue'
    export default {
        name: "MyHeader",
        components: {
            MyPic,
            Advertisement,
            UserInformation
        }
    }
</script>

<style scoped>
    #header {
        display: -webkit-box;
        -webkit-box-flex: 1;
        -webkit-box-orient: horizontal;
        /*text-align: center;*/
        width:1366px;
        height:95px;
        /*margin:0;
        padding:0;
        top:0;*/
        background-color: darkgrey;
    }
</style>