module.exports = {
	entry:'./main.js',
	output:{
		path:__dirname+ '/dist/',
		filename:'index.js',
	},
	devServer:{
		inline:false,
		port:9000
	},
	module:{
		rules:[{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			query:{
				presets:['es2015', 'react']
			}
		}]
	},
	mode: 'production'
}