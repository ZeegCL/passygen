import React from 'react';
import ReactDOM from 'react-dom';
import PasswordGenerator from './components/PasswordGenerator';

const App = () => {
  return (
    <div className="p-6 mx-auto">
      <div className="mb-6 text-center">
        <h1 className="text-blue-600 text-3xl">Passygen</h1>
        <p className="text-gray-700 text-sm">A semantic password generator</p>
      </div>

      <PasswordGenerator />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
