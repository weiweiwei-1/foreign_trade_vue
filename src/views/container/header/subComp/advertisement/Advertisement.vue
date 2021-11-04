<template>
    <div id="advertisement">
        <slot name="advertisement"></slot>
    </div>
</template>

<script>
    export default {
        name: "Advertisement"
    }
</script>

<style scoped>
    #advertisement {
        position: relative;
        width: 466px;
        height: 100%;
        text-align: center;
        background: greenyellow;
    }
</style>