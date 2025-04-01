/*
 * @author: phil.li
 */
import poetryOrm from '../config/orm'
import { DataTypes } from 'sequelize'

const Poetry = poetryOrm.define(
	'Tang300',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		contents: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: 'tang300',
		deletedAt: false,
		updatedAt: false,
		createdAt: false,
	}
);

export default Poetry
