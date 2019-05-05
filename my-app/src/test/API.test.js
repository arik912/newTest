import RestAPI from '../services/RestAPI';
import PostService from '../services/PostService';
import postList from './postList'


describe('test rest api', () => {
    test('Get Method', async () => {
        global.jestFetchMock.mockResponseOnce(
            JSON.stringify(postList)
        );
        const api = new RestAPI(global.jestFetchMock)
        const res = await new PostService(api).getAllPosts('http://www.mocky.io/v2/5cce8cb8300000ce1652c349')
        expect(res).toEqual(postList);
    });
   
});
