import axios from 'axios';
const url = "http://localhost:5000/api/post";

export default class API{
  // get all posts
  static async getAllPosts(){
    const res = await axios.get(url);
    return res.data;
  }

  // get a post by id
	static async getPostById(id){
		const res = await axios.get(`${url}/${id}`);
		return res.data;
	}
	// insert post into database
	static async addPost(){
		const res = await axios.post(url, post);
		return res.data;
	}
	// update post in database
	static async updatePost(id){
		const res = await axios.patch(`${url}/${id}`, post);
		return res.data;
	}
	// delete post in database
	static async deletePost(id){
		const res = await axios.delete(`${url}/${id}`);
		return res.data;
	}
}