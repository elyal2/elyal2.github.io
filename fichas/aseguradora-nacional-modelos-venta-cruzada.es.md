---
id: aseguradora-nacional-modelos-venta-cruzada
lang: es
title: Modelos de venta cruzada para aseguradora
cliente_display: Aseguradora Nacional
cliente_publico: false
sector: Seguros
tecnologia:
- AWS
- Amazon SageMaker
- Amazon S3
- Python
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2024
partner:
- AWS
bu: Data & AI
tags:
- Venta cruzada
- Venta incremental
- Next-best-action
- Scoring predictivo
- AutoML
- Analítica avanzada
briefing: La aseguradora plantea una PoC de Machine Learning en AWS para identificar
  clientes con mayor propensión al up-selling de nuevas garantías y al cross-selling
  de seguros de hogar. El uso de capacidades de AutoML permitiría acelerar la experimentación,
  mejorar la priorización comercial y facilitar el reentrenamiento de modelos mediante
  notebooks reproducibles y outputs de scoring. La industrialización, monitorización
  e integración con el ecosistema corporativo se contemplan como evoluciones posteriores.
---

## 1. Contexto y Desafío

La aseguradora disponía de un modelo de churn aplicado principalmente a seguros de decesos, con resultados satisfactorios para apoyar la retención de clientes. Sin embargo, necesitaba ampliar sus capacidades comerciales para identificar oportunidades de up-selling de nuevas garantías y ampliación de coberturas, así como de cross-selling de seguros de hogar. La ausencia de histórico suficiente para algunos productos dificultaba la selección de públicos objetivo mediante técnicas tradicionales. El reto consistía en reducir el time-to-market, maximizar la tasa de éxito de las acciones comerciales y facilitar el ajuste dinámico de los modelos, manteniendo un enfoque eficiente en el consumo de recursos cloud.

## 2. Solución Técnica

Se planteó una PoC sobre la landing zone existente en AWS, utilizando Amazon SageMaker para el análisis, entrenamiento y refinamiento de modelos de Machine Learning. Los datos estructurados y semiestructurados, recibidos principalmente en formato CSV, se almacenarían en Amazon S3 para su posterior revisión, homogeneización y depuración. Mediante capacidades de AutoML se abordarían el preprocesamiento, la ingeniería de características y la optimización de hiperparámetros. Se desarrollarían dos modelos de scoring: uno para priorizar la adquisición de nuevas garantías de decesos y otro para identificar clientes con mayor propensión a contratar seguros de hogar. Los experimentos, candidatos, métricas y resultados quedarían documentados en notebooks reproducibles, generando ficheros de salida con el scoring asignado a cada cliente y un informe de leads prioritarios. La solución incorporaría controles de integridad, trazabilidad y disponibilidad de la información, junto con la coordinación con los equipos responsables de la landing zone, seguridad y comunicaciones. La industrialización e integración con el ecosistema corporativo quedarían planteadas como una evolución posterior.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta de PoC todavía no ejecutada, los resultados se formulan como expectativas. La iniciativa permitiría acelerar la identificación de clientes con mayor propensión a contratar nuevas garantías o pólizas de hogar, mejorando la priorización de la actividad comercial frente a aproximaciones basadas únicamente en reglas tradicionales. Se espera facilitar la definición de una next-best-action y la detección de clientes candidatos en varias iniciativas, posibilitando ofertas combinadas orientadas a la fidelización. El uso de AutoML y de un entorno cloud bajo demanda debería reducir los tiempos de experimentación y facilitar el refinamiento de los modelos. Asimismo, los notebooks, activos de software y documentación de despliegue proporcionarían mayor autonomía al equipo interno para revisar, reentrenar y aplicar los modelos. Como evolución futura, se prevé la automatización, monitorización e integración de los outputs con el ecosistema tecnológico y con otros modelos, como churn y journey del cliente.
