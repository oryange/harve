# Comandos Mais Usados do Git

Este guia reúne os comandos que você vai usar no dia a dia, organizados pelo momento em que cada um aparece.

> Ainda não configurou o Git e a chave SSH? Siga antes o **Guia de Configuração do GitHub na Máquina Local**.

---

## Conceitos Básicos

Antes dos comandos, cinco palavras que aparecem o tempo todo:

- **Repositório:** a pasta do projeto que o Git acompanha, com todo o histórico de mudanças.
- **Área de preparação (staging):** uma "sala de espera" onde você coloca, com `git add`, as mudanças que vão entrar no próximo commit.
- **Commit:** uma "foto" do projeto em um momento, com uma mensagem explicando o que mudou. É assim que você salva seu trabalho no histórico.
- **Branch:** uma linha paralela de trabalho. Você pode testar algo novo em uma branch sem mexer na versão principal (`main`).
- **Remoto:** a cópia do repositório que fica no GitHub. O nome padrão dela é `origin`.

---

## O Fluxo do Dia a Dia

Estes são os passos que você vai repetir sempre que trabalhar no projeto:

```bash
git pull                                # 1. Pega as novidades do GitHub
# ... edite seus arquivos ...
git status                              # 2. Vê o que mudou
git add .                               # 3. Coloca as mudanças na área de preparação
git commit -m "Adiciona página de login" # 4. Salva as mudanças no histórico
git push                                # 5. Envia para o GitHub
```

> 💡 Rode `git status` sempre que ficar em dúvida. Ele mostra em que situação estão seus arquivos e, muitas vezes, sugere o próximo comando.

---

## Começando um Projeto

| Comando | O que faz |
| --- | --- |
| `git clone <url>` | Faz uma cópia de um repositório do GitHub para o seu computador. **É o jeito mais simples de começar** (veja a observação abaixo). |
| `git init` | Transforma a pasta atual em um novo repositório Git. |

---

## Salvando Suas Mudanças

| Comando | O que faz |
| --- | --- |
| `git status` | Mostra o estado dos arquivos: quais são novos, quais foram modificados e quais já estão na área de preparação. |
| `git add <arquivo>` | Coloca um arquivo específico na área de preparação. Ex.: `git add index.html` |
| `git add .` | Coloca **todas** as mudanças da pasta atual na área de preparação (arquivos novos, modificados e apagados). |
| `git commit -m "mensagem"` | Salva no histórico tudo o que está na área de preparação. Escreva uma mensagem que explique o que você fez. Ex.: `git commit -m "Corrige cor do botão"` |
| `git diff` | Mostra, linha por linha, o que você mudou e **ainda não** colocou na área de preparação. |
| `git diff --staged` | Mostra o que já está na área de preparação e vai entrar no próximo commit. |
| `git rm <arquivo>` | Apaga o arquivo da pasta e registra a remoção no Git (depois é preciso fazer commit). |

---

## Vendo o Histórico

| Comando | O que faz |
| --- | --- |
| `git log` | Mostra o histórico completo de commits. |
| `git log --oneline` | Mostra o histórico resumido, um commit por linha. Mais fácil de ler. |

> ⚠️ **O terminal "travou"?** O `git log` (e também o `git diff` e o `git help`) abre a saída em um leitor de texto. Use as setas para rolar e **aperte `q` para sair**.

---

## Trabalhando com Branches

| Comando | O que faz |
| --- | --- |
| `git branch` | Lista as branches do repositório. A branch atual aparece com `*`. |
| `git switch <nome>` | Muda para outra branch. |
| `git switch -c <nome>` | Cria uma nova branch e já muda para ela. Ex.: `git switch -c tela-de-cadastro` |
| `git merge <nome>` | Traz as mudanças da branch `<nome>` para a branch em que você está. |

> Em tutoriais mais antigos, você vai ver `git checkout <branch>` e `git checkout -b <nome>`. Eles fazem o mesmo que o `git switch`, que é a forma atual e mais clara.

---

## Sincronizando com o GitHub

| Comando | O que faz |
| --- | --- |
| `git pull` | Baixa as mudanças do GitHub e junta com as suas. Faça isso **antes** de começar a trabalhar. |
| `git push` | Envia seus commits para o GitHub. |
| `git push -u origin main` | Use no **primeiro push** de um projeto criado com `git init`. Depois disso, basta `git push`. |
| `git remote -v` | Mostra a qual repositório do GitHub sua pasta está conectada. |
| `git remote add origin <url>` | Conecta um projeto criado com `git init` a um repositório do GitHub. |

> **Conflito?** Se você e outra pessoa mudaram a mesma linha do mesmo arquivo, o `git pull` avisa que há um conflito. Abra o arquivo, procure os marcadores `<<<<<<<`, `=======` e `>>>>>>>`, escolha qual versão manter, apague os marcadores e faça `git add` e `git commit`.

---

## Guardando Mudanças Temporariamente

| Comando | O que faz |
| --- | --- |
| `git stash` | Guarda as mudanças que ainda não viraram commit e deixa a pasta limpa. Útil quando você precisa trocar de branch no meio de uma tarefa. |
| `git stash pop` | Traz de volta as mudanças guardadas com `git stash`. |

---

## ⚠️ Desfazendo Mudanças (Cuidado!)

Os comandos abaixo **apagam alterações que ainda não viraram commit, e não tem como recuperar**. Antes de usar, rode `git status` e confira o que vai ser perdido.

| Comando | O que faz |
| --- | --- |
| `git restore <arquivo>` | Descarta as mudanças de um arquivo e volta para como ele estava no último commit. |
| `git restore --staged <arquivo>` | Tira o arquivo da área de preparação, **sem** apagar suas mudanças. Este é seguro. |
| `git reset --hard` | Descarta **todas** as mudanças de **todos** os arquivos e volta para o último commit. |

> Se estiver em dúvida, prefira `git stash`: ele guarda as mudanças em vez de apagar.

---

## Ignorando Arquivos (.gitignore)

Alguns arquivos não devem ir para o GitHub: senhas, arquivos de configuração pessoal e pastas geradas automaticamente, como `node_modules`. Para isso, crie na raiz do projeto um arquivo chamado `.gitignore` e liste um item por linha:

```
node_modules/
.env
.DS_Store
```

O Git passa a ignorar esses arquivos no `git status` e no `git add`.

---

## Observação Importante

Em vez de começar com `git init`, você pode criar o repositório direto no GitHub e cloná-lo para sua máquina. Assim o projeto já nasce conectado ao GitHub e você não precisa configurar o remoto:

```bash
git clone git@github.com:seu-usuario/nome-do-repositorio.git
```

> Use a URL **SSH** (aba **SSH** no botão **Code** do repositório), que começa com `git@github.com:`. A URL HTTPS vai pedir usuário e senha.

Depois de clonar, siga o [fluxo do dia a dia](#o-fluxo-do-dia-a-dia).

---

## Dica

Para ver a ajuda de qualquer comando do Git:

```bash
git help <comando>
```

Por exemplo, `git help commit`. Para sair da ajuda, aperte `q`.
