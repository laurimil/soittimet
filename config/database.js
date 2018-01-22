if(process.env.NODE_ENV === 'production'){
    module.exports = {MONGODB_URI: 'mongodb://soittimet:mlab68742MSC@ds251827.mlab.com:51827/heroku_qr549gx5'}
} else {
    module.exports = {MONGODB_URI:'mongodb://soittimet:soittimet@ds141796.mlab.com:41796/soitin}
}