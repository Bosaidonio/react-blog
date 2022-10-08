/*
 * @Date: 2022-10-07 21:33:44
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-10-08 20:14:36
 * @Description: git cz config
 */
module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ feat:     新功能',
    },
    {
      value: ':bug: fix',
      name: '🐛 fix:      修复bug',
    },
    {
      value: ':tada: init',
      name: '🎉 init:     初始化',
    },
    {
      value: ':pencil2: docs',
      name: '✏️  docs:     文档变更',
    },
    {
      value: ':lipstick: style',
      name: '💄 style:    代码的样式美化',
    },
    {
      value: ':recycle: refactor',
      name: '♻️  refactor: 重构',
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:     性能优化',
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test:     测试',
    },
    {
      value: ':rewind: revert',
      name: '⏪️ revert:   回退',
    },
    {
      value: ':package: build',
      name: '📦️ build:    打包',
    },
    {
      value: ':rocket: chore',
      name: '🚀 chore:    构建/工程依赖/工具',
    },
    {
      value: ':construction_worker: ci',
      name: '👷 ci:       CI related changes',
    },
    {
      value: ':arrow_down: down',
      name: '⬇️  down:     降级依赖',
    },
    {
      value: ':pushpin: pin',
      name: '📌 pin:      将依赖项固定到特定版本',
    },
    {
      value: ':art: art',
      name: '🎨 art:      改进代码的结构/格式',
    },
    {
      value: ':fire: remove',
      name: '🔥 remove:   删除代码或文件',
    },
    {
      value: ':ambulance: hotfix',
      name: '🚑️ hotfix:   修复紧急bug',
    },
    {
      value: ':building_construction: arch',
      name: '🏗️ arch:      进行架构更改',
    },
  ],
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？',
  },
  allowCustomScopes: true,
  allowBreakingChanges: [':sparkles: feat', ':bug: fix'],
  subjectLimit: 72,
}
