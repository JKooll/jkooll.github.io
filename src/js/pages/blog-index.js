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
		},
		showFullPost: function(post) {
			let url = 'posts/' + post.path;
			let success = function(response) {
				console.log('post full content is: ');
				console.log(response);
			};
			let fail = function(response) {
				console.log('post get fail.');
				console.log(response);
			};
			this.getResource(url, success, fail);
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

	






