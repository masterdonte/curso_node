function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(query, callback){
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + query.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){   
    this._connection.query('INSERT INTO NOTICIAS SET ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);
}

module.exports = function(){
    return NoticiasDAO;
}