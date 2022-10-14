/**
 * file: pages/index.js
 * description: file responsible for the main application page.
 * data: 10/08/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
    </Layout>
  );
}
