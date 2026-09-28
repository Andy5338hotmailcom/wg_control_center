// 更新日志数据（改版本只动这个文件）
const changelogData = [
    {
        version: "preview17.1.1",
        date: "2026-09-27",
        description: "社团添加+半周年",
        changes: [
            "添加了2个社团展板架构",
            "目前可能404",
            "终于半年了！",
            "添加了一个彩蛋",
            "备注：属于预览版本"
        ]
    },
    {
        version: "preview16.1.1",
        date: "2026-09-22",
        description: "服务台",
        changes: [
            "增加了服务台",
            "给以后的服务扩展留了机会",
            "接下来更新比较激烈！",
            "备注：属于预览版本"
        ]
    },
    {
        version: "preview15.9.0",
        date: "2026-09-20",
        description: "代码整合",
        changes: [
            "首先把前面的打错的字……",
            "然后整合了零散文件",
            "改进了第二部安装界面",
            "备注：属于预览版本"
        ]
    },
    {
        version: "preview15.5.0",
        date: "2026-09-13",
        description: "节目修改",
        changes: [
            "解决了问题，终于把提供反馈和许可条款移动到了设置",
            "然后把更多选项删了",
            "备注：属于预览版本"
        ]
    },
    {
        version: "v15.1.0",
        date: "2026-09-08",
        description: "累计更新",
        changes: [
            "给正式版一个累计更新",
            "备注：属于正式版本"
        ]
    },
    {
        version: "preview15",
        date: "2026-09-07",
        description: "内核更换",
        changes: [
            "对内核动了亿点的改动",
            "从pywebview改成了flask+pwa",
            "备注：属于预览版本"
        ]
    },
    {
        version: "preview14.4",
        date: "2026-09-06",
        description: "信息更换",
        changes: [
            "把预备换成了初一……",
            "备注：属于预览版本"
        ]
    },
    {
        version: "preview14.3.1",
        date: "2026-09-06",
        description: "文件整理",
        changes: [
            "把文件整理了",
            "先备注一下：14.3和这个版本属于预览版本",
            "现在也有预览体系了！",
            "顺手把检查更新的颜色调了调"
        ]
    },
    {
        version: "preview14.3",
        date: "2026-09-06",
        description: "删……",
        changes: [
            "把搜索给删了……",
            "我到底在build10里面加了什么东西啊！"
        ]
    },
    {
        version: "build14.2",
        date: "2026-09-05",
        description: "更新",
        changes: [
            "我们终于恢复了更新！"
        ]
    },
    {
        version: "build14.1",
        date: "2026-09-03",
        description: "介绍",
        changes: [
            "我们添加了介绍"
        ]
    },
    {
        version: "build14",
        date: "2026-07-25",
        description: "压缩！",
        changes: [
            "我们把资源压缩了，还有欢迎使用网页版!"
        ]
    },
    {
        version: "build13.0.1",
        date: "2026-07-17",
        description: "删删删*2！",
        changes: [
            "我们把更新模块删了……"
        ]
    },
    {
        version: "build13.0.0",
        date: "2026-07-17",
        description: "删删删！",
        changes: [
            "我们把做操视频模块删了……"
        ]
    },
    {
        version: "build12.1",
        date: "2026-07-08",
        description: "安装包*2",
        changes: [
            "继续安装包安装！"
        ]
    },
    {
        version: "build12",
        date: "2026-07-08",
        description: "设置！",
        changes: [
            "修改了更新界面成为设置的一部分",
            "把更新日志集合到设置里面"
        ]
    },
    {
        version: "build11",
        date: "2026-07-07",
        description: "更新界面修改",
        changes: [
            "修改了更新界面，以后将成为设置的一部分",
            "以后将会把部分功能集合到设置里面",
            "上期揭晓：newcao.mp4是新版室内操视频，你猜对了吗？"
        ]
    },
    {
        version: "build10.2",
        date: "2026-07-06",
        description: "视频正在压缩",
        changes: [
            "大的受不了了",
            "此版本压缩了一个视频newcao.mp4(猜猜看是哪一个)"
        ]
    },
    {
        version: "build10.1",
        date: "2026-07-05",
        description: "安装包？",
        changes: [
            "大的受不了了",
            "此版本为安装包安装"
        ]
    },
    {
        version: "build10",
        date: "2026-07-04",
        description: "第十了！",
        changes: [
            "终于第十版了！",
            "重新编译了一下"
        ]
    },
    {
        version: "build9",
        date: "2026-05-11",
        description: "第九细节一号",
        changes: [
            "添加了退出提示",
            "把一些功能整合进了更多",
            "添加了图标"
        ]
    },
    {
        version: "build8",
        date: "2026-05-10",
        description: "第八演出视频添加二号与视频修复三号",
        changes: [
            "更改了昆曲团的背景音乐",
            "修复了部分排版问题",
            "添加了圆角",
            "部分视频添加了封面",
            "继续修复了弦乐团演出视频部分设备不能播放画面的问题",
            "继续添加了部分演出视频"
        ]
    },
    {
        version: "build7",
        date: "2026-05-07",
        description: "第七演出视频添加一号与视频修复二号",
        changes: [
            "修复了弦乐团介绍视频部分设备不能播放画面的问题",
            "添加了部分演出视频"
        ]
    },
    {
        version: "build6",
        date: "2026-04-20",
        description: "第六视频修复一号与反馈版本",
        changes: [
            "修复了首页部分设备背景视频不能播放的问题",
            "添加了反馈功能"
        ]
    },
    {
        version: "build5",
        date: "2026-04-13",
        description: "第五许可条款介绍视频统一版本",
        changes: [
            "把介绍视频都样式统一",
            "紧急把第三更新日志添加版本改成第四更新日志添加版本",
            "添加许可条款"
        ]
    },
    {
        version: "build4",
        date: "2026-04-12",
        description: "第四更新日志添加版本",
        changes: [
            "加了一个更新日志，就是这个界面……"
        ]
    },
    {
        version: "build3",
        date: "2026-04-11",
        description: "第三更改版本",
        changes: [
            "修复部分问题，增加用户体验（学习某大厂的）"
        ]
    },
    {
        version: "build2",
        date: "2026-04-11",
        description: "第二集页更改版本",
        changes: [
            "加了一个首页音乐"
        ]
    },
    {
        version: "build1",
        date: "2026-04-10",
        description: "第一集合版本",
        changes: [
            "终于把所有都串联起来了！",
            "反正这样就这样",
            "就是大集合"
        ]
    }
];
