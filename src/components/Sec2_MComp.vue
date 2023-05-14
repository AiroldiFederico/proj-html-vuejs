<script>

    export default{

        name: "Sec2_MComp",
        
        components: {
            
        },

        data(){
            return{
               


            }
        },
    }
    
</script>




<template>
    <div id="Sec2_MComp" class="col-12 d-flex">
        <div class="col-2"></div>

        <!-- Left -->
        <div class="col-4" id="left">

            <div id="id1">ABOUT THE NETWORK</div>

            <div id="id2"><h1><span>The</span> Company</h1></div>

            <div id="id3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti similique ratione quos.</div>

            <div id="id4">
                <div>
                    <div class="number">0</div>
                    <div class="heading">Employees</div>
                    <div class="text">Lorem ipsum dolor sit amet</div>
                </div>

                <div>
                    <div class="number">0</div>
                    <div class="heading">Partners</div>
                    <div class="text">Lorem ipsum dolor sit amet</div>
                </div>

                <div>
                    <div class="number">0</div>
                    <div class="heading">Customers</div>
                    <div class="text">Lorem ipsum dolor sit amet</div>
                </div>
            </div>

            <div id="id5">
                <button type="button" class="btn" id="btn1">GET IN TOUCH</button>
                <button type="button" class="btn btn-outline-secondary" id="btn2">READ MORE</button>
            </div>


        </div>

        <!-- Right -->
        <div class="col-6" id="right">
      
        </div>

    </div>
</template>





<style lang="scss" scoped>

    #Sec2_MComp {

        height: 50rem;
        width: 100%;


            #left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 2rem;
                padding-right: 3rem;

                #id1 {
                    color: #038483;
                }

                #id2 {
                    h1 {
                        font-weight: bolder;
                        word-spacing: -10px;

                        span {
                            color: #038483;
                            background-color: #03848432;
                            padding: 0.1rem 0.8rem;
                            border-radius: 4px;
                        }
                    }
                }

                #id3 {
                    font-weight: normal;
                    font-size: 1.3rem;
                    color: #038483;
                }

                #id4 {
                    display: flex;
                    justify-content: space-between;
                    gap: 5rem;

                    .number {
                        font-size: 3rem;
                        color: #05adad;
                        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    }

                    .heading {
                        font-size: 1.5rem;
                    }

                    .text {
                        font-weight: normal;
                        font-size: 1.2rem;
                        color: #038483;
                    }
                }

                #id5 {

                    #btn1 {
                        
                        background-color: #038483;
                        font-weight: bold;
                        color:#e4eae6;
                        padding: 10px 15px;
                        border-radius: 3px;
                        margin-right: 1rem;

                        &:hover {
                            color: rgb(41, 41, 41);
                        }
                        
                    }

                    #btn2 {
                        font-weight: bold;
                        padding: 10px 15px;
                        border-radius: 3px;
                        margin-right: 1rem;
                        color: #038483;
                        border-color: #038483;

                        &:hover {
                            background-color: #038483;
                            color:#e4eae6;
                        }
                    }



                }
                
            }

            #right {              
                background-image: url('../../public/img/about-5.jpg');
                background-position: center;
            }

        
    }


</style>