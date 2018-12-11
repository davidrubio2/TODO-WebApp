CREATE or replace FUNCTION fun_Nueva_Tarea(fun_tarea_titulo varchar(50), fun_id_responsable int, fun_tarea_fecha_de_inicio timestamp,
fun_tarea_fecha_de_fin timestamp,fun_porcentaje float,fun_categoria_id int, fun_id_sub_tareas int)
RETURNS void AS $$

BEGIN
	insert into tarea(tarea_titulo,id_responsable,
	tarea_fecha_de_inicio,tarea_fecha_de_fin, tarea_porcentaje,categoria_id,id_sub_tareas)
	values(fun_tarea_titulo,fun_id_responsable,fun_tarea_fecha_de_inicio,fun_tarea_fecha_de_fin,fun_porcentaje ,fun_categoria_id,fun_id_sub_tareas);
END;
$$ LANGUAGE plpgsql
SECURITY DEFINER

DROP FUNCTION public.fun_nueva_tarea(character varying, integer, timestamp without time zone, timestamp without time zone, double precision, integer, integer);

select  fun_Nueva_Tarea('Cortar Verdura','1','2018-12-05','2018-12-05','0.1','1','1');
-------------------------------------------------------------------------------------------
CREATE or replace FUNCTION fun_Consultar_Todos_Responsables()
 RETURNS TABLE (
 val_Id int,
 val_Nombre varchar(100)
) 
AS $$
BEGIN
	RETURN QUERY select responsable_id,responsable_nombre from responsable;
END;
$$ LANGUAGE plpgsql
SECURITY DEFINER

drop function fun_Consultar_Todos_Responsables;

select  fun_Consultar_Todos_Responsables();

-------------------------------------------------------------------------------------------
CREATE or replace FUNCTION fun_Consultar_Todas_Categorias()
 RETURNS TABLE (
 val_Id int,
 val_Nombre varchar(100)
) 
AS $$
BEGIN
	RETURN QUERY select categoria_id,categoria_nombre from categoria;
END;
$$ LANGUAGE plpgsql
SECURITY DEFINER

drop function fun_Consultar_Todas_Categorias;

select  fun_Consultar_Todas_Categorias();

-------------------------------------------------------------------------------------------
CREATE or replace FUNCTION fun_Consultar_Por_Filtros(fun_id_responsable text, fun_categoria_id text, fun_fecha_inicio text,fun_fecha_fin text)
 RETURNS TABLE (
 val_Titulo varchar(50),
 val_responsable_nombre varchar(100),
val_fecha_de_inicio timestamp,
val_fecha_de_fin timestamp,
val_porcentaje float,
val_categoria_nombre  varchar(50),
val_id_sub_tareas varchar(20)
)
AS $$
declare 
var_responsable ALIAS FOR  $1;
var_categoria ALIAS FOR  $2;
var_fecha_inicio ALIAS FOR  $3;
var_fecha_fin ALIAS FOR  $4;
BEGIN
	RETURN QUERY 
	select tarea.tarea_titulo,responsable.responsable_nombre,
	tarea.tarea_fecha_de_inicio,tarea.tarea_fecha_de_fin, tarea.tarea_porcentaje,categoria.categoria_nombre,sub_tarea.sub_tarea_nombre 
	from tarea 
	inner join responsable 
	on tarea.id_responsable = responsable.responsable_id
	inner join categoria 
	on tarea.categoria_id = categoria.categoria_id
	inner join sub_tarea
	on tarea.id_sub_tareas = sub_tarea.sub_tarea_id
        where tarea.id_responsable::text  LIKE ( fun_id_responsable || '%')
        and 
	tarea.categoria_id::text  LIKE ( fun_categoria_id || '%')
	and
	tarea.tarea_fecha_de_inicio::TEXT like ( fun_fecha_inicio || '%')
	and
        tarea.tarea_fecha_de_inicio::TEXT like ( fun_fecha_fin || '%');
        
	
END;
$$ LANGUAGE plpgsql
SECURITY DEFINER

drop function fun_Consultar_Por_Filtros;

select  fun_Consultar_Por_Filtros('','','','');
-------------------------------------------------------------------------------------------
CREATE or replace FUNCTION fun_nueva_sub_tarea(fun_id_responsable int , fun_sub_tarea_nombre varchar(50),fun_sub_tarea_fecha_de_vencimiento timestamp)
RETURNS void AS $$

BEGIN
	insert into sub_tarea(id_responsable,sub_tarea_nombre,
	sub_tarea_fecha_de_vencimiento)
	values(fun_id_responsable,fun_sub_tarea_nombre,fun_sub_tarea_fecha_de_vencimiento);
END;
$$ LANGUAGE plpgsql
SECURITY DEFINER

drop function fun_nueva_sub_tarea;

select  fun_nueva_sub_tarea('2','caminar','2018-12-08');