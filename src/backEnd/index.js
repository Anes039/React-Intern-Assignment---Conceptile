import express from 'express';
import cors from 'cors';



let storedData = [];
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
app.use(cors());
app.use(express.json())

app.post('/edit', (req, res) => {
    const userData = req.body;
    console.log('received data', JSON.stringify(userData, ));
    storedData.push(userData);
    res.json({ message: 'data received successfully', data: userData });
})
app.get('/edit',(req,res) => {
    res.json({data:storedData});
})
app.delete('/edit', (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }
    storedData = storedData.filter(data => data.id !== parseInt(id));
    res.json({ data: storedData });
});


export default app;