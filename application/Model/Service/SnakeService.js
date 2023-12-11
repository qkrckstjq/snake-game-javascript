import { classList } from '../Domain/Enums/ClassList.js';

const SnakeService = {
    checkOver : () => {
        if((x > 35 || y > 29 || x < 0 || y < 0) || position[y].childNodes[x].classList.contains('snake')) {//벽, 자기자신의 몸통에 충돌시 over함수 작동
            isModal = 1 //모달창의 상태변수
            clearsetinterval.forEach(intervals => clearInterval(intervals)); //현재 실행중인 모든 setInterval 종료
            state.right = 0, state.left = 0, state.up = 0, state.down = 0;   //재시작을 위해 모든 진행방향의 상태 초기화
            onX = 10;                                                        //초기좌표X 초기화
            onY = 15;                                                        //초기좌표Y
            for(let i = 0; i < snake.length-1; i++){                         //각좌표의 정보를 담은 배열의 맨마지막을 제외한 모든 좌표들 snake클래스 제거
                position[snake[i][0]].childNodes[snake[i][1]].classList.toggle('snake');
            }
            snake = [[snake[snake.length-1][0], snake[snake.length-1][1]]];  //snake배열에 맨마지막 좌표만을 남기는 걸로 세팅
            document.querySelector('.gameover__modal__wrapper').style.display = 'block'; //모달 창 화면에 display:block
            sending_point = dp_point                                         //서버로 보내기위한 점수 유지
            speed == 40                                                      //설정되어있던 속도에 따라 하드, 노말 모드 표시
            ? document.getElementsByClassName('result__point')[0].textContent = `점수 : ${dp_point}점 (하드)`
            : document.getElementsByClassName('result__point')[0].textContent = `점수 : ${dp_point}점 (노말)`;
            dp_point = 0;
            document.getElementsByClassName('dp__point')[0].textContent = `점수 : ${dp_point}점` //점수판과 dp_point를 0으로 동시 초기화
            document.body.style.animation = 'shaking 0.2s'                   //화면에 진동효과 css 부여
            table.className = ''                                             //점수에 따라 변하는 table의 클래스이름 초기화
            return true                                                      //setinterval 동작에서는 필요없지만 동기적으로 작동하는 움직임에서는 over가 작동시 true를 리턴
        }
    }
}