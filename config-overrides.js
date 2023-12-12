
const path=  require('path')


module.exports = {
  webpack: function (config, env) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@Api": path.resolve(__dirname, './src/api/services'),
        "@Components": path.resolve(__dirname, './src/components'),
        "@Hooks": path.resolve(__dirname, './src/hooks'),
        "@Store": path.resolve(__dirname, './src/store'),
        "@Models": path.resolve(__dirname, './src/models'),
      }
    }
    config.plugins = [...config.plugins, ]

    return config
  },
  jest: function(config) {
      config.preset= "ts-jest"
      config.moduleFileExtensions= ['js', 'jsx', 'ts', 'tsx']
      config.moduleDirectories= ['node_modules', 'src/**']
    

    return config
  }
}