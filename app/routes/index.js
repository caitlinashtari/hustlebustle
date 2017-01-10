import Ember from 'ember';

var stories = [{
  id: 1,
  title: "Hamburger Vending Machines? Yes.",
  content: "Burger ipsum dolor amet t-bone rump Angus kobe bacon beef cow shoulder Burger strip steak Cheeseburger. Flank beef ribs meatball short rib tri-tip kobe. Sirloin wagyu filet mignon steak tail rump chuck beef ribs. Meatball beef ribs t-bone, Cheeseburger brisket shank strip steak wagyu filet mignon steak tail.",
  image: "http://www.myw-cms.it/amm/immagini/0002/prodotti/4543_imgscheda_hamburger-png.PNG"

}]

export default Ember.Route.extend({
  model(){
    return stories;
  }
});
