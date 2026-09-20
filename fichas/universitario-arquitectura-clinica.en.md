---
id: universitario-arquitectura-clinica
lang: en
title: Modular Clinical Data Architecture for Mortality Analytics
cliente_display: National University Hospital
cliente_publico: false
sector: Salud
tecnologia:
- Amazon S3
- Amazon SQS
- AWS Lambda
- AWS Glue
- Apache Spark
- Power BI
- Terraform
- CloudWatch
- IAM
- Cost Explorer
- Amazon MSK
- AWS Lake Formation
- AWS KMS
- AWS CloudTrail
- AWS Config
- Amazon SNS
- Amazon EC2
- Amazon API Gateway
- Amazon Athena
- AWS CDK
- AWS Glue Data Quality
- Deequ
tipo_proyecto: Plataforma
importe_label: Platform
anio: 2025
partner:
- AWS
bu: Data & AI
tags:
- Clinical data lake
- Incremental ingestion
- Data governance
- Deterministic reconstruction
- Pseudonymization
- Observability
- Infrastructure as code
- Modular architecture
briefing: A hospital organization needed to consolidate and normalize clinical information
  related to patient deaths from separate internal sources. Because the information
  was not integrated, daily analysis by medical unit, location, and clinical cause
  was difficult. The challenge was to create a reusable first domain that could serve
  as a template for future care domains while ensuring automation, traceability, data
  quality, security, and the ability to reconstruct datasets after errors or changes
  to clinical rules.
---

## 1. Context and Challenge

A hospital organization needed to consolidate and normalize clinical information related to patient deaths from separate internal sources. Because the information was not integrated, daily analysis by medical unit, location, and clinical cause was difficult. The challenge was to create a reusable first domain that could serve as a template for future care domains while ensuring automation, traceability, data quality, security, and the ability to reconstruct datasets after errors or changes to clinical rules. The solution had to process an initial historical dataset and daily updates, linking records through a pseudonymized patient identifier and date-matching rules.

## 2. Technical Solution

A modular AWS data lake architecture was designed, organized by environments and clinical domains, with init, raw, processed, and curated zones in Amazon S3. Historical data is loaded from reference datasets, while incremental updates are initially received as JSON files, with Amazon SQS planned as the channel for the production environment. AWS Lambda manages event reception and temporary persistence, while AWS Glue with Apache Spark integrates admissions and death records, validates clinical rules, and generates a daily optimized Parquet table for consumption in Power BI. The architecture includes data cataloguing and governance, access controls through IAM and Lake Formation, encryption and auditing using native AWS services, CloudWatch monitoring, and data-quality alerts. Versioning, snapshots, execution metadata, and full rebuild processes from accumulated historical and delta data were defined. Infrastructure is managed as code through Terraform or AWS CDK, with a future evolution toward Amazon MSK if volume, parallel-processing requirements, or replay needs increase.

## 3. Business Impact and Results

As this is an architectural proposal and a pilot that has not yet been executed, the results are expressed as expectations. The solution is expected to enable automated daily updates of mortality information, with a target latency of up to one minute for report availability in Power BI. It should improve the efficiency of clinical and operational analysis by providing an integrated, normalized dataset that can be filtered by medical unit, location, and clinical cause. The architecture should support horizontal scaling through the addition of new clinical domains without redesigning the infrastructure, by reusing pipelines, storage conventions, and governance controls. In addition, traceability, versioning, and reconstruction mechanisms should reduce operational risk and facilitate audits, reprocessing, and controlled changes to integration rules. The internal team would gain a standardized foundation for expanding analytics self-service and progressively evolving toward a modular clinical data platform.
