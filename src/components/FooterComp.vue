<script>

    export default{

        name: "FooterComp",
        
        components: {
            
        },

        data(){
            return{
               


            }
        },
    }
    
</script>




<template>
    <div id="FooterComp" class="col-12">
        <div id="core" class="col-8 m-auto">
            <!-- FORM -->
            <div id="form" class="col-7">

                <div id="id1">SEND A MESSAGE</div>
                
                <!-- Title -->
                <div id="id2"><h2>Get in <span>Touch</span></h2></div>

                <!-- Text -->
                <div id="id3">We will respond to your message as soon as possible</div>

                <!-- form -->
                <form class="row g-3">
                    <div class="col-md-6">
                      <input type="text" class="form-control" id="inputname" placeholder="Name">
                    </div>
                    <div class="col-md-6">
                      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                    </div>
                    <div class="col-md-6">
                    <input type="number" class="form-control" id="inputNumber" placeholder="Phone">
                    </div>
                    <div class="col-md-6">
                        <select id="inputState" class="form-select">
                          <option selected>More info</option>
                          <option>Italy</option>
                          <option>Spain</option>
                          <option>France</option>
                          <option>Germany</option>
                        </select>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control"  id="floatingTextarea2" placeholder="Message" style="height: 100px"></textarea>                        
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn" id="btn1">SEND</button>
                    </div>
                </form>

            </div>

            <!-- CONTACT -->
            <div id="contact" class="col-4">

            </div>

        </div>
    </div>
</template>





<style lang="scss" scoped>

    #FooterComp {
        background-color: #111117;
        padding: 8rem;
        color: white;

        #core {


            #form {

                #id1 {
                    color: #02a0a4;
                    margin-bottom: 2rem;
                }

                #id2 {
                    margin-bottom: 1.4rem;

                    h2 {
                        font-size: 3rem;
                        font-weight: bolder;

                        span {
                            background-color: #02a1a443;
                            padding: 0.1rem 0.5rem;
                            border-radius: 4px;
                        }
                    }
                }

                #id3 {
                    margin-bottom: 3rem;
                    font-size: larger;
                    font-weight: normal;
                    color: #8b8b93;
                }

                .form-control, .form-select {
                    background-color: #23232d;
                    border: none;
                    color: #707079;
                    line-height: 2.5rem;
                    border-radius: 2px;
                }

                #btn1 {
                                
                    background-color: #038483;
                    font-weight: bold;
                    color:#e4eae6;
                    padding: 10px 25px;
                    border-radius: 3px;
                    margin-right: 1rem;

                    &:hover {
                        color: rgb(41, 41, 41);
                    }
                    
                }

            }

            #contact {

            }

        }
    }

</style>