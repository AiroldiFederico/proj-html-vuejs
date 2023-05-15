<script>

    export default{

        name: "Sec3_MComp",
        
        components: {
            
        },

        data(){
            return{
               
                images: [
                { path: '../../public/img/project-1.jpg', text: 'Academic professional program in social media' },
                { path: '../../public/img/project-2.jpg', text: "President's speech at the annual meeting" },
                { path: '../../public/img/project-3.jpg', text: 'International business trip in Shanghai' },
                { path: '../../public/img/project-4.jpg', text: 'Technology workshop with education theme' },
                { path: '../../public/img/project-5.jpg', text: 'Donation of clothes and food to the partner NGO' },
                { path: '../../public/img/project-6.jpg', text: 'Confraternization of the procurement team' }
                ]

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
            <div id="id3">

                <div class="card text-bg-dark" v-for="(img, index) in images" key="index">
                    <img :src="img.path" class="card-img" alt="...">
                    <div class="card-img-overlay card-body">
                      <h4 class="card-title">{{img.text}}</h4>
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

        #id3 {

            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 2rem;
            margin-top: 2rem;

            .card {
    
                width: calc(90% / 3);

                img {
                    filter: brightness(0.4);
                }

                .card-body {
                    margin-top: 17rem;
                }

                h4 {
                    font-weight: bold;
                    font-size: 1.8rem;
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