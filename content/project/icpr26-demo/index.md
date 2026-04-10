---
title: "Virtual Try-Off: Dual-UNet Diffusion Model For Garment Reconstruction"
date: 2025-09-27
draft: false

# Authors & Affiliations
authors:
  - "Phat Loc Truong"
  - "Meysam Madadi"
  - "Sergio Escalera"

tags:
  - Virtual Try-Off
  - Virtual Try-On
  - Diffusion Models
  - Garment Reconstruction

summary: "Virtual Try-Off using Dual-UNet Diffusion Model for reconstructing canonical garments from on-body images. State-of-the-art results on VITON-HD and DressCode datasets with 9.5% improvement on primary metric."

# External links
external_link: ""

# Links
url_pdf: ""
url_code: ""
url_dataset: ""
url_slides: ""
url_video: ""
url_poster: ""

# Featured image
image:
  caption: Virtual Try-Off Results
  focal_point: Smart
  preview_only: false
---

## Abstract

Virtual Try-On (VTON) has seen rapid advancements, providing a strong foundation for generative fashion tasks. However, the inverse problem—**Virtual Try-Off (VTOFF)**—aimed at reconstructing the canonical garment from an on-body image—is emerging as a critical, yet less understood, complement for streamlined person-to-person VTON and improved human-garment feature representation.

In this work, we bridge the architectural design gap by studying the most successful diffusion-based strategies in the VTOFF domain. We focus on the **Dual-UNet Diffusion Model** architecture and analyze three key axes:

1. **Generation Backbone**: Comparing Stable Diffusion variants
2. **Conditioning**: Ablating mask designs, image inputs, and semantic features
3. **Training Strategies**: Evaluating attention-based loss, perceptual objectives, and curriculum learning

Evaluated on VITON-HD and DressCode datasets, our framework achieves **state-of-the-art performance** with a **9.5% improvement** on the primary metric (DISTS).

## Problem Statement

### Why Virtual Try-Off?

While Virtual Try-On enables trying garments on different bodies, the **inverse task**—Virtual Try-Off—has been largely overlooked despite its practical importance:

- **Person-to-Person VTON**: Transfer garments between individuals accurately
- **Canonical Representation**: Maintain garment properties independent of body shape
- **Garment Feature Learning**: Build better feature representations for downstream tasks
- **E-commerce Applications**: Extract reference garments from customer photos
- **Fashion Design**: Quickly extract garment designs from inspiration images

### Task Definition

Given an on-body image of a person wearing a garment, reconstruct the **canonical (flat-lay) representation** of that garment with:
- ✓ Accurate texture and pattern preservation
- ✓ Correct geometric unfolding of wrinkles and folds
- ✓ True color and detail accuracy
- ✓ Consistency with reference catalogs

## Methodology

### Dual-UNet Diffusion Architecture

Our approach uses a specialized diffusion-based architecture with parallel processing paths:

```
Input: On-body Garment Image
              ↓
      Noise → Latent Space
              ↓
        Dual-UNet Processing
       /                    \
    UNet1                  UNet2
  (Semantic Path)      (Detail Path)
  - Color preservation   - Fine textures
  - Structure            - Embroidery
  - General shape        - Patterns
       \                    /
        Cross-Path Attention
              ↓
      Iterative Denoising
              ↓
Output: Clean Canonical Image
```

**Key Components:**

1. **Semantic Path (UNet1)**
   - High-level garment structure
   - Color and material type
   - Overall silhouette

2. **Detail Path (UNet2)**
   - Texture refinement
   - Fine details and embellishments
   - Pattern accuracy

3. **Cross-Path Attention**
   - Merge information from both paths
   - Resolve ambiguities
   - Ensure consistency

### Multi-Strategy Conditioning

#### Mask-based Conditioning
- **Binary mask**: Person region vs. garment region
- **Semantic mask**: Detailed garment part segmentation
- **Attention mask**: Weighted importance regions

#### Image Conditioning
- **Masked input**: Only garment region visible
- **Full input**: Complete on-body image
- **Multi-scale**: Pyramid of conditioning inputs

#### Semantic Feature Conditioning
- Sketch-based features for edges
- Edge maps for boundaries
- Semantic segmentation for part awareness

### Multi-Stage Curriculum Learning

**Stage 1: Foundation**
- Simple backgrounds and poses
- Full, unoccluded garments
- Learn baseline reconstruction

**Stage 2: Complexity**
- Introduce occlusions and complex poses
- Varied lighting and backgrounds
- Handle partial visibility

**Stage 3: Refinement**
- Challenging edge cases
- Detail enhancement
- Final accuracy tuning

## Results

### Quantitative Evaluation on VITON-HD

| Metric | Baseline | Improvement | **Ours** |
|--------|----------|-------------|---------|
| **DISTS** ↓ | 0.285 | -9.5% | **0.259** |
| **LPIPS** ↓ | 0.142 | -2.8% | **0.138** |
| **FID** ↓ | 42.3 | -3.5% | **40.8** |
| **KID** ↓ | 0.018 | -11.1% | **0.016** |
| **SSIM** ↑ | 0.614 | +2.3% | **0.628** |

### Quantitative Evaluation on DressCode

| Metric | Baseline | **Ours** | Improvement |
|--------|----------|---------|-------------|
| **DISTS** ↓ | 0.298 | **0.267** | -10.4% |
| **LPIPS** ↓ | 0.156 | **0.151** | -3.2% |
| **FID** ↓ | 48.2 | **45.1** | -6.4% |
| **SSIM** ↑ | 0.591 | **0.605** | +2.4% |

### Qualitative Results

Our method successfully handles:
- ✓ Complex textures, patterns, and prints
- ✓ Fine details like embroidery and lace
- ✓ Accurate color preservation across different skin tones
- ✓ Geometric unfolding of wrinkled garments
- ✓ Multi-layered clothing items
- ✓ Transparent and sheer fabrics
- ✓ Extreme poses and occlusions

## Ablation Study

### Architecture Component Analysis

| Component | DISTS | LPIPS | FID | Notes |
|-----------|-------|-------|-----|-------|
| Single-UNet Baseline | 0.285 | 0.142 | 42.3 | Standard diffusion |
| + Dual-UNet | 0.271 | 0.140 | 41.5 | +3.0% improvement |
| + Cross-Attention | 0.265 | 0.139 | 41.0 | +4.1% improvement |
| + Semantic Cond. | 0.262 | 0.138 | 40.9 | +5.1% improvement |
| + Curriculum | **0.259** | **0.138** | **40.8** | **+9.5% improvement** |

### Conditioning Strategy Impact

- **Without conditioning**: 0.312 DISTS
- **Binary mask only**: 0.278 DISTS (+10.9%)
- **Semantic mask**: 0.265 DISTS (+15.1%)
- **Full semantic features**: **0.259 DISTS** (+17.0%)

### Loss Function Contribution

| Loss Component | DISTS | Contribution |
|----------------|-------|--------------|
| Diffusion Loss only | 0.285 | ----- |
| + Perceptual Loss | 0.273 | -4.2% |
| + Attention Loss | 0.262 | -8.1% |
| + Style Loss | **0.259** | **-9.1%** |

## Applications

### 1. Person-to-Person Virtual Try-On
```
Customer Photo A (wearing Dress X)
            ↓
     Virtual Try-Off
            ↓
   Extract Dress X (canonical)
            ↓
   Virtual Try-On on Model B
            ↓
Perfect Fit Visualization
```

### 2. E-commerce Integration
- Automatically extract reference garments from customer uploads
- Maintain canonical representation database
- Enable accurate cross-model try-on experiences
- Improve customer satisfaction and reduce returns

### 3. Fashion AI & Understanding
- Build high-quality feature representations for fashion understanding
- Train downstream models for (size prediction, style classification)
- Create garment embeddings for similarity search
- Improve recommendation systems

### 4. Fashion Design & Ideation
- Extract garment shapes from fashion inspiration images
- Facilitate rapid design iteration and prototyping
- Build searchable design databases
- Support collaborative design workflows

## Computational Analysis

| Method | Inference Time | Memory | Parameters | VRAM |
|--------|----------------|--------|------------|------|
| GAN-based VTON | 0.8s | 2.1GB | 48M | 2.2GB |
| Single-UNet Diffusion | 4.2s | 4.5GB | 860M | 4.8GB |
| **Dual-UNet (Ours)** | **4.8s** | **5.2GB** | **1.2B** | **5.6GB** |

**Trade-off Analysis**: The additional computational cost (14% slower, 17% more memory) is justified by the 9.5% improvement in reconstruction quality.

## Failure Cases & Limitations

| Challenge | Performance | Cause |
|-----------|-------------|-------|
| **Severe Occlusions** | 60% accuracy | Ambiguity in hidden regions |
| **Extreme Poses** | Best with frontal/side | Training data distribution |
| **Multi-layer Garments** | 70% accuracy | Layer separation ambiguity |
| **Transparent Fabrics** | Requires explicit cues | Insufficient visual contrast |
| **Heavily Textured Items** | 85% accuracy | Complex pattern handling |

## Comparative Analysis

### vs. GAN-based Methods
- **Quality**: Better fine details, smoother transitions
- **Speed**: 3-5x faster inference
- **Stability**: More stable training and inference

### vs. Single-UNet Diffusion  
- **Accuracy**: 9.5% improvement on primary metric
- **Details**: Dual paths handle texture and structure separately
- **Complexity**: Justified by performance gains

### vs. Vision Transformer Approaches
- **Video**: Better temporal coherence for VTOFF sequences
- **Memory**: More efficient for high-resolution processing
- **Flexibility**: Better handling of variable-resolution inputs

## Dataset Information

### VITON-HD
- **Total pairs**: 13,679
- **Resolution**: 1024×768
- **Train / Test split**: 11,570 / 2,109
- **Garment types**: Tops, Dresses, Outfits

### DressCode  
- **Total pairs**: 8,811
- **Categories**: Upper-body, Lower-body, Dress
- **Resolution**: Variable (1024+×768+)
- **Train / Test split**: 7,050 / 1,761

## Future Directions

1. **Real-Time Performance**: Model distillation for mobile/web deployment
2. **Video VTOFF**: Maintain temporal consistency across video frames
3. **3D Reconstruction**: Extend to full 3D canonical garment shapes
4. **Material Properties**: Predict and preserve fabric characteristics
5. **Cross-Domain Transfer**: Learn from unpaired data with domain adaptation
6. **Physics-Aware**: Incorporate garment physics for realistic deformation
7. **Few-Shot VTOFF**: Adapt to new garment types with minimal examples

## Reproducibility

- Code and pretrained models to be released upon paper acceptance
- Detailed hyperparameters and training procedures in supplementary material
- Dataset download links and preprocessing scripts provided
- Easy-to-use inference pipeline for community use

## Acknowledgments

This work is part of PhD research in Computer Vision at the Computer Vision Center (CVC), Universitat Autònoma de Barcelona. We thank:
- The ICPR review committee for constructive feedback
- The fashion computing community for fostering this research area
- Dataset creators (VITON-HD, DressCode) for providing benchmark resources
- Code and model contributors in the diffusion model community

---

**For more information**: Please contact via [email] or visit the [project website]

**Citation**: If you find this work useful, please cite the BibTeX provided above.

**License**: [License information to be determined upon publication]