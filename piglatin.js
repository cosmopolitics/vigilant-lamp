//var string = "something 123";

//var string = "I would always rather be happy than dignified";

var string = "The village lay under two feet of snow, with drifts at the windy corners. In a sky of iron the points of the Dipper hung like icicles and Orion flashed his cold fires. The moon had set, but the night was so transparent that the white house-fronts between the elms looked gray against the snow, clumps of bushes made black stains on it, and the basement windows of the church sent shafts of yellow light far across the endless undulations. 3.1415";

//var string = "While confined here in the Birmingham city jail, I came across your recent statement calling my present activities “unwise and untimely.” Seldom do I pause to answer criticism of my work and ideas. If I sought to answer all the criticisms that cross my desk, my secretaries would have little time for anything other than such correspondence in the course of the day, and I would have no time for constructive work. But since I feel that you are men of genuine good will and that your criticisms are sincerely set forth, I want to try to answer your statement in what I hope will be patient and reasonable terms.";

// var string = "On a cold day in April of 1984, a man named Winston Smith returns to his home, a dilapidated apartment building called Victory Mansions. Thin, frail, and thirty-nine years old, it is painful for him to trudge up the stairs because he has a varicose ulcer above his right ankle. The elevator is always out of service, so he does not try to use it. As he climbs the staircase, he is greeted on each landing by a poster depicting an enormous face, underscored by the words 'BIG BROTHER IS WATCHING YOU.'\nWinston is an insignificant official in the Party, the totalitarian political regime that rules all of Airstrip One—the land that used to be called England—as part of the larger state of Oceania. Though Winston is technically a member of the ruling class, his life is still under the Party’s oppressive political control. In his apartment, an instrument called a telescreen—which is always on, spouting propaganda, and through which the Thought Police are known to monitor the actions of citizens—shows a dreary report about pig iron. Winston keeps his back to the screen. From his window, he sees the Ministry of Truth, where he works as a propaganda officer altering historical records to match the Party’s official version of past events. Winston thinks about the other Ministries that exist as part of the Party’s governmental apparatus: the Ministry of Peace, which wages war; the Ministry of Plenty, which plans economic shortages; and the dreaded Ministry of Love, the center of the Inner Party’s loathsome activities.";

var words;
var finalword;
var finalstring = ""; //empty for type safety and awaiting assignment
var words = string.split(' ');
var period = /[.]/; //random regular expression for line thrity five because it makes it work for some reason??????
var regexV = /[aeiou]/;
var regexN = /[1-9]/;
var regexQ = /[']/;

for (let i = 0; i < words.length; i++) {
  var temp = words[i].toLowerCase().trim();
  var quoteL = temp.indexOf(regexQ);
  console.log(quoteL)
  if (temp[0].match(regexV)) {
    finalword = temp + "way ";
    //finalword = removeQuotes(finalword);
  } else {
    var fvl = temp.search(regexV);
    finalword = temp.substring(fvl) + temp.substring(0, fvl) + "ay ";
    //finalword = removeQuotes(finalword);
  }

  if (finalword.match(",")) {
    finalword = finalword.replace(",", "");
    finalword = finalword.replace(" ", ", ");
  }

  if (finalword.match(period) != null && finalword.match(regexN) === null) {
    finalword = finalword.replace(".", "");
    finalword = finalword.replace(" ", ". ");
  }// skips decimanls too

  if (finalword.match(regexN) != null) {
    finalword = finalword.replace("ay", "");
  }
  finalstring += finalword;
}
console.log(finalstring);
