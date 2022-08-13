
//Variáveis globais que funcionam como sinalizadores pra mostrar que existe algum item respectivo ao
// seu nome selecionado -> 0, se não existe item selecionado; 1, caso exista algum item selecionado.

let flag_prato = 0;
let flag_bebida = 0;
let flag_sobremesa = 0;

/*  Função que seleciona o item do menu de pratos clicado pelo usuário, enquanto retira a seleção (caso houver)
de algum item selecionado anteriormente.
    Como o professor ensinou primeiramente dessa maneira, deixei no menu dos pratos uma resolução usando o
queryselector, e pra bebidas e sobremesas utilizei o parâmetro "this" que facilita mais as coisas*/

function selecione_prato(classe_item){
    //valores do item a ser selecionado
    const item_clicado = document.querySelector(classe_item);
    const classe_setinha = item_clicado.lastElementChild.lastElementChild;

    //valores pra checagem se ja existe selecionado
    const existe_selecionado = document.querySelector('.pratos .selecionado');
    
    if(existe_selecionado !== null){
        const existe_setinha = existe_selecionado.lastElementChild.lastElementChild;
        existe_setinha.classList.remove('setinha-ligada');
        existe_selecionado.classList.remove('selecionado');
        flag_prato--;
    }

    item_clicado.classList.add('selecionado');
    classe_setinha.classList.add('setinha-ligada');
    flag_prato++;

    //Condição para mudar cor do botão final e mensagem de finalizar pedido
    if(flag_prato + flag_bebida + flag_sobremesa === 3){
        const botao = document.querySelector('.botao-pedido');
        botao.firstElementChild.innerHTML = 'Fechar pedido';
        botao.classList.add('fechar-pedido');
    }
}

/*  Função que seleciona o item do menu de bebidas clicado pelo usuário, enquanto retira a seleção
 (caso houver) de algum item selecionado anteriormente.*/

function selecione_bebida(item_clicado){
    //valores do item a ser selecionado
    const classe_setinha = item_clicado.querySelector('.preco .setinha');

    //valores pra checagem se ja existe selecionado
    const existe_selecionado = document.querySelector('.bebidas .selecionado');
    
    if(existe_selecionado !== null){
        const existe_setinha = existe_selecionado.querySelector('.preco .setinha');;
        existe_setinha.classList.remove('setinha-ligada');
        existe_selecionado.classList.remove('selecionado');
        flag_bebida--;
    }

    item_clicado.classList.add('selecionado');
    classe_setinha.classList.add('setinha-ligada');
    flag_bebida++;

    //Condição para mudar cor do botão final e mensagem de finalizar pedido
    if(flag_prato + flag_bebida + flag_sobremesa === 3){
        const botao = document.querySelector('.botao-pedido');
        botao.firstElementChild.innerHTML = 'Fechar pedido';
        botao.classList.add('fechar-pedido');
    }
}

/*  Função que seleciona o item do menu de sobremesas clicado pelo usuário, enquanto retira a seleção
 (caso houver) de algum item selecionado anteriormente.*/

function selecione_sobremesa(item_clicado){
    //valores do item a ser selecionado
    const classe_setinha = item_clicado.querySelector('.preco .setinha');

    //valores pra checagem se ja existe selecionado
    const existe_selecionado = document.querySelector('.sobremesas .selecionado');
    
    if(existe_selecionado !== null){
        const existe_setinha = existe_selecionado.querySelector('.preco .setinha');;
        existe_setinha.classList.remove('setinha-ligada');
        existe_selecionado.classList.remove('selecionado');
        flag_sobremesa--;
    }

    item_clicado.classList.add('selecionado');
    classe_setinha.classList.add('setinha-ligada');
    flag_sobremesa++;

    //Condição para mudar cor do botão final e mensagem de finalizar pedido
    if(flag_prato + flag_bebida + flag_sobremesa === 3){
        const botao = document.querySelector('.botao-pedido');
        botao.firstElementChild.innerHTML = 'Fechar pedido';
        botao.classList.add('fechar-pedido');
    }
}