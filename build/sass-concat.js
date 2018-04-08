const concat = require('concat');
const fs = require('fs');

const files = [
    // vendor
    './node_modules/Sass-Boost/dist/_sass-boost.scss',
    // utilities
    './src/scss/lib/utilities/_breakpoint.scss',
    './src/scss/lib/utilities/_config.scss',
    './src/scss/lib/utilities/_fraction.scss',
    './src/scss/lib/utilities/_kayzenGS.scss',
    './src/scss/lib/utilities/_option.scss',
    './src/scss/lib/utilities/_setting.scss',
    // config
    './src/scss/_config.scss',
    // tools
    './src/scss/lib/tools/_adaptive-columns.scss',
    './src/scss/lib/tools/_gutter.scss',
    './src/scss/lib/tools/_pull.scss',
    './src/scss/lib/tools/_push.scss',
    './src/scss/lib/tools/_reverse-order.scss',
    './src/scss/lib/tools/_stack-columns.scss',
    // column types
    './src/scss/lib/column-types/block-columns/_generate-cols.scss',
    './src/scss/lib/column-types/default-columns/_calculate-width.scss',
    './src/scss/lib/column-types/default-columns/_generate-cols.scss',
    './src/scss/lib/column-types/flow-columns/_calculate-width.scss',
    './src/scss/lib/column-types/flow-columns/_generate-cols.scss',
    './src/scss/lib/column-types/magic-columns/_calculate-width.scss',
    './src/scss/lib/column-types/magic-columns/_core.scss',
    './src/scss/lib/column-types/magic-columns/_generate-cols.scss',
    './src/scss/lib/column-types/no-gutter-columns/_calculate-width.scss',
    './src/scss/lib/column-types/no-gutter-columns/_generate-cols.scss',
    // core
    './src/scss/core/column/_core.scss',
    './src/scss/core/row/_core.scss',
    './src/scss/core/_core.scss',
    // semantic grid system
    './src/scss/lib/semantic-gs/_columns.scss',
    './src/scss/lib/semantic-gs/_row.scss'
]

concat(files).then(result => {
    fs.writeFile('./dist/_kayzen-gs.scss', result, error => {
        if (error) return console.log(error);
    });
});

concat(['./src/scss/include-kayzen-gs.scss']).then(result => {
    fs.writeFile('./dist/_include-kayzen-gs.scss', result, error => {
        if (error) return console.log(error);
    });
});