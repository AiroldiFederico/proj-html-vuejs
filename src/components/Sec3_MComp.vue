<script>

    export default{

        name: "Sec3_MComp",
        
        components: {
            
        },

        data(){
            return{
               


            }
        },
    }
    
</script>




<template>
    <div id="Sec3_MComp">
        <div id="core" class="col-8 m-auto">

            <div id="id1">WE DO MORE FOR EVERYONE</div>

            <!-- Title -->
            <div id="id2">Actions & <span>Projects</span></div>

            <!-- navbar -->
            <ul>
                <li class="green-bg">ALL</li>
                <li>INSTITUTIONAL</li>
                <li>SOCIAL</li>
                <li>EVENTS</li>
                <li>INNOVATION</li>
                <li>ENVIRONMENT</li>
                <li>TECHNOLOGY</li>
            </ul>

            <!-- cards -->
            <div>

            </div>


        </div>
    </div>
</template>





<style lang="scss" scoped>

    #Sec3_MComp {
      background-color: #111117;
      padding: 5rem;

      #core {

        text-align: center;

        #id1 {
            color: #038483;
        }

        #id2 {
            color: white;
            font-size: 4rem;
            font-weight: bolder;
            margin-bottom: 3rem;
            margin-top: 1rem;

            span {
                background-color: #03848456;
                padding: 0rem 1rem;
                border-radius: 10px;
            }
        }

        ul {
            color: #babdbe;
            display: flex;
            justify-content: center;
            gap: 2rem;

            li {
                padding: 0.5rem !important;
            }
        }

      }
    }

    .green-bg {
        background-color: #03848456;
        border-radius: 5px;
    }

</style>