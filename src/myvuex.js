let Vue
//store 存储 数据
class Store {
    constructor(options = {}) {
        console.log(options)
        // this.state = options.state || {}
        //保存 疑问
        this.state = new Vue({
            data: options.state
        })
        console.log("vue响应式state", this.state)
        this.mutations = options.mutations || {}
        /**
         * 异步actions，mutation 必须同步执行这个限制么？
         * Action 就不受约束！由于有异步任务，commit单独执行，
         * 所以需要用箭头函数，确保内部的this指向
         */
        this.actions = options.actions
        // this.name = '赵政委'
    }
    //一定要使用箭头函数 保证this 内外一致
    commit = (type, arg) => {
        console.log(this)
        if (!this.mutations[type]) {
            console.log('不合法的mutation')
            return
        }
        this.mutations[type](this.state, arg)
    }
    dispatch(type, arg) {
        this.actions[type]({
            commit: this.commit,
            state: this.state
        }, arg)
    }
}


//vue.use()中使用
function install(_Vue) {
    // 这样store执行的时候，就有了Vue，不用import
    // 这也是为啥 Vue.use必须在新建store之前
    Vue = _Vue
    _Vue.mixin({
        beforeCreate() {
            // 这样才能获取到传递进来的store
            // 只有root元素才有store，所以判断一下
            if (this.$options.store) {
                _Vue.prototype.$store = this.$options.store

            }
        }
    })
}
export default { Store, install }