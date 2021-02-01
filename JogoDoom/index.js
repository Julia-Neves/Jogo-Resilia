var texto = document.querySelector(".texto");
var btn = document.querySelector(".btn");
var btn1 = document.querySelector(".btn-1");
var btn2 = document.querySelector(".btn-2");
var a = document.querySelector("a");

function layout(txtP, txtBtn1, txtBtn2){
	texto.textContent = `${txtP}`;
	btn1.textContent = `${txtBtn1}`;
	btn2.textContent = `${txtBtn2}`;
}

function mostrarBotao(){
	btn1.style.display = "inline";
	btn2.style.display = "inline";
}

function tirarBotao(){
	btn.style.display = "none";
}

function mudarFase(botao1, botao2){
	btn1.onclick = botao1;
	btn2.onclick = botao2;
}

function fimDeJogo(){
	btn1.style.display = "none";
	btn2.style.display = "none";
	a.textContent = "Fim de jogo. Clique para continuar jogando!"
}

function primeiraMalOpcao(){
	texto.textContent = "Infelizmente você fez uma má escolha, foi contaminado e morreu.";
	fimDeJogo();
}

function segundaMalOpcao(){
	texto.textContent = "Sinto muito, você não usou o álcool higienizador e foi infectado, jogo perdido.";
	fimDeJogo();
}

function terceiraMalOpcao(){
	texto.textContent = "Péssima escolha, com isto toda a sua família foi infectada e você perdeu. FIM DE JOGO.";
	fimDeJogo();
}


function repensar(){
	layout("É isso mesmo que você quer fazer?", "Sim", "Não");
	mudarFase(primeiraMalOpcao,primeiraFase);
}

function perder(){
	texto.textContent = "Péssima escolha, com isto toda a sua família foi infectada e você perdeu. FIM DE JOGO";
	fimDeJogo();
}

function primeiraFase(){

	layout("Você acorda neste cénario apocalíptico e precisa ir ao mercado, ao sair de casa, o que você faz?", "Coloca máscara de proteção", "Vai sem máscara mesmo")
	mostrarBotao();
	tirarBotao();
	mudarFase(segundaFase,repensar)	
}

function segundaFase(){
	layout("Boa jogada, você foi ao mercado, comprou os alimentos para sua família e conseguiu voltar para casa sem se contaminar. Agora Você e seu irmão precisam levar seu pai ao hospital, pois ele está muito doente, chegando lá, lhes é oferecido álcool para higienizar suas mãos, o que vocês fazem?", "Diz que está tudo bem e não precisa do álcool", "Aceita higienizar as mãos com o álcool");
	mostrarBotao();
	tirarBotao();
	mudarFase(segundaMalOpcao,terceiraFase)
}

function terceiraFase(){
	layout("Parabéns, você está tomando as devidas precausões para com o vírus e conseguiu sobreviver. Agora Sua mãe decide convidar os netinhos para um almoço em família, O que você quer fazer?","Pede a sua mãe para aproveitar e fazer seu prato preferido também.", "Dizer para sua mãe que ainda não é hora para isto e pede para ela adiar este almoço");
	mostrarBotao();
	tirarBotao();
	mudarFase(terceiraMalOpcao,quartaFase);
}

function quartaFase(){
    texto.textContent = "Boa escolha, você acaba de salvar sua família de serem contaminados e venceu o jogo.";
	fimDeJogo();
}
	