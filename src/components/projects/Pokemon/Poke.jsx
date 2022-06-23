import React from 'react'
import './Pokemon.css'
import { BarChart, Bar, XAxis, Tooltip } from 'recharts';

export default function Poke({ id, name, image, type, hp, attack, defense, specialA, specialD, speed, type1, ability }) {

    const data = [
        {name: 'HP', Stats: hp, amt: hp},
        {name: 'Attack', Stats: attack},
        {name: 'Defense', Stats: defense},
        {name: 'Speed', Stats: speed},
    ]

    function CustomTooltip({ payload, label, active }) {
        if (active) {
            return (
                <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                </div>
            );
            }
        
            return null;
        }

    const renderLineChart = (
        <BarChart width={360} height={120} data={data}>
        <XAxis dataKey="name" stroke="rgba(0, 0, 0, .5)" />
        <Tooltip cursor={{fill: 'rgba(0, 0, 0, 0)'}} content={<CustomTooltip />}/>
        <Bar dataKey="Stats" fill="rgba(0, 0, 0, .5)" barSize={50} />
        </BarChart>
        );

		const cName = name;
		const nameCapitalized = cName.charAt(0).toUpperCase() + cName.slice(1)
		const pName = nameCapitalized;
	
    return (
        <div className="Poke">
					<div className="pokeTop">
            	<img className='pokemonImg' src={image} alt="" />
						<div className="pokeTopRight">
							<p className="pokeName">{pName}</p>
							<p>Type: {type1}</p>
							<p>Ability: {ability}</p>
						</div>
					</div>
            {renderLineChart}
        </div>
    )
}
