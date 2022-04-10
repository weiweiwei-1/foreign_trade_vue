<template>
    <div class="wrapper">
        <div class="content">
            <ul id="market">
                <li class="item" v-for="item in productList" @click="openQuoteWindow(item)">
                    <a class="item-a" target="_self" href="#">
                        <img class="item-img" src="@/assets/images/message.png" alt="">
                        <div class="item-title">
                            {{item.productName}}
                        </div>
                        <div class="item-main-info">
                            <div class="item-weight">
                                {{item.weight}}kg
                            </div>
                            <div class="item-status">
                                {{item.realOrder}}
                            </div>
                            <div class="item-charge-status">
                                {{item.charger}}
                            </div>
                        </div>
                        <div class="item-launch-info">
                            {{ $filters.dateFormat(item.sendTime, "YYYY-MM-DD") }}
                            <div class="city">
                                {{item.origin}}->{{item.destinationCountry}}
                            </div>
                        </div>
                        <div class="fts-main-info">
                            <div class="remain-quote">
                                剩余报价数:{{item.quoteCount}}
                            </div>
                            <div class="fts-company-name">
                                {{item.ftsName}}
                            </div>
                        </div>
                        <div class="item-quote">
                            <button class="quote">报价</button>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="search_page_nav">
                搜索
            </div>
        </div>
    </div>
    <send-code-window v-show="showStatus" @closeWindow="closeWindow" :showStatus="showStatus"></send-code-window>
</template>

<script>
    import {ref, toRefs, reactive, nextTick, watchEffect, onMounted} from 'vue'
    import {getHomeProductList} from "network/home";
    import BScroll from 'better-scroll';
    import SendCodeWindow from 'views/fa/content/market/SendCodeWindow.vue'
    import store from '@/store'
    export default {
        name: "Market",

        components: {
            SendCodeWindow
        },

        setup() {
            //商品列表
            const productList = ref([]);
            //窗口开启关闭状态
            const showStatus = ref(false);
            //产品信息
            let productInfo = ref();
            const openQuoteWindow = (data) => {
                productInfo = toRefs(data);
                showStatus.value = true;
            };

            const closeWindow = () => {

            };

            const param = {
                currentPage: 1
            };

            let bscroll = reactive({});

            onMounted(()=>{
                getHomeProductList(param).then(res=>{
                    console.log(res);
                    switch (res.code) {
                        case 1:
                            //接口返回数据传到productList上
                            productList.value = res.data.beanList;
                            nextTick(() => {
                                if (!bscroll) {
                                    bscroll = new BScroll(document.querySelector('.wrapper'), {
                                        probeType: 3,
                                        scrollY: true,
                                        click: true,
                                        autoPullUpLoad: true,
                                        mouseWheel: true,
                                    })
                                } else {
                                    bscroll.refresh()
                                }
                            });
                            break;
                        case 0:
                            if (res.error.pageCountError) {
                                alert(res.error.pageCountError); break;
                            } else {
                                alert(res.error.searchError); break;
                            }
                        case -1: alert(res.msg); break;
                    }
                }, error => {
                    console.log(error);
                });
                bscroll = new BScroll(document.querySelector('.wrapper'), {
                    probeType: 3,
                    scrollY: true,
                    click: true,
                    autoPullUpLoad: true,
                    mouseWheel: true,
                });

            });

            return {
                productList,
                showStatus,
                openQuoteWindow,
                closeWindow
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        overflow: hidden;
        width: 1000px;
        height: 530px;
    }

    #market {
        display: block;
        overflow: hidden;
        position: relative;
        top: 5px;
        left: 5px;
        height: 100%;
        width: 1000px;
        font-size: 0;
        font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',sans-serif;
        border-top: 1px solid #f2f2f2;
        border-left: 1px solid #f2f2f2;
        list-style: none;
    }


    .item {
        width: 247px;
        height: 368px;
        margin: 0;
        box-sizing: border-box;
        display: inline-block;
        float: left;
        font-size: 12px;
        border: 1px solid #f2f2f2;
        border-top: none;
        border-left: none;
        background: #fff;
        vertical-align: top;
        text-align: -webkit-match-parent;
    }

    #market .item:hover {
        border: 1px solid #fd3f31;
        text-decoration: none;
    }

    .item-a {
        display: inline-block;
        text-decoration: none;
        width: 245px;
        height: 366px;
        box-sizing: border-box;
        padding: 22px 20px 0;
        background: #fff;
        color: rgb(156, 156, 156);;
        position: relative;
    }

    img {
        width: 198px;
        height: 198px;
        border-radius: 8px;
    }

    .item-title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 204px;
        height: 30px;
        line-height: 35px;
        font-size: 14px;
        font-weight: normal;
        overflow: hidden;
        font-family: iconfont;
        color: #151516;
    }

    .item-main-info, .fts-main-info, .item-launch-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 205px;
        text-align: left;
    }

    .fts-main-info {
        flex-direction: row;
        height: 20px;
    }

    .item-weight, .item-status {
        width: 68px;
        color: rgb(224, 46, 36);;
        font: 15px/25px Arial,sans-serif;
    }

    .item-weight {
        font: 18px/25px Arial,sans-serif;
        font-weight: 600;
    }

    .item-status {
        text-align: center;
    }

    .item-charge-status {
        margin: 0 0 0 30px;
        font: 10px/25px Arial,sans-serif;
        text-align: right;
    }

    .fts-main-info, .item-launch-info {
        font: 10px/20px Arial,sans-serif
    }

    .fts-main-info {
        height: 20px;
    }

    .city {
        width: 72px;
        height: 20px;
        text-align: right;
        overflow: hidden;
    }


    .remain-quote {
        width: 80px;
        height: 20px;
        overflow: hidden;
        color: #00b82f;
    }

    .fts-company-name {
        width: 72px;
        height: 20px;
        overflow: hidden;
        text-align: right;
    }

    .item-quote {
        margin: 8px 0;
    }

    .quote {
        width: 160px;
        height: 35px;
        background-color: rgb(255, 57, 24);
        cursor: pointer;
        color: white;
        font: 1.25rem Arial,Serilf;
        border-radius: 8px;
        border: 0 transparent;
        outline: 0;
    }

    .search_page_nav {
        width: 100%;
        margin: 20px auto;
        text-align: center;
        color: #4a4a4a;
        vertical-align: middle;
    }
</style>