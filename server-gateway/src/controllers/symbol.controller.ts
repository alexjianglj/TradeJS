import * as request from 'request-promise';

const config = require('../../../tradejs.config');

export const symbolController = {

	getAll(reqUser): Promise<any> {
		return request({
            uri: config.server.cache.apiUrl + '/symbols',
            headers: {_id: reqUser.id}
        })
	}
};