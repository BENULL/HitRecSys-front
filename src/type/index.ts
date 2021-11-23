export interface IResponse {
    status: number | string;
    data: any;
    msg: string;
}

/**用户登录 */
export interface ILogin {
    /** 账户名称 */
    username: string;
    /** 账户密码 */
    password: string;
}
