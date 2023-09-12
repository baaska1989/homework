<template>
    <div role="main" class="main">
        <section class="section section-no-border section-light custom-padding-top-1">
            <div class="container">
                <div class="row mt-4">
                    <div class="col-md-7 col-lg-9">
                        <h1 class="font-weight-bold text-color-primary mb-0">About Us</h1>
                        <h4 class="font-weight-bold text-color-quaternary">Challenge yourself today</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet laoreet lorem, a imperdiet sapien tincidunt at. Vivamus sed libero ut diam feugiat sagittis sit amet in justo. Nam quis massa nec lorem tempus egestas at quis eros. Morbi non augue vel tortor feugiat commodo vitae sed dolor. Maecenas a nisi euismod, bibendum arcu quis, posuere massa. Morbi mattis dui sem. Phasellus vel rhoncus ligula.</p>
                        <p class="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet laoreet lorem, a imperdiet sapien tincidunt at. Vivamus sed libero ut diam feugiat sagittis sit amet in justo. Nam quis massa nec lorem tempus egestas at quis eros. Morbi non augue vel tortor feugiat commodo vitae sed dolor. Maecenas a nisi euismod, bibendum arcu quis, posuere massa. Morbi mattis dui sem. Phasellus vel rhoncus ligula.</p>
                    </div>
                    <div class="col-md-5 col-lg-3">
                        <div class="custom-join-now-form custom-position-style-1 bg-color-primary p-4">
                            <h4 class="font-weight-bold text-color-light mb-0">Try us Out!</h4>
                            <p class="font-weight-light text-color-light text-2">Get a free 5 day VIP guest pass.</p>

                            <form id="vipRequest" class="contact-form" action="php/contact-form.php" method="POST">
                                <div class="contact-form-success alert alert-success d-none mt-4" id="vipRequestSuccess">
                                    <strong>Success!</strong> Your VIP request has been sent to us.
                                </div>

                                <div class="contact-form-error alert alert-danger d-none mt-4" id="vipRequestError">
                                    <strong>Error!</strong> There was an error sending your VIP request.
                                    <span class="mail-error-message text-1 mt-2 d-block" id="vipRequestErrorMessage"></span>
                                </div>

                                <input type="hidden" name="subject" value="Vip Request Received" />
                                <div class="row">
                                    <div class="form-group col">
                                        <input type="text" value="" data-msg-required="Please enter your name." maxlength="100" class="form-control" name="name" id="vipRequestName" placeholder="Your Name" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col">
                                        <input type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" class="form-control" name="email" id="vipRequestEmail" placeholder="Your E-mail" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col">
                                        <input type="text" value="" data-msg-required="Please enter your phone." maxlength="100" class="form-control" name="phone" id="vipRequestPhone" placeholder="Your Phone" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col mb-0">
                                        <input type="submit" value="Join Now!" class="btn btn-quaternary custom-btn-style-2 font-weight-bold" data-loading-text="Loading...">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="parallax section section-text-light section-parallax m-0" data-plugin-parallax data-plugin-options="{'speed': 1.5}" data-image-src="img/demos/gym/about-us/about-us-parallax-1.jpg">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-lg-6">
                        <h2 class="font-weight-bold text-color-light">Why Us?</h2>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="list list-icons list-light text-color-light">
                                    <li><i class="fas fa-check"></i> Fitness Consultation</li>
                                    <li><i class="fas fa-check"></i> Professionals</li>
                                    <li><i class="fas fa-check"></i> Zumba</li>
                                    <li><i class="fas fa-check"></i> Nutrition</li>
                                    <li><i class="fas fa-check"></i> TRX</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="list list-icons list-light text-color-light">
                                    <li><i class="fas fa-check"></i> Conditioning</li>
                                    <li><i class="fas fa-check"></i> Sports</li>
                                    <li><i class="fas fa-check"></i> Consultation</li>
                                    <li><i class="fas fa-check"></i> Spin</li>
                                    <li><i class="fas fa-check"></i> Full Cardio</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="lightbox" data-plugin-options="{'delegate': 'a', 'type': 'image', 'gallery': {'enabled': true}, 'mainClass': 'mfp-with-zoom', 'zoom': {'enabled': true, 'duration': 300}}">
            <div class="owl-carousel custom-arrows-style-1" data-plugin-options="{'items': 5, 'loop': false, 'dots': false, 'nav': true}">
                <div>
                    <a href="img/demos/gym/about-us/about-us-carousel-1.jpg" class="lightbox text-decoration-none">
								<span class="thumb-info custom-thumb-info-1">
									<span class="thumb-info-wrapper">
										<span class="thumb-info-plus"></span>
										<img src="img/demos/gym/about-us/about-us-carousel-1.jpg" class="img-fluid" alt="">
									</span>
								</span>
                    </a>
                </div>
                <div>
                    <a href="img/demos/gym/about-us/about-us-carousel-2.jpg" class="lightbox text-decoration-none">
								<span class="thumb-info custom-thumb-info-1">
									<span class="thumb-info-wrapper">
										<span class="thumb-info-plus"></span>
										<img src="img/demos/gym/about-us/about-us-carousel-2.jpg" class="img-fluid" alt="">
									</span>
								</span>
                    </a>
                </div>
                <div>
                    <a href="img/demos/gym/about-us/about-us-carousel-3.jpg" class="lightbox text-decoration-none">
								<span class="thumb-info custom-thumb-info-1">
									<span class="thumb-info-wrapper">
										<span class="thumb-info-plus"></span>
										<img src="img/demos/gym/about-us/about-us-carousel-3.jpg" class="img-fluid" alt="">
									</span>
								</span>
                    </a>
                </div>
                <div>
                    <a href="img/demos/gym/about-us/about-us-carousel-4.jpg" class="lightbox text-decoration-none">
								<span class="thumb-info custom-thumb-info-1">
									<span class="thumb-info-wrapper">
										<span class="thumb-info-plus"></span>
										<img src="img/demos/gym/about-us/about-us-carousel-4.jpg" class="img-fluid" alt="">
									</span>
								</span>
                    </a>
                </div>
                <div>
                    <a href="img/demos/gym/about-us/about-us-carousel-5.jpg" class="lightbox text-decoration-none">
								<span class="thumb-info custom-thumb-info-1">
									<span class="thumb-info-wrapper">
										<span class="thumb-info-plus"></span>
										<img src="img/demos/gym/about-us/about-us-carousel-5.jpg" class="img-fluid" alt="">
									</span>
								</span>
                    </a>
                </div>
                <div>
                    <a href="img/demos/gym/about-us/about-us-carousel-1.jpg" class="lightbox text-decoration-none">
								<span class="thumb-info custom-thumb-info-1">
									<span class="thumb-info-wrapper">
										<span class="thumb-info-plus"></span>
										<img src="img/demos/gym/about-us/about-us-carousel-1.jpg" class="img-fluid" alt="">
									</span>
								</span>
                    </a>
                </div>
                <div>
                    <a href="img/demos/gym/about-us/about-us-carousel-2.jpg" class="lightbox text-decoration-none">
								<span class="thumb-info custom-thumb-info-1">
									<span class="thumb-info-wrapper">
										<span class="thumb-info-plus"></span>
										<img src="img/demos/gym/about-us/about-us-carousel-2.jpg" class="img-fluid" alt="">
									</span>
								</span>
                    </a>
                </div>
                <div>
                    <a href="img/demos/gym/about-us/about-us-carousel-3.jpg" class="lightbox text-decoration-none">
								<span class="thumb-info custom-thumb-info-1">
									<span class="thumb-info-wrapper">
										<span class="thumb-info-plus"></span>
										<img src="img/demos/gym/about-us/about-us-carousel-3.jpg" class="img-fluid" alt="">
									</span>
								</span>
                    </a>
                </div>
                <div>
                    <a href="img/demos/gym/about-us/about-us-carousel-4.jpg" class="lightbox text-decoration-none">
								<span class="thumb-info custom-thumb-info-1">
									<span class="thumb-info-wrapper">
										<span class="thumb-info-plus"></span>
										<img src="img/demos/gym/about-us/about-us-carousel-4.jpg" class="img-fluid" alt="">
									</span>
								</span>
                    </a>
                </div>
            </div>
        </div>

        <section class="section section-center section-no-border section-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-8 col-lg-4 appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="0">
                        <img src="img/demos/gym/icons/trainer-colored.png" class="mb-2" alt />
                        <h2 class="font-weight-bold text-color-quaternary">Trainers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, felis nec gravida lobortis, est felis convallis lacus, vitae commodo metus ipsum.</p>
                        <a class="btn btn-primary custom-btn-style-1 text-uppercase text-color-light custom-font-weight-medium" href="demo-gym-staff.html" title="Meet The Staff">Meet the Staff</a>
                    </div>
                    <div class="col-sm-8 col-lg-4 custom-sm-margin-1 appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="300">
                        <img src="img/demos/gym/icons/member-colored.png" class="mb-2" alt />
                        <h2 class="font-weight-bold text-color-quaternary">Become a Member</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, felis nec gravida lobortis, est felis convallis lacus, vitae commodo metus ipsum.</p>
                        <a class="btn btn-primary custom-btn-style-1 text-uppercase text-color-light custom-font-weight-medium" href="demo-gym-contact-us.html" title="Join Now">Join Now</a>
                    </div>
                    <div class="col-sm-8 col-lg-4 custom-sm-margin-1 appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="600">
                        <img src="img/demos/gym/icons/group-fitness-colored.png" class="mb-2" alt />
                        <h2 class="font-weight-bold text-color-quaternary">Group Fitness</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, felis nec gravida lobortis, est felis convallis lacus, vitae commodo metus ipsum.</p>
                        <a class="btn btn-primary custom-btn-style-1 text-uppercase text-color-light custom-font-weight-medium" href="demo-gym-classes-detail.html" title="Learn More">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'OnlineCourse'
}
</script>
<style scoped>

</style>
