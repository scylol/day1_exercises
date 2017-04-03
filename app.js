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
	
function decode(string) {
let result_array = string.split(" ");
	for(i=0; i<string.length;i++) {
		if(string[0] === 'a') {
		result += string[1];
		}
		else if(string[0] === 'b') {
		result += string[2];
		}
		else if(string[0] === 'c') {
		result += string[3];
		}
		else if(string[0] === 'd') {
		result += string[4];
		}
		else {
		result += " ";
		}
		console.log(result);
	}
}
	

decode('craft block argon meter bells brown croon droop');