import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state:{
    name:'张三'
  },
  mutations:{
    //不要重名
    updateName(state,payload){
      state.name = payload
    }
  },
  getters:{
        fullname(state){
          return state.name+'11111111111'
        },
    //调用其他getters
        fullname2(state,getters){
          return getters.fullname+'11111111111'
        },
    //拿到主仓库的数据
       fullname3(state,getters,rootState){
       return getters.fullname2+'11111111111'+rootState.count
      }
  },
  actions:{

  }
}

export default new Vuex.Store({

  state: {
    count:10,
    students:[
    {id:100,name:'why1',age:20},
      {id:101,name:'why2',age:22},
      {id:102,name:'why3',age:10},
      {id:103,name:'why4',age:210}
    ],
    info:{name:'kobe'}
  },
  mutations: {
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    },
    incrementCount(state,counts){
      state.count=state.count+counts
    },
    decrementCount(state,counts){
      state.count=state.count-counts
    },
    addStudent(state,stu){
      this.state.students.push(stu)
    },
    updateInfo(state){
      state.info.name = 'coderWhy'
    }
  },
  actions: {
    //context 上下文
    updateInfo(context){
      setTimeout(() =>{
        context.commit('updateInfo')
      },1000)
    }
  },
  modules: {
   a:moduleA
  },
  getters:{
    powerCounter(state){
      return state.count*state.count;
    },
    more20(state){
      return state.students.filter(s => s.age>=20);
    },
    //如果要使用其中一个getters的处理
    more20Length(state,getters){
      return getters.more20.length;
    },
    //外面传参数 通过getters动态返回
    moreAgesStu(state){
      return function (age) {
        return state.students.filter(s =>s.age >age);
      }
    }
  }
})
