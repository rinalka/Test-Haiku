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
