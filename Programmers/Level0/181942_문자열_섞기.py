'''
⭐️ 문제 정보 ⭐️
문제 : 181942 - 문자열 섞기
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181942
'''

def solution(str1, str2):
    answer = ''
    for i in range(0, len(str1)):
        answer += str1[i] + str2[i]
    return answer
