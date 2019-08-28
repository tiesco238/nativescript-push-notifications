<template>
    <StackLayout id="home">
<!--        <Label textWrap="true" text="Hello John !" class="h1" />-->

        <RadListView ref="listView"
                     for="caseItem in cases"
                     pullToRefresh="true"
                     swipeActions="true"

                     @itemTap="onItemTap"
                     @itemSwipeProgressStarted="onSwipeStarted"
                     @itemSwipeProgressEnded="onSwipeEnded"
                     @pullToRefreshInitiated="onPullToRefreshInitiated">
            <v-template>
                <StackLayout class="item" orientation="vertical">
                    <Label :text="fruit.text" class="titleLabel"></Label>
                    <StackLayout height="1" backgroundColor="#EEEEEE"></StackLayout>
                </StackLayout>
            </v-template>

            <v-template>
                <CaseListItem v-model="caseItem"></CaseListItem>
            </v-template>

            <v-template name="itemswipe">
                <GridLayout columns="auto, *, auto" backgroundColor="White">
                    <StackLayout id="resolve-view" col="0" class="swipe-item left"
                                 orientation="horizontal" @tap="onLeftSwipeClick">
                        <Label backgroundColor="#43b883" color="#fff" height="100%" text="Resolve" verticalAlignment="center" horizontalAlignment="center"/>
                        <Label backgroundColor="#f00" color="#fff" height="100%" text="Close" verticalAlignment="center" horizontalAlignment="center"/>
                    </StackLayout>
                    <!--                            <StackLayout id="delete-view" col="2" class="swipe-item right"-->
                    <!--                                         orientation="horizontal" @tap="onRightSwipeClick">-->
                    <!--                                <Label text="delete" verticalAlignment="center" horizontalAlignment="center" />-->
                    <!--                            </StackLayout>-->
                </GridLayout>
            </v-template>

<!--            <v-template name="footer">-->
<!--                <StackLayout class="footer">-->
<!--                    <Label :text="footerText"></Label>-->
<!--                </StackLayout>-->
<!--            </v-template>-->
        </RadListView>

    </StackLayout>
</template>

<script>

    import CaseListItem from './CaseListItem'

    export default {
        components: {
            CaseListItem
        },
        data() {
            return {
                cases: [
                    {
                        contact: 'Rik van der Eng',
                        title: 'Question about pricing',
                        desc: 'Hey guys, how come your service is so check...',
                        channel: 'email',
                        unreadCount: 3
                    },
                    {
                        contact: 'Floris T',
                        title: 'You\'re all fired',
                        desc: 'This is the last time you ruined my cus...',
                        channel: 'chat',
                        unreadCount: 2
                    },
                    {
                        contact: 'Ricky Martin',
                        title: 'Only from the right angle',
                        desc: 'I\'ve been using Casengo for a little over 30',
                        channel: 'whatsapp',
                        unreadCount: 0
                    }
                ]
            };
        },
        computed: {
        },
        methods: {
            onPullToRefreshInitiated ({ object }) {
                console.log('Pulling...');
                // in order to avoid race conditions (only on iOS),
                // in which the UI may not be completely updated here
                // we use this.$nextTick call
                this.$nextTick(() => {
                    this.fruitList.push({
                        text: 'Berry',
                    });
                    object.notifyPullToRefreshFinished();
                });
            },
            onItemTap ({ item }) {
                console.log(`Tapped on ${item.text}`);
            },

            onSwipeStarted ({ data, object }) {
                console.log(`Swipe started`);
                const swipeLimits = data.swipeLimits;
                const swipeView = object;
                const resolveItem = swipeView.getViewById('resolve-view');
                // const deleteItem = swipeView.getViewById('delete-view');
                swipeLimits.left = resolveItem.getMeasuredWidth();
                // swipeLimits.right = deleteItem.getMeasuredWidth();
                swipeLimits.threshold = resolveItem.getMeasuredWidth() / 3;
                // swipeLimits.threshold = deleteItem.getMeasuredWidth() / 2;
            },
            onSwipeEnded ({ data, object }) {
                console.log(`Swipe ended`);
            },
            onLeftSwipeClick (event) {
                console.log('left action tapped');
                this.$refs.listView.notifySwipeToExecuteFinished();
            },
            onRightSwipeClick ({ object }) {
                console.log('right action tapped');
                // remove item
                // this.itemList.splice(this.itemList.indexOf(object.bindingContext), 1);
                this.$refs.listView.notifySwipeToExecuteFinished();
            },
        }
    };
</script>

<style scoped>
    .titleLabel {

    }

    .item {
        margin: 5 5 5 5;
    }


    .swipe-item.left {
        background-color: #ddd;
    }

    .swipe-item.left2 {
        background-color: #fdd;
    }
</style>