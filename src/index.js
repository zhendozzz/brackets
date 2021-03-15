module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        const element = bracketsConfig[i];
        const elementForSearch = element[0] + element[1];
        while (str.indexOf(elementForSearch) != -1) {
            str = str.replace(elementForSearch, '');
            i = -1;
        }
    }
    return str.length == 0;
}
