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
        }



    }

</style>