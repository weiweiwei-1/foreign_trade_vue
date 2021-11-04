<template>
    <div id="my-pic">
        <slot name="my-pic">

        </slot>
    </div>
</template>

<script>
    export default {
        name: "MyPic"
    }
</script>

<style scoped>
    #my-pic {
        position: relative;
        width: 450px;
        height: 100%;
        text-align: center;
        background: white;
    }
</style>