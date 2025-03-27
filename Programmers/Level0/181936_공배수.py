'''
⭐️ 문제 정보 ⭐️
문제 : 181936 - 공배수
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181936
'''

def solution(number, n, m):
	return 1 if number % n == 0 and number % m == 0 else 0