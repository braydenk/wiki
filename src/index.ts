import app from './app';


const server = app.listen(app.get('port'), (error) => {

  if (error) {
    Logger.error(error);
    process.exit(1)
    return;
  }


  Logger.info(`started server on  http://localhost:${app.get('port')}`);
});


export default server;
