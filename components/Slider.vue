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
            :style="{ 'backgroundImage': 'url(' + 'http://thaib2b.in/' + item.images + ')' }"
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
                'images': 'assets/thailand1.jpg',
                'heading': 'Phuket',
                'desc': 'Phuket is the largest island in Thailand. It is in the Andaman Sea in southern Thailand.',
            },
            {
                'images': 'assets/thailand2.jpg',
                'heading': 'James Bond Island',
                'desc': 'It is a famous landmark in Phang Nga Bay. It first found its way through its starring role in the James Bond movie, The Man with the Golden Gun.',
            },
            {
                'images': 'assets/thailand4.jpg',
                'heading': 'Sriracha Tiger Zoo',
                'desc': "It is about 97 km's from Bangkok. The zoo claims a population of 200 tigers and around 10,000 crocodiles, the largest such populations in the world.",
            },
            {
                'images': 'assets/thailand5.jpg',
                'heading': 'Cartoon Network Amazone Waterpark Pattaya',
                'desc': 'It is one of Thailandâ€™s largest water parks. The park is themed around the characters of the Cartoon Network TV channel with characters as Johnny Bravo, Ben 10, Courage the Cowardly Dog and the Powerpuff Girls.',
            },
            {
                'images': 'assets/thailand6.jpg',
                'heading': 'Nong Nooch Tropical Garden',
                'desc': 'One of the most beautiful Gardens in the world. It is expansive enough to keep you entertained. It also features daily shows at the Thai Cultural Hall.',
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

<style>

</style>