<template>
    <container></container>
</template>
<script>
    import container from 'views/container/Container'
    export default {
        name: 'App',
        components: {
            container
        }
    }

</script>
<style lang="scss">
  @import "assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
  text-align: center;
  color: #2c3e50;
}

/*#container {
    display: -webkit-box;
    -webkit-box-flex: 1;
    -webkit-box-orient: horizontal;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin:0;
    padding:0;
    width:100%;
    height: 100%;
    background: deepskyblue;
}*/
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--color-high-text);
    }
  }

</style>
