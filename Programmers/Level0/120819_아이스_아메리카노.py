'''
⭐️ 문제 정보 ⭐️
문제 : 120819 - 아이스 아메리카노
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120819
'''

ice_americano = 5500

def solution(money):
    return [money // ice_americano, money % ice_americano]
