<template>
<!--this is iterate over number "v-for="pageNumber in totalPage""-->
<!--We also can bild class ":class="{ current__page: true }"-->
<div class="page__wrapper">     
    <div class="page" 
    v-for="pageNumber in totalPage" 
    :key="pageNumber" 
    :class="{ current__page: page === pageNumber }" 
    @click="$emit('changePage', pageNumber)">
    <!--page === pageNumber- is Boolean-->
    {{ pageNumber }}
    </div>
    <div></div>
</div>
</template>

<script>
export default {
    name: 'my-pagination',
    props: {
        totalPage: {
            type: Number,
            require: true
        },
        page: {
            type: Number,
            require: true
        }
    }
}
</script>


<style scoped>
.page__wrapper {
    display: flex;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
 
}
.page {
    border: 1px solid teal;
    padding: 3px;
    cursor: pointer;
    width: 30px;
    text-align: center;
}

.current__page {
    border: 2px solid teal;
    color: white;
    background: teal;
}
</style>