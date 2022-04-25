<template>
 <div class="overflow-x-hidden bg-gray-100">
    <nav class="px-6 py-4 bg-white shadow">
        <div class="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
            <div class="flex items-center justify-between">
                <div>
                    <router-link to="/" class="text-xl font-bold text-gray-800 md:text-2xl">My Blog</router-link> 
                </div>
                <div>
                    <button type="button" class="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex-col hidden md:flex md:flex-row md:-mx-4">
               <router-link to="/" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Home</router-link> 
                <a href="#" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Blog</a>
                <router-link to="/about" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">About us</router-link> 
            </div>
        </div>
    </nav>
     <div class="px-6 py-8">
        <div class="container flex justify-between mx-auto">
            <div class="w-full lg:w-8/12">
                <div class="flex items-center justify-between">
                    <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
                </div>
                <post-list :post="post" v-for="post in posts" :key="post._id"></post-list>
            </div>
        </div>
     </div>
    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    PostList
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
