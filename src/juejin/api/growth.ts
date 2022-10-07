import { request } from './request';

// 签到
export function checkIn() {
  return request({
    url: 'growth_api/v1/check_in',
    method: 'post',
  });
}

// 获取签到次数
export function getCounts() {
  return request({
    url: '/growth_api/v1/get_counts',
    method: 'get',
  });
}

// 获取抽奖配置
export function getLotteryConfig() {
  return request({
    url: '/growth_api/v1/lottery_config/get',
    method: 'get',
  });
}

// 抽奖
export function draw() {
  return request({
    url: '/growth_api/v1/lottery/draw',
    method: 'post',
  });
}
