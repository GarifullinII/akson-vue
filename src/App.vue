<template>
<div class='app'>
	<h2>
		Page with posts
	</h2>

	<it-button
		@click='showDialog'
		style='margin: 15px 0'
	>
		Create post
	</it-button>

	<it-dialog
		v-model:show='dialogVisible'
	>

	<post-form
		@create='createPost'
	/>
	</it-dialog>

	<post-list 
		:posts='posts'
		@remove='removePost'
	/>
</div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import ItButton from './components/UI/ItButton.vue';
import axios from 'axios';
export default {
	components: {
		PostForm, PostList,
ItButton
	},
	data() {
		return {
			posts: [
				{id: 1, title: 'HTML', body: 'Description HTML'},
				{id: 2, title: 'CSS', body: 'Description CSS'},
				{id: 3, title: 'JS', body: 'Description JS'}
			],
			dialogVisible: false,
		}
	},
	methods: {
		createPost(post) {
			this.posts.push(post);
			this.dialogVisible = false;
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		showDialog() {
			this.dialogVisible = true;
		},
		async fetchUsers() {
			try {
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
				console.log(response);
			} catch(error) {
				alert('Error, try again later')
			}
		}
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.app {
	padding: 20px;
}
</style>