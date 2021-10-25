import axios from 'axios';
import * as Config from '../constans/config';

 function CallApi(enpoint, method, body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${enpoint}`,
        data: body,
    }).catch(err => {
        console.log(err);
    } )
};
export default CallApi;