const path=require('path');
module.exports={
    devServer: {
        proxy:{
            '/':{
                target:'http://localhost:3000',
                "secure":false
            }
        }
    }
};