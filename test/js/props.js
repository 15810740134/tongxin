//props通信方式


//引用类型的props

//[{}]类似这种常见的
const props = {
    name: 'tom'
}


//子组件
Vue.component('child',{
    props:{
        // name: String
        name: Object
    },
    data:function(){
        return {}
    },
    methods: {
        changeName:function(){
            // this.$emit('go')
            this.name.name = 'jack1'
        }
    },
    template:`<div>
            子组件：{{name.name}}
            <button @click="changeName">点我</button>
        </div>`
})

//父

const vm = new Vue({
    el:'#app',
    data:{
        // name:'tom'
        obj: props
    },
    // components:{
    //     child:'child'
    // },
    methods:{
        myGo:function(){
            this.obj.name = 'jack'
        }
    },
    template:`<div>
        <child :name="obj" @go="myGo"></child>
    </div>`
})




