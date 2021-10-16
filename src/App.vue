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
		v-if='!isPostsLoading'
	/>
	<div v-else>
		loading in progress...
	</div>
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
			posts: [],
			dialogVisible: false,
			isPostsLoading: false
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
		async fetchPosts() {
			try {
				this.isPostsLoading = true;
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
					this.posts = response.data;
			} catch(error) {
				alert('Error, try again later')
			} finally {
				this.isPostsLoading = false;
			}
		}
	},
	mounted() {
		this.fetchPosts();
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