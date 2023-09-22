-- delete matriculas

DELETE FROM matriculas
WHERE plano_id = 2;

-- insert de matriculas
INSERT INTO matriculas (aluno_id, plano_id, dia_vencimento, valor_mensalidade, data_inicio, data_fim)
VALUES 
(14, 3, 1, 99.00, '2023-09-01', '2024-08-01'),
(15, 3, 2, 99.00, '2023-09-02', '2024-08-02'),
(16, 3, 3, 129.00, '2023-09-03', '2024-08-03'),
(17, 2, 4, 141.90, '2023-09-04', '2024-08-04');