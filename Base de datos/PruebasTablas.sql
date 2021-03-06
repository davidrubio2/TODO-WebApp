﻿CREATE TABLE  tarea(
tarea_id SERIAL PRIMARY KEY,
tarea_titulo varchar(50) not null,
id_responsable int not null,
tarea_fecha_de_inicio timestamp  not null,
tarea_fecha_de_fin timestamp  not null,
tarea_porcentaje float default 0.0,
categoria_id int  not null
);

drop table tarea;
delete from tarea
insert into tarea(tarea_titulo,id_responsable,
tarea_fecha_de_inicio,tarea_fecha_de_fin, tarea_porcentaje,categoria_id) values('Cortar Verdura',
'2','2018-12-05','2018-12-08','0.1','2')
-------------------------------------------------------------------------------------------
CREATE TABLE responsable(
responsable_id SERIAL PRIMARY KEY,
responsable_nombre varchar(100),
responsable_fecha_de_insercion timestamp default now()
);
delete from responsable
drop table responsable;

select responsable_id,responsable_nombre from responsable
insert into responsable(responsable_nombre) values('David Rubio Ramirez');
insert into responsable(responsable_nombre) values('Agnel Hernandez Montoya');
insert into responsable(responsable_nombre) values('Mauricio Medina Macron');
insert into responsable(responsable_nombre) values('Pepe Sanchez Ziploc');
-------------------------------------------------------------------------------------------
create table categoria(
categoria_id SERIAL PRIMARY KEY,
categoria_nombre varchar(50) not null,
responsable_fecha_de_insercion timestamp default now()
)
delete from categoria
drop table categoria;
insert into categoria(categoria_nombre) values('Trabajo manual');
insert into categoria(categoria_nombre) values('Informatica');
insert into categoria(categoria_nombre) values('Agricola');
-------------------------------------------------------------------------------------------
CREATE TABLE sub_tarea(
sub_tarea_id SERIAL PRIMARY KEY,
id_responsable int,
sub_tarea_nombre varchar(20),
sub_tarea_fecha_de_vencimiento timestamp,
tarea_id int  not null
);
delete from sub_Tarea;
drop table sub_Tarea;
insert into sub_tarea(id_responsable,sub_tarea_nombre, sub_tarea_fecha_de_vencimiento,tarea_id) values('1',
'calar','2018-12-05','1');

