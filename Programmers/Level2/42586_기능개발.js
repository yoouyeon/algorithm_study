/* 
⭐️ 문제 정보 ⭐️
문제 : 42586 - 기능개발
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42586
*/

function solution(progresses, speeds) {
  let answer = [];
  let front = 0; // 현 시점 배포되어야 하는 작업
  let day = 0;

  while (front < progresses.length) {
    // frontProgress를 배포하기 위해서 필요한 일 수
    const requiredDay = Math.ceil((100 - progresses[front]) / speeds[front]);
    // requiredDay와 day중 큰 값으로 업데이트해준다 (frontProgress를 배포하기 위해서 배포 없이 하루를 보낼 수 있음)
    day = Math.max(requiredDay, day);
    let deployCnt = 1;
    while (++front < progresses.length) {
      if (progresses[front] + speeds[front] * day < 100) {
        // 오늘 다음 작업도 함께 배포할 수 없다면 넘어간다
        break;
      }
      // 함께 배포해주기
      deployCnt++;
    }
    answer.push(deployCnt);
  }
  return answer;
}
