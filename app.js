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
	let result = '';

	for(i=0; i<string.length;i+=6) {
		if(string[i] === 'a') {
		result += string[i+1];
		}
		else if(string[i] === 'b') {
		result += string[i+2];
		}
		else if(string[i] === 'c') {
		result += string[i+3];
		}
		else if(string[i] === 'd') {
		result += string[i+4];
		}
		else {
		result += " ";
		}

		console.log(result);
	}
}


decode('craft block argon meter bells brown croon droop');