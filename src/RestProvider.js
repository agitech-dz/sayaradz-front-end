/**
 * This is RestProvider.
 */

import { stringify } from 'query-string';
import {
    GET_LIST,
    GET_ONE,
    CREATE,
    UPDATE,
    UPDATE_MANY,
    DELETE,
    DELETE_MANY,
    GET_MANY,
    GET_MANY_REFERENCE,
} from 'react-admin';

const apiUrl = 'https://53f409a2.ngrok.io/api';



/**
 * Maps react-admin queries to my REST API
 *
 * @param {string} type - Request type, e.g GET_LIST
 * @param {string} resource - Resource name, e.g. "posts"
 * @param {Object} params - Request parameters. Depends on the request type
 * @returns {Promise} the Promise for a data response
 */
export default (type, resource, params) => {
    let url = '';
    const options = {
        headers : new Headers({
            accept: 'application/json',
            'Content-Type':  'application/json',
            authorization: 'Token '+localStorage.getItem('token'),
        }),
    };
    console.log(params.filter.Search);
    switch (type) {
        case GET_LIST: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                sort: JSON.stringify([field, order]),
                page: page,
                page_size: perPage,
                search: JSON.stringify(params.filter.Search),
            };
            url = `${apiUrl}/${resource}?${stringify(query)}`;
            console.log(url);
            break;
        }
        case GET_ONE:
            url = `${apiUrl}/${resource}/${params.id}`;
            break;
        case CREATE:
            url = `${apiUrl}/${resource}/`;
            options.method = 'POST';
            console.log(JSON.stringify(params.data));
            options.body = JSON.stringify(params.data);
            break;
        case UPDATE:
            url = `${apiUrl}/${resource}/${params.id}/`;
            options.method = 'PUT';
            options.body = JSON.stringify(params.data);
            break;
        case UPDATE_MANY: {
            const query = {
                filter: JSON.stringify({ id: params.ids }),
            };
            url = `${apiUrl}/${resource}?${stringify(query)}`;
            options.method = 'PATCH';
            options.body = JSON.stringify(params.data);
            break;
        }
        case DELETE:
            url = `${apiUrl}/${resource}/${params.id}/`;
            options.method = 'DELETE';
            break;
        case DELETE_MANY: {
            const query = {
                filter: JSON.stringify({ id: params.ids }),
            };
            url = `${apiUrl}/${resource}?${stringify(query)}/`;
            options.method = 'DELETE';
            break;
        }
        case GET_MANY: {
            const query = {
                filter: JSON.stringify({ id: params.ids }),
            };
            url = `${apiUrl}/${resource}?${stringify(query)}`;
            break;
        }
        case GET_MANY_REFERENCE: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([
                    (page - 1) * perPage,
                    page * perPage - 1,
                ]),
                filter: JSON.stringify({
                    ...params.filter,
                    [params.target]: params.id,
                }),
            };
            url = `${apiUrl}/${resource}?${stringify(query)}`;
            break;
        }
        default:
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }

    return fetch(url, options)
        .then(res => res.json())
        .then(json => {
            switch (type) {
                case GET_LIST:
                case GET_MANY_REFERENCE:
                    return {
                        data: json.results,
                        total: parseInt(json.count),
                    };
                case CREATE:
                    return { data: { ...json, id: json.id } };
                default:
                    return { data: json };
            }
        });
};
