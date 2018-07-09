if(process.env.NODE_ENV === 'development') {
	module.exports = require('./webpack.development.config.js');
}
if(process.env.NODE_ENV === 'production') {
	module.exports = require('./webpack.production.config.js');
}