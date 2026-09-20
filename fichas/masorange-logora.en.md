---
id: masorange-logora
lang: en
title: Evolving towards an Advanced Data-Driven Observability Platform
cliente_display: National Telecommunications Operator
cliente_publico: false
sector: Telecomunicaciones
tecnologia:
- Google Cloud Logging
- Google BigQuery
- Grafana Cloud
- Vertex AI
- Cloud Run
- Retrieval-Augmented Generation (RAG)
- IA generativa
- Modelado y analítica de grafos
- Spanner Graph
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2026
partner:
- Google Cloud
bu: Data & AI
tags:
- advanced observability
- log analytics
- AIOps
- root cause analysis
- RCA
- anomaly detection
- conversational AI
- Business Observability
- telemetry
- MVP
- BigQuery ML
- Spanner Graph
- syslog
- rsyslog
- Linked Datasets
- Compute Engine
- Network Load Balancer
- non-disruptive observability
- historical log analysis
- multi-domain log correlation
- AI-ready architecture
- intelligent operations
- log routing
- Google Cloud Logging Agent
- four-layer architecture
briefing: The telecommunications operator is evolving from a reactive syslog and Google
  Cloud Logging model into an intelligent observability platform while preserving
  operational continuity. The target architecture combines Google Cloud Logging for
  operational ingestion, BigQuery and BigQuery ML for historical cross-domain analytics
  and anomaly detection, Grafana Cloud for dashboards and alerting, and a Cloud Run-based
  Root Cause Analysis service enriched with graph dependencies and RAG capabilities.
  A phased MVP and benchmarking approach will validate automated diagnosis and scalable
  observability use cases.
---

## 1. Context and Challenge

The telecommunications operator had a log management model based on syslog, a shared collector and Google Cloud Logging. This approach was suitable for operational ingestion, immediate querying and incident resolution, but presented limitations for advanced analytics, large-scale correlation across technology domains, historical analysis and automated diagnosis. The challenge was to evolve from a reactive logging model towards an intelligent observability platform while maintaining operational continuity and minimising the impact on source systems. The initiative was structured around a detailed design, a Root Cause Analysis (RCA) Minimum Viable Product (MVP) and a progressive scaling roadmap. Log capture and transport remain based on syslog, with a Network Load Balancer as the entry point and a shared collector deployed on Compute Engine instances. The collector integrates rsyslog for reception, normalisation, queue management and buffering, together with the Google Cloud Logging Agent for ingestion into Google Cloud Logging. Existing routing policies direct logs to differentiated destinations by functional domain, with short-term retention focused mainly on operational troubleshooting. Maintaining this capture and transport model enables a progressive, controlled and non-disruptive evolution, including the technical migration of flows from Elasticsearch to Google Cloud Logging and the subsequent incorporation of advanced analytics and data-driven observability capabilities.

The current architecture also consolidates log collection through a shared Compute Engine instance group serving multiple network environments. Google Cloud Logging applies routing policies that direct telemetry to domain-specific destinations, whose retention windows are currently below 30 days. This supports day-to-day troubleshooting but limits longitudinal analysis and cross-domain investigations.

## 2. Technical Solution

A layered architecture was designed to evolve the existing log management model into an advanced observability and data analytics platform. The operational layer retains Google Cloud Logging as the point for log reception, immediate querying and retention management for telemetry from on-premises systems and legacy environments. The analytics layer uses BigQuery for large-scale SQL queries, cross-domain correlation, historical analysis and trend detection, with Linked Datasets providing access to the data without unnecessary duplication. BigQuery ML supports anomaly detection, event classification, behavioural analysis and the prediction of potential degradations, while the evolution of BigQuery's AI capabilities will be assessed as part of the design. Grafana Cloud provides unified visualisation, dashboards, alerting and the consumption of technical and business indicators, supporting Business Observability use cases. Vertex AI, integrated through a Retrieval-Augmented Generation (RAG) approach, adds contextual understanding, semantic interpretation of events and diagnostic assistance. A Root Cause Analysis service deployed on Cloud Run correlates BigQuery analytical data with dependencies between microservices, infrastructure, network components and service flows modelled through Spanner Graph. A conversational RAG interface enables technical teams to explore telemetry and operational knowledge using natural language. The detailed design will also validate, through technical benchmarking, the suitability of Spanner Graph against other graph database alternatives available on Google Cloud, according to the specific use cases and solution requirements.

The proposal frames the target architecture as two complementary layers: BigQuery for scalable Log Analytics and Grafana Cloud for observability, dashboards and alerting. From a functional perspective, these capabilities are organised into four layers: operational ingestion, analytics and Machine Learning, AI-assisted diagnosis, and reporting and consumption. BigQuery ML and Vertex AI provide an AI-ready foundation for progressively introducing anomaly detection, contextual event classification and conversational analytics.

## 3. Business Impact and Results

The solution is designed to transform logs into a strategic asset for operations and decision-making. The MVP will validate the end-to-end architecture and demonstrate the feasibility of an RCA use case based on representative data from the operator's ecosystem. Expected outcomes include earlier anomaly detection, faster identification of potential causes and a reduction in the manual effort required to investigate incidents. By separating the operational, analytics, artificial intelligence and consumption layers, the platform can scale more effectively to new sources, systems and use cases while improving governance. Unified dashboards and conversational interaction will promote self-service access to information for technical and business teams. Combining analytical correlation, system dependencies and AI-assisted investigation is expected to reduce MTTR and accelerate operational response. The preservation of the existing capture model supports a gradual, non-disruptive transition, while knowledge transfer, detailed documentation, operating procedures and a governance model will strengthen operational autonomy. Following MVP evaluation, a roadmap will define the progressive incorporation of new log sources, dashboards, observability coverage, analytical use cases and AI capabilities, establishing the foundations for AIOps, intelligent automation and business-oriented observability.

The separation between operational ingestion, analytical processing, AI-assisted diagnosis and consumption enables the platform to scale its observability coverage while preserving the existing source-system integration model. The extended analytical retention and cross-domain correlation capabilities provide a stronger foundation for longitudinal trend analysis, Business Observability and future AIOps use cases.
