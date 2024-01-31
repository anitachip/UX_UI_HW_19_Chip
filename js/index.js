console.log("Your index.js file is loaded correctly!");

// work subsections transform
$(".work-subsection").mouseenter(function () {
    $(this).css("transform", "scale(1.12)");
});

$(".work-subsection").mouseleave(function () {
    $(this).css("transform", "");
});

// home page welcome transform
$(".homepage-welcome").mouseenter(function () {
    $(this).css("transform", "scale(1.12)");
});

$(".homepage-welcome").mouseleave(function () {
    $(this).css("transform", "");
});


// about page welcome transform
$(".aboutMe-card").mouseenter(function () {
    $(this).css("transform", "scale(1.12)");
});

$(".aboutMe-card").mouseleave(function () {
    $(this).css("transform", "");
});

// user research transform
$(".userResearch-card").mouseenter(function () {
    $(this).css("transform", "scale(1.12)");
});

$(".userResearch-card").mouseleave(function () {
    $(this).css("transform", "");
});