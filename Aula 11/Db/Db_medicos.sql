CREATE TABLE tb_medico(
	cod_medico SERIAL PRIMARY KEY,
	crm VARCHAR (20) UNIQUE NOT NULL,
	nome VARCHAR(20) NOT NULL
);

CREATE TABLE tb_paciente(
	cod_paciente SERIAL PRIMARY KEY,
	cpf VARCHAR (20) UNIQUE NOT NULL,
	nome VARCHAR(20) NOT NULL,
	idade INT NULL
);

CREATE TABLE tb_consulta(
	cod_consulta SERIAL PRIMARY KEY,
	cod_medico INT NOT NULL,
	cod_paciente INT NOT NULL,
	data_hora TIMESTAMP NOT NULL,
	CONSTRAINT fk_medico FOREIGN KEY (cod_medico) REFERENCES tb_medico(cod_medico),
	CONSTRAINT fk_paciente FOREIGN KEY (cod_paciente) REFERENCES tb_paciente(cod_paciente)
);

INSERT INTO tb_medico (crm, nome) VALUES ('123456', 'Ana'), ('987654', 'Pedro');
SELECT * FROM tb_medico;

INSERT INTO tb_paciente (cpf, nome, idade) VALUES ('12345678910', 'Carlos Alberto', '21'), ('10312342101', 'Paula Arósio', '45');
SELECT * FROM tb_paciente;