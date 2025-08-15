const CIIU_MAP: Record<string, { actividad: string; parametros: string[] }[]> = {
  "0146": [
    { actividad: "Cría de aves de corral", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfuros", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables"] },
  ],
  "1010": [
    { actividad: "Elaboración y conservación de carne", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1020": [
    { actividad: "Elaboración y conservación de pescado, crustáceos y moluscos", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfuros", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1030": [
    { actividad: "Elaboración y conservación de frutas, legumbres y hortalizas", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1040": [
    { actividad: "Elaboración de aceites y grasas de origen vegetal y animal", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "1050": [
    { actividad: "Elaboración de productos lácteos", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1062": [
    { actividad: "Elaboración de almidones y productos derivados del almidón", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfatos", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1071": [
    { actividad: "Elaboración de productos de panadería", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfatos", "Sulfuros", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1072": [
    { actividad: "Elaboración de azúcar", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1073": [
    { actividad: "Elaboración de cacao y chocolate y de productos de confitería", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfatos", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)"] },
  ],
  "1074": [
    { actividad: "Elaboración de macarrones, fideos, alcuzcuz y productos farináceos similares", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1079": [
    { actividad: "Elaboración de otros productos alimenticios n.c.p.", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfatos", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1080": [
    { actividad: "Elaboración de piensos preparados para animales", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)"] },
  ],
  "1101": [
    { actividad: "Destilación, rectificación y mezcla de bebidas alcohólicas", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "1102": [
    { actividad: "Elaboración de vinos", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "1103": [
    { actividad: "Elaboración de bebidas malteadas y de malta", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1104": [
    { actividad: "Elaboración de bebidas no alcohólicas; producción de aguas minerales y otras aguas embotelladas", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "1311": [
    { actividad: "Preparación e hilatura de fibras textiles", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Arsénico", "Cadmio", "Cobre", "Cromo total", "Mercurio", "Níquel", "Plomo", "Zinc", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "1313": [
    { actividad: "Acabado de productos textiles", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cadmio", "Cobre", "Cromo hexavalente", "Cromo total", "Plomo", "Sulfatos", "Sulfuros", "Zinc", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "1511": [
    { actividad: "Curtido y adobo de cueros; adobo y teñido de pieles", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cromo hexavalente", "Cromo total", "Sulfatos", "Sulfuros", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1610": [
    { actividad: "Aserrado y acepilladura de madera", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Nitrógeno Amoniacal"] },
  ],
  "1701": [
    { actividad: "Fabricación de pasta de madera, papel y cartón", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cadmio", "Cobre", "Cromo hexavalente", "Cromo total", "Níquel", "Plomo", "Sulfatos", "Zinc", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "1702": [
    { actividad: "Fabricación de papel y cartón ondulado y de envases de papel y cartón", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfatos", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)"] },
  ],
  "1709": [
    { actividad: "Fabricación de otros artículos de papel y cartón", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cadmio", "Cobre", "Cromo total", "Níquel", "Plomo", "Zinc"] },
  ],
  "1811": [
    { actividad: "Impresión", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Arsénico", "Cromo hexavalente", "Cromo total", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "1812": [
    { actividad: "Actividades de servicios relacionadas con la impresión", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Arsénico", "Cromo hexavalente", "Cromo total", "Mercurio", "Plomo", "Zinc", "Potencial Hidrógeno (pH)"] },
  ],
  "1920": [
    { actividad: "Fabricación de productos de la refinación del petróleo", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Zinc", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "2011": [
    { actividad: "Fabricación de sustancias químicas básicas", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Aluminio", "Arsénico", "Boro", "Cadmio", "Cianuro", "Cobre", "Cromo hexavalente", "Cromo total", "Manganeso", "Mercurio", "Níquel", "Plomo", "Sulfatos", "Sulfuros", "Zinc", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "2012": [
    { actividad: "Fabricación de abonos y compuestos de nitrógeno", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Arsénico", "Cobre", "Cromo hexavalente", "Cromo total", "Manganeso", "Sulfatos", "Sulfuros", "Zinc", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "2021": [
    { actividad: "Fabricación de plaguicidas y otros productos químicos de uso agropecuario", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Arsénico", "Cobre", "Cromo hexavalente", "Cromo total", "Manganeso", "Mercurio", "Sulfatos", "Sulfuros", "Zinc", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables"] },
  ],
  "2022": [
    { actividad: "Fabricación de pinturas, barnices y productos de revestimiento similares, tintas de imprenta y masillas", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cobre", "Cromo hexavalente", "Cromo total", "Plomo", "Sulfatos", "Sulfuros", "Zinc", "Potencial Hidrógeno (pH)"] },
  ],
  "2023": [
    { actividad: "Fabricación de jabones y detergentes, preparados para limpiar y pulir, perfumes y preparados de tocador", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfatos", "Zinc", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "2029": [
    { actividad: "Fabricación de otros productos químicos n.c.p.", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Aluminio", "Arsénico", "Cadmio", "Cobre", "Cromo hexavalente", "Cromo total", "Manganeso", "Níquel", "Plomo", "Sulfatos", "Zinc", "Potencial Hidrógeno (pH)"] },
  ],
  "2100": [
    { actividad: "Fabricación de productos farmacéuticos, sustancias químicas medicinales y productos botánicos de uso farmacéutico", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cromo hexavalente", "Cromo total", "Zinc", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables"] },
  ],
  "2219": [
    { actividad: "Fabricación de otros productos de caucho", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cianuro", "Zinc", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "2220": [
    { actividad: "Fabricación de productos de plástico", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Zinc"] },
  ],
  "2310": [
    { actividad: "Fabricación de vidrio y productos de vidrio", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cobre", "Cromo hexavalente", "Cromo total", "Sulfatos", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "2391": [
    { actividad: "Fabricación de productos refractarios", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Boro", "Sulfatos", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "2420*": [
    { actividad: "Fabricación de productos primarios de metales preciosos y otros metales no ferrosos", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Arsénico", "Cadmio", "Cianuro", "Cobre", "Cromo hexavalente", "Cromo total", "Níquel", "Plomo", "Sulfatos", "Zinc", "Potencial Hidrógeno (pH)"] },
  ],
  "2520": [
    { actividad: "Fabricación de armas y municiones", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Aluminio", "Arsénico", "Boro", "Cadmio", "Cobre", "Cromo hexavalente", "Cromo total", "Mercurio", "Níquel", "Plomo", "Sulfatos", "Zinc", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "2592": [
    { actividad: "Tratamiento y revestimiento de metales; maquinado", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Aluminio", "Cadmio", "Cianuro", "Cobre", "Cromo total", "Mercurio", "Plomo", "Sulfatos", "Zinc", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "2660": [
    { actividad: "Fabricación de equipo de irradiación y equipo electrónico de uso médico y terapéutico", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cadmio", "Cianuro", "Cobre", "Cromo hexavalente", "Cromo total", "Níquel", "Sulfatos", "Zinc", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "2750": [
    { actividad: "Fabricación de aparatos de uso doméstico", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cadmio", "Cianuro", "Cobre", "Cromo hexavalente", "Cromo total", "Manganeso", "Níquel", "Sulfatos", "Zinc", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "2790": [
    { actividad: "Fabricación de otros tipos de equipo eléctrico", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cadmio", "Cianuro", "Cobre", "Cromo hexavalente", "Cromo total", "Níquel", "Sulfatos", "Zinc", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "2811": [
    { actividad: "Fabricación de motores y turbinas, excepto motores para aeronaves, vehículos automotores y motocicletas", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Aluminio", "Cadmio", "Cianuro", "Cobre", "Cromo hexavalente", "Cromo total", "Níquel", "Sulfatos", "Zinc", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "2910": [
    { actividad: "Fabricación de vehículos automotores", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cadmio", "Cianuro", "Cobre", "Cromo hexavalente", "Cromo total", "Níquel", "Plomo", "Sulfatos", "Zinc", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "3091": [
    { actividad: "Fabricación de motocicletas", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cadmio", "Níquel", "Plomo", "Zinc"] },
  ],
  "3092": [
    { actividad: "Fabricación de bicicletas y de sillones de ruedas para inválidos", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cadmio", "Cianuro", "Cobre", "Cromo hexavalente", "Cromo total", "Níquel", "Plomo", "Sulfatos", "Zinc", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "3250": [
    { actividad: "Fabricación de instrumentos y materiales médicos y odontológicos", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Cadmio", "Cianuro", "Cobre", "Cromo hexavalente", "Cromo total", "Níquel", "Sulfatos", "Zinc", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "3510": [
    { actividad: "Generación, transmisión y distribución de energía eléctrica", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "3520": [
    { actividad: "Fabricación de gas; distribución de combustibles gaseosos por tuberías", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfuros", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables"] },
  ],
  "4520": [
    { actividad: "Mantenimiento y reparación de vehículos automotores", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables"] },
  ],
  "4630": [
    { actividad: "Venta al por mayor de alimentos, bebidas y tabaco", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfuros", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables"] },
  ],
  "4719": [
    { actividad: "Otras actividades de venta al por menor en comercios no especializados", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)"] },
  ],
  "5510": [
    { actividad: "Actividades de alojamiento para estancias cortas", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfuros", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "5520": [
    { actividad: "Actividades de campamentos, parques de vehículos recreativos y parques de caravanas", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)"] },
  ],
  "5590": [
    { actividad: "Otras actividades de alojamiento", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "5610": [
    { actividad: "Actividades de restaurantes y de servicio móvil de comidas", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfuros", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "5630": [
    { actividad: "Actividades de servicio de bebidas", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfuros", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "7420": [
    { actividad: "Actividades de fotografía", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Potencial Hidrógeno (pH)", "Temperatura"] },
  ],
  "8610": [
    { actividad: "Actividades de hospitales", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Sulfuros", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "8620": [
    { actividad: "Actividades de médicos y odontólogos", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Mercurio", "Potencial Hidrógeno (pH)"] },
  ],
  "9601": [
    { actividad: "Lavado y limpieza, incluida la limpieza en seco, de productos textiles y de piel", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Arsénico", "Cadmio", "Cianuro", "Cobre", "Cromo hexavalente", "Cromo total", "Manganeso", "Mercurio", "Níquel", "Plomo", "Sulfatos", "Sulfuros", "Zinc", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)", "Sólidos Sedimentables", "Temperatura"] },
  ],
  "9602": [
    { actividad: "Peluquería y otros tratamientos de belleza", parametros: ["Demanda Bioquímica de Oxígeno", "Demanda Química de Oxígeno", "Sólidos Suspendidos Totales", "Aceites y Grasas", "Nitrógeno Amoniacal", "Potencial Hidrógeno (pH)"] },
  ],
};

export default CIIU_MAP;