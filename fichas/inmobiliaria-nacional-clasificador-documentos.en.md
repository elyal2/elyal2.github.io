---
id: inmobiliaria-nacional-clasificador-documentos
lang: en
title: Judicial Document Classifier for a Real Estate Organisation
cliente_display: National Real Estate Organisation
cliente_publico: false
sector: Inmobiliario
tecnologia:
- Amazon S3
- Amazon EventBridge
- AWS Lambda
- Tesseract
- Amazon Bedrock
- Claude
- Amazon SQS
- RDS PostgreSQL
- CloudWatch
- Grafana
- Prometheus
- Grafana Alloy
- IAM
- Terraform
- AWS CloudFormation
- Amazon SageMaker
- AWS CodeCommit
tipo_proyecto: Vertical
importe_label: Vertical
anio: 2024
partner:
- AWS
bu: Data & AI
tags:
- clasificación documental
- OCR
- IA generativa
- few-shot learning
- fine-tuning
- observabilidad
- revisión humana
briefing: A real estate organisation was introducing generative AI capabilities to
  optimise the processing of judicial documentation. The challenge involved analysing
  large volumes of heterogeneous documents, including judgments, claims, rulings and
  communications, received from different sources and in multiple formats. Manual
  classification was not sufficiently scalable and made it difficult to ensure traceability,
  review inconclusive documents and identify operational issues at an early stage.
---

## 1. Context and Challenge

A real estate organisation was introducing generative AI capabilities to optimise the processing of judicial documentation. The challenge involved analysing large volumes of heterogeneous documents, including judgments, claims, rulings and communications, received from different sources and in multiple formats. Manual classification was not sufficiently scalable and made it difficult to ensure traceability, review inconclusive documents and identify operational issues at an early stage.

## 2. Technical Solution

A production-ready architecture was designed on AWS, based on a decoupled processing workflow. PDF documents are uploaded to Amazon S3, while Amazon EventBridge triggers the pipeline through AWS Lambda. Tesseract performs OCR extraction and stores the resulting text and metadata for subsequent analysis. Amazon Bedrock exposes a Claude model adapted through prompting and few-shot learning techniques to classify documents into a taxonomy of 33 types, while supporting confidence levels and potential multiple classifications. Results are distributed through Amazon SQS and persisted in RDS PostgreSQL. The solution incorporates AWS IAM for identity and access management, Terraform or AWS CloudFormation for infrastructure as code, and AWS CodeCommit for version control. It is complemented by a web-based review interface and an observability layer integrating CloudWatch, Grafana Alloy, Prometheus and Grafana, including dashboards and alerts.

## 3. Business Impact and Results

As this was a proposed collaboration that had not yet been executed, the results are expressed as expectations. The solution was expected to automate and accelerate the initial classification of judicial documentation, reducing the manual review workload and improving the consistency of the criteria applied. The decoupled architecture would facilitate the processing of large document volumes and progressive scaling, while structured persistence would enable queries and historical tracking. The review interface would give business teams greater autonomy to validate ambiguous or unclassified cases, and observability would support anomaly detection, performance measurement and continuous service improvement.
