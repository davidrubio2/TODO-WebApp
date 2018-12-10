var express = require('express');
var router = express.Router();
var db = require('../database');
router.post('/api/NuevaTarea', db.fun_Nueva_Tarea);
router.post('/api/ConsultarResponsables', db.fun_Consultar_Todos_Responsables);
router.post('/api/ConsultarCategorias', db.fun_Consultar_Todas_Categorias);
router.get('/api/ConsutarFiltrosTareas', db.fun_Consultar_Por_Filtros);
router.post('/api/NuevaSubTarea', db.fun_nueva_sub_tarea);


module.exports = router;
