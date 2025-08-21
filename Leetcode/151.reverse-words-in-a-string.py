"""
[151] Reverse Words in a String
"""

class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        return(' '.join(reversed(s.split())))