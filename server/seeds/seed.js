const db = require('../config/connection');
const { User, Post} = require ('../models');
const userSeeds = require ('./userSeeds.json');

db.once('open', async () => {
    try {
        console.log("delete")
        await Post.deleteMany({});
        await User.deleteMany({});
        
        console.log("create")
        await User.create(userSeeds);

        for (let i = 0; i < thoughtSeeds.length; i++) {
            const user = await  User.findOneAndUpdate(
                {username: postAuthor },
                {$addToSet: { posts: _id,}}
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('All done');
    process.exit (0);
});