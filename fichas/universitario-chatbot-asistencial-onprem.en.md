---
id: universitario-chatbot-asistencial-onprem
lang: en
title: On-Premises Clinical Support Chatbot
cliente_display: University Hospital
cliente_publico: false
sector: Salud
tecnologia:
- MongoDB
- Ollama
- LibreChat
- Alfresco
- Retrieval-Augmented Generation (RAG)
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2025
bu: Data & AI
tags:
- Clinical support chatbot
- Autonomous RAG
- On-premises LLM
- Document integration
- Semantic search
- Clinical information self-service
briefing: The hospital needed to provide clinical staff with fast, contextual access
  to clinical protocols, internal procedures and operational guidelines. The documentation
  was distributed across a file directory and a corporate document management system,
  without structured metadata or predefined taxonomies. The proposed pilot was designed
  to work with more than two thousand PDF documents, avoiding manual tagging and advanced
  pre-classification, while running entirely on-premises to preserve the confidentiality
  of clinical information.
---

## 1. Context and Challenge

The hospital needed to provide clinical staff with fast, contextual access to clinical protocols, internal procedures and operational guidelines. The documentation was distributed across a file directory and a corporate document management system, without structured metadata or predefined taxonomies. The proposed pilot was designed to work with more than two thousand PDF documents, avoiding manual tagging and advanced pre-classification, while running entirely on-premises to preserve the confidentiality of clinical information.

## 2. Technical Solution

A modular conversational assistant architecture was proposed, designed to run on-premises and based on open-source components. The solution would include a responsive web interface that could be embedded into corporate portals, an authentication mechanism integrated with the existing corporate system, and user-level activity traceability. The query flow would combine an intent classifier, a modular orchestrator and a clinical support agent based on language models and Retrieval-Augmented Generation (RAG). MongoDB would be used as the vector knowledge base, while Ollama would enable local execution of language and embedding models. Data ingestion would integrate the file directory and Alfresco through APIs or standard connectors. The RAG process would include the detection of document additions and removals, index updates and autonomous maintenance of the knowledge base. Local deployment would prevent documentation from being sent to external services and would support scaling through inference-service replicas and database sharding.

## 3. Business Impact and Results

As this was a proposal for a pilot phase that had not yet been executed, the results are expected outcomes. The solution should reduce the time required to locate clinical information and improve the accuracy and contextual relevance of responses compared with manual searches across dispersed repositories. It is also expected to validate the processing of a significant volume of clinical documentation, establish a scalable foundation for future expansion and reduce maintenance effort through automatic index updates. Clinical staff could benefit from a more autonomous conversational access point, while technical teams would retain control over the infrastructure, data and evolution of the assistant within the hospital environment.
