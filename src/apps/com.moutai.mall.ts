import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.moutai.mall',
  name: 'i茅台',
  groups: [
    {
      key: 1,
      name: '定时抢购500ml',
      desc: '持续点击"立即购买"按钮直到消失',
      activityIds: '.webview.view.WebViewActivity',
      enable: true,
      matchTime: 301000, // 10秒内持续检测
      resetMatch: 'activity', // 离开页面后重置
      // 移除 actionMaximum，允许无限次点击
      rules: [
        {
          matches: '[text="立即购买"]',
          action: 'click',
        },
      ],
    },
    {
      key: 2,
      name: '定时抢购1L',
      desc: '持续点击"立即购买"按钮直到消失',
      activityIds: '.webview.view.WebViewActivity',
      enable: true,
      matchTime: 300000, // 10秒内持续检测
      resetMatch: 'activity', // 离开页面后重置
      // 移除 actionMaximum，允许无限次点击
      rules: [
        {
          matches: '[text="20:09投放"]',
          action: 'click',
        },
      ],
    },
  ],
});
