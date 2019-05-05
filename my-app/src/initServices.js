import PostService from './services/PostService';
import RestAPI from './services/RestAPI';
import fetch from 'cross-fetch';

const API = new RestAPI(fetch);

export const POST_SERVICE = new PostService(API);
export const BASE = 'https://jsonplaceholder.typicode.com/'