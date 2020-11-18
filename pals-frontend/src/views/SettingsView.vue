<template>
  <div class="container">
      <SideMenu :name="name" />
      <Setting/>
  </div>
</template>

<script>
import Setting from '@/components/Settings.vue'
import SideMenu from '@/components/SideMenu.vue'
export default {
    name: 'SettingsView',
    components: {
        Setting,
        SideMenu
    },
    props : ['name']
}
</script>

<style>

</style>