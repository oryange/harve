# Comandos Mais Usados do Git

| Comando                 | Explicação Simples                                                                      |
| ----------------------- | --------------------------------------------------------------------------------------- |
| `git init`              | Inicializa um novo repositório Git na pasta atual                                       |
| `git clone <url>`       | Faz uma cópia de um repositório remoto para o seu computador                            |
| `git status`            | Mostra o estado atual dos arquivos (o que foi modificado, adicionado ou removido)       |
| `git add <arquivo>`     | Adiciona um arquivo específico à área de preparação (staging)                           |
| `git add .`             | Adiciona todos os arquivos modificados à área de preparação                             |
| `git commit -m ""`      | Salva as alterações da área de preparação, criando um novo “commit” com uma mensagem    |
| `git log`               | Mostra o histórico de commits do repositório                                            |
| `git diff`              | Mostra as diferenças entre arquivos alterados e os arquivos da última confirmação       |
| `git branch`            | Lista os branches existentes no repositório                                             |
| `git branch <nome>`     | Cria um novo branch com o nome especificado                                             |
| `git checkout <branch>` | Troca para outro branch                                                                 |
| `git checkout <arquivo>`| Desfaz alterações locais em um arquivo, voltando para a última confirmação              |
| `git checkout -b <nome>`| Cria e já muda para um novo branch com o nome especificado                              |
| `git merge <branch>`    | Junta as alterações de um branch especificado na branch atual                           |
| `git pull`              | Atualiza o repositório local com as alterações do repositório remoto                    |
| `git push`              | Envia seus commits locais para o repositório remoto                                     |
| `git remote -v`         | Lista os repositórios remotos configurados                                              |
| `git reset --hard`      | Desfaz todas as alterações locais, voltando para o último commit                        |
| `git rm <arquivo>`      | Remove um arquivo do repositório e do diretório local                                   |
| `git stash`             | Guarda temporariamente alterações não commitadas para limpar o estado de trabalho       |
| `git stash pop`         | Restaura as alterações guardadas com o stash                                            |

---


## Observação Importante

Em vez de iniciar um repositório local com git init, você pode criar diretamente o repositório de forma remota (no GitHub) e então apenas fazer o clone desse repositório para sua máquina local usando o comando:

```bash
git clone <url-do-repositorio-remoto>
```
Após clonar, basta seguir com as alterações, commits e pushes normalmente, facilitando o controle de versões e a colaboração desde o início do projeto.


## Dica

Se quiser ajuda sobre qualquer comando do Git, use:

```bash
git help <comando>