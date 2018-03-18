const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'declaration-block-no-shorthand-property-overrides': ['lower', _THROW.WARNING],
    },
}