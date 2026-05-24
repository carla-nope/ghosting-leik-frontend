import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  BreadcrumbSchema,
  FAQSchema,
  ArticleSchema
} from './SeoProvider';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  // Generate breadcrumbs based on current path
  const getBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    const crumbs = [{ name: 'Home', url: 'https://ghostingleik.com/' }];

    let currentPath = '';
    paths.forEach((path) => {
      currentPath += `/${path}`;
      const name = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
      crumbs.push({
        name,
        url: `https://ghostingleik.com${currentPath}`
      });
    });

    return crumbs;
  };

  // FAQ data for schema
  const faqData = [
    {
      question: 'What is GhostingLeik?',
      answer: 'GhostingLeik is your destination for authentic Japanese ghost stories (kaidan), supernatural folklore (yōkai), and interactive tools like our personality quiz and story generator.'
    },
    {
      question: 'Is the content free?',
      answer: 'We offer both free content (limited stories, quiz, basic encyclopedia) and premium membership for full access to all stories, tools, and exclusive content.'
    },
    {
      question: 'What are yōkai?',
      answer: 'Yōkai are supernatural creatures from Japanese folklore. They include ghosts (yūrei), demons (oni), fox spirits (kitsune), and many more fascinating beings.'
    },
    {
      question: 'Can I use the content for creative projects?',
      answer: 'Premium members get access to licensing options and can use content for their creative projects. Contact us for specific licensing inquiries.'
    }
  ];

  return (
    <>
      {/* Global Structured Data */}
      <BreadcrumbSchema items={getBreadcrumbs()} />
      {location.pathname === '/about' && <FAQSchema faqs={faqData} />}
      {location.pathname === '/contact' && <FAQSchema faqs={faqData} />}

      {/* AI SEO: Preload critical assets */}
      <link
        rel="preload"
        href="/favicon.svg"
        as="image"
        type="image/svg+xml"
      />

      {/* AI SEO: Critical CSS inline suggestion */}
      <meta name="format-detection" content="telephone=no" />

      {children}
    </>
  );
};

export default Layout;