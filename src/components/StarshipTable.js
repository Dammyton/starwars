import React from 'react';
import { Table } from 'react-bootstrap';

function StarshipTable(props) {
    return (
        <div id="character-table">
            <h3 className="pt-5 mt-3 text-white">Starships Collection</h3>
            <hr className="divide mb-4"/>
        <div className="table-responsive">
            <Table id="table" hover striped>
                <thead id="character-table-header">
                    <tr>
                        <th className="cell-name">Name</th>
                        <th className="cell-model">Model</th>
                        <th className="cell-manfc">Manufacturer</th>
                        <th className="cell-cost">Cost</th>
                        <th className="cell-cargocpa">Cargo Capacity</th>
                        <th className="cell-class">Class</th>
                    </tr>
                </thead>
                <tbody id="character-table-body">
                    {props.starshipTable.map((starship, index) => (
                        <tr key={index}>
                            <td className="cell-name">{starship.name}</td>
                            <td className="cell-model">{starship.model}</td>
                            <td className="cell-manfc">{starship.manufacturer}</td>
                            <td className="cell-cost">{ Number(starship.cost_in_credits).toLocaleString()}</td>
                            <td className="cell-cargocpa">{ Number(starship.cargo_capacity).toLocaleString()}</td>
                            <td className="cell-class">{starship.starship_class}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default StarshipTable;