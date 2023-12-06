<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="position-relative">
        <div class="wrapper mt-5 mb-3 py-5 position-relative">
            <div class="d-flex justify-content-between">
                <div class="address">
                    <div class="fw-bold">Address</div>
                    <ul class="list-unstyled my-3">
                        <li class="mb-2" v-for="item in store.footerAddress"><a
                                class="text-secondary link-underline link-underline-opacity-0" href="">{{ item }}</a></li>
                    </ul>
                    <div class="social text-body-tertiary mt-5">
                        <i class="fa-brands fa-square-facebook fa-2xl me-5"></i>
                        <i class="fa-brands fa-twitter fa-2xl me-5"></i>
                        <i class="fa-brands fa-instagram fa-2xl me-5"></i>
                        <i class="fa-brands fa-linkedin fa-2xl me-5"></i>
                    </div>
                </div>

                <div class="d-flex gap-5 me-5 pe-5">
                    <div class="explore">
                        <div class="fw-bold">Explore</div>
                        <div class="d-flex gap-5">
                            <div>
                                <ul class="list-unstyled my-3">
                                    <li class="mb-2" v-for="(item, index) in store.footerExplore"><a
                                            class="text-secondary link-underline link-underline-opacity-0" href=""
                                            :key="index" v-if="index < 3">{{ item }}</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="list-unstyled my-3">
                                    <li class="mb-2" v-for="(item, index) in store.footerExplore"><a
                                            class="text-secondary link-underline link-underline-opacity-0" href=""
                                            :key="index" v-if="index > 2">{{ item }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="information">
                        <div class="fw-bold">Information</div>
                        <ul class="list-unstyled my-3">
                            <li class="mb-2" v-for="item in store.footerInfo"><a
                                    class="text-secondary link-underline link-underline-opacity-0" href="">{{ item }}</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class=" mt-5 text-center text-secondary">&copy; 2020 Maxcoach. All Rights Reserved</div>
        </div>

        <a href="#head">
            <i class="ms_up fa-solid fa-arrow-up-long position-absolute ms_bg_green text-white rounded-circle"></i>
        </a>

    </div>
</template>

<style lang="scss" scoped>
.ms_up {
    bottom: 5%;
    right: 1.5%;

    display: inline-block;
    padding: 1rem 1.15rem;
}
</style>