'''
⭐️ 문제 정보 ⭐️
문제 : 181839 - 주사위 게임 1
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181839
'''

def solution(a, b):
    is_a_odd = a % 2 != 0
    is_b_odd = b % 2 != 0
    
    if (is_a_odd and is_b_odd):
        return a ** 2 + b ** 2
    if (not(is_a_odd) and not(is_b_odd)):
        return abs(a - b)
    return 2 * (a + b)
