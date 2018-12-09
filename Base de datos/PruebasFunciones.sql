CREATE or replace FUNCTION fun_NuevaTarea(tarea_titulo varchar(50), id_responsable int, tarea_fecha_de_inicio timestamp,
tarea_fecha_de_fin timestamp,tarea_porcentaje float,categoria_id int, id_sub_tareas int)
RETURNS void AS $$
DECLARE

fun_tarea_titulo  ALIAS FOR $1;
fun_id_responsable  ALIAS FOR $2;
fun_tarea_fecha_de_inicio ALIAS FOR $3;
fun_tarea_fecha_de_fin ALIAS FOR $4;
fun_tarea_porcentaje ALIAS FOR $5;
fun_categoria_id ALIAS FOR $6;
fun_id_sub_tareas ALIAS FOR $7;

BEGIN
	insert into tarea(tarea_titulo,id_responsable,
	tarea_fecha_de_inicio,tarea_fecha_de_fin, tarea_porcentaje,categoria_id,id_sub_tareas)
	values(fun_tarea_titulo,fun_id_responsable,fun_tarea_fecha_de_inicio,fun_tarea_fecha_de_fin,fun_tarea_porcentaje,fun_categoria_id,fun_id_sub_tareas);
END;
$$ LANGUAGE plpgsql
SECURITY DEFINER

drop function fun_NuevaTarearesponsable , tarea_fecha_de_inicio ,
tarea_fecha_de_fin ,tarea_porcentaje ,categoria_id , id_sub_tareas);

select  fun_NuevaTarea('Cortar Verdura','1','2018-12-05','2018-12-05','0.1','1','1');