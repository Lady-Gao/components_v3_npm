import { defineComponent, h, onMounted, ref } from "vue";

export default {
    name: 'PathSimplifierIns',
    props: {
         //[116.478935, 39.997761]
         position: {
            type: Array,
            default() {
                return [116.478912, 39.998549]
            }
        },
        Icon: String,
        type:  {
            type: String,
            default() {
                return ''// histroy
            }
        },
        currentData: {
            type: Object,
            default() {
                return {}
            }
        },
        historyData: {
            type: Array,
            default() {
                return []
            }
        },
    },
    setup(props) {
        
        onMounted(() => {
            console.log('PathSimplifierIns')
        })
        return () => h('div',{class:'PathSimplifierIns'},'PathSimplifierIns')
    }
}