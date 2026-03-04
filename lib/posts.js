// lib/posts.js
// Reads markdown files from /posts directory and returns structured post data

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * Get sorted list of all posts (metadata only, no content)
 */
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));

  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title:    data.title    || slug,
      date:     data.date     || '',
      excerpt:  data.excerpt  || '',
      category: data.category || 'general',
    };
  });

  // Sort newest first
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Get all post slugs for static path generation
 */
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));
  return fileNames.map(fileName => ({
    params: { slug: fileName.replace(/\.md$/, '') },
  }));
}

/**
 * Get full post data including rendered HTML content
 */
export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    slug,
    contentHtml: processedContent.toString(),
    title:    data.title    || slug,
    date:     data.date     || '',
    excerpt:  data.excerpt  || '',
    category: data.category || 'general',
  };
}
