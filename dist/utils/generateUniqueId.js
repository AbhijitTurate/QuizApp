var generateUniqueId = function (_a) {
    var prefix = _a.prefix;
    return prefix + "-" + Math.random().toString(36).substring(2);
};
export { generateUniqueId };
