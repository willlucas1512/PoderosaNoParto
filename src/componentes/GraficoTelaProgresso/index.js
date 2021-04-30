import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import * as S from './styles.js'


function GraficoTelaProgresso(props) {

    var data = [
        {
            name: 'Respiração S.',
            Atividades_por_Período: props.graficoRespiracaoSuperficial

        },
        {
            name: 'Respiração P.',
            Atividades_por_Período: props.graficoRespiracaoProfunda

        },
        {
            name: 'Relaxamento',
            Atividades_por_Período: props.graficoRelaxamento

        }


    ];
    return (
        <S.Container>

            <ResponsiveContainer width="70%" height="85%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend marginLeft="20px" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="Atividades_por_Período" fill="#6D3E5D" background={{ fill: '#FFF' }} />
                </BarChart>
            </ResponsiveContainer>
        </S.Container>
    )

}


export default GraficoTelaProgresso;
