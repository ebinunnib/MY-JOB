import mongoose from 'mongoose'
import  Color from 'colors';

const DBconnection= async()=>{
    try {
        const connection =await    mongoose.connect(process.env.DATA_BASE)
        console.log('..............MONGO DB atlass CONNECTED SUCCESSFULL................'.bgMagenta.green);
    } catch (error) {

        console.log(`mongodb error${error}`,error.bgBlack.red);
        
    }
}
export default DBconnection