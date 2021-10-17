<template>
  <div>
    <h2>
      Page with posts
    </h2>
    <it-input
        v-model='searchQuery'
        placeholder='Search...'
    />
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
        :posts='sortedAndSearchedPosts'
        @remove='removePost'
        v-if='!isPostsLoading'
    />
    <div v-else>
      loading in progress...
    </div>
    <div v-intersection='loadMorePosts' class='observer'>

    </div>
    <!--    <div class="page__wrapper">-->
    <!--      <div-->
    <!--          v-for='pageNumber in totalPages'-->
    <!--          :key='pageNumber'-->
    <!--          class='page'-->
    <!--          :class='{-->
    <!--            "current-page": page === pageNumber-->
    <!--          }'-->
    <!--          @click='changePage(pageNumber)'-->
    <!--      >-->
    <!--        {{ pageNumber }}-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import PostForm from '../../src/components/PostForm';
import PostList from '../../src/components/PostList.vue';
import ItButton from '../../src/components/UI/ItButton.vue';
import axios from 'axios';
import ItSelect from "../../src/components/UI/ItSelect";
import ItInput from "../../src/components/UI/ItInput";
export default {
  components: {
    ItInput,
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
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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
    // changePage(pageNumber) {
    //   this.page = pageNumber
    //   this.fetchPosts()
    // },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch(error) {
        alert('Error, try again later')
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];
      } catch(error) {
        alert('Error, try again later')
      }
    }
  },
  mounted() {
    this.fetchPosts();
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // const callback = (entries, observer) => {
    //   if(entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts()
    //   }
    // }
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {},
}
</script>

<style>
.app__btns {
  margin: 15px;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: green;
}
</style>