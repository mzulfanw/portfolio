import { components } from '@/configs';
import Link from 'next/link';
import AnimatedPresence from '@/components/animated-presence';

export default function Home() {
  return (
    <AnimatedPresence
      as="section"
      className="flex w-full flex-col items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full max-w-2xl flex-col text-left">
        <h1 className="text-4xl font-bold">Software Engineer.</h1>
        <h1 className="text-4xl font-bold">Critical Thinkers.</h1>
        <h1 className="text-4xl font-bold">Adaptable Learners.</h1>
      </div>
      <div className="mt-6 flex w-full max-w-2xl flex-col text-left">
        <p className="text-base">
          Hi 👋, I&#39;m Muhammad Zulfan Wahyudin, a dedicated Software Engineer
          based in Cimahi, Jawa Barat, Indonesia. I specialize in designing,
          developing, and implementing scalable and efficient software
          solutions. With a strong background in web development, I bring
          excellent analytical and problem-solving abilities to deliver
          impactful results.
        </p>
      </div>
      <div className="mt-12 flex w-full max-w-2xl flex-col">
        <h3 className="mb-2">Let&#39;s Connect</h3>
        <div className="flex gap-6">
          {components.social_media.map(item => (
            <Link key={item.name} href={item.href}>
              <item.Component className="h-8 w-8" />
            </Link>
          ))}
        </div>
      </div>
    </AnimatedPresence>
  );
}
