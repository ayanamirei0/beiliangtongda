import Vue from 'vue'
import Router from 'vue-router'

//  懒路由加载

//首页
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home') // 首页
const face = r => require.ensure([], () => r(require('@/pages/home/face')), 'face')
const chart = r => require.ensure([], () => r(require('@/pages/home/chart')), 'chart')
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')
const business = r => require.ensure([], () => r(require('@/pages/business/business')), 'business')
const member = r => require.ensure([], () => r(require('@/pages/member/member')), 'member') //会员中心
const contactUs = r => require.ensure([], () => r(require('@/pages/contactUs/contactUs')), 'contactUs') //联系我们
const news = r => require.ensure([], () => r(require('@/pages/news/news')), 'news') //新闻资讯
const newsDetails = r => require.ensure([], () => r(require('@/pages/news/news-details')), 'newsDetails') //新闻资讯详情页
const aboutUs = r => require.ensure([], () => r(require('@/pages/aboutUs/aboutUs')), 'aboutUs') //集团简介
const chairman = r => require.ensure([], () => r(require('@/pages/aboutUs/chairman')), 'chairman') //董事长寄语
const partner = r => require.ensure([], () => r(require('@/pages/aboutUs/partner')), 'partner') //业务合作伙伴
const structure = r => require.ensure([], () => r(require('@/pages/aboutUs/structure')), 'structure') //组织架构
const prospect = r => require.ensure([], () => r(require('@/pages/aboutUs/prospect')), 'prospect') //发展愿景
const emptyUs = r => require.ensure([], () => r(require('@/pages/aboutUs/emptyUs')), 'prospect') //发展愿景

//  注册
const register = r => require.ensure([], () => r(require('@/pages/register/register')), 'register')
const verifyPhone = r => require.ensure([], () => r(require('@/components/register/verifyPhone')), 'verifyPhone') //  验证手机号
const accountInfo = r => require.ensure([], () => r(require('@/components/register/accountInfo')), 'accountInfo') //  账号信息
const personalInfo = r => require.ensure([], () => r(require('@/components/register/personalInfo')), 'personalInfo') //  个人信息
const enterpriseInfo = r => require.ensure([], () => r(require('@/components/register/enterpriseInfo')), 'enterpriseInfo') //  企业信息
const submitAudit = r => require.ensure([], () => r(require('@/components/register/submitAudit')), 'submitAudit') //  企业信息
const agreement = r => require.ensure([], () => r(require('@/components/register/userAgreement')), 'userAgreement') //  企业信息
//会员中心 
const memberOnline = r => require.ensure([], () => r(require('@/pages/member/memberOnline')), 'memberOnline') //网上办事
const empty = r => require.ensure([], () => r(require('@/pages/member/empty')), 'empty') //空白页面
const memberDetail = r => require.ensure([], () => r(require('@/pages/member/memberDetail')), 'memberDetail') //空白页面

// 登录
const pwdLogin = r => require.ensure([], () => r(require('@/components//login/PwdLogin')), 'pwdLogin')
const qrcodeLogin = r => require.ensure([], () => r(require('@/components/login/QrcodeLogin')), 'qrcodeLogin')
const faceScanLogin = r => require.ensure([], () => r(require('@/components/login/FaceScanLogin')), 'faceScanLogin')
const codeLogin = r => require.ensure([], () => r(require('@/components/login/CodeLogin')), 'codeLogin')
const stepOne = r => require.ensure([], () => r(require('@/components/login/findPassword/StepOne')), 'stepOne')
const stepTwo = r => require.ensure([], () => r(require('@/components/login/findPassword/StepTwo')), 'stepTwo')
const faceScanSuccess = r => require.ensure([], () => r(require('@/components/login/FaceScanSuccess')), 'faceScanSuccess')
const faceScanFail = r => require.ensure([], () => r(require('@/components/login/FaceScanFail')), 'faceScanFail')
const bindMobile = r => require.ensure([], () => r(require('@/components/login/BindMobile')), 'bindMobile') //  二维码登录绑定手机号


Vue.use(Router)


const scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}

        // scroll to anchor by returning the selector
        if (from.path.includes("/register") && to.path.includes("/register")) {
            return { x: 0, y: 500 }
        } else {
            return { x: 0, y: 0 }
        }
    }
}



export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: home
    }, {
        path: '/face',
        component: face
    }, {
        path: '/chart',
        component: chart
    }, {
        path: '/bindMobile',
        component: bindMobile
    }, {
        path: '/login',
        component: login,
        children: [{
            path: '',
            component: pwdLogin
        },
        //  账号登录
        {
            path: 'pwdLogin',
            component: pwdLogin
        },
        //  二维码登录
        {
            path: 'qrcodeLogin',
            component: qrcodeLogin
        },
        //  短信登录
        {
            path: 'codeLogin',
            component: codeLogin
        },
        //  人脸识别登录
        {
            path: 'faceScanLogin',
            component: faceScanLogin
        },
        //  找回密码第一步
        {
            path: 'stepOne',
            component: stepOne
        },
        //  找回密码第二步
        {
            path: 'stepTwo',
            component: stepTwo
        },
        //  人脸识别成功页面
        {
            path: 'faceScanSuccess',
            component: faceScanSuccess
        },
        //  人脸识别失败页面
        {
            path: 'faceScanFail',
            component: faceScanFail
        }
        ]
    }, {
        path: '/register',
        component: register,
        children: [{
            path: '',
            component: verifyPhone
        },
        //  用户协议
        {
            path: 'agreement',
            component: agreement
        },
        //  验证手机号
        {
            path: 'verifyPhone',
            component: verifyPhone
        },
        //  账号信息
        {
            path: 'accountInfo',
            component: accountInfo
        },
        //  个人信息
        {
            path: 'personalInfo',
            component: personalInfo
        },
        //  企业信息
        {
            path: 'enterpriseInfo',
            component: enterpriseInfo
        },
        //  提交审核
        {
            path: 'submitAudit',
            component: submitAudit
        }
        ]
    }, {
        path: '/business',
        component: business
    },
    {
        path: '/member',
        component: member,
    },
    {
        path: '/memberDetail',
        component: memberDetail,
    },
    {
        path: '/empty',
        component: empty,
    },
    {
        path: '/memberOnline',
        component: memberOnline
    }, {
        path: '/news',
        component: news
    }, , {
        path: '/newsDetails',
        component: newsDetails
    },
    {
        path: '/aboutUs',
        component: aboutUs
    },
    {
        path: '/emptyUs',
        component: emptyUs
    },

    {
        path: '/chairman',
        component: chairman
    }, {
        path: '/contactUs',
        component: contactUs
    }, {
        path: '/partner',
        component: partner
    }, {
        path: '/structure',
        component: structure
    }, {
        path: '/prospect',
        component: prospect
    }
    ],
    scrollBehavior
})