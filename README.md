# NovaM3

## HTML Base w/ Laravel Mix

Criado apenas com o intuito de montar páginas de websites.

### 1. Início

Execute o seguinte comando:

```sh
npm install
```

### 2. Subir servidor PHP

O Laravel-Mix criará um proxy reverso de `http://127.0.0.1:3000` para `http://127.0.0.1:4000`. Então, para ter o projeto rodando, será necessário startar um servidor PHP na porta `4000`.
Execute o seguinte comando:

```sh
cd public
php -S 127.0.0.1:4000
```

### 3. NPM observando tudo

Para ficar observando as alterações será necessário rodar `npm run watch`. Todas as alterações realizadas nos arquivos `SCSS` e `JS` dentro da pasta resources serão compilados para a pasta `public/css` e `public/js` respectivamente. Além disso, todas as alterações em arquivos `PHP` dentro da pasta `public` também serão observadas.

Provavelmente, na primeira vez que executar o comando, ele irá instalar algumas coisas e então parará. Basta executar `npm run watch` novamente.

### 4. Hot Reload

Todos os arquivos observados, quando alterados, recarregarão a página.
