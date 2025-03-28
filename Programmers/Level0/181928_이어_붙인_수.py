'''
⭐️ 문제 정보 ⭐️
문제 : 181928 - 이어 붙인 수
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181928
'''

def solution(num_list):
    odd_str = ''
    even_str = ''
    
    for num in num_list:
        if (num % 2 == 0):
            even_str += str(num)
        else:
            odd_str += str(num)
    
    return int(odd_str) + int(even_str)
