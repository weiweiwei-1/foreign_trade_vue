<template>
    <div id="market">
        <div class="item" v-for="item in items">
            {{item.title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Market",
        data() {
            return {
                items: [
                    {title:'1'},
                    {title:'2'},
                    {title:'3'},
                    {title:'4'},
                    {title:'5'},
                    {title:'6'},
                ]
            }

        }
    }
</script>

<style scoped>
    #market {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        width: 990px;
        height: 530px;
    }

    .item {
        width:320px;
        height:250px;
        background-color: green;
    }
</style>