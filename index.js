module.exports = {
    extends: [
        './rules/core/property-no-unknown/rule',
    ].map(require.resolve)
};