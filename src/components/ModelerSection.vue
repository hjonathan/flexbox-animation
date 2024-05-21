<script>
import { defineComponent } from 'vue';

export default defineComponent({
    emits: ['close'],    
    setup(props, { emit }) {
        const onClick = () =>{
            emit("pickup")
        }

        return {
            onClick
        }
    }
})

</script>

<template>
    <div
        role="main"
        class="d-flex flex-column align-items-center justify-content-md-center inner cover bg-dark bg-opacity-75 text-white h-100">
        <h1 class="cover-heading">Cover your page.</h1>
        <p class="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
        </p>
        <p class="lead">
            <div
                @click="onClick()"
                class="btn btn-lg btn-secondary">
                Learn more
            </div>
        </p>
    </div>
</template>

<style></style>
