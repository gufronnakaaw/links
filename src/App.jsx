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

  const socials = [
    {
      title: 'spotify',
      url: 'https://open.spotify.com/playlist/7qr9IJpGNfLBjVhagMxf5Y?si=410507ec64434749',
      icon: 'fa-brands fa-spotify',
    },
    {
      title: 'instagram',
      url: 'https://instagram.com/gufronnakaaw',
      icon: 'fa-brands fa-instagram',
    },
    {
      title: 'telegram',
      url: 'https://t.me/whoslemontea',
      icon: 'fa-brands fa-telegram',
    },
  ];

  return (
    <div className="container">
      <div className="author">
        <img src="/me.jpg" alt="author" />
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

      <div className="social">
        {socials.map((social, index) => {
          return (
            <a
              href={social.url}
              target="_blank"
              className="social-item"
              key={index}
            >
              <i className={social.icon}></i>
            </a>
          );
        })}
      </div>
      <footer>
        <small>
          Built by <span>wildandev.com</span>
        </small>
      </footer>
    </div>
  );
}
