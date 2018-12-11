var express = require('express');
var router = express.Router();
var db = require('../database');
router.post('/api/NuevaTarea', db.funNuevaTarea);
router.post('/api/ConsultarTodosResponsables', db.funConsultarTodosResponsables);
router.post('/api/ConsultarTodasCategorias', db.funConsultarTodasCategorias);
router.get('/api/ConsultarPorFiltros', db.funConsultarPorFiltros);
router.post('/api/NuevaSubTarea', db.funNuevaSubTarea);


module.exports = router;
