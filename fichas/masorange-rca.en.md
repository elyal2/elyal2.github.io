---
id: masorange-rca
lang: en
title: Intelligent Network Incident Diagnosis Using Graphs and Generative AI
cliente_display: MasOrange
cliente_publico: true
sector: Telecomunicaciones
tecnologia:
- AWS
tipo_proyecto: Plataforma
importe_label: Plataforma
anio: 2025
partner:
- AWS
bu: Data & AI
tags:
- RCA
- AIOps
- Digital Twin
- Graphs
- NOC
- Alarm Correlation
- Multivendor Analysis
- Generative AI
- Failure Prediction
briefing: The operator faced significant operational complexity across its RAN, core
  and transport networks, with thousands of alarms, static and segmented topology
  inventories, and multiple OSS tools that were difficult to correlate. Identifying
  the origin of an incident could take more than seven hours, particularly in multivendor
  environments and widespread service outage scenarios. Operations teams invested
  considerable effort in reviewing alarms, gathering evidence and manually relating
  events across domains, while traditional root cause analysis approaches relied mainly
  on static rules and thresholds.
---

## 1. Context and Challenge

The operator faced significant operational complexity across its RAN, core and transport networks, with thousands of alarms, static and segmented topology inventories, and multiple OSS tools that were difficult to correlate. Identifying the origin of an incident could take more than seven hours, particularly in multivendor environments and widespread service outage scenarios. Operations teams invested considerable effort in reviewing alarms, gathering evidence and manually relating events across domains, while traditional root cause analysis approaches relied mainly on static rules and thresholds. Visibility into the impact of configuration changes was also limited, and there was no consistent traceability of which elements had caused or propagated an incident.

## 2. Technical Solution

A proactive diagnosis platform was designed around a network digital twin and a continuously updated graph model. The solution ingests topology, device, link, provider, communication-layer, alarm and metric information, normalizing the data to represent relationships between network elements. Topology discovery, relationship completion, alarm clustering by connectivity and propagation analysis algorithms are applied to this graph. The approach evolved from indiscriminate propagation of all alarms to a model focused on events with proven service impact, reducing noise and spurious correlations. For each cluster, affected-area subgraphs are generated within defined hop and shortest-path limits. PageRank, betweenness, closeness, causal path counts and downstream node influence are then calculated. A weighted combination of these metrics prioritizes potential root causes. Finally, machine learning and generative AI services produce structured explanations, rank hypotheses by probability, summarize the incident timeline and propose recovery actions. The architecture was implemented using managed AWS services, including ingestion and transformation components, graph storage, analytics, serverless functions and API exposure for integration with the NOC operations interface. The design provides traceability of the nodes included, the clustering criteria and the calculation of the resulting scores.

## 3. Business Impact and Results

The platform can correlate large volumes of alarms and metrics within seconds, focusing analysis on events with an actual impact on service. Refining the propagation model reduced noise, avoided false correlations and produced more actionable root cause analysis results for operations teams. In the scenarios analyzed, the combination of topology, centrality metrics and generative reasoning identified propagation chains ranging from physical or power failures to synchronization issues, transport link failures and loss of availability. The solution improves NOC efficiency by automating alarm clustering, incident enrichment and report generation, reducing reliance on manual investigations. It also provides a scalable foundation for analyzing multivendor networks and different technology domains, with explainable and auditable results. Operators gain greater autonomy to review hypotheses, understand the temporal impact of each incident and act on the nodes with the greatest influence, while diagnosis can be integrated into established support and incident management processes.
