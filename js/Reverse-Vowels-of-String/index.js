/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vovels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const letters = s.split("");
  const vovelsInString = [];
  for (let i = 0; i < letters.length; i++) {
    const letter = s[i];
    if (vovels.includes(letter)) {
      vovelsInString.push({ pos: i, letter });
    }
  }

  const vovelsInStringReverse = [...vovelsInString].reverse();
  //   console.log(vovelsInString);
  //   console.log(vovelsInStringReverse);
  for (let j = 0; j < vovelsInString.length; j++) {
    const vovel = vovelsInString[j];
    // console.log(
    //   s.substring(0, vovel.pos),
    //   vovelsInString[j].letter,
    //   vovelsInStringReverse[j].letter,
    //   s.substring(vovel.pos + 1)
    // );
    s =
      s.substring(0, vovel.pos) +
      vovelsInStringReverse[j].letter +
      s.substring(vovel.pos + 1);
  }
  return s;
};

const a =
  ", Irfan, a run-up, an aero, Neu, Innes, Homs, Pitt, a lieu, Viki, Stan, a gobo, Lenora, a leak, Jaret, an esp, Miriam, a gap, a treble, Mulock, a bustle, Barre, Thess, an amtrac, a tef, Giles, Cattan, an attar, Gayn, a kadi, rms, a read, Desai, a manit, a maror, a demirep, Anam, Hereward, an ann, a keir, a myg, an axel, Apoc, a sub, Danieu, Hilel, cunenei, Suter, a nong, a gyro, Dirac, Kelt, a hag, MPL, Lidah, Tomah, Tuddor, a circ, Dugaid, a yeo, Juru, a bidet, Kila, Mallen, a macro, James, a pilaf, Alon, Annora, Morita, Leila, Magen, Iliad, Lissa, BOD, Nebr, a bani, Reade, Law, Olwen, a trave, Ikkela, SSM, Teh, Potts, a web, Asni, a merc, Dwane, Dawes, Solana, Buffon, a mallam, a shame, Kolis, a presser, a nadir, Liz, Zurbar, a belah, Tareyn, Alita, Alana, Mamore, Jeff, Ube, Jamaica, Trask, Rowe, Vespucci, Hamal, a kail, Blakemore, Jeromy, wyes, Maranh, Adar, a matoke, Murial, Gahan, a vise, game laws, a sip, a kook, Sallee, Nonnah, a lustre, BGeNEd, Gomez, a humus, USSB, Walke, Tigr, a moir, a sidecar, Grenier, an eel, Renae, Rct, Spada, DEd, a way, Daniella, Manila, Marci, Maxama, Lael, Krasny, Loti, a saice, Lai, Sheela, Tani, a dammar, Cecil, a nib, Baranov, an abba, Ray, Elidad, Daren, Trapani, Kerwinn, an enema, Assyr, a ladler, a hoer, AFM, AFL, Anatola, Mossi, Jareb, Miksen, Gilli, Kasai, Rugen, a grease, Elnora, Dev, an amu, a strut, Soni, Kajar, a melon, an apr, a wad, Denebola, Ann, Odille, Weslaco, Valeria, Niel, Feosol, a basnet, a prod, a sieur, a rastle, POA, Vaclav, Nord, ASU, Cross, a macaroni, lenes, Loren, Berbera, halos, amebas, Derek, Cornel, Lucais, UPU, MSG, Arette, Viren, PETN, Evin, a roe, Damanh, Akhaia, Meek, Reno, caballos, Neil, a demo, Toh, Wei, Dora, Dylan, Azof, S. Takasu, Leaf, Demb, Reiko, Dupr, a kelp, Ind, Frei, Darrel, a hair, Morra, Cyma, MHE, Byng, Isai, a cts, a fakir, a prey, a pan, Ibrahim, a scab, MVD, nebulae, Doley, Flam, Hoeg, a pekin, a loci, NYC, a lop, Komi, Lehar, Valera, an agar, a daze, Dinesh, Castora, Antenor, a yeti, Guanabara, Harv, a gait, a sulk, a sim, Lucite, Ahron, Jamel, Ashti, Algol, Kano, Siena, BFDC, Orelu, Elbertina, Arak, Kassab, Raine, Berezina, Mo Rocca, Sin, Ariadne, WRAF, Asael, OAPC, Zaid, a lineman, a lam, a snot, Townes, Beau, an eld, a mrem, Merle, a ballon, a verbal, Avery, Britni, a faucet, Susiana, Eliseo, Grace Ip, Pears, Neenah, Colbye, Nari, Elvah, a tuxedo, Caaba, a wat, Tom, a jaga, Desi, OSF, a wok, Kislev, a padre, Ferretti, Hadik, Salish, a tapir, Gagne, Bono, Vyrene, Grew, NWT, Donavon, O'Doneven, a trad, ASN, a poker, Mitre, Bekah, Rone, Pleiad, a woad, Frech, a lulu, Leif, ASSR, a lob, Tetu, a pelf, Fulas, Rhaetia, Tasm, a mimbar, an ape, Lissak, Natale, Casanova, Lalo, Pax, a nuclei, Ranit, a paua, Cameron, AEF, Feliks, Venetia, MSBA, Batty, Dan, Alfred, Nasia, Vlor, Hurless, a karo, Mods, an eyot, a lei, Kosaka, Ceb, an ego, Mini, Jamie, Gregor, a memo, Lashar, Mahdis, a lulav, Arde, Donata, Bre, Gierek, Suhail, Alegre, Sharra, Tsui, Vedi, Biro, Lyly, Weser, an acyl, Elga, Hassi, Renan, Oval, Boni, a redenial, an o-o, Tarrasa, Kru, a pipit, an ain, a rimu, Tuareg, a weka, Maxima, Tod, a nigger, Gaile, Dielu, Jeni, Llano, Tarim, an enate, Helot, a kiaat, Mareah, Canale, a rept, a nanako, Mei, Bontok, Jarib, a rad, Duroc, a camail, a pensil, Jammu, Kohanim, a galet, a knar, a dat, Conall, a wane, Sorci, a marasca, Kultur, Brenn, a tog, Nassi, Reid, Dongola, a sera, Ducasse, Jaur, a tlo, Sinai, Shevat, Costain, a gare, Sisely, a bra, hibla, Tit, Pushto, Gerome, kalis, an amir, Elisabet, a cat, a gossip, Miamis, ASS, Leyla, Ezr, Bazar, a tenno, Grati, Khano, Naval, Calabar, Eurasia, Kassapa, Iceni, GCI, Peti, Fuseli, Tomaso, Grace Lam, a swob, Martel, Mahadeva, Danila, Posen, Mahratta, Noli, Czur, CAA, Eads, an odyl, Lanna, Madaih, a bro, Ott, Terai, Graaf, a rall, a dict, McNair, Guaira, Vogul, Sais, a legato, Kadai, Ladin, a livre, Moira, Mor, a secret, Tunisia, Brag, a rev, a prep, Pieria, Jav, Idell, a passage, Martsen, DMD, costae, Kress, a manas, BeShT, Rondi, Noelle, Nov, a poi, Hoenir, Also, Diana, lenses, Endor, Aug, an ampulla, Cayuga, Swor, Rosel, Lilyan, a pair, a kazoo, Moe, Bree, Tracay, Armin, a supr, IOF, Nino, Tarrel, Yucat, addda, TLC, Lyrus, a mass, a kanga, Decima, Erinna, Mylan, Alena, Mal, a ginep, a peg, an arcanum, Dorset, Abdul, Munro, a moc, a hav, Rose, Taft, an abbr, a decree, Penn, a sore, a laksa, Kreit, a bassoon, a system, Tem, Morgagni, Laoag, Elura, Reinaldo, Yasu, Monnet, a constr, USTC, GNP, thala, Bretta, Koh, a dita, Leod, a nemo, Tenerife, Labana, Mo-tse, Royo, byes, salpae, a gain, a retina, Titan, a loco, Johppa, HIH, Castara, HBM, a denim, Lot, a name, BSIR, a byssus, salvos, a broo, Manassas, Jara, a laud, a gnat, Saba, Danyelle, Kono, Hindoo, Mazda, Nani, Rennes, Innis, Sassanid, Norge, Calmas, Rhea, Reamy, a ruler, a genit, a nostril, Faletti, Maisel, Ishtar, a bedel, Anasazi, Roxana, Eyre, Muni, trigae, a repair, a dyad, a nit, Eliot, Prem, Milano, Jaen, an acetyl, Caren, a bahadur, Pru, Kenney, a copy, Tamil, Ostraw, Zagreb, Noe, Camelot, a pawnage, Amram, Hanan, an ani, a heres, a suet, Noelani, Cyrenaic, a phano, Dielle, Ursal, LACW, a glioma, a taker, a gaz, Tine, Kopaz, Orman, Emil, a knoll, a forme, retinae, Canso, Tajik, Ruthann, a balsam, a haboob, a talc, cerebra, Gil, a maw, Wilno, Tobol, a gar, a strap, a riv, Lenox, a snub, Darvon, a drain, a lair, UPWA, Jakob, Molini, modili, Lenno, Land, a corp, an amora, Aila, Truda, a bundh, Lofn, a saccule, FAO, ICAO, Lilo, Voyt, Tati, Denise, Ryan, a bodega, Mizar, a teil, a soroban, a sora, mesela, pennae, an ecru, Tratner, a paean, Lulea, Dede, Monaco, Liebig, Aimo, Trot, Seneca, Radu, Stassen, a jot, a retem, Mehta, Malka, Hyrup, a jalap, Pesaro, Merano, Tessi, boleros, Mah, Sergei, Danai, Bunyan, a reif, Assad, a cicerone, Lulu, a commo, Mac, Ajani, a halyard, a strops, a hallo, Mayor, Nome, an alapa, NUL, a barolo, Crane, Word, a bood, Nowata, animala, an akela, Manu, Grim, a spot, Stilu, Kananga, Yamani, Demerol, Kaete, Tanaka, Alfi, Wood, a magus, Nauru, Angi, Argyll, Ussuri, Peadar, Lissi, Karisa, Kawai, Dionisio, a gird, BCh, Shaer, a nudnik, Fulahs, Maloy, a paseo, Bogey, a synod, Goar, Casar, a hassle, Aleut, Oba, Lomasi, Syl, Lenni, Kale, Sirsalis, Efron, Avoca, Yahgan, Axel, Pirnot, Wusih, Piave, Iver, Vinaya, Pelagi, Barr, UFC, a drama, Japan, a werewolf, an esse, GSR, Aetna, Kresic, ATS, Saval, caveae, a panorama, Putnam, Rhesus, Pineda, Bug, epeidia, Meter, an enol, Rodez, Mak, Ibo, Karame, Gittel, TUC, a nav, Ronna, Pali, Yun, a kagu, Stag, Peh, Sanyu, Renee, Plerre, Tai, Rus, a ganoin, a sal, a bank, Glossa, togas, Amida, a vav, Ansela, Dibru, Till, Everdur, Minnis, ICA, Necker, a marg, a tug, Aksum, a reflet, an ala, a crone, Marti, Vani, a boredom, a self, Fara, Solyman, Ami, an aimak, Algie, Heep, a duma, a sullen, Eridu, Heyse, Perchta, Neilah, a mgt, Patsy, Salomo, Reeta, Kei, Coad, Alves, Siusan, a straw, a toro, Gillett, a carob, Matsu, Kunz, Tolkan, a tear, an acad, a bize, Polo, Jet Sol, a bort, Sletten, an offer, a cran, a lady, Rocca, Roselba, Nevis, Kamila, Stets, a staw, steels, a lev, a taler, a mtn, Urbano, Leena, Isidro, Flita, Deianira, Masai, Kamin, an amba, Roz, Allare, Bilbao, MEP, a ratio, a lurer, Utamaro, DSc, Daile, Danelle, an ivy, Admah, kernoi, a portal, a teg, a mohair, a flair, Cedar, Eva Larue, Cassini, Shak, Azar, a sup, a tsotsi, Tulare, Kenya, Melba, Ceil, Zelten, Gardas, arrobas, Salot, Anatole, Padriac, grana, a tam, Noel, Pau, Italia, Rumi, Lawman, a mitre, Purdum, Hammad, Anakim, a liza, a lib, Andr, an acarid, a flaw, Owain, a veld, a mel, a babu, Ignaz, Amarillo, haleru, a feel, a rooti, tega, a sullage, Troyes, Samain, a cull, an oca, an ora, Teillo, MSN, Oriel, a rayah, Saiva, Telloh, Cinelli, a calf, a roll, a paramita, Chaon, Debir, a savin, a langue, a lamp, Admiral, Vte, Nembutsu, a how, a jai, Hindu, a lai, Rainah, an omni, Baroja, Torr, Utu, a segno, Kemeny, a panel, a sot, Evadne, BSP, OEEC, Nanhai, Marleah, Carnot, Nisse, Carnay, a rant, muskrats, Meryl, Rebecca, MAEd, a rout, Codi, Dame Edna, Estella, Gaeta, Lydda, Lotta, David, Rein, a hammer, Fevre, a dreg, an entrep, Keb, Sakmar, Obala, Owicim, Newel, a lasagne, stones, a syr, a baht, a loq, a rub-a-dub, Ole, Diogenes, Ortiz, a palm, Issei, Demerara, EdB, a sex, Rexane, Domenic, a rasse, Jenica, Neh, a soh, Dru, Kati, atlases, Simmel, yaws, neela, Grus, a rue, Ismene, Goes, specs, Pydna, Batna, Hannah, a tussor, a def, a refit, Orsk, Cuda, Kilar, a cyc, Redleg, Sir, a madafu, Rif, a stover, Pare, Meenen, a doe, Katmai, Levi, algae, Kubelik, Koo, Jaal, a tanner, Good, a kain, Ezar, a kiva, Lohse, Rand, Alveta, Mareld, an alidade, BSEP, an ameer, Fai, Nat, Lucila, PABA, a muon, AEd, EEC, Rossner, wits, a voc, Cimah, Tadema, a glower, a net, a cru, NNE, Ilana, a tabu, Gelett, a spahi, RMC, Gamal, AEC, Rick, a rabal, Leon Lai, Zurek, Currey, a sakai, Bukhara, an albata, a nog, Nonna, Byam, a soar, a matzah, pilei, Shinar, a cir, Gur, Avila, Vidal, a macaw, Adonai, Madag, Almelo, Hanoi, Aoki, Karin, an idyll, an are, Werra, Lipsey, a resin, agapai, a strep, Pisano, Decamp, Palua, Bonaire, Bilek, Corenda, an antiar, Kaleb, a syce, Poree, PIO, Ram, a yerba, Fenn, an antitragus, a retro, Patna, Grega, Yacano, Mimi, a tpd, Luo, Lynna, NHG, a monad, a bid, Jenei, Krall, ennedra, Wajda, Niabi, Dira, Dani, Ruelu, Osei, LCF, Afro, Cabot, Ayr, a cassaba, Rimini, Mavra, NFL, a biog, a dog, Levan, an esne, Jutta, Annabal, Mahamaya, Koal, Xeno, Carol, Rakel, a bale, Neila, Nadaba, Aidin, CPM, a caid, Annam, Derrek, Abdu, a regress, an abl, a gyp, Pansir, a basil, a madwort, Modoc, segni, Knut, a gnaw, Genaro, Kaile, Tonga, Halle, Keane, Vonni, Geb, a donny, Gish, Cern, Abukir, a bait, Erek, a lytta, Faye, Halevi, Namtar, a cpm, a kolo, San, an isotac, an exec, an accra, an irreg, a wax, a fid, a geog, a bottega, Paull, a recall, Uru, guanayes, Dupre, Glenna, Usanis, a motel, Bodrogi, Ezana, Lief, Henig, a fleam, Amman, Gar, a dee, Maldon, Sucy, Mall, ESRO, Moln, a daff, Nut, Lussier, Eiffel, a pore, Lycia, Reef, a cml, Hoad, a kanzu, David Udin, Ednas, Ivon, Kreda, NRAB, Leo, Yo-Yo, hyli, Mafala, a brag, Desiri, a santir, a gunyah, SPCA, NAB, a jetsam, a nazir, Bath, a retailer, ECA, Mitra, Meli, Bonnell, a draw, Nork, Cordell, a collet, a copaiba, Lanai, Ramah, Treat, Rebeka, Volsci, Roda, FDA, West, Royd, litatu, Mosera, Wyck, Batruk, Nissa, HRH, Enos, Lenoir, a litre, Bluhm, Shih, a lash, a clamp, Ondine, Dray, a bagnio, Lisette, Sumac, Cuyp, Seram, Rama, Sorcim, Sac, Eucken, Lonee, Locarno, Magna, Haphsiba, Esra, Manolo, Caria, NADP, Panini, Dail, a meat, ferias, a nub, an ire, Vigor, Cleve, Kiele, Siey, a beeline, Janel, Adamawa, Nikolai, Rufena, Namara, Delft, Riksm', Holli, Masry, a rial, Calle, Zorn, a wort, a warp, Stafani, a germ, a homeroom, Elf, a crenel, a gladiola, Haslett, a brad, Ruffina, a tuna, Raama, Naima, Sidur, Tamah, Knitra, Mayo, BMarE, Mehala, Leid, Dehnel, Ahwaz, a boatel, Ahouh, Nims, a yarak, a carbanil, a saran, a task, a berm, a della, Backs, Mosul, an enamel, a rem, Rafiq, a ritter, Boff, Ursula, Beore, Tyrr, a gusset, Sidoma, Teryl, Suh, Shansi, an ad-lib, Regan, a beldam, a til, Ukr, Algona, Econah, a missive, Tallu, Kalle, Mren, HOLC, Irazu, Ossa, Jordan, a nardoo, Gayl, a gaff, Hun, a sahib, a fcs, a matlo, Haifa, a nonary, Charo, Beds, Cotsen, Nisei, Danita, Mehalek, Ceevah, Badr, an omasum, Beni, a ceiler, OHG, a bal, Chasse, Jesu, a paretta, yadim, a monas, Yoo, BDSA, visaing, a calalu, Kali, Leeth, Savitt, a peto, Boyes, a coed, Hux, a battel, Irra, Hetti, Falla, a vale, Eleni, Vadnee, Laver, a vined, Smallens, Ardehs, Urbani, Ladinos, Deneb, Niv, a greet, Flo, rhytta, Patt, a navette, Vergne, Namur, a lanai, Nicoli, Abbai, Barkley, a nip, Upsala, a missus, Sieg, Asben, Evadnee, Dela, AAAL, Lucas, Sedrah, a deg, FAA, CFI, a nail, Dec, a meg, a drayage, Kariba, Strep, Malayalam, talli, Byrom, a sib, Mozelle, Hiro, Jodl, an aroma, Nedi, a torero, Niles, Theis, Silva, LSM, Harpp, a ya-ta-ta, Sunil, Maher, a fgn, Irene, Danu, Cesar, Alix, a tare, Weig, Dewees, Beria, Sara, an annal, Freddi, Kalil, a kiln, a ctn, an anorak, a dissent, Fedak, a tid, Alvira, Melas, Derrel, a veer, Sal, a snare, HETP, Ynan, Rettig, Narra, Radom, a dug, a bin, a ritual, Eva, Nogas, a hakim, Lida, Stu, Neisse, Jeh, Corette, Nils, Mdoc, Coryell, Aveiro, Reik, Cima, Whitsun, a direx, a molar, Azeria, Tralles, a sod, Lide Li, a hoar, STL, Ash, turfmen, Alanna, Brunei, Shiloh, Amal, a creep, a ligan, a zimarra, BOQ, Sissi, Wolof, a numbat, a deal, Leros, Sucaryl, Lara, Katsina, Jam, PEDir, Braz, a clar, a halal, a mahaleb, Ong, McKay, a gaol, an issue, a mite, Bonar, a haste, Makalu, a plain, an imit, Halbe, Rasht, a btl, a sale, Bolten, Urbas, Soledad, Cmdr, USR, a venom, Dagnah, Staffa, a wag, Alamo, Seif, Chase, lemures, a meed, Darrelle, Figge, Pym, Medawar, a teledu, an ordn, Alogi, Gaspar, Tova, a crepis, Oni, Roanna, a dibbuk, sugis, a data, a cose, Mannes, Merc, Sabatini, Volin, a ditto, Lir, a magnum, a leet, Sheitan, Naha, Corti, Nerita, Set, reals, Saki, Janette, NbE, DBib, an acce, Debs, Margalo, a pagan, an aid, Niter, Cesaria, an emerald, a peen, a lever, an oil, a deceit, a koodoo, Hasin, Bennir, Agnesse, Jeane, Verona, a milo, Kira, Garret, Nagano, Mekn, Hahnert, Settera, GPU, Pagnol, Agna, Kistna, Barber, Everes, a barr, a myriad, an att, Arissa, BSEd, Nakuru, a mayoress, Erdah, Cahn, a swan, a comm, Elkanah, a van, a dustup, a kali, Mia Sara, Kelci, Sayed, a rep, an esu, an amyelia, Debora, AID, Indio, Ralli, Valeda, a diapir, an eds, Maroc, Mitran, a leg, Ovalle, a cab, a nene, a carabid, Dagall, a caracal, a coat, a roseola, dayanim, a regle, Eloisa, Barabbas, a lac, ICAAAA, an aigrette, Sat, a farm, an emetine, Lesak, an annot, Slade, Nida, Motu, Shela, Dupuy, Al Aho, Pike, Madi, Macur, Amato, Flyn, Resor, genae, NMU, Hanako, an eric, a libretto, Cassil, Amann, an ihp, an atm, Aidan, a hamulus, Wed, Kuo, Jawara, Sup, Ulani, Kristel, LaBaw, Aurelie, Weir, a menad, Lorris, Sankaran, a drag, Tupi, Rheita, Chal, Agadir, Balarama, Temesv, Dumm, an atar, a mack, Cupo, Gunar, Omero, Irak, Reine, Dairen, a dogleg, an inner, a nos, Rosio, Risa, Mazatl, a mitt, Aubarta, Nistru, Fredra, Zahavi, Vinn, Alanah, Taal, a mastaba, Lae, Perseid, Dubai, an orig, a lyre, Vassar, Gelb, Osyth, Gilboa, Katzir, Gallus, ape-men, a basic, a bhp, Larned, a gonad, Gog, Kenn, Urbai, Fatah, Carissa, Matless, Elfreda, Nazi, Violle, Janot, Rohn, IATSE, Gereld, a sika, Weil, a row, BSJ, BLL, a peng, a bleb, a glebe, Babur, Adao, Latif, a senna, Gij, a tensor, a prob, a tor, a crap, Pero, Romanov, Adai, Raviv, Arrio, DEI, Romeu, Hild, Hite, Betsy, stamnoi, a tissue, Rinna, Deems, a resist, a pleb, Issi, Pelag, a weir, AHSA, Wisd, Labuan, Iredale, a farl, Osorno, McAllen, Odets, a rec'd, Etti, Minho, Jaf, Herod, a rasa, Soo, Rabah, Ceram, a hanap, an occas, an iguana, a scf, Minot, a casaba, Jarek, Irma, caci, Sadiras, Sasebo, Zeb, an impv, Claire, Glaab, Belloc, a we'd, Algoma, Sera, Lyell, OSB, Frayda, Limassol, Farra, Mir, United, Samanid, a birr, Hatasu, an arcade, Harod, a sign, a snort, Sewoll, a ware, Diana Sno, Comus, Sneed, a gula, an era, an ital, a saleroom, Heyde, Haiti, teals, Oneill, Ibsen, ACW, Yeh, Teagan, a kat, Shilh, a parole, Lev, Elyn, Amy Lynn, a gleba, Dianne, Hegyera, Cad, Amen-Ra, a kinema, Damali, Brigid, a kelt, Rafael, Eudoca, a love, MBA, Harts, an areca, Amata, Merill, a cobra, Gati, Vega, BALPA, Rhu, BAO, Neely, a dal, Hamed, a stall, a bul, Huda, Genoese, a bai, Tyra, Maritsa, an inn, a manner, Amador, a ballad, Eugen, a lunes, Seal, Uta, Mraz, ibises, a rcd, Lower, a daraf, Fendig, a sop, a kakapo, Six, a zany, Urbannai, Rok, a mabela, Derian, a gold, Donati, a tail, Gayel, Tutt, a wait, a liana, Kelsi, a samfoo, Ratib, a viz, tragi, a pood, an amah, an amatol, Abu-Bekr, a peh, Tuonela, Cdr, a llama, Truc, APSA, Susy, Lait, Clo, Nieberg, a pip, an elytron, Einar, a ryke, Kolar, a nidana, Genolla, FERA, Horeb, a brob, a typ, Surinam, Holmen, Tupis, a kilo, Praha, Mora, moduli, Gyas, Nemery, Belg, Acre, Modla, Weihs, a roti, Nada, a retd, Ald, Rayne, Grimm, a pail, Upali, Brezin, Biela, Lloyd, Nicolle, Benil, Martainn, a loca, a pignus, Noh, Kroll, a bet, Isaak, an ake, Kajaani, Wenona, an isogriv, Pool, a snag, Haydn, Ogpu, Caetano, Albi, Binah, Susu, Sakai, a kabob, Kai, WPB, Lalu, a fueller, Evan, an eyecup, a sir, For, a heb-sed, a vinyl, Lepp, Ansilma, Hardden, Artina, Alkoran, Garrek, caballeros, Alsip, Ohara, Gainor, Bodnar, Willem, an ogre, Basir, Demus, Neda, a coryza, Jataka, Zaneta, Maya, Seta, Cdoba, Krebs, Aisne, Burner, Hamsun, Most, a rump, CCR, a barih, Savona, nates, Craner, Evatt, Edla, Belak, a scud, a ruse, Case, Slavonic, a play, Piero, Karol, Yank, Isac, Sotho, Bellew, Sorb, Daisi, Viyella, Mozart, a claro, Aneto, Vano, Michale, Legra, Syr, Walburga, a daw, Zebadiah, Mana, Leor, SJD, a citadel, a metrise, a frt, an ogle, Nero, Kavla, Caen, ACLU, a barbut, a sei, Groscr, Foy, Harden, Kiah, a natl, USN, Caz, Agni, Tad, Deryl, Canad, Elam, a karma, Taino, Tirol, a valet, Tiphani, Dann, a soup, Mallina, Mientao, Buff, a ryot, a sumo, Nama, Zapata, Myrtie, Dreann, an alamo, an anil, Sim, a girosol, a patin, Ruel, FDR, a reverend, a koto, paratroops, Liv, Asur, a topman, AKC, a pol, a borage, IrGael, Ardussi, Pos, Lim, Bme, Ismaili, Tori, Pasadis, a novel, Sucre, Caleb, a rockoon, a bad, a nil, Bomu, Tatia, Hopeh, Talos, a tuatara, a desmid, a veil, Riane, Vins, a caracara, Borg, Adlei, a bed, Yenisei, Latini, Kibei, Docile, Kaila, a lav, Aili, Reni, a genre, gymsia, Maleki, Tatman, a toom, Allah, Sansone, Loy, Nellir, Gaye, Cadiz, Timaru, Alina, Millian, a sozin, Blair, a moolah, a yew, a lick, Cornew, Obeid, a snug, Odlo, Cana, Tiga, Lyall, a petasus, Orebro, Jamill, a subah, a knot, Sabbat, Pitana, Towrey, abris, Senlac, a jager, a nasute, Pain, a lido, Goulet, SRO, Jamal, a wadi, an ord, Nusku, lire, Taira, Zenas, a maya, Rosella, Vanir, a stannum, Roti, Munniks, Idette, Susa, Dud, Dunson, a colic, a credo, Kaz, Akili, Meiji, Fadil, a saki, NADH, Sadat, a moss, a butat, a goop, Suelo, Dallin, a gram, a coda, Deer, FFI, a kaka, Morel, a wiz, Zulu, a purse, Torelli, Demetre, Deni, Duleba, MATS, a fatso, Cynara, Aligarh, Pashto, Bantam, a telegram, a cit, Tangier, a kCi, Reede, Oates, Sumbawa, a dir, FSR, Elata, Tonye, Sokul, a yelp, piscinae, Cop, Yukio, an asb, a frigger, ICC, a snell, Ewell, Heidt, Lemal, Cyd, a remake, ScB, a tallow, an usw, a tea, Gunn, a gaffe, Benia, Pavla, a ben, an upset, a raid, Nedrah, PPI, Mikol, an ana, Trevor, Roger, a malm, an air, a kinoo, Mays, Adnah, a fete, Lynn, an abac, Rann, Espoo, Peery, tsuba, Dantean, Ainu, Soll, UNHCR, a bdl, an orseille, whales, BFA, a mitra, MAA, a butanol, a vac, Scylla, Garik, a raob, a sloop, a dram, a picul, Tawsha, Bassett, Evanne, Daveta, Gwenni, a shp, a restr, a weldor, a dill, a ctg, Staw, a goad, Ludwog, a minima, Rep, Petar, Isla, Gaige, Dean, berets, a banat, Urdu, Hereld, an anime, JFK, Dhar, a dkg, a mace, Flood, a lasso, a tgn, a whirr, a camoca, Reb, Omarr, a humidor, Deena, a fife, Maribor, a rill, Fanya, Konakri, Krenn, Oconnor, a nom, Gad, Skirnir, Rollin, a sirup, Moyra, Matane, Won, ASTM, ChemE, Remy, a fytte, Had, an ergate, Lavena, Elis, Pravda, Dom, an ait, a slab, a regr, a barege, a yaw, Obelia, Joacima, a cfm, a tessera, Camb, Piegari, Masao, Tao, Bealle, Dunois, SECAM, Herse, Yetac, Sumatra, Benoit, a coverall";
// console.log(reverseVowels("hello")); //holle
// console.log(reverseVowels("leetcode")); //leetcode
console.log(reverseVowels(a)); //Aa
