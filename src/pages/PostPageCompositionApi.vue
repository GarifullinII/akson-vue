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
      />
    </it-dialog>
    <post-list
        :posts='sortedAndSearchedPosts'
        v-if='!isPostsLoading'
    />
    <div v-else>
      loading in progress...
    </div>
  </div>
</template>

<script>
import PostForm from '../../src/components/PostForm';
import PostList from '../../src/components/PostList.vue';
import ItButton from '../../src/components/UI/ItButton.vue';
import axios from 'axios';
import ItSelect from '../../src/components/UI/ItSelect';
import ItInput from '../../src/components/UI/ItInput';
import {ref} from 'vue';
import {usePosts} from '../hooks/usePosts';
import useSortedPosts from '../hooks/useSortedPosts';
import useSortedAndSearchedPosts from '../hooks/useSortedAndSearchedPosts';

export default {
  components: {
    ItInput,
    ItSelect,
    PostForm, PostList,
    ItButton
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'by name' },
        {value: 'body', name: 'by description' },
      ]
    }
  },
  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
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