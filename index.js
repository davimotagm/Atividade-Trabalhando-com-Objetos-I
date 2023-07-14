// 1 ª Parte: Modelagem

let pessoa = {
    nome: 'Júlia',
    anoDeNascimento: 2001,
    cpf: 12322333412,
    cidade: 'Taguatinga',
    estado: 'DF',
    logradouro: 'QNL',
}

let escola = {
    nome: 'CEMTN',
    cnpj: 21432123000100,
    areaDeAtuacao: 'Administrativo',
    cidade: 'Taguatinga',
    estado: 'DF',
    logradouro: 'QNC',
    curso: 'Educação Média'
}

let curso = {
    nome: 'Educação Média',
    duraçãoEmAnos: 3,
    turma: 'B',
    modulos: ['1º Semestre, 2º Semestre'],
}

let endereco = {
    cidade: 'Taguatinga',
    estado: 'DF',
    logradouro: 'QNL',
    cep: 70200003
}


// 2ª Parte: Manipulação - Estacionamento

const carro = {
    placa: "ABC123",
    classes: ["sedan"],
    luxo: true,
    potencia: 200,
    estacionado: true,
}

function obterPlaca() {
    return carro.placa
}

function verificarClasses() {
    if (carro.classes.length == 1) {
        return carro.classes[0]
    } else {
        return carro.classes
    }
}

function potenciaReal() {
    if (carro.luxo == true) {
        carro.potencia *= carro.potencia
    }
    return carro.potencia
}

function adicionarNovaClasse(classe) {
    let classesPermitidas = ['cupê', 'sedan', 'hatch-back', 'suv', 'crossover', 'cupê'];

    if (carro.classes.length >= 3) {
        return 'Este carro não pode ter mais classes';

    } else {
        if (classesPermitidas.includes(classe)) {
            if (carro.classes.includes(classe)) {
                return `O carro já possui a classe ${classe}`
            } else {
                carro.classes.push(classe)
                return `Classe ${classe} adicionada com sucesso`
            }
        } else {
            return "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê"
        }
    }
}


function naoMaisLuxo() {
    if (carro.estacionado == false) {
        return `O carro ${carro.placa} não está estacionado`; 
    }
    if (carro.luxo == false) {
        return `O carro ${carro.placa} não é luxuoso`;
    }
    if (carro.estacionado == true && carro.luxo == true) {
        carro.luxo = false
        return `O carro ${carro.placa} não é mais considerado um carro de luxo`
    }
}

console.log(naoMaisLuxo());
console.log(obterPlaca());
console.log(verificarClasses());
console.log(potenciaReal());
console.log(adicionarNovaClasse("cupê"))
