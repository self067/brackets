module.exports = function check(str, bracketsConfig) {
    // console.log(str, bracketsConfig);
    if (
        !str ||
        str.length < 2 ||
        str.length % 2 ||
        !bracketsConfig ||
        bracketsConfig.length < 1
    )
        return false;

    const ar = str.split("");
    const stack = [];

    for (let elem = 0; elem < ar.length; elem++)
        for (let i = 0; i < bracketsConfig.length; i++)
            if (
                ar[elem] === bracketsConfig[i][1] &&
                stack[stack.length - 1] === bracketsConfig[i][0]
            )
                stack.pop();
            else if (ar[elem] === bracketsConfig[i][0]) stack.push(ar[elem]);

    if (stack.length > 0) return false;
    return true;
};

// check('[]()(', [['(', ')'], ['[', ']']])
