'''
⭐️ 문제 정보 ⭐️
문제 : 120812 - 최빈값 구하기
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120812
'''

import statistics

def solution(array):
    mode = statistics.multimode(array)
    return -1 if len(mode) != 1 else mode[0]
