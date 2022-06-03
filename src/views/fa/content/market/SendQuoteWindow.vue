<template>
    <div id="send-quote-block" @click="closeQuoteWindow">
        <div id="send-quote-center">
            <div id="product-info">
                <div id="product-image">
                    <img :src="image" alt="" @click="showWindow">
                </div>
                <div id="product-description">
                    <ul>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                        <li>e</li>
                        <li>f</li>
                    </ul>
                </div>
            </div>
            <div id="quote-info"></div>
            <!--{{productInfo}}-->
        </div>
    </div>
    <div id="image-view" v-show="imageShowStatus" @click="closeImageWindow">
        <div>
            <img :src="image" alt="" id="image">
        </div>
    </div>
</template>

<script>
    import {ref, toRefs} from 'vue'

    export default {
        name: "SendQuoteWindow",
        props: {
            productInfo: {
                type: Object,
                required: true,
                default: null
            }
        },

        setup(props, context) {
            console.log("测试");
            let productInfo = toRefs(props.productInfo);
            const imageShowStatus = ref(false);
            const image = ref(require("@/assets/images/friend.png"));
            const closeQuoteWindow = (e) => {
                const center = document.querySelector("#send-quote-center");
                if (center && !center.contains(e.target)) {
                    context.emit('closeWindow');
                }
            };

            const showWindow = () => {
                imageShowStatus.value = true
            };

            const closeImageWindow = (e) => {
                const center = document.querySelector("#image");
                if (center && !center.contains(e.target)) {
                    imageShowStatus.value = false;
                }
            };

            return {
                productInfo,
                image,
                imageShowStatus,
                showWindow,
                closeImageWindow,
                closeQuoteWindow,
            }
        }

    }
</script>

<style scoped>
    #send-quote-block {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1005;
        background: rgba(0,0,0,0.4);
    }

    #send-quote-center {
        display: flex;
        flex-direction: row;
        width: 700px;
        height: 500px;
        background: #FFFFFF;
    }

    #product-info {
        display: flex;
        flex-direction: column;
        width: 350px;
        height: 500px;
        background: deepskyblue;
    }

    #quote-info {
        display: flex;
        flex-direction: column;
        width: 350px;
        height: 500px;
        background: green;
    }

    #product-image img {
        width: 130px;
        height: 130px;
    }

    #image-view {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1007;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
    }

    #image-view img {
        width: 500px;
        height: 500px;
        background: white;
    }
</style>