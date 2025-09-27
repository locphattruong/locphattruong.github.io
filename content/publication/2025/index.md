---
title: 'Virtual Try-Off with Diffusion Models: A Systematic Study Toward State-of-the-Art'

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
publication: Manuscript under review (2025)
publication_short: 

abstract: "Virtual Try-On (VTON) has rapidly advanced in recent years, bringing astonishing improvements in both accuracy and realism. In contrast, its inverse problem - Virtual Try-Off (VTOFF) - has just started gaining traction. VTOFF aims to reconstruct the canonical garment from its worn version in a person image. It need to generate garment to the new pose with accurate preservation of texture. However, it also requires to reconstruct occluded details, making adapting VTON methods to VTOFF non-trivial. In this work, we present a systematic study of diffusion-based approaches for VTOFF, experimenting various VTON and general Latent Diffusion Model achievements, including Dual-UNet Diffusion Model architecture and different techniques. Our experiments cover different axes of design: (i) comparing Stable Diffusion variants for generation network; (ii) conditioning inputs, including ablations on different mask designs, masked/unmasked inputs for IP-Adapter, and high-level semantic features; (iii) losses and training strategies, with the auxiliary attention-based loss, curriculum schedules, and the impact of perceptual objectives. Extensive experiments on the VITON-HD dataset reveal trade-offs across various options. Our framework achieves state-of-the-art performance with a drop of 9.5% on the primary metric DISTS and competitive performance on LPIPS, FID, KID, and SSIM, providing both stronger baselines and insights for future Virtual Try-Off research."

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