'use strict';

// Central source catalog used by index.html.
window.SOURCES = {
 // RSS/news feeds.
 feeds: [
    {name:'Google News · World',url:'https://news.google.com/rss/headlines/section/topic/WORLD?hl=en-CA&gl=CA&ceid=CA:en'},
    {name:'Google News · Business',url:'https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-CA&gl=CA&ceid=CA:en'},
    {name:'Google News · Technology',url:'https://news.google.com/rss/headlines/section/topic/TECHNOLOGY?hl=en-CA&gl=CA&ceid=CA:en'},
    {name:'Google News · Science',url:'https://news.google.com/rss/headlines/section/topic/SCIENCE?hl=en-CA&gl=CA&ceid=CA:en'},
    {name:'Google News · Health',url:'https://news.google.com/rss/headlines/section/topic/HEALTH?hl=en-CA&gl=CA&ceid=CA:en'},
    {name:'Google News · Arts & Culture',url:'https://news.google.com/rss/search?q=arts%20culture%20when%3A2d&hl=en-CA&gl=CA&ceid=CA:en'}
 ],
 // Publishing and book-title oriented feeds.
 bookFeeds: [
  {name:'Google Books News',url:'https://news.google.com/rss/search?q=new%20books%20releases%20when%3A7d&hl=en-CA&gl=CA&ceid=CA:en'},
  {name:'Google Publishing Industry News',url:'https://news.google.com/rss/search?q=publishing%20industry%20book%20titles%20when%3A7d&hl=en-CA&gl=CA&ceid=CA:en'},
  {name:'Google Romance Books News',url:'https://news.google.com/rss/search?q=romance%20novel%20new%20release%20when%3A7d&hl=en-CA&gl=CA&ceid=CA:en'},
  {name:'Google Fiction Bestsellers News',url:'https://news.google.com/rss/search?q=fiction%20bestseller%20new%20title%20when%3A7d&hl=en-CA&gl=CA&ceid=CA:en'}
 ],
 // Daily quote, word, history and curiosity feeds.
 dailyFeeds: [
  {name:'BrainyQuote · Today',url:'https://www.brainyquote.com/link/quotebr.rss'},
  {name:'BrainyQuote · Art',url:'https://www.brainyquote.com/link/quotear.rss'},
  {name:'BrainyQuote · Nature',url:'https://www.brainyquote.com/link/quotena.rss'},
  {name:'BrainyQuote · Funny',url:'https://www.brainyquote.com/link/quotefu.rss'},
  {name:'BrainyQuote · Love',url:'https://www.brainyquote.com/link/quotelo.rss'},
  {name:'A.Word.A.Day',url:'https://wordsmith.org/awad/rss1.xml'},
  {name:'Merriam-Webster · Word of the Day',url:'https://www.merriam-webster.com/wotd/feed/rss2'},
  {name:'Free Dictionary · Word',url:'https://www.thefreedictionary.com/_/WoD/rss.aspx'},
  {name:'Free Dictionary · Quote',url:'https://www.thefreedictionary.com/_/WoD/rss.aspx?type=quote'},
  {name:'Free Dictionary · Idiom',url:'https://www.thefreedictionary.com/_/WoD/rss.aspx?type=idiom'},
  {name:'Free Dictionary · Article',url:'https://www.thefreedictionary.com/_/WoD/rss.aspx?type=article'},
  {name:'The Quotations Page',url:'http://www.quotationspage.com/data/qotd.rss'},
  {name:'This Day in History',url:'https://www.history.com/this-day-in-history/rss'},
  {name:'On This Day',url:'https://www.onthisday.com/rss/today-in-history.xml'},
  {name:'Astronomy Picture of the Day',url:'https://apod.com/feed.rss'},
  {name:'Atlas Obscura',url:'https://www.atlasobscura.com/feeds/latest'},
  {name:'The Marginalian',url:'https://www.themarginalian.org/feed/'}
 ],
 // Curious-fact, literary and science article feeds.
 curiosityFeeds: [
  {name:'JSTOR Daily',url:'https://daily.jstor.org/feed/'},
  {name:'The Paris Review Daily',url:'https://www.theparisreview.org/blog/feed/'},
  {name:'Interesting Literature',url:'https://interestingliterature.com/feed/'},
  {name:'Mental Floss',url:'https://www.mentalfloss.com/rss.xml'},
  {name:'Today I Found Out',url:'https://www.todayifoundout.com/index.php/feed/'},
  {name:'Smithsonian Smart News',url:'https://www.smithsonianmag.com/rss/smart-news/'},
  {name:'Open Culture',url:'https://www.openculture.com/feed'},
  {name:'Amusing Planet',url:'https://www.amusingplanet.com/feeds/posts/default?alt=rss'},
  {name:'Lapham\'s Quarterly',url:'https://www.laphamsquarterly.org/rss.xml'},
  {name:'ScienceDaily',url:'https://www.sciencedaily.com/rss/all.xml'}
 ],
 // Wikipedia topic pools by theme.
 literatureTopics: [
  ['Literature','Literature'],['Poetry','Poetry'],['Modernist literature','Modernist_literature'],
    ['Haiku','Haiku'],['Canadian literature','Canadian_literature'],['Romantic poetry','Romantic_poetry'],
    ['Romance novel','Romance_novel']
 ],
 artTopics: [
  ['Art history','Art_history'],['Renaissance art','Renaissance_art'],['Impressionism','Impressionism'],
    ['History of music','History_of_music'],['Baroque music','Baroque_music'],
    ['Pop music','Pop_music'],['1960s in music','1960s_in_music'],
    ['Bubblegum pop','Bubblegum_pop'],['Sunshine pop','Sunshine_pop'],['Dance-pop','Dance-pop']
 ],
 placeTopics: [
  ['Prague','Prague'],['History of Prince Edward Island','History_of_Prince_Edward_Island'],
  ['Prince Edward Island','Prince_Edward_Island'],['Ottawa','Ottawa'],
   ['Torrevieja','Torrevieja'],['Mexico City','Mexico_City'],
   ['Burnstown','Burnstown,_Ontario']
 ],
 // Weather locations consumed by the Open-Meteo request.
 weatherPlaces: [
  ['Ottawa weather',45.4215,-75.6972],['Prague weather',50.0755,14.4378],
  ['Torrevieja weather',37.9787,-0.6822],['Mexico City weather',19.4326,-99.1332],
  ['Burnstown weather',45.39,-76.57]
 ]
};
