// Challenge Jedi name

// function jediName(firstName, lastName) {
// 	console.log(lastName[0] + lastName[1] + lastName[2] + firstName[0] + firstName[1]);
// }


// jediName('Beyonce', 'Knowles');

//--------------------------------------------------------------------

// Challenge Beyond

// function beyond(num){
// 	if(num === Infinity){
// 		console.log ("And beyond");
// 	} 
// 	else if( num >= 1) {
// 		console.log("To infinity");
// 	}
// 	else if (num < 0) {
// 		console.log("To negative infinity");
// 	}
// 	else if (num === 0) {
// 		console.log("Staying home");
// 	}
// }

// beyond(Infinity);

//---------------------------------------------------------------------

//Cracking the code
	
// function decode(string) {
// 	let result = '';

// 	for(i=0; i<string.length;i+=6) {
// 		if(string[i] === 'a') {
// 		result += string[i+1];
// 		}
// 		else if(string[i] === 'b') {
// 		result += string[i+2];
// 		}
// 		else if(string[i] === 'c') {
// 		result += string[i+3];
// 		}
// 		else if(string[i] === 'd') {
// 		result += string[i+4];
// 		}
// 		else {
// 		result += " ";
// 		}

// 		console.log(result);
// 	}
// }


// decode('craft block argon meter bells brown croon droop');


//How Many Days

// function dayGenerator(month){
// 	switch (month) {
// 		case "January":
// 		case "March":
// 		case "May": 
// 		case "July":
// 		case "August":
// 		case "October":
// 		case "December":
// 			console.log(`${month} has 31 days.`);
// 			break;
		
// 		case "June":
// 		case "November":
// 		case "April":
// 		case "September":
// 			console.log(`${month} has 30 days.`);
// 			break;		
		
// 		case "February":
// 			console.log(`${month} has 28 days.`);
// 			break;

// 		default:
// 			console.log("Please enter a valid month.");
// 			break;
// 	}
// }



// dayGenerator("Cookies");


//-------------------------------------------------------------


// function RockPaperScissors(userChoice){
//     var computer = 1 + Math.floor((Math.random()*3));
    

//     if(userChoice === computer) {
//     	console.log("Tie!");
//     }
//     else if((userChoice === 1 && computer ===2) || (userChoice === 2 && computer ===3) || (userChoice === 3 && computer ===1))  {
//     	console.log("You Won!");
//     }
//     else if((userChoice === 2 && computer ===1) || (userChoice === 3 && computer ===2) || (userChoice === 1 && computer ===3)) {
//     	console.log("You Lost!");
//     }
    
//     else {
//     	console.log("Please enter a correct value");
//     }



  
// }

// RockPaperScissors(2);
//____________________________________________________

//Repeat a String

function repeatString(str,counter) {

	if(isNaN(str) || counter < 0 ) {
		throw new Error("counter must be a number & cannot be negative.");
	}
	console.log(str.repeat(counter)); 
	

}


try{
	repeatString("hi", "hello");
}
catch(e) {
	console.log(e.message);
}






































