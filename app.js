// Challenge Jedi name

// function jediName(firstName, lastName) {
// 	console.log(lastName[0] + lastName[1] + lastName[2] + firstName[0] + firstName[1]);
// }


// jediName('Beyonce', 'Knowles');

//--------------------------------------------------------------------


If num is infinite (either positive or negative) it should log out 'And beyond'.
If num is finite and positive it should log out 'To infinity'.
If num is finite and negative it should log out 'To negative infinity'.
If num is zero it should log out 'Staying home'.

function beyond(num){
	if(num === Infinity){
		console.log ("And beyond");
	} 
	else if( num >= 1) {
		console.log("To infinity");
	}
	else if (num < 0) {
		console.log("To negative infinity");
	}
	else if (num === 0) {
		console.log("Staying home");
	}
}

beyond(1);