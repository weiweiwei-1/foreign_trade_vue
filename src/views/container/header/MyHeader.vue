<template>
    <div id="header">
        <my-pic></my-pic>
        <advertisement></advertisement>
        <user-information></user-information>
    </div>
</template>

<script>
    import MyPic from 'views/container/header/subComp/myPic/MyPic'
    import Advertisement from 'views/container/header/subComp/advertisement/Advertisement'
    import UserInformation from 'views/container/header/subComp/userInformation/UserInformation'
    export default {
        name: "MyHeader",
        components: {
            MyPic,
            Advertisement,
            UserInformation
            // LoginRegister
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