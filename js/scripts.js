// Cria um Elemento e insere no <body>;
const titulo = document.createElement("h1");
titulo.innerText = "Avançando com Javascript!";
// document.body.appendChild(titulo);

//Insire dentro de outro elemento;
const container = document.querySelector("#container");
// container.appendChild(titulo);

// If e Ternário
const idade = 18;

if (idade >= 18) {
  // alert('Maior de Idade');
} else {
  // alert('Menor de Idade');
}

//Operador Ternário
idade >= 18 ? console.log("Maior de Idade") : console.log("Menor de Idade");

//É utilizado quando temos valores exatos, por exemplo, um menu;
switch (idade) {
  case 18:
    console.log("Tem 18 anos");
    break;

  case 30:
    console.log("Tem 30 anos");
    break;
  default:
    console.log("Caso não seja nenhuma das opções anteriores");
    break;
}

// Aspas Simples ou Aspas Duplas
const nome = "João";
const sobrenome = "Bragança";
const frase1 = "Olá " + nome + " " + sobrenome + "!";
//template String
const frase2 = `Olá ${nome} ${sobrenome}!`;

console.log(frase1);
console.log(frase2);

//Estruturas de Repetição - for, while, do while
for (let index = 0; index < 10; index++) {
  console.log(index);
}

while (idade != 18) {
  console.log("Idade diferente de 18");
}

do {
  console.log("Vai executar pelo menos uma vez!");
} while (idade != 18);

// Consulta do Tipo inferido pelo JS
let soma = 10 + 20;
console.log(typeof soma);
soma = "10" + 20;
console.log(typeof soma);

//Funções com function e com arrow function

function minhaFunction1() {
  console.log("Minha função!");
}
minhaFunction1();

function minhaFunction2(nome, idade) {
  console.log(`Olá ${nome}, você tem ${idade} anos`);
}

minhaFunction2("João Felipe", 31);

function somaDoisNumeros(num1, num2) {
  return num1 + num2;
}

const result = somaDoisNumeros(10, 20);
console.log("Resultado: ", result);

// Arrow Function () => {}
const multiplica = (num1, num2) => {
  // Lógicas para a função - Cálculos de equação
  return num1 * num2;
};

const multiplica2 = (num1, num2) => (
  num1 * num2
);

const multiplica3 = (num1, num2) => num1 * num2;

console.log(multiplica(2, 5));
console.log(multiplica2(2, 5));
console.log(multiplica3(2, 5));

// Array[]
const frutas = ["Banana", "Maçã", "Goiaba"];
console.log(frutas);

// Tamanho do Array
console.log("Tamanho do Array: ", frutas.length);

const arrayMisto = [123, "String", {}, undefined, null, true];
console.log(arrayMisto);

// substitução de valor
arrayMisto[0] = 'Outra coisa'
console.log(arrayMisto)

// Inserir na última posição
frutas.push("Laranja");
console.log(frutas);

// Remover da última posição
console.log(frutas);
frutas.pop();

// Remover o primeiro elemento
frutas.shift();

// Objetos - chave: valor,

const user = {
  nome: "João",
  idade: 31,
  frutasPreferidas: ["Banana", "maçã", "manga"],
  temHabilitacao: true,
};

console.log(user);

// Acessar informações no objeto
console.log(user.frutasPreferidas[0]);

// Acessando a última posição do Array
console.log(user.frutasPreferidas[user.frutasPreferidas.length - 1]);

const users = [
  {
    nome: "João",
    idade: 31,
    frutasPreferidas: ["Banana", "maçã", "manga"],
    temHabilitacao: true,
  },
  {
    nome: "Felipe",
    idade: 19,
    frutasPreferidas: ["Banana", "maçã", "manga"],
    temHabilitacao: true,
  },
  {
    nome: "Juliana",
    idade: 25,
    frutasPreferidas: ["Banana", "maçã", "manga"],
    temHabilitacao: true,
  },
];

console.log(users)

// Nome na posição 0 do array users
console.log(users[0].nome)

// Primeira fruta preferida do users[1]
console.log(users[1].frutasPreferidas[0]);


//Crie um array de objetos para uma lista de contatos
//Cada contato vai ter "NOME", "CELULAR", "Email", "DATA DE NASCIMENTO"
//Criar 3 Contatos diferentes

const contatos = 
[
    {
        nome: 'João',
        celular: '(24)9999-9999',
        email: 'brjoaof@gmail.com',
        dataNascimento: '08/03/1991'
    },
    {
        nome: 'Felipe',
        celular: '(24)9999-9999',
        email: 'Felipe@gmail.com',
        dataNascimento: '08/03/1991'
    },
    {
        nome: 'Aline',
        celular: '(24)9999-9999',
        email: 'anessa@gmail.com',
        dataNascimento: '08/03/1991'
    }
]

// forEach - Simular ao for - Não retorna nada;
const contatosForEach = contatos.forEach((contato) => {
    console.log(contato.nome)
    //return não funciona
    return contato.nome 
})

console.log("Array de Nomes: ", contatosForEach);

// Simular ao forEach, porém é possível retornar um elemento
const contatosMap = contatos.map((contato) => {
    console.log(contato.email)
    return contato.nome
})

console.log("Array de Nomes: ", contatosMap);

const numerosNaturais = [1,2,3,4,5,6,7,8,9,10];

//  filter() filtra um array - Caso a condição seja falsa, 
// o elemento não entra no novo array
const numerosPares = numerosNaturais.filter( numero => numero.algumChave % 2 === 0)

console.log(numerosPares)

const contatosComA = contatos.filter(contato => contato.nome[0] === 'A' || contato.nome[0] === 'a')

console.log(contatosComA)

// REQUISIÇÕES -> Funções Assíncronas

const url = 'https://jsonplaceholder.typicode.com/users'

//Async - Await
const getData = async () => {
  const response = await fetch(url);
  const dados = await response.json();
  
  console.log(dados);
}

//Função normal Assíncrona
async function assincrona() {
  //códigos...
}

getData();

// .then()
// const getData2 = () => {
//   fetch(url)
//     .then( response => response.json())
//     .then( resp =>  console.log(resp))
// }

// getData2();



// Fazer fetch de https://jsonplaceholder.typicode.com/todos
// Salvar no array tarefas
// Consolar o Array

//Criar novo array com as tarefas do userId 1 - Utilizar Filter
 //Exibir no console

const loading = document.querySelector("#loading");
const todosContainer = document.querySelector("#todosContainer");

const getTodos = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const tarefas = await response.json();
  loading.classList.add('hide');

  const tarefasUserId1 = tarefas.filter( tarefa => tarefa.userId === 1)
  console.log(tarefasUserId1)

  tarefas.forEach(tarefa => {
    const todoContainer = document.createElement('div');
    const titulo = document.createElement('h2');
    const completed = document.createElement('p');
    titulo.innerText = 'Título: '+ tarefa.title;
    completed.innerText = "Concluída: " + tarefa.completed;
    todoContainer.appendChild(titulo);
    todoContainer.appendChild(completed);

    todosContainer.appendChild(todoContainer);
  })

}
getTodos();


