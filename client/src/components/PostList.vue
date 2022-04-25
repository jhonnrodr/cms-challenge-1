<template>
    <div class="mt-6">
    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
        <div class="flex items-center justify-between">
            <span class="font-light text-gray-600">{{post.date | formatDate}}</span>
        </div>
        <div class="mt-2 text-left">
            <router-link :to="{name: 'post', params: {id: post._id}}" class="text-2xl font-bold text-gray-700 hover:underline">
                {{post.title}}
            </router-link>
        <p class="mt-2 text-gray-600">
            {{post.description}}
        </p>
        </div>
        <div class="flex items-center justify-between mt-4">
            <router-link :to="{name: 'post', params: {id: post._id}}" class="text-blue-500 hover:underline">Read more</router-link>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'PostList',
    props: ['post'],
    components: {
    }
}
</script>