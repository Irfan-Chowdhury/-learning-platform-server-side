const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id==='08') {
        res.send(courses);
    }else{
        const category_news = courses.filter(n => n.category_id===id);
        res.send(category_news);
    }
});


app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n._id ===id);
    res.send(selectedCourse);
});



app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = courses.find(n => n._id ===id);
    res.send(selectedNews);
});

app.listen(port, () =>{
    console.log('Dragon News Server running on port', port);
})

