$(".js-rotating").Morphext({
    animation: "flipInX",
    speed: 4000,
    complete: function () {
        // console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
    }
});

$(".js-fade").Morphext({
    animation: "fade",
    speed: 5000,
    complete: function () {
        // console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
    }
});

console.log("morphtext is working!");