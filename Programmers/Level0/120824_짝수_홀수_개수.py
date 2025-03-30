'''
⭐️ 문제 정보 ⭐️
문제 : 120824 - 짝수 홀수 개수
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120824
'''

def solution(num_list):
    answer = [0, 0]

    for num in num_list:
        if num % 2 == 0:
            answer[0] += 1
        else:
            answer[1] += 1
        
    return answer
