---
id: servicios-inmobiliarios-content-server
lang: en
title: Cloud Document Platform Re-engineering
cliente_display: Real Estate Services Company
cliente_publico: false
sector: Inmobiliario
tecnologia:
- Amazon S3
- Amazon EC2
- IAM
- AWS KMS
- CloudWatch
- AWS CloudTrail
- AWS Lambda
- Kubernetes
- OpenText
- SAP Content Server
- SAP RISE
- ArchiveLink
- Amazon S3 File Gateway
- AWS Direct Connect
- AWS Site-to-Site VPN
- Amazon VPC
- Amazon Route 53
- Elastic Load Balancing
- AWS Auto Scaling
- AWS CloudFormation
- AWS Systems Manager
tipo_proyecto: Plataforma
importe_label: Platform
anio: 2024
partner:
- AWS
bu: Cloud & Managed Services
tags:
- Document migration
- Enterprise content management
- High availability
- ArchiveLink
- Data lifecycle
- Security and encryption
- Hybrid connectivity
briefing: The organisation operated an on-premises OpenText platform, used primarily
  as an archive server and approaching end of support. The environment needed to continue
  providing document access from SAP RISE and from web applications used by authorised
  third parties. The challenge was to modernise the architecture, improve the security,
  availability and operational efficiency of long-term storage, and migrate active
  documents to the new cloud environment while retaining historical information on
  the existing platform, in line with the client’s strategic decision.
---

## 1. Context and Challenge

The organisation operated an on-premises OpenText platform, used primarily as an archive server and approaching end of support. The environment needed to continue providing document access from SAP RISE and from web applications used by authorised third parties. The challenge was to modernise the architecture, improve the security, availability and operational efficiency of long-term storage, and migrate active documents to the new cloud environment while retaining historical information on the existing platform, in line with the client’s strategic decision.

## 2. Technical Solution

A hybrid AWS architecture was designed to deploy SAP Content Server on an Amazon EC2 cluster, integrated with SAP RISE through ArchiveLink. Amazon S3 would provide primary storage for active documents, while Amazon S3 File Gateway would provide local caching and facilitate integration with the content server. Lifecycle policies would move less frequently accessed information to archival storage. The solution would include secure connectivity through AWS Direct Connect or Site-to-Site VPN, an isolated Amazon VPC, access control with IAM, encryption through AWS KMS, monitoring with CloudWatch and auditing with AWS CloudTrail. Migration from OpenText would involve the extraction, transformation, loading and validation of documents and metadata, including end-to-end testing, integrity controls and preservation of traceability. High-availability, scaling and disaster-recovery mechanisms would also be considered.

## 3. Business Impact and Results

As this was a proposal that had not yet been implemented, the results were expected rather than measured. The new platform should reduce dependency on unsupported on-premises infrastructure and enable more secure and flexible management of large document volumes. Service availability was expected to improve, while automated lifecycle policies would optimise storage usage and maintain transparent document access from SAP RISE. The architecture would be prepared to support repository growth and variable query patterns, with performance, availability and migration-success objectives defined for project validation. In addition, the planned monitoring, technical documentation and operating procedures should provide the internal team with greater autonomy to administer the environment and oversee its evolution.
