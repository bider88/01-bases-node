const { argv } = require('./config/yargs')
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar')

let comando = argv._[0]

const base = argv.base | argv.b
const limite = argv.limite | argv.l

switch( comando ) {
    case 'listar':
        listarTabla(base, limite)
            .then( file => console.info(`Listando base ${base} con límite ${limite}:\n${file}`) )
            .catch( err => console.log(colors.red(err)))
    break
    case 'crear':
        crearArchivo(base, limite)
            .then( file => console.info(`Creando base ${base} con límite ${limite}: ${file}`) )
            .catch( err => console.log(colors.red(err)))
    break
    default:
        console.log('Comando no reconocido')
}

