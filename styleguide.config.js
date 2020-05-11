const VueLoaderPlugin = require('vue-loader/lib/plugin')

// styleguide.config
module.exports = {
  title: 'Veer-UI',          // 文档的标题
  components: 'packages/components/**/src/*.vue', // 组件的目录
  pagePerSection: true,
  tocMode: 'collapse',
  sections: [
    {
      name: '视频 Video',
      content: 'packages/components/video/README.md',
    },
    {
      name: '单选框 Radio',
      description: 'This is the first section description',
    },
    {
      name: '输入框 Button',
      content: 'packages/components/button/README.md'
    }
  ],
  webpackConfig: {
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test: /\.js?$/,
					loader: 'babel-loader',
					exclude: /(node_modules|packages)/,
					query: {
						cacheDirectory: true
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				},
				{
					test: /\.png$/,
					use: ['url-loader']
				}
			]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
	},
}
