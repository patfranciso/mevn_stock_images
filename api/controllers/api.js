module.exports = class API {
  // fetch all posts
  static async fetchAllPost(req, res) {
    res.send('Hello from API');
  }

  // fetch post by id
  static async fetchPostById(req, res) {
    res.send('Fetch Post by ID');
  }
  // create a post
  static async createPost(req, res) {
    res.send('Create Post');
  }
  // update a post
  static async updatePost(req, res) {
    res.send('Update Post');
  }
  // delete a post
  static async deletePost(req, res) {
    res.send('Delete Post');
  };
}