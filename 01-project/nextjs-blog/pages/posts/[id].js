/**
 * file: pages/posts/[id].js
 * description: file responsible for the post page
 * data: 10/13/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Layout from '../../components/Layout/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
