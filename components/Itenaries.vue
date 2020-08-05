<template>
    <div class="bg-light d-flex flex-column">
        <div class="container-fluid">
            <div class="pt-5 container">
                <div class="row text-center">
                    <div class="col-12 d-flex flex-column align-items-center">
                        <h3 style="font-family: Satisfy, cursive; color: #3fd0d4; font-size: 33px;">
                            Plan The
                        </h3>
                        <h1 style="font-family: Satisfy, cursive; font-weight: 800; font-size: 50px;">
                            Perfect Holiday
                        </h1>
                        <h5 class="my-4" style="font-family: Poppins; line-height: 1.7; max-width: 900px;">
                            Bored of staying at home? Can’t wait to travel? Then hurry up and book your travel package with us now at discounted price.
                            We are now ready to make you travel again!! Check out our below customisable itineraries.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light container pb-5">
            <div class="row">
                <nuxt-link :to='"/tour-item/" + ins.slug' v-for='(ins, index) in posts' :key='index' class="text-dark col-sm-6 col-md-4 p-3">
                    <div class="shadow rounded-lg h-100 w-100 d-flex flex-column">
                        <div 
                            style="min-height: 200px; background-size: cover; background-position: center center;"
                            :style="{backgroundImage: `url('${ins.image}')`}"
                            class="rounded-top"
                        />
                        <h3 style="font-family: Satisfy; font-size: 33px;" class="pt-3 px-4">
                            {{ins.title}}
                        </h3>
                        <p style="font-family: Poppins; font-size: 18px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;" class="pt-1 px-4">
                            {{ins.intro}}
                        </p>
                        <p style="font-family: Poppins; font-size: 18px;" class="pt-1 px-4 font-weight-bold">
                            Read More
                        </p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            required: true
        }
    }
}
</script>