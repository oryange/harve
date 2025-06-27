# Guia de Configuração do GitHub na Máquina Local

Este guia mostra como preparar sua máquina para compartilhar projetos no GitHub com a turma, incluindo instalação do Git, configurações iniciais e autenticação via chave SSH.

---

## 1. Instalando o Git

Escolha seu sistema operacional e siga o passo correspondente:

- **Windows:**  
  Baixe e instale o Git pelo [site oficial](https://git-scm.com/download/win).

- **Linux:**  
  Abra um terminal e execute:
  ```bash
  sudo apt update && sudo apt install git
  ```

- **macOS:**  
  Abra um terminal e execute:
  ```bash
  brew install git
  ```

### 2. Configurando Nome de Usuário e Email
Esses dados aparecerão nos commits realizados pelo Git em todos os projetos da máquina:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

Exemplo real:

```bash
git config --global user.name "Fernando Silva"
git config --global user.email "fernando.silva@gmail.com"
```

### 3. Criando a Chave SSH
A chave SSH permite autenticação segura com o GitHub, sem digitar senha em cada push.

Comando padrão:

```bash
ssh-keygen -t ed25519 -C "seuemail@exemplo.com"
```

Se estiver usando um sistema antigo (sem suporte a Ed25519), use:

```bash
ssh-keygen -t rsa -b 4096 -C "seuemail@exemplo.com"
```
Para quem já tem conta do trabalho no mesmo computador:

Recomenda-se diferenciar o arquivo da chave:

```bash
ssh-keygen -t ed25519 -C "seu_email_pessoal@example.com" -f ~/.ssh/id_ed25519_pessoal
```
### 4. Copiando a Chave Pública
Você vai precisar copiar a chave pública para adicionar no GitHub:

No Linux/macOS:
```bash
cat ~/.ssh/id_ed25519.pub
```
No Windows:
```bash
type %userprofile%\.ssh\id_ed25519.pub
```
Copie todo o conteúdo exibido no terminal.

### 5. (Opcional) Salvando Chave SSH no SSH-Agent
É útil para não precisar digitar senha da chave sempre:

Inicie o agente:
```bash
eval "$(ssh-agent -s)"
```
Adicione sua chave ao agente:
```bash
ssh-add ~/.ssh/id_ed25519
```

### 6. Adicionando Sua Chave SSH no GitHub
- Entre na sua conta no GitHub.
- Clique na sua foto no canto superior direito e vá em Settings.
- No menu lateral, clique em SSH and GPG keys.
- Clique em New SSH key.
- Dê um nome (ex: "Meu notebook") e cole a chave copiada na caixa Key.
- Clique em Add SSH key.
### 7. Testando a Conexão com o GitHub
No terminal, execute:

```bash
ssh -T git@github.com
```
Se aparecer uma mensagem de boas-vindas, está tudo certo!

### 8. Dica Final
Lembre-se: você pode criar um repositório diretamente no GitHub (remoto) e clonar para sua máquina usando:

```bash
git clone <URL-do-repositorio>
```
Depois disso, faça as alterações e utilize os comandos git add, git commit e git push para compartilhar com sua turma.