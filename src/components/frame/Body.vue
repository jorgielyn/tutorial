<template>
    <div>
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>
<style scoped lang="scss">
@import "~assets/color.scss";
.app-name{
    height: 100px;

}

</style>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>