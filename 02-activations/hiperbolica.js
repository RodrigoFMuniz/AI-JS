function funcSum(arr=[]){
    return arr.reduce((a, b) => a + b)
}

function gradientDescent(n=0){
    return n*(1-n)
}

function generateWeights(inputs){
    let weights = [];
	for(let i=0; i<inputs.length; i++) {
		weights.push(Math.random());
	}
    return weights
}

function summatory(inputs, weights){
    let multiply = [];
    for(let j=0; j<inputs.length; j++) {
        if(inputs[j]<=0) inputs[j] = 0.1;
        multiply.push(inputs[j] * weights[j]);
    }

    return multiply
}

function calcError(target, output){
    return parseFloat(Math.abs(target - output)).toFixed(4);
}

function feedForward(inputs=[], target=0, epochs=1) {
	if(target<=0) target = 0.1;
	else if(target>1) target = 1;

	let weights = generateWeights(inputs)

	for(let i=1; i<=epochs; i++) {

        let multiply = summatory(inputs, weights)

		let sum = funcSum(multiply);

		let output = parseFloat(Math.tanh(sum)).toFixed(4);

		let error = calcError(target, output)

		for(let j=0; j<inputs.length; j++) {
			weights[j] += inputs[j] * gradientDescent(error);
		}
		let epoch = i.toString().padStart(7, '0');

		console.log(`época: ${epoch} - taxa de erro: ${error} - saída: ${output}`);
	}
}

// // tangente hiperbólica: retorna valores entre -1 e 1
// function tanh(n=0) { return Math.sinh(n) / Math.cosh(n); }
// // função sigmóide: retorna valores entre 0 e 1
// function sigmoid(n=0) { return 1 / (1 + Math.pow(Math.E, -n)); }
// // unidade linear retificada (relu): retorna somente valores nulos e positivos
// function relu(n=0) { return Math.max(n, 0); }
// // unidade linear retificada com vazamento (leaky relu): retorna somente valores maiores que zero
// function leakyRelu(n=0) { return Math.max(n, 0.01); }
// // passo binário: retorna somente 0 ou 1
// function binaryStep(n=0) { return (n >= 0) ? 1 : 0; }


// feedForward([0, 0], 0.9, 1000);
feedForward([0, 0, 0, 0, 0], 0.9, 1000);