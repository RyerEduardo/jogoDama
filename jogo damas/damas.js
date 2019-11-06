
$(".par").css("background-color", "#20B2AA"); //colorir celula par
$(".branca").css("background-color", "#20B2AA"); //colorir celula peça branca
$(".preta").css("background-color", "#20B2AA"); //colorir celula peça preta
$(".impar").css("background-color", "#DCDCDC"); //colorir celula impar

$(document).ready(function(){ //espera carregar pagina

//VARIAVEIS
var jogador = 0;
var numeroDePartidas = 0;
var numeroDeJogadas = 0;
var nomeJ1;
var nomeJ2;
var vitoriasJ1; 
var vitoriasJ2;
var cJ1; //= $("#capturasJ1"); 
var cJ2; //= $("#capturasJ2"); 
var njj1; //= $("#njogadasJ1");
var njj2; //= $("#njogadasJ2");



//BOTÕES DE COMANDO

var botaoNovoJogo = $("#novoJogo");
	
	botaoNovoJogo.on("click", function(event){  
		
		novoJogo(); 
	});

var botaoReset = $("#reset");
	
	botaoReset.on("click", function(event){  
		
		resetPlacar(); 
	});

var botaoRestart = $("#reStart");
	
	botaoRestart.on("click", function(event){  
		
		resStartJogo(); 
	});








//FUNÇÕES DOS BOTÕES

 function novoJogo(){
 	//var nj1 = $("#jogador1Nome");

 	
 		nomeJ1 = prompt("Insira o nome do jogador 1:");
 		nomeJ2 = prompt("Insira o nome do jogador 2:");

 		if(nomeJ1 == "" || nomeJ1 == null){
 			nomeJ1 = "Jogador ➀";
 		}
 		if(nomeJ2 == "" || nomeJ2 == null){
 			nomeJ2 = "Jogador ➁";
 		}

 		vitoriasJ1 = 0;
 		vitoriasJ2 = 0;
 		cJ1 = 0;
		cJ2 = 0;
		njj1 = 0;
 		njj2 = 0;
 		jogador = 0;
 		
	

 		jogador1Nome.innerHTML = nomeJ1;
 		jogador2Nome.innerHTML = nomeJ2;
		nplacar1.innerHTML = nomeJ1 + "....." + vitoriasJ1;
 		nplacar2.innerHTML = nomeJ2 + "....." + vitoriasJ2;	
 		capturasJ1.innerHTML = "Peças capturadas:...." + cJ1;
 		capturasJ2.innerHTML = "Peças capturadas:...." + cJ2;
 		njogadasJ1.innerHTML = "Numero de jogadas:...." + njj1;
 		njogadasJ2.innerHTML = "Numero de jogadas:...." + njj2;
 		addPeca();

 }

 function addPeca(){
 
	$("#tabuleiro img").remove(); //remove as peças exitentes

	var branca = $("<img src='branca.png'>");
	var preta = $("<img src='preta.png'>");
	var celula1 = $(".branca");
	var celula2 = $(".preta");

	celula1.append(branca);	//add as peças
	celula2.append(preta);	
	}

function resetPlacar(){

	if(nomeJ1 == "" || nomeJ1 == null){
 		nomeJ1 = "Jogador ➀";
 	}
 	if(nomeJ2 == "" || nomeJ2 == null){
 		nomeJ2 = "Jogador ➁";
 	}

	vitoriasJ1 = 0;
 	vitoriasJ2 = 0;
 	nplacar1.innerHTML = nomeJ1 + "....." + vitoriasJ1;
 	nplacar2.innerHTML = nomeJ2 + "....." + vitoriasJ2;	
}

function resStartJogo(){
	cJ1 = 0;
	cJ2 = 0;
	njj1 = 0;
 	njj2 = 0;
 	capturasJ1.innerHTML = "Peças capturadas:...." + cJ1;
 	capturasJ2.innerHTML = "Peças capturadas:...." + cJ2;
 	njogadasJ1.innerHTML = "Numero de jogadas:...." + njj1;
 	njogadasJ2.innerHTML = "Numero de jogadas:...." + njj2;
 	addPeca();
}

//FLUXO PRINCIPAL



var casaClicada = "";
var pecaClicada = $(".par");

pecaClicada.on('click', function(){
	jogador++;
	pecaClicada = $(this).html(); 
	$(this).html(casaClicada);
		

	
});

		$(".branca").on('click', function(){

		casaClicada = $(this).html();
		$(this).empty(); //apaga peça branca
		});
		

		$(".preta").on('click', function(){
		casaClicada = $(this).html();
		$(this).empty(); //apaga peça preta
		});
		jogador++;
	





});


//$(el).val()

//$('elemento').is(':empty');  - retorno é um bool :)
 
//if ($('div').is(':empty')){
// alert('Elemento vazio!');


