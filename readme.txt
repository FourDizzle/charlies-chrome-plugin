########################
  TO CUSTOMIZE
########################

1. Open settings.js
2. Replace "something funny" with whatever you want the search to be replaced with
3. Set MODIFY_FN to either 'showResultsFor' for google show on top of modified results:
            Showing results for <replaced the search term>
            Search instead for <original search>
   or set MODIFY_FN to 'didYouMean' for google to show on top of modified results:
            Did you mean: <original search>

NB: If you make changes to the settings.js or any other code after installation you have to navigate
    to chrome://extensions/ click the reload arrow on the "Google Search Enhancer"

########################
  TO INSTALL
########################
1. In the chrome browser navigate to chrome://extensions/
2. In the top righthand corner you should see a "Developer Mode" switch turn this on (the switch is
   blue when in the on position).
3. Click the "Load unpacked" button in the top left
4. Find and select the "search-replace-prank" folder you unzipped.
5. You will see the "Google Search Enhancer" added to the extensions. It should now be working.

########################
  USAGE
########################

When the user searches google for anything their search will be replaced with whatever you've setup
in the settings.js file. However the extension gives the user the ability to get their actual search
results by clicking the link with their original search query text.
