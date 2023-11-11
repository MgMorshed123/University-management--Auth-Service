import mongoose from 'mongoose'
import app from './app'
import config from './config'
import  logger  from './share/logger';
// import logger from './share/logger';


async function main() {

  try {
    await mongoose.connect(config.database_url as string)
    logger.info('application connected ')

    app.listen(config.port, () => {
      logger.info(`Server is running on port ${config.port}`)
    })
  }
   catch (error) {
    logger.error(error)
  }

}

main()
