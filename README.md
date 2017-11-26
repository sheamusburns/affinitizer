# affinitizer
![icon](/resources/AffinitizerIcon.png?raw=true)
A simple automated clicker chrome extension for adding and removing 'group' members on Blackbaud's onCampus module manager pages. The way blackbaud makes you do this is by clicking on the items one at a time. No way to do it batch. This little tool looks through the HTML, finds all the items that need to be clicked on, and then autonomously does so, one at a time -- click, load, click, load, etc. Be careful though -- when you run the process, you need to wait until it's finished it's all done clicking and loading. 


## Configuration
Change line 4 in popup.js:

'if (parser.host !== 'gds.myschoolapp.com') { //your domain for blackbaud instance goes here' 

to match your school's myschoolapp.com domain. This will make it so you only get the options to add and remove folks when you're on your school's onCampus site.

If you click when not on your school's site:
![wrong site](/resources/WrongSite.png?raw=true)

When you are on your school's site:
![correct site](/resources/AffinitizerView.png?raw=true)


## Installation
Download files, open in your favorite text editor, then make the edit mentioned in the configuration section. Head over to Chrome://extensions in Chrome. Click checkbox to turn on "Developer Mode", then "load unpacked extension". 


## Running
This tool is ideal for removing everyone from an onCampus group entirely or adding everyone from a role (or other filter) into a group. Head over to your group roster management page and you'll see two options when you click the extension.

![manage roster](/resources/ManageRoster.png?raw=true)

Clicking either of the options will load a confirmation dialogue before the clicker starts running. 

![manage roster](/resources/WarningAdd.png?raw=true)
![manage roster](/resources/WarningRemove.png?raw=true)

