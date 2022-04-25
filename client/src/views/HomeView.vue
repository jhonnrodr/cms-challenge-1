<template>
<layout-blog>
    <div class="w-full">
        <div class="">
            <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
        </div>
        <post-list :post="post" v-for="post in posts" :key="post._id"></post-list>
    </div>
</layout-blog>
</template>

<script>
import PostList from '../components/PostList.vue'
import axios from 'axios'
import LayoutBlog from '../shared/LayoutBlog.vue'
export default {
  name: 'HomeView',
  components: {
    PostList,
    LayoutBlog
  },
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        this.getPosts()
    },
    methods: {
        getPosts() {
            axios.get('/api/posts')
                .then(response => {
                    this.posts = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
