<template>
    <StackLayout class="item" orientation="vertical">
        <Label :text="value.contact" class="contact"></Label>
        <Label :text="value.title" class="title"></Label>
        <Label :text="value.desc" class="desc"></Label>
    </StackLayout>
</template>

<script>
    export default {
        props: {
            value: { type: Object },
        },
        data() {
            return {
            }
        },
        computed: {
        },
        methods: {
        }
    };
</script>

<style scoped>

    .contact {
        font-weight: 800;
    }

    .title {

    }

    .desc {

    }

</style>