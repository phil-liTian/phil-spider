const Sequelize = require('sequelize')

const sequelize = new Sequelize('spider-api', 'root', 'lt961123', {
	host: process.env.host,
	dialect: 'mysql',
	timezone: '+08:00'
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
})

export default sequelize

