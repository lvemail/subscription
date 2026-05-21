import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过按钮',
      rules: [
        {
          matches: '[id="com.kuaishou.nebula:id/splash_skip_text"]',
          //snapshotUrls: 'https://example.com/snapshot/001',
        },
      ],
    },
  ],
});
