<template>
    <div class="home" v-for="item in banner">
        {{item.id}}
    </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import {getHomeAllData, getBanner} from "network/home";

export default {
    name: 'Home',

    setup() {
        const banner = ref([]);
        onMounted(()=>{
            getHomeAllData().then(res=>{
                banner.value = res;
            }).catch(err=>{

            })
        });

        return {
            banner
        }
    },

    components: {

    }
}
</script>
<style>

</style>
