
let DB;
if (process.env.PRODUCCION === 'produc') {
    DB = process.env.DB;
} else {
    DB = 'mongodb://localhost:27017/ovents'
}

var config = {
    DB: DB,
    SECRET_TOKEN: 'miclavedetokeans19970418'
}

module.exports = config;