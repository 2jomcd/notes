sillySum(arr)
Write a function that takes an array of numbers, 
and returns the sum of each number multiplied by its index.

var prodIndex = 0;
var sumProdIndex = 0;
var inputArray = [3,4,5];
var l = inputArray.length;

var plusProdIndex = function(x) {
	for (i=0;i<l;i++) {
	prodIndex = (inputArray[i]*i);;
	sumProdIndex += prodIndex;}

return sumProdIndex;
};
plusProdIndex(inputArray);



numSquare(max)
Create a function called numSquare that 
will return an array of all perfect square numbers up to, but not exceeding a max number.


function numSquare(max) {
	var perSq = [];
	for (i=0;i<=max;i++) {
		if (i%Math.sqrt(i)===0) {
			perSq.push(i);
	}
}
return perSq;
}



numSquare(10);


function isPrime(num) {
	if (num == 1) return false;
	for (var i=2;i<num;i++) {
		if (num%i===0) {
			return false;
		}
	}
	return true;
}


primes(max)
Using your isPrime() function, create 
a function primes that will return an array of 
all prime numbers up to a certain amount.

//primes(max)

function isPrime(num) {
	if (num == 1) return false;
	for (var i=2;i<num;i++) {
		if (num%i===0) {
			return false;
		}
	}
	return true;
}

function primes(max) {
primA = []		
	for (var x=2; x<max; x++) {
	if (isPrime(x)===true) {
		primA.push(x);
		}
	}
	return primA
}


//Write a function that takes a string that 
//finds out how many times a character occurs. 


function countLetters(word)  {
	var letters = {};
	var l = word.length;
	for (var i=0; i<l; i++) {
	    if (!letters[word[i]]) {
		    letters[word[i]] = 1;
	    } else {
			letters[word[i]]++;
		}
	}
	return letters;
};







