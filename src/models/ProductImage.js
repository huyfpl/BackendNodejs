import { DataTypes } from 'sequelize';
import sequelize from '../config/Sequelize.js';

const ProductImage = sequelize.define('ProductImage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'product_image',
  createdAt: false,
  updatedAt: false,
});


export default ProductImage;
