import '../css/Game.css';
import { animals } from '../data/AnimalsDb';

export default function Game(){
    return(
        <div className = 'Game'>
            <h1>ANIMAL MATCHING GAME</h1>
            <table border = '1'>
                <thead>
                    <tr>
                        <td width='25%'>Result</td>
                        <td width='25%'>Animal Name</td>
                        <td width='50%'>Select the Animal</td>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className = 'result'></td>
                        <td className = 'animal_name'></td>
                        <td className = 'images'>
                            <div className = 'grid'>
                            {animals.map((animal, index) => (
                                    <div
                                        key={index}
                                        className="grid-item"
                                        
                                    >
                                        <img
                                            src={require('../img/'+animal.img)}
                                            alt={animal.name}
                                            className="animal-image"
                                        />
                                    </div>
                                ))}
                               
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
        </div>
    );
}