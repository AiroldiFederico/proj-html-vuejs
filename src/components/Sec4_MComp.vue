<script>

    export default{

        name: "Sec4_MComp",
        
        components: {
            
        },

        data(){
            return{
               

            }
        },
    }
    
</script>




<template>
    <div id="Sec4_MComp">
        <div id="core" class="col-8 m-auto">

            <div id="id1">HOW IT WORKS IN PRACTICE</div>

            <!-- TITLE -->
            <div id="id2"><h1><span>Process</span>Managment</h1></div>

            <!-- text -->
            <div id="id3">We work with innovative methodologies to ensure that the entire reformatting process is done from start to finish as planned</div> 
            
        </div>


        <!-- Roadmap -->
        <!-- number -->
        <div id="id4">
            <ul>
                <li><span>01</span></li>
                <li><span>02</span></li>
                <li><span>03</span></li>
                <li><span>04</span></li>
                <li><span>05</span></li>
            </ul>
        </div>

        <!-- Text -->
        <div id="id5">
            <ul>
                <li>
                    <div class="heading">Collection of information</div>
                    <div class="text">Lorem ipsum dorol sit amet consectetur</div>
                </li>

                <li>
                    <div class="heading">Strategic planning</div>
                    <div class="text">Lorem ipsum dorol sit amet consectetur</div>
                </li>

                <li>
                    <div class="heading">Assignment of responsabilities</div>
                    <div class="text">Lorem ipsum dorol sit amet consectetur</div>
                </li>

                <li>
                    <div class="heading">Formatting process</div>
                    <div class="text">Lorem ipsum dorol sit amet consectetur</div>
                </li>

                <li>
                    <div class="heading">Continuity formalization</div>
                    <div class="text">Lorem ipsum dorol sit amet consectetur</div>
                </li>
            </ul>
        </div>
    </div>
</template>





<style lang="scss" scoped>

    #Sec4_MComp {
        color: rgb(143, 142, 142);
        text-align: center;
        padding: 6rem 0rem;

        #id1 {
            color: #1a948f;
        }

        #id2 {
            padding: 1rem;
            margin-bottom: 1rem;
            h1 {
                font-weight: bolder;
                font-size: 3rem;
                color: #202427;
                span {
                    background-color: #1a94902a;
                    color: #1a948f;
                    border-radius: 5px;
                    padding: 0rem 0.6rem;
                    margin-right: 0.6rem;
                }
            }
        }

        #id3 {
            font-size: larger;
            font-weight: normal;
            width: 52rem;
            margin: auto;
            margin-bottom: 4rem;
        }

        #id4 {
            ul {
                position: relative;
                display: flex;
                justify-content: space-around;
                background-color: #daeced;
                height: 0.5rem;

                li{
                    margin-right: 4rem !important
                }

                span {
                    color: #058a9c;
                    font-size: 1.5rem;
                    background-color: #daeced;
                    padding: 0.8rem !important;
                    border-radius: 100%;
                    width: 3.6rem;
                    height: 3.6rem;
                    position: absolute;
                    top: -27px;
                    
                }
            }
        }

        #id5 {
            margin-top: 3rem;
            ul {
                position: relative;
                display: flex;
                justify-content: space-around;

                li {
                    width: 15rem;
                    display: flex;
                    flex-direction: column;
                    height: 9rem;
                    justify-content: space-between;

                    .heading {
                        font-weight: bolder;
                        font-size: 1.5rem;
                        color: #3d4348;
                    }

                    .text {
                        font-size: larger;
                        font-weight: normal;
                    }
                }
            }
        }
    }


</style>