import '../css/Game.css';
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
                </table>
        </div>
    );
}