Vue.component('Small',{
    data: function(){
        return {}
    },
    inheritAttrs:false,//用于style等非继承
    props:{
        obj:Object
    },
    // mounted() {
        
    // },
    // methods:{
    //     test(){
    //         this.$listeners.changeName()
    //     }
    // },
    inject:['changeName','number'],
    template:`<div>
        attr:{{$attrs.name}} number:{{number}}
        <button @click="changeName">点我</button>
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
           
            <Small v-bind="$attrs"/>
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
        changeName(){
            this.name = 'jack'
            console.log('123321')
        }
    },
    provide: function(){
            return {
                changeName: this.changeName,
                number: this.number
            }
        },
    template:`<div>
        <child :type="type" :name="name"></child>
    </div>`
})