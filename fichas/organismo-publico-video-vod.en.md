---
id: organismo-publico-video-vod
lang: en
title: VOD Platform for a Public Cultural Organisation
cliente_display: Public Cultural Organisation
cliente_publico: false
sector: Sector Público
tecnologia:
- AWS
- Amazon S3
- Amazon S3 Glacier
- AWS Lambda
- AWS CloudFormation
- AWS Step Functions
- AWS Elemental MediaConvert
- Amazon CloudFront
- Amazon DynamoDB
- Amazon EventBridge
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2025
partner:
- AWS
bu: Cloud & Managed Services
tags:
- Vídeo bajo demanda
- Streaming en directo
- Arquitectura serverless
- Integración mediante APIs
- Ciclo de vida audiovisual
- DRM
- Archivado automático
briefing: A public cultural organisation is defining a serverless AWS architecture
  to incorporate audiovisual content into its digital archive and public portals.
  The proposed Video on Demand and live streaming solution uses managed workflows
  for ingestion, orchestration, adaptive transcoding, secure distribution, metadata
  integration and automated archiving. The consultancy deliverables will establish
  the target architecture, data model, required system changes, testing approach and
  implementation roadmap, supporting future scalability and operational autonomy.
---

## 1. Context and Challenge

A public cultural organisation specialising in the preservation and dissemination of visual heritage operated an information system primarily designed to manage images. The growing incorporation of audiovisual content required the catalogue, ingestion processes and public portals to be adapted for the structured management of video. The challenge was to define a robust solution for Video on Demand and live streaming, integrated with the digital archive and existing systems, while providing control over storage, security, access rights and the platform’s future evolution.

## 2. Technical Solution

A serverless VOD architecture based on managed AWS services was proposed. The workflow covers video upload, orchestration through AWS Step Functions, adaptive transcoding with AWS Elemental MediaConvert, storage of original and derived assets in Amazon S3, and automated archiving in Amazon S3 Glacier. Amazon CloudFront provides content distribution, while AWS Lambda and Amazon EventBridge automate events, validations, alerts and operational tasks. Video metadata would be integrated with the information system through APIs and a NoSQL repository in Amazon DynamoDB. The proposal also includes encryption in transit and at rest, identity and access management through IAM, and the option to apply DRM to rights-protected content. The consultancy phase covers functional analysis, architecture design, data model review, software change definition, test catalogue preparation and implementation roadmap development.

## 3. Business Impact and Results

As this was a consultancy and pre-development definition proposal, the results are expected and remain subject to subsequent implementation. The solution would enable videos to be incorporated into the cultural catalogue while maintaining an adaptive playback experience across different devices and consumption scenarios. It is also expected to improve scalability during events with audience peaks, reduce reliance on local infrastructure through managed services and optimise storage through automated archiving and a pay-as-you-go model. The functional and technical documentation would facilitate subsequent execution, change traceability, structured testing and greater autonomy for the teams responsible for the archive and public portals.
