import fs from'fs'
import{minify}from'terser'
;(async()=>{
    fs.promises.writeFile(
        'doe/export/main.mjs',
        (await minify(''+fs.readFileSync('doe/main/main.mjs'))).code
    )
})()
