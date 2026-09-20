---
id: inmobiliaria-nacional-clasificador-documentos
lang: es
title: Clasificador de Documentos Judiciales para Organización Inmobiliaria
cliente_display: Organización Inmobiliaria Nacional
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
briefing: Se propone una arquitectura desacoplada sobre AWS para automatizar la extracción,
  clasificación y revisión de grandes volúmenes de documentación judicial heterogénea
  mediante OCR e IA generativa. Amazon Bedrock permitiría clasificar los documentos
  según una taxonomía de 33 tipos, incluyendo niveles de certeza y posibles clasificaciones
  múltiples, mientras que AWS Lambda, la persistencia estructurada y los mecanismos
  de observabilidad facilitarían el procesamiento escalable y trazable. Al tratarse
  de una propuesta aún no ejecutada, se esperan mejoras en la velocidad, homogeneidad
  y control de la revisión documental, así como mayor autonomía para gestionar casos
  ambiguos.
---

## 1. Contexto y Desafío

Una organización del sector inmobiliario se encontraba incorporando capacidades de IA generativa para optimizar el procesamiento de documentación judicial. El reto consistía en analizar grandes volúmenes de documentos heterogéneos, como sentencias, demandas, resoluciones y comunicaciones, procedentes de distintas fuentes y formatos. La clasificación manual resultaba poco escalable y dificultaba la trazabilidad, la revisión de documentos no concluyentes y la identificación temprana de incidencias operativas.

## 2. Solución Técnica

Se diseñó una arquitectura productiva sobre AWS basada en un flujo de procesamiento desacoplado. Los documentos PDF se cargan en Amazon S3 y Amazon EventBridge activa el pipeline mediante AWS Lambda. Tesseract realiza la extracción OCR y almacena el texto y sus metadatos para su posterior análisis. Amazon Bedrock expone un modelo Claude ajustado mediante prompting y técnicas de few-shot learning para clasificar los documentos dentro de una taxonomía de 33 tipos, admitiendo niveles de certeza y posibles clasificaciones múltiples. Los resultados se distribuyen mediante Amazon SQS y se persisten en RDS PostgreSQL. La solución incorpora AWS IAM para la gestión de identidades y permisos, Terraform o AWS CloudFormation para infraestructura como código y AWS CodeCommit para el versionado. Se complementa con un frontal web de revisión y una capa de observabilidad integrada con CloudWatch, Grafana Alloy, Prometheus y Grafana, incluyendo cuadros de mando y alertas.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta de colaboración todavía no ejecutada, los resultados se expresan como expectativas. La solución permitiría automatizar y acelerar la clasificación inicial de documentación judicial, reduciendo la carga de revisión manual y mejorando la homogeneidad de los criterios aplicados. La arquitectura desacoplada facilitaría el procesamiento de grandes volúmenes de documentos y su escalado progresivo, mientras que la persistencia estructurada habilitaría consultas y seguimiento histórico. El frontal de revisión proporcionaría autonomía al equipo de negocio para validar casos ambiguos o no clasificados, y la observabilidad permitiría detectar anomalías, medir el rendimiento y orientar la mejora continua del servicio.
