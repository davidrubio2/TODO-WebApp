const initOptions = {
    // global event notification;
    error(error, e) {
        if (e.cn) {
            // A connection-related error;
            //
            // Connections are reported back with the password hashed,
            // for safe errors logging, without exposing passwords.
            console.log('CN:', e.cn);
            console.log('EVENT:', error.message || error);
        }
    }
  };
  
  var pgp = require('pg-promise')(initOptions);
  
  var cn = {
    user: 'postgres',
    password: '1',
    database: 'TODO',
    port: 5432,
    host: 'localhost' // server name or IP address;
  
  };
 // pgp.pg.defaults.ssl = true;
  var db = pgp(cn);
  
  db.connect()
      .then(obj => {
          obj.done(); // success, release the connection;
      })
      .catch(error => {
          console.log('ERROR:', error.message || error);
      });
  
  // add query functions
  
  module.exports = {
    funNuevaTarea: funNuevaTarea,
    funConsultarTodosResponsables: funConsultarTodosResponsables,
    funConsultarTodasCategorias: funConsultarTodasCategorias,
    funConsultarPorFiltros: funConsultarPorFiltros,
    funNuevaSubTarea: funNuevaSubTarea,
    funConsultarSubTarea: funConsultarSubTarea,
    funNuevaCategoria: funNuevaCategoria,
    funNuevoResponsable: funNuevoResponsable
  };
  

  function funNuevaTarea(req, res, next) {
    db.func('fun_nueva_tarea', [req.body.TareaTitulo,
        req.body.IdResponsable,req.body.FechaInicio,req.body.FechaFin,
        req.body.Porcentaje,req.body.IdCategoria])
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Nueva Tarea Agregada'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }
  
  function funConsultarTodosResponsables(req, res, next) {
    db.func('fun_Consultar_Todos_Responsables', [])
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Consulta de Responsables'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function funConsultarTodasCategorias(req, res, next) {
    db.func('fun_Consultar_Todas_Categorias', [])
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Consulta de Categorias'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function funConsultarPorFiltros(req, res, next) {
    db.func('fun_consultar_por_filtros', [req.body.IdResponsable,
        req.body.IdCategoria,req.body.FechaInicio,req.body.FechaFin])
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Consulta por filtros'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }


  function funNuevaSubTarea(req, res, next) {
    db.func('fun_nueva_sub_tarea', [req.body.IdResponsable,
        req.body.Nombre,req.body.FechaVencimiento,req.body.TareaId])
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Nueva Subtarea Agregada'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function funConsultarSubTarea(req, res, next) {
    db.func('fun_consultar_sub_tarea', [req.body.IdTarea])
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Consulta de Tarea'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function funNuevaCategoria(req, res, next) {
    db.func('fun_nueva_categoria', [req.body.CategoriaNombre])
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Nueva Categoria'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function funNuevoResponsable(req, res, next) {
    db.func('fun_nuevo_responsable', [req.body.ResponsableNombre])
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Nuevo Responsable'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }