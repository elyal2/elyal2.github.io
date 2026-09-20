---
id: masorange-iris
lang: es
title: IA explicable y observabilidad para la clasificación de imágenes
cliente_display: Operador nacional de telecomunicaciones
cliente_publico: false
sector: Telecomunicaciones
tecnologia:
- OpenLLMetry
- OpenTelemetry
- OpenShift
- Oracle Database
- YOLO
- Explainable AI (XAI)
- IA generativa
tipo_proyecto: Plataforma
importe_label: MVP/PoC
anio: 2025
bu: Data & AI
tags:
- observabilidad de IA
- monitorización de LLM
- clasificación de imágenes
- explicabilidad de modelos
- auditoría de modelos
- deriva de datos
- dashboards de Grafana
- evidencia visual
- explicaciones estructuradas
- explicaciones contrastivas
- validación determinista
- monitorización estadística
- XAI visual
- heatmaps
- observabilidad multimodal de IA
- análisis de matriz de confusión
- entrenamiento de modelos con GPU
briefing: La solución mejora la explicabilidad, auditabilidad y observabilidad de
  la plataforma IRIS de clasificación de imágenes mediante evidencia visual, reglas
  deterministas, modelos auditores y persistencia estructurada de resultados. La instrumentación
  con OpenLLMetry y OpenTelemetry permite supervisar trazas, métricas, logs, latencia
  y errores, mientras que dashboards operativos analizan el rendimiento por clase,
  la confianza, los patrones de error y la deriva del modelo. También se contempla
  evaluar modelos visuales de mayor capacidad con conjuntos de datos más amplios y
  recursos GPU.
---

## 1. Contexto y Desafío

Un operador nacional de telecomunicaciones estaba evaluando cómo hacer que su solución IRIS de clasificación de imágenes fuera más explicable, auditable y observable desde el punto de vista operativo. El enfoque existente podía generar predicciones, pero ofrecía una visibilidad limitada sobre la evidencia que respaldaba cada decisión, la fiabilidad de las respuestas y las causas de los errores de clasificación. La propuesta abordaba la necesidad de detectar sesgos, incoherencias, deriva de datos, confusión entre clases y degradación del modelo a lo largo del tiempo, así como de establecer un enfoque defendible para entornos de producción y sujetos a auditoría. Se consideraron varias alternativas, desde explicaciones estructuradas y reglas de validación deterministas hasta modelos de auditoría independientes, explicaciones contrastivas, modelos de aprendizaje automático y técnicas visuales de IA explicable. El documento aclara que ya se había entrenado un modelo YOLO sin mejorar la solución actual. Por tanto, una nueva exploración basada en ML o YOLO requeriría un modelo de mayor tamaño, un conjunto de datos más amplio y diverso, y recursos de GPU.

## 2. Solución Técnica

La solución propuesta combina explicabilidad, auditoría de modelos y observabilidad de extremo a extremo en torno al flujo existente de clasificación de imágenes. La primera capa enriquece cada respuesta del modelo con campos estructurados, como la etiqueta predicha, la evidencia visual, las regiones relevantes de la imagen, el nivel de confianza y las limitaciones. Estos resultados se almacenan en Oracle Database para garantizar la trazabilidad. De forma paralela, un modelo auditor puede revisar la imagen, la explicación original y la predicción, asignar una valoración de calidad y proponer alternativas. Las reglas de validación deterministas complementan la explicación generativa mediante la comprobación de la compatibilidad entre atributos y clases, el cumplimiento de umbrales mínimos de confianza y la alineación entre las regiones relevantes y los objetos esperados. Para aportar evidencia visual, la arquitectura puede integrar técnicas de IA explicable como Grad-CAM, Score-CAM, mapas de atención y regiones de activación. El modelo visual genera la predicción y la evidencia espacial, mientras que el modelo generativo traduce dicha evidencia en una explicación auditable sin sustituirla. La capa de observabilidad instrumenta el pipeline con OpenLLMetry y OpenTelemetry, capturando trazas, métricas, logs, contexto del modelo, prompts, latencia y errores. La telemetría se exporta mediante OTLP a un OpenTelemetry Collector desplegado en OpenShift y se pone a disposición de dashboards y análisis operativos. Una pipeline complementaria de monitorización calcula métricas históricas, rendimiento por clase, distribuciones de confianza, patrones de error e indicadores de deriva de datos; los resultados se almacenan en Oracle Database y se presentan mediante dashboards de Grafana. También pueden contemplarse experimentos alternativos de entrenamiento y despliegue de un modelo YOLO de mayor tamaño u otro modelo de aprendizaje automático, utilizando un conjunto de datos más amplio y recursos de GPU. La implementación puede incluir procesamiento paralelo para comparar el flujo IRIS existente con versiones que incorporen prompts ampliados o lógica de auditoría adicional antes de adoptar los cambios en el flujo principal. La integración de OpenLLMetry se plantea mediante la inicialización del SDK y la instrumentación de workflows y tareas, trazando cada petición a través de la secuencia imagen → modelo → resultado y exportándola mediante OTLP a un OpenTelemetry Collector en OpenShift. En el flujo de XAI visual, la secuencia es imagen → modelo visual → heatmap o regiones relevantes → LLM: el LLM interpreta la evidencia espacial, pero no la genera ni la sustituye. Las principales actividades de implementación incluyen la persistencia en Oracle, el despliegue del contenedor de monitorización, el diseño de dashboards en Grafana, los ciclos de validación y pruebas, y el entrenamiento y despliegue basado en GPU para cualquier nuevo modelo de ML o YOLO.

## 3. Impacto y Resultados de Negocio

La propuesta está orientada a mejorar la gobernanza y el control operativo del servicio de clasificación de imágenes, haciendo más sencillas tanto la inspección de predicciones individuales como la monitorización agregada del rendimiento. Las explicaciones estructuradas y la evidencia almacenada agilizarían la investigación de resultados incorrectos o con baja confianza, mientras que el análisis contrastivo y las reglas deterministas reforzarían la fiabilidad y reproducibilidad de las decisiones del modelo. La evidencia visual ayudaría a los equipos de negocio y auditoría a verificar si el modelo se centra en el objeto relevante, en lugar de hacerlo en elementos del fondo o artefactos no relacionados. La monitorización histórica facilitaría la detección temprana de deriva de datos, desequilibrios entre clases y degradación del rendimiento. OpenLLMetry y OpenTelemetry proporcionarían visibilidad de extremo a extremo sobre la pipeline de IA, favoreciendo un diagnóstico más rápido de la latencia, los errores y el comportamiento del modelo. Estas capacidades crearían una base más escalable para la operación en producción, permitirían a los equipos internos analizar el rendimiento mediante dashboards y reducirían la dependencia de revisiones manuales ad hoc. El documento describe alternativas de implementación y beneficios esperados, no resultados confirmados tras el despliegue.
