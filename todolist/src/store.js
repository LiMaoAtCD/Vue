const kAppStoreKey = "Limao"
export default {
	fetch: function() {
		return JSON.parse(window.localStorage.getItem(kAppStoreKey) || '[]')
	},
	save: function(items) {
		window.localStorage.setItem(kAppStoreKey, JSON.stringify(items))
	}
}