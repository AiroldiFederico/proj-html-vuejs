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
        <div id="content" >

            <!-- Topper Header -->
            <div id="topper" class="col-8 m-auto">
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
                <div id="navbar" class="col-8 m-auto">
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
                <div id="HeadCore" class="col-8 m-auto">
                    <div class="col-4">
                        <div id="id1">HUMAN RESOURCES</div>
                        <div><h1>Get More <span>Productivity</span> </h1></div>
                        <div id="id2">Planning, recruitment and selection process and performance evaluation of employees.</div>
                        <div id="id3">
                            <button type="button" class="btn" id="btn1">GET IN TOUCH</button>
                            <button type="button" class="btn btn-outline-secondary" id="btn2">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>





<style lang="scss" scoped>

    #HeaderComp {

        background-color: #21333e;


        #content{
            
            
            #topper {
                color:#babdbe;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.8rem 0;

                #right {

                    ul {
                        display: flex;
                        gap: 1rem;
                    }
                }

            }

            #core {

                height: 30rem;
                padding-top: 1rem;
                display: flex;
                flex-direction: column;
                position: relative;
                z-index: 1;

                //background settings
                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: url('../img/bg-4.jpg');
                    background-position: top;
                    background-size: cover;
                    filter: brightness(0.5);
                    z-index: -1;
                }


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
                                padding: 10px 4px 10px 26px;
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
                            padding: 10px 15px;
                            border-radius: 3px;

                            &:hover {
                                color: rgb(41, 41, 41);
                            }
                        }
                    }

                }

                #HeadCore {
                    color:#babdbe;
                    height: 90%;
                    display: flex;
                    align-items: center;     
                
                    
                    div {

                        #id1 {
                            color: #00a8a8;
                        }

                        #id2 {
                            font-family:Arial, Helvetica, sans-serif;
                            font-weight: normal;
                            margin: 1rem 0;
                            font-size: larger;
                        }

                        #id3 {

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


                        h1 {
                            font-weight: bolder;
                            color: white;
                            font-size: 3.5rem;

                            span {

                                display: inline-block;
                                background-color: #006565;
                                line-height: 0.5;
                                padding: 0 0rem;

                            }
                        }
                    }
                }

            }

        }



    }

</style>