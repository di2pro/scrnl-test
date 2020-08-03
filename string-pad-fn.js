const stringPadFn = (str, spaces) => {
    return str.replace(/(\n)+/gm, `$&${" ".repeat(spaces)}`);
};

module.exports = stringPadFn;
