describe('Wizard', function() {
    var Wizard = require('../src/wizard.spec.js');
    var wizard;

    beforeEach(function() {
        wizard = new Wizard();
    });

    it('fails', function() {
        expect(true).toBe(false);
    });
});