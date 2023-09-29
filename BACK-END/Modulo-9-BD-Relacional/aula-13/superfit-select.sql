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
