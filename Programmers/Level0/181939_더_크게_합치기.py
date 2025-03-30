'''
⭐️ 문제 정보 ⭐️
문제 : 181939 - 더 크게 합치기
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181939
'''

def solution(a, b):
    result1 = int(str(a) + str(b))
    result2 = int(str(b) + str(a))
    return result1 if result1 >= result2 else result2
