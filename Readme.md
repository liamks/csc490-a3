# Assignment 3: JavaScript & AngularJS
**Due**: February 9th 6pm | *50 Points Total* | Weight: 15%

## Setup

1. Install nodeJS (if you haven't already)
2. [Download the Zip](https://github.com/liamks/csc490-a3/archive/master.zip) or clone this repo to your computer.
3. In the terminal navigate to `csc490-a3/` then run `npm install`. This will install all of `a3`'s dependencies.

**If you are new to AngularJS** I recommend reading [AngularJS' Conceptual Overview](https://docs.angularjs.org/guide/concepts) and watching the first few free videos on [egghead.io](https://egghead.io/technologies/angularjs?order=ASC) - they're short and very informative. If you hit dead ends google them first!

## Part 1: JavaScript *(10 Points)*

In the `js/` folder there are two files:

1. `q1.js` which contains two functions that you'll need to complete. 
2. `q1.test.js` which contains unit tests for the two functions from `q1.js`. Use the unit tests to understand what the two functions should do given different output. Do not motify the unit tests. To start the unit tests run `npm test`. The tests will re-run automatically when you've made a change to any of the files. This will run *all* the tests for A3. For now focus on getting the `stringProduct` and `stringInterpolate` tests to pass. Please note that when you run `npm test` a new browser window will open - the unit tests are run within this browser window - keep it open. Occasionally your tests will become slow, just restart `npm test`.

Todo:

1.  `stringProduct` *(5 Points)*
2.  `stringInterpolate` *(5 Points)*

I recommend using MDN's [JavaScript Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and [JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for reference.

## Part 2: AngularJS *(40 Points)*

You are going to complete an address book app using AngularJS.

This AngularJS app is split into 1) `app.js`, which does the initialization and routing, 2) `controllers` for each controller, 3) `services` for services/factories, 4) `templates` for templates/views and finally `tests` for unit tests. You're going to start with completing `services/addressBook.js`

### 2A: Services & addressBook.js *(10 Points)*

`services/addressBook.js` contains an Array `people` that contains the list of everyone in the address book (you're free to add more people to this list). You will complete the 5 functions in `addressBook` that currently do nothing. These functions either return people from the array (`filterByText`, `findById`), remove a person (`remove`) or add (`add`) and update an existing person (`update`). The unit tests for these functions are in `angular/tests/addressBook.unit.js`. To understand how these functions should work please read the unit tests.

Todo: 

1. Complete `addressBook.js` and ensure unit tests pass for both functions *(10 Points)*


### Controllers and Views

Now that you've completed `addressBook.js` it's time to connect the completed functions to the controller and ultimately the view. First we'll open the webapp - in your terminal, within `a3/angular` run `python -m SimpleHTTPServer 8000` then open a new browser tab and navigate to `http://0.0.0.0:8000`. If everything is working you should see a list of 5 people from your addressbook (or +/- 5 if you've added/removed some). If you don't you might have a syntax error that was introduced in the last section - check for errors in the web developer console.

#### 2B: Adding and Updating people *(10 Points)*

You'll will create two new routes `'/add'` and `'/update/:id'` and connect them to two contollers `addCtrl.js` and `updateCtrl.js` (you'll need to create these controllers/files as well). Make sure these new JavaScript files are added to `index.html`. Both of these can share the exact same template `/templates/form.html` (you'll need to create the form) - or you can create two templates if that's easier for you. The `/add` page should allow a user to add a new person, click `save` - this will add the person to the array of people and redirect the user back to the homepage. The update form should be populated with a specific user that you can update - when you click save it will update that individual and redirect back to the home page.

Todo:

1. Create 2 new routes (`'/add'` and `'/update/:id'`) and map them to their respective controllers and templates. *(1 Point)*
2. Create 2 new controllers `addCtrl.js` and `updateCtrl.js` and add references to them in `index.html. *(1 Point)*
3. Create 1 (or two) templates for the above controllers. *(2 Points)*
4. Ensure that each pages works as above (you'll need to connect both controllers with the `addressBook.js` service and ensure that once an person is added or updated, that the app redirect's the user to the homepage. [Read this for tips on redirection](https://docs.angularjs.org/guide/$location) *(4 Points)*
5. Adding 2 extra fields for people: 1) phone-number and 2) email address. These fields should appear in the add and update pages and should be viewable on the homepage. *(2 points)*


##### Navigating to add and update *(5 Points)*
On the `index.html` page please add a link to the `/add` page within the `<nav>` tag (e.g. `<nav><a href="#/add">+ Add Person</a></nav>`). To update a person you'll have to update `templates/home.html` and add a link to the update page just below the person's name. When you click on the update link for that person it will take you to update and the form will be populated with the person you're updating.

Todo:

1. Add link on homepage to `/add`. *(2 Points)*
2. Add link to each person's update page on homepage *(3 Points)*

#### 2C: Filtering People *(15 Points)*

If the user had a very large address book they'd want to be able to filter the list by typing in a few characters. To accomplish this you will add a filter input box in `templates/home.html` (right bellow the `<h1>` tag). You can use a plain `<input>` tag for user input. [Angular's documentation shows how to do filtering with an `ng-repeat` tag](https://docs.angularjs.org/api/ng/filter/filter). You'll need to create a [custom filter](https://docs.angularjs.org/tutorial/step_09) - you've already created the business logic for the filter in `addressBook.js` - now you'll need to connect it to the filter. You can either put the custom filter in `app.js` or if you're brave you can create a `filter.js` file.

1. Add a form to the homepage, for user to enter text. *(1 Point)*
2. Create a custom filter, for filter people by their names (filter must call `addressBook.filterByText`). *(9 Points)*
3. Connect form to `ng-repeat` (the repeater for listing people) with the filter. *(5 Points)*

## How to Ask Questions

Some of the above might be vague, or unclear. Please ask questions using the issues section of this repository.

## How to Submit

I'll be running the unit tests and walking through your app manually to see if the above works. To ensure everything works smoothly on my computer double check that everything works on your computer by restarting the python server and restarting the browser. Also re-run your unit tests. Once you've done that delete the `node_modules` folder and zip the a3 folder and email it to be before **February 9th at 6:00pm**. The name of the zipped folder should include your firstname and student id.



