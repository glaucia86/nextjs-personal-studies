import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Glaucia Lemos. I'm a Developer Advocate at Microsoft. You
          can contact me on{' '}
          <a href='https://twitter.com/glaucia_lemos86'>Twitter</a>.
        </p>
        <p>
          And also, you can find me on{' '}
          <a href='https://github.com/glaucia86'>GitHub</a>.
        </p>
      </section>
    </Layout>
  );
}
