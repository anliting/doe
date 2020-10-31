import fs from'fs'
fs.writeFileSync(
    'doe/dist/doe.mjs',
    `/*${fs.readFileSync('doe/license')}*/${
        fs.readFileSync('doe/export/main.mjs')
    }`
)
