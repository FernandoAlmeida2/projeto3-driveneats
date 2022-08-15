//Variáveis globais que funcionam como sinalizadores pra mostrar que existe algum item respectivo ao
// seu nome selecionado -> 0, se não existe item selecionado; 1, caso exista algum item selecionado.

let flag_prato = 0;
let flag_bebida = 0;
let flag_sobremesa = 0;

/*  Função que seleciona o item do menu de pratos clicado pelo usuário, enquanto retira a seleção (caso houver)
de algum item selecionado anteriormente.
    Como o professor ensinou primeiramente dessa maneira, deixei no menu dos pratos uma resolução usando o
queryselector, e pra bebidas e sobremesas utilizei o parâmetro "this" que facilita mais as coisas*/

function selecione_prato(classe_item) {
  //valores do item a ser selecionado
  const item_clicado = document.querySelector(classe_item);
  const classe_setinha = item_clicado.lastElementChild.lastElementChild;

  //valores pra checagem se ja existe selecionado
  const existe_selecionado = document.querySelector(".pratos .selecionado");

  if (existe_selecionado !== null) {
    const existe_setinha = existe_selecionado.lastElementChild.lastElementChild;
    existe_setinha.classList.add("escondido");
    existe_selecionado.classList.remove("selecionado");
    flag_prato--;
  }

  item_clicado.classList.add("selecionado");
  classe_setinha.classList.remove("escondido");
  flag_prato++;

  //Condição para mudar cor do botão final e mensagem de finalizar pedido
  if (flag_prato + flag_bebida + flag_sobremesa === 3) {
    const botao = document.querySelector(".botao-pedido");
    botao.firstElementChild.innerHTML = "Fechar pedido";
    botao.classList.add("fechar-pedido");
  }
}

/*  Função que seleciona o item do menu de bebidas clicado pelo usuário, enquanto retira a seleção
 (caso houver) de algum item selecionado anteriormente.*/

function selecione_bebida(item_clicado) {
  //valores do item a ser selecionado
  const classe_setinha = item_clicado.querySelector(".preco .setinha");

  //valores pra checagem se ja existe selecionado
  const existe_selecionado = document.querySelector(".bebidas .selecionado");

  if (existe_selecionado !== null) {
    const existe_setinha = existe_selecionado.querySelector(".preco .setinha");
    existe_setinha.classList.add("escondido");
    existe_selecionado.classList.remove("selecionado");
    flag_bebida--;
  }

  item_clicado.classList.add("selecionado");
  classe_setinha.classList.remove("escondido");
  flag_bebida++;

  //Condição para mudar cor do botão final e mensagem de finalizar pedido
  if (flag_prato + flag_bebida + flag_sobremesa === 3) {
    const botao = document.querySelector(".botao-pedido");
    botao.firstElementChild.innerHTML = "Fechar pedido";
    botao.classList.add("fechar-pedido");
  }
}

/*  Função que seleciona o item do menu de sobremesas clicado pelo usuário, enquanto retira a seleção
 (caso houver) de algum item selecionado anteriormente.*/

function selecione_sobremesa(item_clicado) {
  //valores do item a ser selecionado
  const classe_setinha = item_clicado.querySelector(".preco .setinha");

  //valores pra checagem se ja existe selecionado
  const existe_selecionado = document.querySelector(".sobremesas .selecionado");

  if (existe_selecionado !== null) {
    const existe_setinha = existe_selecionado.querySelector(".preco .setinha");
    existe_setinha.classList.add("escondido");
    existe_selecionado.classList.remove("selecionado");
    flag_sobremesa--;
  }

  item_clicado.classList.add("selecionado");
  classe_setinha.classList.remove("escondido");
  flag_sobremesa++;

  //Condição para mudar cor do botão final e mensagem de finalizar pedido
  if (flag_prato + flag_bebida + flag_sobremesa === 3) {
    const botao = document.querySelector(".botao-pedido");
    botao.firstElementChild.innerHTML = "Fechar pedido";
    botao.classList.add("fechar-pedido");
  }
}

              // Requisitos bônus;

//Função que, caso esteja selecionado os 3 itens, ativa a janela de confirmação do pedido;
//Caso contrário, não realiza ação alguma
let seu_Nome = null;
let seu_Endereco = null;
let prato_selecionado = null;
let bebida_selecionada = null;
let sobre_selecionada = null;
let titulo_prato = null;
let titulo_bebida = null;
let titulo_sobre = null;
let preco_prato_str = null;
let preco_bebida_str = null;
let preco_sobre_str = null;
let preco_prato = 0;
let preco_bebida = 0;
let preco_sobre = 0;


function avalia_pedido() {
  if (flag_prato + flag_bebida + flag_sobremesa === 3) {
    
    // Já pede o nome e endereço pra mensagem final que vai ser mandada via whats
    seu_Nome = prompt("Qual o seu nome?");
    seu_Endereco = prompt("Qual o seu endereco?");
    //pega os itens selecionados
    prato_selecionado = document.querySelector(".pratos .selecionado");
    bebida_selecionada = document.querySelector(".bebidas .selecionado");
    sobre_selecionada = document.querySelector(".sobremesas .selecionado");

    // pega o nome dos pratos
    titulo_prato = prato_selecionado.children[1].innerHTML;
    titulo_bebida = bebida_selecionada.children[1].innerHTML;
    titulo_sobre = sobre_selecionada.children[1].innerHTML;

    // pega o preço dos pratos
    preco_prato_str = prato_selecionado.querySelector(".preco").children[0]
      .innerHTML;
    preco_bebida_str = bebida_selecionada.querySelector(".preco").children[0]
      .innerHTML;
    preco_sobre_str = sobre_selecionada.querySelector(".preco").children[0]
      .innerHTML;

    //obtém o preço dos pratos em valor numérico (retirando o "R$" e substituindo "," por ".")
    preco_prato = Number(preco_prato_str.replace("R$", "").replace(",", "."));
    preco_bebida = Number(preco_bebida_str.replace("R$", "").replace(",", "."));
    preco_sobre = Number(preco_sobre_str.replace("R$", "").replace(",", "."));

    //Agora finalmente preenche os dados da janela de confirmação com os dados selecionados
    const div_confirmacao = document.querySelector(
      ".caixa-confirmacao .texto-confirmacao"
    );

    const tela_cinza = document.querySelector(".esmaecer-tela");
    div_confirmacao.parentElement.classList.remove("escondido");
    tela_cinza.classList.remove("escondido");
    div_confirmacao.children[1].children[0].innerHTML = titulo_prato;
    div_confirmacao.children[1].children[1].innerHTML = preco_prato_str;
    div_confirmacao.children[2].children[0].innerHTML = titulo_bebida;
    div_confirmacao.children[2].children[1].innerHTML = preco_bebida_str;
    div_confirmacao.children[3].children[0].innerHTML = titulo_sobre;
    div_confirmacao.children[3].children[1].innerHTML = preco_sobre_str;
    div_confirmacao.children[4].children[1].innerHTML = `R$ ${(
      preco_prato +
      preco_bebida +
      preco_sobre
    ).toFixed(2)}`;
  }
}

//Finaliza pedido após o clique do usuário na janela de confirmação e envia a mensagem via WhatsApp

function finaliza_pedido() {
  const valor_total = preco_prato + preco_bebida + preco_sobre;

  //Parte bônus
  const mensagem_pedido = `Olá, gostaria de fazer o pedido:\n- Prato: ${titulo_prato}\n- Bebida: ${titulo_bebida}\n- Sobremesa: ${titulo_sobre}\nTotal: R$ ${valor_total.toFixed(
    2
  )}\n\nNome: ${seu_Nome}\nEndereço: ${seu_Endereco}`;

  window.open(`https://wa.me/?text=${encodeURIComponent(mensagem_pedido)}`);
  //prompt(mensagem_pedido);
}

//Fecha a janela de confirmação e volta para o menu onde o usuário pode alterar seu pedido
function cancela_pedido(){
  const div_confirmacao = document.querySelector(
    ".caixa-confirmacao .texto-confirmacao"
  );

  const tela_cinza = document.querySelector(".esmaecer-tela");
  div_confirmacao.parentElement.classList.add("escondido");
  tela_cinza.classList.add("escondido");
}

