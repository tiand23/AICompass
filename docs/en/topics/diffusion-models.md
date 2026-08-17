# Diffusion Models

## Overview

Diffusion models (the dominant architecture for image/video generation) and their inference optimization: quantization (4-bit etc.), distillation, caching, and the engineering ecosystem around mainstream libraries like Diffusers.

## Why It Matters

The bottleneck for deploying image/video generation is inference cost and VRAM. Quantized inference landing in mainstream libraries raises consumer-hardware viability and directly changes deployment choices and unit economics for generative AI applications.

## Core Concepts

- **Low-bit quantized inference**: 4-bit weight/activation quantization cuts VRAM and latency substantially with controllable quality loss (e.g. Nunchaku).
- **Diffusers**: HuggingFace's standard diffusion library — a technique merging into it means "going mainstream".

## Related Technologies

- [world-models](/en/topics/world-models) (generative simulation is also generative modeling)
- [gemini-models](/en/topics/gemini-models) (the Imagen line folded into Gemini's native multimodal capability)

## Best Practices

- Before deploying an image generation service, benchmark the 4-bit quantized variant's quality delta — most scenarios can cut costs significantly.

## Recommended Resources

- [Bringing Nunchaku 4-bit Diffusion Inference to Diffusers (HuggingFace Blog)](https://huggingface.co/blog)

## Timeline

### [2026-08-17](/en/today/2026-08-17)

Google formally shuts down the Imagen 4 generation endpoints, shifting to Gemini 3.1 Flash Image — another instance of a standalone specialized generation model line folding into a flagship multimodal model (following OpenAI's Atlas folding into ChatGPT/Codex); the `generate_images()` method disappears entirely, not a seamless replacement, requiring callers to rewrite against the new API (see [gemini-models](/en/topics/gemini-models)).

### [2026-07-23](/en/today/2026-07-23)

Nunchaku's 4-bit quantized inference merged into Diffusers — efficient image generation goes mainstream.
