-- delete pessoas

DELETE FROM pessoas
WHERE id = 1 OR id = 3;

-- insert pessoas

-- alunos
INSERT INTO pessoas (nome, cgc, tipo_pessoa, email, tipo_cadastro, ativo)
values 
('Luiza Mel', '47465389102', 'F', 'mel@email', 'A', 'S'),
('Jeronimo', '57461223129', 'F', 'jeronimo@email', 'A', 'S'),
('Mauricio Caviar', '57563019231', 'F', 'mcaviar@email', 'A', 'S'),
('Jessinto Pena', '68755910234', 'F', 'peninha@email', 'A', 'S');