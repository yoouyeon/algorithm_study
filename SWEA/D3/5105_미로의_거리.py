from collections import deque

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    grid = []
    N = int(input())
    for r in range(N):
        line = list(map(int, input().strip()))
        for c, ch in enumerate(line):
            if ch == 2:
                start = (r, c, 0)
            elif ch == 3:
                end = (r, c)
        grid.append(line)
    # 입력처리완료 풀이 시작~!
    q = deque()
    q.append(start)
    visited = set()
    visited.add((start[0], start[1]))
    dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]
    answer = 0
    # bfs
    while q:
        cur_r, cur_c, cur_d = q.popleft()
        if (cur_r, cur_c) == end:
            answer = cur_d - 1
            break
        for dr, dc in dirs:
            nr, nc = cur_r + dr, cur_c + dc
            if (0 <= nr < N) and (0 <= nc < N) and (grid[nr][nc] == 0 or grid[nr][nc] == 3) and ((nr, nc) not in visited):
                q.append((nr, nc, cur_d + 1))
                visited.add((nr, nc))
    print(f'#{test_case} {answer}')
