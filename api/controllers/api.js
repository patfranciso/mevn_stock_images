const Post = require('../models/posts');


module.exports = class API {
  // fetch all posts
  static async fetchAllPost(req, res) {
    try{
			const posts = await Post.find();
			res.status(200).json(posts);
		}catch(err){
			res.status(404).json({message: err.message});
		}
  }

  // fetch post by id
  static async fetchPostById(req, res) {
    const id = req.params.id;
    try{
      const post = await Post.findById(id);
      res.status(200).json(post);
    }catch(err){
      res.status(404).json({message: err.message})
    }
  }
  // create a post
  static async createPost(req, res) {
    const post = req.body;
		const imageName = req.file.filename;
		post.image = imageName;
		try{
			await Post.create(post);
			res.status(201).json({message: 'Post created successfully'});
		}catch(err){
			res.status(400).json({message: err.message});
    }
  }
  // update a post
  static async updatePost(req, res) {
    res.send('Update Post');
  }
  // delete a post
  static async deletePost(req, res) {
    const id = req.params.id;
		try{
			const result = await Post.findByIdAndDelete(id);
			if(result.image != ''){
				try{
					fs.unlinkSync('./uploads'+result.image);
				}catch(err){
					console.log(err);
				}
			}
			res.status(200).json({message: 'Post deleted successfully!'})
		}catch(err){
			res.status(404).json({message: err.message});
		}
  };
}