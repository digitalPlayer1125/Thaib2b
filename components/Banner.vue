<template>
    <div class="container-fluid" style="background: #3fd0d4;">
        <div class="py-4 px-5 container">
            <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                <span style="font-size: 30px; font-family: Satisfy;" class="text-white">
                    Subscribe Now and Quench Your Wanderlust!
                </span>
                <a :href="isMobile ? 'tel:+91-9643800068' : 'mailto:sales@thaib2b.in'">
                    <button class="mt-3 mt-md-0 btn btn-lg btn-light rounded-0" style="font-family: Satisfy; font-size: 30px;">
                        Enquire Now!
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isMobile: true
        }
    },
    mounted(){
        this.isMobile= navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
    }
}
</script>

<style>

</style>