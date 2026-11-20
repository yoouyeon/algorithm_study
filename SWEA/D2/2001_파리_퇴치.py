T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    grid = []
    for _ in range(N):
        line = list(map(int, input().split()))
        grid.append(line)
    # 풀이 시작
    answer = 0
    # 1. 누적합 구하기
    psum = [[0] * (N + 1) for _ in range(N + 1)]
    for i in range(N):
        for j in range(N):
            psum[i + 1][j + 1] = grid[i][j] + psum[i][j + 1] + psum[i + 1][j] - psum[i][j]
    # 2. 잡을 수 있는 최대 파리의 수 구하기
    for i in range(N - M + 1):
        for j in range(N - M + 1):
            flies = psum[i + M][j + M] - psum[i + M][j] - psum[i][j + M] + psum[i][j]
            answer = max(answer, flies)
    print(f'#{test_case} {answer}')
