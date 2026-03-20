import { Pie, PieChart, PieLabelRenderProps, PieSectorShapeProps, Sector } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: 'Chocolate', value: 19 },
  { name: 'Morango', value: 17 },
  { name: 'Pistache', value: 15 },
  { name: 'Limão', value: 13 },
  { name: 'Baunilha', value: 11 },
  { name: 'Manga', value: 10 },
  { name: 'Café', value: 9 },
  { name: 'Coco', value: 8 },
];

// #endregion
const RADIAN = Math.PI / 180;
const COLORS = ['#68463D', '#F6CBE5', '#769862', '#96EA7B', '#FDF2CD', '#f8e553', '#c29655', '#FFF2EA'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > ncx ? 'start' : 'end'} dominantBaseline="central">
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

const MyCustomPie = (props: PieSectorShapeProps) => {
  return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
};

export default function ChartPie({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <>
      <div className="vk-cor p-1 ">
        <div>
          <span className=" fs-6 yr-font-arimo-regular d-block ms-4 mt-2">Quantidade de Vendas por Produto </span>
          <span className="fs-6 d-block yr-font-arimo-regular yr-cor-subtitulo-clientes ms-4 mb-2">Distribuição de vendas por sabor</span>
        </div>
        <div className='d-flex justify-content-center'>
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            fill="#ffffff"
            dataKey="value"
            isAnimationActive={isAnimationActive}
            shape={MyCustomPie}
          />
          <RechartsDevtools />
        </PieChart>
      </div>
      </div>
    </>
  );
}