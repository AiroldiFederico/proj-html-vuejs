<script>

    export default{

        name: "Sec5_MComp",
        
        components: {
            
        },

        data(){
            return{
               
                cards: [
                { path: '../../public/img/logo-1.png', text: 'Praesent volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque.', text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { path: '../../public/img/logo-2.png', text: "Praesent volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque.", text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { path: '../../public/img/logo-3.png', text: 'Praesent volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque.', text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                ]

            }
        },
    }
    
</script>




<template>
    <div id="Sec5_MComp">
        <div id="core" class="col-8 m-auto">

            <div id="id1">CUSTOMER TESTIMONIALS</div>

            <!-- TITLE -->
            <div id="id2"><h1>Trusted<span>Feedback</span></h1></div>

            <!-- text -->
            <div id="id3">We work intensively in search of ideals that can add up in the lives of our customers. This is what moves us and we are greatful for recognition.</div> 

            <!-- cards -->
            <div id="id4">
                <div class="card text-bg-light mb-3" v-for="(item, index) in cards" key="index">
                    <div class="card-body">
                      <img :src="item.path" alt="image logo">
                      <p class="card-text" id="text1">{{item.text}}</p>
                      <p class="card-text">{{item.text2}}</p>
                      <div id="quote"><font-awesome-icon icon="fa-solid fa-quote-right" /></div>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
</template>





<style lang="scss" scoped>

    #Sec5_MComp {
      background-color: #eef4ed;

      #core {

        color: rgb(143, 142, 142);
        text-align: center;
        padding: 6rem 0rem;

        #id1 {
            color: #1a948f;
        }

        #id2 {
            padding: 1rem;
            margin-bottom: 2rem;
            h1 {
                font-weight: bolder;
                font-size: 3rem;
                color: #202427;
                span {
                    background-color: #1a94902a;
                    color: #1a948f;
                    border-radius: 5px;
                    padding: 0rem 0.6rem;
                    margin-left: 0.6rem;
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

        #id4{
            display: flex;
            justify-content: space-evenly;
            .card {
                text-align: start;
                border: solid rgba(194, 194, 194, 0.059) 1px;
                border-radius: 16px;
                padding: 1.5rem;
                width: calc(90% / 3);
                height: 21rem;
                background-color: white !important;
                position: relative;

                #text1 {
                    margin-top: 1.5rem;
                }

                p {                    
                    font-size: larger;
                    font-weight: normal;
                    color: #898f93;
                }

                #quote {
                    color: #c1c8cd;
                    position: absolute;
                    font-size: 2rem;
                    right: 1.5rem;
                    bottom: 1.2rem;
                }
            }
        }

      }
    }


</style>