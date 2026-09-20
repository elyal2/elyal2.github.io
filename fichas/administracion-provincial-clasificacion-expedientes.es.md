---
id: administracion-provincial-clasificacion-expedientes
lang: es
title: Clasificación inteligente de expedientes administrativos
cliente_display: Administración provincial
cliente_publico: false
sector: Sector Público
tecnologia:
- AWS
- Amazon Textract
- IA generativa
- Explainable AI (XAI)
- Excel
- Tesseract
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2025
partner:
- AWS
bu: Data & AI
tags:
- clasificación documental
- extracción de información
- OCR
- expedientes de subvenciones
- prueba de concepto
- trazabilidad
- cumplimiento normativo
briefing: Una administración provincial necesitaba evaluar cómo mejorar la ordenación
  y gestión de los documentos asociados a expedientes administrativos, inicialmente
  en el ámbito de las subvenciones de concurrencia. La diversidad de formatos, la
  posible presencia de documentos escaneados de baja calidad y la ausencia de criterios
  de clasificación completamente definidos dificultaban la automatización y podían
  exigir una revisión manual significativa. El reto consistía en determinar la viabilidad
  técnica de una solución basada en inteligencia artificial capaz de extraer información,
  clasificar documentos y proporcionar resultados trazables, manteniendo el cumplimiento
  de los requisitos de seguridad y protección de datos.
---

## 1. Contexto y Desafío

Una administración provincial necesitaba evaluar cómo mejorar la ordenación y gestión de los documentos asociados a expedientes administrativos, inicialmente en el ámbito de las subvenciones de concurrencia. La diversidad de formatos, la posible presencia de documentos escaneados de baja calidad y la ausencia de criterios de clasificación completamente definidos dificultaban la automatización y podían exigir una revisión manual significativa. El reto consistía en determinar la viabilidad técnica de una solución basada en inteligencia artificial capaz de extraer información, clasificar documentos y proporcionar resultados trazables, manteniendo el cumplimiento de los requisitos de seguridad y protección de datos.

## 2. Solución Técnica

Se planteó un piloto acotado sobre una infraestructura temporal de AWS y un conjunto preseleccionado de documentos. La solución combinaría tecnologías OCR, incluyendo Amazon Textract y la alternativa Tesseract, con capacidades de IA generativa para analizar el contenido y clasificarlo según categorías documentales previamente definidas. El proceso extraería nombres de solicitantes o entidades, fechas relevantes, identificadores de expediente y descripciones de proyectos, transformando la información en registros estructurados. Los resultados se entregarían en un formato de fácil validación, como Excel, junto con explicaciones de los criterios y razonamientos utilizados. El piloto incluiría pruebas de precisión, eficiencia, seguridad y compatibilidad normativa, además de un diseño arquitectónico para una futura implantación productiva y recomendaciones de escalabilidad, gobierno y mitigación de riesgos.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta de estudio de viabilidad y prueba piloto todavía no ejecutada, los resultados se formulan como expectativas. El proyecto permitiría medir objetivamente la precisión de la extracción y clasificación automática, así como el tiempo necesario para procesar y estructurar los documentos frente a los procedimientos manuales. También debería aportar una base cuantitativa para valorar la escalabilidad hacia un entorno productivo, reducir la complejidad de la gestión documental y mejorar la trazabilidad de los expedientes. La entrega de resultados explicables facilitaría la validación por parte de los usuarios y ayudaría a definir una futura solución con mayor autonomía operativa, manteniendo controles humanos y requisitos de cumplimiento.
