import request from '@/utils/request';

export function getPostsData(params) {
  return request({
    url: '/posts',
    method: 'get',
    params,
  });
}

export function postStory(data) {
  return request({
    url: '/posts',
    method: 'post',
    data,
  });
}
