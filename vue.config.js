module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        // '@':'src' 内部已经配置过这个别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
