import React from 'react';
import { useLocation } from 'react-router-dom';

interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'product';
  schema?: object;
}

const seoData: Record<string, SeoData> = {
  '/': {
    title: 'GhostingLeik - Japanese Ghost Stories, Yōkai Folklore & Supernatural Tales',
    description: 'Discover authentic Japanese ghost stories (kaidan), explore the Yōkai bestiary, and uncover the mysteries of supernatural folklore. Premium membership for true enthusiasts.',
    keywords: 'Japanese ghost stories, kaidan, yōkai, Japanese folklore, supernatural tales, ghost stories, yokai encyclopedia',
    type: 'website'
  },
  '/stories': {
    title: 'Japanese Ghost Stories Archive | Kaidan Collection - GhostingLeik',
    description: 'Explore our curated collection of authentic Japanese ghost stories (kaidan). From classic tales of vengeance to modern supernatural encounters, discover the mysteries of Japan.',
    keywords: 'Japanese ghost stories, kaidan, horror stories, Japanese folklore, supernatural tales',
    type: 'website'
  },
  '/yokai': {
    title: 'Yōkai Encyclopedia - Complete Guide to Japanese Supernatural Creatures | GhostingLeik',
    description: 'Discover 89+ supernatural creatures from Japanese folklore. Learn about Kitsune, Kappa, Yūrei, Oni and more. Your comprehensive guide to yōkai mythology.',
    keywords: 'yokai, japanese yokai, kitsune, kappa, yūrei, oni, supernatural creatures, japanese folklore',
    type: 'website'
  },
  '/quiz': {
    title: 'Yōkai Personality Quiz - Discover Your Supernatural Spirit | GhostingLeik',
    description: 'Take our interactive quiz and discover which supernatural creature from Japanese folklore matches your personality. 3-minute quiz with instant results.',
    keywords: 'yokai quiz, personality quiz, japanese folklore quiz, supernatural quiz',
    type: 'article'
  },
  '/story-oracle': {
    title: 'Story Oracle - AI-Powered Japanese Ghost Story Generator | GhostingLeik',
    description: 'Generate unique supernatural story ideas using our Story Oracle tool. Perfect for writers, game designers, and horror enthusiasts seeking inspiration.',
    keywords: 'story generator, ghost story ideas, supernatural stories, writing inspiration',
    type: 'website'
  },
  '/pricing': {
    title: 'GhostingLeik Membership - Premium Japanese Supernatural Content',
    description: 'Unlock full access to 156+ ghost stories, 89+ yōkai entries, unlimited story generation, and exclusive content. Choose the plan that fits your journey.',
    keywords: 'ghostingleik membership, premium content, japanese horror subscription',
    type: 'product'
  },
  '/about': {
    title: 'About GhostingLeik - Our Mission & Story',
    description: 'Learn about GhostingLeik\'s mission to preserve and share Japanese supernatural traditions with enthusiasts worldwide.',
    type: 'website'
  },
  '/contact': {
    title: 'Contact GhostingLeik - Get in Touch',
    description: 'Have questions about Japanese ghost stories or yōkai? Contact our team for support, partnerships, or general inquiries.',
    type: 'website'
  }
};

export const usePageSeo = (): SeoData => {
  const location = useLocation();
  const pathSeo = seoData[location.pathname];

  return pathSeo || {
    title: 'GhostingLeik - Japanese Ghost Stories & Yōkai Folklore',
    description: 'Your destination for Japanese supernatural content.',
    type: 'website'
  };
};

export const StructuredData: React.FC<{ type: string; data: object }> = ({ type, data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Article Schema for Stories
export const ArticleSchema = ({ title, description, slug, category, readTime }: {
  title: string;
  description: string;
  slug: string;
  category: string;
  readTime: string;
}) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "url": `https://ghostingleik.com/stories/${slug}`,
      "author": {
        "@type": "Organization",
        "name": "GhostingLeik"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GhostingLeik",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ghostingleik.com/logo.png"
        }
      },
      "datePublished": "2026-05-24",
      "dateModified": "2026-05-24",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://ghostingleik.com/stories/${slug}`
      },
      "articleSection": category,
      "wordCount": parseInt(readTime) * 200,
      "timeRequired": `PT${readTime}M`
    }) }}
  />
);

// FAQ Schema
export const FAQSchema = ({ faqs }: { faqs: { question: string; answer: string }[] }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }) }}
  />
);

// Product Schema for Membership
export const ProductSchema = ({ name, price, description }: {
  name: string;
  price: number;
  description: string;
}) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": name,
      "description": description,
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "brand": {
        "@type": "Brand",
        "name": "GhostingLeik"
      }
    }) }}
  />
);

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }: { items: { name: string; url: string }[] }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    }) }}
  />
);

// HowTo Schema for Quiz
export const HowToSchema = ({ title, steps }: { title: string; steps: string[] }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": title,
      "description": "Discover your yokai spirit through our interactive personality quiz",
      "step": steps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": `Step ${index + 1}`,
        "text": step
      }))
    }) }}
  />
);

export default seoData;