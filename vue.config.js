module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/_imports.scss";`
      }
    }
  }
}
