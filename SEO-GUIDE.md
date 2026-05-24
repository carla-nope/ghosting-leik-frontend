# GhostingLeik SEO & AI SEO Optimization Guide

## Overview

GhostingLeik is optimized for both traditional search engines and AI systems that may consume and reference web content. This document outlines all SEO implementations.

---

## Implemented SEO Features

### 1. Technical SEO

#### Meta Tags (index.html)
- **Title**: Optimized for each page with brand name and primary keyword
- **Meta Description**: 150-160 characters, includes primary keywords
- **Meta Keywords**: Relevant terms (Japanese ghost stories, kaidan, yōkai, etc.)
- **Canonical URLs**: Prevents duplicate content issues
- **Robots Meta**: `index, follow` for proper crawling

#### Open Graph (Social SEO)
- Facebook, LinkedIn, Pinterest sharing optimized
- Includes title, description, image, site name, locale
- Twitter Card support for Twitter sharing

#### Performance
- Preconnect hints for Google Fonts
- Favicon SVG for faster loading
- Apple touch icon support
- Theme color for mobile browsers

### 2. Structured Data (Schema.org JSON-LD)

Implemented across all pages:

| Schema Type | Pages | Purpose |
|-------------|-------|---------|
| Organization | All | Brand identity for search |
| WebSite + SearchAction | All | Enable site search in results |
| BreadcrumbList | All | Navigation context in SERPs |
| FAQPage | About, Contact | Rich snippets in results |
| Article | Stories | Article markup for blog content |
| Product | Pricing | Membership pricing markup |
| HowTo | Quiz | Quiz step markup |

### 3. AI SEO Considerations

#### Content Visibility
- Clear, descriptive headings (H1, H2, H3 hierarchy)
- Semantic HTML5 elements (`<article>`, `<section>`, `<nav>`)
- Descriptive alt text for all images
- Schema markup for AI parsing

#### AI Bot Directives (robots.txt)
- Allows all legitimate AI crawlers
- Respects opt-out for AI training
- Includes GPTBot, Googlebot, Bingbot, etc.

#### Content Structure
- Short paragraphs for easy parsing
- Bullet points and numbered lists
- Clear section headers
- FAQ schema for direct answers

### 4. Sitemap (sitemap.xml)

Complete sitemap with:
- All public pages
- Priority levels based on importance
- Change frequency hints
- News schema for featured stories

### 5. robots.txt

Key directives:
- Sitemap reference
- AI training opt-out
- Allow all legitimate crawlers
- Disallow internal/admin paths

---

## SEO Best Practices Applied

### On-Page SEO
- [x] Unique title tags per page
- [x] Meta descriptions (not generic)
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [x] Internal linking structure
- [x] Image optimization (alt text)
- [x] URL structure (clean, descriptive)
- [x] Mobile responsiveness
- [x] Page speed optimized

### Technical SEO
- [x] SSL/HTTPS ready (when deployed)
- [x] XML sitemap
- [x] robots.txt
- [x] Canonical URLs
- [x] Structured data
- [x] Fast loading (Vite + optimized)
- [x] Mobile-first design

### Content SEO
- [x] Long-tail keywords in content
- [x] Natural keyword placement
- [x] Internal linking
- [x] Fresh content strategy
- [x] User engagement metrics ready

---

## AI SEO Checklist

### For AI Content Consumption
- [x] Structured data for easy parsing
- [x] Clear content hierarchy
- [x] FAQ schema for direct answers
- [x] Descriptive headings
- [x] Short, scannable paragraphs

### For AI Training Respect
- [x] robots.txt AI opt-out
- [x] Clear content ownership
- [x] No cloaking or deceptive practices

---

## Future SEO Enhancements

### Phase 2
1. **Blog Section** - Regular content for topical authority
2. **Video Content** - YouTube embeds with schema
3. **Podcast** - Audio content with transcription
4. **User Reviews** - Review schema for products

### Phase 3
1. **Local SEO** - Google Business Profile
2. **International** - Japanese language version
3. **AMP Pages** - Accelerated Mobile Pages
4. **PWA** - Progressive Web App features

---

## Monitoring & Analytics

### Recommended Tools
- Google Search Console (free)
- Google Analytics 4 (free)
- Ahrefs or Semrush (paid)
- Screaming Frog (SEO audit)
- GTmetrix (performance)

### Key Metrics to Track
1. Organic traffic growth
2. Keyword rankings
3. Click-through rates (CTR)
4. Bounce rate
5. Time on page
6. Core Web Vitals

---

## Content Strategy for SEO

### Target Keywords

**Primary:**
- Japanese ghost stories
- kaidan stories
- yōkai encyclopedia

**Secondary:**
- Japanese supernatural folklore
- ghost stories Japan
- yokai creatures
- Japanese horror stories

**Long-tail:**
- famous Japanese ghost stories
- yokai meaning and origins
- classic kaidan tales

### Content Calendar

| Content Type | Frequency | SEO Benefit |
|-------------|-----------|-------------|
| New story | Weekly | Fresh content, keywords |
| Yōkai profile | Bi-weekly | Topical authority |
| Quiz updates | Monthly | Engagement, links |
| Blog posts | Bi-weekly | Long-tail traffic |

---

## Quick SEO Checklist for New Pages

When adding new pages, ensure:

- [ ] Title tag with primary keyword
- [ ] Meta description (150-160 chars)
- [ ] H1 heading (unique, includes keyword)
- [ ] At least one H2 heading
- [ ] Internal links to related pages
- [ ] External links to authoritative sources
- [ ] Images with descriptive alt text
- [ ] Schema markup if applicable
- [ ] Update sitemap.xml
- [ ] Test in Google Rich Results Test

---

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org)
- [Moz SEO Guide](https://moz.com/beginners-guide-to-seo)
- [AI SEO Best Practices](https://aiseo.guide)