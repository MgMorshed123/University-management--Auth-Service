import path from "path"
import  { createLogger, format, transports }    from "winston";
const { combine, timestamp, label, printf , prettyPrint  } = format;
import  DailyRotateFile from 'winston-daily-rotate-file';



// custom log format 
const myFormat = printf(({ level, message, label, timestamp }) => {

  const date = new Date(timestamp);

  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds();


  



  return `${date.toString()}  ${hour} : ${minutes} : ${seconds} [${label}] ${level}: ${message}`;
}); 


// import { Path } from "mongoose";
const logger = createLogger({
    level: 'info',
    format: combine(
      label({ label: 'right meow!' }),
      timestamp(),
      myFormat,  prettyPrint() 
    ),
    transports: [
        new transports.Console(),
        
        new DailyRotateFile({
          filename : path.join(process.cwd(), 'logs', 'winston','successes', ' phu-%DATE%-success.log') ,
          datePattern: 'YYYY-MM-DD-HH',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d'
        })

     
          

    ],
  });






  const errorlogger = createLogger({
    level: 'error',
    format:  combine(
      label({ label: 'right meow!' }),
      timestamp(),
      myFormat
    ),
    transports: [
      new transports.Console(),

      // new transports.File({ 
      //   filename : path.join(process.cwd(), 'logs', 'winston', 'errors', 'phu-%DATE%-error.log') , level : 'error' }),
      new DailyRotateFile({
        filename : path.join(process.cwd(), 'logs', 'winston','successes', ' phu-%DATE%-errors.log') ,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d'
      })
  ],

  });


  export {logger,errorlogger};
  