<template>
    <header id="header" class="header-floating-bar" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'reveal', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 116, 'stickySetTop': '0px', 'stickyChangeLogo': false}">
        <div class="header-body bg-color-dark box-shadow-none">
            <div class="header-container header-container-height-sm container">
                <div class="header-row">
                    <div class="header-column">
                        <div class="header-row">
                            <div class="header-logo">
                                <router-link to="/">
                                    <img alt="Амжилт фитнесс" width="143" src="images/amjilt.png">
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="header-column justify-content-end me-lg-4">
                        <div class="header-row">
                            <div class="header-nav header-nav-links header-nav-dropdowns-dark header-nav-force-light-text header-nav-force-light-text-active-skin-color order-2 order-lg-1">
                                <div class="header-nav-main header-nav-main-mobile-dark header-nav-main-dropdown-no-borders header-nav-main-clone-items header-nav-main-slide header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1">
                                    <nav class="collapse">
                                        <ul class="nav nav-pills" id="mainNav">
                                            <li>
                                                <router-link class="nav-link" :to="{name: 'Home'}">
                                                    Нүүр хуудас
                                                </router-link>
                                            </li>
                                            <li class="dropdown">
                                                <router-link class="nav-link" :to="{name: 'AboutUS'}">
                                                    Танилцуулга
                                                </router-link>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="demo-gym-classes.html">Overview</a></li>
                                                    <li><a class="dropdown-item" href="demo-gym-classes-detail.html">Group Fitness</a></li>
                                                    <li><a class="dropdown-item" href="demo-gym-classes-detail.html">Yoga</a></li>
                                                    <li><a class="dropdown-item" href="demo-gym-classes-detail.html">Functional</a></li>
                                                    <li><a class="dropdown-item" href="demo-gym-classes-detail.html">Spin Class</a></li>
                                                    <li><a class="dropdown-item" href="demo-gym-classes-detail.html">Zumba</a></li>
                                                    <li><a class="dropdown-item" href="demo-gym-classes-detail.html">Conditioning</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <router-link :to="{name: 'OnlineCourse'}" class="dropdown-item dropdown-toggle">
                                                    Онлайн хичээл
                                                </router-link>

                                            </li>
                                            <li>
                                                <router-link class="nav-link" :to="{name: 'News'}">
                                                    Мэдээ мэдээлэл
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link class="nav-link" :to="{name: 'Advice'}">
                                                    Хэмжилт / Зөвлөмж
                                                </router-link>
                                            </li>
                                            <!-- <li>
                                                <a class="nav-link" href="demo-gym-contact-us.html">

                                                </a>
                                            </li> -->
                                        </ul>
                                    </nav>
                                </div>
                                <router-link class="btn btn-primary btn-join-now text-uppercase custom-font-weight-medium d-none d-lg-flex" :to="{name: 'Contact'}">
                                    Холбоо барих</router-link>
                                <button class="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
                                    <i class="fas fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            msg: "Толгойн хэсэг",
        };
    },
};
</script>
