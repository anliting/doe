import fs from'fs'
import{minify}from'terser'
;(async()=>{
    fs.promises.writeFile(
        'export/main.mjs',
        (await minify(''+fs.readFileSync('main/main.mjs'))).code+'\n'
    )
})()
