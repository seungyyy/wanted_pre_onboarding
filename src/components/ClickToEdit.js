import styled from "@emotion/styled";
import { useState, useEffect, useRef } from 'react';

const ClickToEdit = () => { 

  const [inputText, setInputText] = useState({
    author: '김코딩',
    age: 20,
    touched: false,
  });

  const prevText = usePrevious(inputText);

  const ChangeStatehandler = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
      touched: false,
    });
  };

  const blurHandler = (e) => {
    e.target.style.verticalAlign = 'top';
    e.target.style.paddingBottom = '1.1em';
    e.target.style.height = 'auto';
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
      touched: true,
    });
  };

  const focusHandler = (e) => { 
    e.target.style.verticalAlign = 'middle';
    e.target.style.paddingBottom = '0';
    e.target.style.height = '37px';
  }

  function usePrevious(state) { 
    const ref = useRef(state);
    useEffect(() => { 
      ref.current = state;
    }, [state]);
    return ref.current;
  }

  return (
    <Container>
      <h2>ClickToEdit</h2>
      <div className="name-inp">
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          name="author"
          value={inputText.author}
          onChange={ChangeStatehandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
        ></input>
      </div>
      <div className="age-inp">
        <label htmlFor="age">나이</label>
        <input
          type="text"
          id="age"
          name="age"
          value={inputText.age}
          onChange={ChangeStatehandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
        ></input>
      </div>
      {inputText.touched === false ? (
        <p className="txt">
          이름 {prevText.author} 나이 {prevText.age}
        </p>
      ) : (
        <p className="txt">
          이름 {inputText.author} 나이 {inputText.age}
        </p>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 8em;
  padding: 0 3em;
  .age-inp {
    margin: 1.5em 0;
  }
  .age-inp,
  .name-inp,
  .txt {
    text-align: center;
  }
  #age,
  #name {
    width: 150px;
    margin-left: 10px;
    text-align: center;
    vertical-align: top;
    box-sizing: border-box;
    padding-bottom: 1.1em;
  }
  .txt {
    font-size: 20px;
  }
`;

export default ClickToEdit;