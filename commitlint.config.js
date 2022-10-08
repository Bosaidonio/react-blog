/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-10-08 19:21:24
 * @Description: Do not edit
 */
module.exports = {
  extends: ['gitmoji'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'init', 'docs', 'style', 'refactor', 'perf', 'test', 'revert', 'build', 'chore', 'ci', 'down', 'pin', 'art', 'remove', 'hotfix', 'arch']],
  },
}
