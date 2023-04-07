const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WibuGym API',
            version: '1.0.0',
            description: 'API documentation for WibuGym',
        },
    },
    apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
// http: //localhost:3002/api-docs/#/ copy paste this url to your website and use api