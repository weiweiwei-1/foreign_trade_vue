<template>
    <div id="nav-bar">
        <div id="register">
            <router-link to="/fa/register">
                <slot name="register">
                </slot>
            </router-link>
        </div>
        <div id="login">
            <router-link to="/fa/login">
                <slot name="login">
                </slot>
            </router-link>
        </div>
        <div id="forget-password">
            <router-link to="/fa/forget-password">
                <slot name="forget-password">
                </slot>
            </router-link>

        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    #nav-bar {
        position: relative;
        left: 0;
        right: 0;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width:100%;
        height: 80px;
        /*margin: 10px 0 10px 0;*/
        font: var(--font-size);
        color: #FFF;
        -webkit-tap-highlight-color: transparent;
        background-color: var(--color-tint);
        border-radius: 10px 10px 0 0;
    }

</style>