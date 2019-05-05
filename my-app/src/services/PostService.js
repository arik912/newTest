export default class PostService {
    constructor(api){
        this.api = api;
    }
    async getAllPosts(url){
        const Posts = await this.api.get(`${url}posts/`)
        return Posts
    }
    async getCurrentPost(url,id){
        const CurrentPost = await this.api.get(`${url}posts/${id}`)
        return CurrentPost
    }
    getCommentsForCurrentPost(url,id){
        let newUrl = `${url}comments?postId=${id}`;
        return this.api.get(newUrl).then(data=>data)
    }
}