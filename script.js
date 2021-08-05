const circleA = document.getElementsByClassName('circleA');
const circleB = document.getElementsByClassName('circleB');
const positionA = document.getElementById('A');
const positionB = document.getElementById('B');
const storage = window.localStorage;

function showPosition() {
	const posA = storage.getItem('A-pos');
	const posB = storage.getItem('B-pos');
	
	for (let i = 0; i < circleA.length; i++) {
		if (circleA[i].innerText === posA) {
			positionA.innerText = posA;
			circleA[i].style.background = 'black';
			circleA[i].style.color = 'white';
		} else {
			circleA[i].style.background = 'white';
			circleA[i].style.color = 'black';
		};
	};
	
	for (let i = 0; i < circleB.length; i++) {
		if (circleB[i].innerText === posB) {
			positionB.innerText = posB;
			circleB[i].style.background = 'black';
			circleB[i].style.color = 'white';
		} else {
			circleB[i].style.background = 'white';
			circleB[i].style.color = 'black';
		};
	};
};

circleA[0].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleA[0].innerText !== positionA.innerText) {
			let num = parseInt(storage.getItem('A-pos'));
			num -= 1;
			num.toString();
			storage.setItem('A-pos', num);
			showPosition();
			console.log(`A moved to floor ${positionA.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleA[1].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleA[1].innerText !== positionA.innerText) {
			if (circleA[1].innerText < positionA.innerText) {
				let num = parseInt(storage.getItem('A-pos'));
				num -= 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('A-pos'));
				num += 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			}
			console.log(`A moved to floor ${positionA.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleA[2].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleA[2].innerText !== positionA.innerText) {
			if (circleA[2].innerText < positionA.innerText) {
				let num = parseInt(storage.getItem('A-pos'));
				num -= 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('A-pos'));
				num += 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			}
			console.log(`A moved to floor ${positionA.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleA[3].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleA[3].innerText !== positionA.innerText) {
			if (circleA[3].innerText < positionA.innerText) {
				let num = parseInt(storage.getItem('A-pos'));
				num -= 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('A-pos'));
				num += 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			}
			console.log(`A moved to floor ${positionA.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleA[4].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleA[4].innerText !== positionA.innerText) {
			if (circleA[4].innerText < positionA.innerText) {
				let num = parseInt(storage.getItem('A-pos'));
				num -= 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('A-pos'));
				num += 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			}
			console.log(`A moved to floor ${positionA.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleA[5].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleA[5].innerText !== positionA.innerText) {
			if (circleA[5].innerText < positionA.innerText) {
				let num = parseInt(storage.getItem('A-pos'));
				num -= 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('A-pos'));
				num += 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			}
			console.log(`A moved to floor ${positionA.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleA[6].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleA[6].innerText !== positionA.innerText) {
			if (circleA[6].innerText < positionA.innerText) {
				let num = parseInt(storage.getItem('A-pos'));
				num -= 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('A-pos'));
				num += 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			}
			console.log(`A moved to floor ${positionA.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleA[7].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleA[7].innerText !== positionA.innerText) {
			if (circleA[7].innerText < positionA.innerText) {
				let num = parseInt(storage.getItem('A-pos'));
				num -= 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('A-pos'));
				num += 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			}
			console.log(`A moved to floor ${positionA.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleA[8].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleA[8].innerText !== positionA.innerText) {
			if (circleA[8].innerText < positionA.innerText) {
				let num = parseInt(storage.getItem('A-pos'));
				num -= 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('A-pos'));
				num += 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			}
			console.log(`A moved to floor ${positionA.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleA[9].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleA[9].innerText !== positionA.innerText) {
			if (circleA[9].innerText < positionA.innerText) {
				let num = parseInt(storage.getItem('A-pos'));
				num -= 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('A-pos'));
				num += 1;
				num.toString();
				storage.setItem('A-pos', num);
				showPosition();
			}
			console.log(`A moved to floor ${positionA.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleB[0].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleB[0].innerText !== positionB.innerText) {
			let num = parseInt(storage.getItem('B-pos'));
			num -= 1;
			num.toString();
			storage.setItem('B-pos', num);
			showPosition();
			console.log(`B moved to floor ${positionB.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleB[1].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleB[1].innerText !== positionB.innerText) {
			if (circleB[1].innerText < positionB.innerText) {
				let num = parseInt(storage.getItem('B-pos'));
				num -= 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('B-pos'));
				num += 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			}
			console.log(`B moved to floor ${positionB.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleB[2].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleB[2].innerText !== positionB.innerText) {
			if (circleB[2].innerText < positionB.innerText) {
				let num = parseInt(storage.getItem('B-pos'));
				num -= 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('B-pos'));
				num += 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			}
			console.log(`B moved to floor ${positionB.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleB[3].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleB[3].innerText !== positionB.innerText) {
			if (circleB[3].innerText < positionB.innerText) {
				let num = parseInt(storage.getItem('B-pos'));
				num -= 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('B-pos'));
				num += 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			}
			console.log(`B moved to floor ${positionB.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleB[4].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleB[4].innerText !== positionB.innerText) {
			if (circleB[4].innerText < positionB.innerText) {
				let num = parseInt(storage.getItem('B-pos'));
				num -= 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('B-pos'));
				num += 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			}
			console.log(`B moved to floor ${positionB.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleB[5].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleB[5].innerText !== positionB.innerText) {
			if (circleB[5].innerText < positionB.innerText) {
				let num = parseInt(storage.getItem('B-pos'));
				num -= 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('B-pos'));
				num += 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			}
			console.log(`B moved to floor ${positionB.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleB[6].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleB[6].innerText !== positionB.innerText) {
			if (circleB[6].innerText < positionB.innerText) {
				let num = parseInt(storage.getItem('B-pos'));
				num -= 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('B-pos'));
				num += 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			}
			console.log(`B moved to floor ${positionB.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleB[7].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleB[7].innerText !== positionB.innerText) {
			if (circleB[7].innerText < positionB.innerText) {
				let num = parseInt(storage.getItem('B-pos'));
				num -= 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('B-pos'));
				num += 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			}
			console.log(`B moved to floor ${positionB.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleB[8].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleB[8].innerText !== positionB.innerText) {
			if (circleB[8].innerText < positionB.innerText) {
				let num = parseInt(storage.getItem('B-pos'));
				num -= 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('B-pos'));
				num += 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			}
			console.log(`B moved to floor ${positionB.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});

circleB[9].addEventListener('click', function() {
	const interval = setInterval(function() {
		if (circleB[9].innerText !== positionB.innerText) {
			if (circleB[9].innerText < positionB.innerText) {
				let num = parseInt(storage.getItem('B-pos'));
				num -= 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			} else {
				let num = parseInt(storage.getItem('B-pos'));
				num += 1;
				num.toString();
				storage.setItem('B-pos', num);
				showPosition();
			}
			console.log(`B moved to floor ${positionB.innerText}`);
		} else {
			clearInterval(interval);
		}
	}, 1000);
});