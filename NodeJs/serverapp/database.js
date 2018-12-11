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
    funNuevaSubTarea: funNuevaSubTarea
  };
  

  function funNuevaTarea(req, res, next) {
    db.func('fun_Nueva_Tarea', [req.body.TareaTitulo,
        req.body.IdResponsable,req.body.FechaInicio,req.body.FechaFin,
        req.body.IdCategoria, req.body.IdSubTarea])
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
    db.func('fun_Consultar_Por_Filtros', [req.body.IdResponsable,
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
        req.body.Nombre,req.body.FechaVencimiento])
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