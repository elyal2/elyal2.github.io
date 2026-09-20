---
id: hotelero-nacional-arquitectura-informacional
lang: en
title: Information Architecture for a National Hotel Group
cliente_display: National Hotel Group
cliente_publico: false
sector: Turismo y ocio
tecnologia:
- Azure
- Snowflake
- Databricks
- Apache Spark
- Python
- Apache Kafka
- Power BI
- Azure Data Factory
- Azure Data Lake Storage Gen2
- Azure DevOps
- Azure Key Vault
- Microsoft Purview
- Confluent Cloud
- Qlik Sense
- Opera Cloud
- Simphony
- SAP S/4HANA Cloud
tipo_proyecto: Plataforma
importe_label: Plataforma
anio: 2024
partner:
- Microsoft
- Snowflake
bu: Data & AI
tags:
- Arquitectura informacional
- Lakehouse
- Data Vault 2.0
- Streaming
- Data Governance
- CI/CD
- Information Marts
briefing: A national hotel group was undergoing a strategic transformation to move
  towards a more data-driven business model. Commercial, point-of-sale and financial
  information was distributed across different systems and SaaS services, making consolidation,
  traceability and consistent business analysis difficult. The challenge was to define
  and build a scalable and flexible enterprise information architecture capable of
  integrating heterogeneous sources and establishing a common foundation for decision-making.
---

## 1. Context and Challenge

A national hotel group was undergoing a strategic transformation to move towards a more data-driven business model. Commercial, point-of-sale and financial information was distributed across different systems and SaaS services, making consolidation, traceability and consistent business analysis difficult. The challenge was to define and build a scalable and flexible enterprise information architecture capable of integrating heterogeneous sources and establishing a common foundation for decision-making. The initiative initially covered the commercial, point-of-sale and financial domains, while retaining the ability to incorporate new sources and data products in later phases.

## 2. Technical Solution

A cloud architecture based on Azure was designed, using a modular lakehouse approach and separating the ingestion, persistence, transformation and consumption layers. Ingestion was designed to support both batch and streaming processes through Apache Kafka and Confluent Cloud, integrating information from reservation, point-of-sale and financial management systems. Storage was structured on Azure Data Lake Storage Gen2, with Snowflake providing the analytical repository. Databricks was selected for transformations, using Apache Spark, SQL and Python, with Azure Data Factory as the orchestration mechanism. Domain modelling followed Data Vault 2.0, distinguishing between the Raw Data Vault, Business Data Vault and Information Marts. The solution included development and production environments, CI/CD automation through Azure DevOps, role-based access control, least-privilege principles and secure secret management with Azure Key Vault. It was also designed to evolve towards data governance, cataloguing and lineage capabilities through Microsoft Purview, as well as consumption through Power BI and Qlik Sense.

## 3. Business Impact and Results

As this was a proposal pending execution, the results are expressed as expected objectives. The architecture would centralise and standardise information from different business domains, reducing reliance on manual processes and enabling faster and more consistent analysis and reporting. The combined use of streaming and batch ingestion should shorten processing windows and support analytics use cases closer to real time. The Data Vault 2.0 design would provide historisation, traceability and flexibility for incorporating new sources, models and business requirements without redesigning the entire platform. Information Marts would also facilitate data self-service for business teams and improve the performance of existing reporting and analytics tools. Deployment automation, documentation and knowledge-transfer sessions would help increase the internal team's autonomy to operate and evolve the resulting data products.
