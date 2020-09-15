const trocaCpf = (texto) => {
	return texto.replace(/(\d{3}).(\d{3}).(\d{3})\/(\d{2})/g, "xxx")
}

let exemplo = `Eu, Fulano, CPF 123.234.345/56, casado com Beltrana,
CPF 234.345.456/67, gostaria de solicitar o registro do imóvel
adquirido de Sicrano, CPF 345.456.567/78.`	

console.log(trocaCpf(exemplo));