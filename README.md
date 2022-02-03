- 구현한 방법과 이유에 대한 간략한 내용
- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
- 자세한 실행 방법


## 1. Toggle switch (Toggle.js)
  - 구현방법
    - `input` type checkbox를 사용해서 toggle switch를 구현하였습니다.
    - checkbox 커스텀을 해야 해서 input를 가리고 span 태그를 화면에 보여지게 하는 toggle switch로 만들기 위해 css를 사용했습니다.
    
  - 구현 이유
      - input checkbox를 기본 구조를 그대로 사용할 수 없기 때문에 input을 가리고 span 태그를 사용해 css를 사용해 커스텀 해서 바꿨습니다.
      -  input checked의 check의 여부에 따라 상태가 변화를 해야 한다고 생각했기에 useState를 사용해서 구현하였습니다.
  
  <br>

  - 구현하면서 어려웠던 점과 해결 방법 <br>
      1. input을 가리고 사용하기 위해 label를 연결하였지만 **체크했을때와 체크하지 않았을 경우의 색상과 슬라이더가 되는 원이 움직여야 하는데 움직이지 않는 문제**가 생겼습니다. 
         - label:before를 해서 할려고 했지만 되지 않았고 label를 부모로 만들고 그 안에 span 태그를 만들어 switch로 보이게 css를 넣어 만들어 해결하였습니다.
      2. check의 변화가 될때마다 바뀌어야 하는데 useState를 사용해도 check를 하고 나서 다시 클릭했을때 변화가 되지 않는 문제가 발생하였습니다.
        - onClick이 아니라 onChange를 해야했었고 checked도 상태가 계속 바뀌는 부분이였고 useState 기본값을 넣어 checked에 변화가 있을때마다 바뀔 수 있도록 변경하여 문제를 해결하였습니다.

  <br>

  - 자세한 실행 방법
     - `label`과 `input`을 id와 for로 서로 연결을 합니다.
     - `label`태그 자식으로 `input`, `span`을 넣고 span은 보여지는 input을 만듭니다. `input`은 안보이게 가립니다.
     - `label`속성에 `position: relative`로 하고 크기를 지정한다음, `span`으로 보여지는 input을 담당하기 때문에 css속성을 추가합니다.
     - `span` 백그라운드 색상을 넣고 `span::before`에 슬라이더를 할 원을 만듭니다.
     - `input:checked`될 경우 `span` 백그라운드 색상을 바꾸고 `span::before`에 transform을 사용해 위치를 이동합니다.
     - react 기능인 useState를 사용해서 체크 했을 경우와 안했을 경우를 만들고 `input:checked` 기본값에 off했을때를 기준으로 잡을 수 있도록 넣습니다.
     - `input`의 onChange에 삼항연산자를 사용해 toggle 기능이 될 수 있도록 변화를 줍니다.

<br>
<br>
<br>

## 2. Tab menu  (Tab.js)
  - 구현방법
    - tab menu의 수가 정해져 있어서 배열에 내용을 담아 상수로 저장한 후
    - 배열의 map을 돌면서 메뉴를 넣었습니다.
    - 클릭했을 때 바뀔 수 있도록 함수를 사용하고 useState를 사용하여 구현하였습니다.
    
  - 구현 이유 
    
  
  <br>

  - 구현하면서 어려웠던 점과 해결 방법 <br>
     
  <br>

  - 자세한 실행 방법
     