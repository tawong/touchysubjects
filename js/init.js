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
        score: 1,
        choice: "I have a hard time staying aroused, or focused during sex"
    }, {
        score: 2,
        choice: "Even though I feel aroused, I am unable to sustain, or get an erection"
    }, {
        score: 3,
        choice: "My arousal level is high — I ejaculate and / or orgrasm before my parter satisfied."
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
        score: 1,
        choice: "True"
    }, {
        score: 2,
        choice: "Only male options"
    }, {
        score: 3,
        choice: "Only female options"
    }, {
        score: 4,
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
    [{},
        {
            reportHead: "<p>Insertion isn’t the “end all” of sex, it’s just the beginning!</p>",
            reportBody: `<p>If insertion was the only way to have sex, then those part of the LGBTA+ spectrum would be entirely disregarded. “Sex” can mean a lot of things to many different people, and the best way to develop a healthy perspective toward sex is to view it as an all encompassing experience shared between two (or more!) people. </p>
            <p>Foreplay, which can be anything from kissing, to grinding with or without clothes, is one of the most enjoyable intimate activities to engage with your partner(s). Stimulating arousal with toys, touch, and even words are fun ways to get intimate with each other. Engaging in activities that involve licking, kissing, or touching the genital openings (like the anal hole, or vagina) are also very physically demanding experiences that should not be thought of as “less.” </p>
            <p>
            The most important thing is discussing what sex is to you and your consenting partner(s), what boundaries you have, and what boundaries they may have.</p>
`
    }, {
            reportHead: "<p>Sex is more than just engaging directly with genitalia...</p>",
            reportBody: `<p>Foreplay, which can be anything from kissing, to grinding with or without clothes, is one of the most enjoyable intimate activities to engage with your partner(s). Stimulating arousal with toys, touch, and even words are fun ways to get intimate with each other. Engaging in activities that involve licking, kissing, or touching the genital openings (like the anal hole, or vagina) are also very physically demanding experiences that should not be thought of as “more” or “less.” </p>

            <p>If insertion was the only way to have sex, then those part of the LGBTA+ spectrum would be entirely disregarded. “Sex” can mean a lot of things to many different people, and the best way to develop a healthy perspective toward sex is to view it as an all encompassing experience shared between two (or more!) people. </p>`
    }, {
            reportHead: "<p>You seem to know that sex can be more than just genitalia and insertion. That’s great!</p>",
            reportBody: "<p>The most important thing is discussing what sex is to you and your consenting partner(s), what boundaries you have, and what boundaries they may have.</p>"
    }],
    //    Question 3
   [{
        score: 0,
        choice: "True"
    }, {
        reportHead: "<p>Sex is messy.</p>",
        reportBody: `<p>If you feel uneasy or disgusting, you can help ease this feeling by prepping yourself in advance. While getting around fluids is something that can’t be avoided, you can expect to see these normal ones during your sexual escapades. </p>
        <p>
        Vaginal Discharge </p>
        <ul>
        <li>
        Most women experience vaginal discharge at varying amounts. Sometimes, vaginal discharge can emit a faint odour, and can appear on the underwear and around the opening of the vagina. The colour may be clear or a milky white. However, this is normal and is not your partner neglecting their hygiene. </li>
        </ul>
        <p>
        Blood
        </p>
        <ul>
        <li>

        If your partner is someone that menstruates, usually a cis-woman, there is a possibility that you will be having sex while they are bleeding. If your partner is someone that does not mind in engaging in sex during their cycle, make sure you familiarize yourself with what they are going through. Depending on their cycle, they will bleed a few days each month. However, sometimes it can irregular. Talk to your partner to see what works for them, and you. Read more on sex and women.
        </li>
        </ul>
        <p>

        Excrement</p>
        <ul>
        <li>
        During anal intercourse, there is a possibility that when you pull out of the anal cavity, a bit of excrement, or poop, may leave residue. Although it is important that your partner also practices anal hygiene, it is hard to prepare for spontaneous penetration. During this situation, it is important to stay mature and stop engaging in sexual activity until you properly wash and cleanse the area. Read more on anal sex. </li>
        </ul>
        <p>
        Ejaculation </p>
        <ul>
        <li>
        Ejaculation is the discharge of semen (normally containing sperm) from the male reproductory tract, usually accompanied by an orgasm. Read more on ejaculation.</li>
        </ul>`
    }],
    // Question 4 
    [{},
        {
            reportHead: "<p>It sounds like you might be distracted, or have unrealistic expectations for sex.</p>",
            reportBody: `<p>Sometimes, your perception of what sex is can be different than doing the actual thing. Being actively engaged and communicative with your partner is sometimes awkward, and therefore you might find yourself drifting off due to nervousness, or simply because you are “no longer in the mood.”</p>
<p>
In addition, making sure you set realistic expectations for sex by educating yourself in the fallacies of porn and other masturbatory forms of entertainment is important when you start having sex on a regular basis. Sometimes, consuming too much porn can lead to having unrealistic expectations, and therefore it can skew your level of excitement during intercourse. Communicate with your partner if you think you may be addicted to porn, and do not feel ashamed to seek for help. However sometimes, all you might need is some extra care to grow beyond pornographic expectation. Read up more on masturbation, pornography, and erections.</p>`
    }, {
            reportHead: "<p>It sounds like you might be experiencing nerves, performance anxiety, or something serious.</p>",
            reportBody: `<p>First things first, being unable to sustain an erection, or “getting soft” is something that many men experience. It does not make you any less “normal,” and is very common in all men, especially those that are having sex for the first time, or becoming sexually active.</p>
            <p>Before thinking of erectile dysfunction, try and identity any other external factors that could be interfering with your ability to sustain an erection. Everything from your diet, your alcohol and drug intake, and even your level of physical activity, can influence you ability to hold an erection. On top of this — and perhaps the most important — is that you may go soft due to being nervous. Building sexual confidence is important, and while your partner may feel discouraged, communicate with them to work toward getting hard again, or try again another time. </p>
            <p>
            Lastly, if you think you may have a serious issue with getting and maintaining an erection, see a doctor for a physical examination and a blood test. You may have chronic erectile dysfunction, or impotence. Read more about erections.</p>`
    }, {
            reportHead: "<p>It sounds like you might be very sensitive, or just excited.</p>",
            reportBody: `<p>Early ejaculation may make you feel like “less” of a man, but in reality, it is very common and also very normal. When you are about to ejaculate, signals are sent to your spinal cord and brain. Once you have reached a certain sexual excitement level, your reproductive organs release sperm, which is ejaculation. After ejactulation, it is common for the penis to get soft. This may be a source of frustration for your partner. </p>
            <p>Learning to control your excitement in a healthy way with yourself, or your partner, should be the first step in addressing premature or early ejaculation. Read more about ejaculation.</p>`
    }],
    // Question 5
    [{},
     {
        reportHead: "<p>Feeling good is great...</p>",
        reportBody: "<p>And you should be keeping your own satisfaction in mind when engaging in sexual intercourse, but remember that you are sharing this experience with someone else. Talking to your partner(s) about what they like, and what feels good for them, even though it’s awkward, can enhance your confidence and therefore, the sex itself! However, when in doubt, don’t be a “selfish lover.” Try and find activities and positions that are both satisfying for you, and your partner.</p>"
    }, {
        reportHead: "<p>I’m sure your partner(s) feels great...</p>",
        reportBody: `<p>But don’t forget about yourself! Engaging in sexual intercourse is a shared experience, and making it all about them can build up pressure to perform, or guilt on their end. Talking to your partner(s) about what they like, and what feels good for them, even though it’s awkward, can enhance your confidence and therefore, the sex itself! Try and find activities and positions that are both satisfying for you, and your partner.</p>`
    }, {
        score: 2,
        choice: "Both A and B"
    }],
    // Question 6
    [{},
     {
        reportHead: "<p>It seems like you know enough about contraception...</p>",
        reportBody: `<p>It's always great to be informed, you can read up on birth control options <a href='#'>here</a>.</p>`
    }, {
        reportHead: "<p>Knowing contraception options available for you and other men is a good starting point...</p>",
        reportBody: "<p>But you should read up on other forms of birth control to assist your partner and be supportive. Read more on female birth control options <a href='#'>here</a>."
    }, {
        reportHead: "<p>Knowing contraception options available for women is a good starting point...</p>",
        reportBody: "<p>But you should read up on other forms of birth control to assist your partner, and to be proactive in your own safety. Read more on male birth control options <a href='#'>here</a></p>."
    }, {
        reportHead: "<p>Knowing what contraception options you have available to you and your partner(s) is important.</p>",
        reportBody: "<p> Read more on male birth control options <a href='#'>here</a>.</p>"
    }],
    // Question 7
    [{
        score: 0,
        choice: "True"
    }, {
        reportHead: "<p>Pulling out can work, but it is not reliable or recommended.</p>",
        reportBody: `<p>The “pull-out-method” is a form of contraception that involves pulling the penis out of the vagina before ejaculation. However, pulling out can impose a risk due to these reasons:</p>
        <ul>
        <li>
        It is dependent on you, and your ability to judge when you will ejaculate.</li><li> 
        Pre-cum, the fluid that comes out during sexual stimulate, may contain sperm from a previous ejaculation if you have not peed since. This, in rare cases, can lead to pregnancy.</li>
        <li>
        It does not protect you against STDS.</li>
        </ul>`
    }],
    // Question 8
    [{
        score: 0,
        choice: "True"
    }, {
        reportHead: "<p>Knowing how, and where to get tested is important.</p>",
        reportBody: "<p>You should be getting tested, ideally, each time you engage in protected sex with a new partner. Knowing where to get tested, or find advice from a professional should be something that is part of your regular sexual journey. Variety of youth clinics in Canada provide free testing services, and they are always discreet and confidential.</p>"
    }],
    // Question 9
    [{
        score: 0,
        choice: "True"
    }, {
        reportHead: "<p>You are not bad at sex.</p>",
        reportBody: "<p>You’re just starting, and that means sex is a learning process. However, it is important to remember that having sex is enough of an experience itself — think of sex as enjoying each other, vs. the end “goal” of orgrasm. If you partner(s) do not orgrasm, and they would like to, just make sure to put in the effort to try your best. Find ways that work for you, and for them. Exploring yourself and other people safely is key.</p>"
    }],
    // Question 10
    [{
        score: 0,
        choice: "True"
    }, {
        reportHead: "<p>Sex shouldn’t hurt.</p>",
        reportBody: "<p>If sex hurts for you or your partner, it is probably because either of you do not feel entirely prepared yet. This unpreparedness may result in certain orifices being dry, like the vagina which naturally lubricates itself. Your partner may also feel more comfortable using a water-based lubricant, which is also essential to anal sex. Read more about genital orifices <a href='#'>here</a>.</p>"
    }]
]
