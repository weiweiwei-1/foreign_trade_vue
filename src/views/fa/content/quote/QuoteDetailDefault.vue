<template>
    <div id="quote-detail-content">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "QuoteDetailContent"
    }
</script>

<style scoped>
    #quote-detail-content {
        width: 740px;
        height: 100%;
        background: navajowhite;
    }
</style>