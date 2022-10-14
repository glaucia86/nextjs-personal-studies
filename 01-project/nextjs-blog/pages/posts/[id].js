/**
 * file: pages/posts/[id].js
 * description: file responsible for the post page
 * data: 10/13/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Head from "next/head";
import Layout from "../../components/Layout/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
