-- update matriculas

UPDATE matriculas
SET valor_mensalidade = valor_mensalidade * 1.10

-- Alternativa com condição WHERE
-- WHERE plano_id = 1 OR plano_id = 2 OR plano_id = 3

-- insert matriculas

INSERT INTO matriculas (aluno_id, plano_id, dia_vencimento, valor_mensalidade, data_inicio, data_fim)
values 
(11, 4, 2, 69.90, '2023-07-16', '2024-06-16'),
(12, 4, 3, 69.90, '2023-08-23', '2024-07-23'),
(13, 4, 4, 69.90, '2023-08-02', '2024-07-02');