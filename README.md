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

*TIP: When attaching custom events, attach them to myWizard.parent because the wizard resets its html every cancel.* ie. `myWizard.parent.on(), not $("thing in wizard").on()`

## Properties
**Parent** - 
Example: `myWizard.parent`
Parent holds a jQuery object of the whole wizard.

## Functions
**Init** - 
Example: `myWizard.init({reset: false, startAt: 0});` This function gathers all the steps for the wizard (except any with the class 'disabled') and sets the approprate visibility for each one. By default the first non-disabled step is visible, but this can be specified via the startAt parameter in the config object. Setting reset to true in the config object resets the wizard to contain the html it had when it was first initialized. Passing an html string in place of a true/false statement will reset the wizard html contents to that string. This will not change the saved initial state however. To reset the saved initial state, do the following `myWizard.initState = 'html string';`.

**Next** - 
Example: `myWizard.next();`
Advances one frame in the wizard if there is a frame left. Otherwise does nothing.


**Prev** - 
Example: `myWizard.prev();`
Goes back one fram in the wizard if there is a previous frame. Otherwise does nothing

**Step** - 
Example: `myWizard.step(2);`
Moves the wizard to the specified step. *Note: the wizard steps are indexed on 0 based indexing.*

**Cancel** - 
Example: `myWizard.cancel();`
Resets the wizard to it's inital state.

**getStep** - 
Example: `myWizard.getStep(2);`
Returns a jQuery object of the specified step, if it exists. If it does not exist, returns null. *Note: the wizard steps are indexed on 0 based indexing.*

**precentComplete** - 
Example: `var precentComplete = mywizard.precentComplete();`
Returns an integer value between 0 and 100 inclusive of based on the step the user is currently on and total number of steps.

**Disable** - 
Example: `myWizard.disable(2);` or `myWizard.disable('.myClass');`
Disables the given step or any step matching a selector string, if it exists. The disabled step will be removed from the wizard workflow. 

**Enable** - 
Example `myWizard.enable(2);` or `myWizard.enable('.myClass');`
Enables the given step or any step matching a selector string, if it exists. The enabled step will be added to the wizard workflow. 

## Client Assigned Functions
Example: `myWizard.onCancel = function(){}`

There are several wizard functions that are ment to be assigned by the client. These functions will contain actions you want to happen at different points in the Wizard workflow. They are:
- **onNext** - called after every .next call, unless the wizard has reached the end of the steps
- **onPrev** - called after every .prev call, unless the wizard is at the start of all the steps
- **onStep** - called after every .step call, if the step exists 
- **onChange** - called every .next, .prev, and .step call if the step exists 
- **onInit** - called after every .init call 
- **onEnd** - called after .next if the wizard has reached the end of all the steps 
- **onBeforeStart** - called after .prev is the wizard is at the start of all the steps 
- **onCancel** - called after every .cancel call 
- **onEnable** - called after every .enable
- **onDisable** - called after every .disable

