CREATE TABLE "pessoas" (
	"id" serial NOT NULL,
	"nome" varchar(250) NOT NULL,
	"cgc" varchar(14) NOT NULL UNIQUE,
	"tipo_pessoa" char(1) NOT NULL,
	"email" varchar(255) NOT NULL,
	"tipo_cadastro" char(1) NOT NULL,
	"ativo" char(1) NOT NULL,
	CONSTRAINT "pessoas_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "horario_aulas" (
	"id" serial NOT NULL,
	"dia_semana" integer NOT NULL,
	"hora_inicio" TIME NOT NULL,
	"hora_fim" TIME NOT NULL,
	"modalidade_id" integer NOT NULL,
	"instrutor_id" integer NOT NULL,
	CONSTRAINT "horario_aulas_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "planos" (
	"id" serial NOT NULL,
	"nome" varchar(50) NOT NULL,
	CONSTRAINT "planos_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "modalidades" (
	"id" serial NOT NULL,
	"nome" varchar(100) NOT NULL,
	CONSTRAINT "modalidades_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "modalidade_por_planos" (
	"plano_id" integer NOT NULL,
	"modalidade_id" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "matriculas" (
	"id" serial NOT NULL,
	"aluno_id" integer NOT NULL,
	"plano_id" integer NOT NULL,
	"dia_vencimento" integer NOT NULL,
	"valor_mensalidade" money NOT NULL,
	"data_inicio" DATE NOT NULL,
	"data_fim" DATE NOT NULL,
	CONSTRAINT "matriculas_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "horario_aulas" ADD CONSTRAINT "horario_aulas_fk0" FOREIGN KEY ("modalidade_id") REFERENCES "modalidades"("id");
ALTER TABLE "horario_aulas" ADD CONSTRAINT "horario_aulas_fk1" FOREIGN KEY ("instrutor_id") REFERENCES "pessoas"("id");



ALTER TABLE "modalidade_por_planos" ADD CONSTRAINT "modalidade_por_planos_fk0" FOREIGN KEY ("plano_id") REFERENCES "planos"("id");
ALTER TABLE "modalidade_por_planos" ADD CONSTRAINT "modalidade_por_planos_fk1" FOREIGN KEY ("modalidade_id") REFERENCES "modalidades"("id");

ALTER TABLE "matriculas" ADD CONSTRAINT "matriculas_fk0" FOREIGN KEY ("aluno_id") REFERENCES "pessoas"("id");
ALTER TABLE "matriculas" ADD CONSTRAINT "matriculas_fk1" FOREIGN KEY ("plano_id") REFERENCES "planos"("id");
