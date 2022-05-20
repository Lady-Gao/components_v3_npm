<template>
    <div class="grid">
        <div class="boxTable havePagin">
            <el-table :data="tableData">
                <el-table-column v-if="selection" type="selection"></el-table-column>
                <!-- 默认模板 -->
                <slot></slot>
                 <!-- render模板 -->
                <el-table-column 
                    align="center"
                    showOverflowTooltip
                    v-for="item in renderArr"
                    :key="item.prop"
                    :label="item.label"
                    :prop="item.prop"
                    :min-width="item.width || 100"
                   header-align="center"
                    :formatter="item.formatter|| null"
                >
            </el-table-column>
               
                <!---存放操作按钮 -->
                <slot name="opertion"></slot>
            </el-table>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
</template>

<script lang="ts">
/**
 * 表头一定要平铺不能折叠 设置好width 不然找不到表格横向滚动条
 */
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'Grid',
    props: {
        data: {
            type: Object || Array,
            default() {
                return []
            }
        },
        renderArr: {//入参模板
            type: Array as PropType<{
                prop:string,
                label:string,
                width:string|number,
                formatter?:Function|null
            }[]>,
            default() {
                return []
            },
        },
        selection: {//   //是否启用复选表格
            type: Boolean,
            default: false,
        },
    },
    setup(props: any) {
        const tableData = props.data
console.log(props.renderArr,'renderArr')
        return { tableData }
    }
})
</script>

<style  lang="scss">
.grid {
    position: relative;

    height: 100%;
    width: 98%;

    .boxTable {
        position: absolute;
        top: 0px;
        bottom: 5px;
        width: 99.8%;
        border: 1px solid #eee;
        border-radius: 3px;

        // background-color: rgb(221, 206, 206);
        .el-table--fit {
            height: 100%;

            .el-table__inner-wrapper {
                height: 100% !important;

                &::before {
                    height: 0;
                }

                .el-table__body-wrapper {
                    height: calc(100% - 40px)
                }
            }
        }

        .el-table__inner-wrapper .el-scrollbar__bar.is-horizontal {
            // height:0;
        }

        .el-table__empty-text {
            position: relative;
            padding-top: 200px;
            display: inline-block;
        }
    }

    .havePagin {
        bottom: 50px;
    }

    .el-pagination {
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
}
</style>