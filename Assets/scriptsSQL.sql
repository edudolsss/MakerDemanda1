-- Criando Tabela Empresa
create table sig_cadEmpresa_empresa (
	id_empresa serial primary key,
	nome_empresa varchar(45) not null,
	cnpj varchar(18) unique not null
)

-- Criando Tabela Usuário
create table sig_cadEmpresa_usuario(
	id_usuario serial primary key,
	nome_usuario varchar(55) not null,
	cpf_usuario varchar(14) not null unique,
	email_usuario varchar(55) not null,
	telefone_usuario varchar(16)not null,
	empresa_id int references empresa(id_empresa) not null,
	confirmacao boolean set default False
)

-- Pesquisando dados da Tabela Empresa
select * from empresa

-- Pesquisando dados da Tabela Usuário
select * from usuario

-- Inserindo dados na Tabela Empresa
insert into empresa(nome_empresa,cnpj) values ('Arco Tecnológia','0000000000000')

-- Inserindo dados na Tabela Usuário
insert into usuario (nome_usuario,cpf_usuario,email_usuario,telefone_usuario,empresa_id) values
('Eduardo Pinheiro','066.535.445-24','eduardo@arcoconsultoria.com','(31) 9 9121-9772',1)


-- Pesquisando dado na tabela empresa, anexando dados pelo ID da Empresa da Tabela Usuário
select 
	EMP.nome_empresa as "Nome da Empresa",
	EMP.cnpj as "CNPJ da Empresa",
	USU.nome_usuario as "Nome do Usuário",
	USU.cpf_usuario as "CPF do Usuário",
	USU.email_usuario as "E-mail do Usuário",
	USU.telefone_usuario as "Telefone do Usuário"
from empresa EMP
inner join usuario USU on (EMP.id_empresa = USU.empresa_id)

--  Pesquando dados na tabela e ordenando pelo status de confirmação
Select
  SCEU.id_usuario,
  SCEU.nome_usuario,
  SCEU.email_usuario,
  SCEE.nome_empresa,
  SCEU.confirmacao
From
  sig_cadempresa_usuario SCEU
  Inner Join
  sig_cadempresa_empresa SCEE On SCEU.empresa_id = SCEE.id_empresa
Order By
  SCEU.confirmacao Desc


-- Script organizado de resultado final dos dois inputs de informações na tabela sig_cadEmpresa_usuario

select
	SCEE.nome_empresa as "Empresa",
	SCEU.nome_usuario as "Nome",
	SCEU.email_usuario as "E-mail",
	SCEU.arquivo as "Arquivo Endereçado",
	SCEU.confirmacao as "Confirmação"
from sig_cadEmpresa_usuario SCEU
inner join sig_cadEmpresa_empresa SCEE on (SCEE.id_empresa = SCEU.empresa_id)

