import { components } from '@/configs';
import Link from 'next/link';
import AnimatedPresence from '@/components/animated-presence';

export default function About() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <AnimatedPresence
        as="div"
        className="mb-12 flex w-full max-w-2xl flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Hi, everyone 👋</h1>
        <p className="mt-6 text-base">
          I am a highly dedicated and detail-oriented Frontend Engineer with
          extensive expertise in designing, developing, and optimizing
          interactive, user-friendly, and high-performance web applications.
          Proficient in modern frontend technologies, including HTML, CSS,
          JavaScript, and frameworks such as React, Next JS and Remix JS.
          Passionate about crafting seamless user experiences through intuitive
          UI/UX design, responsive layouts, and efficient state management.
          Committed to continuous learning, innovation, and collaboration to
          build scalable, maintainable, and visually compelling web
          applications.
        </p>
      </AnimatedPresence>
      <AnimatedPresence
        className="mb-12 flex w-full max-w-2xl flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        as="div"
      >
        <h1 className="text-4xl font-bold">Skills & Tech stack</h1>
        <div className="mt-6 grid grid-cols-3 gap-6 text-center">
          {components.skills.map(skill => (
            <AnimatedPresence
              as="div"
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Link href={skill.href} className="flex flex-col items-center">
                <skill.Component className="h-14 w-14" />
                <span className="mt-2 text-lg font-medium">{skill.name}</span>
              </Link>
            </AnimatedPresence>
          ))}
        </div>
      </AnimatedPresence>
      <AnimatedPresence
        as="div"
        className="flex w-full max-w-2xl flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1 className="text-4xl font-bold">Work Experience</h1>
        {components.work_experience.map((experience, index) => (
          <AnimatedPresence
            as="div"
            key={experience.company}
            className="mb-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold">{experience.role}</h2>
            <p className="text-base">
              {experience.company} | {experience.duration}
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              {experience.description.map((point, idx) => (
                <li key={idx} className="text-base leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
            {experience.techStack && (
              <p className="mt-4 text-base">
                <span className="font-semibold">Tech Stack:</span>{' '}
                {experience.techStack.join(', ')}
              </p>
            )}
          </AnimatedPresence>
        ))}
      </AnimatedPresence>
    </section>
  );
}
