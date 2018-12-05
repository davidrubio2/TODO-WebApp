CREATE TABLE  tarea(
tarea_id SERIAL PRIMARY KEY,
tarea_titulo varchar(50) not null,
id_responsable int not null,
tarea_fecha_de_inicio timestamp,
tarea_fecha_de_fin timestamp,
tarea_porcentaje float,
tarea_categoria varchar(20),
id_sub_tareas int
);

insert into tarea(tarea_titulo,id_reponsable,
tarea_fecha_de_inicio,tarea_fecha_de_fin, tarea_porcentaje) values():

CREATE TABLE responsable(
responsable_id SERIAL PRIMARY KEY,
responsable_nombre varchar(100)
);

insert into responsable(responsable_nombre) values('David Rubio Ramirez');
insert into responsable(responsable_nombre) values('Agnel Hernandez Montoya');
insert into responsable(responsable_nombre) values('Mauricio Medina Macron');
insert into responsable(responsable_nombre) values('Pepe Sanchez Ziploc');


CREATE TABLE sub_tarea(
sub_tarea_id int,
sub_tarea_responsable varchar(20),
sub_tarea_nombre varchar(20),
sub_tarea_fecha_de_vencimiento timestamp
);

drop table tarea;
drop table responsable;
drop table sub_Tarea;