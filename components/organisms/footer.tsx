import styles from '@/assets/styles/layout.module.scss';
import { routes, social } from '@/common';
import { cn } from '@/helpers';
import { Container, LogoIcon, NavLink, Text } from '../atoms';

export function Footer() {
  return (
    <footer className='bg-neutral-950'>
      <Container>
        <section className="relative py-20 text-white/75 before:absolute before:left-2/4 before:top-0 before:h-1 before:w-24 before:-translate-x-2/4 before:bg-brand-500 before:content-[''] before:md:left-0 before:md:translate-x-0">
          <div className='mb-7 flex flex-col items-center gap-7 text-center md:items-start md:text-left lg:flex-row lg:justify-between'>
            <LogoIcon className='text-white transition-all delay-0 duration-300  ease-in hover:text-brand-500 focus:text-brand-500 active:text-brand-500' />

            <nav aria-label='Secondary Navigation'>
              <ul className='flex flex-col items-center gap-5 md:flex-row md:gap-8'>
                {routes?.map((route) => (
                  <li
                    key={`footer-${route.text}`}
                    className='text-200 font-bold uppercase leading-300 tracking-100 text-white transition-all delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500'
                  >
                    <NavLink href={route.url}>{route.text}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={cn('mt-8', styles['footer-grid'])}>
            <Text as='p' modifier={'white/50'} className={styles.info}>
              Audiophile is an all-in-one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a
              week&nbsp;<span className='text-white'>👋</span>
            </Text>

            <Text
              as='p'
              modifier={'white/50'}
              weight={'bold'}
              className={styles.copyright}
            >
              Copyright &copy; {new Date().getFullYear()} Audiophile Inc. All
              Rights Reserved
            </Text>

            <ul
              className={cn('flex items-center gap-4', styles.social)}
              aria-label='Social Links'
            >
              {social.map((route) => {
                const Icon = route.icon;
                return (
                  <li
                    key={`footer-${route.text}`}
                    className='text-white transition-all delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500'
                    title={`Visit my ${route.text}`}
                  >
                    <a
                      href={route.url}
                      aria-label={route.text}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='fill-current'
                    >
                      <span className='sr-only'>{route.text}</span>
                      <Icon aria-hidden='true' className='icon' />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </Container>
    </footer>
  );
}
