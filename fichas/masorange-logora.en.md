---
id: masorange-logora
lang: en
title: Advanced Data-Driven Observability Platform for a National Telecommunications
  Operator
cliente_display: MasOrange
cliente_publico: true
sector: Telecomunicaciones
tecnologia:
- IA generativa
- Modelado y analítica de grafos
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2026
partner:
- Google Cloud
bu: Data & AI
tags:
- observability
- log analytics
- AIOps
- root cause analysis
- RAG
- machine learning
- business observability
- managed service
briefing: The client operated a centralized logging model based on syslog, a log concentrator
  and Google Cloud Logging. This architecture supported efficient incident response
  and real-time troubleshooting, but was primarily oriented towards operational ingestion
  and short-term analysis. It limited large-scale correlation across technology domains,
  extended historical analysis, advanced anomaly detection and the conversion of telemetry
  into business-oriented insights.
---

## 1. Context and Challenge

The client operated a centralized logging model based on syslog, a log concentrator and Google Cloud Logging. This architecture supported efficient incident response and real-time troubleshooting, but was primarily oriented towards operational ingestion and short-term analysis. It limited large-scale correlation across technology domains, extended historical analysis, advanced anomaly detection and the conversion of telemetry into business-oriented insights. The project aimed to evolve from a reactive logging model towards a proactive, data-driven observability platform while preserving continuity for on-premises, legacy and cloud-based sources. The initial scope focused on producing a detailed low-level design and validating an end-to-end Root Cause Analysis MVP on a representative data source.

## 2. Technical Solution

The proposed solution introduced a layered observability architecture. An operational layer retained Cloud Logging as the initial reception, short-term storage and real-time troubleshooting service, while existing syslog-based ingestion was maintained to enable a progressive and non-intrusive transition. An analytical layer based on BigQuery provided large-scale SQL analysis, cross-domain correlation, historical exploration and native machine learning capabilities, using linked access to logging data to avoid unnecessary duplication. A visualization and consumption layer based on Grafana Cloud consolidated operational and business dashboards, alerting and service monitoring. The intelligence layer combined BigQuery analytics with Vertex AI-based Retrieval-Augmented Generation to interpret events, retrieve relevant technical knowledge and support assisted diagnosis. A graph-oriented dependency model using Spanner Graph was considered to represent relationships among microservices, infrastructure and networks, although its inclusion was subject to technical validation. A scalable RCA service running on Cloud Run was designed to correlate analytical log data and system dependencies, while a conversational interface would allow technical users to explore incidents, anomalies and recommended actions using natural language. The delivery approach included architecture benchmarking, ingestion assessment, review of alarms, machine learning jobs and dashboards, MVP implementation, operational documentation, knowledge transfer and governance definition.

## 3. Business Impact and Results

The initiative was expected to transform operational telemetry into actionable intelligence and establish the foundation for intelligent observability and AIOps. Expected benefits included faster incident investigation through unified dashboards, automated correlation and contextual root cause analysis; improved early detection through anomaly identification and machine learning; greater scalability for processing and querying growing volumes of logs; and improved historical trend analysis beyond the limitations of the operational logging layer. The architecture was also intended to reduce manual analysis effort, standardize the creation of observability use cases and support a reusable use-case factory model. Knowledge transfer, documentation and governance activities would increase internal autonomy by enabling technical teams to operate, maintain and extend the platform. The roadmap following the MVP would define the progressive onboarding of additional log sources, dashboards, analytical use cases and AI capabilities.
