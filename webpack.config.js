const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./src/index.js', './src/styles/scss/index.scss'],
	output: {
		path: path.resolve(__dirname, './src/', 'styles'),
		filename: 'js/bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/[name].css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
                    }
				]
            },
            {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'},
            {test: /\.jsx$/ , loader:'babel-loader', exclude: '/node_modules/'},
            {test: /\.css$/ , loader:'css-loader', exclude: '/node_modules/'}
		]
    },
    externals: {
		react: "react"
	}
};