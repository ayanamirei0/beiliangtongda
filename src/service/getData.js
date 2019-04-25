import $http from './ajax'

var root = process.env.API_HOST

/*// 获取首页的banner
export const homeBanner = () => $http(root + '/information/loadingImg');

/!**
 * 资讯列表
 * startPage  当前页数
 * pageSize   每页数量

 *!/
export const informationList = (params) => $http(root + '/information/informationList', params);*/

export const crumbs = (orgCode, code) => $http(root + '/information/banner/getBannerList', {
    orgCode,
    code
}); //首页轮播图

export const newsLists = (params) => $http(root + '/information/cmsActivityArtical/queryCmsActivityArticalList', params); //
export const newsDetail = (params) => $http(root + '/information/cmsActivityArtical/queryArticalByIdForBeiLiang', params) //


//公告列表
    /**
     * 根据手机号码查询用户是否存在
     * phone  String  手机号
     */
    // export const findUserByPhone = (params) => $http(root + '/user/findUserByPhone', params); //根据手机号码查询用户是否存在

/**
 * 验证手机上发送的验证码
 * phone  String  手机号
 * phoneCode  String  验证码
 */
export const onVerifyCode = (phone, phoneCode) => $http(root + '/customerweb/user/onVerifyCode', {
    phone,
    phoneCode
});

/**
 * 根据账户查询用户是否存在
 * account	是	string	账户
 */
export const findUserByAccount = (account) => $http(root + '/customerweb/user/findUserByAccount', {
    account
});

/**
 * 上传图片接口
 * file  String  文件流名称
 */
export const uploadfile = (file) => $http(root + '/customerweb/user/uploadfile', {
    file
});

/**
 * 人脸检测接口
 * faceUrl  String  人脸图片(64位编码)
 */
export const detect = (faceUrl) => $http(root + '/customerweb/user/detect', {
    faceUrl
});


/**
 * 上传人脸接口
 * faceUrl	是	string	人脸图片地址名称（base64）
 * phone	是	string	用户phone
 */
export const addUserFace = (params) => $http(root + '/customerweb/user/addUserFace', params); //上传人脸接口

/**
 * 人脸识别接口
 * faceUrl	是	string	人脸图片(64位编码)
 */
export const faceverify = (faceUrl) => $http(root + '/customerweb/user/faceverify', {
    faceUrl
}); //人脸识别接口

/**
 * 身份认证
 * name	是	string	客户姓名
 * idCard	是	string	证件号码
 */
export const certification = (name, idCard) => $http(root + '/customerweb/user/certification', {
    name,
    idCard
}); //身份认证

/**
 * 根据身份证号码查询用户是否存在
 * idCard	是	string	证件号码
 */
export const findUserByIdCard = (idCard) => $http(root + '/customerweb/user/findUserByIdCard', {
    idCard
}); //身份认证

/**
 * 企业类型接口
 */
export const getEnterpriseType = () => $http(root + '/customerweb/user/getEnterpriseType', {}); //企业类型接口

/**
 * 用户注册接口
 * phone	是	string	手机号
 * password	是	string	密码
 * name	是	string	姓名
 * idCard	是	string	身份证号
 * idCardUrl	是	string	身份证图片地址
 * faceUrls	是	array	人脸地址(字符串数组)
 * enterpriseType	是	string	企业类型
 * enterpriseName	是	string	企业名称
 * enterpriseAddr	是	string	企业地址
 * enterpriseCertificateUrl	是	string	企业认证url
 * creditCode	是	string	信用代码
 * openid	否	string	微信openid
 * confirmPassword	是	string	确认密码
 * account	是	string	账号
 */
export const register = (params) => $http(root + '/customerweb/user/register', params); //用户注册接口




/**
 * 密码登录
 * phone  String  账号
 * password   String  登录密码
 */
export const pwdLogin = (account, password) => $http(root + '/customerweb/user/passwordLogin', {
    account,
    password
});


/**
 * 短信登录
 * phone  String  手机号
 * phoneCode   String  验证码
 */
export const phoneLogin = (phone, phoneCode) => $http(root + '/customerweb/user/phoneLogin', {
    phone,
    phoneCode
});

/**
 * 获取短信验证码
 * phone  String  手机号
 */
export const getCode = (phone) => $http(root + '/customerweb/user/getcode', {
    phone
});

/**
 * 北粮用户
 * customerBeiliangId  String 北粮用户ID
 */
export const logout = (customerBeiliangId) => $http(root + '/customerweb/user/logout', {
    customerBeiliangId
})


/**
 * 人脸登录
 * faceUrl  String  识别的图片base64格式
 */
export const faceLogin = (faceUrl) => $http(root + '/customerweb/user/faceLogin', {
    faceUrl
});

/**
 * 二维码登录
 * code  String  授权code码
 */
export const wxLogin = (code) => $http(root + '/customerweb/wechatOpen/wxAuthAndLogin', {
    code
});

/**
 * 微信登录后验证手机号是否已经注册
 * phone	是	string	手机号
 * phoneCode	是	string	验证码
 * openid	是	string	openid
 */
export const verificationPhoneAndOpendId = (phone, phoneCode, openid) => $http(root + '/customerweb/user/verificationPhoneAndOpendId', {
    phone,
    phoneCode,
    openid
});

/**
 * 忘记密码
 * code  String  授权code码
 */
export const forgetPwd = (newpwd, confirmPassword, phone, phoneCode) => $http(root + '/customerweb/user/forgetpwd', {
    newpwd,
    confirmPassword,
    phone,
    phoneCode
});

/**
 * 滑动验证手机号
 * phone  String  手机号
 */
export const findUserByPhone = (phone) => $http(root + '/customerweb/user/findUserByPhone', {
    phone
});


/**
 * 平台公告列表接口
 startPage  是  int
 pageSize  是  int  一页条数
 orgCode  是  string  平台code
 orgFlag  是  string  机构标志 (jt:集团 cfsyq:财富事业群等)
 containBlob  否  string  是否包含大字段(通知公告内容)-true:包含 false:不包含
 */
// notice/getBeiliangNoticeList
export const noticeGetBeiliangNoticeList = (params) => $http(root + '/information/notice/getBeiliangNoticeList', params);

/******************会员中心 开始******************/
/**
 * 上传图片接口
 * file	是	string	文件流名称
 */
//
// export const userUploadfile = (params) => $http(root + 'user/uploadfile', params);

/**
 * 网上办事保存接口
 *
 * customerBeiliangId	是	string	客户id
 * formCode	是	string	申请表类型
 * formUrl	是	string	文件流名称
 *
 */
export const userSaveApplicationForm = (params) => $http(root + '/customerweb/user/saveApplicationForm', params);

/**
 * 北粮申请表管理接口
 *
 * orgCode	是	string	机构平台
 * formCode	是	string	申请表单code
 *
 */

export const applicationFormGetApplicationForm = (params) => $http(root+ '/information/applicationForm/getApplicationForm', params);

//
/**
 * 北粮日志统计接口 （待定）
 *
 * customerBeiliangId	是	string	客户id
 * type	                是	string  类型
 * customerId        	是	string	客户编号
 *
 */
export const userLogRecord = (params) => $http(root + '/customerweb/user/logRecord', params);
/**
 * 通知公告详情
 *
 * id	是	int	通知公告id
 */

export const noticeGetNoticeById = (params) => $http(root + '/information/notice/getNoticeById', params)


export const noticeGetNoticeByIdForBeiLiang = (params) => $http(root + '/information/notice/getNoticeByIdForBeiLiang', params)
/******************会员中心 结束******************/
