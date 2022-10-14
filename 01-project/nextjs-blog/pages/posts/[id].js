/**
 * file: pages/posts/[id].js
 * description: file responsible for the post page
 * data: 10/13/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Layout from '../../components/Layout/layout';
import { getAllPostIds } from '../../lib/posts';

export default function Post() {
  return <Layout>...</Layout>;
};

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
