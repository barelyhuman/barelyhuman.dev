import Layout from '../components/Layout';

function Index() {
  return (
    <Layout>
      <div className="container">
        <div className="margin-md flex flex-col v-center">
          <a href="/" className="action-link">
            <span className="dark-gray font-size-50 text-center flex just-center">
              BarelyHuman
            </span>
          </a>
          <div className="tagline margin-md width-50">
            <p className="font-size-17">
              A small Tech Studio that aims on building 3rd Party Apps and
              Developer tools. Most of our offerings will be open sourced as{' '}
              <span class="accent">Barely Human</span> is not for profit but for
              the passion of developers that love coding.
            </p>
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
      </div>
    </Layout>
  );
}

export default Index;
