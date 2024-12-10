// Başlangıçta 3 post ekleyelim
const createInitialPosts = () => {
    Post.countDocuments().then((count) => {
      if (count === 0) {
        const posts = [
          { title: 'First Post', detail: 'This is the detail of the first post.' },
          { title: 'Second Post', detail: 'Details about the second post go here.' },
          { title: 'Third Post', detail: 'Here is the detail for the third post.' }
        ];
  
        Post.insertMany(posts)
          .then(() => console.log('Initial posts inserted'))
          .catch((err) => console.error('Error inserting posts:', err));
      }
    });
  };
  
  // Uygulama başlatıldığında başlangıç postlarını ekleyelim
  createInitialPosts();
  