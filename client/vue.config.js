const path=require('path');
module.exports={
    devServer: {
        proxy:{
            '/':{
                target:'52.205.254.29',
                ws: true,
                changeOrigin: true
            }
        }
    }
};
