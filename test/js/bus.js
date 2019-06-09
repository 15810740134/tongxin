Vue.prototype.$bus = new Vue();
//也可以将部分信息存在bus上

Vue.component('child',{
    data:function(){
        return {
            name: 'huaua'
        }
    },
    beforeDestroy() {
        this.$bus.$off('send');
    },
    created() {
        this.$bus.$on('send',(data)=>{
            this.name = data
        })
    },
    template:`<div>
            子组件：{{name}}
        </div>`,
    
})

Vue.component('child1',{
    data:function(){
        return {}
    },
    methods: {
        changeName(){
            this.$bus.$emit('send','gungun')
        }
    },
    template:`<div>
            <button @click="changeName">便</button>
        </div>`,
    
})

const vm = new Vue({
    el:'#app',
    data:{
       
    },
    methods:{
       
    },
    template:`<div>
        
        <child></child>
        <child1></child1>
    </div>`
})