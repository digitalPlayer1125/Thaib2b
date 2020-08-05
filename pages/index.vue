<template>
    <div class="d-flex flex-column">
        <Slider />
        <Packages />
        <Discover />
        <Itenaries :posts=posts />
        <Banner />
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const posts = await $content('articles', params.slug)
            .only(['title', 'image', 'slug', 'tags', 'intro'])
            .sortBy('createdAt', 'desc')
            .fetch()
        return {
            posts
        }
    },
    data() {
        return {
            posts: []
        }
    },
    head () {
        return {
            title: 'ThaiB2B - Your Travel Partner'
        }
    }
}
</script>