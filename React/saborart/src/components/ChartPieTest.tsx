import { Pie, PieChart, PieLabelRenderProps, PieSectorShapeProps, Sector, PieSectorDataItem, Tooltip, TooltipIndex } from 'recharts';
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
const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}: PieSectorDataItem) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
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

export default function CustomActiveShapePieChart({
  isAnimationActive = true,
  defaultIndex = undefined,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}) {

  return (
    <>
      <div className="vk-cor p-1 mb-5 ">
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
              activeShape={renderActiveShape}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
            />
            <Tooltip content={() => null} defaultIndex={defaultIndex} />
            <RechartsDevtools />
          </PieChart>
        </div>
      </div>
    </>
  );
}