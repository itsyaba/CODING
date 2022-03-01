$("h1").text("YABA");

$("img").attr("src")  //to get the source  element we use this 
$("a").attr("href", "htps://www.google.com");



$(".btn").click(function () {   //Event Listener
    $("h1").css("color", "blue ")
    $("button").css("padding", "30px")
})

$("input").keypress(function (event) {
    console.log(event.key); //to get the number what we write down on the browser
})
