<script>
    import Sec1_MComp from "./Sec1_MComp.vue"
    import Sec2_MComp from "./Sec2_MComp.vue"
    import Sec3_MComp from "./Sec3_MComp.vue"
    import Sec4_MComp from "./Sec4_MComp.vue"
    export default{

        name: "MainComp",
        
        components: {
            Sec1_MComp,
            Sec2_MComp,
            Sec3_MComp,
            Sec4_MComp
        },

        data(){
            return{
               


            }
        },
    }
    
</script>




<template>
    <div id="MainComp" class="d-flex flex-column">
        <Sec1_MComp/>
        <Sec2_MComp/>
        <Sec3_MComp/>
        <Sec4_MComp/>
    </div>
</template>





<style lang="scss" scoped>




</style>