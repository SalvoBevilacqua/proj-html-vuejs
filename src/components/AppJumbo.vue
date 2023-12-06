<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div id="jumbo" class="py-5">
        <div class="wrapper py-5 d-flex align-items-center">
            <div class="w-50">
                <h1 class="ms_h1 ms_color_violet w-75 fw-bold">Complete Your Dreams in JavaS Programming</h1>
                <p class="w-75 my-5 ms_color_violet">Learn any coding program in distance and for a reasonable fee. You
                    don't have
                    to
                    struggle
                    alone, you've
                    got our assistance and help.</p>
                <button type="button" class="btn btn-success fw-bold border-0 ms_button">
                    <i class="fa-solid fa-download me-2"></i>
                    Download free E-book
                </button>
            </div>

            <div class="w-50">
                <img src="../assets/img/home-5-hero-image.png" alt="image" class="float-end">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

#jumbo {
    background-color: $colorLightGrey;
}
</style>