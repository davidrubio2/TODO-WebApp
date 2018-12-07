CREATE TABLE  tarea(
tarea_id SERIAL PRIMARY KEY,
tarea_titulo varchar(50) not null,
id_responsable int not null,
tarea_fecha_de_inicio timestamp,
tarea_fecha_de_fin timestamp,
tarea_porcentaje float default 0.0,
categoria_id int,
id_sub_tareas int
);

insert into tarea(tarea_titulo,id_responsable,
tarea_fecha_de_inicio,tarea_fecha_de_fin, tarea_porcentaje,categoria_id) values('Cortar Verdura',
'1','2018-12-05','2018-12-05','0.1','1')

CREATE TABLE responsable(
responsable_id SERIAL PRIMARY KEY,
responsable_nombre varchar(100)
);

insert into responsable(responsable_nombre) values('David Rubio Ramirez');
insert into responsable(responsable_nombre) values('Agnel Hernandez Montoya');
insert into responsable(responsable_nombre) values('Mauricio Medina Macron');
insert into responsable(responsable_nombre) values('Pepe Sanchez Ziploc');

create table categoria(
categoria_id SERIAL PRIMARY KEY,
categoria_nombre varchar(50) not null
)

insert into categoria(categoria_nombre) values('Trabajo manual')
insert into categoria(categoria_nombre) values('Informatica')
insert into categoria(categoria_nombre) values('Agricola')

CREATE TABLE sub_tarea(
sub_tarea_id int,
sub_tarea_responsable varchar(20),
sub_tarea_nombre varchar(20),
sub_tarea_fecha_de_vencimiento timestamp
);

drop table tarea;
drop table responsable;
drop table sub_Tarea;
drop table categoria;