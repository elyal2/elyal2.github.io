---
id: educativa-copiloto-documental
lang: en
title: Generative AI for Document Management
cliente_display: Educational Organization
cliente_publico: false
sector: Formación y Servicios Profesionales
tecnologia:
- Azure
- Copilot Studio
- Retrieval-Augmented Generation (RAG)
- SharePoint
- Microsoft Teams
tipo_proyecto: Vertical
importe_label: Vertical
anio: 2024
partner:
- Microsoft
bu: Data & AI
tags:
- IA generativa
- Chatbot documental
- Búsqueda asistida
- Autoservicio de información
- Trazabilidad de fuentes
- Feedback de usuario
briefing: An educational organization held relevant knowledge in its corporate document
  management system but needed to make that information available to employees more
  quickly, naturally, and intuitively. The challenge was to enable natural-language
  queries across existing documentation, initially in Spanish, while preventing responses
  outside the authorized repository and preserving the security controls already applied
  across corporate systems. The proposal also included using a familiar collaboration
  channel to encourage service adoption.
---

## 1. Context and Challenge

An educational organization held relevant knowledge in its corporate document management system but needed to make that information available to employees more quickly, naturally, and intuitively. The challenge was to enable natural-language queries across existing documentation, initially in Spanish, while preventing responses outside the authorized repository and preserving the security controls already applied across corporate systems. The proposal also included using a familiar collaboration channel to encourage service adoption.

## 2. Technical Solution

The proposed solution is based on generative AI and Retrieval-Augmented Generation (RAG), using Copilot Studio on Azure as the interaction and orchestration layer. The copilot will connect to the SharePoint document management system through a plugin, retrieve relevant information from the repository, and provide responses with links to the original sources for review. Microsoft Teams will serve as the communication channel for the assistant. The solution will be restricted to documentation supplied by the authorized repository, leverage existing permissions and security mechanisms, and request feedback at the end of each interaction to support continuous improvement. The scope includes solution analysis, design, configuration, deployment, testing, fine-tuning, and validation.

## 3. Business Impact and Results

As this is a proposal that has not yet been implemented, the results described are expected outcomes. The solution would reduce the time spent locating and consulting internal documentation, improve user autonomy, and make organizational knowledge more accessible through natural-language questions. Providing links to the underlying sources would strengthen traceability and confidence in the responses, while integration with Teams would support broader adoption without introducing an additional work channel. In later phases, the architecture could be extended with new channels and capabilities while retaining the document repository and its access controls as the foundation.
