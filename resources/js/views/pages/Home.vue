<template>
    <div role="main" class="main">
        <Slider />
        <section class="section section-center section-no-border section-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <h2
                            class="font-weight-bold text-color-quaternary appear-animation"
                            data-appear-animation="fadeInUp"
                            data-appear-animation-delay="0"
                        >
                            <span class="text-color-primary">Get Up!</span>
                            Challenge yourself today
                        </h2>
                        <p
                            class="appear-animation"
                            data-appear-animation="fadeInUp"
                            data-appear-animation-delay="150"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut sed sem ipsum. Proin efficitur dolor
                            accumsan purus varius tempus nec a nulla. Aliquam id
                            vulputate massa, a rhoncus justo. Nunc luctus non
                            ipsum a cursus. Donec laoreet iaculis egestas. Nulla
                            finibus sed ipsum a pretium. Mauris ut nisl nec
                            metus.
                        </p>
                        <a
                            class="btn btn-primary custom-btn-style-1 text-uppercase text-color-light custom-font-weight-medium text-2 appear-animation"
                            data-appear-animation="fadeInUp"
                            data-appear-animation-delay="300"
                            href="demo-gym-about-us.html"
                            >About the Gym</a
                        >
                    </div>
                </div>
            </div>
        </section>

        <our-package />
    </div>
</template>
<script>
import Slider from "../../components/Slider.vue";
import OurPackage from '../../components/OurPackage.vue'
export default {
    components: { Slider, OurPackage }
};
</script>
<style scoped>
h2,
p,
a {
    color: black !important;
}
</style>
>
