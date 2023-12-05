<script>
export default {
    props: {
        where: String,
        name: String,
        day: String,
        mth: String,
    }
}
</script>

<template>
    <div class="border-0 rounded ms_bg_gallery p-3 d-flex justify-content-between">
        <div class="p-3" style="width: 65%;">
            <div class="text-secondary">
                <i class="fa-solid fa-location-dot me-2"></i>
                <span>{{ where }}</span>
            </div>
            <h5 class="fw-bold mt-3">{{ name }}</h5>
        </div>

        <div class="text-center" style="width: 30%;">
            <span class="ms_color_green" style="font-size: 4rem;">{{ day }}</span>
            <p class="fw-bold">{{ mth }}</p>
            <div>
                <button type="button" class="btn btn-success fw-bold border-0 ms_button">Get ticket</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.ms_button {
    padding: .4rem 1.5rem;
}
</style>