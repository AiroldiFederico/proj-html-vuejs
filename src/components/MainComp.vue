<script>
    import Sec1_MComp from "./Sec1_MComp.vue"
    export default{

        name: "MainComp",
        
        components: {
            Sec1_MComp
        },

        data(){
            return{
               


            }
        },
    }
    
</script>




<template>
    <div id="MainComp">
        <Sec1_MComp/>
    </div>
</template>





<style lang="scss" scoped>

    #MainComp {
        border: solid 2px green;
    }


</style>