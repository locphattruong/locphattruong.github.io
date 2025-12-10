---
title: 'What Matters in Virtual Try-Off? Dual-UNet Diffusion Model For Garment Reconstruction'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Meysam Madadi
  - Sergio Escalera

# Author notes (optional)
author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: 
doi: 

# Schedule page publish date (NOT publication's date).
publishDate: '2025-09-27'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Manuscript under review (ICPR 2026)
publication_short: 

abstract: 'Virtual Try-On (VTON) has seen rapid advancements, providing a strong foundation for generative fashion tasks. However, the inverse problem, Virtual Try-Off (VTOFF)-aimed at reconstructing the canonical garment from an on-body image-is emerging as a critical, yet less understood, complement for streamlined person-to-person VTON and improve human-garment feature representation. In this work, we seek to bridge the architectural design gap by studying the most successful diffusion-based strategies from VTON and general Latent Diffusion Models (LDMs) in the VTOFF domain. We focus our investigation on the strong Dual-UNet Diffusion Model architecture and analyze three axes of design: (i) Generation Backbone: comparing Stable Diffusion variants; (ii) Conditioning: ablating different mask designs, masked/unmasked inputs for image conditioning, and the utility of high-level semantic features; and (iii) Losses and Training Strategies: evaluating the impact of the auxiliary attention-based loss, perceptual objectives and multi-stage curriculum schedules. Extensive experiments reveal trade-offs across various configuration options. Evaluated on VITON-HD and DressCode datasets, our framework achieves state-of-the-art performance with a drop of 9.5% on the primary metric DISTS and competitive performance on LPIPS, FID, KID, and SSIM, providing both stronger baselines and insights to guide future Virtual Try-Off research.'

# Summary. An optional shortened abstract.
summary: 

tags:
  - Virtual Try-Off
  - Virtual Try-On
  - Diffusion Model

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---