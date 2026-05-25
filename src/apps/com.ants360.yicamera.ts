import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ants360.yicamera',
  name: '小蚁摄像机',
  groups: [
    {
      key: 0,
      name: '首页广告',
      desc: '关闭首页开屏、插屏等广告',
      rules: [
        {
          matches: '[vid="iv_close"][clickable=true][visibleToUser=true]',
          activityIds: [
            'com.ants360.yicamera.activity.SplashYiHomeActivity',
            'com.ants360.yicamera.activity.MainHomeActivity',
          ],
        },
        {
          matches:
            '[vid="beizi_interstitial_ad_close_container_rl"][clickable=true]',
          activityIds: [
            'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity',
          ],
        },
        {
          matches:
            '[name="android.widget.ImageView"][clickable=true][childCount=0][left>1200][top<600][width>=80][width<=120][height>=80][height<=120]',
          activityIds: [
            'com.octopus.ad.AdActivity',
            'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '播放页广告',
      desc: '关闭播放页弹出的各类广告',
      rules: [
        {
          matches: '[desc="不感兴趣"][clickable=true]',
          activityIds: ['com.ants360.yicamera.activity.MainActivity'],
        },
        {
          matches: '[id="com.ants360.yicamera:id/ad_close"]',
          activityIds: ['com.ants360.yicamera.activity.MainActivity'],
        },
        {
          matches:
            '[id="com.ants360.yicamera:id/ms_item_pre_render_large_iamge_close"]',
          activityIds: ['com.ants360.yicamera.activity.SplashYiHomeActivity'],
        },
        {
          matches:
            '[id="com.ants360.yicamera:id/ad_container"] > [name="android.widget.ImageView"][clickable=true][width<=80][height<=80]',
          activityIds: ['com.ants360.yicamera.activity.MainActivity'],
        },
        {
          matches: '[text^="仔细思考"][clickable=true]',
          actionDelay: 1000,
        },
        {
          matches:
            '[name="android.widget.ImageView"][clickable=true][childCount=0][width>=80][width<=90][height>=80][height<=90][left>=1350]',
          activityIds: ['com.xiaoyi.yiplayer.ui.PlayerActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '方向广告',
      desc: '自动点击多种方向广告关闭按钮',
      rules: [
        {
          matches: '[id="com.ants360.yicamera:id/ivClose"]',
          activityIds: ['com.ants360.yicamera'],
        },
        {
          matches: '[id="com.ants360.yicamera:id/ptgImgClose"]',
          activityIds: ['com.xiaoyi.yiplayer.ui.PlayerActivity'],
        },
        {
          matches: '[id="com.ants360.yicamera:id/ad_close"]',
          activityIds: ['com.xiaoyi.yiplayer.ui.PlayerActivity'],
        },
        {
          matches:
            '[id="com.ants360.yicamera:id/btnAntsDialogLeft"][clickable=true]',
          activityIds: [
            'com.xiaoyi.yiplayer.ui.PlayerActivity',
            'com.ants360.yicamera.activity.MainHomeActivity',
          ],
        },
        {
          matches: '[text="收起"][clickable=true]',
          activityIds: ['com.xiaoyi.yiplayer.ui.PlayerActivity'],
        },
        {
          matches:
            '[vid="adContainer"] [name="android.widget.ImageView"][clickable=true][width=38][height=38][left>=1350]',
          activityIds: ['com.xiaoyi.yiplayer.ui.PlayerActivity'],
        },
        {
          matches:
            '[vid="s2s_template_view_media_container"] [name="android.widget.ImageView"][clickable=true][width=60][height=60][left>=600][left<=650]',
          activityIds: ['com.xiaoyi.yiplayer.ui.PlayerActivity'],
          actionDelay: 1000,
        },
      ],
    },
  ],
});
