let r = 0;
let p = 0;
let s = 0;

function rock(){
    let bot = Math.floor(Math.random() * 3);
    r = 1;
    p = 0;
    s = 0;
	if(bot === 0){
		$(".computerChoice").text("Rock!");
		$(".result").text("Draw...");
    }
    if(bot === 1){
		$(".computerChoice").text("Paper!");
		$(".result").text("You Lose...");
    }
    if(bot === 2){
		$(".computerChoice").text("Scissors!");
		$(".result").text("You Win!");
		confetti();
    }
    $(".userChoice").text($(".userChoice").text().replace("", "Rock!"));
    $(".rock").prop("disabled",true);
    $(".paper").prop("disabled",true);
    $(".scissors").prop("disabled",true);
	setInterval(redo, 3500)
	setInterval(time3, 1000)
	setInterval(time2, 2000)
	setInterval(time1, 3000)
}


function paper(){
let bot = Math.floor(Math.random() * 3);
    r = 1;
    p = 0;
    s = 0;
    if(bot === 0){
		$(".computerChoice").text("Rock!");
		$(".result").text("You Win!");
		confetti();
    }
    if(bot === 1){
		$(".computerChoice").text("Paper!");
		$(".result").text("Draw...");
    }
    if(bot === 2){
		$(".computerChoice").text("Scissors!");
		$(".result").text("You Lose...");
    }
	$(".userChoice").text("Paper!");
    $(".rock").prop("disabled",true);
    $(".paper").prop("disabled",true);
    $(".scissors").prop("disabled",true);
	setInterval(redo, 3500)
	setInterval(time3, 1000)
	setInterval(time2, 2000)
	setInterval(time1, 3000)
}


function scissors(){
let bot = Math.floor(Math.random() * 3);
    r = 1;
    p = 0;
    s = 0;
	if(bot === 0){
		$(".computerChoice").text("Rock!");
		$(".result").text("You Lose...");
    }
    if(bot === 1){
		$(".computerChoice").text("Paper!");
		$(".result").text("You Win!");
		confetti();
    }
    if(bot === 2){
		$(".computerChoice").text("Scissors!");
		$(".result").text("Draw...");
	}
	$(".userChoice").text("Scissors!");
    $(".rock").prop("disabled",true);
    $(".paper").prop("disabled",true);
    $(".scissors").prop("disabled",true);
	setInterval(redo, 3500)
	setInterval(time3, 1000)
	setInterval(time2, 2000)
	setInterval(time1, 3000)
}

function redo(){
	location.reload();
}

function time3(){
	$(".timer").text("1");
}

function time2(){
	$(".timer").text("2");
}

function time1(){
	$(".timer").text("3");
}
