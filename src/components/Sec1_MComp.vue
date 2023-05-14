<script>

    export default{

        name: "Sec1_MComp",
        
        components: {
            
        },

        data(){
            return{
               


            }
        },
    }
    
</script>




<template>
    <div id="Sec1_MComp">
        <div id="core" class="col-8 m-auto">

            <!-- Card 1 -->
            <div class="cardx">
                <ul>
                    <li><font-awesome-icon icon="fa-regular-solid fa-user-group" /></li>
                    <li><h2>Human Capital</h2></li>
                    <li><span>Humanizing business: Harness the power of technology to improve the way people work.</span></li>
                </ul>
            </div>
            <div class="cardx">
                <ul>
                    <li><font-awesome-icon icon="fa-solid fa-chart-pie" /></li>
                    <li><h2>Core Business</h2></li>
                    <li><span>It takes innovative approaches to transform, modernize, and run existing platform.</span></li>
                </ul>
            </div>
            <div class="cardx">
                <ul>
                    <li><font-awesome-icon icon="fa-solid fa-gauge-high" /></li>
                    <li><h2>Performance</h2></li>
                    <li><span>Achieving maximum impact and value from investiments in finance and supply chain.</span></li>
                </ul>
            </div>


        </div>
    </div>
</template>





<style lang="scss" scoped>

    #Sec1_MComp {
        color: black;
        background-color: #eef4ed;

        #core {

            padding: 5rem 0;
            display: flex;
            justify-content: center;
            gap: 2rem;
            .cardx {
                background-color: white;
                width: calc(100%/3 - 4%);
                height: 20rem;
                padding: 2.2rem;
                border-radius: 10px;
                
                ul {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    justify-content: space-evenly;
                    gap: 1rem;

                    .fa-user-group, .fa-chart-pie, .fa-gauge-high {
                        font-size: 2.2rem;
                        background-color: #daeced;
                        padding: 1rem;
                        border-radius: 100%;
                        aspect-ratio: 1;
                        color: #138587;
                    }
                    
                    li {

                        color: #7d7d7d;

                        span {
                            font-weight: normal;
                            font-size: larger;
                        }
                        
                        h2 {
                            font-weight: bold;
                            color: #25353e;
                            font-size: 2rem;
                        }
                    }
                }
            }
            
        }
    }


</style>