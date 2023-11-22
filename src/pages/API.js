import React, { useState } from "react";

export default function Search() {
    const [word, setWord] = useState("");
    const [responses, setResponses] = useState(null);
    const [hasResponse, setHasReseponse] = useState(false);

    const fetchDefinition = async () => {
        try {
            const response = await (await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)).json()
            setResponses(response);
            setHasReseponse(true);
        }
        catch (err){
            console.log(err.message);
        }
    }

    function Response() {
        if(!hasResponse) {
            return;
        }
        else {
            return (
                <div>
                    {responses.map((response) => (
                        <div>
                            <h1>{response.word}</h1>
                            <p>{response.phonetic}</p>
                            {response.meanings.map((meaning) => (
                                <div>
                                    <p><i>{meaning.partOfSpeech}</i></p>
                                    <ol>
                                        {meaning.definitions.map((definition) => (
                                            <li>{definition.definition}</li>
                                        ))}
                                    </ol>
                                    
                                </div>
                            ))}

                        </div>
                    ))}
                </div>
            );
        }
    }
    
    return (
        <div className = "outer">
            <h1>Dictionary API</h1>
            <input required="required" placeholder = "Enter word here" value = {word} onChange={(e) => setWord(e.target.value)}/>
            <button type = "submit" onClick = {fetchDefinition}>Search</button>
            <Response />
        </div>
    );
  }