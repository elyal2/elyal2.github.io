---
id: masorange-logora
lang: es
title: Plataforma avanzada de observabilidad basada en datos para un operador de telecomunicaciones
cliente_display: MasOrange
cliente_publico: true
sector: Telecomunicaciones
tecnologia:
- IA generativa
- Modelado y analítica de grafos
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2026
partner:
- Google Cloud
bu: Data & AI
tags:
- observabilidad
- analítica de logs
- AIOps
- análisis de causa raíz
- RAG
- machine learning
- observabilidad orientada al negocio
- servicio gestionado
briefing: El cliente operaba con un modelo centralizado de gestión de logs basado
  en syslog, un concentrador de logs y Google Cloud Logging. Esta arquitectura permitía
  responder eficazmente a las incidencias y realizar troubleshooting en tiempo real,
  pero estaba orientada principalmente a la ingesta operativa y al análisis a corto
  plazo. Esto limitaba la correlación a gran escala entre distintos dominios tecnológicos,
  el análisis histórico ampliado, la detección avanzada de anomalías y la transformación
  de la telemetría en información de valor para el negocio.
---

## 1. Contexto y Desafío

El cliente operaba con un modelo centralizado de gestión de logs basado en syslog, un concentrador de logs y Google Cloud Logging. Esta arquitectura permitía responder eficazmente a las incidencias y realizar troubleshooting en tiempo real, pero estaba orientada principalmente a la ingesta operativa y al análisis a corto plazo. Esto limitaba la correlación a gran escala entre distintos dominios tecnológicos, el análisis histórico ampliado, la detección avanzada de anomalías y la transformación de la telemetría en información de valor para el negocio. El proyecto tenía como objetivo evolucionar desde un modelo reactivo de logging hacia una plataforma de observabilidad proactiva y basada en datos, preservando la continuidad para fuentes on-premise, legacy y cloud. El alcance inicial se centró en elaborar un diseño detallado de bajo nivel y validar un MVP integral de análisis de causa raíz (RCA) sobre una fuente de datos representativa.

## 2. Solución Técnica

La solución propuesta introdujo una arquitectura de observabilidad estructurada por capas. La capa operativa mantuvo Cloud Logging como servicio inicial de recepción, almacenamiento a corto plazo y troubleshooting en tiempo real, conservando la ingesta existente basada en syslog para facilitar una transición progresiva y no intrusiva. La capa analítica, basada en BigQuery, proporcionó análisis SQL a gran escala, correlación entre dominios, exploración histórica y capacidades nativas de machine learning, utilizando Linked Datasets para acceder a los datos de logging sin duplicaciones innecesarias. La capa de visualización y consumo, basada en Grafana Cloud, unificó los dashboards operativos y de negocio, las alertas y la monitorización de servicios. La capa de inteligencia combinó la analítica de BigQuery con Retrieval-Augmented Generation (RAG) basado en Vertex AI para interpretar eventos, recuperar conocimiento técnico relevante y facilitar el diagnóstico asistido. Se contempló un modelo de dependencias orientado a grafos mediante Spanner Graph para representar las relaciones entre microservicios, infraestructura y redes, sujeto a validación técnica. Asimismo, se diseñó un servicio RCA escalable sobre Cloud Run para correlacionar los datos analíticos de logs con las dependencias de los sistemas. Una interfaz conversacional permitiría a los usuarios técnicos explorar incidencias, anomalías y acciones recomendadas mediante lenguaje natural. El enfoque de entrega incluyó benchmarking de arquitectura, evaluación de la ingesta, revisión de alarmas, jobs de machine learning y dashboards, implementación del MVP, documentación operativa, transferencia de conocimiento y definición del modelo de gobernanza.

## 3. Impacto y Resultados de Negocio

La iniciativa estaba orientada a transformar la telemetría operativa en inteligencia accionable y a establecer la base para una observabilidad inteligente y AIOps. Entre los beneficios previstos se encontraban una investigación más rápida de las incidencias mediante dashboards unificados, correlación automatizada y análisis contextual de causa raíz; una detección más temprana gracias a la identificación de anomalías y al machine learning; mayor escalabilidad para procesar y consultar volúmenes crecientes de logs; y una mejora del análisis de tendencias históricas más allá de las limitaciones de la capa operativa de logging. La arquitectura también debía reducir el esfuerzo de análisis manual, estandarizar la creación de casos de uso de observabilidad y facilitar un modelo reutilizable de factoría de casos de uso. La transferencia de conocimiento, la documentación y las actividades de gobernanza aumentarían la autonomía interna, permitiendo a los equipos técnicos operar, mantener y ampliar la plataforma. Tras el MVP, el roadmap definiría la incorporación progresiva de nuevas fuentes de logs, dashboards, casos de uso analíticos y capacidades de inteligencia artificial, con una posible evolución hacia un modelo de servicio gestionado.
