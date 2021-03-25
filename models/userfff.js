// const Sequelize = require('sequelize');
// const sequelize = require('../db/db');

// const user = sequelize.define('userEntity', {
//
// });

// class User {
//     constructor(Sequelize, DataTypes) {
//         this.Sequelize = Sequelize;
//         this.DataTypes = DataTypes;
//     }
//     async createUser(login, password, full_name, email) {
//         try {
//             return await user.create({
//                 login: login,
//                 password: password,
//                 full_name: full_name,
//                 email: email
//             })
//         }
//         catch (e) {
//             console.log(e)
//             return null
//         }
//     }
//     async getUsersById(id) {
//         try {
//             return await user.findAll({where: {id: [id]}})
//         } catch (e) {
//             console.log(e)
//             return null
//         }
//     }
// }

const { Model } = require('sequelize');

const PROTECTED_ATTRIBUTES = ['password'];

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        toJSON() {
            // hide protected fields
            const attributes = { ...this.get() };
            // eslint-disable-next-line no-restricted-syntax
            for (const a of PROTECTED_ATTRIBUTES) {
                delete attributes[a];
            }
            return attributes;
        }
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    User.init({
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: 'Please enter your email address',
            },
            unique: {
                args: true,
                msg: 'Email already exists',
            },
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Please enter a valid email address',
                },
            },
        },
        password: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};




// module.exports = {User};
