const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const PORT = 3000;
const path = require('path');
const Post = require('./models/Post');

// EJS şablon motorunu ayarlama
app.set('view engine', 'ejs');

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB bağlantısı başarılı!');
}).catch((err) => {
  console.error('MongoDB bağlantı hatası:', err);
});

// Views klasörünü belirt
app.set('views', path.join(__dirname, 'views'));

//Statik dosyaları sunmak için middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

//"Add New Post" sayfası için GET isteği
app.get('/add-post', (req, res) => {
    res.render('add_post', { title: 'Add New Post' });
});

//Post isteği ile gelen veriyi kaydetme
app.post('/add-post', (req, res) => {
  const { title, detail } = req.body;

  const newPost = new Post({
    title,
    detail
  });

  newPost.save()
    .then(() => {
      res.redirect('/'); //Başarılı şekilde kaydedilten sonra anasayfaya yönlendir.
    })
    .catch((err) => {
      console.error('Post kaydetme hatas:', err);
      res.status(500).send('Post Kaydedilemedi.');
    });
});

//Post Verilerini Almak
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ dateCreated: -1 });

    //Ejs dosyasına gönder
    res.render('index', { posts: posts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Sunucu hatası');
  }
});

// Sunucuyu dinleme
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = router;