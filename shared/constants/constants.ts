export const

	/**
	 * SYSTEM
	 */
	SYSTEM_STATE_BOOTING = -1,
	SYSTEM_STATE_OK = 0,
	SYSTEM_STATE_WARNING = 1,
	SYSTEM_STATE_ERROR = 2,

	SYSTEM_STATE_CODE_OK = 0,

	SYSTEM_STATE_CODE_LOGIN = 1,
	SYSTEM_STATE_CODE_BAD_BROKER_CONNECTION = 2,
	SYSTEM_STATE_CODE_NO_BROKER_CONNECTION = 3,
	SYSTEM_STATE_CODE_BAD_SERVER_CONNECTION = 4,
	SYSTEM_STATE_CODE_NO_SERVER_CONNECTION = 5,

	/**
	 * General errors
	 */
	G_ERROR_UNKNOWN = 0,
	G_ERROR_EXPIRED = 1,
	G_ERROR_DUPLICATE = 2,
	G_ERROR_USER_NOT_FOUND = 100,

	/**
	 * ORDER
	 */
	ORDER_SIDE_BUY = 0,
	ORDER_SIDE_SELL = 1,
	ORDER_TYPE_NONE = 0,
	ORDER_TYPE_MARKET = 1,
	ORDER_TYPE_LIMIT = 2,
	ORDER_TYPE_STOP = 3,
	ORDER_TYPE_IF_TOUCHED = 4,

	/**
	 * Broker - General
	 */
	BROKER_GENERAL_TYPE_NONE 	= 0,
	BROKER_GENERAL_TYPE_OANDA 	= 1,
	BROKER_GENERAL_TYPE_IB 		= 2,
	BROKER_GENERAL_TYPE_CC 		= 3,


	/**
	 * Broker - TradeJS
	 */
	BROKER_ERROR_UNKNOWN 			= 0,
	BROKER_ERROR_INVALID_ARGUMENT 	= 1,
	BROKER_ERROR_MARKET_CLOSED 		= 2,
	BROKER_ERROR_UNAUTHORIZED   	= 3,
	BROKER_ERROR_DISCONNECT     	= 4,
	BROKER_ERROR_PARSE          	= 5,
	BROKER_ERROR_HEARTBEAT_TIMEOUT	= 6,
	BROKER_ERROR_HTTP           	= 7,
	BROKER_ERROR_NOT_ENOUGH_FUNDS	= 8,
	BROKER_ERROR_TRADE_NOT_FOUND	= 9,


	/**
	 * Broker - OANDA
	 */
	BROKER_OANDA_ERROR_INVALID_ARGUMENT = 1,
	BROKER_OANDA_ERROR_MARKET_CLOSED = 24,
	BROKER_OANDA_ERROR_TRADE_NOT_FOUND = 12,

	/**
	 * Symbol
	 */
	SYMBOL_CAT_TYPE_OTHER = 0,
	SYMBOL_CAT_TYPE_FOREX = 1,
	SYMBOL_CAT_TYPE_INDICE = 2,
	SYMBOL_CAT_TYPE_CRYPTO = 3,
	SYMBOL_CAT_TYPE_RESOURCE = 4,
	SYMBOL_CAT_TYPE_OPTIONS = 5,
	SYMBOL_CAT_TYPE_STOCK = 6,

	/**
	 * Leverage
	 */
	LEVERAGE_TYPE_1 = 1,
	LEVERAGE_TYPE_10 = 10,
	LEVERAGE_TYPE_20 = 20,
	LEVERAGE_TYPE_25 = 25,
	LEVERAGE_TYPE_50 = 50,
	LEVERAGE_TYPE_100 = 100,


	/**
	 * USER
	 */
	USER_FETCH_TYPE_SLIM = 0,
	USER_FETCH_TYPE_FULL = 1,
	USER_FETCH_TYPE_PROFILE_SETTINGS = 2,
	USER_FETCH_TYPE_ACCOUNT_DETAILS = 3,

	/**
	 * CHANNEL
	 */
	CHANNEL_TYPE_MAIN = 0,
	CHANNEL_TYPE_CUSTOM = 1,

	/**
	 * REDIS
	 */
	REDIS_USER_PREFIX = 'user_';
