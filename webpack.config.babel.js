import path from 'path';
import webpack from 'webpack';

export default function(env) {

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

        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                include: /\.min\.js$/,
                minimize: true
            })
        ],

        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'react-router': 'ReactRouter'
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