import Layout from '../components/Layout';

function Index() {
  return (
    <Layout>
      <div className="container">
        <div className="margin-md">
          <a href="/" className="action-link">
            <span className="dark-gray font-size-50 text-center flex just-center">
              BarelyHuman
            </span>
          </a>
          <div className="tagline margin-sm">
            <small className="font-size-15">The Tech Minimalists</small>
          </div>
        </div>
        <div className="social-links flex just-center">
          <a href="https://github.com/barelyhuman">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              height="30"
              width="30"
            />
          </a>
        </div>
        <div className="flex flex-wrap just-center align-center">
          <a className="margin-sm button black" href="/about">
            About
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
