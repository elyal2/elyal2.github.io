---
id: medios-etl-airflow-piloto
lang: en
title: ETL Modernization Pilot
cliente_display: Media Organization
cliente_publico: false
sector: Medios y entretenimiento
tecnologia:
- Apache Airflow
- Apache Spark
- AWS Lambda
- Amazon S3
- Snowflake
- Jenkins
- Amazon DynamoDB
- Amazon ECS
- CloudWatch
- Prometheus
- Jira
- Python
- Scala
- Amazon EMR
- SQL Server
- DataDog
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2025
partner:
- AWS
- Snowflake
bu: Data & AI
tags:
- ETL
- Process orchestration
- CI/CD
- Reusable DAGs
- Observability
- Automatic retries
- Structured logging
briefing: The organization needed to validate a new model for orchestrating and executing
  ETL processes to replace a fragmented architecture spanning different execution
  services, events, and functions. The existing model featured inconsistent retry
  management, out-of-context alerts and ticket creation, limited error traceability,
  and a significant operational burden for on-call teams. In addition, deployment
  and testing across environments were performed manually, making maintenance and
  scalability more difficult and limiting development team autonomy.
---

## 1. Context and Challenge

The organization needed to validate a new model for orchestrating and executing ETL processes to replace a fragmented architecture spanning different execution services, events, and functions. The existing model featured inconsistent retry management, out-of-context alerts and ticket creation, limited error traceability, and a significant operational burden for on-call teams. In addition, deployment and testing across environments were performed manually, making maintenance and scalability more difficult and limiting development team autonomy. The pilot is based on a representative workflow involving CSV file ingestion, normalization, distributed transformation, and final loading into an analytics platform.

## 2. Technical Solution

Apache Airflow is proposed as the common orchestration core, using reusable DAG templates adapted to different types of ETL workflows. The pilot process includes validating files received in Amazon S3, retries with backoff and contextual logging, CSV normalization to Parquet, transformation with Apache Spark running on Amazon EMR or Amazon ECS, and loading into Snowflake through AWS Lambda or Python. Dynamic workflow configuration can be managed through Amazon DynamoDB or configuration files, while Jenkins will automate deployment and testing through CI/CD practices. The solution includes stage-level metrics, structured logs, integration with CloudWatch and Prometheus, and automated Jira issue creation for critical errors. The design also supports progressive integration with existing alerts and controlled promotion from the sandbox environment.

## 3. Business Impact and Results

As this is a proposed pilot that has not yet been executed, the following outcomes are expected, subject to functional validation: a fully orchestrated and automated ETL workflow managed through Apache Airflow; standardized retry management and fewer operational incidents associated with recurring failures; improved traceability through contextualized logs and metrics covering processing duration, processed volume, and success rate; and a reusable template model to accelerate the onboarding of new workflows. The initiative is also expected to increase data and operations team autonomy, simplify error diagnosis, and establish a safer deployment process through CI/CD and pre-promotion testing in the sandbox environment.
