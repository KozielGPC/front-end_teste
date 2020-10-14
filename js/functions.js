// blocoA - teste de carregamento
/*
alert("carregado");
*/

// blocoB - teste de carregamento com listener
/*
function carregado(){
	alert("exemplo de validação")
}
document.addEventListener("DOMContentLoaded", carregado, false);
*/

// blocoC - validacao simples
/*
function validar(){
	alert("exemplo de validação")
}
*/

// blocoD - validacao real
/*
function validacaoReal(){
	//var formulario = document.getElementById("formPost");
	var textarea = document.getElementById("postTextarea");
	var input = document.getElementById("postInput");
	console.log(texto.value);
	console.log(textarea.value);
	console.log(textarea.textLength);
	return false;
}
*/

// blocoE - validacao com listener
/*
document.addEventListener("DOMContentLoaded", listeners, false);
function listeners(){
	document.getElementById("formPost").addEventListener("submit",validacaoReal);
}
*/

// blocoF - validacao com jquery
/*
$("formPost").on("submit",validacaoReal);
*/