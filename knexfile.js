module.exports = {
    development: {
        client: 'pg',
        connection: {
            host : '127.0.0.1',
            user : 'postgres',
            password : 'root',
            database : 'myapp',
        },
        pool: {
            min: 2,
            max: 10,
        },
    }
}