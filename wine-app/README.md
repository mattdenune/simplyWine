
GIF: https://media3.giphy.com/media/oBEUg7opRlyik/200.webp?cid=790b761114aa0bd95aaea3ff76bb884c11394b9d66662751&rid=200.webp

# Project Overview
	-This wine application will simplify the choice of what wine the user would prefere to enjoy.

## Project Description

<!-- Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality. -->

-This application will suggest a list of wines for the user based on a choice of wine color and characteristics.  To simplify the characteristics of wines I'll be using a wine wheel created by Mary Ewing-Mulligan, a Master of Wine.  I'll split the possible wine suggestions into the wine wheel categories by grape variety. 

## Wireframes

<!-- Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. -->

https://cloudinary.com/console/media_library/folders/all/Wine%20App
-This link contains wireframes for both web and mobil layouts.  There are three pages for each layout. Each page is numbered and should transition from 1 to 3.

## API Snippet


<!-- Paste a snippet from your API here that shows the shape of the data -->

{
    "meta": {
        "results": 1,
        "returned": 1,
        "errmsg": "",
        "status": 1
    },
    "winery": {
        "id": "three-coins-wines",
        "name": "Three Coins Wines",
        "num_wines": 38,
        "address": "P.O. Box 1105",
        "city": "Calistoga",
        "state": "CA",
        "zip": "94515",
        "country": "US",
        "phone": "",
        "url": "http://www.threecoinswines.com/",
        "email": "hilary@lawerfamilywines.com",
        "closed": 0,
        "lat": "38.5787965",
        "lng": "-122.5797054",
        "image": "http://ei.isnooth.com/multimedia/e/6/9/image_2169668_medium.jpeg",
        "description": "<p>\r\n\tHow do we craft the perfect wine to celebrate and toast your success? The same way you achieved it: inspiration, collaboration and dedication. David and Betsy Lawer begin the process by searching, sampling and selecting only the finest Napa Valley grapes. Then, Three Coins winemaker, Larry Levin, continues the process at The Ranch, a state-of-the-winemaking-art facility located just south of St. Helena, California. Here a select group of wineries leverage the talent, skill and experience of The Ranch staff to produce extraordinary wines and exceptional value. The winery is not open to the public, and Three Coins Wines are available only at http://www.threecoinswines.com/ and a handful of wine shops. David and Betsy are planting Cabernet Sauvignon and Petit Verdot at their vineyard in Knight&rsquo;s Valley for a future estate wine. Their 106 acre estate with its 20 acre vineyard is nestled in its own private valley just outside Calistoga in the Knights Valley appellation. Their vineyard currently produces Syrah, Viognier and Petite Sirah. Great wine begins with great grapes, and the Lawer&rsquo;s Syrah is prized by experienced winemakers who produce wines now earning 90 ratings and Gold Medals. Two&rsquo;s company&hellip; Three Coins Wines is a celebration!</p>"
    }
}

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Use the Snooth API to generate wine information.
- Allow user to choose a color of wine and within that choose a wine style.
- Render chosen data results on page.

#### PostMVP EXAMPLE
- Save their choices in local storage.
- Add information on the grape variety.

## Piority Matrix

https://cloudinary.com/console/media_library/folders/all/
-priority matrix is bundled with all component hierarchy and wirefarame.

## React Component Hierarchy

<!-- Define the React components and the architectural design of your app. -->

https://cloudinary.com/console/media_library/folders/all/Wine%20App
-This link brings you to a Cloudinary page that has my React Component Hierarchy along with Wireframes in the same folder.

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Header | This will render the header & include the nav | 
| Footer | This will render the footer | 
| About | This will render a brief bio about the app & designer | 
| WineColor | This will render a selection screen for red & white wine | 
| WineStyle | This will render a selection screen for the syles of wine | 
| Image | This will render a picture of the suggested wines | 
| WineInfo | This will render information about the suggested wines | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Build out component shells | M | 5hrs| 5hrs | 5hrs |
| Access API info via JSON | H | 4hrs| 4hrs | 4hrs |
| Build out component functionality | H | 8hrs| 10hrs | 10hrs |
| Switch JSON to API | H | 3hrs| 3hrs | 3hrs |
| Style CSS | H | 8hrs| 15hrs | 15hrs|
| Adjust component render div's for layout. | M | 3hrs| 4hrs | 4hrs |
| Total | H | 31hrs| 41hrs | 41hrs |


## Additional Libraries
 <!-- Use this section to list all supporting libraries and thier role in the project.  -->
 -I will not be using any component libraries for this project.

## Code Snippet

<!-- Use this section to include a brief code snippet of functionality that you are proud of an a brief description   -->
-while this code is not elegant I do love it because it is close to my heart.  It's so hard to categorize wines into style and one of the popular ways to do it is by grape varietal. This worked perfectly for the API and I believe this code can be refactored over time to make it more precise.

aromaticWhite = (array) => {
    const aromaticWines = this.state.wines.filter(wine => (
      wine.varietal === 'Riesling' || wine.varietal === 'Sauvignon Blanc' || wine.varietal === 'Gruner Veltliner' || wine.varietal === 'Muscat' || wine.varietal === 'Pinot Gris' || wine.varietal === 'Gewurztraminer' || wine.varietal === 'Torrontes' || wine.varietal === 'Falanghina' || wine.varietal === 'Fiano' || wine.varietal === 'Vermentino' || wine.varietal === 'Albarino'
    ))
    this.setState({
      wineResults: aromaticWines
    })
  }

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
 -Could not get my conditional render for a loading screen to work. I had the I statement wrong. It was(this.state.wines !== []) and this did not have the effet I would have liked. I changed it to (this.state.wines.length) and it gave the effect that I wanted.

#### SAMPLE.....
    ))
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing an opening parenthesis after a fat arrow in function
