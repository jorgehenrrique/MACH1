-- Horário de aulas
-- Musculação - Mozi
insert into horario_aulas (dia_semana, hora_inicio, hora_fim, modalidade_id, instrutor_id)
values 
(2, '05:00:00', '22:00:00', 2, 7),
(3, '05:00:00', '22:00:00', 2, 7),
(4, '05:00:00', '22:00:00', 2, 7),
(5, '05:00:00', '22:00:00', 2, 7),
(6, '05:00:00', '22:00:00', 2, 7);

-- Jiu-Jitsu - José Aldo
insert into horario_aulas (dia_semana, hora_inicio, hora_fim, modalidade_id, instrutor_id)
values 
(2, '10:00:00', '11:00:00', 4, 8),
(2, '20:00:00', '21:00:00', 4, 8),
(4, '10:00:00', '11:00:00', 4, 8),
(4, '20:00:00', '21:00:00', 4, 8),
(6, '10:00:00', '11:00:00', 4, 8),
(6, '20:00:00', '21:00:00', 4, 8);

-- Spinning - Maria Fátima
insert into horario_aulas (dia_semana, hora_inicio, hora_fim, modalidade_id, instrutor_id)
values 
(3, '07:00:00', '08:00:00', 3, 9),
(3, '09:00:00', '10:00:00', 3, 9),
(3, '13:00:00', '14:00:00', 3, 9),
(3, '15:00:00', '16:00:00', 3, 9),
(4, '07:00:00', '08:00:00', 3, 9),
(4, '09:00:00', '10:00:00', 3, 9),
(4, '13:00:00', '14:00:00', 3, 9),
(4, '15:00:00', '16:00:00', 3, 9),
(6, '07:00:00', '08:00:00', 3, 9),
(6, '09:00:00', '10:00:00', 3, 9),
(6, '13:00:00', '14:00:00', 3, 9),
(6, '15:00:00', '16:00:00', 3, 9);

-- Dias semana
-- 1-Domingo
-- 2-Segunda-feira
-- 3-Terça-feira
-- 4-Quarta-feira
-- 5-Quinta-feira
-- 6-Sexta-feira
-- 7-Sábado

-- Planos
  -- id \ nome
  -- 1 - Padrão
  -- 2 - Spinning
  -- 3 - Jiu-Jitsu

-- Modalidades
  -- id \ nome
  -- 2 - Musculação
  -- 3 - Spinning
  -- 4 - Jiu-Jitsu

-- Instrutores
  -- id \ nome
  -- 7 - Mozi
  -- 8 - José Aldo
  -- 9 - Maria Fátima