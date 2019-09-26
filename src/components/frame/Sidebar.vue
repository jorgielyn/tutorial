<template>
  <sidebar-menu :menu="menu" />
  
</template>
 <style scoped lang="scss">
@import "~assets/color.scss";
      #title{
        color: $danger !important;
      }
      #login{
          color: $primary !important;
      }

</style>
<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/sidebar',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/charts',
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ]
            }
        },
  
        methods: {
            onToggleCollapse(collapsed) {

            },
            onItemClick(event, item) {}
        }
    }
</script> 