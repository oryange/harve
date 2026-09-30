# Guia Prático de Git: do Primeiro Commit ao Trabalho em Equipe

Este guia é para praticar. Você vai criar seu primeiro projeto, trabalhar em grupo e aprender a resolver os erros mais comuns.

> **Antes de começar:**
> 1. Siga o **Guia de Configuração do GitHub na Máquina Local** (Git instalado e chave SSH funcionando).
> 2. Deixe aberto o **Comandos Mais Usados do Git** para consultar durante os exercícios.

---

## Parte 1: Meu Primeiro Projeto

Neste exercício, você cria um repositório, faz alterações e envia para o GitHub. Rode `git status` entre os passos para ver o que muda. Esse é o melhor jeito de entender o Git.

### 1.1 Criando o repositório no GitHub

1. No GitHub, clique no **+** no canto superior direito e escolha **New repository**.
2. Em **Repository name**, digite `meu-primeiro-repo`.
3. Deixe como **Public**.
4. Marque a opção **Add a README file**.
5. Clique em **Create repository**.

### 1.2 Clonando para o seu computador

No repositório criado, clique no botão **Code**, escolha a aba **SSH** e copie a URL. Depois, no terminal:

```bash
git clone git@github.com:seu-usuario/meu-primeiro-repo.git
cd meu-primeiro-repo
git status
```

O `git status` deve mostrar `nothing to commit, working tree clean`, ou seja, não há nenhuma mudança.

### 1.3 Fazendo a primeira alteração

Abra o arquivo `README.md` no seu editor e troque o conteúdo por:

```markdown
# Meu Primeiro Repositório

Olá! Meu nome é Seu Nome e este é meu primeiro projeto com Git.

## O que estou aprendendo
- Git
- GitHub
```

Salve o arquivo e veja o que o Git percebeu:

```bash
git status     # README.md aparece em vermelho, como "modified"
git diff       # mostra as linhas que saíram (-) e as que entraram (+)
```

> Lembre: se o terminal "travar" no `git diff`, aperte `q` para sair.

### 1.4 Salvando no histórico

```bash
git add README.md
git status     # agora README.md aparece em verde: está na área de preparação
git commit -m "Atualiza README com apresentação"
git status     # voltou a "working tree clean"
git log --oneline
```

No `git log --oneline` aparecem dois commits: o que o GitHub criou junto com o README e o seu.

### 1.5 Enviando para o GitHub

```bash
git push
```

Atualize a página do repositório no navegador. Seu texto novo aparece na página inicial do repositório. 🎉

### 1.6 Pratique mais uma vez

1. Crie um arquivo novo, `anotacoes.md`, e escreva qualquer coisa nele.
2. Rode `git status`. Repare que o arquivo aparece como **untracked** (o Git ainda não acompanha esse arquivo).
3. Faça `git add`, `git commit` e `git push`.
4. Confira no GitHub e clique em **commits** para ver o histórico.

---

## Parte 2: Trabalhando em Equipe

Quando mais de uma pessoa mexe no mesmo projeto, o ideal é **não fazer commit direto na `main`**. Cada pessoa trabalha na própria branch e, quando termina, pede para juntar o trabalho com a `main` por meio de um **Pull Request (PR)**.

Por que trabalhar assim:

- A `main` fica sempre funcionando.
- Os colegas podem revisar seu código antes de ele entrar no projeto.
- Fica registrado quem fez o quê, e por quê.

### 2.1 Adicionando colegas ao repositório

Quem criou o repositório faz:

1. No repositório, clique em **Settings**.
2. No menu lateral, clique em **Collaborators** (na seção **Access**).
3. Clique em **Add people** e digite o usuário do GitHub do colega.

O colega recebe um convite por email (ou nas notificações do GitHub) e precisa **aceitar** antes de conseguir fazer push. Depois de aceitar, ele clona o repositório normalmente.

### 2.2 O fluxo com branch e Pull Request

**1. Atualize sua `main` e crie uma branch para a sua tarefa:**

```bash
git switch main
git pull
git switch -c adiciona-contato
```

> Dê à branch um nome que diga o que você vai fazer, como `adiciona-contato` ou `corrige-menu`.

**2. Faça suas alterações e os commits normalmente:**

```bash
git add .
git commit -m "Adiciona seção de contato no README"
```

**3. Envie a branch para o GitHub.** No primeiro push de uma branch nova, use `-u`:

```bash
git push -u origin adiciona-contato
```

**4. Abra o Pull Request:**

1. No GitHub, vai aparecer um aviso amarelo com o botão **Compare & pull request**. Clique nele.
2. Confira se está `base: main` ← `compare: adiciona-contato`.
3. Escreva um título e uma descrição do que você fez.
4. Em **Reviewers**, escolha um colega para revisar.
5. Clique em **Create pull request**.

**5. Revisão:** o colega abre o PR, vai na aba **Files changed**, lê as mudanças e pode deixar comentários. Se precisar corrigir algo, faça novos commits na mesma branch e dê `git push`. O PR se atualiza sozinho.

**6. Merge:** com o PR aprovado, clique em **Merge pull request** e depois em **Confirm merge**. Pronto: suas mudanças estão na `main`.

**7. Atualize seu computador e apague a branch que já foi usada:**

```bash
git switch main
git pull
git branch -d adiciona-contato
```

### 2.3 Exercício: resolvendo um conflito

Um conflito acontece quando duas pessoas mudam **a mesma linha** do mesmo arquivo. Parece assustador, mas é fácil de resolver. Vamos provocar um de propósito, em dupla.

1. **Pessoa A e Pessoa B:** as duas rodam `git switch main` e `git pull`.
2. **Pessoa A:** muda a primeira linha do `README.md` para `# Projeto da Dupla A`, faz commit e `git push`.
3. **Pessoa B:** **sem** dar `git pull`, muda a mesma linha para `# Projeto da Dupla B` e faz commit.
4. **Pessoa B:** tenta `git push`. O Git recusa, porque tem uma novidade no GitHub que a Pessoa B ainda não tem.
5. **Pessoa B:** roda `git pull`. O Git avisa: `CONFLICT (content): Merge conflict in README.md`.
6. **Pessoa B:** abre o `README.md`. O arquivo fica assim:

   ```text
   <<<<<<< HEAD
   # Projeto da Dupla B
   =======
   # Projeto da Dupla A
   >>>>>>> 3f2a1b9...
   ```

   - Entre `<<<<<<< HEAD` e `=======` está a **sua** versão.
   - Entre `=======` e `>>>>>>>` está a versão que veio do **GitHub**.

7. **Pessoa B:** a dupla decide o texto final (pode ser uma versão, a outra ou uma mistura). Apague **todos** os marcadores `<<<<<<<`, `=======` e `>>>>>>>` e deixe só o texto final, por exemplo:

   ```text
   # Projeto da Dupla A e B
   ```

8. **Pessoa B:** salve o arquivo e finalize:

   ```bash
   git add README.md
   git commit -m "Resolve conflito no título do README"
   git push
   ```

> 💡 O VS Code mostra botões em cima do conflito (**Accept Current Change**, **Accept Incoming Change**, **Accept Both Changes**) que fazem esse trabalho por você.

---

## Parte 3: Boas Práticas

### Mensagens de commit

A mensagem é o que você (e sua equipe) vai ler no histórico. Ela precisa dizer **o que** mudou.

| ❌ Ruim | ✅ Boa |
| --- | --- |
| `update` | `Adiciona formulário de cadastro` |
| `arrumei` | `Corrige erro ao enviar formulário vazio` |
| `asdfgh` | `Remove botão duplicado do menu` |
| `mudanças` | `Atualiza cores da página inicial` |

Dica: escreva como se completasse a frase "Este commit...": *(Este commit)* **Adiciona formulário de cadastro**.

### Commits pequenos e frequentes

Faça um commit a cada pequena parte que funciona, em vez de um commit gigante no fim do dia. Assim fica mais fácil entender o histórico e desfazer algo que deu errado.

### Nunca suba senhas ou chaves

Arquivos como `.env`, senhas e tokens **não** devem ir para o GitHub. Coloque esses arquivos no `.gitignore` antes do primeiro commit.

> ⚠️ **Subiu uma senha sem querer?** Apagar o arquivo e fazer um novo commit **não resolve**, porque a senha continua no histórico. Faça isso:
> 1. **Troque a senha ou gere uma nova chave imediatamente.** Considere que a antiga foi exposta.
> 2. Tire o arquivo do Git e adicione no `.gitignore`:
>    ```bash
>    git rm --cached .env
>    echo ".env" >> .gitignore
>    git add .gitignore
>    git commit -m "Remove .env do repositório"
>    git push
>    ```
> 3. Avise o professor.

---

## Parte 4: Erros Comuns e Como Resolver

### `fatal: not a git repository`

**O que é:** o terminal não está dentro da pasta do projeto.
**Como resolver:** entre na pasta com `cd nome-do-projeto`. Use `pwd` para ver em que pasta você está e `ls` para listar o que tem nela.

---

### `Author identity unknown` / `Please tell me who you are`

**O que é:** o Git não sabe seu nome e email.
**Como resolver:**

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

---

### `! [rejected] main -> main (fetch first)`

**O que é:** alguém enviou mudanças para o GitHub que você ainda não tem.
**Como resolver:** traga as mudanças primeiro e depois envie as suas:

```bash
git pull
git push
```

---

### `fatal: Need to specify how to reconcile divergent branches`

**O que é:** aparece no `git pull` quando você e o GitHub têm commits diferentes. O Git quer saber como juntar.
**Como resolver:** configure uma vez só e rode o pull de novo:

```bash
git config --global pull.rebase false
git pull
```

---

### `Permission denied (publickey)`

**O que é:** o GitHub não reconheceu sua chave SSH.
**Como resolver:** revise os passos 4 a 7 do **Guia de Configuração do GitHub na Máquina Local**.

---

### O Git pede usuário e senha

**O que é:** o repositório foi clonado com a URL HTTPS, e não com a SSH.
**Como resolver:** troque a URL do remoto para a versão SSH:

```bash
git remote set-url origin git@github.com:seu-usuario/nome-do-repositorio.git
```

---

### `error: src refspec main does not match any`

**O que é:** você tentou enviar a branch `main`, mas ela não existe. Normalmente é porque você ainda não fez nenhum commit, ou porque a sua branch se chama `master`.
**Como resolver:** rode `git status` para ver o nome da branch. Se ainda não tem commit, faça um. Se a branch se chama `master`, renomeie:

```bash
git branch -M main
```

---

### `Your local changes ... would be overwritten`

**O que é:** você tem mudanças sem commit, e o `git pull` ou o `git switch` iria apagar essas mudanças.
**Como resolver:** faça commit das mudanças ou guarde temporariamente:

```bash
git stash
git pull          # ou git switch <branch>
git stash pop
```

---

### `fatal: remote origin already exists`

**O que é:** você rodou `git remote add origin` em um projeto que já tem remoto (por exemplo, um projeto clonado).
**Como resolver:** confira com `git remote -v`. Se a URL estiver errada, troque:

```bash
git remote set-url origin <url-correta>
```

---

### O terminal abriu uma tela estranha no commit ou no pull

**O que é:** você fez `git commit` sem o `-m` (ou o `git pull` precisou criar um commit de merge), e o Git abriu o editor **Vim** para você escrever a mensagem.
**Como resolver:**

1. Se precisar escrever a mensagem, aperte `i` e digite. (No `git pull`, a mensagem já vem pronta.)
2. Aperte `Esc`.
3. Digite `:wq` e aperte **Enter** para salvar e sair.

Para usar o VS Code como editor no lugar do Vim:

```bash
git config --global core.editor "code --wait"
```

---

### "Fiz commit, mas esqueci um arquivo" ou "Errei a mensagem do commit"

**Como resolver** (só se você **ainda não fez push**):

```bash
# Esqueci um arquivo:
git add arquivo-esquecido.txt
git commit --amend --no-edit

# Errei a mensagem:
git commit --amend -m "Mensagem correta"
```

> ⚠️ Se já fez push, **não use `--amend`**. Faça um novo commit com a correção.

---

## Parte 5: Glossário Rápido

| Termo | Significado |
| --- | --- |
| **Repositório (repo)** | A pasta do projeto acompanhada pelo Git, com todo o histórico. |
| **Commit** | Uma "foto" do projeto em um momento, com uma mensagem. |
| **Branch** | Uma linha paralela de trabalho. A principal se chama `main`. |
| **Merge** | Juntar as mudanças de uma branch em outra. |
| **Conflito** | Quando o Git não consegue juntar sozinho duas mudanças na mesma linha. |
| **Clone** | Uma cópia de um repositório do GitHub no seu computador. |
| **Fork** | Uma cópia de um repositório de **outra pessoa** para a **sua conta** do GitHub. |
| **Pull Request (PR)** | Um pedido para juntar as mudanças de uma branch em outra, com revisão. |
| **Remoto / origin** | O repositório no GitHub. `origin` é o nome padrão dele. |
| **upstream** | A branch do GitHub que sua branch local acompanha. É o que o `-u` do `git push -u` configura. |
| **HEAD** | Um marcador de onde você está agora (em qual branch e commit). |
| **Hash** | O código que identifica cada commit, como `3f2a1b9`. |
| **Staging** | A área de preparação: onde ficam as mudanças que vão entrar no próximo commit. |
