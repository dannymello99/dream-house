const meta = 5000;    

let valorAtual = localStorage.getItem("valorArrecadado");

if(!valorAtual){
    valorAtual = 0;
}else{
    valorAtual = Number(valorAtual);
}
document.addEventListener("DOMContentLoaded", () => {
    const elemento = document.getElementByld("contador");

    elemento.innerText = valorAtual.toLocaleString(pt-BR);

    const porcentagem = (valorAtual / meta) * 100;

    document.getElementByld("barra").style.width = 
        porcentagem + "%";

});
let valorSelecionado = 0;

function selecionarValor(valor, botão){
    valorSelecionado = valor;

    document.querySelectorAll(".valores button").forEach(b=>{
        b.classList.remove("ativo");
    });

botao.classList.add("ativo");

function irParaPagamento(){

    if(valorSelecionado === 0){
        alert("escolha um valor primeiro!");
        return;
    }
    valorAtual += valorSelecionado;
    localStorage.setItem("valorArrecadado", valorAtual);

    const link = "https://nubank.com.br/cobrar/17dl27/69a48122-a633-4095-9844-337c3d803ca7?amount=" + valor selecionado;

    window.open(link, "_blank");

    setTimeOut(()=> {
        window.location.href = "obrigado.html";
    },3000);
}

function criarCoracao(){

    const area = document.querySelector(".coracoes");
    if(!area) return; // só roda na página obrigado

    const coracao = document.createElement("div");

    coracao.classList.add("coracao");
    coracao.innerHTML = "❤️";

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = (4 + Math.random() * 3) + "s";

    area.appendChild(coracao);

    setTimeout(()=>{
        coracao.remove();
    },7000);
}

setInterval(criarCoracao, 400);
