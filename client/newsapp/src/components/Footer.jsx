const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white" style={{backgroundColor: 'white'}}>
        <div className="container pt-4">
          <section className="mb-4" >
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/saikrishna488"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram">Instagram</i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https:instagram.com/captenium"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github">github</i>
            </a>
          </section>
        </div>
        <div
          className="text-center text-dark p-3"
          style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
        >
          © 2023 Copyright
        </div>
      </footer>
    </div>
  );
};

export default Footer;
