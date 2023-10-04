
  -- 1 - Primeira questão:
  
    SELECT
	ma.id, pe.nome alunos, pl.nome plano,
	CASE
		WHEN pe.ativo = 'S' THEN 'Ativo'
		ELSE 'Não ativo'
	END ativo
FROM
	matriculas ma
	LEFT JOIN
		pessoas pe
		ON pe.id = ma.aluno_id AND pe.tipo_cadastro = 'A'
	LEFT JOIN
		planos pl
		ON pl.id = ma.plano_id
	
/*
SELECT
	seleciona as colunas matriculas.id, pessoas.nome, planos.nome
	CASE
		onde a coluna pessoas.ativo for igual a: 'S', o resultado
		impresso será: 'Ativo', se diferente, será: 'Não ativo'
		END o nome da coluna será: ativo
FROM
	da tabela matriculas - apelido ma
	LEFT JOIN - traga os dados da tabela a esquerda
		junte com a tabela pessoas - apelido pe
		ON - os dados da coluna pe.id deve ser igual a ma.aluno_id
		AND - pe.tipo_cadastro deve ser igual a: 'A'
	LEFT JOIN - traga os dados da tabela a esquerda
		junte com a tabela planos - apelido pl
		ON - os dados da coluna pl.id deve ser igual a ma.plano_id
*/

  -- 2 - Segunda questão:

SELECT
	mo.id, mo.nome modalidade, pl.nome plano
FROM
	modalidade_por_planos mpl
	INNER JOIN
		planos pl
		ON pl.id = mpl.plano_id
	LEFT JOIN
		modalidades mo
		ON mo.id = mpl.modalidade_id

/*
SELECT
	seleciona as colunas modalidades.id, modalidades.nome, plano.nome
FROM
	da tabela modalidade_por_planos - apelido mpl
	essa é uma tabela de vínculo entre modalidades e planos
	INNER JOIN - junte os dados das tabelas
		junte com a tabela planos - apelido pl
		ON - os dados da coluna pl.id deve ser igual a mpl.plano_id
	LEFT JOIN - traga os dados da tabela a esquerda
		junte com a tabela modalidades - apelido mo
		ON - os dados da coluna mo.id deve ser igual a mpl.modalidade_id
*/
