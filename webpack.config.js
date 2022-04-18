module.exports = {
    context: path.join(__dirname + "/src"), 
    entry: `./index.js`,

    //複数ページをそれぞれバンドリングする場合
    // entry: {
    //     main: "./index.js",
    //     sub1: "./sub1.js",
    //     sub2: "./sub2.js",
    // },
    // output: {
    //     path: path.join(__dirname, "dist"),
    //     filename: "[name].bundle.js"
    // }


    //複数ページをまとめてバンドリングする場合
    // entry: [ "./index.js", "./sub1.js", "./sub2.js" ],
    //
    // output: {
    //     path: `${__dirname}/dist`,
    //     filename: "bundle.js"
    // }


    output: {
        //  出力ファイルのディレクト名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        // 出力ディレクト内のこの設定場所に書き出される。
        filename: "./assets/js/main.js",
        clean: {
            clean: true,
            keep: /index.html/, // index.html をキープ（削除しない）
        },
    },
    //ソースマップを出力する
    devtool: "hidden-source-map",
    //webpackコマンドをオプションなしで実行してもdevelopmentモードになる
    mode: "development",

    watch: true,  //watch オプションを有効にする・・・リビルド

    watchOptions: {
        ignored: /node_modules/ //watch を外すディレクトリやファイルを指定.複数指定したいときは配列[]使用
    },

    optimization: {
        minimize: false,//圧縮しない（指定しないと有効になっている）
    },
}
