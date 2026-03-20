import { useState, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
  { name: 'Segunda', FaturamentoBruto: 2850, Gastos: 1200, Lucros: 1650 },
  { name: 'Terça', FaturamentoBruto: 3450, Gastos: 1600, Lucros: 1850 },
  { name: 'Quarta', FaturamentoBruto: 3980, Gastos: 1880, Lucros: 2100 },
  { name: 'Quinta', FaturamentoBruto: 4250, Gastos: 2200, Lucros: 2050 },
  { name: 'Sexta', FaturamentoBruto: 5680, Gastos: 3030, Lucros: 2650 },
  { name: 'Sábado', FaturamentoBruto: 7120, Gastos: 3770, Lucros: 3350 },
  { name: 'Domingo', FaturamentoBruto: 8200, Gastos: 4050, Lucros: 4150 },
];
// #endregion

const LINE_COLORS: Record<string, string> = {
  FaturamentoBruto: '#9abff7',
  Gastos: '#f0b7d9',
  Lucros: '#d6a8e9',
};

const DEFAULT_OPACITY: Record<string, number> = {
  FaturamentoBruto: 1,
  Gastos: 1,
  Lucros: 1,
};

export default function ChartLine() {

  const [opacity, setOpacity] = useState(DEFAULT_OPACITY);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleMouseEnter = useCallback((o: { dataKey?: string | number | ((obj: unknown) => unknown) }) => {
    const { dataKey } = o;
    if (typeof dataKey === 'string') {
      setOpacity(prev => ({ ...prev, [dataKey]: 0.5 }));
      setActiveKey(dataKey);
    }
  }, []);

  const handleMouseLeave = useCallback((o: { dataKey?: string | number | ((obj: unknown) => unknown) }) => {
    const { dataKey } = o;
    if (typeof dataKey === 'string') {
      setOpacity(prev => ({ ...prev, [dataKey]: 1 }));
      setActiveKey(null);
    }
  }, []);

  return (
    <>
      <div className="vk-cor p-1">

        <span className=" fs-6 yr-font-arimo-regular d-block ms-4 mt-2">Faturamento, Gastos e Lucro </span>
        <span className="fs-6 d-block yr-font-arimo-regular yr-cor-subtitulo-clientes ms-4 mb-2">Análise financeira semanal</span>
        <div className='me-3'>
          <LineChart
            style={{ width: '100%', height: '460px', maxHeight: '460px', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            {Object.entries(LINE_COLORS).map(([key, color]) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={color}
                strokeOpacity={opacity[key]}
                strokeWidth={3}
                dot={{ r: 5, strokeWidth: 3, fill: color }}
                activeDot={{ r: 6, strokeWidth: 3 }}
                zIndex={activeKey === key ? 10 : undefined}
              />
            ))}
          </LineChart>
        </div>
      </div>
    </>
  );
}