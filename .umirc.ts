/*
 * @Author: 明昼
 * @Date: 2021-01-11 13:57:12
 * @LastEditors: 明昼
 * @LastEditTime: 2021-01-11 14:50:40
 * @Description: file content
 * @FilePath: /rider/.umirc.ts
 */
import { defineConfig } from 'dumi';

const repo = 'rider-hooks';

export default defineConfig({
  title: repo,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
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
      path: 'https://github.com/umijs/dumi-template',
    },
  ],
  // more config: https://d.umijs.org/config
});
