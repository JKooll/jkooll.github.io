var vm = new Vue({
	el: "#post-list",
	
	data: {
		'posts': ''
	},

	methods: {
		getResource: function(url, success, fail) {
			this.$http.get(url).then(success, fail);
		},
		postUrl: function(index) {
			return "post.html?id=" + index;
		}
	},
	
	mounted: mounted
});

//加载posts.json文件
function mounted() {
	let url = "posts/posts.json";

	let success = function(response) {
		this.$data.posts = response.body;
	};

	let fail = function(response) {
		console.log('fail');
	};

	this.getResource(url, success, fail);
}

//leancloud
var APP_ID = 'uT370dqXQhwykyNce80IX0Je-gzGzoHsz';
var APP_KEY = '70uFUFG9h1W7uqE6S1oHXX9a';

AV.init({
	appId: APP_ID,
	appKey: APP_KEY
});

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
	words: 'Hello World!!!'
}).then(function(object) {
	alert('hahahah');
});

	






