<script>
export default {
    props: {
        Mono: String,
        Purple: String,
        Green: String,
        class: String
    }
}
</script>

<template>
    <div class="title text-center">
        <p class="text-uppercase font-monospace">{{ Mono }}</p>
        <span class="h1 ms_h1 fw-bold ms_color_violet text-capitalize">{{ Purple }}
            <span> </span>
            <span class="ms_h1 ms_color_green text-uppercase fw-lighter" :class="class">{{ Green }}</span>
        </span>
    </div>
</template>

<style lang="scss" scoped></style>