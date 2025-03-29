'''
⭐️ 문제 정보 ⭐️
문제 : 120815 - 피자 나눠 먹기 (2)
레벨 : Unknown
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120815
'''

import math

def lcm(a, b):
    return a * b // math.gcd(a, b)

def solution(n):
    return lcm(n, 6) // 6
