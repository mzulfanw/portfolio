import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import AnimatedPresence from '@/components/animated-presence';

export default function Blogs() {
  const contentDirectory = path.join(process.cwd(), 'contents');
  const fileNames = fs.readdirSync(contentDirectory);

  const posts = fileNames
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        slug: file.replace('.mdx', ''),
        title: data.title || file.replace('.mdx', '').replace(/-/g, ' '),
        date: data.date || 'Unknown Date',
        description: data.description || '',
        author: data.author || '',
      };
    });

  return (
    <AnimatedPresence
      as="section"
      className="flex w-full flex-col items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold">My Blogs</h1>
      <div className="mt-6 flex flex-col">
        {posts.map(post => (
          <Link
            key={post.slug}
            className="flex items-center gap-6"
            href={`/blogs/${post.slug}`}
          >
            <p>{new Date(post.date).toLocaleDateString()}</p>
            <h2>{post.title}</h2>
          </Link>
        ))}
      </div>
    </AnimatedPresence>
  );
}
