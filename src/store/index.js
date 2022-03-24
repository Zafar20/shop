import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import shop from './shop'

export default new Vuex.Store({
    modules: {
        shop
    }
})





























// export default new Vuex.Store({
//     //state - хранят в себе информацию
//     state:{
//         message: 'hello vuex 1234'
//     },
//     //mutations - нужны для того чтобы изменять state, внутри создают методы которая принимает state ( mutations не поддерживает асинхроность)
//     mutations:{
//         setMessage(state, payload) {
//             state.message = payload
//         }
//     },
//     // actions - работает с асинхроными данными - к примеру берем данные с сервера и дальше через mutations можем менять только данные 
//     actions:{
//         // создаем одноименный метод
//         setMessage({commit}, payload) {
//             // commit - позволяет обращаться к нашей мутации
//             //let asd = getters.getMessage
//             //let mes = API // берем данные с сервера
//             commit('setMessage', payload) // отправляем данные в mutations
//         }
//     },
//     // getters - берет значение наших state
//     getters:{
//         getMessage(state) {
//             return state.message
//         }
//     }
// })