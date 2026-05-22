import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.moutai.mall',
  name: 'i茅台',
  groups: [
    {
      key: 1,
      name: '定时抢购',
      desc: '持续点击"20:00投放"按钮直到消失',
      activityIds: '.webview.view.WebViewActivity',
      enable: true,
      matchTime: 300000, // 10秒内持续检测
      resetMatch: 'activity', // 离开页面后重置
      // 移除 actionMaximum，允许无限次点击
      rules: [
        {
          matches: '[text="立即购买"][clickable=true]',
          action: 'click',
        },
      ],
    },
  ],
});
