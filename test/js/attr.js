Vue.component('Small',{
    data: function(){
        return {}
    },
    inheritAttrs:false,//用于style等非继承
    props:{
        obj:Object
    },
    // mounted() {
    //     this.$listeners.click(123)
    // },
    // methods:{
    //     test(){
    //         this.$listeners.changeName()
    //     }
    // },
    template:`<div>
        attr:{{$attrs.name}}
        <button v-on="$listeners">点我</button>
    </div>`
})

Vue.component('child',{
    props:{
        number: Number,
    },
    data:function(){
        return {}
    },
    methods: {
        // changeName:function(){
        //     // this.$emit('go')
        //     this.name.name = 'jack1'
        // }
    },
    template:`<div>
            子组件：{{number}}
           
            <Small v-bind="$attrs" v-on="$listeners"/>
        </div>`,
    
})

const vm = new Vue({
    el:'#app',
    data:{
        name:'tom',
        number: 123,
        type:'text'
    },
    methods:{
        changeName(a){
            console.log(a)
            this.name = 'jack'
            console.log('123321')
        }
    },
    template:`<div>
        <child :type="type" :name="name" @click="changeName"></child>
    </div>`
})