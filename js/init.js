var questions = [
    "",
    // Question 1
    "I am afraid of being nervous during sex.",

    // Question 2
    "Sexual activity to me is:",

    // Question 3
    "The thought of blood, or other bodily fluids (eg. excrement, vaginal discharge) make me uneasy.",

    // Question 4
    "My arousal during sex can be described as:",

    // Question 5
    "I would consider the most important part of sex:",

    // Question 6
    "I am aware of the risk of pregnancy, and I am aware of the number of birth control options available to both men and women.",

    // Question 7
    "I believe that “pulling out” (pulling out of the vagina before ejactulation to prevent pregnacy) is a reliable method of birth control",

    // Question 8
    "I am aware of the risk of STDs, and I know where I can go to get tested for STDs or to receive sexual health resources",

    // Question 9
    "I feel that if my partner does not orgasm, I am bad at sex.",

    // Question 10
    "I believe that sex hurting for the first time, or first few times (for myself, or my partner) is normal."
];


var choices = [
    [{}],
    //    Question 1
    [{
        score: 1,
        choice: "True"
    }, {
        score: 0,
        choice: "False"
    }],
    //    Question 2
    [{
        score: 1,
        choice: "Insertion only"
    }, {
        score: 2,
        choice: "Oral and insertion"
    }, {
        score: 3,
        choice: "All encompassing of intimate, physical activities"
    }],
    //    Question 3
   [{
        score: 1,
        choice: "True"
    }, {
        score: 0,
        choice: "False"
    }],
    // Question 4 
    [{
        score: 0,
        choice: "I have a hard time staying aroused, or focused during sex"
    }, {
        score: 1,
        choice: "Even though I feel aroused, I am unable to sustain, or get an erection"
    }, {
        score: 2,
        choice: "My arousal level is high -- I ejaculate and / or orgrasm before my parter satisfied."
    }],
    // Question 5
    [{
        score: 1,
        choice: "My own pleasure"
    }, {
        score: 2,
        choice: "My partner's pleasure"
    }, {
        score: 0,
        choice: "Both A and B"
    }],
    // Question 6
    [{
        score: 0,
        choice: "True"
    }, {
        score: 1,
        choice: "Only male options"
    }, {
        score: 2,
        choice: "Only female options"
    }, {
        score: 3,
        choice: "Unsure"
    }],
    // Question 7
    [{
        score: 1,
        choice: "True"
    }, {
        score: 0,
        choice: "False"
    }],
    // Question 8
    [{
        score: 0,
        choice: "True"
    }, {
        score: 1,
        choice: "False"
    }],
    // Question 9
    [{
        score: 1,
        choice: "True"
    }, {
        score: 0,
        choice: "False"
    }],
    // Question 10
    [{
        score: 1,
        choice: "True"
    }, {
        score: 0,
        choice: "False"
    }]
];

var postAnswers = [
    [{}],
    //    Question 1
    [{
        reportHead: 0,
        reportBody: "True"
    }, {
        reportHead: "<p>It's totally normal to feel nervous during your first time.</p>",
        reportBody: ` <p>When you feel nervous, there are a few things that can happen to you that are also incredibly common. Even if this is your first time, or if you and your partner are just starting to have sex regularly, being intimate with someone else can be anxiety-inducing.</p><p>                            People don’t like talking about the nitty-gritty of sex, but a lot of people experience:                        </p>                        <ul>                            <li>Being unable to get hard, or stay hard</li>                            <li>Premature ejaculation</li>                            <li> A loss in arousal</li>                        </ul>                        <p>                        The best thing to do is communicate with your partner. Assure them that it is not them, and shift your focus toward being intimate without the end goal. There’s other things you can do that are pleasurable, and more relaxed.                        </p>`
    }],
    //    Question 2
    [{
        score: 0,
        choice: "Insertion only"
    }, {
        score: 1,
        choice: "Oral and insertion"
    }, {
        score: 2,
        choice: "All encompassing of intimate, physical activities"
    }],
    //    Question 3
   [{
        score: 0,
        choice: "True"
    }, {
        score: 1,
        choice: "False"
    }],
    // Question 4 
    [{
        score: 0,
        choice: "I have a hard time staying aroused, or focused during sex"
    }, {
        score: 1,
        choice: "Even though I feel aroused, I am unable to sustain, or get an erection"
    }, {
        score: 2,
        choice: "My arousal level is high -- I ejaculate and / or orgrasm before my parter satisfied."
    }],
    // Question 5
    [{
        score: 0,
        choice: "My own pleasure"
    }, {
        score: 1,
        choice: "My partner's pleasure"
    }, {
        score: 2,
        choice: "Both A and B"
    }],
    // Question 6
    [{
        score: 0,
        choice: "True"
    }, {
        score: 1,
        choice: "Only male options"
    }, {
        score: 2,
        choice: "Only female options"
    }, {
        score: 3,
        choice: "Unsure"
    }],
    // Question 7
    [{
        score: 0,
        choice: "True"
    }, {
        score: 1,
        choice: "False"
    }],
    // Question 8
    [{
        score: 0,
        choice: "True"
    }, {
        score: 1,
        choice: "False"
    }],
    // Question 9
    [{
        score: 0,
        choice: "True"
    }, {
        score: 1,
        choice: "False"
    }],
    // Question 10
    [{
        score: 0,
        choice: "True"
    }, {
        score: 1,
        choice: "False"
    }]
]
