Vue.component('child',{
    props:{
        name: String
    },
    data:function(){
        return {}
    },
    methods: {
        changeName:function(){
            this.$parent.changeName()
        },
        test(){
            console.log('子组件上的方法')
        }
    },
    template:`<div>
            子组件：{{name}}
            <button @click="changeName">父组件</button>
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
        },
        ontest(){
            // this.$refs['child1'].test()
            this.$children[0].test()
        }
    },
    provide: function(){
            return {
                changeName: this.changeName,
                number: this.number
            }
        },
    template:`<div>
        <button @click="ontest">父组件</button>
        <child :type="type" :name="name" ref="child1"></child>
    </div>`
})