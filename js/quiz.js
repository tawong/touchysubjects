var pathID = 1;

Vue.component('path-head', {
    props: ['headers'],
    template: '<h6>{{headers.text}}</h6>'
})

Vue.component('choice-head', {
    props: ['choice'],
    template: `<div class="choice" v-on:click="$emit('update-path')">{{choice}}</div>`
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
        progress: pathID,
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
            }]
    },
    methods: {
        updateMe: function (data) {



            //Assign emitted data to variables
            var url = data[0];
            var status = "status";
            var videodata = "videodata";

            var promptEl = document.getElementById("prompt");

            $(".choice").css("opacity", 0);
            promptEl.style.opacity = 0;

            if (url != 0) {

                $("#report-stream").append("<div class='report-box'><div class='report-head'>" + postAnswers[pathID][url].reportHead + "</div><div class='report-body'>" + postAnswers[pathID][url].reportBody + "</div></div>");
            }
            console.log(postAnswers[pathID][url].reportBody);
            pathID++;

            //DEBUG
            console.log("url: " + url);

            if (pathID <= 10) {
                vm.progress = pathID;

                window.setTimeout(function () {

                    if (pathID == 2 || pathID == 4 || pathID == 5) {
                        vm.choiceList2 = [
                            {
                                option: choices[pathID][0].choice,
                                link: choices[pathID][0].score
                },
                            {
                                option: choices[pathID][1].choice,
                                link: choices[pathID][1].score
                },
                            {
                                option: choices[pathID][2].choice,
                                link: choices[pathID][2].score
                }];

                    } else if (pathID == 6) {
                        vm.choiceList2 = [
                            {
                                option: choices[pathID][0].choice,
                                link: choices[pathID][0].score
                },
                            {
                                option: choices[pathID][1].choice,
                                link: choices[pathID][1].score
                },
                            {
                                option: choices[pathID][2].choice,
                                link: choices[pathID][2].score
                },
                            {
                                option: choices[pathID][3].choice,
                                link: choices[pathID][3].score
                }];

                    } else {
                        vm.choiceList2 = [
                            {
                                option: choices[pathID][0].choice,
                                link: choices[pathID][0].score
                },
                            {
                                option: choices[pathID][1].choice,
                                link: choices[pathID][1].score
                }];
                    }


                    vm.prompt = questions[pathID];


                    window.setTimeout(function () {
                        $(".choice").css("opacity", 1);
                        promptEl.style.opacity = 1;
                    }, 600);

                }, 400);

            } else {
                $("#results").fadeIn();
            }
        }
    }
});

window.addEventListener("load", function (event) {

    var scene = document.getElementById("scene");
    var feedbackitem = document.getElementById("feedbackitem");
    var seeker = document.getElementById("seekbar");
    var overlay = document.getElementById("overlay");
    var note = document.getElementById("notepad-overlay");
    var cname = document.getElementById("character-name");

    var promptEl = document.getElementById("prompt");

    $(".choice").css("opacity", 1);
    promptEl.style.opacity = 1;


    //do work
});
