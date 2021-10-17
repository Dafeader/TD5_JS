<template>
    <button v-on:click="count+=increment">You clicked me {{ count }} times.</button>
</template>

<script>
    export default {
        data (){
            return{
                count: 0
            }
        },
        props:{
            init: Number,
            increment: Number
        },
        mounted: function(){
            this.count = this.init;
        },
    }
</script>