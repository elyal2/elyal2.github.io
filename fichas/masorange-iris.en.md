---
id: masorange-iris
lang: en
title: Explainable AI and Observability for Image Classification
cliente_display: National Telecommunications Operator
cliente_publico: false
sector: Telecomunicaciones
tecnologia:
- OpenLLMetry
- OpenTelemetry
- OpenShift
- Oracle Database
- YOLO
- Explainable AI (XAI)
- IA generativa
tipo_proyecto: Plataforma
importe_label: MVP/PoC
anio: 2025
bu: Data & AI
tags:
- AI observability
- LLM monitoring
- image classification
- model explainability
- model auditing
- data drift
- Grafana dashboards
- visual evidence
- structured explanations
- contrastive explanations
- deterministic validation
- statistical monitoring
- visual XAI
- heatmaps
- multimodal AI observability
- confusion matrix analysis
- GPU model training
briefing: A national telecommunications operator was evaluating how to make its IRIS
  image-classification solution more explainable, auditable and operationally observable.
  The existing approach could produce predictions, but it provided limited visibility
  into the evidence supporting each decision, the reliability of the responses and
  the causes of classification errors. The proposal addressed the need to detect bias,
  inconsistencies, data drift, class confusion and model degradation over time, while
  also establishing a defensible approach for production and audit-oriented environments.
---

## 1. Context and Challenge

A national telecommunications operator was evaluating how to make its IRIS image-classification solution more explainable, auditable and operationally observable. The existing approach could produce predictions, but it provided limited visibility into the evidence supporting each decision, the reliability of the responses and the causes of classification errors. The proposal addressed the need to detect bias, inconsistencies, data drift, class confusion and model degradation over time, while also establishing a defensible approach for production and audit-oriented environments. Several alternatives were considered, ranging from structured explanations and deterministic validation rules to independent auditing models, contrastive explanations, machine learning models and visual Explainable AI techniques.

The document clarifies that a YOLO model had already been trained without improving the current solution. A further ML/YOLO exploration would therefore require a larger model, a broader and more diverse dataset, and GPU resources.

## 2. Technical Solution

The proposed solution combines explainability, model auditing and end-to-end observability around the existing image-classification workflow. The first layer enriches each model response with structured fields such as the predicted label, visual evidence, relevant image regions, confidence level and limitations. These results are persisted in Oracle Database for traceability. A parallel auditor model can subsequently review the image, the original explanation and the prediction, assigning a quality assessment and suggesting alternatives. Deterministic validation rules complement the generative explanation by checking attribute compatibility, minimum confidence thresholds and alignment between relevant regions and expected objects. For visual evidence, the architecture can integrate Explainable AI techniques such as Grad-CAM, Score-CAM, attention maps and activation regions. The visual model produces the prediction and spatial evidence, while the generative model translates that evidence into an auditable explanation without replacing the underlying visual evidence. The observability layer instruments the pipeline with OpenLLMetry and OpenTelemetry, capturing traces, metrics, logs, model context, prompts, latency and errors. Telemetry is exported through OTLP to an OpenTelemetry Collector deployed on OpenShift and made available for dashboards and operational analysis. A complementary monitoring pipeline calculates historical metrics, class-level performance, confidence distributions, error patterns and data-drift indicators, with results stored in Oracle Database and presented through Grafana dashboards. Alternative experiments may also include the training and deployment of a larger YOLO or other machine learning model using a broader dataset and GPU resources.

The implementation can include parallel processing to compare the existing IRIS flow with versions using extended prompts or additional audit logic before adopting the changes in the main path. The OpenLLMetry integration is described through SDK initialization and workflow/task instrumentation, with each request traced across the sequence image → model → result and exported via OTLP to an OpenTelemetry Collector on OpenShift. For the visual XAI path, the flow is image → visual model → heatmap or relevant regions → LLM, where the LLM interprets the spatial evidence but does not generate or replace it. The document also identifies the main implementation activities: Oracle persistence, monitoring-container deployment, Grafana dashboard design, validation and test cycles, and GPU-based training and deployment for any new ML/YOLO model. Indicative estimates range from approximately two to four weeks for structured explanations and the auditor model, around two weeks for deterministic rules, approximately four weeks for contrastive analysis and implementation, eight weeks for statistical monitoring, four weeks for OpenLLMetry integration and Grafana visualisation, and up to twelve weeks for XAI investigation, training and implementation.

## 3. Business Impact and Results

The proposal is expected to improve the governance and operational control of the image-classification service by making individual predictions easier to inspect and aggregate performance easier to monitor. Structured explanations and stored evidence would accelerate investigation of incorrect or low-confidence results, while contrastive analysis and deterministic rules would strengthen the reliability and reproducibility of model decisions. Visual evidence would help business and audit stakeholders verify whether the model is focusing on the relevant object rather than on background elements or unrelated artefacts. Historical monitoring would support earlier detection of data drift, class imbalance and performance degradation. OpenLLMetry and OpenTelemetry would provide end-to-end visibility across the AI pipeline, supporting faster diagnosis of latency, errors and model behaviour. The resulting capabilities would create a more scalable foundation for production operation, enable internal teams to analyse model performance through dashboards and reduce dependence on ad hoc manual reviews. The document describes implementation alternatives and expected benefits rather than confirmed post-deployment results.
