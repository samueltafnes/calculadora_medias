const form = document.getElementById('form_atividades');

const imgAprovado = `<img src="./images/aprovado.png" />`;
const imgReprovado = `<img src="./images/reprovado.png" />`;
const spanAprovado = `<span class="resultado aprovado"> Aprovado </span>`;
const spanReprovado = `<span class="resultado reprovado"> Reprovado </span>`;
const nota_minima = parseFloat(prompt('Digite o valor da nota mínima:'));

var linhas = '';
const array_Atividades = [];
const array_Notas = [];


function addLinha(){
    const nome_atividade = document.getElementById('nome_atv');
    const nota_atividade = document.getElementById('nota_atv');

    if (array_Atividades.includes(nome_atividade.value)){
        alert(`A atividade ${nome_atividade.value} já foi adicionada!`);
    }
    else{
        let linha = '<tr>';
        linha += `<td> ${nome_atividade.value} </td>`;
        linha += `<td> ${nota_atividade.value} </td>`;
        linha += `<td> ${nota_atividade.value >= nota_minima ? imgAprovado : imgReprovado } </td>`;
        linha += `</tr>`;
        linhas += linha;

        array_Atividades.push(nome_atividade.value);
        array_Notas.push(parseFloat(nota_atividade.value));
    }
    nome_atividade.value = '';
    nota_atividade.value = '';
}

function atualizarTabela(){
    const corpo_tabela = document.querySelector('tbody');
    corpo_tabela.innerHTML = linhas;
}

function calcularMediaFinal(){
    let somaTotal = 0;

    for (let i = 0; i < array_Notas.length; i++){
        somaTotal += array_Notas[i];
    }
    return somaTotal / array_Notas.length;
}

function atualizarMediaFinal(){
    let media = calcularMediaFinal();
    document.getElementById('mediaFinal').innerHTML = media;
    document.getElementById('resultadoFinal').innerHTML = media >= nota_minima ? spanAprovado : spanReprovado;
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    atualizarTabela();
    atualizarMediaFinal()
})








