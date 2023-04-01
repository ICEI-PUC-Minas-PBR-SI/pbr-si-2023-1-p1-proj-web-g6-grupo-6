# Especificações do Projeto
Uma aplicação projetada para conectar diversas pessoas que possuem demandas e objetivos em cima do mesmo tópico: trabalho voluntário. Com o propósito de facilitar a interação entre voluntários e pessoas que necessitam de algum auxílio, o projeto consiste em desenvolver uma plataforma que assegura que os usuários se cadastrem e se identifiquem como voluntários ou beneficiários e, assim, conecta ambos os lados de acordo com a compatibilidade entre os perfis. Para isso, é necessário que essa aplicação seja totalmente responsiva, de forma a tornar-se acessível para todos os tipoa de aparelhos eletrônicos e pessoas. Ademais, o sistema deve permitir classificar os usuários entre Voluntários e/ou Beneficiados, por meio do cadastro de usuários com login e senha e sua incrição em projetos. Ainda, essa aplicação conta com o empenho e dedicação de cada integrante do grupo. Dessa forma, espera-se um resultado positivo e satisfatório em relação ao projeto.

## Personas
• Persona 1: João, 19 anos, estudante tentando ingressar em uma universidade pública para concluir o ensino superior, classe média-baixa.<br />
João é um estudante que está se esforçando para conseguir ingressar em uma universidade pública, entretanto, devido à falta de recursos e por questões financeiras, não conseguiu realizar o seu sonho ainda. Dessa forma, ele necessita de uma aplicação que o conecte a grupos de estudo gratuitos, que atuam como "pré-vestibular" e que ofereçam assistência a jovens que enfrentam o mesmo problema de João. Seus hobbies incluem tocar violão, ler e fazer caminhadas.

• Persona 2: Ana, 45 anos, professora, classe média.<br />
Ana é uma professora do ensino fundamental que está interessada em se envolver em trabalhos voluntários relacionados à educação infantil. Ela é de uma família de classe média e tem filhos adolescentes. Seus hobbies incluem jardinagem, cozinhar e viajar. <br />
Como professora de uma instituição pública, Ana se depara com diversos alunos que possuem dificuldades na escola, e tais dificuldades não são superadas devido à precariedade do ensino público. Com isso, ela se empenha em ajudar esses alunos e deseja que seu auxílio alcance mais pessoas na região onde vive. Dessa forma, Ana necessita de uma aplicação que forneça um acesso facilitado a grupos de pessoas que precisam de ajuda nos estudos, de forma a conseguir se conectar com esses indivíduos para ajudá-los.

• Persona 3: Carlos, 75 anos, aposentado, classe média.<br />
Carlos é um aposentado que trabalhou como operário em uma empresa de fabricação de tubos por muitos anos, chamada Vallourec. Devido às condições de trabalho as quais foi submetido, ele se encontra debilitado e não está apto a realizar trabalhos braçais. Recentemente, sua casa foi inundada após uma forte sequência de chuvas e, consequentemente, uma parte de sua habitação foi destruída e, agora, ele necessita de pessoas que o ajudem a reconstruí-la. <br />
Carlos afirma que possui os materiais necessários para a reforma, mas por uma questão financeira, não consegue arcar com os custos de contratar uma pessoa para operar esta obra.  Dessa forma, Carlos precisa ter acesso a uma aplicação que o possibilite a encontrar pessoas que se disponibilizam a ajudar na reforma de sua casa.  

• Persona 4: Gabriela, 28 anos, Designer Gráfico,  classe média-alta.<br />
Gabriela já atuou em diversos trabalhos voluntários, principalmente na sua cidade natal, onde ajudou em um abrigo para animais abandonados e também em uma organização que fornece alimentos para pessoas em situação de rua. Ela também participou de um projeto de recuperação de áreas verdes.<br />
Gabriela acredita que é importante retribuir à comunidade e fazer a diferença na vida das pessoas. Além disso, ela tem habilidades em design gráfico e gostaria de usá-las para ajudar organizações a criarem campanhas e materiais de comunicação mais eficazes. Ela também quer se conectar com outras pessoas que compartilham seus valores e interesses. <br />
Gabriela está procurando por um site que ofereça uma ampla variedade de oportunidades de voluntariado, onde ela possa encontrar algo que se adapte às suas habilidades e agenda. Ela espera que o site seja fácil de usar e permita que ela se conecte com organizações sem fins lucrativos e outros voluntários de maneira eficiente. Ela também espera que o site forneça informações claras sobre as expectativas e as responsabilidades de cada oportunidade de voluntariado, para que ela possa escolher uma que atenda suas expectativas.


## Histórias de Usuários

-> Voluntário: Como um voluntário de diversos projetos que beneficiem a sociedade, quero ter acesso a um site que me permita encontrar ONGs, instituições e pessoas físicas que necessitem de ajuda em algum serviço na região em que moro, para que eu possa me voluntariar.  
Critérios de aceite: <br />
 •	Banco de dados atualizado com as informações de todos os beneficiários. <br />
 •	Uma lista exibida no site com as informações: 
-	Da pessoa/ONG/instituição que necessite de algum trabalho voluntário; 
-	Da localização do beneficário; 
-	Do tipo de serviço necessário. 

Definição de Pronto: <br />
	•	Banco de dados feito, revisado e em produção;<br />
 •	A lista dos beneficiários pendentes revisada e no ar. 
 
-> Beneficiário: Como uma ONG/instituição/pessoa que necessita de ajuda e auxílio em algum serviço, quero ter acesso a um site que me permita encontrar pessoas que estão dispostas a ajudar e que se voluntariam a prestar serviços sociais, para que a minha situação seja resolvida. 
Critérios de aceite: <br />
•	Banco de dados atualizado com as informações de todos os voluntários. <br />
•	Uma lista exibida no site com as informações: 
-	Da pessoa voluntária; 
-	Da localização do voluntário; 
-	Do tipo de serviço fornecido. 

Definição de Pronto: <br />
•	Banco de dados feito, revisado e em produção; <br />
•	A lista dos voluntários pendentes revisada e no ar.

## Requisitos Funcionais
|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O sistema deve permitir cadastrar usuários com login e senha|  ALTA | 
|RF-002| O sistema deve permitir classificar os usuários entre Voluntários e/ou Beneficiados | ALTA |
|RF-003| O sistema deve permitir que usuários Beneficiados cadastrem Projetos | ALTA |
|RF-004| O sistema deve permitir que usuários Voluntários se inscrevam em Projetos |  ALTA |
|RF-005| O sistema deve permitir classificar os Projetos em Área de Motivação | ALTA |
|RF-006| O sistema deve permitir filtrar os Projetos por classificações listadas acima e por região geográfica | ALTA |
|RF-007| O sistema deve permitir que usuários beneficiados façam atualizações do andamento do Projeto | MÉDIA |
|RF-008| O sistema deve permitir que usuários beneficiados confirmem a participação de voluntários no Projeto | MÉDIA |

### Requisitos não Funcionais
|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O sistema deve parar 5 vezes ao ano para manutenção e funcionar no restante do tempo | BAIXA | 
|RF-002| O sistema deve abrir o login em 10s | BAIXA |
|RF-003| O sistema deve fazer backup incremental diário| BAIXA |
|RF-004| O sistema deve ser acessado via cloud | BAIXA |
|RF-005| O sistema deve ser responsivo | MÉDIA |
|RF-006| O sistema deve fechar os projetos concluídos ou que tenham data de validade | MÉDIA |
|RNF-007| O sistema deve emitir um certificado para os voluntários que tenham a participação confirmada. |MÉDIA|

## Restrições
•	O projeto deverá ser entregue até o final do semestre;<br />
•	O projeto não poderá ser desenvolvido um módulo de backend;<br />
• O sistema deverá estar em conformidade com os parâmetros instituídos pela lei nº 12.965, denominada Marco Civil da Internet.<br />
• Ao final do semestre, deverá ser entregue uma aplicação que forneça acesso facilitado a todas as pessoas, englobando todas as idades, classes sociais e gêneros.

## Linguagens Utilizadas
• Front-end: HTML + CSS, Bootstrap;
• Back-end: não será utilizado nesta aplicação. 
