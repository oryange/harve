# Guia de Configuração do GitHub na Máquina Local

Este guia mostra como preparar sua máquina para compartilhar projetos no GitHub com a turma, incluindo instalação do Git, configurações iniciais e autenticação via chave SSH.

> **Antes de começar:** você precisa ter uma conta no [GitHub](https://github.com/signup).

> 💡 **Usuários de Windows:** depois de instalar o Git (passo 1), use o **Git Bash** para executar todos os comandos deste guia. Ele vem junto com o Git e aceita os mesmos comandos do Linux/macOS. Os comandos **não** funcionam iguais no CMD ou no PowerShell.

---

## 1. Instalando o Git

Escolha seu sistema operacional e siga o passo correspondente:

- **Windows:**
  Baixe e instale o Git pelo [site oficial](https://git-scm.com/download/win). Pode manter as opções padrão do instalador.
  Depois, procure por **Git Bash** no menu Iniciar e abra.

- **Linux (Ubuntu/Debian):**
  ```bash
  sudo apt update && sudo apt install git
  ```
  Fedora:
  ```bash
  sudo dnf install git
  ```

- **macOS:**
  A forma mais simples é instalar as ferramentas de linha de comando da Apple:
  ```bash
  xcode-select --install
  ```
  Se você já usa o [Homebrew](https://brew.sh), pode usar `brew install git`.

Para confirmar que deu certo, execute:

```bash
git --version
```

Se aparecer algo como `git version 2.x.x`, está instalado.

---

## 2. Configurando Nome de Usuário e Email

Esses dados aparecerão nos commits realizados pelo Git em todos os projetos da máquina:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
git config --global init.defaultBranch main
```

Exemplo real:

```bash
git config --global user.name "Fernando Silva"
git config --global user.email "fernando.silva@gmail.com"
git config --global init.defaultBranch main
```

> ⚠️ Use o **mesmo email da sua conta do GitHub**. Caso contrário, seus commits não aparecem vinculados ao seu perfil.
> Se não quiser expor seu email, use o email privado que o GitHub fornece em **Settings → Emails** (formato `12345678+usuario@users.noreply.github.com`).

A última linha faz com que novos repositórios usem a branch `main`, que é o padrão do GitHub.

---

## 3. Criando a Chave SSH

A chave SSH permite autenticação segura com o GitHub, sem digitar senha em cada push.

```bash
ssh-keygen -t ed25519 -C "seuemail@exemplo.com"
```

Durante a execução:

- **"Enter file in which to save the key"** → aperte **Enter** para usar o local padrão.
- **"Enter passphrase"** → digite uma senha para proteger a chave (recomendado) ou aperte **Enter** para deixar sem. Os caracteres não aparecem enquanto você digita, isso é normal.

Se estiver usando um sistema antigo (sem suporte a Ed25519), use:

```bash
ssh-keygen -t rsa -b 4096 -C "seuemail@exemplo.com"
```

> Nesse caso, nos próximos passos troque `id_ed25519` por `id_rsa`.

> ⚠️ **Já tem uma conta do GitHub do trabalho neste computador?** Não siga este passo. Vá direto para a seção [Conta pessoal e do trabalho no mesmo computador](#conta-pessoal-e-do-trabalho-no-mesmo-computador) no final do guia.

---

## 4. Copiando a Chave Pública

Você vai precisar copiar a chave **pública** (arquivo terminado em `.pub`) para adicionar no GitHub.

Copiar direto para a área de transferência:

- **macOS:**
  ```bash
  pbcopy < ~/.ssh/id_ed25519.pub
  ```
- **Windows (Git Bash):**
  ```bash
  clip < ~/.ssh/id_ed25519.pub
  ```
- **Linux:** exiba a chave e copie manualmente:
  ```bash
  cat ~/.ssh/id_ed25519.pub
  ```

A chave começa com `ssh-ed25519` e termina com o seu email. Copie **a linha inteira**.

> 🔒 Nunca compartilhe o arquivo **sem** `.pub` (`id_ed25519`). Essa é a sua chave privada.

### Não está encontrando a chave?

Se aparecer `No such file or directory`, primeiro liste o que existe na pasta de chaves:

```bash
ls -la ~/.ssh
```

- **Aparece `id_rsa.pub` em vez de `id_ed25519.pub`?** Você gerou uma chave RSA. Use `id_rsa.pub` nos comandos.
- **A pasta não existe ou está vazia?** A chave não foi criada. Refaça o passo 3.
- **Aparece outro nome?** Você digitou um nome ao gerar a chave. Use esse nome nos comandos.

Se ainda não encontrar, procure a chave em todas as pastas do seu usuário:

```bash
find ~ -name "*.pub" 2>/dev/null
```

Isso costuma acontecer quando alguém digita só um nome (ex.: `minhachave`) na pergunta **"Enter file in which to save the key"**. Nesse caso, a chave é salva na pasta em que o terminal estava aberto, e não em `~/.ssh`. Para mover para o lugar certo:

```bash
mkdir -p ~/.ssh
mv caminho/encontrado/minhachave caminho/encontrado/minhachave.pub ~/.ssh/
```

> Não use `sudo` com o `ssh-keygen`. Com `sudo`, a chave é criada para o usuário administrador (`/root/.ssh`), e não para você.

**Procurando pela interface gráfica?** A pasta `.ssh` fica oculta:

- **Windows:** abra `C:\Users\SEU_USUARIO\.ssh` no Explorador de Arquivos. Se não aparecer, ative **Exibir → Mostrar → Itens ocultos**.
- **macOS:** no terminal, execute `open ~/.ssh`. No Finder, o atalho **Cmd + Shift + .** mostra arquivos ocultos.
- **Linux:** no gerenciador de arquivos, aperte **Ctrl + H** para mostrar arquivos ocultos.

---

## 5. (Opcional) Salvando a Chave SSH no SSH-Agent

Se você colocou senha na chave, este passo evita digitá-la a cada push.

Inicie o agente:

```bash
eval "$(ssh-agent -s)"
```

Adicione sua chave ao agente:

- **Linux e Windows (Git Bash):**
  ```bash
  ssh-add ~/.ssh/id_ed25519
  ```
- **macOS** (salva a senha no Keychain):
  ```bash
  ssh-add --apple-use-keychain ~/.ssh/id_ed25519
  ```

---

## 6. Adicionando Sua Chave SSH no GitHub

1. Entre na sua conta no GitHub.
2. Clique na sua foto no canto superior direito e vá em **Settings**.
3. No menu lateral, na seção **Access**, clique em **SSH and GPG keys**.
4. Clique em **New SSH key**.
5. Dê um nome (ex.: "Meu notebook"), mantenha o tipo **Authentication Key** e cole a chave copiada no campo **Key**.
6. Clique em **Add SSH key**.

---

## 7. Testando a Conexão com o GitHub

No terminal, execute:

```bash
ssh -T git@github.com
```

Na primeira vez, vai aparecer uma pergunta como:

```
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Digite `yes` e aperte Enter. Se aparecer a mensagem abaixo (com o seu usuário), está tudo certo:

```
Hi seu-usuario! You've successfully authenticated, but GitHub does not provide shell access.
```

Se aparecer `Permission denied (publickey)`, revise os passos 4 a 6.

---

## 8. Clonando e Enviando Projetos

Crie um repositório diretamente no GitHub e clone para sua máquina.

> ⚠️ No botão **Code** do repositório, selecione a aba **SSH** antes de copiar a URL. A URL deve começar com `git@github.com:`. Se usar a URL HTTPS, o Git vai pedir usuário e senha, e o GitHub não aceita mais senha nesse caso.

```bash
git clone git@github.com:seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

Depois de fazer suas alterações, envie para o GitHub:

```bash
git add .
git commit -m "Descreva o que você alterou"
git push
```

Se você criou o projeto localmente (com `git init`) em vez de clonar, conecte ao repositório remoto e faça o primeiro push assim:

```bash
git remote add origin git@github.com:seu-usuario/nome-do-repositorio.git
git push -u origin main
```

---

## Conta pessoal e do trabalho no mesmo computador

Se já existe uma chave SSH do trabalho na máquina, crie uma chave separada para a conta pessoal. Assim uma não substitui a outra.

**1. Gere a chave com um nome diferente:**

```bash
ssh-keygen -t ed25519 -C "seu_email_pessoal@exemplo.com" -f ~/.ssh/id_ed25519_pessoal
```

**2. Crie (ou edite) o arquivo `~/.ssh/config`** e adicione:

```
Host github-pessoal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_pessoal
  IdentitiesOnly yes
```

> No macOS, se quiser salvar a senha da chave no Keychain, adicione também as linhas `AddKeysToAgent yes` e `UseKeychain yes` dentro do bloco acima.

**3. Nos passos 4 e 5**, use `id_ed25519_pessoal` no lugar de `id_ed25519`. Por exemplo:

```bash
pbcopy < ~/.ssh/id_ed25519_pessoal.pub
```

**4. Adicione a chave na sua conta pessoal do GitHub** (passo 6).

**5. Teste usando o apelido `github-pessoal`:**

```bash
ssh -T git@github-pessoal
```

A mensagem deve mostrar o seu usuário **pessoal**.

**6. Ao clonar, troque `github.com` por `github-pessoal` na URL:**

```bash
git clone git@github-pessoal:seu-usuario/nome-do-repositorio.git
```

**7. Configure o email pessoal só nesse repositório** (sem `--global`, para não alterar a configuração do trabalho):

```bash
cd nome-do-repositorio
git config user.name "Seu Nome"
git config user.email "seu_email_pessoal@exemplo.com"
```
