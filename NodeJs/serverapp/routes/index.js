var express = require('express');
var router = express.Router();
var db = require('../database');
router.post('/api/NuevaTarea', db.funNuevaTarea);
router.post('/api/ConsultarResponsables', db.funConsultarTodosResponsables);
router.post('/api/ConsultarCategorias', db.funConsultarTodasCategorias);
router.get('/api/ConsutarFiltrosTareas', db.funConsultarPor_iltros);
router.post('/api/NuevaSubTarea', db.funNuevaSubTarea);


module.exports = router;
