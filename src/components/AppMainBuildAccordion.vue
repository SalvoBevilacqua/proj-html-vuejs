<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default {

}
</script>

<template>
    <div class="accordion border-0" id="accordionExample">
        <div class="accordion-item border-0 mt-5 shadow rounded">
            <h2 class="accordion-header" id="headingOne">
                <button class="fw-bold accordion-button position-relative" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <img class="ms_img position-absolute rounded-circle d-inline-block top-50 translate-middle"
                        src="../assets/img/add.svg" alt="acc">
                    Multiple Platforms Supported for Teaching & Studying
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusamus neque perferendis labore
                    minus
                    quam recusandae corrupti maiores eaque in mollitia adipisci vero odit, inventore tempora voluptates
                    quisquam unde modi!
                </div>
            </div>
        </div>
        <div class="accordion-item border-0 my-3 shadow rounded">
            <h2 class="accordion-header" id="headingTwo">
                <button class="fw-bold accordion-button collapsed position-relative" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <img class="ms_img position-absolute rounded-circle d-inline-block top-50 translate-middle"
                        src="../assets/img/add.svg" alt="acc">
                    Multiple Course Participation at the Same Time
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid porro temporibus sapiente
                    officia dolor ex fuga laborum autem! Voluptatibus ullam, quod quibusdam eligendi deleniti dolorum
                    debitis ipsum nesciunt animi.
                </div>
            </div>
        </div>
        <div class="accordion-item border-0 my-3 shadow rounded">
            <h2 class="accordion-header" id="headingThree">
                <button class="fw-bold accordion-button collapsed position-relative" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <img class="ms_img position-absolute rounded-circle d-inline-block top-50 translate-middle"
                        src="../assets/img/add.svg" alt="acc">
                    Track Study Progress & Deliver Prompt Feedback
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, illum, veritatis dolorem ipsam
                    adipisci fugit voluptatibus voluptatum dolore nam id beatae, natus ipsa unde reprehenderit! Fugiat
                    ad
                    deserunt dolores repellendus.
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

* {
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
}

.ms_img {
    height: 25px;
    stroke-width: 5px;
    z-index: 3;
    right: 1.5%;
    background-color: grey;
    padding: .1rem;
}

.accordion-header {
    button {
        background-color: #fefefe;
        color: grey;

        &:hover {
            color: #fefefe;
            background-color: $colorJungleGreen;

            .ms_img {
                background-color: white;
                color: grey;
            }
        }

        &:focus {
            color: #fefefe;
            background-color: $colorJungleGreen;
        }
    }
}
</style>