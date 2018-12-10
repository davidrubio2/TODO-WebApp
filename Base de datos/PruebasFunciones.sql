CREATE or replace FUNCTION fun_NuevaTarea(fun_tarea_titulo varchar(50), fun_id_responsable int, fun_tarea_fecha_de_inicio timestamp,
fun_tarea_fecha_de_fin timestamp,fun_tarea_porcentaje float,fun_categoria_id int, fun_id_sub_tareas int)
RETURNS void AS $$

BEGIN
	insert into tarea(tarea_titulo,id_responsable,
	tarea_fecha_de_inicio,tarea_fecha_de_fin, tarea_porcentaje,categoria_id,id_sub_tareas)
	values(fun_tarea_titulo,fun_id_responsable,fun_tarea_fecha_de_inicio,fun_tarea_fecha_de_fin,fun_tarea_porcentaje,fun_categoria_id,fun_id_sub_tareas);
END;
$$ LANGUAGE plpgsql
SECURITY DEFINER

DROP FUNCTION public.fun_nuevatarea(character varying, integer, timestamp without time zone, timestamp without time zone, double precision, integer, integer);

select  fun_NuevaTarea('Cortar Verdura','1','2018-12-05','2018-12-05','0.1','1','1');



CREATE or replace FUNCTION fun_ConsultarTodosResponsables()
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

drop function fun_ConsultarTodosResponsables;

select  fun_ConsultarTodosResponsables();


CREATE or replace FUNCTION fun_ConsultarTodosCategorias()
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

drop function fun_ConsultarTodosCategorias;

select  fun_ConsultarTodosCategorias;