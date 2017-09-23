module.exports = function zeros(expression) {

	let multipliers = expression.split('*');
	let result = '1';
	let numberZero = 0;

	for ( let i = 0; i < multipliers.length; i++) {
		result = multiply(factorial(multipliers[i]), result); 

	}

	for (let i = result.length-1; result[i]==='0'; i--) {
		numberZero+=1;
	}
	return numberZero;
}

function factorial(str) {

	let factorial = '1';

	if (str.indexOf('!!') === -1) {
		
		for (let i = +str.slice(0, str.length-1); i > 1; i--) {
			factorial = multiply(factorial, i.toString());
		}

	} else {
		for (let i = +str.slice(0, str.length-2); i > 1; i-=2) {
			factorial = multiply(factorial, i.toString());
		}

	}
	return factorial;
}

function multiply(first, second) {

let product = new Array(first.length+second.length).fill(0);

for(let i = first.length-1; i >= 0; i--) {

    for(let j = second.length-1; j>=0; j--) {

        let digitsProduct = +first[i] * +second[j];
        let digitIndex = product.length - first.length + i - second.length + j + 1;

        digitsProduct += +product[digitIndex];
        product[digitIndex] = digitsProduct%10;
        product[digitIndex-1] += Math.floor(digitsProduct/10);
    }
}

if (product[0] === 0) product.splice(0,1);
return product.join('');
}

