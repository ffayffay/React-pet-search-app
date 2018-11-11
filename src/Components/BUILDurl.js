function buildUrl(urlOptions) {
	const baseUrl = "http://api.petfinder.com/";
	const key = "key=30813f445b233300ac28d89179cd71c7";
	const args = formatArgs(urlOptions.args);
	const method = urlOptions.method

	function formatArgs(args) {
		if (!args) {
			return ''
		} else {
			return Object.keys(args).map(key => `${key}=${args[key]}`).join('&')
		}
	}

	return encodeURI(`${baseUrl}${method}?format=json&${key}&${args}`)
}

export default buildUrl


//url options is an object literal with 2 properties *method and args*
