// i
import express from 'express';
import cors from 'cors';

app.use(cors());

const app = express();
const PORT = 5173;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

app.get('/', (req, res) => {
    const users = [
        {
            name:'Anes',
            age:19,
        },
        {
            name:'Dion',
            age:17,
        }
    ]
    res.json(users);
    console.log(users)
})

export default app;