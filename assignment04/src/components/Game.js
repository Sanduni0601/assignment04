import '../css/Game.css';
import { animals } from '../data/AnimalsDb';
import React,{useState,useEffect} from 'react';

export default function Game(){
    const [randomAnimal, setRandomAnimal] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * animals.length);
        setRandomAnimal(animals[randomIndex].name);
    }, []);

    const handleAnimalClick = (selectedAnimal) => {
        setResult(selectedAnimal === randomAnimal ? "WIN" : "LOSE");
    };

    return(
        <div className = 'Game'>
            <h1>ANIMAL MATCHING GAME</h1>
            <table border = '1'>
                <thead>
                    <tr>
                        <td width='25%'>Result</td>
                        <td width='25%'>Animal Name</td>
                        <td width='40%'>Select the Animal</td>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className = 'result'>
                        <h2 style={{ color: result === "WIN" ? "green" : "red" }}>
                                {result || ""}
                            </h2>
                        </td>
                        <td className = 'animal_name'>
                        <h3>{randomAnimal}</h3>
                        </td>
                        <td className = 'images'>
                            <div className = 'grid'>
                            {animals.map((animal, index) => (
                                    <div
                                        key={index}
                                        className="grid-item"
                                        onClick={() => handleAnimalClick(animal.name)}
                                        
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