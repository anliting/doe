import fs from'fs'
fs.writeFileSync(
    'dist/doe.mjs',
    `/*\n${fs.readFileSync('license')}*/\n${
        fs.readFileSync('export/main.mjs')
    }`
)
