# Ecommerce

Projeto esta sendo desenvolvido durante a Mentoria Angular Pro 2.0, voltado para estudo de arquitetura e boas praticas em uma aplicação Angular com NX.

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **Este workspace foi gerado pelo [Build System NX](https://nx.dev)** ✨

## Setup do projeto

```
git clone https://github.com/willflame/ecommerce.git
cd ecommerce
npm install
```

## Servir o projeto localmente

```
npm start
```

Ou

```
npx nx serve
```

O projeto será servido por padrão em http://localhost:4200/.

## Executar tarefas independentes

```
npx nx <NOME_DA_TAREFA> <NOME_DO_MODULO>
```

Exemplos:

```
npx nx test ecommerce
npx nx lint modules-layout
```

## Visualizar Dependency Graph

```
npx nx graph
```

## Executar tarefas somente do que foi afetado

```
npx nx affected:<NOME_DA_TAREFA>
```

Exemplos:

```
npx nx affected:test
npx nx affected:graph
```

### Documentações adicionais

[Arquitetura do projeto](./docs/project-architecture.md)
[Configurações recomendadas](./docs/configuratons-vscode.md)
[Extensões recomendadas para Visual Studio Code](./docs/extensions.md)
