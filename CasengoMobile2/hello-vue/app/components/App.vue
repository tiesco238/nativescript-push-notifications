<template>
    <Page>
        <ActionBar>

            <!--        <NavigationButton text="Menu" android.systemIcon="ic_menu_back" tap="$refs.drawer.nativeView.showDrawer()"/>-->

            <!--        <StackLayout ios:horizontalAlignment="center"-->
            <!--                     android:horizontalAlignment="center">>-->
            <!--            <Label text="Inbox"  class="title"></Label>-->
            <!--        </StackLayout>-->
            <!--        <GridLayout width="100%" columns="auto, *">-->
            <!--            <Label text="-" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>-->
            <!--            <Label class="title" text="Inbox" col="60"/>-->



            <HeaderBar @showDrawer="showDrawer"></HeaderBar>
<!--            <NavigationButton icon="res://ic_menu_black_24dp"></NavigationButton>-->
<!--            <ActionItem icon="res://ic_menu" ios.position="left"></ActionItem>-->

        </ActionBar>

        <RadSideDrawer ref="drawer">

            <Drawer @filterClick="closeDrawer"/>

            <GridLayout ~mainContent columns="*" rows="*">
                <Inbox></Inbox>

            </GridLayout>

        </RadSideDrawer>

    </Page>
</template>

<script>

    import inappmessaging from "nativescript-plugin-firebase/inappmessaging";

    import HeaderBar from "./HeaderBar";
    import Drawer from "./Drawer";
    import Inbox from "./CaseInbox";

  export default {
      components: {
          HeaderBar,
          Drawer,
          Inbox
      },
    data() {
      return {

      }
    },
      created() {
          // // wire up an 'onMessageClicked' callback
          inappmessaging.onMessageClicked(message => {

              console.log(">> inappmessaging onMessageClicked, campaign: " + message.campaignName + ", with url: " + message.actionURL);
              this.message = `Campaign ${message.campaignName} clicked`;
          });
          // 👉 .. and for fun, wire an 'onMessageImpression' callback so when know when the message is shown
          inappmessaging.onMessageImpression(message => {
              console.log(">> inappmessaging onMessageImpression, campaign: " + message.campaignName);
              this.message = `Campaign ${message.campaignName} seen`;
          });
      },
      computed: {

      },
      methods: {
          showDrawer() {
              this.$refs.drawer.nativeView.showDrawer();
          },
          closeDrawer() {
              this.$refs.drawer.nativeView.closeDrawer();
          },
        go() {
            console.log('bam!!! !');
          }
      }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #F2806A;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

</style>
