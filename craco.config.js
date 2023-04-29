/*
 * @Author: Mario
 * @Date: 2021-11-17 16:23:57
 * @LastEditTime: 2023-04-24 20:38:37
 * @LastEditors: mario marioworker@163.com
 * @Description: 配置文件
 */
const { whenProd } = require('@craco/craco')
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
      // webpack依赖包分析器
      ...whenProd(() => [new BundleAnalyzerPlugin()], []),
    ],
    configure: (webpackConfig, { env, paths }) => {
      // webpackConfig.externals = {
      //   react: 'React',
      //   'react-dom': 'ReactDOM',
      // }
      webpackConfig.optimization.splitChunks = {
        ...webpackConfig.optimization.splitChunks,
        cacheGroups: {
          commons: {
            chunks: 'all',
            // 将两个以上的chunk所共享的模块打包至commons组。
            minChunks: 2,
            name: 'commons',
            priority: 80,
          },
        },
      }
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
    postcss: {
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
}
