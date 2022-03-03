const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(
    'postgres://nsdrwadkqccjin:6524344a3d4bb0c89a9c94ca5a9fa98efa5d9f49d30b80f18c509196a462fec2@ec2-3-227-195-74.compute-1.amazonaws.com:5432/d9robedu2kq16n',
    {dialect:"postgres",
dialectOptions: {
    ssl: {
        require:true,
        rejectUnauthorized:false
    }
}}

)
module.exports = sequelize