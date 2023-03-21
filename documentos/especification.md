# Especificações do Projeto
## Personas
Persona 1: Maria Fernanda
•	Idade: 49 anos 
•	Sexo: Feminino 
•	Formação educacional: Ensino superior completo 
•	Renda: Renda própria (salário) 
•	Profissão: Educadora 
•	Religião: Católica 
•	Classe social: Média 
•	Localização: Região central de Belo Horizonte  
•	Estado civil: Casada
Persona 2: Artur
•	Idade: 17 anos
•	Sexo: Masculino
•	Formação educacional: Ensino médio incompleto (Desistiu da escola pela precariedade da instituição)
•	Renda:  R$ 1.302 (Salário mínimo)
•	Religião: Católica
•	Classe social: Baixa
•	Localização: Aglomerado da Serra (Periferia de MG)
•	Condição de vida: Precária
## Histórias de Usuários
Contexto: Um site projetado para conectar diversas pessoas que possuem demandas e objetivos em cima do mesmo tópico: trabalho voluntário. Com o propósito de facilitar a interação entre voluntários e pessoas que necessitam de algum auxílio, o projeto consiste em desenvolver uma plataforma que assegura que os usuários se cadastrem e se identifiquem como voluntários ou beneficiários e, assim, conecta ambos os lados de acordo com a compatibilidade entre os perfis.
Voluntário: Como uma pessoa que tem a intenção de se voluntariar para realizar trabalhos que beneficiem a sociedade, quero ter acesso a um site que me permita encontrar ONGs, instituições e pessoas físicas que necessitem de ajuda em algum serviço na região em que moro, para que eu possa me voluntariar.  
Critérios de aceite: 
•	Uma lista exibida no site com as informações: 
-	Da pessoa/ONG/instituição que necessite de algum trabalho voluntário; 
-	Da localização do beneficário; 
-	Do tipo de serviço necessário. 
•	Banco de dados atualizado com as informações de todos os beneficiários. 
 Definição de Pronto: 
•	Banco de dados feito, revisado e em produção; 
•	A lista dos beneficiários pendentes revisada e no ar. 
Beneficiário: Como uma ONG/instituição/pessoa que necessita de ajuda e auxílio em algum serviço, quero ter acesso a um site que me permita encontrar pessoas que estão dispostas a ajudar e que se voluntariam a prestar serviços sociais, para que a minha situação seja resolvida. 
Critérios de aceite: 
•	Uma lista exibida no site com as informações: 
-	Da pessoa voluntária; 
-	Da localização do voluntário; 
-	Do tipo de serviço fornecido. 
•	Banco de dados atualizado com as informações de todos os voluntários. 
Definição de Pronto: 
•	Banco de dados feito, revisado e em produção; 
•	A lista dos voluntários pendentes revisada e no ar.
## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
RF-001 - O sistema deve permitir cadastrar usuários com login e senha - ALTA 
RF-002 - O sistema deve permitir classificar os usuários entre Voluntários e/ou Beneficiados | ALTA 
RF-003 - O sistema deve permitir que usuários Beneficiados cadastrem Projetos - ALTA 
RF-004 - O sistema deve permitir que usuários Voluntários se inscrevam em Projetos -  ALTA 
RF-005 - O sistema deve permitir classificar os Projetos em Área de Motivação - ALTA 
RF-006 - O sistema deve permitir filtrar os Projetos por classificações listadas acima e por região geográfica - ALTA 
RF-007 - O sistema deve permitir que usuários beneficiados façam atualizações do andamento do Projeto - MÉDIA 
RF-008 - O sistema deve permitir que usuários beneficiados confirmem a participação de voluntários no Projeto - MÉDIA 


### Requisitos não Funcionais
•	O sistema deve funcionar 24/7;

### Requisitos não Funcionais
|RNF-001| O sistema deve funcionar 24/7 | BAIXA | 
|RNF-002| O sistema deve abrir o login em 10s | BAIXA |
|RNF-003| O sistema deve fazer backup de 24 em 24 horas | BAIXA |
|RNF-004| O sistema deve ser acessado via cloud | BAIXA |
|RNF-005| O sistema deve ser responsivo | MÉDIA |
|RNF-006| O sistema deve fechar os projetos concluídos ou que tenham data de validade | MÉDIA |

## Restrições
•	O projeto deverá ser entregue até o final do semestre;
•	Não pode ser desenvolvido um módulo de backend.
|O sistema deve atender as normais legais|
