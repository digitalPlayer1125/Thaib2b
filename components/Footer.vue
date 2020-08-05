<template>
    <footer class="container-fluid text-white pb-5">
        <div class="container mt-4">
            <div class="row">
                <div class="mt-3 col-12 col-sm-6 col-md-4">
                    <nuxt-link to="/">
                        <img src="/logo.png" style="height: 100px;">
                    </nuxt-link>
                    <p style="font-family: Poppins;" class="text-dark mt-3">thaiB2B, Leading Thailand Destination Management Company, has a profound understanding of Indian consumers travel needs and preferences.</p>
                    <ul class="list-unstyled list-inline list-social my-3 mb-md-0">
                        <li class="list-inline-item list-social-item mr-3">
                            <a aria-label="Twitter-Thaib2b" class="text-decoration-none" href="https://twitter.com/thaib2b" rel="noopener" target="_blank">
                                <svg aria-hidden="true" class="text-dark" style="height: 25px;" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </svg>
                            </a>
                        </li>
                        <li class="list-inline-item list-social-item mr-3">
                            <a aria-label="Facebook-Thaib2b" class="text-decoration-none" href="https://www.facebook.com/thaib2b.in/" rel="noopener" target="_blank">
                                <svg aria-hidden="true" class="text-dark" style="height: 25px;" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                    <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                </svg>
                            </a>
                        </li>
                        <li class="list-inline-item list-social-item mr-3">
                            <a aria-label="Instagram-Thaib2b" class="text-decoration-none" href="https://www.instagram.com/thaiB2B.in/" rel="noopener" target="_blank">
                                <svg aria-hidden="true" class="text-dark" style="height: 25px;" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="mt-3 col-12 col-sm-6 col-md-4">
                    <h6 class="text-dark text-uppercase mb-3 f_600">
                    Learn More
                </h6>
                    <ul class="list-unstyled text-dark mb-4 mb-lg-0">
                        <li class="mb-3">
                            <nuxt-link class="text-dark f_400" to="/contact-us">Contact Us</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="mt-3 col-12 col-sm-6 col-md-4">
                    <h6 class="text-dark text-uppercase mb-3 f_600">
                    Contact Us <p />
                </h6>
                    <ul class="list-unstyled list-inline list-social mb-4 mb-md-0">
                        <li class="list-inline-item list-social-item mr-3 mb-3"> <a class="text-dark f_400" href="mailto:sales@thaiB2B.in">
                        sales@thaiB2B.in
                    </a>
                        </li>
                        <li class="list-inline-item list-social-item mr-3 mb-3"> <a class="text-dark f_400" href="tel:+91-9999228200"> (+91) 9999228200 </a>
                        </li>
                        <li class="list-inline-item list-social-item mr-3 mb-3">
                            <iframe allowfullscreen="" class="rounded-lg" aria-label="Google Map ThaiB2B" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.878781584972!2d77.1477541150839!3d28.693272482393994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02333dcc5a3f%3A0xaa47469c183747d1!2sAggarwal%20Cyber%20Plaza%202%2C%20Lala%20Jagat%20Narayan%20Marg%2C%20Netaji%20Subhash%20Place%2C%20Pitam%20Pura%2C%20Delhi%2C%20110034!5e0!3m2!1sen!2sin!4v1596386501883!5m2!1sen!2sin" style="border:0; height: 200px; width: 100%;" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center mb-3" style="height: 0.5px; background: #65656565;" />
            <div class="row">
                <div class="col-12"> <span class="text-dark">
                    Copyright © 2020 ThaiB2B. All rights reserved.
                </span>
                    <!-- <br class="d-sm-none"> -->
                    <!-- <nuxt-link class="text-dark ml-0 ml-md-2" to="/privacy-policy">Privacy Policy</nuxt-link> -->
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
    .f_400{
        font-weight: 400 !important;
    }
    .f_600{
        font-weight: 600 !important;
    }
</style>