<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <!-- @click.stop means that click don't work with this div-->
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'my-dialog',// need to go to index.js and add this component
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)// updata show in v-if="show"
        }
    }
}

</script>

<style scoped>
.dialog {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-width: 350px;
    min-height: 50px;
    padding: 20px;
}
</style>