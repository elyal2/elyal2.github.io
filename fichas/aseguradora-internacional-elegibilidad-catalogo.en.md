---
id: aseguradora-internacional-elegibilidad-catalogo
lang: en
title: Global Eligibility and Products & Services Catalog Platform
cliente_display: International Insurer
cliente_publico: false
sector: Seguros
tecnologia:
- AWS Lambda
- AWS Fargate
- Amazon ECS
- Amazon S3
- Apache Spark
- Amazon Aurora
- PostgreSQL
- Amazon DocumentDB
- Terraform
- GitHub Actions
- CloudWatch
- Amazon SNS
- IAM
- AWS CloudTrail
- AWS Config
- AWS Secrets Manager
- React
- TypeScript
- Amazon Cognito
- Keycloak
tipo_proyecto: Plataforma
importe_label: Plataforma
anio: 2026
partner:
- AWS
- Microsoft
bu: Cloud & Managed Services
tags:
- Domain-Driven Design
- Elegibilidad de miembros
- Catálogo de productos y servicios
- ETL parametrizado
- Change Data Capture
- Migración por oleadas
- Infraestructura como código
- Observabilidad y trazabilidad
briefing: The organization needed to consolidate eligibility management and the products
  and services catalog into a common, traceable and reusable capability for different
  internal platforms, insurers and operating models. The starting point combined local
  processes, distributed integrations, legacy formats and country- or entity-specific
  logic, making it difficult to determine consistently which services each member
  was entitled to use. The challenge was to evolve the existing platform without disrupting
  operations by enabling progressive migration, temporary coexistence with the legacy
  model, wave-based validation and insurer-level rollback.
---

## 1. Context and Challenge

The organization needed to consolidate eligibility management and the products and services catalog into a common, traceable and reusable capability for different internal platforms, insurers and operating models. The starting point combined local processes, distributed integrations, legacy formats and country- or entity-specific logic, making it difficult to determine consistently which services each member was entitled to use. The challenge was to evolve the existing platform without disrupting operations by enabling progressive migration, temporary coexistence with the legacy model, wave-based validation and insurer-level rollback. The platform also needed to support full and delta files, different Member → Group → Services assignment models, group resolution, member matching, and regulatory isolation and data residency requirements.

## 2. Technical Solution

A reusable two-phase architecture was proposed. The first phase establishes a core platform with decoupled APIs for eligibility and products and services catalog management, following a Domain-Driven Design approach. The solution includes an internal portal for managing a multi-level catalog hierarchy, a traceability portal showing load status, errors and audit information, and a parameterized ETL engine triggered when files arrive. Processing is routed according to each file's size and characteristics, using on-demand tasks and Apache Spark for volumes requiring greater capacity. The second phase instantiates the framework in production deployments, including insurer-specific configuration, progressive migration, acceptance testing and go-live. Infrastructure is defined with Terraform and automated through continuous integration and delivery pipelines. Relational and document persistence options are supported depending on the deployment, together with an optional Change Data Capture module to compare full files and generate inserts, updates and deletes. Security is addressed through isolated accounts, data separation, identity federation, access control, auditing, configuration rules and data residency controls for environments subject to regulatory requirements.

## 3. Business Impact and Results

As this was a proposal that had not yet been implemented, the results described are expected outcomes. The platform would centralize eligibility and the catalog as services consumable through standardized APIs, reducing dependencies on local integrations and facilitating the onboarding of new insurers. The parameterized framework should accelerate onboarding, loading, validation and migration processes by reusing templates, catalogs and operating patterns. The architecture would be prepared to process large record volumes through a hybrid approach combining on-demand tasks and Spark, while maintaining traceability of errors and operations. In addition, the portals and dashboards would provide internal teams with greater autonomy to manage catalogs, monitor loads and consult audit records, while Infrastructure as Code would support repeatable, scalable deployments aligned with isolation and compliance requirements.
