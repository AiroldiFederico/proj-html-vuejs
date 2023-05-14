<script>

    export default{

        name: "HeaderComp",
        
        components: {
            
        },

        data(){
            return{
               


            }
        },
    }
    
</script>




<template>
    <div id="HeaderComp" class="col-12 ">
        <div id="content" class="col-8 m-auto" >

            <!-- Topper Header -->
            <div id="topper">
                <!-- left -->
                <div id="left">
                    <span>
                        <font-awesome-icon icon="fa-solid fa-clock" />
                        Open Hours: Mon - Sat - 9:00 - 18:00
                    </span>
                </div>

                <!-- Right -->
                <div id="right">
                    <span>
                        <ul>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-phone" />
                                +1 (305) 1234-5678
                            </li>

                            <li>
                                <font-awesome-icon icon="fa-solid fa-envelope" />
                                hello@example.com
                            </li>

                            <li>
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            </li>

                            <li>
                                <font-awesome-icon icon="fa-brands fa-twitter" />
                            </li>

                            <li>
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                            </li>
                        </ul>
                    </span>
                </div>
            </div>

            <!-- Core Header -->
            <div id="core">
                <!-- Navbar -->
                <div id="navbar">
                    <!-- left -->
                    <div id="left">
                        <h4>
                            <span>NEXT</span>
                            GEN
                        </h4>
                    </div>

                    <!-- right -->
                    <div  id="right">
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>PROJECTS</li>
                            <li style="color: #038483;">PROCESS</li>
                            <li>TESTIMONIALS</li>
                            <li><font-awesome-icon icon="fa-solid fa-user"/></li>
                            <li><button type="button" class="btn">GET IN TOUCH</button></li>
                        </ul>

                    </div>
                </div>

                <!-- core -->
                <div>
                    
                </div>
            </div>


        </div>
    </div>
</template>





<style lang="scss" scoped>

    #HeaderComp {
        border: solid rgb(186, 186, 0) 2px;
        background-color: #21333e;

        #content{
            
            
            #topper {
                color:#babdbe;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.5rem 0;

                #right {

                    ul {
                        display: flex;
                        gap: 1rem;
                    }
                }

            }

            #core {


                margin-top: 1rem;

                #navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    #left {
                        h4 {
                            font-weight: bold;
                            color:#babdbe;

                            span {
                                color: #038483;
                                background-color: #0384843b;
                                padding: 2px 4px 2px 16px;
                                border-radius: 100px 0px 0px 100px;
                            }
                        }
                    }

                    #right {
                        color:#e4eae6;

                        ul {
                            display: flex;
                            align-items: center;
                            gap: 1rem;
                        }

                        .btn {
                            background-color: #038483;
                            font-weight: bold;
                            color:#e4eae6;

                            &:hover {
                                color: rgb(41, 41, 41);
                            }
                        }
                    }

                }

            }
        }



    }

</style>