---
id: constructora-nacional-materiales
lang: en
title: Artificial Intelligence MVP for Construction Materials
cliente_display: National Construction Company
cliente_publico: false
sector: Construcción
tecnologia:
- Watsonx.ai
- Watsonx Discovery
- Code Engine
- Excel
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2025
partner:
- IBM
bu: Data & AI
tags:
- IA generativa
- búsqueda por similitud
- cross-encoder
- BC3
- enriquecimiento de datos
- validación dimensional
- gestión de colas
briefing: A national construction company needed to streamline the analysis of construction
  designs and estimates in BC3 format in order to identify valuable materials and
  match them with an environmental impact database. The process required manually
  breaking down line items, interpreting heterogeneous descriptions and locating comparable
  materials. This limited productivity, hindered scalability and increased validation
  efforts.
---

## 1. Context and Challenge

A national construction company needed to streamline the analysis of construction designs and estimates in BC3 format in order to identify valuable materials and match them with an environmental impact database. The process required manually breaking down line items, interpreting heterogeneous descriptions and locating comparable materials. This limited productivity, hindered scalability and increased validation efforts. The project was defined as a minimum viable product (MVP) through co-creation, functional discovery and technical deep-dive sessions.

## 2. Technical Solution

A solution based on generative AI, lexical search and similarity search was designed. BC3 or Excel files are preprocessed, and their line items are added to a queue for decomposition. watsonx.ai is used to extract and enrich elements, generate descriptions and support validation, while watsonx Discovery enables the search and retrieval of materials from the enriched database. Code Engine integrates the components, manages processing, scales execution and generates results and reports. The workflow includes text cleaning, removal of codes and dimensions to make searches more flexible, complementary Internet searches, and dimensional validation with unit standardisation and a defined tolerance for accepting or rejecting mappings.

## 3. Business Impact and Results

As this is an MVP proposal that is still pending implementation, the results are expected outcomes. The solution is expected to reduce the processing time for each BC3 file from approximately two weeks to around 16 hours, significantly improving team productivity. It should also automate material decomposition and mapping, increase the capacity to process large volumes of line items and facilitate the identification of lower-environmental-impact alternatives. Queue-based design and automated scaling will allow capacity to adapt to different demand levels, while the solution and knowledge transfer will promote greater autonomy for the internal team.
