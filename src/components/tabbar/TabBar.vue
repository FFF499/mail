<template>
    <div id="app">
        <div id="tabbar">
          <slot></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
    @import "../../assets/css/base.css";

    #tabbar{
        display: flex;
        background-color: #f6f6f6;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        box-shadow: 0 -3px 1px rgba(100,100,100,0.2);
    }
    .tab-bar-item{
        flex:1;
        text-align: center;
        height: 49px;
    }
</style>