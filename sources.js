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
    {name:'Google News · Arts & Culture',url:'https://news.google.com/rss/search?q=arts%20culture%20when%3A2d&hl=en-CA&gl=CA&ceid=CA:en'},
    {name:'BBC · World',url:'https://feeds.bbci.co.uk/news/world/rss.xml'},
    {name:'BBC · Science & Environment',url:'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml'},
    {name:'Guardian · World',url:'https://www.theguardian.com/world/rss'},
    {name:'NPR · News',url:'https://feeds.npr.org/1001/rss.xml'},
    {name:'CBC · Canada',url:'https://www.cbc.ca/webfeed/rss/rss-canada'},
    {name:'CBC · Arts',url:'https://www.cbc.ca/webfeed/rss/rss-arts'},
    {name:'Al Jazeera',url:'https://www.aljazeera.com/xml/rss/all.xml'},
    {name:'The Economist · The World This Week',url:'https://www.economist.com/the-world-this-week/rss.xml'},
    {name:'USGS · Earthquakes Today',url:'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.atom'},
    {name:'National Weather Service',url:'https://www.weather.gov/rss_page.php?site_name=nws'}
 ],
 // Publishing and book-title oriented feeds.
 bookFeeds: [
  {name:'Google Books News',url:'https://news.google.com/rss/search?q=new%20books%20releases%20when%3A7d&hl=en-CA&gl=CA&ceid=CA:en'},
  {name:'Google Publishing Industry News',url:'https://news.google.com/rss/search?q=publishing%20industry%20book%20titles%20when%3A7d&hl=en-CA&gl=CA&ceid=CA:en'},
  {name:'Google Romance Books News',url:'https://news.google.com/rss/search?q=romance%20novel%20new%20release%20when%3A7d&hl=en-CA&gl=CA&ceid=CA:en'},
  {name:'Google Fiction Bestsellers News',url:'https://news.google.com/rss/search?q=fiction%20bestseller%20new%20title%20when%3A7d&hl=en-CA&gl=CA&ceid=CA:en'},
  {name:'Guardian · Books',url:'https://www.theguardian.com/books/rss'},
  {name:'Literary Hub',url:'https://lithub.com/feed/'},
  {name:'London Review of Books',url:'https://www.lrb.co.uk/feeds/rss'},
  {name:'The New Yorker',url:'https://www.newyorker.com/feed/everything'},
  {name:'Project Gutenberg · New Books',url:'https://www.gutenberg.org/cache/epub/feeds/today.rss'}
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
  {name:'The Marginalian',url:'https://www.themarginalian.org/feed/'},
  {name:'Wikipedia · Featured Article',url:'https://en.wikipedia.org/w/api.php?action=featuredfeed&feed=featured&feedformat=rss'},
  {name:'Wikipedia · On This Day',url:'https://en.wikipedia.org/w/api.php?action=featuredfeed&feed=onthisday&feedformat=rss'},
  {name:'Wikipedia · Picture of the Day',url:'https://en.wikipedia.org/w/api.php?action=featuredfeed&feed=potd&feedformat=rss'},
  {name:'Wiktionary · Word of the Day',url:'https://en.wiktionary.org/w/api.php?action=featuredfeed&feed=wotd&feedformat=rss'}
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
  {name:'ScienceDaily',url:'https://www.sciencedaily.com/rss/all.xml'},
  {name:'The Public Domain Review',url:'https://publicdomainreview.org/rss.xml'},
  {name:'Hyperallergic',url:'https://hyperallergic.com/feed/'},
  {name:'ARTnews',url:'https://www.artnews.com/feed/'},
  {name:'Colossal',url:'https://www.thisiscolossal.com/feed/'},
  {name:'Dezeen',url:'https://www.dezeen.com/feed/'},
  {name:'NME',url:'https://www.nme.com/feed'},
  {name:'Pitchfork · News',url:'https://pitchfork.com/feed/feed-news/rss'},
  {name:'Popular Science',url:'https://www.popsci.com/feed/'},
  {name:'Space.com',url:'https://www.space.com/feeds/all'},
  {name:'NASA',url:'https://www.nasa.gov/feed/'},
  {name:'Hacker News',url:'https://hnrss.org/frontpage'},
  {name:'The Onion',url:'https://www.theonion.com/rss'}
 ],
 // Scholarly, essay and long-form science feeds.
 scholarlyFeeds: [
  {name:'Nature',url:'https://www.nature.com/nature.rss'},
  {name:'The Conversation',url:'https://theconversation.com/ca/articles.atom'},
  {name:'Aeon',url:'https://aeon.co/feed.rss'},
  {name:'Quanta Magazine',url:'https://www.quantamagazine.org/feed/'},
  {name:'Nautilus',url:'https://nautil.us/feed/'},
  {name:'Big Think',url:'https://bigthink.com/feed/'},
  {name:'Science News',url:'https://www.sciencenews.org/feed'},
  {name:'Live Science',url:'https://www.livescience.com/feeds/all'},
  {name:'Phys.org',url:'https://phys.org/rss-feed/'},
  {name:'Guardian · Science',url:'https://www.theguardian.com/science/rss'},
  {name:'History Today',url:'https://www.historytoday.com/feed/rss.xml'},
  {name:'The Atlantic',url:'https://www.theatlantic.com/feed/all/'}
 ],
 // Mundane household, food, garden and shopping feeds.
 everydayFeeds: [
  {name:'Guardian · Gardens',url:'https://www.theguardian.com/lifeandstyle/gardens/rss'},
  {name:'Guardian · Food',url:'https://www.theguardian.com/food/rss'},
  {name:'Gardeners\' World',url:'https://www.gardenersworld.com/feed/'},
  {name:'The Kitchn',url:'https://www.thekitchn.com/main.rss'},
  {name:'Bon Appétit',url:'https://www.bonappetit.com/feed/rss'},
  {name:'Lifehacker',url:'https://lifehacker.com/feed/rss'},
  {name:'Architectural Digest',url:'https://www.architecturaldigest.com/feed/rss'},
  {name:'Vogue',url:'https://www.vogue.com/feed/rss'},
  {name:'Wired',url:'https://www.wired.com/feed/rss'},
  {name:'NPR · Food',url:'https://www.npr.org/rss/rss.php?id=1032'}
 ],
 // Song-lyric and poem sites without feeds: server.js picks a random page from the index
 // (links matching linkPattern) and extracts its text using the named extractor.
 pageSources: [
  {name:'Classic Country Song Lyrics',index:'https://www.classic-country-song-lyrics.com/countrysonglyrics.html',linkPattern:'lyricschords\\.html$',extract:'chordsheet'},
  {name:'Cowboy Lyrics · Classic Country',index:'https://www.cowboylyrics.com/lyrics/classic-country.html',linkPattern:'/lyrics/classic-country/.+\\.html$',extract:'brlines'},
  {name:'Modern Poetry in Translation',index:'https://modernpoetryintranslation.com/mpit_poems-sitemap1.xml',linkPattern:'/poem/[^/]+/$',extract:'mptpoem'}
 ],
 // Wikipedia topic pools by theme.
 literatureTopics: [
  ['Literature','Literature'],['Poetry','Poetry'],['Modernist literature','Modernist_literature'],
    ['Haiku','Haiku'],['Canadian literature','Canadian_literature'],['Romantic poetry','Romantic_poetry'],
    ['Romance novel','Romance_novel'],['Epistolary novel','Epistolary_novel'],['Gothic fiction','Gothic_fiction'],
    ['Medieval literature','Medieval_literature'],['Pulp magazine','Pulp_magazine'],['Folklore','Folklore']
 ],
 artTopics: [
  ['Art history','Art_history'],['Renaissance art','Renaissance_art'],['Impressionism','Impressionism'],
    ['History of music','History_of_music'],['Baroque music','Baroque_music'],
    ['Pop music','Pop_music'],['1960s in music','1960s_in_music'],
    ['Bubblegum pop','Bubblegum_pop'],['Sunshine pop','Sunshine_pop'],['Dance-pop','Dance-pop'],
    ['Surrealism','Surrealism'],['Textile arts','Textile_arts'],['Ceramic art','Ceramic_art']
 ],
 placeTopics: [
  ['Prague','Prague'],['History of Prince Edward Island','History_of_Prince_Edward_Island'],
  ['Prince Edward Island','Prince_Edward_Island'],['Ottawa','Ottawa'],
   ['Torrevieja','Torrevieja'],['Mexico City','Mexico_City'],
   ['Burnstown','Burnstown,_Ontario'],['Lighthouse','Lighthouse'],['Salt marsh','Salt_marsh']
 ],
 // Everyday-object and odd-science topics.
 thingTopics: [
  ['Teaspoon','Teaspoon'],['Umbrella','Umbrella'],['Lichen','Lichen'],['Barometer','Barometer'],
  ['Sourdough','Sourdough'],['Filing cabinet','Filing_cabinet'],['Moth','Moth'],
  ['Shipping container','Shipping_container'],['Glacier','Glacier'],['Typewriter','Typewriter'],
  ['Carnivorous plant','Carnivorous_plant'],['Parking meter','Parking_meter']
 ],
 // Weather locations consumed by the Open-Meteo request.
 weatherPlaces: [
  ['Ottawa weather',45.4215,-75.6972],['Prague weather',50.0755,14.4378],
  ['Torrevieja weather',37.9787,-0.6822],['Mexico City weather',19.4326,-99.1332],
  ['Burnstown weather',45.39,-76.57]
 ]
};
