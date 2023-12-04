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
    <div id="head">
        <div class="wrapper d-flex justify-content-between align-items-center ms_color_violet">
            <img src="../assets/img/dark-logo.png" alt="logo">

            <div class="d-flex align-items-center gap-4  flex-wrap">
                <ul class="d-flex gap-4">
                    <li v-for="item in store.headerList">
                        <span>{{ item }}</span>
                        <i class="fa-solid fa-angle-down fa-xs"></i>
                    </li>
                </ul>
                <span class="position-relative">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span
                        class="position-absolute top-0 start-100 translate-middle badge rounded-circle ms_background">0</span>
                </span>

                <i class="fa-regular fa-circle-user"></i>
                <div class="position-relative">
                    <input class="py-2 px-3 rounded border-0 bg-white" type="text" id="input" placeholder="Search...">
                    <i
                        class="ms_glass ms_color_green fa-solid fa-magnifying-glass position-absolute top-50 translate-middle-y"></i>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

#head {
    background-color: $colorGallery;

    .wrapper {
        height: 70px;

        img {
            width: 150px;
        }

        ul {
            list-style: none;

            i {
                margin-left: .3rem;
            }
        }

        .ms_background {
            background-color: $colorJungleGreen;
        }

        input {
            width: 200px;
        }

        .ms_glass {
            right: 15px;
        }
    }
}
</style>