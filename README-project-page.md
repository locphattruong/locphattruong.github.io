# Academic Project Page Template for Hugo

This is an adaptation of the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) for Hugo.

## Quick Start

### Creating a New Project Page

1. Create a new project directory:
```bash
hugo new project/your-project-name
```

2. Use the academic layout by setting in your front matter:
```yaml
layout: "single-academic"
```

3. Fill in the front matter with your paper details.

## Front Matter Parameters

### Required Fields
- `title`: Paper title
- `date`: Publication date
- `authors`: List of author names
- `arxiv_id`: arXiv paper ID (or use `paper_pdf` for direct link)

### Optional Fields

#### Author Information
- `author_links`: List of URLs for author profiles/websites
- `affiliations`: List of author affiliations/institutions

#### Paper Links
- `paper_pdf`: URL to PDF (defaults to arXiv if arxiv_id provided)
- `supplement_pdf`: URL to supplementary materials
- `github_url`: GitHub repository URL
- `website_url`: Project website URL
- `dataset_url`: Dataset download link

#### Metadata
- `description`: SEO description (auto-truncated to 160 chars)
- `keywords`: List of relevant keywords
- `conference`: Conference/journal name
- `publication_date`: Publication date (different from content date if needed)
- `featured_image`: Social media preview image URL

#### Citation
- `bibtex`: BibTeX citation as separate field

## Content Structure

Your markdown content can include standard Hugo shortcodes plus these custom ones:

### Shortcodes for Components

#### Abstract
```markdown
{{< abstract title="Abstract" >}}
Your abstract text here. Markdown formatting supported.
{{< /abstract >}}
```

#### Teaser Video
```markdown
{{< teaser-video src="path/to/video.mp4" poster="path/to/poster.jpg" caption="Description here" >}}
```

#### Carousel Images
```markdown
{{< carousel-image src="/images/result1.jpg" alt="Alt text" caption="Figure description" >}}
```

#### YouTube Video
```markdown
{{< youtube-video id="VIDEO_ID" title="Video title" >}}
```

#### PDF Viewer
```markdown
{{< pdf-viewer src="path/to/file.pdf" title="Poster" >}}
```

#### Tables
Standard markdown tables work great:
```markdown
| Method | Metric |
|--------|--------|
| Baseline | 0.85 |
| Ours | 0.92 |
```

## Styling

The page uses custom CSS defined in `assets/css/academic-project-page.css`:

- Responsive design optimized for mobile
- Professional color scheme with blue accent
- Smooth scrolling and animations
- Accessible button and link designs

### Color Variables
```css
--primary-blue: #2563eb
--light-gray: #f5f5f5
--dark-gray: #333
--accent-blue: #3b82f6
--border-color: #e5e7eb
```

## Example Front Matter

```yaml
---
title: "Your Paper Title Here"
date: 2025-11-16
layout: "single-academic"

authors:
  - "Author One"
  - "Author Two"
  - "Your Name"

author_links:
  - "https://example.com/author1"
  - ""
  - "https://yourwebsite.com"

affiliations:
  - "Institution Name"
  - "Conference Name 2025"

description: "Brief description of your research in 150-160 characters"

keywords:
  - "keyword1"
  - "keyword2"
  - "keyword3"

paper_pdf: "https://arxiv.org/pdf/2411.xxxxx.pdf"
github_url: "https://github.com/yourname/repo"
arxiv_id: "2411.xxxxx"
website_url: "https://project-demo.com"

conference: "Conference Name"
publication_date: "2025"

featured_image: "https://example.com/preview.png"

bibtex: |
  @article{yourname2025paper,
    title={Your Paper Title},
    author={Author One and Author Two},
    journal={Journal Name},
    year={2025}
  }
---
```

## Best Practices

1. **Images**: Keep images compressed using TinyPNG or similar
2. **Videos**: Use YouTube for large videos (>10MB)
3. **Social Preview**: Create a 1200x630px image for social media
4. **BibTeX**: Format properly with all required fields
5. **Links**: Always use absolute URLs with https://

## File Structure

```
content/project/
  your-project/
    index.md              # Your project page
    featured.png          # Featured image
    images/
      result1.jpg
      result2.jpg
    videos/
      teaser.mp4
```

## SEO Features

The template automatically includes:
- Meta tags for Google Scholar
- Open Graph tags for social sharing
- Structured data (JSON-LD) for academic articles
- Twitter card optimization

## Tips

- Add a featured image for better social media previews
- Use meaningful alt text for all images
- Include videos in your presentation where possible
- Link to your code and datasets for reproducibility
- Keep abstracts concise but informative

---

For more information about the original template, see the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) repository.
