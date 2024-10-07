import { useState } from 'react';
import { upi } from './UpiHandles';
import img from '../assets/1.jpg'

const TypeAhead = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value; 
    setInputValue(value); 
    setSuggestions([]); 
    setError(''); 

    const invalidCharPattern = /[^a-zA-Z0-9._@-]/;

    

    if (invalidCharPattern.test(value)) {
      setError('Invalid character found.');
      return;
    }

    if (value[0].includes("@")) {
      setError('Multiple "@" characters are not allowed.');
      return;
    }

    const atIndex = value.indexOf('@');

    if (atIndex !== -1) {
      const charsAfterAt = value.slice(atIndex + 1);
      if (charsAfterAt.length === 0) {
        setSuggestions(upi);
      } else {
        const matches = upi.filter(handle => handle.toLowerCase().startsWith(charsAfterAt.toLowerCase()));
        setSuggestions(matches.length > 0 ? matches : ['No matching field found']);
      }
    }
  };

  const handleSelect = (suggestion) => {
    const val = inputValue.split('@')[0];
    if (suggestion !== 'No matching field found') {
      setInputValue(`${val}@${suggestion}`); 
      setSuggestions([]);
      setHighlightedIndex(-1);
      setError(''); 
    }
  };

  const handleKeyPress = (e) => {
    switch (e.key) {
      case "ArrowDown":
        setHighlightedIndex((prev) => {
          const newIndex = (prev + 1) % suggestions.length;
          if (suggestions.length > 0) {
            const suggestion = suggestions[newIndex];
            const val = inputValue.split('@')[0];
            setInputValue(`${val}@${suggestion}`);
          }
          return newIndex;
        });
         e.preventDefault(); 
        break;

      case "ArrowUp":
        setHighlightedIndex((prev) => {
          const newIndex = (prev - 1 + suggestions.length) % suggestions.length;
          if (suggestions.length > 0) {
            const suggestion = suggestions[newIndex];
            const val = inputValue.split('@')[0];
            setInputValue(`${val}@${suggestion}`);
          }
          return newIndex;
        });
         e.preventDefault(); 
        break;

      case "Enter":
      case "ArrowRight":
        if (highlightedIndex >= 0 && suggestions[highlightedIndex] !== 'No matching field found') {
          handleSelect(suggestions[highlightedIndex]);
        } else if (suggestions.length > 0) {
          handleSelect(suggestions[0]);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div style={{ maxWidth: '500px', height:"500px",margin: 'auto', textAlign:"center", padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', backgroundColor: 'pink' }}>
      
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        <img src={img} alt="" style={{height:"200px",width:"200px"}} />
      </div>
      <input
        type="text"
        value={inputValue}
        style={{ width: '400px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder='e.g. ak@'
        autoComplete='off'
      />
      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {error}
        </div>
      )}
      {suggestions.length > 0 && (
        <div style={{ marginTop: '10px', border: '1px solid #ccc', borderRadius: '4px', maxHeight: '150px', overflowY: 'auto'}}>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSelect(suggestion)}
              style={{ padding: '10px', cursor: 'pointer', backgroundColor: highlightedIndex === index ? '#ffdbe9' : '#fff', borderBottom: '1px solid #eee' }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeAhead;
