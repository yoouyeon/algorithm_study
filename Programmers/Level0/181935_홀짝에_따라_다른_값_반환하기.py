'''
⭐️ 문제 정보 ⭐️
문제 : 181935 - 홀짝에 따라 다른 값 반환하기
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181935
'''

def solution(n):
    if n % 2 == 0:
        # 제곱의 합
        return sum(num ** 2 for num in range(0, n + 1, 2))
    return sum(range(1, n + 1, 2))