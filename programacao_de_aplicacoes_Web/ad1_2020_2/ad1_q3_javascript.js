class AtividadeComplementar{

	constructor(name, horasTotais, disciplina){
		this._name = name
		this._horasTotais = horasTotais
		this._disciplina = disciplina
	}

	get name(){
		return this._name;
	}

	set name(newName){
		this._name = newName;
	}

	get horasTotais(){
		return this._horasTotais;
	}

	set horasTotais(newHoras){
		this._horasTotais = newHoras;
	}

	get disciplina(){
		return this._disciplina;
	}

	set name(newDisciplina){
		this._disciplina = newDisciplina;
	}
}


class Aluno{
	constructor(name, horasAtividade){
		this._name = name
		this._horasAtividade = horasAtividade
		this.disciplinas = []
	}

	get name(){
		return this._name;
	}

	set name(newName){
		this._name = newName;
	}

	get horasAtividade(){
		return this._horasAtividade;
	}

	set horasAtividade(newHorasAtividade){
		this._horasAtividade = newHorasAtividade;
	}

	adicionar_ac(ac){
		
		this.disciplinas.push(ac);
	}

	calcular_horas_faltantes_ac(){
		let horasCumpridas = this.disciplinas.reduce((total,elem) => elem.horasTotais + total, 0);
		return this.horasAtividade -horasCumpridas
	}
}

const aluno1 = new Aluno("Jorge", 300);

const disciplina1 = new AtividadeComplementar('SBSD-2020', 250, 'Semáfaro');

aluno1.adicionar_ac(disciplina1);

console.log(aluno1.calcular_horas_faltantes_ac());






