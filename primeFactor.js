function errorTrace(location, data) {
	console.log(location + " " + data);
}
function isPrime(x) {
	for(var i = 2; i < x; i++) if(x%i ===0) return false; 
	return true;
}

function primeFactor(x) {
	var primeFactors = new Array();
	var outputStr = "";
	if(isPrime(x)) return x;
	//smallest prime number that divides x
	while(!isPrime(x)) {
		//errorTrace("while x = ", x);
		for(var i = 2; i < x; i++) {
			if(isPrime(i) && (x%i ===0)) {
				primeFactors.push(i);
				x /= i;
				//errorTrace("if i = ", i);
				break;		
			}
		}
	}
	primeFactors.push(x);
	//errorTrace("primeFactors.length = ", primeFactors.length);
	for(var i = 0; i < primeFactors.length; i++) {
		outputStr += primeFactors[i] + " ";
	}
	return outputStr;
}

document.write(primeFactor(600851475143));



