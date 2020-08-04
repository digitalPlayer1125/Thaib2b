<template>
    <div class="d-flex flex-column">
        <div class="bg-light container-fluid">
            <div class="pt-5 container">
                <div class="row text-center">
                    <div class="col-12">
                        <h3 style="font-family: Satisfy, cursive; color: #3fd0d4; font-size: 33px;">
                            Plan The
                        </h3>
                        <h1 style="font-family: Satisfy, cursive; font-weight: 800; font-size: 50px;">
                            Perfect Holiday
                        </h1>
                        <h5 class="my-4" style="font-family: Poppins; line-height: 1.7;">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
                            Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light container-fluid pb-5">
            <div class="row">
                <div v-for='(ins, index) in slides' :key='index' class="col-sm-6 col-lg-3 p-3">
                    <div class="rounded-lg shadow w-100 d-flex flex-column">
                        <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-1.jpg" class="w-100 rounded-top" />
                        <h3 style="font-family: Satisfy; font-size: 33px;" class="pt-3 px-4">
                            Rome
                        </h3>
                        <p style="font-family: Poppins; font-size: 18px;" class="pt-1 px-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                        <p style="font-family: Poppins; font-size: 18px;" class="pt-1 px-4 font-weight-bold">
                            $5000
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        slides: [
            'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-1.jpg',
            'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-1.jpg',
            'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-1.jpg',
            'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-1.jpg'
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style>

</style>