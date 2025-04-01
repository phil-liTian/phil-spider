/*
 * @author: phil.li
 */

const Sequelize = require('sequelize')
import University from '../../entity/universityOrm'
const Op = Sequelize.Op

const universityQuery = async (req, res) => {
  const pageSize = 10
  const type = req.query.type || ''
  const schoolname = req.query.schoolname || ''
  const province = req.query.province || ''
  let page = req.query.page || 1
 
  let whereInfo: any = {
		type: {
			[Op.like]: `%${type}%`,
		},
		schoolname: {
			[Op.like]: `%${schoolname}%`,
		},
	};

  if (province && province !== 'null' && province !== 'undefined') {
    whereInfo.province = province;
  }

  const result = await University.findAndCountAll({
		order: [['id', 'ASC']], // 按id升序
    where: whereInfo,
		limit: pageSize, // 每页显示10条
    offset: (page - 1) * pageSize,
	});

  const data = {
    result: result.rows,
    pagination: {
      page,
      pageSize,
      total: result.count
    }
  }

  if ( result.rows ) {
    return res.API(data);
  }
}

export default universityQuery
