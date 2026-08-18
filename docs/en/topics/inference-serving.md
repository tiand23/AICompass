# Inference Serving

## Overview

Inference serving and deployment: the infrastructure layer that runs trained models efficiently and economically in production — GPU cluster scheduling and utilization, serving architecture, inference cost reduction, and edge deployment. Complementary to [model-efficiency](/en/topics/model-efficiency) (making a single model itself cheaper to run, e.g. quantization/distillation/miniaturization): this topic is about, given a fleet of models and a fleet of hardware, how to schedule, orchestrate, and allocate to maximize hardware utilization and output value.

## Why It Matters

Dharma AI's research finds that enterprise-grade AI clusters commonly run at only 30-50% utilization — "utilization, not model intelligence" is becoming the binding constraint on scaling in production. Two companies with comparable GPU budgets increasingly diverge in actual output based on utilization rather than cluster size. For teams building or procuring GPU capacity, this directly determines whether hardware spend converts into real output, rather than sitting idle or getting consumed by inefficient queuing.

## Core Concepts

- **Utilization vs. intelligence**: GPU financing, depreciation, and power costs accrue continuously on the calendar, regardless of whether the GPU is running useful work; revenue only accrues during genuinely productive compute time — under-utilization is pure cost waste, unrelated to model capability.
- **Scheduling order affects output value independent of occupancy**: at the same hardware occupancy rate, reordering jobs by priority can still meaningfully raise "weighted output value" — the raw utilization number alone doesn't fully capture scheduling quality; you need to look at both "how much is occupied" and "is what's occupied the thing that should be prioritized."
- **Constraint-aware scheduling vs. FIFO**: FIFO allocates resources by arrival order, with static, coarse reservations for real-time-workload peaks; a constraint-aware scheduler models real-time demand as a dynamic curve across a 24-hour horizon and dynamically reallocates batch-job placement by priority — the same jobs, the same hardware, but adjusting only the scheduling logic can substantially raise both utilization and output value.
- **Orchestration layer + model specialization are complementary**: specialization alone (swapping in smaller, task-specific models) without orchestration frees capacity nobody reclaims; orchestration alone without specialization has less capacity worth reclaiming — the two need to advance together.
- **Durable workflows as an orchestration primitive**: modeling "resource coordination" itself as a durable, observable workflow entity (e.g. using Temporal's semaphore Workflow for concurrency control) is more reliable than hand-rolled locks and retry counters in application code — this pattern applies equally to non-agent scenarios like document processing (see [document-parsing](/en/topics/document-parsing)).

## Related Technologies

- [model-efficiency](/en/topics/model-efficiency) (cost reduction at the model level, complementary to cluster-scheduling-level cost reduction)
- [agent-workflow](/en/topics/agent-workflow) (durable workflow orchestration is a shared infrastructure pattern between the two)
- [diffusion-models](/en/topics/diffusion-models) (image/video generation is likewise constrained by inference cost and VRAM barriers)

## Best Practices

- Examine scheduling order and reservation policy first, before reaching for a more sophisticated scheduling algorithm or procuring more hardware — much utilization loss comes from "reserved but under-reused" capacity, not insufficient hardware.
- Plan resource allocation against a full 24-hour demand curve rather than a static peak reservation; re-optimize on a short cycle (30-60 minutes) to absorb forecast error.
- Build workload-specific demand estimators for different workload types (real-time vs. batch, different task priorities) rather than applying a generic predictor.

## Recommended Resources

- [GPU Management: Why Idle GPUs Are the New Grounded Aircraft (HuggingFace Blog, Dharma-AI)](https://huggingface.co/blog/Dharma-AI/gpu-management)
- [Same Cluster, 33 Points More Utilization: What Changed Was the Order (HuggingFace Blog, Dharma-AI)](https://huggingface.co/blog/Dharma-AI/gpu-management-pt2)

## Timeline

### [2026-08-17](/en/today/2026-08-17)

Topic created. Dharma AI publishes the second installment of its GPU cluster utilization research: across 7 benchmark scenarios, a constraint-aware scheduler lifts utilization 33.4 points over a FIFO baseline in a training-heavy scenario (53.6%→87.0%), corresponding to a 105.1% gain in output value; even at the largest scale tested, where utilization ties, priority-weighted output value still rises 15.9% — scheduling order independently affects output quality. Same day, LlamaIndex publishes details on rebuilding its document-processing orchestration on Temporal durable workflows, now processing tens of millions of pages daily (see [document-parsing](/en/topics/document-parsing)).
