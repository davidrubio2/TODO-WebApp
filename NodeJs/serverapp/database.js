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
  pgp.pg.defaults.ssl = true;
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
    fun_Nueva_Tarea: fun_Nueva_Tarea,
    fun_Consultar_Todos_Responsables: fun_Consultar_Todos_Responsables,
    fun_Consultar_Todas_Categorias: fun_Consultar_Todas_Categorias,
    fun_Consultar_Por_Filtros: fun_Consultar_Por_Filtros,
    fun_nueva_sub_tarea: fun_nueva_sub_tarea
  };
  
