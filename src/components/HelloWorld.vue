<template>
    <div>
{{titles.id}}
    </div>
</template>

<script lang="ts" setup>
import { defineComponent,PropType } from 'vue'
type Todo={
    id:number;
}
type titleInfo = {
  id: number,
}
defineProps({
  titleInfo: {
    type: Object as PropType<titleInfo>,
    require: true
  }
})
</script>

<style scoped>

</style>