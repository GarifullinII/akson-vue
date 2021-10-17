<template>
  <div class='app'>

    <h2>
      Page with posts
    </h2>

    <div class='app__btns'>
      <it-button
          @click='showDialog'
          style='margin: 15px 0'
      >
        Create post
      </it-button>

      <it-select
          v-model='selectedSort'
          :options='sortOptions'
      />
    </div>

    <it-dialog
      v-model:show='dialogVisible'
    >
    <post-form
      @create='createPost'
    />
    </it-dialog>

    <post-list
      :posts='sortedPosts'
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
import ItSelect from "./components/UI/ItSelect";
export default {
	components: {
    ItSelect,
		PostForm, PostList,
ItButton
	},
	data() {
		return {
			posts: [],
			dialogVisible: false,
			isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'by name' },
        {value: 'body', name: 'by description' },
      ]
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
	},
  computed: {
	  sortedPosts() {
	    return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    }
  },
  watch: {},
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

.app__btns {
  margin: 15px;
  display: flex;
  justify-content: space-between;
}
</style>