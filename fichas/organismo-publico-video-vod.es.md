---
id: organismo-publico-video-vod
lang: es
title: Plataforma VOD para organismo público cultural
cliente_display: Organismo Público Cultural
cliente_publico: false
sector: Sector Público
tecnologia:
- AWS
- Amazon S3
- Amazon S3 Glacier
- AWS Lambda
- AWS CloudFormation
- AWS Step Functions
- AWS Elemental MediaConvert
- Amazon CloudFront
- Amazon DynamoDB
- Amazon EventBridge
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2025
partner:
- AWS
bu: Cloud & Managed Services
tags:
- Vídeo bajo demanda
- Streaming en directo
- Arquitectura serverless
- Integración mediante APIs
- Ciclo de vida audiovisual
- DRM
- Archivado automático
briefing: Una organización pública cultural especializada en la conservación y difusión
  del patrimonio visual disponía de un sistema de información orientado principalmente
  a la gestión de imágenes. La creciente incorporación de contenidos audiovisuales
  exigía adaptar el catálogo, los procesos de ingesta y los portales de consulta para
  gestionar vídeos de forma estructurada. El reto consistía en definir una solución
  robusta para vídeo bajo demanda y streaming en directo, integrada con el archivo
  digital y los sistemas existentes, con capacidad de controlar el almacenamiento,
  la seguridad, los derechos de acceso y la evolución futura de la plataforma.
---

## 1. Contexto y Desafío

Una organización pública cultural especializada en la conservación y difusión del patrimonio visual disponía de un sistema de información orientado principalmente a la gestión de imágenes. La creciente incorporación de contenidos audiovisuales exigía adaptar el catálogo, los procesos de ingesta y los portales de consulta para gestionar vídeos de forma estructurada. El reto consistía en definir una solución robusta para vídeo bajo demanda y streaming en directo, integrada con el archivo digital y los sistemas existentes, con capacidad de controlar el almacenamiento, la seguridad, los derechos de acceso y la evolución futura de la plataforma.

## 2. Solución Técnica

Se propuso una arquitectura VOD en AWS basada en servicios gestionados y un enfoque serverless. El flujo contempla la carga de vídeos, su orquestación mediante AWS Step Functions, la transcodificación adaptativa con AWS Elemental MediaConvert, el almacenamiento de originales y derivados en Amazon S3 y su archivado automático en Amazon S3 Glacier. Amazon CloudFront proporciona la distribución de contenidos, mientras que AWS Lambda y Amazon EventBridge automatizan eventos, validaciones, alertas y tareas operativas. Las metadatos del vídeo se integrarían con el sistema de información mediante APIs y un repositorio NoSQL en Amazon DynamoDB. La propuesta también contempla cifrado en tránsito y en reposo, control de identidades mediante IAM y la posibilidad de aplicar DRM a contenidos sujetos a derechos. La fase de consultoría incluye el análisis funcional, el diseño de arquitectura, la revisión del modelo de datos, la definición de modificaciones de software, el catálogo de pruebas y un roadmap de implantación.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta de consultoría y definición previa al desarrollo, los resultados son esperados y quedan condicionados a la posterior implantación. La solución permitiría incorporar vídeos al catálogo cultural manteniendo una experiencia de reproducción adaptable a distintos dispositivos y escenarios de consumo. También se espera mejorar la escalabilidad durante eventos con picos de audiencia, reducir la dependencia de infraestructura local mediante servicios gestionados y optimizar el almacenamiento gracias al archivado automático y al modelo de pago por uso. La documentación funcional y técnica facilitaría la ejecución posterior, la trazabilidad de los cambios, la validación mediante pruebas estructuradas y una mayor autonomía del equipo responsable del archivo y de los portales públicos.
