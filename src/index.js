const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
//process.env.PORT : en caso que exista un puerto definido por la nube que lo tome
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
//una function que procesa datos antes que el servidor lo reciba
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));

//starting the server
app.listen(3000, () => {
    console.log(`server on port ${app.set('port')}`);
});

//nodemon reinicia el servidor