import { defineComponent, h, inject, onMounted, ref } from "vue";
import { getMapScript } from '../../../src/utils/scriptHelper'
export default {
    name: 'DistrictCluster',
    props: {

    },
    setup(props,contex) {
        const storeData = inject<any>('storeData')
        const mySlot=contex.slots.default()
        const { map } = storeData

       getMapScript('AMapUI', 'https://webapi.amap.com/ui/1.1/main.js?v=1.1')
    
        onMounted(() => {
         
        })
    
        return () => h('div', { class: 'DistrictCluster' },  mySlot)
    }
}