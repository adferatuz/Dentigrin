const config = {
    PORT : 3000,
    SALT_ROUNDS : 10,
    SECRET_JWT_KEY : 'esta-es-una-frase-asombrosamente-secreta-$asdas54asfd#%',
    CORS_OPTIONS :{
        origin : 'http://localhost:5173/',
        methods : ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders : ['Content-Type', 'Authorization'],
        credentials : true
    }
};

module.exports = config;