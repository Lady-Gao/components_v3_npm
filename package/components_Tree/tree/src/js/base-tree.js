import '../assets/css/awesome.scss'
import "../assets/js/jquery-1.4.4.min.js"
import "../assets/js/jquery.ztree.core"
import "../assets/js/jquery.ztree.excheck"
import "../assets/js/jquery.ztree.exedit"
import "../assets/js/jquery.ztree.exhide"

/**
 * inject[jquery, ztree]s
 */

export default class BaseTree {
    constructor(options) {
        const _self = this;
        this.zTree = null;
        this.treeId = options.el;
        this.el = $('#' + this.treeId);
       

        this._eachProperties(options.options);
        this._eachProperties(options.methods);

        // 当前的事件名称(expand or check)
        this.currentHandlerName = null;
    }

    /**
     * 初始化树的配置和方法
     * @param {Array} data: []
     */
    initialTree(name,data, callback) {
        var data = this.iconsFilter({data});
        /**
         * $.fn.zTree.init(obj,zSettingJSON,zNodesArray)
         * @param (obj,zSettingJSON,zNodesArray)
         * 用于展现 zTree 的 DOM 容器,
         * zTree 的配置数据,
         * zTree 的节点数据
         */
        $.fn.zTree.init(this.el, this.treeConfig(this.isCheck,name), this.setIsFirstNodesExpand(data, this.isExpand, this.isFreeze));
        this.zTree = $.fn.zTree.getZTreeObj(this.treeId);//获取zTree 对象

        //展开所有节点
        this.expandAll && this.zTree.expandAll(true)
        typeof callback === 'function' && callback(this.zTree);
        this.treeLoaded(data);
       
    }

    /**
     * 设置初始化树
     * @param {Array} data
     */
    setInitialTree(data, callback) {
        var data = this.iconsFilter({data});
       
        $.fn.zTree.init(
            this.el, 
            this.treeConfig(), 
            this.setIsFirstNodesExpand(data));
        this.zTree = $.fn.zTree.getZTreeObj(this.treeId);
        //展开所有节点
        this.expandAll && this.zTree.expandAll(true)
        typeof callback === 'function' && callback(this.zTree);
        this.treeLoaded(data);
        
    }

    /**
     * 设置首个节点(根节点)是否打开
     * @param {Array} data: 接受数据 data.length = 1
     * @param {Boolean} isExpand: true 打开
     * @param {Boolean} isFreeze: false 默认不冻结
     */
    setIsFirstNodesExpand(data) {
        console.log(this.isExpand,'isExpand')
        if(Array.isArray(data) && data.length > 0) {
            data[0].open = this.isExpand;
            data[0].chkDisabled = this.isFreeze;
        }
        return data;
    }

    /**
     * 设置树的配置
     * @param {Boolean} isAsync: 树是否异步
     */
    treeConfig() {
        const _self = this;
console.log( this.autoParam,'this.lazy')
        return {
            data: {
                key: {name: this.name},//zTree 显示节点时,将返回的text作为节点名称
                simpleData: { enable: true }//简单数据模式
            },
            check: {
                enable: this.isCheck,//设置 zTree 的节点上是否显示 checkbox / radio
                nocheckInherit: true,//自动继承父节点 nocheck = true 的属性
                chkStyle: "checkbox",//显示 checkbox 选择框
                chkboxType: { "Y": "ps", "N": "ps" },
                chkDisabledInherit:true,
            },
            edit:{
                drag:{
					isCopy:this.isCopy,//拖拽时, 设置是否允许复制节点
                    isMove: this.isMove,//拖拽时, 设置是否允许移动节点
                    prev: false//true / false 分别表示 允许 / 不允许 移动到目标节点前面
                },
                enable: true,//设置 zTree 是否处于编辑状态
                showRemoveBtn: this.showRemoveBtn,
                showRenameBtn: this.showRenameBtn
            },
            view: {
                selectedMulti: true,//设置是否允许同时选中多个节点
                showLine: false,//设置 zTree 是否显示节点之间的连线
                // 设置 zTree 是否允许可以选择 zTree DOM 内的文本
                txtSelectedEnable: true,
                showIcon:this.showIcon,
                fontCss(treeId, treeNode) {
                    return !!treeNode.highlight ? {color: 'red'} : {color: '#333'};
                },
                addHoverDom(treeId, treeNode) {
                    var a_node = $('#' + treeNode.tId + '_a');
                    var operation = _self.operation ? _self.operation(treeNode) : {};
                    if($(`#operation-btn${treeNode.id}`).length > 0) return;
                    
                    var html = `<span id="operation-btn${treeNode.id}">${!operation.template?'':operation.template}</span>`;
                    a_node.append(html);
                    typeof operation.methods == 'function' && operation.methods();
                },
                removeHoverDom(treeId, treeNode) {
                    $(`#operation-btn${treeNode.id}`).unbind().remove();
                },
            },
            async: {
                enable:true,
                url: this.lazy,
                autoParam: this.autoParam,//异步加载时需要自动提交父节点属性的参数  ['id', "type",'nme=nme']
                otherParam:this.otherParam,//除了autoParam之外  还需要提交的参数
                dataFilter: function(treeId, parentNode, responseData) {
                    return _self.iconsFilter(responseData);
                },
                type: this.type,
                headers:this.headers
            },
            callback: {
                /**
                 * 用于捕获 勾选 或 取消勾选 之前的事件回调函数
                 * @param {*} treeId 对应 zTree 的 treeId
                 * @param {*} treeNode 进行 勾选 或 取消勾选 的节点 JSON 数据对象
                 */
                beforeCheck: function(treeId, treeNode) {
                    _self.currentHandlerName = 'check';

                    _self.nodeBeforeCheck.apply(this, arguments);
                    if(treeNode.checked) {
                        return treeNode.doCheck = true;
                    }
                    if(typeof _self.limitCheck === 'function') {
                        return treeNode.doCheck = _self.limitCheck(treeNode);
                    } 
                },
                /**
                 * 用于捕获节点被删除之前的事件回调函数
                 * @param {*} treeId 对应 zTree 的 treeId
                 * @param {*} treeNode 将要删除的节点 JSON 数据对象
                 */
                beforeRemove: function(treeId, treeNode) {
                    _self.nodeBeforeRemove.apply(this, arguments);
                },
                /**
                 * 用于捕获节点编辑名称结束（Input 失去焦点 或 按下 Enter 键）之后，更新节点名称数据之前的事件回调函数，并且根据返回值确定是否允许更改名称的操作
                 * @param {*} treeId 对应 zTree 的 treeId
                 * @param {*} treeNode 将要删除的节点 JSON 数据对象
                 */
                 beforeRename: function(treeId, treeNode) {
                    _self.nodeBeforebeforeRename.apply(this, arguments);
                },
                /**
                 * 用于捕获节点被展开的事件回调函数
                 * @param {*} event 
                 * @param {*} treeId 
                 * @param {*} treeNode 
                 */
                onExpand: function(event, treeId, treeNode) {
                    _self.nodeExpand && _self.nodeExpand.apply(this, arguments);
                },
                /**
                 * 用于捕获异步加载正常结束的事件回调函数
                 * @param {*} event 
                 * @param {*} treeId 
                 * @param {*} treeNode 
                 * @param {*} msg 
                 */
                onAsyncSuccess: function (event, treeId, treeNode, msg) {    
                    _self.load && _self.load(treeNode, _self.currentHandlerName);
                },
                /**
                 * 用于捕获 checkbox / radio 被勾选 或 取消勾选的事件回调函数
                 * @param {*} event 
                 * @param {*} treeId 
                 * @param {*} treeNode 
                 */
                onCheck: function(event, treeId, treeNode) {
                    console.log(777)
                    _self.nodeCheck && _self.nodeCheck.apply(this, arguments);
                },
                /**
                 * 用于捕获节点被点击的事件回调函数
                 * @param {*} event 
                 * @param {*} treeId 
                 * @param {*} treeNode 
                 */
                onClick: this.nodeClick,
                /**
                 * 用于捕获 zTree 上鼠标右键点击之后的事件回调函数
                 * @param {*} event 
                 * @param {*} treeId 
                 * @param {*} treeNode 
                 */
                onRightClick: this.rightClickthis,
                /**
                 * 用于捕获节点编辑名称结束之后的事件回调函数
                 * @param {*} event 
                 * @param {*} treeId 
                 * @param {*} treeNode 
                 * @param {*} isCancel 
                 */
                onRename: this.nodeRename,
                /**
                 * 用于捕获节点被折叠的事件回调函数
                 * @param {*} event 
                 * @param {*} treeId 
                 * @param {*} treeNode 
                 */
                onCollapse: this.nodeCollapse,
                /**
                 * 用于捕获节点被拖拽之前的事件回调函数，并且根据返回值确定是否允许开启拖拽操作
                 * @param {*} treeId 
                 * @param {*} treeNodes 被拖拽的节点 JSON 数据集合
                 * @param {*} targetNode 成为 treeNodes 拖拽结束的目标节点 JSON 数据对象。
                 * @param {*} moveType 指定移动到目标节点的相对位置
                 */
                beforeDrop:function(treeId, treeNodes, targetNode, moveType) {
                    _self.nodeBeforeDrop && _self.nodeBeforeDrop(treeNodes,targetNode);
                    
                    if(typeof _self.limitDrop === 'function') {
                        return _self.limitDrop(treeNodes, targetNode, moveType);
                    }else {
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
                 */
                onDrop:function(e, treeId, treeNodes,targetNode,moveType){
                    _self.nodeDrop && _self.nodeDrop(treeNodes,targetNode);
                }
            } 
        }
    }

    /**
     * 将对象中的属性放到this对象上
     * @param {Object} properties 
     */
    _eachProperties(properties) {
        Object.keys(properties).forEach(property => {
            const value = properties[property];
            this[property] = value;
        })
    }
}