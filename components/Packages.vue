<template>
    <div class="container-fluid">
        <div class="py-5 container">
            <div class="row text-center">
                <div class="col-12">
                    <h3 style="font-family: Satisfy, cursive; color: #3fd0d4; font-size: 33px;">
                        Choose your
                    </h3>
                    <h1 class="py-3" style="font-family: Satisfy, cursive; font-weight: 800; font-size: 50px;">
                        Perfect Holiday
                    </h1>
                </div>
                <div :key="item" v-for="item in holiday" class="col-sm-6 col-md-4 col-lg-3 p-2">
                    <div class="w-100 h-100" :style="{backgroundImage: `url(${item})`}" style="min-height: 200px; background-size: cover;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            holiday: []
        }
    },
    mounted(){
        setTimeout(()=>{
            this.holiday= [
                '/browseCover.jpg',
                '/cameraCover.jpg',
                '/destinationsCover.jpg',
                '/destinationSpot.jpg',
                '/globalCover.jpg',
                '/transportCover.jpg',
                '/timeCover.jpg',
                '/travelCover.jpg'
            ];
        }, 500);
    }
}
</script>