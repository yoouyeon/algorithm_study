'''
⭐️ 문제 정보 ⭐️
문제 : 181938 - 두 수의 연산값 비교하기
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181938
'''

def solution(a, b):
    return max(int(str(a) + str(b)), 2 * a * b)