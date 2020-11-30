var fs = require('fs');
var path = require('path');

function routes(app) {

    const modelPath = __dirname + '/controllers/';
    const basename = path.basename(modelPath);

    fs.readdirSync(modelPath)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(file => {
            var route = require(path.join(modelPath, file));
            app.use(route.routes(), route.allowedMethods());
        });
}
module.exports = routes;