<template>
    <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Label class="drawer-header" text="Filters"/>

        <RadListView ref="filterView"
                     for="filterItem in filters"
                     @itemTap="onItemTap">
            <v-template>
                <StackLayout class="drawer-item" orientation="horizontal">
                    <Label :text="filterItem.title" @tap="go" />
                    <Label :text="'('+filterItem.cnt+')'" horizontalAlignment="right" @tap="go" />
                </StackLayout>
            </v-template>
        </RadListView>


<!--        <StackLayout orientation="horizontal">-->
<!--            <Label v-for="filter in filters" class="drawer-item" :text="filter.title" @tap="go" />-->
<!--            <Label :text="filter.cnt" />-->

<!--        </StackLayout>-->
    </StackLayout>
</template>

<script>
    export default {
        data() {
            return {
                filters: [
                    {
                        title: 'Openja',
                        cnt: 5
                    },{
                        title: 'Pending',
                        cnt: 2
                    },{
                        title: 'Resolved',
                        cnt: 0
                    },{
                        title: 'Deleted',
                        cnt: 0
                    }
                ]
            }
        },
        computed: {
        },
        methods: {
            onItemTap() {
                console.log('drawer item tapped!');

                this.$emit('filterClick', true);

                // this.$refs.drawer.closeDrawer();
            }
        }
    };
</script>

<style scoped>

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #F2806A;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }

    .filter-item {
        padding: 8;
    }

</style>