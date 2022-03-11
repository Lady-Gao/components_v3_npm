import { defineComponent, h, onMounted, ref } from "vue";

export default {
    name: 'Liner',
    props: {
      
    },
    setup(props) {
      
        onMounted(() => {
            console.log('Liner')
        })
        return () => h('div',{class:'Liner'},'Liner')
    }
}