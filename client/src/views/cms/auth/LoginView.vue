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
                <router-link to="/login" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Login</router-link> 
                <router-link to="/register" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Register</router-link> 
            </div>
        </div>
    </nav>
     <div class="px-6 py-8">
        <div class="container  mx-auto">
        </div>
     </div>
    </div>
</template>
<script>
export default {
    name: 'LoginView',
}
</script>