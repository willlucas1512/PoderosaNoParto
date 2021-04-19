

import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import * as S from './styles.js'



function GraficoTelaProgresso(props) {

    console.log(props.graficoRespiracaoSuperficial)


    var data = [
        {
            name: 'Respiração S.',

            atividades: props.graficoRespiracaoSuperficial,

        },
        {
            name: 'Respiração P.',

            atividades: props.graficoRespiracaoProfunda,

        },
        {
            name: 'Relaxamento',

            atividades: props.graficoRelaxamento,

        },


    ];
    return (
        <S.Container>

            <ResponsiveContainer width="55%" height="55%">
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
                    <Bar dataKey="atividades" fill="#6D3E5D" background={{ fill: '#FFF' }} />
                </BarChart>
            </ResponsiveContainer>
        </S.Container>
    )

}


export default GraficoTelaProgresso;
