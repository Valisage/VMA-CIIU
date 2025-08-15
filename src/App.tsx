import React, { useMemo, useState, useEffect, useRef } from "react";
import CIIU_MAP from "./CIIU_MAP";

const TD = "border border-slate-300 px-2 py-1";
const TD_CENTER = TD + " text-center";
const TH = TD + " bg-slate-100 font-semibold";

type CiiuEntry = { actividad: string; parametros: string[] };
type CIIUMap = Record<string, CiiuEntry[]>;
type ParamInfo = { vma: string; dir: boolean; annex: 1 | 2 };
type Cells = { vma: string; n: "" | "1" | "2"; lab: "X" | ""; dir: "X" | "" };

const PARAM_INFO: Record<string, ParamInfo> = {
  "Demanda Bioquímica de Oxígeno": { vma: "500 mg/L", dir: false, annex: 1 },
  "Demanda Química de Oxígeno": { vma: "1000 mg/L", dir: true, annex: 1 },
  "Sólidos Suspendidos Totales": { vma: "500 mg/L", dir: false, annex: 1 },
  "Aceites y Grasas": { vma: "100 mg/L", dir: true, annex: 1 },
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
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export default function App() {
  const [selected, setSelected] = useState<string[]>([]);
  const [q, setQ] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setFocused(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const options = useMemo(() => {
    const list: { code: string; label: string; actividades: string[] }[] = [];
    for (const [code, entries] of Object.entries(CIIU_MAP as Record<string, {actividad:string;parametros:string[]}[]>)) {
      const acts = (entries || []).map((e) => e.actividad);
      const actividadPrincipal = acts[0] || "(sin actividad)";
      list.push({ code, label: `${code} — ${actividadPrincipal}`, actividades: acts });
    }
    return list.sort((a, b) => a.code.localeCompare(b.code, "es"));
  }, []);

  const visible = useMemo(() => {
    const base = options.filter((o) => !selected.includes(o.code));
    if (!q.trim()) return base;
    const nq = stripDiacritics(q.trim());
    return base.filter((o) => stripDiacritics(o.label).includes(nq) || o.code.includes(q.trim()));
  }, [options, selected, q]);

  const selectedUnion = useMemo(() => unionParams(selected, CIIU_MAP as any), [selected]);

  const addCode = (code: string) => {
    if (!code) return;
    setSelected((prev) => {
      if (prev.includes(code)) return prev;
      return [...prev, code]; // sin límite
    });
    setQ("");
    setFocused(false);
  };

  const removeCode = (code: string) => setSelected((prev) => prev.filter((c) => c !== code));

  useEffect(() => {
    try {
      const u1 = new Set<string>(["Demanda Química de Oxígeno"]);
      const t1 = getCells("Demanda Química de Oxígeno", u1);
      console.assert(t1.n === "2" && t1.lab === "X" && t1.dir === "X");

      const u2 = new Set<string>(["Demanda Bioquímica de Oxígeno"]);
      const t2 = getCells("Demanda Bioquímica de Oxígeno", u2);
      console.assert(t2.n === "1" && t2.lab === "X" && t2.dir === "");

      const u3 = new Set<string>([]);
      const t3 = getCells("Zinc", u3);
      console.assert(t3.n === "" && t3.lab === "" && t3.dir === "");
    } catch {}
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="max-w-7xl mx-auto p-4 space-y-6">
        <header className="flex items-end justify-between border-b border-slate-200 pb-2">
          <div>
            <h1 className="text-2xl font-semibold">Parámetros que aplica según CIIU - VMA</h1>
            <div className="text-sm text-slate-600">
              Basado en el D.S. 010-2019-VIVIENDA y la R.M. 116-2012-VIVIENDA
            </div>
          </div>
        </header>

        <section className="border border-slate-300 rounded-md bg-white">
          <div className={TH}>Seleccionar CIIU</div>
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
                className="w-full px-3 py-2 rounded-md bg-white border border-slate-300 outline-none"
              />
            </div>

            {focused && (
              <ul
                role="listbox"
                className="absolute z-10 mt-1 w-full bg-white border border-slate-300 rounded-md max-h-80 overflow-auto divide-y divide-slate-200 shadow"
              >
                {visible.length === 0 ? (
                  <li className="px-3 py-2 text-sm text-slate-500">Sin resultados</li>
                ) : (
                  visible.map((o) => (
                    <li
                      key={o.code}
                      className="px-3 py-2 hover:bg-slate-100 cursor-pointer"
                      onClick={() => addCode(o.code)}
                    >
                      <div className="grid grid-cols-[160px_1fr] gap-x-4">
                        <div className="text-xs text-slate-500">Número de la CIIU:</div>
                        <div className="font-mono text-sm">{o.code}</div>
                        <div className="text-xs text-slate-500">Descripción</div>
                        <div className="text-sm leading-tight">{o.actividades[0] || "(sin actividad)"}</div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>

          <div className="p-2 border-t border-slate-300">
            <table className="w-full text-sm table-fixed border-collapse">
              <colgroup>
                <col style={{ width: "160px" }} />
                <col style={{ width: "160px" }} />
                <col style={{ width: "160px" }} />
                <col />
              </colgroup>
              <tbody>
                {Array.from({ length: 4 }).map((_, idx) => {
                  const code = selected[idx];
                  const acts = code ? ((CIIU_MAP as any)[code] || []).map((e: any) => e.actividad) : [];
                  const desc = acts[0] || "";
                  return (
                    <tr key={idx} className="align-top">
                      {idx === 0 && (
                        <td
                          rowSpan={4}
                          className="border border-slate-300 bg-slate-50 text-xs text-slate-700 px-2 py-1 whitespace-nowrap align-top"
                        >
                          Número de la CIIU:
                        </td>
                      )}
                      <td className="border border-slate-300 px-2 py-1">
                        {code ? (
                          <>
                            <button
                              onClick={() => removeCode(code)}
                              className="mr-2 w-5 h-5 inline-flex items-center justify-center rounded bg-slate-100 border border-slate-300 text-slate-700 hover:bg-slate-200"
                              aria-label={`Quitar ${code}`}
                              title="Quitar"
                            >
                              ×
                            </button>
                            <span className="font-mono">{code}</span>
                          </>
                        ) : (
                          <span className="text-slate-300">&nbsp;</span>
                        )}
                      </td>
                      {idx === 0 && (
                        <td
                          rowSpan={4}
                          className="border border-slate-300 bg-slate-50 text-xs text-slate-700 px-2 py-1 whitespace-nowrap align-top"
                        >
                          Descripción
                        </td>
                      )}
                      <td className="border border-slate-300 px-2 py-1">
                        {desc ? (
                          <span className="text-sm leading-tight">{desc}</span>
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

        <ParametrosTabla annex={1} selectedUnion={selectedUnion} titulo="Parámetros Anexo 1" />
        <ParametrosTabla annex={2} selectedUnion={selectedUnion} titulo="Parámetros Anexo 2" />

        <footer className="text-center text-xs text-slate-600 pt-2 border-t border-slate-200">
          Desarrollado por Sergio Gonzales Espinoza
        </footer>
      </div>
    </div>
  );
}

function ParametrosTabla({
  annex,
  selectedUnion,
  titulo,
}: {
  annex: 1 | 2;
  selectedUnion: Set<string>;
  titulo: string;
}) {
  const params = useMemo(() => Object.keys(PARAM_INFO).filter((k) => PARAM_INFO[k].annex === annex), [annex]);
  return <TablaBase titulo={titulo} params={params} selectedUnion={selectedUnion} />;
}

function TablaBase({
  titulo,
  params,
  selectedUnion,
}: {
  titulo: string;
  params: string[];
  selectedUnion: Set<string>;
}) {
  return (
    <section className="border border-slate-300 rounded-md overflow-x-auto">
      <div className={TH}>{titulo}</div>
      <table className="w-full text-sm table-fixed border-collapse">
        <colgroup>
          <col style={{ width: "40%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "15%" }} />
        </colgroup>
        <thead className="bg-slate-100">
          <tr>
            <th className={TH + " text-left"} rowSpan={2}>Parámetro</th>
            <th className={TH + " text-center"} rowSpan={2}>VMA</th>
            <th className={TH + " text-center"} rowSpan={2}>N° muestra</th>
            <th className={TH + " text-center"} colSpan={2}>Tipo de muestra</th>
          </tr>
          <tr>
            <th className={TH + " text-center"}>Muestra lab. Acreditado</th>
            <th className={TH + " text-center"}>Muestra dirimente</th>
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
    </section>
  );
}
