import axios from 'axios';
import * as url from '../constants/apiurl/url';
export default function Api(endpoint , method ,body){
    return axios({
        method : method,
        url : `${url.url}/${endpoint}`,
        data : body
    }).catch(err => console.log(err))
}