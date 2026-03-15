const meta = 3000;

let valorAtual = localStorage.getItem("valorArrecadado");

if(!valorAtual){
    valorAtual = 0;
}else{
    valorAtual = Number(valorAtual);
}

/* LINKS DE PAGAMENTO */
const links = {
    10: "https://nubank.com.br/cobrar/17dl27/69b71d0d-c508-421e-bd35-8a53ed85ebb8",
    25: "https://nubank.com.br/cobrar/17dl27/69b71f7a-72c8-459a-a465-37d7581ae716",
    50: "https://nubank.com.br/cobrar/17dl27/69b72094-ffe2-4c1b-aafb-cd27cf4124d4",
    100: "https://nubank.com.br/cobrar/17dl27/69b7211e-1adc-4847-ac0c-9f322294bef1"
};

document.addEventListener("DOMContentLoaded", () => {

    const elemento = document.getElementById("contador");

    elemento.innerText = valorAtual.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const porcentagem = Math.min((valorAtual / meta) * 100, 100);

    document.getElementById("barra").style.width =
        porcentagem + "%";

});

let valorSelecionado = 0;

function selecionarValor(valor, botao){

    valorSelecionado = valor;

    document.querySelectorAll(".botoes-valores button").forEach(b=>{
        b.classList.remove("ativo");
    });

    botao.classList.add("ativo");
}

function irParaPagamento(){

    if(valorSelecionado === 0){
        alert("Escolha um valor primeiro!");
        return;
    }

    const link = links[valorSelecionado];

    if(!link){
        alert("Valor não disponível para pagamento.");
        return;
    }

    window.open(link, "_blank");

    valorAtual += valorSelecionado;
    localStorage.setItem("valorArrecadado", valorAtual);

    setTimeout(()=>{
        window.location.href = "obrigado.html";
    },3000);
}

function criarCoracao(){

    const area = document.querySelector(".coracoes");
    if(!area) return;

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
