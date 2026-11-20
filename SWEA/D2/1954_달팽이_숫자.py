T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    N = int(input())
    # 풀이 시작
    grid = [[0] * N for _ in range(N)]
    dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    r, c, d = 0, 0, 0
    for num in range(1, N * N + 1):
        grid[r][c] = num
        nr = r + dirs[d][0]
        nc = c + dirs[d][1]
        if (nr < 0 or nr >= N) or (nc < 0 or nc >= N) or grid[nr][nc] != 0:
            d = (d + 1) % 4
            nr = r + dirs[d][0]
            nc = c + dirs[d][1]
        r, c = nr, nc
    print(f'#{test_case}')
    for row in grid:
        print(*row)
