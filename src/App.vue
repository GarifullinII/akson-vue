<template>
<div>
	<form>
		<h4>Create post</h4>
		<input class="input" type="text" placeholder="Name">
		<input class="input" type="text" placeholder="Description">
		<button>Add</button>
	</form>
	<div class="post" v-for="post in posts" :key="post.id">
		<div><strong>Name:</strong>{{ post.title }}</div>
		<div><strong>Description:</strong>{{ post.body }}</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [
				{id: 1, title: "HTML", body: "Description HTML"},
				{id: 2, title: "CSS", body: "Description CSS"},
				{id: 3, title: "JS", body: "Description JS"}
			]
		}
	},
	methods: {
		
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.post {
	padding: 15px;
	border: 2px solid teal;
	margin-top: 15px;
}

.input {
	width: 100%;
	border: 1px solid teal;
	padding: 10px 15px;
	margin-top: 15px;
}
</style>