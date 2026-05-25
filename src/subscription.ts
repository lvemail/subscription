import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 20260518,
  name: 'DIY-Subscription',
  version: 0,
  author: 'author',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/lvemail/subscription',
  categories,
  globalGroups,
  apps: await batchImportApps('./src/apps'),
});
