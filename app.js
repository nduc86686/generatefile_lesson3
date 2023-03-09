const fs = require('fs');
const path = require('path');

const featureName = process.argv[2];

// Tạo thư mục feature
const featurePath = path.join(__dirname, featureName);
if (!fs.existsSync(featurePath)) {
    fs.mkdirSync(featurePath);
}

// Tạo thư mục controllers nếu chưa có
const controllersPath = path.join(featurePath, 'controllers');
if (!fs.existsSync(controllersPath)) {
    fs.mkdirSync(controllersPath);
}

// Tạo thư mục models nếu chưa có
const modelsPath = path.join(featurePath, 'models');
if (!fs.existsSync(modelsPath)) {
    fs.mkdirSync(modelsPath);
}

// Tạo thư mục views nếu chưa có
const viewsPath = path.join(featurePath, 'views');
if (!fs.existsSync(viewsPath)) {
    fs.mkdirSync(viewsPath);
}

// Tạo file model
const modelContent = `class ${featureName} {
constructor(id, name, createdAt, updatedAt) {
this.id = id;
this.name = name;
this.createdAt = createdAt;
this.updatedAt = updatedAt;
}
}

module.exports = ${featureName};`;

const modelFilePath = path.join(featurePath, 'models',`${featureName}.js`);
fs.writeFileSync(modelFilePath, modelContent);

// Tạo file controller
const controllerContent = `const ${featureName} = require('../models/${featureName}');

class ${featureName}Controller {
create(req, res) {
// TODO: Implement create function
}

update(req, res) {
// TODO: Implement update function
}

list(req, res) {
// TODO: Implement list function
}

delete(req, res) {
// TODO: Implement delete function
}

show(req, res) {
// TODO: Implement show function
}
}

module.exports = ${featureName}Controller;`;

const controllerFilePath = path.join(featurePath, 'controllers', `${featureName}Controller.js`);
fs.writeFileSync(controllerFilePath, controllerContent);

// Tạo file view list.html
const listViewContent = '<!-- TODO: Implement list view -->';

const listViewFilePath = path.join(featurePath, 'views', 'list.html');
fs.writeFileSync(listViewFilePath, listViewContent);

// Tạo file view detail.html
const detailViewContent = '<!-- TODO: Implement detail view -->';

const detailViewFilePath = path.join(featurePath, 'views', 'detail.html');
fs.writeFileSync(detailViewFilePath, detailViewContent);

console.log('create file successfully');