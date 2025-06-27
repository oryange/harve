# Comandos Mais Usados no Linux

| Comando        | Explicação Simples                                                  |
| -------------- | ------------------------------------------------------------------- |
| `ls`           | Lista arquivos e pastas do diretório atual                          |
| `cd`           | Muda o diretório de trabalho atual                                  |
| `pwd`          | Mostra o caminho (path) completo do diretório atual                 |
| `mkdir`        | Cria uma nova pasta (diretório)                                     |
| `rm`           | Remove (deleta) arquivos. Use `-r` para remover pastas recursivamente|
| `cp`           | Copia arquivos ou pastas                                            |
| `mv`           | Move ou renomeia arquivos ou pastas                                 |
| `touch`        | Cria um novo arquivo vazio                                          |
| `cat`          | Exibe o conteúdo de arquivos no terminal                            |
| `echo`         | Exibe uma mensagem/variável ou escreve texto em arquivos            |
| `find`         | Busca arquivos e pastas no sistema                                  |
| `grep`         | Procura palavras/padrões dentro de arquivos                         |
| `chmod`        | Altera permissões de arquivos e pastas                              |
| `chown`        | Altera o proprietário de arquivos e pastas                          |
| `man`          | Mostra o manual (ajuda) de um comando                              |
| `clear`        | Limpa o terminal                                                    |
| `df`           | Mostra o uso de espaço em disco                                     |
| `du`           | Exibe o uso de espaço por arquivos e pastas                         |
| `ps`           | Mostra processos em execução                                        |
| `top`          | Exibe os processos em tempo real, consumo de memória/CPU            |
| `kill`         | Encerra um processo especificado                                    |
| `history`      | Lista o histórico de comandos utilizados                            |
| `sudo`         | Executa comandos como superusuário (root)                           |
| `apt-get`      | Gerencia pacotes (instalação/remoção) no Debian/Ubuntu              |
| `yum`          | Gerencia pacotes no CentOS/Fedora                                   |
| `wget`         | Baixa arquivos da internet pelo terminal                            |
| `tar`          | Compacta/descompacta arquivos e pastas                              |
| `ssh`          | Conecta-se a outro computador via SSH                               |
| `exit`         | Encerra a sessão do terminal                                        |

---

## Atenção: Use o Terminal Bash (não o PowerShell)

**Por que NÃO usar o PowerShell** para os comandos acima:

- O PowerShell, terminal padrão do Windows, possui comandos e sintaxe diferentes do Bash do Linux.
- Muitos comandos Linux não funcionam corretamente no PowerShell, pois ele interpreta de maneira diferente ou podem não existir.
- Scripts feitos para Bash podem gerar erros ou comportamentos inesperados no PowerShell.

**O que usar então?**

- Utilize o **Git Bash**, **WSL (Windows Subsystem for Linux)**, **Zsh (no Linux ou Mac)**, ou qualquer terminal que rode Bash para garantir compatibilidade total com os comandos Linux.
- Estes ambientes simulam (ou são, no caso do WSL) um terminal Linux de verdade no seu sistema, permitindo que todos os comandos dessa lista funcionem como esperado.

---

**Dica:**  Você pode usar o comando `man` para ver o manual de qualquer outro comando.  
**Exemplo:**

```bash
man ls