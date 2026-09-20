---
id: aseguradora-internacional-elegibilidad-catalogo
lang: es
title: Plataforma global de elegibilidad y catálogo de servicios
cliente_display: Aseguradora internacional
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
briefing: Se propone una plataforma reutilizable para centralizar la gestión de elegibilidad
  y el catálogo de productos y servicios mediante APIs desacopladas, portales operativos
  y un motor ETL parametrizado. La arquitectura permitirá una migración progresiva
  desde sistemas legacy, con convivencia temporal, trazabilidad, rollback por aseguradora
  y procesamiento de ficheros completos o delta. El enfoque basado en infraestructura
  como código, controles de seguridad y opciones de persistencia relacional o documental
  facilitará el escalado, el cumplimiento regulatorio y la incorporación de nuevas
  entidades.
---

## 1. Contexto y Desafío

La organización necesitaba consolidar la gestión de elegibilidad y del catálogo de productos y servicios como una capacidad común, trazable y reutilizable para distintas plataformas internas, aseguradoras y modelos operativos. La situación de partida combinaba procesos locales, integraciones distribuidas, formatos legacy y lógicas específicas por país o entidad, lo que dificultaba determinar de forma homogénea qué servicios podía utilizar cada miembro. El reto consistía en evolucionar la plataforma existente sin interrumpir la operación, habilitando una migración progresiva, convivencia temporal con el modelo legacy, validación por oleadas y capacidad de rollback por aseguradora. Además, era necesario soportar ficheros completos y delta, distintos modelos de asignación Member → Group → Services, resolución de grupos, matching de miembros y requisitos de aislamiento regulatorio y residencia de datos.

## 2. Solución Técnica

Se propone una arquitectura reutilizable en dos fases. La primera construye una plataforma base con APIs desacopladas para elegibilidad y para la gestión del catálogo de productos y servicios, siguiendo un enfoque Domain-Driven Design. La solución incorpora un portal interno para administrar una jerarquía de catálogo de varios niveles, un portal de trazabilidad con estado de cargas, errores y auditoría, y un motor ETL parametrizado activado por la llegada de ficheros. El procesamiento se enruta según el tamaño y características de cada fichero, utilizando tareas bajo demanda y Apache Spark para los volúmenes que requieren mayor capacidad. La segunda fase instancia el framework en despliegues productivos, incluyendo configuración por aseguradora, migración progresiva, pruebas de aceptación y puesta en producción. La infraestructura se define mediante Terraform y se automatiza con pipelines de integración y entrega continua. Se contemplan opciones de persistencia relacional y documental según el despliegue, así como un módulo opcional de Change Data Capture para comparar ficheros completos y generar altas, modificaciones y bajas. La seguridad se aborda mediante cuentas aisladas, separación de datos, federación de identidades, control de accesos, auditoría, reglas de configuración y controles de residencia de datos para los entornos sujetos a requisitos regulatorios.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta aún no ejecutada, los resultados descritos son esperados. La plataforma permitiría centralizar la elegibilidad y el catálogo como servicios consumibles mediante APIs estandarizadas, reduciendo dependencias de integraciones locales y facilitando la incorporación de nuevas aseguradoras. El framework parametrizado debería acelerar los procesos de onboarding, carga, validación y migración, al reutilizar plantillas, catálogos y patrones operativos. La arquitectura estaría preparada para procesar grandes volúmenes de registros mediante un enfoque híbrido entre tareas bajo demanda y Spark, manteniendo la trazabilidad de errores y operaciones. Asimismo, los portales y dashboards proporcionarían mayor autonomía a los equipos internos para gestionar catálogos, supervisar cargas y consultar auditorías, mientras que la infraestructura como código favorecería despliegues repetibles, escalables y alineados con los requisitos de aislamiento y cumplimiento.
