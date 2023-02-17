export default function App() {
  const links = [
    {
      title: 'website',
      url: 'https://wildandev.com',
    },
    {
      title: 'linkedin',
      url: 'https://www.linkedin.com/in/gufronnaka-arif-wildan/',
    },
    {
      title: 'github',
      url: 'https://github.com/gufronnakaaw',
    },
    {
      title: 'email',
      url: 'mailto: gufronnakaaw@gmail.com',
    },
    {
      title: 'e-certificate',
      url: 'https://drive.google.com/drive/folders/1XJ-UMKjM37lEzyC6dSOnUzGvYT3aMNKv?usp=sharing',
    },
  ];

  return (
    <div className="container">
      <div className="author">
        <img src="/public/me.jpg" alt="author" />
        <p>Gufronnaka Arif Wildan</p>
      </div>
      <div className="links">
        {links.map((link, index) => {
          return (
            <a href={link.url} target="_blank" key={index}>
              <div className="links-item">
                <p>{link.title}</p>
              </div>
            </a>
          );
        })}
      </div>
      <footer>
        <small>Built by wildandev.com</small>
      </footer>
    </div>
  );
}
