/*
 * @Author: Mario
 * @Date: 2021-11-17 16:23:57
 * @LastEditTime: 2023-06-11 20:29:38
 * @LastEditors: mario marioworker@163.com
 * @Description: 配置文件
 */
const { when } = require('@craco/craco')
const CracoLessPlugin = require('craco-less')
const WebpackBar = require('webpackbar')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const path = require('path')
// 防止create-react-app 构建时清空控制台
// process.stdout.isTTY = false
const resolve = (localPath) => {
  return path.join(__dirname, localPath)
}

module.exports = {
  webpack: {
    alias: {
      '@': resolve('./src'),
    },
    plugins: [
      // webpack构建进度条
      new WebpackBar({ profile: true, color: '#1a9c70' }),
      // webpack依赖包分析器,只有当环境变量中存在ANALYZE=true时才会启用
      ...when(process.env.ANALYZE === 'true', () => [new BundleAnalyzerPlugin()], []),
    ],
    configure: (webpackConfig, { env, paths }) => {
      // webpackConfig.externals = {
      //   react: 'React',
      //   'react-dom': 'ReactDOM',
      // }
      // 加载module.less文件时开启
      webpackConfig.module.rules = [
        ...webpackConfig.module.rules,
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            'less-loader',
          ],
          include: /\.module\.less$/,
        },
      ]
      return webpackConfig
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 覆盖antd默认主题变量
            // modifyVars: { "@primary-color": "#cddbfa" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  style: {
    postcssOptions: {
      plugins: [require('autoprefixer')],
    },
  },
  babel: {
    presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
    plugins: [
      '@emotion/babel-plugin',
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true, // 设置为true即是less
        },
      ],
    ],
  },
  jest: {
    configure: {
      // 指定测试文件目录
      roots: ['<rootDir>/tests'],
      moduleNameMapper: {
        // 处理别名
        '^@/(.*)$': '<rootDir>/src/$1',
      },
      testMatch: ['<rootDir>/tests/**/*.{js,jsx,ts,tsx}'],
    },
  },
}
