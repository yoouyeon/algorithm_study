/* 
⭐️ 문제 정보 ⭐️
문제 : 42579 - 베스트앨범
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42579
*/

// NOTE : 반복이 너무 많아서 마음에 안듦
function solution(genres, plays) {
  const songMap = new Map(); // key: 장르, value: 음악 배열 ({id, play});
  for (let id = 0; id < genres.length; id++) {
    if (songMap.has(genres[id])) {
      songMap.set(genres[id], [
        ...songMap.get(genres[id]),
        { id, play: plays[id] },
      ]);
    } else {
      songMap.set(genres[id], [{ id, play: plays[id] }]);
    }
  }

  // 장르별 정렬
  const sortedSongs = [...songMap.values()].sort(
    (a, b) =>
      b.reduce((sb, cb) => sb + cb.play, 0) -
      a.reduce((sa, ca) => sa + ca.play, 0)
  );
  // 재생 횟수와 고유 번호별로 정렬해서 정답 생성
  let answer = [];
  sortedSongs.forEach((songs) => {
    // 정렬
    songs.sort((a, b) => {
      if (a.play !== b.play) return b.play - a.play;
      return a.id - b.id;
    });
    answer.push(songs[0].id);
    if (songs.length >= 2) {
      answer.push(songs[1].id);
    }
  });
  return answer;
}
