$(document).ready(function(){
	var done = false;
	$('.invoker img').click(function() {
		if (!done) {
			$(this).css({'border-radius':'50%','transform':'rotate(360deg)'});
		}
		else{
			setTimeout( function(){
    			$('.invoker img').css('border-radius','5%');
      			 },800);
			$(this).css('transform','rotate(-360deg)');
		};
		var input = new Array;
		var i = 0; 	
		$(window).keypress(function(e) {	
	       var key = e.which;// q:113 w:119 e:101 r:114
	       var sunstrike = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/3f/Invo_ability_sunstrike_04.mp3');//eee 303
	       var blast = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2c/Invo_ability_deafeningblast_02.mp3');//qwe 333
	       var meteor = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/48/Invo_ability_chaosmeteor_04.mp3');//eew 321
	       var spirit = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2a/Invo_ability_forgespirit_04.mp3');//eeq 315
	       var alacrity = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/0f/Invo_ability_alacrity_05.mp3');//wwe 339
	       var tornado = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2a/Invo_ability_tornado_04.mp3');//wwq 351
	       var emp = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/03/Invo_ability_emp_07.mp3');//www 357
	       var cold = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/69/Invo_ability_coldsnap_02.mp3');//qqq 339
	       var ghost = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/81/Invo_ability_ghostwalk_04.mp3');//qqw 345
	       var wall = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/4c/Invo_ability_icewall_02.mp3');//qqe 327
	       var begin = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/e/e3/Invo_spawn_03.mp3');
	       var error = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b2/Invo_failure_02.mp3');
	       //do stuff with "key" here...
	       // if (key == 113) {
	       // 	input[i] = key;
	       // };
	       // alert(input[input.length-1]);
	       	if (key == 113 || key == 119 || key == 101) {
	       		input[i] = key;
	       		i++;
	       	} 
	      	else if(key == 114 && done){
		       	var lg = input.length;
		       	if (lg > 2) {
		       		var total = input[lg-1]+input[lg-2]+input[lg-3];
		       		switch(total){
		       			case 303:
		       			sunstrike.play();
		       			break;
		       			case 333:
		       			blast.play();
		       			break;
		       			case 321:
		       			meteor.play();
		       			break;
		       			case 315:
		       			spirit.play();
		       			break;
		       			case 339:
			       			if (input[lg-1] == 113 && input[lg-2] == 113) {
			       				cold.play();
			       			}
			       			else{
			       				alacrity.play();
			       			};
			       			break;
			       		case 351:
			       		tornado.play();
			       		break;
			       		case 357:
			       		emp.play();
			       		break;
			       		case 345:
			       		ghost.play();
			       		break;
			       		case 327:
			       		wall.play();
			       		break;
			       		default:
			       		error.play();
		       		}
		       	}

				else{
					error.play();
				}

		       	input.length = 0;
		       	i = 0;

		    };
		});
		done = !done;
	});

});



