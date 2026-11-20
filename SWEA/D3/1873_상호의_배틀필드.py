T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    H, W = map(int, input().split())
    grid = []
    for r in range(H):
        row = list(input().strip())
        for c, ch in enumerate(row):
            if ch in '^v<>':
                tr, tc, td = r, c, ch
        grid.append(row)
    N = int(input())
    user_input = input().strip()
    # 입력처리 완료 - 풀이 시작
    dirs = {'^': (-1, 0), '>': (0, 1), 'v': (1, 0), '<': (0, -1)}
    turn = {'U': '^', 'D': 'v', 'L': '<', 'R': '>'}
    # 사용자 입력을 하나씩 처리
    for cmd in user_input:
        if cmd in turn:
            td = turn[cmd]
            dr, dc = dirs[td]
            grid[tr][tc] = td
            nr, nc = tr + dr, tc + dc
            if (0 <= nr < H) and (0 <= nc < W) and grid[nr][nc] == '.':
                grid[tr][tc] = '.'
                grid[nr][nc] = td
                tr, tc = nr, nc
        else:
            #포탄 (S)
            br, bc, bd = tr, tc, td
            dr, dc = dirs[bd]
            while (0 <= br < H) and (0 <= bc < W):
                if grid[br][bc] == '*':
                    grid[br][bc] = '.'
                    break
                elif grid[br][bc] == '#':
                    break
                else:
                    br += dr
                    bc += dc
    print(f'#{test_case}', end=' ')
    for row in grid:
        print(''.join(row))
