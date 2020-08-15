import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [cleanPassword, setCleanPassword] = useState(password);
    const [alternateCase, setAlternateCase] = useState(false);
    const [adjectives, setAdjectives] = useState([]);
    const [nouns, setNouns] = useState([]);

    useEffect(() => {
        Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        Axios.get(`./data/en_adjectives.txt`)
            .then((response) => {
                setAdjectives(response.data.split(/\r?\n|\r/));
            })
            .catch((err) => {
                console.log("Couldn't load adjectives list!");
            });
        Axios.get(`./data/en_nouns.txt`)
            .then((response) => {
                setNouns(response.data.split(/\r?\n|\r/));
            })
            .catch((err) => {
                console.log("Couldn't load nouns list!");
            });

    }, []);

    useEffect(() => {
        if (!password) {
            generatePassword();
        }
    }, [nouns]);

    useEffect(() => {
        if (alternateCase) {
            setCleanPassword(password);
            setPassword(randomCase(password));
        } else {
            setPassword(cleanPassword);
        }
    }, [alternateCase]);

    function randomCase(str) {
        return str.split('').map(char => Math.random() < 0.5 ? char.toLowerCase() : char.toUpperCase()).join('');
    }

    function generatePassword() {
        const rand1 = Math.floor((Math.random() * adjectives.length) + 1);
        const rand2 = Math.floor((Math.random() * nouns.length) + 1);
        const adjective = adjectives[rand1] || '';
        const noun = nouns[rand2] || '';
        const newPassword = adjective + "%" + noun;

        setPassword(alternateCase ? randomCase(newPassword) : newPassword);
        setCleanPassword(newPassword);
    }

    function handleGenerateNewPassword() {
        generatePassword();    
    }

    function handleAlternateCaseChange() {
        setAlternateCase(!alternateCase);
    }

    function handleCopyToClipboard() {
      const el = document.createElement('textarea');
      el.value = password;
      el.setAttribute('readonly', '');
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.getSelection().removeAllRanges();
      document.body.removeChild(el);
    }

    return <>
        <div className="max-w-md mx-auto flex flex-col items-center">
            <div className="flex flex-row font-normal text-xl mb-4">
                {
                    password !== '' ?
                        <>
                            <span className="" id="#your-password">
                                {password}
                            </span>
                            <button className="text-blue-600 ml-4" onClick={handleCopyToClipboard}>
                                <i className="fas fa-copy"></i>
                            </button>
                        </>
                    :
                        <i class="far fa-clock animate-pulse"></i>
                }

            </div>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-auto mb-6" onClick={handleGenerateNewPassword}>
                Generate
            </button>
            <div className="bg-gray-200 w-full rounded-lg shadow-xl p-6">
                <p className="mb-4"><strong>Options</strong></p>
                <label htmlFor="alternate">
                    <input type="checkbox" value="alternate" name="alternate" className="mr-4"
                        onChange={handleAlternateCaseChange} checked={alternateCase}/>
                    Alternate case
                </label>
            </div>
        </div>
    </>;
}

export default PasswordGenerator;
