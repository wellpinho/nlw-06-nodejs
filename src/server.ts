import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import "express-async-errors"
import './database'
import router from './routes'

const app = express()

app.use(express.json());

app.use(router);

app.use((
  err: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction) => {
    if (err instanceof Error) {
      res.status(400).json({
        error: err.message
      })
    }

    return res.status(500).json({
      status: 'Error',
      message: 'Internal Server Error'
    })
})

app.listen(4000, () => {
  console.log('Running on port 4000')
});