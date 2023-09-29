/*
  1 - Primeira questão:
    O SELECT informa as colunas que serão impressas no resultado sendo elas:
      filial, da tabela - mvb
      data_disponibilidade, da tabela - mvb
      codigo_banco, da tabela - mvb
      agencia_banco, da tabela - mvb
      conta_banco, da tabela - mvb
      numero_cheque, da tabela - mvb
      e saldo_banco, da tabela - slb.

    O FROM informa de qual tabela buscar os dados, e atribui um apelido:
      tabela - movimentos_bancarios, apelidada de - mvb.

    O INNER JOIN faz a junção com outra tabela, e também atribui um apelido a ela:
      tabela - saldos_bancos, apelidada de - slb.
    
    O ON atribui uma condição para junção, onde busca os dados se:
      a coluna filial da tabela apelidada de mvb,
      for igual a coluna filial da tabela apelidada de slb.
    AND adiciona mais uma condição, onde busca os dados se:
      a coluna codigo_banco da tabela apelidada de mvb,
      for igual a coluna codigo_banco da tabela apelidada de slb.
    AND adiciona mais uma condição, onde busca os dados se:
      a coluna agencia_banco da tabela apelidada de mvb,
      for igual a coluna agencia_banco da tabela apelidada de slb.
    AND adiciona mais uma condição, onde busca od dados se:
      a coluna conta_banco da tabela apelidada de mvb,
      for igual a coluna conta_banco da tabela apelidada de slb.

    O WHERE aplica condições de filtragem:
      nos dados da coluna data_movimento da tabela apelidada de - mvb.
    BETWEEN - AND, adiciona uma condição: entre 'N' e 'N'.
    onde pegará os dados entre as datas '20230101' e '20230928'.

    A cláusula ORDER BY ordena o resultado da consulta.
      irá ordenar os resultados da consulta, nas colunas:
      mvb.filial, mvb.codigo_banco, mvb.agencia_banco, 
      mvb.conta_banco, mvb.data_movimento.
      A lista de colunas separadas por vírgulas especifica a ordem 
      em que as colunas devem ser consideradas para ordenação.
    O ASC especifica a ordenação como ascendente.
      o que significa que os resultados serão classificados em ordem crescente.
*/

  -- 2 - Segunda questão:

SELECT
	ha.hora_inicio, ha.hora_fim, mo.nome modalidade, pe.nome instrutor
FROM
	horario_aulas ha
INNER JOIN
	modalidades mo
ON ha.modalidade_id = mo.id
INNER JOIN
	pessoas pe
ON ha.instrutor_id = pe.id
WHERE
	pe.ativo = 'S'
ORDER BY
	ha.hora_inicio ASC;


-- SELECT
  -- seleciona as colunas, e atribui apelido as duas ultimas
-- FROM
  -- seleciona a primeira tabela e atribui apelido
-- INNER JOIN
  -- seleciona outra tabela e atribui apelido
-- ON, adiciona condição, se a coluna modalidade_id
  -- da tabela horario_aulas, seja igual a coluna id, da tabela modalidade_id.
-- INNER JOIN
  -- seleciona a terceira tabela e atribui apelido
-- ON, adiciona condição, se a coluna instrutor_id da tabela horario_aulas
  -- seja igual a coluna id, da tabela pessoas.
-- WHERE aplica a condição na coluna ativo, da tabela pessoas, onde devem ser = 'S'.
-- ORDER BY ordena os resultados
-- ASC determina a ordem em crescente, usando como base a coluna hora_inicio, 
  -- da tabela horario_aulas.