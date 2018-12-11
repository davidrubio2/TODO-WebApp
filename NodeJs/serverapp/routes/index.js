var express = require('express');
var router = express.Router();
var db = require('../database');
router.post('/api/NuevaTarea', db.funNuevaTarea);
router.get('/api/ConsultarTodosResponsables', db.funConsultarTodosResponsables);
router.get('/api/ConsultarTodasCategorias', db.funConsultarTodasCategorias);
router.post('/api/ConsultarPorFiltros', db.funConsultarPorFiltros);
router.post('/api/NuevaSubTarea', db.funNuevaSubTarea);


module.exports = router;
