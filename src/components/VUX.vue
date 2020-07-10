<template>
    <div id="VUX">
        <h2>-----------modules---------------</h2>
        <h2>{{$store.state.a.name}}</h2>
        <button @click="updateName">修改</button>
        <h2>{{$store.getters.fullname}}</h2>
        <h2>-----------VUX---------------</h2>
        <h2>{{$store.state.count}}</h2>
        <button @click="add">+</button>
        <button @click="reduce">-</button>


        <h2>-----------Getters------------</h2>
        <h2>{{$store.getters.powerCounter}}</h2>

<!--        //自己的计算属性解决-->
        <h2>-------1.过滤--------</h2>
        <h2>{{more20}}</h2>
<!--            getters        -->
        <h2>-------2.过滤--------</h2>
        <h2>{{$store.getters.more20}}</h2>

        <h2>-------3.过滤(你想要的多大的年龄)--------</h2>
        <h2>{{$store.getters.moreAgesStu(1)}}</h2>


        <button @click="addCount(5)">+5</button>
        <button @click="reduceCount(2)">-2</button>



        <h2>-------添加一个学生--------</h2>
        <button @click="addStudent">增加</button>

        <h2>-------修改数据--------</h2>
        <h2>{{this.$store.state.info}}</h2>
        <button @click="updateInfo">修改</button>


    </div>
</template>

<script>
    export default {
        name: "VUX",
        methods:{
            add(){
                this.$store.commit('increment')
            },
            reduce(){
                this.$store.commit('decrement')
            },
            addCount(count){
                this.$store.commit('incrementCount',count)
            },
            //带参数的提交事件
            reduceCount(count){
                //1.普通的提交风格
                this.$store.commit('decrementCount',count)

                //2.特殊的提交风格
                //参数成为 一个对象  mutations接收到一个对象
                this.$store.commit({
                    type:'decrementCount',
                    count
                })
            },
            addStudent(){
                const stu = {id:114,name:'alan',age:35}
                this.$store.commit('addStudent',stu)
            },
            updateInfo(){
                //传入 参数直接接后面
                this.$store.dispatch("updateInfo")
            },
            updateName() {
                //提交之后 注意不要重名
                this.$store.commit('updateName','李四')
            }

        },
        computed:{
            more20(){
                return this.$store.state.students.filter(s =>{
                    return s.age>20
                })
            }
        }

    }
</script>

<style scoped>

</style>