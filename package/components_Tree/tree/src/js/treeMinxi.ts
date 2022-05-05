
export function getOptions(props) {
    function iconsFilter(nodes: any) {//更改节点得图标
        var { data, flag } = nodes;
        if (props.iconsFilter && Array.isArray(data)) {
            data.forEach((val) => {
                props.iconsFilter(val);
            });
            return data;
        } else {
            Array.isArray(data) &&
                data.forEach((val) => {
                    switch (val.type) {
                        case 1:
                            return (val.iconSkin = "company");
                        case 2:
                            return (val.iconSkin = "organize");
                        case 3:
                            return (val.iconSkin = "fleed");
                        case 4:
                            return (val.iconSkin =
                                val.deviceTypeCode == 2
                                    ? val.online
                                        ? "onlineCamera"
                                        : "unlineCamera"
                                    : val.online
                                        ? "online" + (val.icon || "icon1")
                                        : "unline" + (val.icon || "icon1"));
                        case 5:
                            return (val.iconSkin = "camera");
                    }
                });
            return data;
        }
    }

    return {
        baseUrl: props.baseUrl,
        lazy: props.lazy,
        type: props.type,
        headers: props.headers,
        autoParam: props.autoParam,
        otherParam: props.otherParam,
        name: props.name,
        isCheck: props.isCheck,
        showIcon: props.showIcon,
        isCopy: props.isCopy,
        isRemoveBtn: props.isRemoveBtn,
        isRenameBtn: props.isRenameBtn,
        isMove: props.isMove,
        nodeFilter: props.nodeFilter,
        isContextmenu: props.isContextmenu,
        isExpand: props.isExpand,
        isFreeze: props.isFreeze,
        hoverOperation:props.hoverOperation,
        iconsFilter,

    }

}
/**
 * this 指base.js
 * @param props  tree.vue 里的对象
 */
export function getMethods(props:any,context:any) {
    var lastTid=null
    //勾选之后，向父组件传递
    /**
     * 
     * @param treeNode 
     * @param zTree 
     * @emit 
     * checked,//点击的状态
     * treeNode,//当前选中
     * checkedList,//当前点击的数据，
     * allList//所有已勾选的数据 

     */
    function  onChecAfterEmit(treeNode:any,zTree:any){
        let checkedList=[];let allList=[];
        // if(treeNode.checked){ //勾选时遍历取id
             const fkey=props.nodeFilter[0]
             const fvalue=props.nodeFilter[1]
             let checkedNode=  zTree.getNodesByParam(fkey, fvalue, treeNode);//当前被选中
            for (let index = 0; index < checkedNode.length; index++) {
                let id = checkedNode[index].id//这里的取值 也可以做成传入式allNode[props.checkkey]
                id&&checkedList.push(id)
             }
        //  }
        let allNode=zTree.getCheckedNodes()//所有被选中
        for (let index = 0; index < allNode.length; index++) {
            if(allNode[index][fkey]==fvalue){
                allList.push(allNode[index].id)
            }
           
         }


            context.emit('node-check',{
                checked:treeNode.checked,//点击的状态
                treeNode,//当前选中
                checkedList,//当前点击的数据，
               allList//所有已勾选的数据
            })
        
    }
    return {
        // 数据成功渲染完成的回调
        treeLoaded() {
            context.emit('tree-loaded')
        },
        /**
         * 用于捕获单击节点之前的事件回调函数，并且根据返回值确定是否允许单击操作
         * @param treeId treeId
         * @param treeNode 进行 勾选 或 取消勾选 的节点 JSON 数据对象
         * @param clickFlag 节点被点击后的选中操作类型
         */
         beforeClick(treeId: string, treeNode: any) {
            // let zTree = this.getZTreeObj(treeId)
            // let haveClick=zTree.getSelectedNodes();
            // console.log(haveClick,'haveClick.length')
            //  if(haveClick.length){//如果已经选中 择取消选中
            //     zTree.cancelSelectedNode();
            //     console.log(zTree.getSelectedNodes(),'取消')
            //     context.emit('node-click',{
            //         checked:false,
            //         treeNode
            //      })
                //  return false
            // }else{
            //     return true
            //  }

        },
        /**
         * 用于捕获节点被点击的事件回调函数
         * @param event  event 对象 标准的 js event 对象
         * @param treeId treeId
         * @param treeNode 被点击的节点 JSON 数据对象
         */
        onClick(event: Event, treeId:string, treeNode: any) {
            let zTree = this.getZTreeObj(treeId)
            if(lastTid==treeNode.tId){
                treeNode.click = false;
                lastTid = null;
               
                zTree.cancelSelectedNode(); //取消勾选 样式
            }else{
                treeNode.click=true
                lastTid=treeNode.tId //保存这次的节点 下次要取消勾选
            }

            //多选模式除了点击复选框 其他点击会走这里 props.isCheck
             context.emit('node-click',{
                click:treeNode.click,
                id:treeNode.id,
                treeNode
             })

            
        },
        /**
         * 用于捕获 勾选 或 取消勾选 之前的事件回调函数，并且根据返回值确定是否允许 勾选 或 取消勾选
         * @param treeId treeId
         * @param treeNode 进行 勾选 或 取消勾选 的节点 JSON 数据对象
         * @param clickFlag 节点被点击后的选中操作类型
         */
        beforeCheck(treeId: string, treeNode: any) {
            //勾选中的回调
            if (!treeNode.checked && props.limitCheck) {
               return  props.limitCheck(treeNode);
            }
        },
        /**
        * 用于捕获 checkbox / radio 被勾选 或 取消勾选的事件回调函数
        * @param   event 
        * @param   treeId 
        * @param   treeNode 
        */
        onCheck(event: Event, treeId: string, treeNode: any) {
            let zTree = this.getZTreeObj(treeId),allId=[]
            //勾选时
            if (treeNode.checked) {
                zTree.expandNode(treeNode, true, false, true);//展开子节点

               
                // zAsync==true 该子节点为正常加载 zAsync==false 该子节点为异步加载
                if(treeNode.zAsync){
                        onChecAfterEmit(treeNode,zTree)//正常加载 直接传递
                }else{
                    return  //异步加载 会走onAsyncSuccess，方法内进行处理
                }
            }else{
                onChecAfterEmit(treeNode,zTree)
            }

         
            
           
        },
        /**
        * 用于捕获节点被删除之前的事件回调函数
        * @param   treeId 对应 zTree 的 treeId
        * @param   treeNode 将要删除的节点 JSON 数据对象
        */
        beforeRemove(treeId: string, treeNode: any) {
        },
        /**
                * 用于捕获节点编辑名称结束（Input 失去焦点 或 按下 Enter 键）之后，更新节点名称数据之前的事件回调函数，并且根据返回值确定是否允许更改名称的操作
                * @param  treeId 对应 zTree 的 treeId
                * @param  treeNode 将要删除的节点 JSON 数据对象
                * @param  newNameString 修改后的新名称
                * @param  isCancelBoolean 是否取消操作
                * 
                */
        beforeRename(treeId: string, treeNode: any) {

        },
        /**
         * 用于捕获节点被展开的事件回调函数
         * @param   event 
         * @param   treeId 
         * @param   treeNode 
         */
        onExpand(event: Event, treeId: string, treeNode: any) { },
        /**
                * 用于捕获异步加载正常结束的事件回调函数
                * @param   event 标准的 js event 对象
                * @param   treeId  treeId
                * @param   treeNode 进行异步加载的父节点 JSON 数据对象
                * @param   msg 异步获取的节点数据字符串，主要便于用户调试使用。
                */
        onAsyncSuccess(event: Event, treeId: string, treeNode: any, msg) {
            let zTree = this.getZTreeObj(treeId)
            //父节点是勾选状态 
            if (treeNode.checked) {
                zTree.checkNode(treeNode, true, true);//需要把子节点也够选上 checked
                onChecAfterEmit(treeNode,zTree)
            }
        },


        /**
         * 用于捕获 zTree 上鼠标右键点击之后的事件回调函数
         * @param   event 
         * @param   treeId 
         * @param   treeNode 
         */
        onRightClick(event: Event, treeId: string, treeNode: any) { },
        /**
         * 用于捕获节点编辑名称结束之后的事件回调函数
         * @param   event 
         * @param   treeId 
         * @param   treeNode 
         * @param   isCancel 是否取消操作 (v3.5.13+)
         */
        onRename(event: Event, treeId: string, treeNode: any, isCancel: boolean) { },
        /**
         * 用于捕获节点被折叠的事件回调函数
         * @param   event 
         * @param   treeId 
         * @param   treeNode 
         */
        onCollapse(event: Event, treeId: string, treeNode: any) { },
        /**
                 * 用于捕获节点被拖拽之前的事件回调函数，并且根据返回值确定是否允许开启拖拽操作
                 * @param {*} treeId 
                 * @param {*} treeNodes 被拖拽的节点 JSON 数据集合
                 * @param {*} targetNode 成为 treeNodes 拖拽结束的目标节点 JSON 数据对象。
                 * @param {*} moveType 指定移动到目标节点的相对位置
                 */
        beforeDrop(treeId: string, treeNode: any, targetNode, moveType) {
            props.nodeBeforeDrop && props.nodeBeforeDrop(treeNode, targetNode);

            if (typeof props.limitDrop === 'function') {
                return props.limitDrop(treeNode, targetNode, moveType);
            } else {
                return true;
            }

        },
        /**
         * 用于捕获节点拖拽操作结束的事件回调函数
         * @param {*} e 
         * @param {*} treeId 
         * @param {*} treeNodes 被拖拽的节点 JSON 数据集合
         * @param {*} targetNode 成为 treeNodes 拖拽结束的目标节点 JSON 数据对象。
         * @param {*} moveType 指定移动到目标节点的相对位置
         * @param {*} isCopyBoolean 拖拽节点操作是 复制 或 移动true：复制；false：移动
         */
        onDrop(event: Event, treeId: string, treeNode: any, targetNode: any, moveType: string, isCopyBoolean: boolean) {
            if (typeof props.nodeDrop === 'function') {
                props.nodeDrop(treeNode, targetNode);
            }
        }
    }

}