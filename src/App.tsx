import React, { useMemo, useState, useEffect, useRef } from "react";
import CIIU_MAP from "./CIIU_MAP";

// ====== Estilos reutilizables ======
const TD = "border border-slate-300 px-2 py-1 break-words [overflow-wrap:anywhere] [hyphens:auto]";
const TD_CENTER = TD + " text-center";
const TH = TD + " bg-slate-100 font-semibold";

// ====== Encabezado de empresa ======
const COMPANY = {
  name: "AYNA INGENIERIA Y SOLUCIONES AMBIENTALES SAC",
  tagline: "Tratamiento de aguas residuales comerciales e industriales",
  phone: "905 629 167",
  waNumberRaw: "51905629167", 
  logoSrc: "https://i.ibb.co/XZpNpmyt/Logo.png",
};



// ====== Tipos ======
type CiiuEntry = { actividad: string; parametros: string[] };
type CIIUMap = Record<string, CiiuEntry[]>;
type ParamInfo = { vma: string; dir: boolean; annex: 1 | 2 };

type Cells = { vma: string; n: "" | "1" | "2"; lab: "X" | ""; dir: "X" | "" };

// ====== Tabla VMA / Dirimente por parámetro ======
const PARAM_INFO: Record<string, ParamInfo> = {
  // Anexo 1
  "Demanda Bioquímica de Oxígeno": { vma: "500 mg/L", dir: false, annex: 1 },
  "Demanda Química de Oxígeno": { vma: "1000 mg/L", dir: true, annex: 1 },
  "Sólidos Suspendidos Totales": { vma: "500 mg/L", dir: false, annex: 1 },
  "Aceites y Grasas": { vma: "100 mg/L", dir: true, annex: 1 },
  // Anexo 2
  "Aluminio": { vma: "10 mg/L", dir: true, annex: 2 },
  "Arsénico": { vma: "0.5 mg/L", dir: true, annex: 2 },
  "Boro": { vma: "4 mg/L", dir: true, annex: 2 },
  "Cadmio": { vma: "0.2 mg/L", dir: true, annex: 2 },
  "Cianuro": { vma: "1 mg/L", dir: true, annex: 2 },
  "Cobre": { vma: "3 mg/L", dir: true, annex: 2 },
  "Cromo hexavalente": { vma: "0.5 mg/L", dir: true, annex: 2 },
  "Cromo total": { vma: "10 mg/L", dir: true, annex: 2 },
  "Manganeso": { vma: "4 mg/L", dir: true, annex: 2 },
  "Mercurio": { vma: "0.02 mg/L", dir: true, annex: 2 },
  "Níquel": { vma: "4 mg/L", dir: true, annex: 2 },
  "Plomo": { vma: "0.5 mg/L", dir: true, annex: 2 },
  "Sulfatos": { vma: "1000 mg/L", dir: true, annex: 2 },
  "Sulfuros": { vma: "5 mg/L", dir: false, annex: 2 },
  "Zinc": { vma: "10 mg/L", dir: true, annex: 2 },
  "Nitrógeno Amoniacal": { vma: "80 mg/L", dir: false, annex: 2 },
  "Potencial Hidrógeno (pH)": { vma: "6-9", dir: false, annex: 2 },
  "Sólidos Sedimentables": { vma: "8.5 mL/L/h", dir: false, annex: 2 },
  "Temperatura": { vma: "< 35 °C", dir: false, annex: 2 },
};

// ====== Utilidades ======
function unionParams(codes: string[], map: CIIUMap): Set<string> {
  const out = new Set<string>();
  for (const code of codes) {
    const entries = map[code] || [];
    for (const e of entries) {
      for (const p of e.parametros) out.add((p || "").trim());
    }
  }
  return out;
}

function getCells(param: string, union: Set<string>): Cells {
  const aplica = union.has(param);
  return {
    vma: PARAM_INFO[param]?.vma ?? "",
    n: aplica ? (PARAM_INFO[param]?.dir ? "2" : "1") : "",
    lab: aplica ? "X" : "",
    dir: aplica && PARAM_INFO[param]?.dir ? "X" : "",
  };
}

function stripDiacritics(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

// ====== App (tipografía responsiva y contención en celdas/combobox) ======
export default function App() {
  const [selected, setSelected] = useState<string[]>([]);
  const [q, setQ] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);
  // Control del logo (permite fallback si la URL no es directa a imagen)
  const [logoUrl, setLogoUrl] = useState<string>(COMPANY.logoSrc);

  // Cerrar dropdown al clickear fuera
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setFocused(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Opciones para el autocompletado
  const options = useMemo(() => {
    const list: { code: string; codeDisplay: string; label: string; actividades: string[] }[] = [];
    for (const [code, entries] of Object.entries(CIIU_MAP as Record<string, {actividad:string;parametros:string[]}[]>)) {
      const acts = (entries || []).map((e) => e.actividad);
      const actividadPrincipal = acts[0] || "(sin actividad)";
      const codeDisplay = String(code).replace(/[^0-9].*$/, ""); // "2420G" -> "2420"
      list.push({ code, codeDisplay, label: `${codeDisplay} — ${actividadPrincipal}`, actividades: acts });
    }
    return list.sort((a, b) => a.codeDisplay.localeCompare(b.codeDisplay, "es"));
  }, []);

  const visible = useMemo(() => {
    const base = options.filter((o) => !selected.includes(o.code));
    if (!q.trim()) return base;
    const nq = stripDiacritics(q.trim());
    return base.filter((o) => stripDiacritics(o.label).includes(nq) || o.codeDisplay.includes(q.trim()));
  }, [options, selected, q]);

  const selectedUnion = useMemo(() => unionParams(selected, CIIU_MAP as any), [selected]);

  const addCode = (code: string) => {
    if (!code) return;
    setSelected((prev) => (prev.includes(code) ? prev : [...prev, code]));
    setQ("");
    setFocused(false);
  };
  const removeCode = (code: string) => setSelected((prev) => prev.filter((c) => c !== code));

  // Tests mínimos (silenciosos)
  useEffect(() => {
    try {
      const u1 = new Set<string>(["Demanda Química de Oxígeno"]);
      const t1 = getCells("Demanda Química de Oxígeno", u1);
      console.assert(t1.n === "2" && t1.lab === "X" && t1.dir === "X");
      const u2 = new Set<string>(["Demanda Bioquímica de Oxígeno"]);
      const t2 = getCells("Demanda Bioquímica de Oxígeno", u2);
      console.assert(t2.n === "1" && t2.lab === "X" && t2.dir === "");
    } catch {}
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-7xl p-4 space-y-6">
        {/* Encabezado (se mantiene tamaño) */}
        {/* Encabezado de empresa */}
        

        {/* Encabezado de empresa */}
        <section className="border-b border-slate-300 pb-3">
          <div className="flex items-center gap-3 flex-wrap">
            <img
              src={COMPANY.logoSrc}
              alt={COMPANY.name}
              className="w-14 h-14 object-contain"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            <div className="flex-1 min-w-[220px]">
              <h2 className="text-base sm:text-lg font-semibold leading-tight">{COMPANY.name}</h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-tight">{COMPANY.tagline}</div>
              <div className="text-xs text-slate-500 leading-tight">Contacto: {COMPANY.phone}</div>
            </div>
            <a
              href={`https://wa.me/${COMPANY.waNumberRaw}?text=${encodeURIComponent('Hola, me gustaría una cotización de levantamientos y soluciones para VMA.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-[#25D366] hover:bg-[#1ebe5a] text-white px-2.5 py-1.5 text-xs shadow-sm"
              aria-label="Escribir por WhatsApp"
              title="Escribir por WhatsApp"
            >
              <svg aria-hidden="true" viewBox="0 0 32 32" width="14" height="14" className="fill-current">
                <path d="M19.11 17.56c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.46-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.5-.17-.01-.38-.01-.58-.01-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.55 0 1.5 1.1 2.95 1.26 3.15.16.2 2.16 3.3 5.23 4.52.73.31 1.3.49 1.74.63.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.44.25-.71.25-1.31.17-1.44-.08-.13-.27-.2-.57-.35zM16.02 5C10.51 5 6 9.5 6 15c0 1.77.46 3.43 1.27 4.88L6 27l7.24-1.9c1.39.76 2.98 1.2 4.78 1.2 5.51 0 10.02-4.5 10.02-10.02C28.04 9.5 21.54 5 16.02 5z"></path>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </section>

        {/* Encabezado de la herramienta */}
        <header className="border-b border-slate-200 pb-2">
          <h1 className="text-xl sm:text-2xl font-semibold">Parámetros de cumplimiento obligatorio según CIIU - VMA</h1>
          <div className="text-xs sm:text-sm text-slate-600">
            Basado en el D.S. 010-2019-VIVIENDA y la R.M. 360-2016-VIVIENDA
          </div>
        </header>

        {/* Selector con búsqueda */}
        <section className="border border-slate-300 rounded-md bg-white">
          <div className={TH + " text-[clamp(11px,2.6vw,14px)] sm:text-sm"}>Seleccionar CIIU</div>
          <div ref={containerRef} className="relative">
            <div className="flex items-center gap-2 p-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onFocus={() => setFocused(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && visible[0]) addCode(visible[0].code);
                }}
                placeholder="Buscar por código (p. ej. 5610) o actividad (p. ej. restaurantes)"
                className="w-full px-3 py-2 rounded-md bg-white border border-slate-300 outline-none text-[clamp(12px,3.4vw,14px)] sm:text-sm placeholder:text-[clamp(11px,3vw,13px)] [overflow-wrap:anywhere] [hyphens:auto]"
              />
            </div>

            {focused && (
              <ul
                role="listbox"
                className="absolute z-10 mt-1 w-full bg-white border border-slate-300 rounded-md max-h-80 overflow-auto divide-y divide-slate-200 shadow"
              >
                {visible.length === 0 ? (
                  <li className="px-3 py-2 text-[clamp(12px,2.8vw,14px)] text-slate-500">Sin resultados</li>
                ) : (
                  visible.map((o) => (
                    <li
                      key={o.code}
                      className="px-3 py-2 hover:bg-slate-100 cursor-pointer"
                      onClick={() => addCode(o.code)}
                    >
                      {/* Formato norma */}
                      <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-x-4">
                        <div className="text-[clamp(10px,2.4vw,12px)] text-slate-500">Número de la CIIU:</div>
                        <div className="font-mono text-[clamp(12px,2.8vw,14px)] sm:text-sm">{o.codeDisplay}</div>
                        <div className="text-[clamp(10px,2.4vw,12px)] text-slate-500">Descripción</div>
                        <div className="text-[clamp(12px,2.8vw,14px)] sm:text-sm leading-tight [overflow-wrap:anywhere] [hyphens:auto]">
                          {o.actividades[0] || "(sin actividad)"}
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>

          {/* Seleccionados: tabla RESPONSIVE */}
          <div className="p-2 border-t border-slate-300 overflow-x-hidden">
            <table className="w-full text-[clamp(12px,2.8vw,14px)] sm:text-sm table-fixed border-collapse">
              <colgroup>
                {/* Tres primeras = 45% (15% c/u); Descripción = 55% siempre */}
                <col style={{ width: "20%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "20%" }} />
                <col style={{ width: "48%" }} />
              </colgroup>
              <tbody>
                {Array.from({ length: 4 }).map((_, idx) => {
                  const code = selected[idx];
                  const codeDisplay = (code || "").replace(/[^0-9].*$/, "");
                  const acts = code ? ((CIIU_MAP as any)[code] || []).map((e: any) => e.actividad) : [];
                  const desc = acts[0] || "";
                  return (
                    <tr key={idx} className="align-top">
                      {idx === 0 && (
                        <td rowSpan={4} className="border border-slate-300 bg-slate-50 text-[clamp(10px,2.4vw,12px)] sm:text-xs text-slate-700 px-2 py-1 whitespace-normal sm:whitespace-nowrap leading-tight align-top">
                          Número de la CIIU:
                        </td>
                      )}
                      <td className="border border-slate-300 px-2 py-1">
                        {code ? (
                          <>
                            <button
                              onClick={() => removeCode(code)}
                              className="mr-2 w-5 h-5 inline-flex items-center justify-center rounded bg-slate-100 border border-slate-300 text-slate-700 hover:bg-slate-200"
                              aria-label={`Quitar ${codeDisplay}`}
                              title="Quitar"
                            >
                              ×
                            </button>
                            <span className="font-mono">{codeDisplay}</span>
                          </>
                        ) : (
                          <span className="text-slate-300">&nbsp;</span>
                        )}
                      </td>
                      {idx === 0 && (
                        <td rowSpan={4} className="border border-slate-300 bg-slate-50 text-[clamp(10px,2.4vw,12px)] sm:text-xs text-slate-700 px-2 py-1 whitespace-normal sm:whitespace-nowrap leading-tight align-top">
                          Descripción
                        </td>
                      )}
                      <td className="border border-slate-300 px-2 py-1">
                        {desc ? (
                          <span className="leading-tight [overflow-wrap:anywhere] [hyphens:auto]">{desc}</span>
                        ) : (
                          <span className="text-slate-300">&nbsp;</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tablas de parámetros */}
        <ParametrosTabla annex={1} selectedUnion={selectedUnion} titulo="Parámetros Anexo 1" />
        <ParametrosTabla annex={2} selectedUnion={selectedUnion} titulo="Parámetros Anexo 2" />

        {/* Pie */}
        <footer className="text-center text-xs text-slate-600 pt-2 border-t border-slate-200 flex flex-col items-center gap-1">
          <div>Desarrollado por Sergio Gonzales Espinoza</div>
          <a
            href="https://www.linkedin.com/in/sergioage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-xs"
            aria-label="LinkedIn de Sergio Gonzales Espinoza"
            title="LinkedIn: sergioage"
          >
            {/* Texto "Linked" azul (fondo blanco) + badge "in" blanco sobre fondo azul */}
            <span className="text-[#0A66C2] font-medium leading-none align-middle tracking-tight">Linked</span>
            <span className="inline-flex w-4 h-4 items-center justify-center rounded-[3px] bg-[#0A66C2] text-white font-bold text-[10px] leading-none align-middle">in</span>
          </a>
        </footer>
      </div>
    </div>
  );
}

// ====== Componentes ======
function ParametrosTabla({ annex, selectedUnion, titulo }: { annex: 1 | 2; selectedUnion: Set<string>; titulo: string }) {
  const params = useMemo(() => Object.keys(PARAM_INFO).filter((k) => PARAM_INFO[k].annex === annex), [annex]);
  return <TablaBase titulo={titulo} params={params} selectedUnion={selectedUnion} />;
}

function TablaBase({ titulo, params, selectedUnion }: { titulo: string; params: string[]; selectedUnion: Set<string> }) {
  return (
    <section className="border border-slate-300 rounded-md">
      <div className={TH + " text-[clamp(11px,2.6vw,14px)] sm:text-sm"}>{titulo}</div>
      <div className="overflow-x-hidden">
        <table className="w-full text-[clamp(12px,2.8vw,14px)] sm:text-sm table-fixed border-collapse">
          <colgroup>
            <col style={{ width: "40%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "15%" }} />
          </colgroup>
          <thead className="bg-slate-100">
            <tr>
              <th className={TH + " text-left text-[clamp(11px,2.6vw,14px)] sm:text-sm leading-tight"} rowSpan={2}>Parámetro</th>
              <th className={TH + " text-center text-[clamp(11px,2.6vw,14px)] sm:text-sm leading-tight"} rowSpan={2}>VMA</th>
              <th className={TH + " text-center text-[clamp(11px,2.6vw,14px)] sm:text-sm leading-tight"} rowSpan={2}>N° muestra</th>
              <th className={TH + " text-center text-[clamp(11px,2.6vw,14px)] sm:text-sm leading-tight"} colSpan={2}>Tipo de muestra</th>
            </tr>
            <tr>
              <th className={TH + " text-center text-[clamp(10px,2.4vw,13px)] sm:text-sm leading-tight whitespace-normal"}>
                <span className="hidden sm:inline">Muestra lab. Acreditado</span>
                <span className="sm:hidden block">Muestra lab.<br/>acreditado</span>
              </th>
              <th className={TH + " text-center text-[clamp(10px,2.4vw,13px)] sm:text-sm leading-tight whitespace-normal"}>
                <span className="hidden sm:inline">Muestra dirimente</span>
                <span className="sm:hidden block">Muestra<br/>dirimente</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {params.map((p) => {
              const { vma, n, lab, dir } = getCells(p, selectedUnion);
              return (
                <tr key={p} className="odd:bg-white even:bg-slate-50">
                  <td className={TD}>{p}</td>
                  <td className={TD_CENTER}>{vma}</td>
                  <td className={TD_CENTER}>{n}</td>
                  <td className={TD_CENTER}>{lab}</td>
                  <td className={TD_CENTER}>{dir}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

