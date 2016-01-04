var path = require('path');


module.exports = {
	entry:{
		app: './src/js/app.js'
	},
	output:{
		filename: './js/[name].js',
		path: path.join(__dirname, './build'),
	},
	module: {
		loaders: [
			{test: /\.vue$/, loader: 'vue'},
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
			{test: /\.scss/, loader: 'style!css!sass'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192&name=../build/img/[name].[ext]'},
			{test: /\.(eot|woff|woff2|ttf|svg)$/, loader: 'url-loader?limit=8192&name=../build/font/[name].[ext]'}
		]
	},
	babel: {
    	presets: ['es2015'],
    	plugins: ['transform-runtime']
  	},
	devtool: 'source-map',
}