import styled from "@emotion/styled";
import { useState } from 'react';

const Tab = () => { 

  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: 'Tab1', content: 'ONE' },
    { name: 'Tab2', content: 'TWO' },
    { name: 'Tab3', content: 'THREE' }
  ];

  const handelerSelectTab = (index) => {
    setCurrentTab(index);
  };

  return (
    <Container>
      <h2>Tab</h2>
      <nav>
        <Ul>
          <li>
            <div className="tab-empty"></div>
          </li>
          {menuArr.map((el, index) => {
            return (
              <li key={index} onClick={() => handelerSelectTab(index)}
                className={currentTab === index ? "current tab-menu" : "tab-menu"}>
                {el.name}
              </li>
            )
          })}
        </Ul>
      </nav>
      <Text>Tab menu {menuArr[currentTab].content}</Text>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3em;
  padding: 0 3em;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
  justify-content: center;
  .tab-menu {
    border: none;
    padding: 1.5em 14em 1.5em 1.5em;
    cursor: pointer;
    background: #e0e0e0;
    font-weight: bold;
    color: gray;
  }
  .current.tab-menu {
    color: #fff;
    background: #4900ce;
  }
  .tab-empty {
    height: 70px;
    padding: 0 1em;
    background: #e0e0e0;
  }
`;

const Text = styled.p`
  margin-top: 2em;
  text-align: center;
`;

export default Tab;

