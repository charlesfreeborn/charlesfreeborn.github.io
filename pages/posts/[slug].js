// pages/posts/[slug].js
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getAllPostSlugs, getPostData } from '../../lib/posts';

function formatDateLong(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Post({ postData }) {
  return (
    <Layout title={postData.title} description={postData.excerpt}>
      <div className="article-wrapper" style={{ maxWidth: 'var(--content-width)', margin: '0 auto' }}>
        <Link href="/" className="article-back">
          All posts
        </Link>

        <div className="article-meta">
          <span>{formatDateLong(postData.date)}</span>
          {postData.category && postData.category !== 'general' && (
            <span style={{ textTransform: 'capitalize' }}>{postData.category}</span>
          )}
        </div>

        <h1 className="article-title">{postData.title}</h1>

        <article
          className="article-body"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return { props: { postData } };
}
