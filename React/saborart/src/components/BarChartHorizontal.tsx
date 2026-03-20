import { BarChart, Bar, XAxis, Rectangle, ResponsiveContainer, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useId } from "react";
import { type BarRectangleItem } from "recharts/types/cartesian/Bar";


// #region Sample data
const data = [
    {
        name: 'Jan',
        Quant: 800
    },
    {
        name: 'Fev',
        Quant: 1090
    },
    {
        name: 'Mar',
        Quant: 1300
    },
    {
        name: 'Abr',
        Quant: 1400
    },
    {
        name: 'Mai',
        Quant: 1600
    },
    {
        name: 'Jun',
        Quant: 1900
    },
];
function BarGradient(props: BarRectangleItem) {
    const id = useId();
    const gradientId = `gradient-${id}`;
    const clipPathId = `clipPath-${id}`;

    return (
        <>
            <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="100%">
                    <stop offset="15%" stopColor="#BAD4FB" />
                    <stop offset="98%" stopColor="#3E65A1" />
                </linearGradient>

                <clipPath id={clipPathId}>
                    <Rectangle {...props} />
                </clipPath>
            </defs>

            <rect
                x={props.x}
                width={props.width}
                height={props.background?.height}
                fill={`url(#${gradientId})`}
                y={props.background?.y}
                clipPath={`url(#${clipPathId})`}
            />
        </>
    );
}
// #endregion
const BarChartHorizontal = () => {
    return (
        <>
            <div className="vk-cor">

                <span className=" fs-6 yr-font-arimo-regular d-block ms-4 mt-2">Quantidade de Vendas Semestral</span>
                <span className="fs-6 d-block yr-font-arimo-regular yr-cor-subtitulo-clientes ms-4 mb-2">Evolução das vendas nos últimos 6 meses</span>
                <div className='d-flex justify-content-center mb-3 me-3'>
                    <BarChart
                        style={{ width: '100%', maxWidth: '700px', height: '485px', aspectRatio: 1.618 }}
                        responsive
                        data={data}
                        layout='vertical'
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis width="auto" />
                        <YAxis dataKey="name"  type="category"  />
                        <Tooltip />
                        <Bar dataKey="Quant" shape={BarGradient} activeBar={BarGradient} radius={[0, 10, 10, 0]} />
                        <RechartsDevtools />
                    </BarChart>
                </div>
            </div>
        </>
    );
};

export default BarChartHorizontal;