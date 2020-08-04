<template>
    <nuxt-content :document=article />
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch()
        const [prev, next] = await $content('articles')
        .only(['title', 'slug', 'image1'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()
        return {
            article,
            prev,
            next
        }
    },
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
        }
    },
    // head () {
    //     return {
    //         title: this.article.title,
    //         meta: [
    //             { hid: 'description', property: 'description', name: 'description', content: this.article.intro },
    //             { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'https://Thaib2b.vercel.app/blogs/' + this.article.slug },
    //             { hid: 'og:title', property: 'og:title', name: 'og:title', content: this.article.title },
    //             { hid: 'og:description', property: 'og:description', name: 'og:description', content: this.article.intro },
    //             { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'https://Thaib2b.vercel.app' + this.article.image1 },
    //             { hid: 'twitter:title', property: 'twitter:title', name: 'twitter:title', content: this.article.title },
    //             { hid: 'twitter:description', property: 'twitter:description', name: 'twitter:description', content: this.article.intro },
    //             { hid: 'twitter:image', property: 'twitter:image', name: 'twitter:image', content: 'https://Thaib2b.vercel.app' + this.article.image1 }
    //         ]
    //     }
    // }
}
</script>

<style>

</style>