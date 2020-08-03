const stringPadFn = (str, spaces) => {
    const spacesToAdd = " ".repeat(spaces);
    return spacesToAdd + str.replace(/(\n)+/gm, `$&${spacesToAdd}`);
};

module.exports = stringPadFn;
