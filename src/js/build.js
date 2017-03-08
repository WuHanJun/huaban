/**
 * Created by lenovo on 2017/3/8.
 */
({
    baseUrl:'.', //js下目录 ，这个和manj.js中设置的基准路径不用一样，但是写成一样好。
    paths: {
        'jquery': 'lib/jquery', /*不能以.js后缀结尾*/
        'goTop': 'com/goTop',
        'model': 'com/model',
        'navFix': 'com/navFix'
    },
    name: 'main',
    out: '../../dist/js/index.merge.min.js'
})