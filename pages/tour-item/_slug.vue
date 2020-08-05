<template>
    <div class="bg-light container-fluid">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-10">
                    <h1 class="text-warning" style="font-family: Satisfy;">{{article.title}}</h1>
                    <h5 class="py-3" style="white-space: pre-line; color: #3fd0d4; font-family: Poppins; line-height: 30px;">{{article.intro}}</h5>
                    <Banner />
                    <img class="mt-5 w-100 rounded-lg" :src="article.image" />
                    <nuxt-content :document=article />
                    <Banner class="mt-5" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch()
        const [prev, next] = await $content('articles')
        .only(['title', 'slug', 'image'])
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
    head () {
        return {
            title: this.article.title + ' | ThaiB2b - Your Travel Partner',
            meta: [
                { hid: 'description', property: 'description', name: 'description', content: this.article.intro.replace(/(\r\n|\n|\r)/gm, "") },
                { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'https://thaib2b.vercel.app/blogs/' + this.article.slug },
                { hid: 'og:title', property: 'og:title', name: 'og:title', content: this.article.title + ' | ThaiB2b - Your Travel Partner' },
                { hid: 'og:description', property: 'og:description', name: 'og:description', content: this.article.intro.replace(/(\r\n|\n|\r)/gm, "") },
                { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'https://thaib2b.vercel.app' + this.article.image },
                { hid: 'twitter:title', property: 'twitter:title', name: 'twitter:title', content: this.article.title + ' | ThaiB2b - Your Travel Partner' },
                { hid: 'twitter:description', property: 'twitter:description', name: 'twitter:description', content: this.article.intro.replace(/(\r\n|\n|\r)/gm, "") },
                { hid: 'twitter:image', property: 'twitter:image', name: 'twitter:image', content: 'https://thaib2b.vercel.app' + this.article.image }
            ]
        }
    }
}
</script>

<style>
    .text-green{
        color: #3fd0d4;
    }
    .point{
        line-height: 37px;
        font-size: 18px;
        font-family: Poppins;
    }
</style>