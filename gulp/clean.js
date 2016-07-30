const del = require('del');
var config = require('./config');

function clean() {
    return del([
        config.distFolder + '/index.html',
        config.distFolder + '/assets/**/*.*'
    ]).then(paths => {
    	console.log('Deleted files and folders:\n', paths.join('\n'));
    });
}

module.exports = clean;
