---
id: masorange-logora
lang: es
title: Evolución hacia una plataforma de observabilidad avanzada basada en datos
cliente_display: Operador de Telecomunicaciones Nacional
cliente_publico: false
sector: Telecomunicaciones
tecnologia:
- Google Cloud Logging
- Google BigQuery
- Grafana Cloud
- Vertex AI
- Cloud Run
- Retrieval-Augmented Generation (RAG)
- IA generativa
- Modelado y analítica de grafos
- Spanner Graph
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2026
partner:
- Google Cloud
bu: Data & AI
tags:
- observabilidad avanzada
- analítica de logs
- AIOps
- análisis de causa raíz
- RCA
- detección de anomalías
- IA conversacional
- Business Observability
- telemetría
- MVP
- BigQuery ML
- Spanner Graph
- syslog
- rsyslog
- Linked Datasets
- Compute Engine
- Network Load Balancer
- log analytics
- observabilidad no disruptiva
briefing: El operador disponía de un modelo de gestión de logs basado en syslog, un
  concentrador y Google Cloud Logging, adecuado para la ingesta operativa, la consulta
  inmediata y la resolución de incidencias. Sin embargo, esta aproximación presentaba
  limitaciones para la analítica avanzada, la correlación masiva entre dominios tecnológicos,
  la explotación histórica y la automatización del diagnóstico. El reto consistía
  en evolucionar desde un modelo reactivo de logging hacia una plataforma de observabilidad
  inteligente, manteniendo la continuidad operativa y minimizando el impacto sobre
  los sistemas origen.
---

## 1. Contexto y Desafío

El operador disponía de un modelo de gestión de logs basado en syslog, un concentrador y Google Cloud Logging, adecuado para la ingesta operativa, la consulta inmediata y la resolución de incidencias. Sin embargo, esta aproximación presentaba limitaciones para la analítica avanzada, la correlación masiva entre dominios tecnológicos, la explotación histórica y la automatización del diagnóstico. El reto consistía en evolucionar desde un modelo reactivo de logging hacia una plataforma de observabilidad inteligente, manteniendo la continuidad operativa y minimizando el impacto sobre los sistemas origen. La iniciativa se planteó mediante un diseño detallado, un MVP de análisis de causa raíz y un roadmap progresivo de escalado.

### Detalle de la situación de partida

La captura y el transporte de logs se mantienen sobre un modelo basado en syslog, con un Network Load Balancer como punto de entrada y un concentrador compartido para las redes del operador. Dicho concentrador se despliega sobre un grupo de instancias de Compute Engine e integra rsyslog para la recepción, normalización, gestión de colas y buffering, junto con el Google Cloud Logging Agent para la ingesta en Google Cloud Logging. La arquitectura actual aplica políticas de routing hacia destinos diferenciados por dominio funcional, con ventanas de retención inferiores a 30 días orientadas principalmente al troubleshooting operativo.

La evolución propuesta mantiene este modelo de captura y transporte para minimizar el impacto sobre las aplicaciones y sistemas origen. Como aclaración de alcance, el proyecto en curso se centra en la migración técnica de los flujos desde Elasticsearch hacia Google Cloud Logging, mientras que la iniciativa descrita amplía dicho alcance con capacidades de analítica avanzada y observabilidad basada en datos.

## 2. Solución Técnica

Se diseñó una arquitectura estructurada en capas. La capa operativa mantiene Google Cloud Logging como punto de recepción, consulta inmediata y gestión de la retención de logs procedentes de sistemas on-premise y entornos legacy. La capa analítica incorpora Google BigQuery para realizar consultas SQL a gran escala, correlación transversal, análisis histórico y detección de tendencias, utilizando Linked Datasets para acceder a los datos sin duplicaciones innecesarias. Sobre esta base se contemplan capacidades de BigQuery ML, detección de anomalías y evolución hacia IA generativa. Grafana Cloud proporciona la visualización unificada, los dashboards, el alertado y el consumo de indicadores técnicos y de negocio. Vertex AI, integrado mediante un enfoque Retrieval-Augmented Generation (RAG), añade comprensión contextual, interpretación semántica de eventos y asistencia al diagnóstico. Un servicio de análisis de causa raíz desplegado en Cloud Run correlaciona los datos analíticos con las dependencias entre sistemas modeladas mediante grafos. La propuesta incluye además una interfaz conversacional para facilitar la exploración de la telemetría y la consulta del conocimiento operativo.

### Detalle de la arquitectura propuesta

BigQuery se plantea como plataforma de Log Analytics y como base para aplicar BigQuery ML (BQML) directamente sobre los datos analíticos. Esto permite habilitar casos de uso de detección automática de anomalías, clasificación de eventos, análisis de comportamiento y predicción de posibles degradaciones.

La arquitectura incorpora además Spanner Graph para representar las dependencias entre microservicios, componentes de infraestructura, sistemas de red y flujos de servicio. El servicio de RCA desplegado en Cloud Run combina los datos analíticos de BigQuery con este modelo de dependencias para identificar correlaciones, posibles causas e impacto de los incidentes.

Durante el diseño detallado se contempla validar, mediante benchmarking, la adecuación de Spanner Graph frente a alternativas de base de datos orientada a grafos disponibles en Google Cloud, como Neo4j, en función de los casos de uso concretos y de los requisitos de la solución.

## 3. Impacto y Resultados de Negocio

La solución está orientada a transformar los logs en un activo estratégico para la operación y la toma de decisiones. El MVP permitirá validar de extremo a extremo la arquitectura y demostrar la viabilidad de un caso de uso de análisis de causa raíz sobre datos representativos. Se espera mejorar la detección temprana de anomalías, acelerar la identificación de causas y reducir el esfuerzo manual asociado al análisis de incidencias. La separación entre capa operativa, analítica, inteligencia artificial y consumo facilita la escalabilidad hacia nuevas fuentes, sistemas y casos de uso. Los dashboards unificados y la interacción conversacional favorecerán el autoservicio de información para los equipos técnicos y de negocio. La transferencia de conocimiento, la documentación y el modelo de gobernanza previstos contribuirán a la autonomía operativa y a una evolución controlada hacia capacidades de AIOps y observabilidad orientada al negocio.

### Beneficios operativos ampliados

La solución está orientada a reducir el MTTR mediante la automatización parcial de las tareas de investigación y diagnóstico, combinando correlación analítica, dependencias entre sistemas y asistencia basada en IA. La conservación del modelo actual de captura permite una evolución progresiva y no disruptiva, mientras que la separación entre ingesta operativa, analítica, inteligencia artificial y visualización mejora la escalabilidad y la gobernanza de la plataforma.
