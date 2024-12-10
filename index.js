const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
// EJS şablon motorunu ayarlama
app.set('view engine', 'ejs');

// Views klasörünü belirt
app.set('views', path.join(__dirname, 'views'));

//Statik dosyaları sunmak için middleware
app.use(express.static(path.join(__dirname, 'public')));


// Basit bir GET isteği
/*app.get('/', (req, res) => {
  const blog = {
    id: 1,
    title: 'Blog title',
    description: 'Blog description',
  };
  res.send(blog);
});*/

app.get('/', (req, res) => {
    res.render('index', { title: 'Clean Blog' });
});

app.get('/about', (req,res) => {
    res.render('about', { title: 'About Us' });
});

app.get('add', (req, res) => {
    res.render('add', { title: 'Add New Post' });
});

// Sunucuyu dinleme
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
