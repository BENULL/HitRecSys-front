import service from "@/utils/request";
import { IResponse, ILogin } from "@/type";


/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const login = async (params: ILogin): Promise<IResponse> => {
    return await service.post('user/login', params);
};

export const recMovieByGenre = async (params: any): Promise<IResponse> => {
    return await service.get('recMovieByGenre', { params:params,loading: true });
};

export const test = async (): Promise<IResponse> => {
    return await service.get('test', { loading: true });
};

