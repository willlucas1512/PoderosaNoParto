import React from 'react';
import { PieChart, Pie, Tooltip, Cell, } from 'recharts';
import * as S from './styles.js'
import * as BiIcons from "react-icons/bi";

function DonnutTelaProgresso(props) {


    const COLORS = ['#6D3E5D', '#B24C4E', '#C79518'];

    var data = [
        {
            name: 'Respiração Superficial',
            value: props.graficoRespiracaoSuperficial

        },
        {
            name: 'Respiração Profunda',
            value: props.graficoRespiracaoProfunda

        },
        {
            name: 'Relaxamento',
            value: props.graficoRelaxamento

        }


    ]




    return (

        <S.Container>
            <S.LeftSide>
                <PieChart width={300} height={300} >
                    <Pie
                        dataKey={data.value}
                        isAnimationActive={true}
                        data={data}


                        label={
                            { fontSize: '25px' }
                        }
                        innerRadius={60}
                        outerRadius={110}
                        legend={
                            { position: 'bottom' }
                        }>
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip />


                </PieChart>
            </S.LeftSide>
            <S.Rigthside>
                <ul>

                    <p>
                        <a > <BiIcons.BiStop size={70} style={{ fill: '#6D3E5D' }} /></a>
                        <span >{'Respiração Superficial'}</span>

                    </p>
                    <p>
                        <a > <BiIcons.BiStop size={70} style={{ fill: '#B24C4E' }} /></a>
                        <span >{'Respiracao Profunda'}</span>

                    </p>
                    <p>
                        <a > <BiIcons.BiStop size={70} style={{ fill: '#C79518' }} /></a>
                        <span >{'Relaxamento'}</span>

                    </p>

                </ul>
            </S.Rigthside>
        </S.Container>
    );

}

export default DonnutTelaProgresso;
