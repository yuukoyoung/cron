import { checkIn, getCounts, getLotteryConfig, draw } from './api/growth';

async function checkInAndDraw() {
  const res = await checkIn();

  console.log(`签到成功 +${res.data.data.incr_point} 矿石`);
  console.log(`当前矿石数 ${res.data.data.sum_point}`);

  const res2 = await getCounts();

  console.log(`连续签到天数 ${res2.data.data.cont_count}`);
  console.log(`累计签到天数 ${res2.data.data.sum_count}`);

  const res3 = await getLotteryConfig();

  console.log(`免费抽奖次数 ${res3.data.data.free_count}`);

  for (let i = 0; i < res3.data.data.free_count; i++) {
    const res4 = await draw();

    console.log(`恭喜抽中【${res4.data.data.lottery_name}】`);
    console.log(
      `本次抽奖行为增加幸运值 ${res4.data.data.draw_lucky_value}，当前幸运值为 ${res4.data.data.total_lucky_value}`,
    );
  }
}

checkInAndDraw();
