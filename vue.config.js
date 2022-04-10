module.exports = {
    configureWebpack: {
        devtool: '#eval-source-map',
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'utils': '@/utils',
                'views': '@/views',
                'store': '@/store'
            }
        }
    },
    publicPath: '/'
}