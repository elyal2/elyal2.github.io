---
id: sanitaria-datanext-aws
lang: en
title: Migration of the DataNext Platform to AWS
cliente_display: Healthcare Reference Hospital
cliente_publico: false
sector: Salud
tecnologia:
- AWS
- Amazon S3
- AWS Glue
- AWS Lake Formation
- AWS CloudTrail
- Amazon Athena
- Python
- Power BI
- Snowflake
- RDS PostgreSQL
- SAP
- MySQL
- MySQL Workbench
- Metabase
- Delta Lake
tipo_proyecto: Plataforma
importe_label: Platform
anio: 2024
partner:
- AWS
bu: Cloud & Managed Services
tags:
- Cloud migration
- Horizontal scaling
- Lakehouse
- Granular security
- Traceability and auditing
- Data governance
- CRUD operations
- Migration assessment
briefing: The healthcare organisation had begun a technology modernisation strategy
  based on the progressive adoption of AWS and the establishment of a Landing Zone.
  In this context, the DataNext information platform, deployed on premises, was experiencing
  sustained growth in users, functional requirements and data volumes. Its architecture
  relied mainly on vertical scaling, limiting the ability to expand storage and computing
  resources with agility.
---

## 1. Context and Challenge

The healthcare organisation had begun a technology modernisation strategy based on the progressive adoption of AWS and the establishment of a Landing Zone. In this context, the DataNext information platform, deployed on premises, was experiencing sustained growth in users, functional requirements and data volumes. Its architecture relied mainly on vertical scaling, limiting the ability to expand storage and computing resources with agility. The environment integrated information from SAP, Python-based ETL processes and MySQL databases supporting the curated and consumption data layers. It also had to manage sensitive information, preserve existing access mechanisms and provide table-, row- and column-level security controls, together with comprehensive access traceability. Expected concurrency requirements further called for an evolution from a capacity limited to a few dozen users towards a significantly higher level.

## 2. Technical Solution

The proposal included an assessment of the current situation, the definition of requirements and the design of a target architecture for migrating DataNext to AWS. The candidate solution was structured around Amazon S3 as the persistence layer, AWS Glue for cataloguing and integration, AWS Lake Formation for governance and access control, and Amazon Athena for querying and data consumption. To support record inserts and updates, two alternatives were evaluated: a record-versioning model and the use of Delta Lake on S3 to provide ACID operations, compaction and obsolete-version management. Security covered general permissions for users and groups, data filters and tagging to restrict access to specific combinations of rows and columns, as well as the temporary granting of privileges. Traceability was designed around AWS CloudTrail, with events stored in S3 and subsequently queried through Athena to determine who accessed the data, when, for how long and which operation was performed. Snowflake was also assessed as an alternative persistence and layer-evolution platform, while maintaining compatibility with existing access patterns and tools such as Python, Power BI and Metabase. The methodology included a pilot or MVP to validate requirements, migration effort and platform behaviour before defining the definitive roadmap.

## 3. Business Impact and Results

As this was a migration proposal rather than an implementation documented with verified results, the outcomes are expressed as expected benefits. Moving to a cloud architecture would enable storage and computing capacity to grow through horizontal scaling, respond more quickly to increases or reductions in demand and improve concurrency management. Resource utilisation was expected to become more efficient through a flexible model aligned with actual consumption, while maintaining suitable response times for DataNext users. Centralising access controls and audit records would facilitate compliance with legal requirements and the retrieval of evidence during reviews. In addition, the use of managed AWS services was expected to reduce the operational complexity associated with expanding the environment. The pilot would provide the internal team with a validated foundation for planning subsequent migration, governance and data self-service phases.
