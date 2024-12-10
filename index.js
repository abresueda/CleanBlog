const express = require('express');
const app = express();
const PORT = 3000;

// Basit bir GET isteği
app.get('/', (req, res) => {
  const blog = {
    id: 1,
    title: 'Blog title',
    description: 'Blog description',
  };
  res.send(blog);
});

// Sunucuyu dinleme
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
