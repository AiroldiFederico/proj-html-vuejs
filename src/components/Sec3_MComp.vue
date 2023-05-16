<script>

    export default{

        name: "Sec3_MComp",
        
        components: {
            
        },

        data(){
            return{
               
                images: [
                { path: '../../public/img/project-1.jpg', text: 'Academic professional program in social media', flipped: false, text2:"Master social media marketing with our professional academic program. Learn the latest strategies, gain insights from industry experts, and elevate your career in this dynamic field." },
                { path: '../../public/img/project-2.jpg', text: "President's speech at the annual meeting", flipped: false, text2:"Be inspired by the President's annual meeting speech. Gain valuable insights into our achievements, future goals, and strategic vision. Join us for a memorable event that shapes our organization's success." },
                { path: '../../public/img/project-3.jpg', text: 'International business trip in Shanghai', flipped: false, text2:"Join our international business trip to Shanghai. Explore the dynamic business environment, build valuable connections, and discover new opportunities in this global economic hub." },
                { path: '../../public/img/project-4.jpg', text: 'Technology workshop with education theme', flipped: false, text2:"Join our technology workshop with an education theme to explore cutting-edge innovations and transformative approaches in the field of learning. Engage with industry experts." },
                { path: '../../public/img/project-5.jpg', text: 'Donation of clothes and food to the partner NGO', flipped: false, text2:"Support our partner NGO by donating clothes and food. Make a difference in the lives of those in need and bring hope to our community." },
                { path: '../../public/img/project-6.jpg', text: 'Confraternization of the procurement team', flipped: false, text2:"Unite and celebrate with our procurement team. Join us for a joyful confraternization event to strengthen relationships and recognize the outstanding contributions of our dedicated professionals." }
                ]

            }
        },

        methods: {
            flipCard(index) {
                this.images[index].flipped = !this.images[index].flipped;
            }
        }

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
            <div id="id3">

                <div class="card text-bg-dark" v-for="(img, index) in images" :key="index" v-bind:class="{ 'flip': img.flipped }" @mouseenter="flipCard(index)" @mouseleave="flipCard(index)">
                    <div class="card-inner">
                      <div class="card-front">
                        <img :src="img.path" class="card-img" alt="img">
                        <h4 class="card-title">{{ img.text }}</h4>
                      </div>
                      <div class="card-back">
                        <div class="text-card-back">
                            <h4 class="card-title">{{ img.text }}</h4>
                            <p>{{ img.text2 }}</p>
                        </div>
                      </div>
                    </div>
                </div>

            </div>


        </div>
    </div>
</template>





<style lang="scss" scoped>

    #Sec3_MComp {
      background-color: #111117;
      padding: 7rem 0rem;

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
                background-color: #0384843a;
                padding: 0rem 1rem;
                border-radius: 5px;
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

        #id3 {

            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            margin-top: 2.5rem;
            height: 50rem;
   

            .card {
    
                width: calc(80% / 3);
                position: relative;
                border-radius: 0.7rem;
                aspect-ratio: 1;
                height: 22.6rem;

                img {
                    filter: brightness(0.4);
                    border-radius: 0.7rem;
                }

                .card-body {
                    margin-top: 17rem;
                }

                .card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                  }
                
                .card-front,.card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                }
            
                .card-front {
                    z-index: 1;
                    transform: rotateY(0deg);

                    h4 {
                        position: relative;
                        bottom: 5.5rem;
                        left: 1rem;
                        font-weight: bold;
                        font-size: 1.6rem;
                        width: 90%;
                    }

                }
            
                .card-back {
                    background-color:#0384843d;
                    color: white;
                    transform: rotateY(180deg);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0.7rem;

                    .text-card-back {

                        padding: 1rem;
                        margin-top: 4rem;

                        h4 {
                            font-weight: bold;
                            font-size: 1.6rem;
                            width: 90%;
                            text-align: start;
                        }
    
                        p {
                            text-align: start;
                            font-weight: normal;
                            font-size: large;
                            margin-top: 4rem;
                            margin-bottom: 2rem;
                        }
                    }

                }
            
                &.flip {
                    .card-inner {
                        transform: rotateY(180deg);
                    }
                }

            }
        }

      }
    }

    .green-bg {
        background-color: #03848431;
        border-radius: 5px;
    }

</style>