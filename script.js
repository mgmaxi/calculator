let result = document.querySelector('.result');
let calculation = document.querySelector('.calculation');
let prevResult = [];
let total;
let memory = [];

const addNumber = num => {
	let number = document.getElementById(num).textContent;
	if (!total) {
		prevResult = [...prevResult, number.toString()];
		calculation.textContent = prevResult.join('');
	} else {
		prevResult = [...prevResult, number];
		calculation.textContent = prevResult.join('');
	}
};

const addOperator = op => {
	let operator = document.getElementById(op).textContent.trim();

	operator === 'π' ? (operator = Math.PI.toString()) : null;
	operator === 'x2' ? (operator = '**2') : null;
	operator === 'x3' ? (operator = '**3') : null;
	operator === 'xn' ? (operator = '**') : null;
	operator === '√' ? (operator = 'Math.sqrt(') : null;
	operator === '3√' ? (operator = 'Math.cbrt(') : null;
	operator === 'n√' ? (operator = '**(1/') : null;

	operator === 'ln' ? (operator = 'Math.log(') : null;
	operator === 'log' ? (operator = 'Math.log(') : null;
	operator === 'sin' ? (operator = 'Math.sin(') : null;
	operator === 'cos' ? (operator = 'Math.cos(') : null;
	operator === 'tan' ? (operator = 'Math.tan(') : null;
	operator === '%' ? (operator = '/100') : null;
	operator === 'e' ? (operator = Math.E.toString()) : null;

	if (operator == '⌫') {
		prevResult.length > -1
			? ((prevResult = prevResult.slice(0, -1)),
			  (calculation.textContent = prevResult.join('')))
			: (prevResult = []);
		return;
	}

	if (!total) {
		prevResult = [...prevResult, operator];
		calculation.textContent = prevResult.join('');
	} else {
		prevResult = [...prevResult, operator];
		calculation.textContent = prevResult.join('');
	}
};

const deleteAllOperations = () => {
	prevResult = [];
	total = 0;
	calculation.textContent = '';
	result.textContent = total;
};

const getMemory = () => {
	result.textContent = memory;
};

const getResult = () => {
	try {
		total = eval(prevResult.join(''));
		memory = eval(prevResult.join(''));
		prevResult = [total.toString()];
		calculation.textContent = '';
		result.textContent = total;
	} catch (error) {
		prevResult = [];
		calculation.textContent = 'Error de sintaxis';
		result.textContent = '';
	}
};
