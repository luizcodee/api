import {app}  from "./app";
import {config} from 'dotenv'
config()


app.listen(process.env.PORT, () => {
    console.log(`O servidor esta rodando na porta : ${process.env.PORT}`)
})