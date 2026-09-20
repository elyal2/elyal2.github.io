---
id: sanitaria-datanext-aws
lang: es
title: Migración de plataforma DataNext a AWS
cliente_display: Hospital de referencia sanitaria
cliente_publico: false
sector: Salud
tecnologia:
- AWS
- Amazon S3
- AWS Glue
- AWS Lake Formation
- AWS CloudTrail
- Amazon Athena
- Python
- Power BI
- Snowflake
- RDS PostgreSQL
- SAP
- MySQL
- MySQL Workbench
- Metabase
- Delta Lake
tipo_proyecto: Plataforma
importe_label: Plataforma
anio: 2024
partner:
- AWS
bu: Cloud & Managed Services
tags:
- Migración cloud
- Escalado horizontal
- Lakehouse
- Seguridad granular
- Trazabilidad y auditoría
- Gobierno de datos
- Operaciones CRUD
- Assessment de migración
briefing: Se propone migrar la plataforma informacional DataNext desde un entorno
  local hacia una arquitectura escalable en AWS, basada en servicios gestionados para
  persistencia, integración, gobierno y consulta de datos. La solución contempla controles
  de acceso detallados a nivel de tabla, fila y columna, auditoría completa mediante
  CloudTrail y un piloto para validar requisitos, esfuerzo de migración y comportamiento
  antes de definir el roadmap. Se esperan mejoras en escalabilidad, concurrencia,
  flexibilidad operativa y cumplimiento.
---

## 1. Contexto y Desafío

La organización sanitaria había iniciado una estrategia de modernización tecnológica mediante la adopción progresiva de AWS y el establecimiento de una Landing Zone. En este contexto, la plataforma informacional DataNext, desplegada en un entorno local, estaba experimentando un crecimiento sostenido de usuarios, requisitos funcionales y volumen de datos. Su arquitectura dependía principalmente de un escalado vertical, lo que limitaba la capacidad de ampliar almacenamiento y computación con agilidad. El entorno integraba información procedente de SAP, procesos ETL desarrollados en Python y bases de datos MySQL para las capas de datos curados y de consumo. Además, debía gestionar información sensible, mantener los mecanismos de acceso existentes y proporcionar controles de seguridad a nivel de tabla, fila y columna, junto con una trazabilidad completa de los accesos. La concurrencia prevista también exigía evolucionar desde un límite aproximado de decenas de usuarios hacia una capacidad significativamente superior.

## 2. Solución Técnica

La propuesta plantea un assessment de la situación actual, la definición de requisitos y el diseño de una arquitectura objetivo para migrar DataNext a AWS. La solución candidata se estructura sobre Amazon S3 como capa de persistencia, AWS Glue para catálogo e integración, AWS Lake Formation para gobierno y control de acceso, y Amazon Athena como mecanismo de consulta y explotación. Para soportar inserciones y modificaciones de registros se evaluaron dos alternativas: un modelo de versionado de registros y el uso de Delta Lake sobre S3 para proporcionar operaciones ACID, compactación y gestión de versiones obsoletas. La seguridad contempla permisos generales para usuarios y grupos, filtros de datos y etiquetado para restringir el acceso a combinaciones concretas de filas y columnas, así como la concesión temporal de privilegios. La trazabilidad se plantea mediante AWS CloudTrail, con almacenamiento de eventos en S3 y consulta posterior mediante Athena para conocer quién accedió, cuándo, durante cuánto tiempo y qué operación realizó. También se valoró Snowflake como alternativa de persistencia y evolución por capas, manteniendo la compatibilidad con los patrones de acceso actuales y con herramientas como Python, Power BI y Metabase. El enfoque metodológico incluye un piloto o MVP para validar requisitos, esfuerzo de migración y comportamiento de la plataforma antes de establecer el roadmap definitivo.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta de migración y no de una implantación acreditada en el documento, los resultados se formulan como esperados. La evolución hacia una arquitectura cloud permitiría aumentar la capacidad de persistencia y computación mediante escalado horizontal, responder con mayor rapidez a incrementos o reducciones de demanda y mejorar la gestión de la concurrencia. Se espera optimizar el uso de recursos mediante un modelo más flexible y alineado con el consumo real, además de mantener tiempos de respuesta adecuados para los usuarios de DataNext. La centralización de los controles de acceso y de los registros de auditoría facilitaría el cumplimiento de requisitos legales y la recuperación de evidencias ante revisiones. Asimismo, el uso de servicios gestionados de AWS debería reducir la complejidad operativa asociada a la ampliación del entorno, mientras que el piloto proporcionaría al equipo interno una base validada para planificar fases posteriores de migración, gobierno y autoservicio de datos.
