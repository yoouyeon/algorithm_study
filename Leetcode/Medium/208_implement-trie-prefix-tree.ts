/*
문제 : 208 - Implement Trie (Prefix Tree)
난이도 : Medium
링크 : https://leetcode.com/problems/implement-trie-prefix-tree/
태그 : Hash Table, String, Design, Trie
*/

// ANCHOR 2026.10.03 풀이 (22분 소요)
type Node = {
    value: string | null;
    children: Map<string, Node>;
    isEnd: boolean;
}

class Trie {
    root: Node;

    constructor() {
        this.root = {
            value: null,
            children: new Map(),
            isEnd: false,
        };
    }

    insert(word: string): void {
        let curr = this.root;
        word.split('').forEach((c) => {
            if (!curr.children.has(c)) {
                const newNode = {value: c, children: new Map(), isEnd: false};
                curr.children.set(c, newNode);
                curr = newNode;
            } else {
                curr = curr.children.get(c);
            }
        })
        curr.isEnd = true;
    }

    search(word: string): boolean {
        if (this.root.children.size <= 0) return false;
        let curr = this.root;
        for (const c of word) {
            if (!curr.children.has(c))
                return false
            else
                curr = curr.children.get(c);
        }
        return curr.isEnd;
    }

    startsWith(prefix: string): boolean {
        if (this.root.children.size <= 0) return false;
        let curr = this.root;
        for (const c of prefix) {
            if (!curr.children.has(c))
                return false
            else
                curr = curr.children.get(c);
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/*
개선 포인트

1. search와 startsWith는 마지막 return만 다르고 탐색이 같다 → 경로를 따라가 마지막 노드를 돌려주는 헬퍼로 분리
   - has + get 두 번 조회가 get 한 번으로 줄어든다
   - get()의 반환 타입(Node | undefined)이 if (!next) 검사로 좁혀져 strict 모드 타입 에러가 사라진다

    private find(s: string): Node | undefined {
        let curr = this.root;
        for (const c of s) {
            const next = curr.children.get(c);
            if (!next) return undefined;
            curr = next;
        }
        return curr;
    }

    search(word: string): boolean {
        return this.find(word)?.isEnd === true;
    }

    startsWith(prefix: string): boolean {
        return this.find(prefix) !== undefined;
    }

2. root.children.size <= 0 검사는 불필요 → 트리가 비어 있으면 첫 글자에서 get이 undefined라 어차피 false

3. insert는 "없으면 만든다"와 "자식으로 내려간다"를 분리하면 분기가 줄어든다

    insert(word: string): void {
        let curr = this.root;
        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, { value: c, children: new Map(), isEnd: false });
            }
            curr = curr.children.get(c)!;
        }
        curr.isEnd = true;
    }

4. value 필드는 쓰이지 않음 → 글자는 부모 children 맵의 키에 이미 있으므로 타입에서 빼도 된다
*/
