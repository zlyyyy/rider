/*
 * @Author: 明昼
 * @Date: 2021-01-11 13:57:12
 * @LastEditors: 明昼
 * @LastEditTime: 2021-01-12 14:44:00
 * @Description: file content
 * @FilePath: /rider/.umirc.ts
 */
import { defineConfig } from 'dumi';

const repo = 'rider-hooks';

export default defineConfig({
  title: repo,
  favicon:
    'https://sitecdn.zcycdn.com/f2e-assets/7e21f2d2-750f-4916-830a-4dfe652b47c2.png',
  logo:
    'https://sitecdn.zcycdn.com/f2e-assets/7e21f2d2-750f-4916-830a-4dfe652b47c2.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  locales: [['zh-CN', '中文']],
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/zlyyyy/rider',
    },
  ],
  // more config: https://d.umijs.org/config
});
