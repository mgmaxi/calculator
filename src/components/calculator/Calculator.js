import React, { useState } from 'react';
import logo from '../../assets/logo.jpg';
import './calculator.css';

const Calculator = () => {
	const [result, setResult] = useState(0);
	const [calculation, setCalculation] = useState('');
	const [prevResult, setPrevResult] = useState([]);
	const [total, setTotal] = useState();
	const [memory, setMemory] = useState([]);

	const addNumber = e => {
		e.preventDefault();
		let number = e.target.innerHTML;

		if (!total) {
			setPrevResult([...prevResult, number.toString()]);
			setCalculation([...prevResult, number.toString()].join(''));
		} else {
			setPrevResult([...prevResult, number]);
			setCalculation([...prevResult, number].join(''));
		}
	};

	const addOperator = e => {
		e.preventDefault();

		let operator = e.target.innerHTML;

		operator === 'π' && (operator = Math.PI.toString());
		operator === 'x<sup>2</sup>' && (operator = '**2');
		operator === 'x<sup>3</sup>' && (operator = '**3');
		operator === 'xn' && (operator = '**');
		operator === '√' && (operator = 'Math.sqrt(');
		operator === '3√' && (operator = 'Math.cbrt(');
		operator === 'n√' && (operator = '**(1/');

		operator === 'ln' && (operator = 'Math.log(');
		operator === 'log' && (operator = 'Math.log(');
		operator === 'sin' && (operator = 'Math.sin(');
		operator === 'cos' && (operator = 'Math.cos(');
		operator === 'tan' && (operator = 'Math.tan(');
		operator === '%' && (operator = '/100');
		operator === 'e' && (operator = Math.E.toString());

		if (operator === '⌫') {
			if (prevResult.length > -1) {
				setPrevResult(prevResult.slice(0, -1));
				setCalculation(prevResult.slice(0, -1).join(''));
			} else {
				setPrevResult([]);
			}
			return;
		}

		let previousResult = [...prevResult, operator];

		if (!total) {
			setPrevResult(previousResult);
			setCalculation(previousResult.join(''));
		} else {
			setPrevResult(previousResult);
			setCalculation(previousResult.join(''));
		}
	};

	const deleteAllOperations = () => {
		setPrevResult([]);
		setTotal(0);
		setCalculation('');
		setResult('');
	};

	const getMemory = () => {
		setResult(memory);
	};

	const getResult = () => {
		let finalResult = eval(prevResult.join(''));
		try {
			setTotal(finalResult);
			setMemory(finalResult);
			setPrevResult([finalResult.toString()]);
			setCalculation('');
			setResult(finalResult);
		} catch (error) {
			setPrevResult([]);
			setCalculation('Error de sintaxis');
			setResult('');
		}
	};

	return (
		<>
			<header>
				<a
					href="https://id-card-mgm.netlify.app/"
					target="_blank"
					className="logo-container"
					rel="noreferrer"
				>
					<img className="logo" src={logo} alt="Logo" />
				</a>
			</header>
			<main>
				<div className="calculator-container">
					<div className="result-container">
						<div className="calculation">{calculation}</div>
						<div className="result">{result}</div>
					</div>
					<div className="buttons-container">
						<div className="row">
							<button id="btn-(" className="btn" onClick={e => addOperator(e)}>
								(
							</button>
							<button
								id="btn-sin"
								className="btn"
								onClick={e => addOperator(e)}
							>
								sin
							</button>
							<button id="btn-1" className="btn" onClick={e => addNumber(e)}>
								1
							</button>
							<button id="btn-4" className="btn" onClick={e => addNumber(e)}>
								4
							</button>
							<button id="btn-7" className="btn" onClick={e => addNumber(e)}>
								7
							</button>
							<button
								id="btn-dot"
								className="btn"
								onClick={e => addOperator(e)}
							>
								.
							</button>
						</div>
						<div className="row">
							<button id="btn-)" className="btn" onClick={e => addOperator(e)}>
								)
							</button>
							<button
								id="btn-cos"
								className="btn"
								onClick={e => addOperator(e)}
							>
								cos
							</button>
							<button id="btn-2" className="btn" onClick={e => addNumber(e)}>
								2
							</button>
							<button id="btn-5" className="btn" onClick={e => addNumber(e)}>
								5
							</button>
							<button id="btn-8" className="btn" onClick={e => addNumber(e)}>
								8
							</button>
							<button id="btn-0" className="btn" onClick={e => addNumber(e)}>
								0
							</button>
						</div>
						<div className="row">
							<button id="e" className="btn" onClick={e => addOperator(e)}>
								e
							</button>
							<button
								id="btn-tan"
								className="btn"
								onClick={e => addOperator(e)}
							>
								tan
							</button>
							<button id="btn-3" className="btn" onClick={e => addNumber(e)}>
								3
							</button>
							<button id="btn-6" className="btn" onClick={e => addNumber(e)}>
								6
							</button>
							<button id="btn-9" className="btn" onClick={e => addNumber(e)}>
								9
							</button>
							<button id="btn-PI" className="btn" onClick={e => addOperator(e)}>
								π
							</button>
						</div>
						<div className="row">
							<button id="btn-%" className="btn" onClick={e => addOperator(e)}>
								%
							</button>

							<button id="btn-in" className="btn" onClick={e => addOperator(e)}>
								In
							</button>

							<button
								id="btn-divide"
								className="btn"
								onClick={e => addOperator(e)}
							>
								/
							</button>
							<button
								id="btn-multiply"
								className="btn"
								onClick={e => addOperator(e)}
							>
								*
							</button>
							<button
								id="btn-minus"
								className="btn"
								onClick={e => addOperator(e)}
							>
								-
							</button>
							<button
								id="btn-plus"
								className="btn"
								onClick={e => addOperator(e)}
							>
								+
							</button>
						</div>
						<div className="row">
							<button
								id="btn-x-2"
								className="btn"
								onClick={e => addOperator(e)}
							>
								x<sup>2</sup>
							</button>
							<button
								id="btn-x-3"
								className="btn"
								onClick={e => addOperator(e)}
							>
								x<sup>3</sup>
							</button>
							<button
								id="btn-x-n"
								className="btn"
								onClick={e => addOperator(e)}
							>
								x<sup>n</sup>
							</button>
							<button
								id="btn-square-root"
								className="btn"
								onClick={e => addOperator(e)}
							>
								√
							</button>
							<button
								id="btn-square-root-3"
								className="btn"
								onClick={e => addOperator(e)}
							>
								<sup>3</sup>√
							</button>
							<button
								id="btn-square-root-n"
								className="btn"
								onClick={e => addOperator(e)}
							>
								<sup>n</sup>√
							</button>
						</div>
						<div className="row">
							<button
								id="btn-delete"
								className="btn"
								onClick={e => addOperator(e)}
							>
								⌫
							</button>

							<button
								id="btn-log"
								className="btn"
								onClick={e => addOperator(e)}
							>
								log
							</button>
							<button id="btn-AC" className="btn" onClick={deleteAllOperations}>
								AC
							</button>
							<button id="btn-MR" className="btn" onClick={getMemory}>
								MR
							</button>

							<button
								id="btn-equal"
								className="btn btn-double"
								onClick={getResult}
							>
								=
							</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Calculator;
