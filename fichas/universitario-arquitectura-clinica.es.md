---
id: universitario-arquitectura-clinica
lang: es
title: Arquitectura modular de datos clínicos para analítica de fallecimientos
cliente_display: Hospital Universitario Nacional
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
importe_label: Plataforma
anio: 2025
partner:
- AWS
bu: Data & AI
tags:
- Data lake clínico
- Ingesta incremental
- Gobernanza del dato
- Reconstrucción determinista
- Pseudoanonimización
- Observabilidad
- Infraestructura como código
- Arquitectura modular
briefing: Se diseñó una arquitectura modular de data lake en AWS para integrar y normalizar
  información clínica sobre fallecimientos, combinando históricos y actualizaciones
  diarias mediante procesos automatizados y reglas de coincidencia. La solución incorpora
  gobierno, calidad, seguridad, trazabilidad, versionado y capacidades de reconstrucción,
  generando datasets optimizados para análisis en Power BI. El enfoque establece un
  dominio reutilizable y escalable para futuros ámbitos asistenciales, reduciendo
  el riesgo operativo y facilitando la evolución hacia una plataforma de datos clínicos
  modular.
---

## 1. Contexto y Desafío

Una organización hospitalaria necesitaba consolidar y normalizar la información clínica relacionada con los fallecimientos de pacientes a partir de fuentes internas independientes. La información no estaba integrada, lo que dificultaba el análisis diario por unidad médica, ubicación y motivo clínico. El reto consistía en crear un primer dominio reutilizable que sirviera como plantilla para futuros dominios asistenciales, garantizando automatización, trazabilidad, calidad del dato, seguridad y capacidad de reconstrucción ante errores o cambios en las reglas clínicas. La solución debía procesar un histórico inicial y actualizaciones diarias, integrando los registros mediante un identificador de paciente pseudoanonimizado y reglas de coincidencia de fechas.

## 2. Solución Técnica

Se diseñó una arquitectura modular de data lake en AWS, organizada por entornos y dominios clínicos, con zonas init, raw, processed y curated en Amazon S3. Los datos históricos se cargan desde datasets de referencia y las actualizaciones incrementales se reciben inicialmente mediante archivos JSON, con Amazon SQS como canal previsto para el entorno productivo. AWS Lambda gestiona la recepción y persistencia temporal de eventos, mientras que AWS Glue con Apache Spark ejecuta la integración entre altas y fallecimientos, valida las reglas clínicas y genera diariamente una tabla optimizada en Parquet para su consumo desde Power BI. La arquitectura incorpora catálogo y gobierno del dato, controles de acceso mediante IAM y Lake Formation, cifrado y auditoría con servicios nativos de AWS, monitorización con CloudWatch y alertas de calidad. Se definieron versionado, snapshots, metadatos de ejecución y procesos de rebuild completo desde los históricos y deltas acumulados. La infraestructura se plantea como código mediante Terraform o AWS CDK y contempla una evolución futura hacia Amazon MSK si aumentan el volumen, la necesidad de paralelismo o los requisitos de replay.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta arquitectónica y de un piloto aún no ejecutado, los resultados se expresan como expectativas. La solución debería habilitar una actualización diaria y automatizada de la información de fallecimientos, con una latencia objetivo de hasta un minuto para la disponibilidad del informe en Power BI. Se espera mejorar la eficiencia del análisis clínico y operativo al disponer de un dataset integrado, normalizado y filtrable por unidad médica, ubicación y motivo. La arquitectura debería permitir escalar horizontalmente mediante la incorporación de nuevos dominios clínicos sin rediseñar la infraestructura, reutilizando pipelines, convenciones de almacenamiento y controles de gobierno. Asimismo, los mecanismos de trazabilidad, versionado y reconstrucción deberían reducir el riesgo operativo y facilitar auditorías, reprocesamientos y cambios controlados en las reglas de integración. El equipo interno dispondría de una base estandarizada para ampliar el autoservicio analítico y evolucionar progresivamente hacia una plataforma de datos clínicos modular.
