import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import AnimatedPresence from '@/components/animated-presence';

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const contentDirectory = path.join(process.cwd(), 'contents');

  const { slug } = await params;

  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return <div>The article / blog not found.</div>;
  }

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContent);

    const { default: Post } = await import(`@/contents/${slug}.mdx`);

    if (!Post) {
      return <div className="flex flex-col">Post not found</div>;
    }

    return (
      <AnimatedPresence
        as="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex w-full max-w-2xl flex-col items-center justify-center"
      >
        <div className="mb-6 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p className="text-gray-500">
            {new Date(data.date).toLocaleDateString()} -{' '}
            {data.author || 'Unknown Author'}
          </p>
        </div>
        <MDXRemote source={content} />
      </AnimatedPresence>
    );
  } catch (error) {
    console.error(`Error loading MDX file for slug "${slug}":`, error);
    return <div className="flex flex-col">Invalid MDX file</div>;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const contentDir = path.join(process.cwd(), 'contents');
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return { title: 'Not Found', description: 'Post not found' };
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return {
    title: `Muhammad Zulfan Wahyudin - ${data.title || slug}`,
    description: data.description || 'No description available',
  };
}
