--1
SELECT `nome`, `sobrenome`, `email`, `telefone` FROM `cliente` WHERE `idade` > 25;

--2
SELECT `id`, `sexo`, `nome`, `sobrenome`, `endereco`, `cidade`, `estado`, `cep`, `email`,
 `usuario`, `senha`, `telefone`, `data_nascimento`, `idade`, `cctipo`, `ccnumero`, `CVV`, 
 `ccvalidade`, `cpf`, `guid` FROM `cliente` WHERE `sexo` = 'M';

 --3
 SELECT `nome_completo`, `cpf`, `cargo`, `data_contratacao` 
 FROM `funcionario` WHERE `status` = 'A' AND (`remuneracao_atual` >= 1550 AND `remuneracao_atual` <= 3000);

 --4
 SELECT `id`, `sexo`, `nome`, `sobrenome`, `endereco`, `cidade`, `estado`, `cep`, `email`, `usuario`, `senha`, `telefone`, 
 `data_nascimento`, `idade`, `cctipo`, `ccnumero`, `CVV`, `ccvalidade`, `cpf`, `guid` 
FROM `cliente` WHERE `sexo` = 'F' AND `idade` BETWEEN 20 AND 29;

--5
SELECT `id`, `sexo`, `nome`, `sobrenome`, `endereco`, `cidade`, `estado`, `cep`, `email`, `usuario`, `senha`, `telefone`, 
`data_nascimento`, `idade`, `cctipo`, `ccnumero`, `CVV`, `ccvalidade`, `cpf`, `guid` FROM `cliente` WHERE `idade` = 30;

--6
SELECT `id`, `sexo`, `nome`, `sobrenome`, `endereco`, `cidade`, `estado`, `cep`, `email`, `usuario`, `senha`, `telefone`, 
`data_nascimento`, `idade`, `cctipo`, `ccnumero`, `CVV`, `ccvalidade`, `cpf`, `guid` FROM `cliente` WHERE `idade` != 22 AND `idade` != 30;

--7
SELECT `id`, `sexo`, `nome`, `sobrenome`, `endereco`, `cidade`, `estado`, `cep`, `email`, `usuario`, `senha`, `telefone`, 
`data_nascimento`, `idade`, `cctipo`, `ccnumero`, `CVV`, `ccvalidade`, `cpf`, `guid` 
FROM `cliente` WHERE `sexo` = 'M' AND `idade` > 30 OR `sexo` = 'F' AND `idade` < 25;

--8
SELECT COUNT(ID) AS 'QUANTIDADE DE COLABORADORES' FROM `funcionario` WHERE `status`= 'A'

--9
SELECT SUM(DISTINCT Total) FROM `pedido` WHERE `Tipo_Pedido` = 'DELIVERY' AND `Status` = 'APROVADO' AND `Situacao` = 'PAGO';

--10
