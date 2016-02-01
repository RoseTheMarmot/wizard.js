# wizard.js
A basic Javascript class for a step-by-step workflow UI element using jQuery.

## Introduction
This wizard turns html markup like so:
`<div class="wizard" id="myWizard">
 	<div class="step">
 		bla bla bla
 		<button data-action="next">Next</button>
 		<button data-action="prev">Back</button>
 	</div>
 	<div class="step">
 		bla bla bla
 		<button data-action="cancel">Cancel</button>
 	</div>
</div>`

...into a "setup wizard" series of steps kind of thing.

To use just do something like:

`var myWizard = new Wizard('#myWizard');`

...and you should be all set to do things like `myWizard.percentComplete()`, `myWizard.onNext = function(){ //my stuff here }`, etc.

Things in each wizard with specific data-actions (next, prev, and cancel) are automatically all set up to do their thing.

*TIP: When attaching custom events, attach them to myWizard.parent This is because the wizard resets its html every cancel.* ie. `myWizard.parent.on(), no $("thing in wizard").on()`
