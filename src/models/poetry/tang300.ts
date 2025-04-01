/*
 * @author: phil.li
 */
const Sequelize = require('sequelize')
import Poetry from "../../entity/poetryOrm"

const poetryQuery = async (req, res) => { 
  const page = req.query.page || 1
  const pageSize = req.query.pageSize || 10;
  const contents = req.query.contents || '';
  let whereInfo = {}
  if ( contents ) {
    whereInfo = {
      contents: {
        [Sequelize.Op.like]: `%${contents}%`,
      }
    }
  }

  const result = await Poetry.findAndCountAll({
		order: [['id', 'ASC']],
		offset: (page - 1) * pageSize,
		limit: pageSize,
		where: whereInfo,
	});

  const data = {
		result: result.rows,
		pagination: {
			page,
      total: result.count,
      pageSize,
		},
	};

  if ( result.rows ) {
    res.API(data);
  }
}

export default poetryQuery





