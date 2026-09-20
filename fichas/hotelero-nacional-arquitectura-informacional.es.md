---
id: hotelero-nacional-arquitectura-informacional
lang: es
title: Arquitectura informacional para grupo hotelero
cliente_display: Grupo hotelero nacional
cliente_publico: false
sector: Turismo y ocio
tecnologia:
- Azure
- Snowflake
- Databricks
- Apache Spark
- Python
- Apache Kafka
- Power BI
- Azure Data Factory
- Azure Data Lake Storage Gen2
- Azure DevOps
- Azure Key Vault
- Microsoft Purview
- Confluent Cloud
- Qlik Sense
- Opera Cloud
- Simphony
- SAP S/4HANA Cloud
tipo_proyecto: Plataforma
importe_label: Plataforma
anio: 2024
partner:
- Microsoft
- Snowflake
bu: Data & AI
tags:
- Arquitectura informacional
- Lakehouse
- Data Vault 2.0
- Streaming
- Data Governance
- CI/CD
- Information Marts
briefing: Un grupo hotelero nacional se encontraba inmerso en una transformación estratégica
  para avanzar hacia un modelo de negocio más orientado al dato. La información comercial,
  de puntos de venta y financiera estaba distribuida entre diferentes sistemas y servicios
  SaaS, dificultando la consolidación, la trazabilidad y el análisis homogéneo del
  negocio. El reto consistía en definir y construir una arquitectura informacional
  corporativa, escalable y flexible, capaz de integrar fuentes heterogéneas y establecer
  una base común para la toma de decisiones.
---

## 1. Contexto y Desafío

Un grupo hotelero nacional se encontraba inmerso en una transformación estratégica para avanzar hacia un modelo de negocio más orientado al dato. La información comercial, de puntos de venta y financiera estaba distribuida entre diferentes sistemas y servicios SaaS, dificultando la consolidación, la trazabilidad y el análisis homogéneo del negocio. El reto consistía en definir y construir una arquitectura informacional corporativa, escalable y flexible, capaz de integrar fuentes heterogéneas y establecer una base común para la toma de decisiones. La iniciativa debía contemplar inicialmente los dominios comercial, punto de venta y financiero, manteniendo la capacidad de incorporar nuevos orígenes y productos de datos en fases posteriores.

## 2. Solución Técnica

Se planteó una arquitectura cloud basada en Azure, con un diseño lakehouse modular y separación de las capas de ingesta, persistencia, transformación y consumo. La ingesta debía soportar tanto procesos batch como streaming mediante Apache Kafka y Confluent Cloud, integrando información procedente de los sistemas de reservas, puntos de venta y gestión financiera. El almacenamiento se estructuró sobre Azure Data Lake Storage Gen2 y el repositorio analítico sobre Snowflake. Para las transformaciones se seleccionó Databricks, utilizando Apache Spark, SQL y Python, con Azure Data Factory como mecanismo de orquestación. El modelado de los dominios se definió siguiendo Data Vault 2.0, diferenciando Raw Data Vault, Business Data Vault e Information Marts. La solución incorporó entornos de desarrollo y producción, automatización CI/CD mediante Azure DevOps, control de accesos basado en roles, principios de mínimo privilegio y gestión segura de secretos con Azure Key Vault. También se dejó preparada la evolución hacia capacidades de gobierno, catálogo y linaje mediante Microsoft Purview, así como el consumo desde Power BI y Qlik Sense.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta aún pendiente de ejecución, los resultados se expresan como objetivos esperados. La arquitectura permitiría centralizar y homogeneizar la información de distintos dominios de negocio, reduciendo la dependencia de procesos manuales y facilitando una generación más ágil y consistente de análisis e informes. El uso combinado de ingesta streaming y batch debería acortar las ventanas de procesamiento y habilitar casos de uso de analítica más próxima al tiempo real. El diseño basado en Data Vault 2.0 proporcionaría historización, trazabilidad y flexibilidad para incorporar nuevas fuentes, modelos y necesidades de negocio sin rediseñar la plataforma completa. Asimismo, los Information Marts facilitarían el autoservicio de datos por parte de las áreas usuarias y mejorarían el rendimiento de las herramientas de explotación existentes. La automatización de despliegues, la documentación y las sesiones de transferencia de conocimiento contribuirían a aumentar la autonomía del equipo interno para operar y evolucionar los productos de datos.
