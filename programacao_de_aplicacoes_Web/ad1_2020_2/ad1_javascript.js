const calculoNumeroVizinhos = (matriz) => {
	let matrizResult = [];
	
	for(let i=0 ; i < matriz.length; i++ ){
		var count = 0;
		for(let j=0; j < matriz[i].length; j++){
			
			if(matriz[i][j] == 1){
				count++;
			}
			if(j == matriz[i].length-1){
				matrizResult.push(count);
			}
		}
	}
	return matrizResult.indexOf(Math.max.apply(null,matrizResult));
}

const convertStringToArray = (matriz, numeroNos) =>{
	let newMatriz = [];
	let matrizArray = matriz.match(/\d/g); 
	let no = [];

	for(let k = 0; k < matrizArray.length; k++){

		if( (k%numeroNos == 0 && k != 0)){
			newMatriz.push(no);
			no = []
		} 

		if( matrizArray[k] == '1'){
			no.push(1);
		}else{
			no.push(0);
		}

		if(k == matrizArray.length -1){
			newMatriz.push(no);	
		}
	}
	return newMatriz;
}

const grafo_push = (matriz, no) => {

	let convertMatriz = convertStringToArray(matriz, no.length);
	let newNo = [...no]

	convertMatriz.push(newNo);

	let newMatriz = [];

	for(let k = 0; k < convertMatriz.length; k++){		
		let no = [...convertMatriz[k], newNo[k]];
		if(k == convertMatriz.length -1){
			 no = [...convertMatriz[k], 0];
		}
		newMatriz.push(no);
	}
	return newMatriz;
}

const printMatriz = (matriz) =>{
	let line = '';
	for(let i = 0; i < matriz.length; i++){
		for(let j=0; j< matriz[i].length; j++){
			line = line +' '+ matriz[i][j];
		}
		console.log(line);
		line=''
	}
} 


let matriz = '[[0,1,1,1],[1,0,1,0],[1,1,0,1],[1,0,1,0]]'

let numeroDeNos = 4

var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
 
let no = calculoNumeroVizinhos(convertStringToArray(matriz, numeroDeNos));

console.log(`O nó que possui o maior número de vizinhos é o nó ${alfabeto[no]}.`);

let addNewNo = grafo_push('[[0,1,1,1],[1,0,1,0],[1,1,0,1],[1,0,1,0]]', [1,1,1,1])

console.log(`O no grafo é igual a:`);
printMatriz(addNewNo)


