import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

        const [firstName, setFirstName] = useState('');
        const [secondName, setSecondName] = useState('');
        const [relationship, setRelationship] = useState('');

        function handleRelation(){
            const name1 = firstName.toLowerCase();
            const name2 = secondName.toLowerCase();

            let finalname1 = '';
            let finalname2 = '';

            for(let i=0; i<name1.length; i++){
                if(!name2.includes(name1[i])){
                    finalname1 += name1[i];
                }
            }

            for(let i=0; i<name2.length; i++){
                if(!name1.includes(name2[i])){
                    finalname2 += name2[i];
                }
            }

            const finalLength = finalname1.length + finalname2.length;
            const flames = ['Siblings','Friends', 'Love', 'Affection', 'Marriage', 'Enemy']
            const relationshipIndex = finalLength % 6;
            setRelationship(flames[relationshipIndex]);
        }

        function handleClear(){
            setFirstName('');
            setSecondName('');
            setRelationship('');
            
        }
 

        return(
            <div id="main">
            <input
                type="text"
                data-testid="input1"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} 
            />
            <input
                type="text"
                data-testid="input2"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)} 
            />
            <button data-testid="calculate_relationship" onClick={handleRelation}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={handleClear}>Clear</button>

            <h3 data-testid="answer">{relationship}</h3>

            </div>
        )
}


export default App;
