
const path = require('path')
module.exports = ({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        'D:\\模拟项目\\小兔鲜\\eribbit-client-pc\\src\\assets\\styles\\variables.less',
        'D:\\模拟项目\\小兔鲜\\eribbit-client-pc\\src\\assets\\styles\\mixin.less'
      ]
    }
  }
})
