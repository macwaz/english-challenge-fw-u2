// Vocabulary from Unit 2, pp. 20–35. Alternatives are separated by |.
const dictionary=[];
function words(page,c,lines){for(const line of lines.trim().split('\n')){const [en,pl]=line.split(';');dictionary.push({page,c,en,pl});}}
words('20–21',0,`train;pociąg
taxi;taksówka
bike|bicycle;rower
tram;tramwaj
motorbike|motorcycle;motocykl
cable car;kolejka linowa
plane;samolot
bus;autobus
helicopter;helikopter
car;samochód
ship;statek
boat;łódź
on foot;pieszo
land;ląd
air;powietrze
water;woda`);
words('22–23',6,`double-decker bus;autobus piętrowy
landmark;charakterystyczny obiekt|zabytek
environmentally friendly;przyjazny dla środowiska
get around;poruszać się
sights;atrakcje turystyczne
cruise;rejs
check out;sprawdzić
tour;wycieczka
relaxing;relaksujący`);
words('23',1,`library;biblioteka
park;park
tube station;stacja metra
house;dom
Quiet please!;Proszę o ciszę!
Beware of the dog!;Uwaga na psa!
Mind the gap!;Uwaga na odstęp!
Do not step on the grass!;Nie deptać trawy!`);
words('26',1,`hospital;szpital
cinema;kino
school;szkoła
supermarket;supermarket
department store;dom towarowy
clothes shop;sklep odzieżowy
fast food restaurant;restauracja fast food
restaurant;restauracja
gym;siłownia
post office;poczta
music shop;sklep muzyczny
bookshop;księgarnia
toy shop;sklep z zabawkami
theatre;teatr
museum;muzeum
car park;parking
fishmonger's;sklep rybny
police station;komisariat policji`);
words('26',4,`in front of;przed
behind;za
next to;obok
opposite;naprzeciwko
between;pomiędzy
on the corner of;na rogu
go up;idź w górę
go down;idź w dół
go along;idź wzdłuż
turn left;skręć w lewo
turn right;skręć w prawo
take the first left;skręć w pierwszą ulicę w lewo
take the second right;skręć w drugą ulicę w prawo`);
words('27, 35',5,`single ticket;bilet w jedną stronę
return ticket;bilet w obie strony
credit card;karta kredytowa
cash;gotówka
departure;odjazd
How much are the tickets?;Ile kosztują bilety?
Single or return?;W jedną stronę czy w obie?
Have a nice journey!;Miłej podróży!
Can I pay by credit card?;Czy mogę zapłacić kartą?
Can I pay in cash?;Czy mogę zapłacić gotówką?`);
words('30–31',6,`let;wynajmować
view;widok
book;zarezerwować
cottage;domek|chatka
quiet;cichy|spokojny
unique;wyjątkowy
flat;mieszkanie
houseboat;łódź mieszkalna
balcony;balkon
floor;piętro
bedroom;sypialnia
bathroom;łazienka
kitchen;kuchnia
living room;salon
garden;ogród
fridge;lodówka
cooker;kuchenka
sink;zlew
county;hrabstwo
medieval;średniowieczny
antique;z antykami
connect;łączyć
canal;kanał
village;wieś
countryside;wiejska okolica
wildlife;dzika przyroda`);
words('32–33',6,`glass;szkło
brick;cegła
wood;drewno
steel;stal
stone;kamień
plastic;plastik
bronze;brąz
tomb;grób|grobowiec
house (verb);mieścić
fog;mgła
surrounding;otaczający
monument;pomnik
ancient ruins;starożytne ruiny`);
const moreAdj=[['deep','deeper','the deepest'],['high','higher','the highest'],['popular','more popular','the most popular'],['delicious','more delicious','the most delicious'],['cheap','cheaper','the cheapest'],['modern','more modern','the most modern'],['slow','slower','the slowest'],['nice','nicer','the nicest'],['tall','taller','the tallest'],['quiet','quieter','the quietest'],['much','more','the most'],['peaceful','more peaceful','the most peaceful'],['pretty','prettier','the prettiest']];
const translations='stary;ważny;ciężki;zły;szybki;duży;cienki;szczęśliwy;interesujący;mały;dobry;piękny;duży;niebezpieczny;hałaśliwy;mało;sławny;suchy;wiele;długi;ekscytujący;nudny;zajęty;zatłoczony;drogi;ciepły;głęboki;wysoki;popularny;pyszny;tani;nowoczesny;wolny;miły;wysoki;cichy;dużo;spokojny;ładny'.split(';');
const schoolAdj=[...adj,...moreAdj];schoolAdj.forEach(([en],i)=>dictionary.push({page:'24–30',c:2,en,pl:translations[i]}));
const adventureBank=bank.map(b=>b.map(q=>({...q})));
const schoolBank=names.map(()=>[]);
function sq(c,q,a,opts=[],hint='',level=2,more={}){schoolBank[c].push({c,q,a:a.split('|'),opts,hint,level,...more});}
for(const d of dictionary){const {c,en,pl,page}=d;const e=en.split('|')[0],p=pl.split('|')[0];let peers=dictionary.filter(x=>x.c===c&&x.en!==en&&x.pl!==pl);sq(c,'Przetłumacz: '+p,en,[],`Podręcznik: s. ${page}`,2);sq(c,'Co oznacza: '+e+'?',pl,peers.map(x=>x.pl.split('|')[0]),`s. ${page}`,1);if(!e.includes('(verb)'))sq(c,'Odsłuchaj i wybierz znaczenie.',pl,peers.map(x=>x.pl.split('|')[0]),`s. ${page}`,2,{audio:e});}
// Avoid ambiguous Polish prompts and accept common equivalents.
for(const q of schoolBank.flat()){if(q.q==='Przetłumacz: duży')q.a=['big','large'];if(q.q==='Przetłumacz: wysoki')q.a=['high','tall'];if(q.q==='Przetłumacz: mieścić')q.a=['house'];if(q.q==='Przetłumacz: cichy')q.a=['quiet'];}
for(const v of vehicles){for(const [who,verb,place] of [['I','go','to school'],['We','travel','to London'],['They','go','to town']])sq(0,`${who} ${verb} ${place} ___ ${v}.`,'by',['by','on','in'],'by + środek transportu',1);if(v!=='cable car'){let p=['car','taxi','helicopter'].includes(v)?'in':'on';sq(0,`We are ___ a ${v}.`,p,['by','on','in'],'Położenie w pojeździe lub na nim.',2);}sq(0,`Popraw: I travel on ${v}.`,`I travel by ${v}`,[],'by bez przedimka',3);}
sq(0,'We go to school ___ foot.','on',['by','on','in'],'on foot = pieszo',1);
for(const [a,b,c] of schoolAdj){sq(2,'Stopień wyższy: '+a,b,[],`${a} → ${b}`,2);sq(3,'Stopień najwyższy (z the): '+a,c,[],`${a} → ${c}`,2);sq(2,'Wybierz stopień wyższy: '+a,b,[a,b,c],'',1);sq(3,'Wybierz stopień najwyższy: '+a,c,[a,b,c],'',1);if(['many','much','little'].includes(a)){let noun=a==='many'?'tickets':'money';sq(2,`We have ___ ${noun} than you. (${a})`,b,[],'',3);sq(3,`We have ___ ${noun}. (${a})`,c,[],'',3);continue;}for(const [x,y] of [['This place','that place'],['This shop','that shop']]){sq(2,`${x} is ___ than ${y}. (${a})`,b,[],`${a} → ${b}`,2);sq(2,`Popraw: ${x} is ${a} than ${y}.`,`${x} is ${b} than ${y}`,[],'Stopień wyższy + than',3);}for(const x of ['This is','That is'])sq(3,`${x} ___ place in town. (${a})`,c,[],`${a} → ${c}`,2);}
for(const a of ['fast','beautiful','old','expensive','interesting','small','big','warm']){sq(2,`This place is as ${a} ___ that place.`,'as',['as','than','the'],'as … as',1);sq(2,`This place isn't ___ ${a} as that place.`,'as|so',[],'not as/so … as',3);}
for(const q of adventureBank[1].filter(q=>q.q.startsWith('Gdzie zobaczysz')))schoolBank[1].push({...q});
for(const q of adventureBank[4].filter(q=>q.map||q.q.startsWith('MAPA:')))schoolBank[4].push({...q});
for(const q of adventureBank[5].filter(q=>!q.q.includes('Oxford')&&!q.q.includes('Bristol')&&!q.q.includes('Cambridge')&&!q.q.includes('York')&&!q.q.includes('come back')&&!q.q.includes('destination')))schoolBank[5].push({...q});
for(const town of ['Bath','London','Penzance'])for(const [n,w] of [[1,'a'],[2,'two'],[3,'three']]){let t=n===1?'ticket':'tickets';sq(5,`Poproś o ${n} ${n===1?'bilet':'bilety'} do ${town}.`,`I'd like ${w} ${t} to ${town}, please|I would like ${w} ${t} to ${town}, please${n===1?'|I would like one ticket to '+town+', please|I\'d like one ticket to '+town+', please':''}`,[],'',3);sq(5,`Ticket agent: How can I help you?\nYou: I'd like ${w} ___ to ${town}, please.`,t,['ticket','tickets','train'],'',1);}
for(const time of ['8:45','10:30','13:00','20:30','9:20'])sq(5,'Odsłuchaj godzinę odjazdu.',time,['8:45','10:30','13:00','20:30','9:20'],'',2,{audio:`The train leaves at ${time}.`});
for(const [text,items] of [[`A flat in London is on the third floor. It has two bedrooms and a balcony. It costs £80 per day.`,[['The flat is in London.','Right'],['The flat has three bedrooms.','Wrong'],['The balcony is small.','Doesn’t say'],['The flat costs £80 per day.','Right']]],[`A cottage in Appledore has a garden with flowers and trees. It costs £140 per day. There are three bedrooms upstairs.`,[['The cottage has a garden.','Right'],['The cottage costs £40 per day.','Wrong'],['The garden has a canal.','Doesn’t say'],['There are three bedrooms upstairs.','Right']]],[`Appledore is a village in Kent. There are medieval houses and antique shops. You can cycle along the Royal Military Canal.`,[['Appledore is a city.','Wrong'],['There are antique shops.','Right'],['There is a cinema.','Doesn’t say'],['You can cycle along the canal.','Right']]],[`The Golden Gate Bridge is made of steel. It is 2.7 km long. Its colour is International Orange.`,[['The bridge is made of stone.','Wrong'],['The bridge is less than 3 km long.','Right'],['The bridge is the oldest in the USA.','Doesn’t say']]]])for(const [q,a] of items)sq(6,'Read:\n'+text+'\n\n'+q,a,['Right','Wrong','Doesn’t say'],'Tekst ćwiczeniowy na podstawie działu.',2);
for(const q of adventureBank[6].filter(q=>q.q.startsWith('What material')))schoolBank[6].push({...q});
for(const [c,words] of [[2,['A plane','is','faster','than','a bike']],[3,['This','is','the','best','shop']],[4,['Turn','left','at','the','corner']],[5,["I'd",'like','two','tickets','please']],[0,['We','go','to','school','on','foot']]])sq(c,'Ułóż zdanie z wyrazów.',words.join(' '),[],'',3,{words});
for(const b of schoolBank){const seen=new Set();for(let i=b.length-1;i>=0;i--){let q=b[i];q.level??=2;q.id=`school:${q.c}:${q.q}:${q.a[0]}:${q.audio||''}`;if(seen.has(q.id))b.splice(i,1);else seen.add(q.id);}}
for(const b of adventureBank)for(const q of b)q.id='adventure:'+q.id;
