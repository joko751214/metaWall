import request from '@/utils/request';

export function getUsersData(params) {
  return request({
    url: '/users',
    method: 'get',
    params,
  });
}
