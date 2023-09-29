# Aula 13 - SQL - INNER JOIN

1 ) - Dada a seguinte consulta, faça uma interpretação do que esta query está executando e descreva de forma suscinta:

SELECT
mvb.filial
,mvb.data_movimento
,mvb.data_disponibilidade
,mvb.codigo_banco
,mvb.agencia_banco
,mvb.conta_banco
,mvb.numero_cheque
,slb.saldo_banco
FROM
movimentos_bancarios mvb
INNER JOIN saldos_bancos slb ON mvb.filial = slb.filial
AND mvb.codigo_banco = slb.codigo_banco
AND mvb.agencia_banco = slb.agencia_banco
AND mvb.conta_banco = slb.conta_banco
WHERE
data_movimento BETWEEN '20230101' AND '20230928'

ORDER BY
mvb.filial, mvb.codigo_banco, mvb.agencia_banco,
mvb.conta_banco, mvb.data_movimento ASC

2. Com base no banco de dados da Academia Superfit, escreva uma query que retorne os dados da tabela horarios_aulas, bem como os dados das tabelas associadas à ela (pessoas e modalidade).
   Para exibir os dados das tabelas associadas à ela, use do bom senso para mostrar dados que sejam relevantes para o contexto.

Salve sua query em um arquivo .sql e anexe na atividade.
