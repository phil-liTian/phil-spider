/*
 * @author: phil.li
 */
import universityOrm from '../config/orm';
import { DataTypes } from 'sequelize'

const University = universityOrm.define(
	'university',
	{
		code: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		schoolname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		province: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		department: {
			type: DataTypes.STRING,
		},
		level: {
			type: DataTypes.STRING,
		},
		type: {
			type: DataTypes.STRING,
		},
		link: {
			type: DataTypes.STRING,
		},
	},
	{
		tableName: 'university',
		deletedAt: false,
		updatedAt: false,
		createdAt: false,
	}
);

export default University;

