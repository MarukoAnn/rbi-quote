import ClientHttp from "../utils/interceptors";
let clientHttp = new ClientHttp();
export default class Server {

    constructor() {
    }
    // 登录
    login(data){
      return clientHttp.post('/login',data);
    }

    //TODO  报告管理模块
   //获取报告类型
    getReportTypeList(data){
        return clientHttp.post('/systemplate/findAll', data)
    }
    // 获取分页数据信息
    getReportTableData(data){
        return clientHttp.post('/report/findByPageByAuditStatus', data)
    }
    // 填报的估价师信息
    getReportAppraiserInfo(data){
        return clientHttp.post('/singedUser/findByUuid', data)
    }
    // 二级审核人查询
    getReviewerTowUser(data){
        return clientHttp.post('/singedUser/findByUuidA2', data)
    }
    // 三级审核人 和 项目负责人 查询
    getReviewerTreeUser(data){
        return clientHttp.post('/singedUser/findByUuidAP', data)
    }
    // 上传报告
    addReport(data){
        return clientHttp.post('/report/insert', data)
    }
    // 修改
    updateReport(data){
        return clientHttp.post('/report/updateByReportId', data)
    }
    // 删除报告
    delReport(data){
        return clientHttp.post('/report/deleteByReportId', data)
    }
    //TODO 报告审核模块

    //TODO 用户权限模块
   //获取所有的角色权限
   getAllRoleListData(data){
        return clientHttp.post('/role/all', data)
   }
    //获取用户列表
    getUserListData(data){
        return clientHttp.post('/user/all', data)
    }
    //新增用户
    addUserInfo(data){
        return clientHttp.post('/user/add', data)
    }
    //新增用户
    updateUserInfo(data){
        return clientHttp.post('/user/update', data)
    }
    // 删除用户
    delUserInfo(data){
        return clientHttp.post('/user/delete', data)
    }
    // 重置密码
    resetUserPassword(data){
        return clientHttp.post('/user/resetPassword', data)
    }

   //TODO 签字人员

   // 分页查询签字人员
    querySignPageData(data){
        return clientHttp.post('/signed/all', data)
    }
    // 签字人员配置信息查询
    getSignerConfigData(data){
        return clientHttp.post('/signed/select', data)
    }
    // 添加签字人员
    addSigner(data){
        return clientHttp.post('/signed/add', data)
    }
    // 修改签字人员
    updateSigner(data){
        return clientHttp.post('/signed/add', data)
    }

}
