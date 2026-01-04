const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("postgresql://postgres:cp6uPJvTeyPf@NX@db.szzdbvmbuvtbhsjfcyzy.supabase.co:5432/postgres", {
    dialect: "postgres",
    logging: false,
    protocol: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

const connectDB = async ()=>{
    try {
        await sequelize.authenticate()
        console.log("Database connected successfully.")
    } catch (error) {
        console.log("Unable to connect the database:", error)
    }

    await sequelize.sync({force: true}).then(()=>{
        console.log("All models were synchronized successfully.")
    })
}
module.exports = {sequelize, connectDB}