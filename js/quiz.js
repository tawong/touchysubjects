var pathID = 1;

Vue.component('path-head', {
    props: ['headers'],
    template: '<h6>{{headers.text}}</h6>'
})

Vue.component('choice-head', {
    props: ['choice'],
    template: `<div class="choice" v-on:click="$emit('update-path')">{{choice}}</div>`
})

Vue.component('feedback', {
    props: ['status'],
    template: `<div id="feedbackitem" class="feedback"><slot></slot></div>`
})

Vue.component('choice-body', {
    props: ['choice', 'link', 'status', 'image', 'ivideo'],

    template: `<div class="choice" v-on:click="emitLink"><p class='title'>{{choice}}</p></div>`,
    methods: {
        emitLink: function () {
            this.$emit('update-path', [this.link])
        }
    }
})


var vm = new Vue({
    el: "#app",
    data: {
        prompt: questions[1],
        feedbackStatus: "",
        globalurl: 0,
        vidSrc: "startVid",
        headerList: [
            {
                id: 0,
                text: "Header 1"
            },
            {
                id: 1,
                text: "Header 2"
            },
            {
                id: 2,
                text: "Header 3"
            }
        ],
        choiceList2: [
            {
                option: choices[pathID][0].choice,
                link: choices[pathID][0].score
            },
            {
                option: choices[pathID][1].choice,
                link: choices[pathID][1].score,
            }
//            ,
//            {
//                option: choices[pathID][2].choice,
//                link: choices[pathID][2].score,
//            }
//            },
//            {
//                option: pathAnswers[pathID][2].choice,
//                link: pathAnswers[pathID][2].link,
//                status: pathAnswers[pathID][2].status
//            }
        ]
    },
    methods: {
        updateMe: function (data) {



            //Assign emitted data to variables
            var url = data[0];
            var status = "status";
            var videodata = "videodata";
            
            pathID++;

//            console.log(url + status + videodata)

//
//            console.log("update called <" + url + status + ">");

            //DEBUG
            console.log("url: " + url);
//            console.log("status: " + status);
//            console.log("video: " + videodata);



            //Update choices for next question while video is playing in the front
            window.setTimeout(function () {

            vm.choiceList2 = [
                {
                        option: choices[pathID][0].choice,
                        link: choices[pathID][0].score
                },
                {
                        option: choices[pathID][1].choice,
                        link: choices[pathID][1].score
                }
            ];
            vm.prompt = questions[pathID];

            }, 400);







            console.log("videodata " + videodata + " was updated")

            //Update the message
            //            this.message = pathHeaders[pathID];
            //            this.choiceList = pathAnswers[pathID];




        }
    }
})

window.addEventListener("load", function (event) {

    var scene = document.getElementById("scene");
    var feedbackitem = document.getElementById("feedbackitem");
    var seeker = document.getElementById("seekbar");
    var overlay = document.getElementById("overlay");
    var note = document.getElementById("notepad-overlay");
    var cname = document.getElementById("character-name");




    //do work
});
