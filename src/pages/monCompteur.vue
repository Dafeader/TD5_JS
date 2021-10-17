<template>
    <div id="test">
    <h1>Test</h1>
    <Counter v-bind:init="0" v-bind:increment="2"></Counter>
    </div>
</template>

<script>
import Counter from '../components/Counter.vue'
export default{
    components:{
        Counter,
    }
}
</script>
