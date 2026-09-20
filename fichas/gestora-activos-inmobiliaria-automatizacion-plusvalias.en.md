---
id: gestora-activos-inmobiliaria-automatizacion-plusvalias
lang: en
title: Automation of Municipal Capital Gains Tax Documentation
cliente_display: Real Estate Asset Management Company
cliente_publico: false
sector: Inmobiliario
tecnologia:
- AWS
- Amazon S3
- Amazon SQS
- AWS Lambda
- Amazon Bedrock
- CloudWatch
- Grafana
- IAM
- Cost Explorer
tipo_proyecto: Vertical
importe_label: Vertical
anio: 2026
partner:
- AWS
bu: Cloud & Managed Services
tags:
- Automatización documental
- IIVTNU
- IA generativa
- OCR
- Observabilidad
- Trazabilidad
- Validación fiscal
briefing: A real estate asset management company implemented an AWS-native solution
  to automate the ingestion, classification, extraction and validation of documentation
  for municipal capital gains tax processes. Amazon Bedrock and AWS Lambda reduced
  manual effort, accelerated document processing by approximately ten times, improved
  data quality and enabled end-to-end traceability through operational metrics and
  alerts. The scalable architecture provides a foundation for extending AI-powered
  document automation across legal, tax and operational workflows.
---

## 1. Context and Challenge

A real estate asset management company needed to streamline the review, validation and generation of documentation related to municipal capital gains tax (IIVTNU). The process relied on heterogeneous documents, including deeds, land registry records, cadastral information and transaction histories, which had to be manually interpreted and transferred to operational systems. This created a significant administrative burden, a risk of transcription errors, inconsistencies in ownership or cadastral values, and difficulties in maintaining complete process traceability. The objective was to reduce processing times, improve validation quality and identify risks before submitting the documentation.

## 2. Technical Solution

A cloud-native architecture was designed and implemented on AWS to automate the complete document-processing lifecycle. Amazon S3 acts as the repository and entry point; Amazon SQS decouples the stages through queues; and AWS Lambda performs MD5-based deduplication, OCR, document classification, structured extraction, validations and post-processing. Amazon Bedrock provides generative AI capabilities to understand heterogeneous documents, extract information and perform semantic quality checks. CloudWatch and a database provide event traceability, metrics and operational evidence, while Grafana and a web application enable the visualisation of indicators and alerts. IAM supports access controls, and Cost Explorer provides platform consumption monitoring.

## 3. Business Impact and Results

The solution automated between 75% and 90% of document-related tasks, depending on workload, and accelerated the processing of each document by approximately ten times, reducing the extraction phase from minutes to seconds. Data quality also improved through fewer transcription errors and stronger validation of ownership, documentation, cadastral values and potential exemptions. End-to-end instrumentation provided greater traceability, quality control and monitoring capabilities through indicators and alerts. At platform level, infrastructure and operational requirements were reduced by between 20% and 40%, alongside shorter integration and development times. The architecture also provides a scalable foundation for extending document automation and AI capabilities to legal, tax and operational processes.
