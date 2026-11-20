T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    N = int(input())
    grid = []
    for _ in range(N):
        grid.append(list(map(int, input().strip())))
    # 풀이 시작
    mid = N // 2
    answer = 0
    for offset in range(N):
        r = mid - offset
        for c in range(0 + offset, N - offset):
            answer += grid[r][c]
        if offset != 0:
            r = mid + offset
            for c in range(0 + offset, N - offset):
                answer += grid[r][c]
    print(f'#{test_case} {answer}')
