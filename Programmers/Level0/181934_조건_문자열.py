'''
⭐️ 문제 정보 ⭐️
문제 : 181934 - 조건 문자열
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181934
'''

def solution(ineq, eq, n, m):
    return int(eval((str(n) + ineq + eq + str(m)).replace('!', '')))

