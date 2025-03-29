'''
⭐️ 문제 정보 ⭐️
문제 : 181943 - 문자열 겹쳐쓰기
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181943
'''

def solution(my_string, overwrite_string, s):
    return my_string[:s] + overwrite_string + my_string[s + len(overwrite_string):]
