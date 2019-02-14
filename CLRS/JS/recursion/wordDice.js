/*
    Problem:
    Given a word of length n, and n six-sided dice with a character in each side,
    find out if this word is constructible by the set of given dice.

    One possible solution:
    Recursive with backtracking might work
*/

/*
struct dice {
    int id;
    set sides;
    dice(int i, set s) : id(i), sides(s) { }
};

bool IsWordConstructableFromDice(string st, int indx, unordered_set S, const vector& dice) {
    if (indx >= st.length()) return true;
    
    for (auto e : dice) {
        if (S.find(e.id) == S.end() && e.sides.find(st[indx]) != e.sides.end()) {
            S.insert(e.id);
            if (IsWordConstructableFromDice(st, indx + 1, S, dice))
                return true;
            S.erase(e.id);
        }
    }
    return false;
}

bool IsWordConstructableFromDice(string st, vector dice) {
    return IsWordConstructableFromDice(st, 0, unordered_set{}, dice);
}

int main(int argc, char* argv[]) {
    bool bOk = IsWordConstructableFromDice("ABCDEF", vector {
        dice(0, set{ 'A', 'X', 'Y', 'Z', 'W', 'M'}),
        dice(2, set{ 'F', 'C', 'Y', 'Z', 'W', 'M'}),
        dice(4, set{ 'A', 'X', 'D', 'Z', 'W', 'M'}),
        dice(1, set{ 'B', 'X', 'Y', 'Z', 'W', 'M'}),
        dice(5, set{ 'E', 'F', 'Y', 'Z', 'W', 'M'}),
        dice(3, set{ 'A', 'X', 'F', 'Z', 'W', 'M'})
    });
    return 0;
}
*/
