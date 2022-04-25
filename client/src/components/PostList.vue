<template>
    <div class="mt-6">
                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div class="flex items-center justify-between">
                            <span class="font-light text-gray-600">{{post.date}}</span>
                            <a href="#" class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                        </div>
                        <div class="mt-2 text-left">
                            <a href="#" class="text-2xl font-bold text-gray-700 hover:underline">
                                {{post.title}}
                            </a>
                        <p class="mt-2 text-gray-600">
                            {{post.description}}
                        </p>
                        </div>
                        <div class="flex items-center justify-between mt-4">
                            <a href="#" class="text-blue-500 hover:underline">Read more</a>
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