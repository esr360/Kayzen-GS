import path from 'path';

export default function() {
    return {
        entry: { 
            'kayzen-gs': './src/js/index.js' 
        },

        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: '[name].js',
            publicPath: '/',
            libraryTarget: 'commonjs2'
        },

        externals: {
            'react': 'react',
            'react-dom': 'react-dom'
        },

        module: {
            loaders: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            }]
        },

        stats: { colors: true },

        devtool: false
    }
};