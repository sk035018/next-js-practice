import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/posts";

export const getStaticProps = () => {
  const allPostsData = getPostsData();
  return { props: { allPostsData } };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Blogs</p>
        <ul>
          {allPostsData.map(({ id, title, body }) => {
            return (
              <li key={id}>
                {id} <br />
                {title} <br />
                {body}
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
