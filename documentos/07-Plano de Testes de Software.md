# Plano de Testes de Software

A estratégia de teste para o projeto Pomodoro Clock envolve a verificação de funcionalidades críticas do sistema, incluindo a usabilidade sem a necessidade de login, o processo de cadastro de novos usuários, e a validação de credenciais de login

Os testes serão realizados manualmente e de forma automatizada utilizando ferramentas adequadas. Cada caso de teste terá um conjunto de critérios de aceitação claramente definidos e será executado em um ambiente de desenvolvimento simulado para garantir a consistência dos resultados.

|Caso de Teste    | CT-001 - Uso do relógio pomodoro sem login |
|:---|:---|
| Pré-condições | •	O usuário deve ter acesso à internet;<br>• Estar na página inicial.|
| Procedimento (passo à passo) | 1 - Entrar na página inicial do Pomodoro Clock;<br>2 - Navegar para a funcionalidade de relógio pomodoro;<br>3 - O usuário deve clicar no botão para iniciar a contagem do tempo para uma sessão pomodoro (geralmente 25 minutos) sem realizar login.|
| Dados de entrada | • Clicar no botão iniciar;<br>• Clicar no botão parar;|
| Resultado esperado | Verificar se o usuário pode utilizar o relógio pomodoro sem realizar login.|
| Resultado obtido | Funcionalidade de contagem do tempo funcionou sem apresentar falhas.|
| Avaliação (pegou / não pegou erro) | RE = RO: Não pegou erro.|
| Evidência (print screen) | |


|Caso de Teste    | CT 002 – Função de cadastro |
|:---|:---|
| Pré-condições | •	O usuário deve ter acesso à internet;<br>• Estar na página inicial.|
| Procedimento (passo à passo) | 1 - Entrar na página inicial do Pomodoro Clock;<br>2 - Navegar para a tela de login, clicando no ícone localizado no canto superior da página inicial;<br>3 - Clicar na opção “Crie sua conta”;<br>4 - Preencher os campos obrigatórios (nome de usuário, email, senha, e confirmar senha); e<br>5 - Submeter o formulário de cadastro clicando no botão "Cadastrar".|
| Dados de entrada |• Nome: João Silva;<br>• Email: joao.silva@example.com;<br>• Senha: senha123; e<br>• Confirmar senha: senha123.|
| Resultado esperado |• O sistema deve exibir uma mensagem de sucesso confirmando o cadastro;<br>• O novo usuário deve ser adicionado à base de dados; e<br>• O usuário deve poder realizar login com as credenciais cadastradas.|
| Resultado obtido | Funcionalidade de cadastro funcionou conforme o esperado sem apresentar falhas.|
| Avaliação (pegou / não pegou erro) | RE = RO: Não pegou erro.|
| Evidência (print screen) | |
 

|Caso de Teste    | CT 003 – Login válido |
|:---|:---|
| Pré-condições | •	O usuário deve ter acesso à internet;<br>• Estar na página de login.<br>• O usuário deve estar previamente cadastrado.|
| Procedimento (passo à passo) | 1 - Entrar na página inicial do Pomodoro Clock;<br>2 - Navegar para a tela de login, clicando no ícone localizado no canto superior da página inicial;<br>3 - Inserir os campos obrigatórios email e senha válidos; e<br>4 - Submeter o formulário de login clicando no botão "Entrar".|
| Dados de entrada |• Email: joao.silva@example.com;<br>• Senha: senha123.|
| Resultado esperado |• O usuário deve ser autenticado com sucesso; e<br>• O novo usuário deve ser adicionado à base de dados; e<br>• •	O sistema deve redirecionar o usuário para a tela principal.|
| Resultado obtido | Funcionalidade de login funcionou conforme o esperado sem apresentar falhas.|
| Avaliação (pegou / não pegou erro) | RE = RO: Não pegou erro.|
| Evidência (print screen) | |


|Caso de Teste    | CT 004 – Login inválido |
|:---|:---|
| Pré-condições | •	O usuário deve ter acesso à internet;<br>• Estar na página de login.<br>• O usuário deve estar previamente cadastrado.|
| Procedimento (passo à passo) | 1 - Entrar na página inicial do Pomodoro Clock;<br>2 - Navegar para a tela de login, clicando no ícone localizado no canto superior da página inicial;<br>3 - Inserir os campos obrigatórios, email válido e senha inválido; e<br>4 - Submeter o formulário de login clicando no botão "Entrar".|
| Dados de entrada |• Email: joao.silva@example.com;<br>• Senha: senha124.|
| Resultado esperado |• O sistema deve bloquear a entrada do usuário e apresentar a mensagem de “Usuário não encontrado!”; e<br>• O novo usuário deve ser adicionado à base de dados; e<br>• O sistema deve permanecer na tela de login.|
| Resultado obtido | Funcionalidade de login funcionou conforme o esperado sem apresentar falhas.|
| Avaliação (pegou / não pegou erro) | RE = RO: Não pegou erro.|
| Evidência (print screen) | |



> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
