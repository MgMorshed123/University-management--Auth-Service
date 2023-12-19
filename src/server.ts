import mongoose from 'mongoose'
import app from './app'
import config from './config'
import  {logger, errorlogger}  from './share/logger';
// import logger from './share/logger';
import {Server}  from 'http';

let server: Server;

process.on('uncaughtException', err => {

  console.log('Uncaught Rejection is detected ....... ')
  process.exit(1)

})



async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('application connected ')

     server =  app.listen(config.port, () => {
      logger.info(`Server is running on port ${config.port}`)
    })
  }
   catch (error) {
   errorlogger.error(error)
  }


  process.on("unhandledRejection", error => {
    if(server){

      server.close(() => {
        errorlogger.error(error)
        process.exit(1)

      })

    }
    else{

      process.exit(1)

    }
  }) 




}


main()


process.on('SIGTERM', () => {
  logger.info('SIGTERM IS Received')
  if(server) {
    server.close()
  }
})



