---
id: operador-estaciones-montana-datos
lang: es
title: Plataforma corporativa de datos y rentabilidad de escuela de esquí
cliente_display: Operador de estaciones de montaña
cliente_publico: false
sector: Turismo y ocio
tecnologia:
- Snowflake
- Power BI
- Azure
- Python
- dbt
- Snowpark Python
- Snowflake ML
- Snowflake Horizon
- Business Central
tipo_proyecto: Plataforma
importe_label: Plataforma
anio: 2026
bu: Data & AI
tags:
- Arquitectura Medallion
- Gobierno del dato
- DataOps
- Analítica de rentabilidad
- Micro-batch
- Optimización operativa
- IA explicable
- Autoservicio de datos
briefing: La propuesta plantea una evolución progresiva hacia una plataforma analítica
  corporativa sobre Snowflake y dbt, consolidando datos de RRHH, Finanzas y Operaciones
  en una arquitectura Medallion con KPIs gobernados y cuadros de mando en Power BI.
  El enfoque busca reducir la dependencia de Excel, mejorar la trazabilidad y adaptar
  la capacidad analítica a la estacionalidad del negocio, preparando futuras capacidades
  de optimización, alertas y consultas en lenguaje natural. Al tratarse de una propuesta
  aún no ejecutada, los beneficios descritos son expectativas de negocio.
---

## 1. Contexto y Desafío

El operador gestionaba un ecosistema de datos complejo, estacional y distribuido entre varias sociedades y áreas de negocio. Aunque disponía de un Data Warehouse SQL Server local con múltiples fuentes integradas y numerosos informes de Power BI, persistían silos de información, dependencia de ficheros Excel, procesos manuales y ausencia de definiciones unificadas para KPIs. Finanzas, RRHH y Operaciones trabajaban con datos desalineados y con diferentes niveles de actualización, lo que dificultaba conocer la rentabilidad real de la escuela de esquí, como el coste por hora de monitor o el margen por tipo de clase. Además, el reducido equipo interno de BI necesitaba una plataforma escalable y sencilla de operar. La propuesta planteaba una evolución progresiva hacia un modelo predictivo y preventivo, evitando una migración integral de alto riesgo y priorizando un quick win de negocio.

## 2. Solución Técnica

La solución propuesta se estructura en dos proyectos progresivos sobre Snowflake como plataforma analítica corporativa y dbt como capa de transformación, versionado, pruebas y documentación. El primer proyecto implanta una arquitectura Medallion con capas Bronze, Silver y Gold, integrando mediante patrones REST, SQL y cargas controladas las fuentes de RRHH, planificación, reservas, operación de la escuela, ficheros administrativos y un subconjunto financiero de Business Central. Los datos se normalizan y gobiernan mediante modelos dbt, con un modelo dimensional de Escuela que incluye dimensiones de monitor, clase, tiempo, sociedad y actividad, además de hechos de reservas, ocupación y rentabilidad por hora. Power BI se conecta a la capa Gold para ofrecer cuadros de mando operativos y financieros. La plataforma incorpora ingestas incrementales y micro-batch para reservas y demanda, sujetas a validación técnica, así como datasets preparados para fases posteriores de optimización e IA. La seguridad se basa en RBAC, segregación por sociedad, controles de acceso por filas en Power BI, trazabilidad, clasificación de información sensible y políticas de enmascaramiento mediante las capacidades de gobierno de Snowflake. El segundo proyecto contempla Snowpark Python y Snowflake ML para ejecutar cerca del dato un motor de optimización explicable de asignación de monitores, con detección de cambios, ejecución orquestada y versionado de resultados. También prevé completar la integración financiera, habilitar consultas en lenguaje natural y desplegar alertas operativas.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta comercial todavía no ejecutada, los resultados se expresan como expectativas. El primer proyecto debería permitir consolidar la información de RRHH, Finanzas y Operaciones bajo una versión común de la verdad, reduciendo la dependencia de Excel y el esfuerzo manual asociado a la preparación de informes. Se espera mejorar la disponibilidad y trazabilidad de los KPIs de rentabilidad de la escuela, facilitar el análisis comparativo entre sociedades y acelerar la identificación de desviaciones operativas. La separación entre almacenamiento y cómputo de Snowflake debería adaptar el consumo a la marcada estacionalidad del negocio y permitir escalar las cargas de ingesta, transformación y analítica sin rediseños estructurales. La capa Gold y los datasets de características dejarían preparada la evolución hacia optimización de la planificación, simulación y analítica avanzada. En una segunda fase, el motor de optimización debería generar propuestas explicables para la asignación de monitores, mientras que las alertas y la consulta en lenguaje natural facilitarían una gestión más proactiva y un acceso más autónomo a la información por parte de directores y responsables. La documentación y la transferencia de conocimiento previstas deberían reforzar la autonomía del equipo interno de BI.
