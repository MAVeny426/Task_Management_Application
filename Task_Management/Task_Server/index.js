import express,{json} from 'express';
import { adminRoute } from './Routes/admin_routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();
app.use(
    cors({
        origin:"http://localhost:8000",
        credentials:true,
    })
);
app.use(json());
app.use(cookieParser());
app.use('/',adminRoute)
const port=3000;

app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})