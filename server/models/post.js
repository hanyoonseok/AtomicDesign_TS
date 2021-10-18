module.exports = (sequelize, DataTypes) =>{
    const Post = sequelize.define('Post',{
        content:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        title:{
            type:DataTypes.TEXT,
            allowNull:false,
        }
    },{ 
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci', //mb4도 넣어야 이모티콘도 가능
    });
    Post.associate = (db)=>{
        db.Post.belongsTo(db.User);
    };
    return Post;
}