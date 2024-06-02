import mongoose from 'mongoose'
import goodlog from 'good-logs'
import { GLOBAL } from 'config/global'

const connectDb = async (isConnected: boolean) => {
  try {
    const dbConnect = await mongoose.connect(String(GLOBAL.DB_URI))
    goodlog.db(GLOBAL.DB_HOST(dbConnect), GLOBAL.DB_NAME(dbConnect), isConnected)
  } catch (error: any) {
    goodlog.error(error.message)
    process.exit(1)
  }
}

export default connectDb
