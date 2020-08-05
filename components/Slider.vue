<template>
  <b-carousel
    :interval="2000"
    controls
    style="text-shadow: 10px 10px 20px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide
      v-for='item in sliderJSON'
      :key='item.heading'
      :caption="item.heading"
      :text="item.desc"
      :style="{ 'backgroundImage': 'url(' + item.images + ')' }"
      style="height: 70vh; background-size: cover; background-position: center center;"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
    data() {
      return {
        sliding: null,
        sliderJSON: [
            {
              'images': '/transportCover.jpg',
              'heading': 'Keep your travel dreams alive',
              'desc': ""
            },
            {
              'images': '/Phuket.jpg',
              'heading': 'Phuket',
              'desc': 'Phuket is the largest island in Thailand. It is in the Andaman Sea in southern Thailand.',
            },
            {
              'images': '/James%20Bond%20Island.jpg',
              'heading': 'James Bond Island',
              'desc': 'It is a famous landmark in Phang Nga Bay. It first found its way through its starring role in the James Bond movie, The Man with the Golden Gun.',
            },
            {
              'images': '/timeCover.jpg',
              'heading': "We can't change the direction of the wind, but we can adjust the sails.",
              'desc': ''
            },
            {
              'images': '/destinationsCover.jpg',
              'heading': 'It is better to travel well than to arrive.',
              'desc': ''
            },
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