'''
⭐️ 문제 정보 ⭐️
문제 : 181842 - 부분 문자열
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181842
'''

def solution(str1, str2):
    # return int(str2.find(str1) != -1)
    return int(str1 in str2)
