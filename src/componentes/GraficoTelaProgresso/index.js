

import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import * as S from './styles.js'



function GraficoTelaProgresso(props) {

    console.log(props.graficoRespiracaoSuperficial)


    var data = [
        {
            name: 'Respiração S.',

            pv: props.graficoRespiracaoSuperficial,

        },
        {
            name: 'Respiração P.',

            pv: props.graficoRespiracaoProfunda,

        },
        {
            name: 'Relaxamento',

            pv: props.graficoRelaxamento,

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
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        </S.Container>
    )

}


export default GraficoTelaProgresso;
