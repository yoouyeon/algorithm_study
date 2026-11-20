from itertools import combinations


# 풀이 1: 조합 완전탐색
def solve1(N, L, TK):
    answer = 0
    for cnt in range(1, N + 1):
        flag = False
        for comb in list(combinations(TK, cnt)):
            t_sum = 0
            k_sum = 0
            for t, k in comb:
                t_sum += t
                k_sum += k
            if k_sum <= L:
                flag = True
                answer = max(answer, t_sum)
        if not flag:
            break
    return answer


# 풀이 2: 부분집합 DFS + 가지치기
def solve2(N, L, items):
    best = 0

    def dfs(i, t_sum, k_sum):
        nonlocal best
        # 1. 가지치기: 칼로리가 이미 넘쳤으면 이 갈래는 버린다
        if k_sum > L:
            return

        # 2. 잎에 도착 (재료를 전부 결정함): 최고 점수 갱신하고 돌아간다
        if i >= len(items):
            best = max(best, t_sum)
            return

        # 3. i번 재료를 넣는 갈래
        dfs(i + 1, t_sum + items[i][0], k_sum + items[i][1])

        # 4. i번 재료를 안 넣는 갈래
        dfs(i + 1, t_sum, k_sum)

    dfs(0, 0, 0)
    return best


T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    N, L = map(int, input().split())
    items = []
    for _ in range(N):
        t, k = map(int, input().split())
        items.append((t, k))
    print(f'#{test_case} {solve2(N, L, items)}')
