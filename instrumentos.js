const prompt = require("prompt-sync")()
const LocalStorage = require("node-localstorage").LocalStorage
localStorage = new LocalStorage("./dados")

let parar = 0
let exclusao = 0

function continuar() {
    while (true) {
        console.log('\n\x1b[34m%s\x1b[32m', 'Deseja continuar a usar o programa? (S/N)')
        const continuar = (prompt()).toLowerCase().trim()
        if (continuar === 's') {
            console.clear()
            break
        } else if (continuar === 'n') {
            parar += 1
            console.clear()
            break
        }
    }
}

while (true) {
    exclusao = 0
    console.clear()

    if (parar !== 0) {
        break
    }

    titulo(' '.repeat(7) + 'Cadastro de Instrumentos Musicais na Loja XYZ')
    console.log()
    console.log('1. Incluir Instrumento')
    console.log('2. Listar Instrumentos')
    console.log('3. Pesquisar por Tipo')
    console.log('4. Excluir Instrumento')
    console.log('5. Estatística')
    console.log('6. Finalizar')
    console.log()

    console.log('\n\x1b[34m%s\x1b[32m', 'Opção:')
    const opcao = Number((prompt()).trim())
    if (opcao === 1) {
        incluir()
    } else if (opcao === 2) {
        listar()
    } else if (opcao === 3) {
        pesquisar()
    } else if (opcao === 4) {
        excluir()
    } else if (opcao === 5) {
        estatistica()
    } else if (opcao === 6) {
        break
    } else {
        console.log('\n\x1b[34m%s\x1b[32m', 'Por favor, escolha uma das opções.')
    }
}

function titulo(texto) {
    console.log('\x1b[35m%s\x1b[32m', '-'.repeat(60))
    console.log('\x1b[35m%s\x1b[32m', texto)
    console.log('\x1b[35m%s\x1b[32m', '-'.repeat(60))
}

function cabecalho() {
    console.log('\x1b[35m%s\x1b[32m', 'Nº Marca do Instrumento....: Tipo' + '.'.repeat(15) + ': ' + 'Preço R$.: ')
}

function incluir() {

    titulo(' '.repeat(18) + 'Inclusão de Instrumentos')

    while (true) {
        console.log('Escolha a marca: ')
        console.log('1. Nux')
        console.log('2. Vox')
        console.log('3. Boss')
        console.log('4. Condor')
        console.log('5. Roland')
        console.log('6. Rozini')
        console.log('7. Tagima')
        console.log('8. Rockbag')
        console.log('9. D\'Addario')
        console.log()
        break
    }
    while (true) {
        console.log('\n\x1b[34m%s\x1b[32m', 'Marca do Instrumento:')
        var marca = Number(prompt().trim())
        if (marca === 1) {
            marca = 'Nux'
            break
        } else if (marca === 2) {
            marca = 'Vox'
            break
        } else if (marca === 3) {
            marca = 'Boss'
            break
        } else if (marca === 4) {
            marca = 'Condor'
            break
        } else if (marca === 5) {
            marca = 'Roland'
            break
        } else if (marca === 6) {
            marca = 'Rozini'
            break
        } else if (marca === 7) {
            marca = 'Tagima'
            break
        } else if (marca === 8) {
            marca = 'Rockbag'
            break
        } else if (marca === 9) {
            marca = 'D\'Addario'
            break
        } else {
            console.log('\n\x1b[34m%s\x1b[32m', '\nPor favor, escolha uma opção corretamente.')
        }
    }

    while (true) {
        console.log('\nEscolha o tipo: ')
        console.log('1. Gaita')
        console.log('2. Harpa')
        console.log('3. Flauta')
        console.log('4. Tambor')
        console.log('5. Violão')
        console.log('6. Bateria')
        console.log('7. Violino')
        console.log('8. Pandeiro')
        console.log('9. Saxofone')
        console.log()
        break
    }
    while (true) {
        console.log('\n\x1b[34m%s\x1b[32m', 'Tipo do Instrumento:')
        var tipo = Number(prompt().trim())
        if (tipo === 1) {
            tipo = 'Gaita'
            break
        } else if (tipo === 2) {
            tipo = 'Harpa'
            break
        } else if (tipo === 3) {
            tipo = 'Flauta'
            break
        } else if (tipo === 4) {
            tipo = 'Tambor'
            break
        } else if (tipo === 5) {
            tipo = 'Violão'
            break
        } else if (tipo === 6) {
            tipo = 'Bateria'
            break
        } else if (tipo === 7) {
            tipo = 'Violino'
            break
        } else if (tipo === 8) {
            tipo = 'Pandeiro'
            break
        } else if (tipo === 9) {
            tipo = 'Saxofone'
            break
        } else {
            console.log('\n\x1b[34m%s\x1b[32m', '\nPor favor, escolha uma opção corretamente.')
        }
    }

    while (true) {
        console.log('\n\x1b[34m%s\x1b[32m', 'Preço R$:')
        var preco = String(prompt().trim())

        // remove o bug que o usuário cadastraria algo apertando a tecla espaço.
        preco = preco.replace(/\s/g, '')
        if (preco === '') {
            console.log('\n\x1b[34m%s\x1b[32m', '\nPor favor, digite uma valor corretamente.')
        } else if (!isNaN(preco)) {
            preco = (Number(preco)).toFixed(2)
            break
        } else {
            console.log('\n\x1b[34m%s\x1b[32m', '\nPor favor, digite uma valor corretamente.')
        }
    }

    let dados = ''
    // se já existe o arquivo instrumentos.txt

    if (localStorage.getItem('instrumentos.txt')) {
        // atribui a dados todo o conteúdo do arquivo + \n (quebra de linha)    
        dados = localStorage.getItem('instrumentos.txt') + '\n'
    }

    // salva os dados no arquivo instrumentos.txt
    localStorage.setItem('instrumentos.txt', `${dados}${marca};${tipo};${preco}`)
    console.log('\n\x1b[34m%s\x1b[32m', '\nOk! Instrumento cadastrado com sucesso.')
    console.log()
    console.log('\n\x1b[34m%s\x1b[32m', 'Deseja incluir mais algum instrumento? (S/N)')

    const cont_incluir = (prompt()).toLowerCase().trim()
    if (cont_incluir === 's') {
        console.clear()
        incluir()
    } else if (cont_incluir === 'n') {
        continuar()
    }
}

function listar() {
    titulo(' '.repeat(8) + 'Lista de Instrumentos Musicais Cadastrados')

    // se não houver o arquivo
    if (!localStorage.getItem('instrumentos.txt')) {
        console.log('\n\x1b[34m%s\x1b[32m', 'Obs.: Não há instrumentos cadastrados.')
        return
    }

    cabecalho()

    // obtém o conteúdo do arquivo e atribui para a variável instrumentos
    const instrumentos = localStorage.getItem('instrumentos.txt')

    // cria elementos de vetor a cada ocorrência da '\n'
    const linhas = instrumentos.split('\n')

    let num = 0

    for (linha of linhas) {

        const partes = linha.split(";")
        const marca = partes[0]
        const tipo = partes[1]
        const preco = Number(partes[2])
        num++

        console.log(`${String(num).padStart(2)} ${marca.padEnd(25)} ${tipo.padEnd(20)} ${preco.toFixed(2).padStart(10)}`)
    }

    if (exclusao === 0) { continuar() }
}

function pesquisar() {
    titulo(' '.repeat(18) + 'Pesquisa de Instrumentos')

    // se não houver o arquivo
    if (!localStorage.getItem('instrumentos.txt')) {
        console.log('\n\x1b[34m%s\x1b[32m', 'Obs.: Não há instrumentos cadastrados.')
        return
    }

    while (true) {
        console.log('\nEscolha o tipo: ')
        console.log('1. Gaita')
        console.log('2. Harpa')
        console.log('3. Flauta')
        console.log('4. Tambor')
        console.log('5. Violão')
        console.log('6. Bateria')
        console.log('7. Violino')
        console.log('8. Pandeiro')
        console.log('9. Saxofone')
        console.log()
        break
    }

    while (true) {
        console.log('\n\x1b[34m%s\x1b[32m', 'Opção:')
        var pesquisa = Number(prompt().trim())
        if (pesquisa === 1) {
            pesquisa = 'Gaita'
            break
        } else if (pesquisa === 2) {
            pesquisa = 'Harpa'
            break
        } else if (pesquisa === 3) {
            pesquisa = 'Flauta'
            break
        } else if (pesquisa === 4) {
            pesquisa = 'Tambor'
            break
        } else if (pesquisa === 5) {
            pesquisa = 'Violão'
            break
        } else if (pesquisa === 6) {
            pesquisa = 'Bateria'
            break
        } else if (pesquisa === 7) {
            pesquisa = 'Violino'
            break
        } else if (pesquisa === 8) {
            pesquisa = 'Pandeiro'
            break
        } else if (pesquisa === 9) {
            pesquisa = 'Saxofone'
            break
        } else {
            console.log('\n\x1b[34m%s\x1b[32m', '\nPor favor, escolha uma opção corretamente.')
        }
    }

    // obtém o conteúdo do arquivo e atribui para a variável instrumentos
    const instrumentos = localStorage.getItem('instrumentos.txt')

    // cria elementos de vetor a cada ocorrência da '\n'
    const linhas = instrumentos.split('\n')

    let num = 0

    for (linha of linhas) {

        const partes = linha.split(";")
        const tipo = partes[1]

        if (tipo === pesquisa) {
            num++
        }
    }
    if (num == 0) {
        console.log('\n\x1b[34m%s\x1b[32m', `\nNão há instrumentos do tipo "${pesquisa}".`)
    } else {
        console.log()
        cabecalho()
        num = 0
        for (linha of linhas) {

            const partes = linha.split(";")
            const marca = partes[0]
            const tipo = partes[1]
            const preco = Number(partes[2])

            if (tipo === pesquisa) {
                num++
                console.log(`${String(num).padStart(2)} ${marca.padEnd(25)} ${tipo.padEnd(20)} ${preco.toFixed(2).padStart(10)}`)
            }
        }
    }
    console.log()
    console.log('\n\x1b[34m%s\x1b[32m', 'Deseja realizar mais alguma pesquisa? (S/N)')

    const cont_pesquisa = (prompt()).toLowerCase().trim()
    if (cont_pesquisa === 's') {
        console.clear()
        pesquisar()
    } else if (cont_pesquisa === 'n') {
        continuar()
    }
}
function excluir() {
    exclusao = 1
    listar()

    console.log()
    console.log('\n\x1b[34m%s\x1b[32m', 'Nº do instrumento a ser excluído (0, para voltar)?')
    const numExc = Number(prompt().trim())

    if (numExc === 0) {
        return
    }

    // obtém todo o conteúdo do arquivo instrumentos.txt
    const instrumentos = localStorage.getItem('instrumentos.txt')

    // separa em linhas os elementos do vetor
    const linhas = instrumentos.split('\n')

    // remove da linha informada (-1, por o vetor inicia em 0) e a quantidade de 1 linha
    linhas.splice(numExc - 1, 1)

    // salva no arquivo o novo conteúdo do vetor (sem a linha removida)
    localStorage.setItem('instrumentos.txt', linhas.join('\n'))

    console.log('\n\x1b[34m%s\x1b[32m', 'Ok! Instrumento removido com sucesso!')
    console.log()
    console.log('\n\x1b[34m%s\x1b[32m', 'Deseja excluir mais algum? (S/N)')

    const cont_remover = (prompt()).toLowerCase().trim()
    if (cont_remover === 's') {
        console.clear()
        excluir()
    } else if (cont_remover === 'n') {
        continuar()
    }

}
function estatistica() {
    titulo(' '.repeat(6) + 'Estatística de Instrumentos Musicais Cadastrados')

    // obtém o conteúdo do arquivo e atribui para a variável instrumentos
    const instrumentos = localStorage.getItem('instrumentos.txt')

    // cria elementos de vetor a cada ocorrência da '\n'
    const linhas = instrumentos.split('\n')

    let num = 0
    let total = 0
    let maior = 0
    let instrumento = ''

    for (linha of linhas) {
        partes = linha.split(";")
        marca = partes[0]
        preco = Number(partes[2])
        num++
        total += preco

        if (preco > maior) {
            maior = preco
            instrumento = marca
        }
    }
    const media = total / num

    console.log(`Nº de Instrumentos Cadastrados...: ${num}`)
    console.log(`Total do Preço dos Instrumentos..: ${total.toFixed(2)}`)
    console.log(`Preço Médio dos Instrumentos R$..: ${media.toFixed(2)}`)
    console.log(`Instrumento de Maior Preço R$....: ${maior.toFixed(2)} - ${instrumento}`)

    continuar()
}
// teste