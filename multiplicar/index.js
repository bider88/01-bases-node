const fs = require('fs')
const colors = require('colors')

let listarTabla = (base, limite = 10) => {

    console.log('========================='.green)
    console.log(`Tabla de ${ base } con limite ${ limite }`.green)
    console.log('========================='.green)

    return  new Promise((resolve, reject) => {
        if (!Number(base)) { reject(`El valor "${base}" de la base no es un número`.red); return; }
        if (!Number(limite)) { reject(`El valor "${limite}" del limite no es un número`.red); return; }

        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${ base * i }\n`.cyan
        }

        resolve(data)
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) { reject(`El valor "${base}" de la base no es un número`.red); return; }
        if (!Number(limite)) { reject(`El valor "${limite}" del limite no es un número`.red); return; }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green)
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

