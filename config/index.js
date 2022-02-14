const config = {
    numberPhone: process.env.NUMBERPHONE || '951860328',
    smsEndpoint: process.env.SMSENDPOINT || 'https://ws.intico.com.pe:8181',
    assistance: process.env.ASSISTANCE || 'https://ittalentapiprd.azurewebsites.net'
}

module.exports = {
    config
}