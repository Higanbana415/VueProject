const path = require("path");
module.exports = {
    devServer: {
        proxy: {
            "/proxy": {
                target: "https://jrwx.trc.com",
                changeOrigin: true
            },
            "/home": {
                target: "https://api.juooo.com",
                changeOrigin: true
            },
            "/gateway": {
                target: "https://m.maizuo.com",
                changeOrigin: true 
            },
            "/ajax": {
                target: "http://i.waimai.meituan.com",
                changeOrigin: true 
            }
        },    
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "./src"),
                "api": path.join(__dirname, "./src/api"),
                "components": path.join(__dirname, "./src/components"),
                "views": path.join(__dirname, "./src/views"),
                "common": path.join(__dirname, "./src/common"),
                "utils": path.join(__dirname, "./src/utils"),
                "router": path.join(__dirname, "./src/router"),
                "store": path.join(__dirname, "./src/store"),
                "lib": path.join(__dirname, "./src/lib"),
            }
        }
    }
}