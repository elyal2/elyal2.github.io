---
id: servicios-inmobiliarios-content-server
lang: es
title: Reingeniería de plataforma documental cloud
cliente_display: Empresa de servicios inmobiliarios
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
importe_label: Plataforma
anio: 2024
partner:
- AWS
bu: Cloud & Managed Services
tags:
- migración documental
- gestión de contenidos empresariales
- alta disponibilidad
- ArchiveLink
- ciclo de vida del dato
- seguridad y cifrado
- conectividad híbrida
briefing: Se propone modernizar la plataforma documental mediante una arquitectura
  híbrida en AWS, desplegando SAP Content Server e integrándolo con SAP RISE y aplicaciones
  web autorizadas. Amazon S3 proporcionará el almacenamiento principal de los documentos
  vivos, con caché local, políticas de ciclo de vida, conectividad segura, cifrado
  y auditoría. La migración desde OpenText incluirá controles de integridad, trazabilidad,
  validación end-to-end y mecanismos de alta disponibilidad, con el objetivo de mejorar
  la seguridad, escalabilidad y eficiencia operativa.
---

## 1. Contexto y Desafío

La organización disponía de una plataforma OpenText on-premise utilizada principalmente como servidor de archivo y próxima a quedar fuera de soporte. El entorno debía seguir ofreciendo acceso documental desde SAP RISE y desde aplicaciones web utilizadas por terceros autorizados. El reto consistía en modernizar la arquitectura, mejorar la seguridad, disponibilidad y eficiencia operativa del almacenamiento a largo plazo, y migrar los documentos vivos al nuevo entorno cloud, manteniendo la información histórica en la plataforma existente según la decisión estratégica del cliente.

## 2. Solución Técnica

Se planteó una arquitectura híbrida en AWS para desplegar SAP Content Server sobre un clúster de Amazon EC2, integrado con SAP RISE mediante ArchiveLink. Amazon S3 actuaría como almacenamiento principal de los documentos vivos, con Amazon S3 File Gateway para proporcionar caché local y facilitar la integración con el servidor de contenidos. Las políticas de ciclo de vida permitirían trasladar la información de menor frecuencia de acceso a almacenamiento de archivo. La solución incluiría conectividad segura mediante AWS Direct Connect o VPN Site-to-Site, una red aislada con Amazon VPC, control de acceso con IAM, cifrado mediante AWS KMS, monitorización con CloudWatch y auditoría con AWS CloudTrail. La migración se realizaría desde OpenText mediante extracción, transformación, carga y validación de documentos y metadatos, incluyendo pruebas end-to-end, controles de integridad y preservación de la trazabilidad. También se contemplarían mecanismos de alta disponibilidad, escalado y recuperación ante fallos.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta todavía no ejecutada, los resultados son esperados. La nueva plataforma debería reducir la dependencia de la infraestructura on-premise fuera de soporte y facilitar una gestión más segura y flexible de grandes volúmenes documentales. Se espera mejorar la disponibilidad del servicio, optimizar el uso del almacenamiento mediante políticas automáticas de ciclo de vida y mantener un acceso transparente a los documentos desde SAP RISE. La arquitectura estaría preparada para soportar el crecimiento del repositorio y los patrones variables de consulta, con objetivos de rendimiento, disponibilidad y éxito de migración definidos para la validación del proyecto. Asimismo, la monitorización, la documentación técnica y los procedimientos de operación previstos deberían proporcionar mayor autonomía al equipo interno para administrar el entorno y supervisar su evolución.
