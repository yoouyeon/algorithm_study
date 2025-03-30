'''
⭐️ 문제 정보 ⭐️
문제 : 120825 - 문자 반복 출력하기
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120825
'''

def solution(my_string, n):
    answer = ''
    for char in my_string:
        answer += char * n
    return answer
