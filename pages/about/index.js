import Layout from '../../components/Layout';
import Router from 'next/router';

function About() {
  return (
    <Layout>
      <div className="container">
        <ul className="card-border min-width-150-px">
          <li>
            A small Tech Studio that aims on building 3rd Party Apps and
            Developer tools. Most of our offerings will be open sourced as{' '}
            <span class="accent">Barely Human</span> is not for profit but for
            the passion of developers that love coding.
          </li>
        </ul>
        <div
          className="button margin-top-sm align-start back-button"
          onClick={() => Router.back()}
        >
          Back
        </div>
      </div>
    </Layout>
  );
}

export default About;
