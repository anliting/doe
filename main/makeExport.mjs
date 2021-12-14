import fs from'fs'
import minify from'./minify.mjs'
;(async()=>{
    fs.promises.writeFile(
        'export/main.mjs',
        (await minify(''+fs.readFileSync('main/main.mjs')))
    )
})()
