$(".js-rotating").Morphext({
    animation: "flipInX",
    speed: 4000,
    complete: function () {
        // console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
        console.log("js is rotating");
    }
});

$(".js-fade").Morphext({
    animation: "fade",
    speed: 5000,
    complete: function () {
        // console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
    }
});

console.log("morphtext.js is loaded!");

// <!-- <h2>I am a <span class="js-fade">developer, designer, strategist</span></h2> -->
