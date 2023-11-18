## Início do Projeto
- npm init -y
- npm i typescript @types/node --save-dev
- npx tsc --init            ->               Cria o tsconfig!
- npm i ts-node --save-dev

# tsconfig.json
- Edição do outDir

# package.json
- "build": "tsc",
- "start": "node dist/app.js"
- "start:dev": "ts-node src/app.ts"

# Execução
- npm rum build             ->              Executar só na primeira vez!
- npm start