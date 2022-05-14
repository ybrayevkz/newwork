const fs = require('fs')


module.exports = async function(req, res, next){
    try {
        if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).json({message: "Файл не был загружен!"})
        }

        const file = req.files.file

        if(file.size > 1024 * 1024){
            removeTmp(file.tempFilePath)
            return res.status(400).json({message: "Слишком большой файл по памяти!"})
        }

        // if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg'){
        //     removeTmp(file.tempFilePath)
        //     return res.status(400).json({message: "Неправильный формат файла!"})
        // }

        next()

    } catch (e) {
        return res.status(500).json({message: e.message})
    }
}

const removeTmp = (path) => {
    fs.unlink(path, e => {
        if(e) throw e
    })
}