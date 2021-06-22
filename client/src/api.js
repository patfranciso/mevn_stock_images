import axios from 'axios';
const url = "http://localhost:5000/api/post";

export default class API{
  // get all posts
  static async getAllPosts(){
    const res = await axios.get(url);
    console.log(res.data)
    return res.data;
  }

  // get a post by id
	static async getPostbyId(){
		const res = await axios.get(`${url}/${id}`);
		return res.data;
	}
	// insert post into database
	static async addPost(){
		const res = await axios.post(url, post);
		return res.data;
	}
	// update post in database
	static async updatePost(){
		const res = await axios.patch(`${url}/${id}`, post);
		return res.data;
	}
	// delete post in database
	static async deletePost(){
		const res = await axios.delete(`${url}/${id}`);
		return res.data;
	}
}