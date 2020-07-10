<template>

        <div class="tab-bar-item" @click="itemClick">
            <!--//插槽外部 使用DIV-->
            <div v-if="!isActive"> <slot  name="item-img"></slot></div>
            <div v-else><slot  name="item-active"></slot></div>
            <div :style="activeStyle">
              <slot  name="item-text"></slot>
            </div>

        </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return{
                // isActive:true
            }
        },
        methods:{
            itemClick(){
                //使用 replace 或者 history
                this.$router.replace(this.path)
            }
        },
        computed:{
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                return this.isActive ? {color : this.activeColor}:{};
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex:1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }

</style>