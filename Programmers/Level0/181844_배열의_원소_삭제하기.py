''' 
⭐️ 문제 정보 ⭐️
문제 : 181844 - 배열의 원소 삭제하기
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181844
'''

def solution(arr, delete_list):
    return list(filter(lambda x : not(x in delete_list), arr))
