import fs from 'node:fs/promises'
import morses from '../db/morses.json' assert { type: 'json' }



const DB_PATH = './db/morses.json'




let NEXT = Object
    .keys(morses)
    .reduce((biggest, id) => biggest > id ? biggest : id, 0)  //NEXT parte da 0 perchè il db parte da un oggetto vuoto quindi il primo NEXT sarà 0

export const create = async (req, res) => {
    NEXT++
    morses[NEXT] = req.body


    //Per permettere il salvataggio nel file system!!!
    await fs.writeFile(DB_PATH, JSON.stringify(morses, null, '  '))

    res
        .status(201)
        .send({
            message: 'morse created'
        })
}



export const get = (req, res) => {
    let morse = morses[req.params.id]
    if (morse) {
        res.send({ morse })
    } else {
        res.status
        res.send({
            data: {},
            error: true,
            message: 'morse not found'
        })
    }
}


export const getAll = (req, res) => {
    res.send(morses)
}

export const update = async (req, res) => {
    let morse = morses[req.params.id]
    if (morse) {
        let newmorse = { ...morse, ...req.body }
        morses[req.params.id] = newmorse
        await fs.writeFile(DB_PATH, JSON.stringify(morses, null, '  '))
        res.send(newmorse)
    } else {
        res.status(200)
        res.send({
            data: {},
            error: true,
            message: 'morse not found'
        })
    }

}


export const remove = async (req, res) => {
    let morse = morses[req.params.id]
    if (morse) {
        delete morses[req.params.id]

        await fs.writeFile(DB_PATH, JSON.stringify(morses, null, '  '))
        res.status(200).end()
    } else {
        res.status(200)
        res.send({
            data: {},
            error: true,
            message: 'morse not found'
        })
    }

}


// const response = await fetch ()