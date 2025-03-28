'''
⭐️ 문제 정보 ⭐️
문제 : 181841 - 꼬리 문자열
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181841
'''

def solution(str_list, ex):
    exclude_str_list = filter(lambda string : string.find(ex) == -1, str_list)
    return ''.join(exclude_str_list)
