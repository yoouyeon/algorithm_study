"""
⭐️ 문제 정보 ⭐️
문제 : 151 - Reverse Words in a String
레벨 : Medium
링크 : https://leetcode.com/problems/reverse-words-in-a-string/
"""

class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        return(' '.join(reversed(s.split())))