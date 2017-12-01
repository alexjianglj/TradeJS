import {cacheController} from '../controllers/cache.controller'
import { app } from '../app';

module.exports = (socket) => {

	socket.on('read', async (params, cb: Function) => {
		try {
			cb(null, await cacheController.find(params));
		} catch (error) {
			console.error(error);
			cb(error);
		}
	});

	socket.on('symbol:list', async (params, cb: Function) => {
		try {
			cb(null, app.broker.symbols);
		} catch (error) {
			console.error(error);
			cb(error);
		}
	});
};