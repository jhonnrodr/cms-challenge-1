<template>
<layout-blog>
     <div class="mt-6">
    <div class="max-w-4xl px-10 py-6 mx-auto bg-white">
        <div class="flex items-center justify-between">
            <span class="font-light text-gray-600">{{post.date | formatDate}}</span>
        </div>
        <div class="mt-2 text-left">
            <a href="#" class="text-2xl font-bold text-gray-700 hover:underline">
                {{post.title}}
            </a>
        <p class="mt-2 text-gray-600">
            {{post.description}}
        </p>
        </div>
    </div>
    </div>
</layout-blog>
</template>
<script>
import axios from 'axios'
import LayoutBlog from '../shared/LayoutBlog.vue'
export default {
    name: 'PostView',
    components: {
        LayoutBlog
    },
    created() {
        this.getPost()
    },
    data() {
        return {
            post: {}
        }
    },
    methods: {
        getPost() {
            axios.get('/api/posts/' + this.$route.params.id)
                .then(response => {
                    this.post = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>