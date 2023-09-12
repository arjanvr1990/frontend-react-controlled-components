import React from 'react';
import './App.css';


function App() {
    const [userName, setUserName] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [formMessage, setMessage] = React.useState("");
    const [newsLetter, toggleNewsLetter] = React.useState(false);

    return (
        <>
            <form>
                <label htmlFor="form-username">
                    Naam:
                    <input
                        type="text"
                        id="form-username"
                        name="username"
                        value={userName}
                        placeholder="vul hier jouw naam in"
                        onChange={(e) => setUserName(e.target.value)}
                />
                </label>

                <label htmlFor="date-of-birth">
                    Geboortedatum:
                    <input
                        type="text"
                        id="form-date-of-birth"
                        name="date-of-birth"
                        value={dateOfBirth}
                        placeholder="dd-mm-yy"
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </label>

                <label htmlFor="form-message">
                    Uw bericht:
                    <input
                        type="text"
                        id="form-message"
                        name="message"
                        value={formMessage}
                        placeholder="type een leuk bericht"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>

                <label htmlFor="form-news-letter">
                    <input
                        type="checkbox"
                        id="form-news-letter"
                        name="news-letter"
                        checked={newsLetter}
                        onChange={() => toggleNewsLetter(!newsLetter)}
                    />
                Wilt u een op de hoogte gehouden worden?:
                </label>

                <button type="submit">
                    Versturen
                </button>

            </form>








        </>
    );
}

export default App;
