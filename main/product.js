// product.js 全局项目配置
window.productConfig = {
    // 项目名称
    productName: "艺术社团展板",
    // 所有服务列表，统一在这里维护
    services: [
        {
            name: "服务管理台",
            port: 8549,
            indexUrl: "http://127.0.0.1:8549/index.html",
            installUrl: "http://127.0.0.1:8549/oobe.html"
        },
        {
            name: "艺术社团展板",
            port: 8550,
            indexUrl: "http://127.0.0.1:8550/index.html",
            installUrl: "http://127.0.0.1:8550/install.html"
        },
        {
            name: "大雁系统",
            port: 8551,
            indexUrl: "http://127.0.0.1:8551/index.html",
            installUrl: "http://127.0.0.1:8551/setup/index.html"
        }
    ]
}
