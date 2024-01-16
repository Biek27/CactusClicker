const items = [
// Ebene 1  
  { name: 'Schlichte Lederhandrüstung(Handschuh)', floor: 1, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Anfänger Hacke(Hacke)', floor: 1, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Holzspitzhacke(Spitzhacke)', floor: 1, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Holzaxt(Axt)', floor: 1, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Klassische Lederschulterpolster(Schultern)', floor: 1, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Traditionelle Lederhandhaube(Handschuh)', floor: 1, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Unprätentiöse Lederpantalon(Hose)', floor: 1, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Schlichte Lederleggins(Hose)', floor: 1, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Leichte Lederschützer(Hose)', floor: 1, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Eisenhalskette(Halskette)', floor: 1, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Nietenverstärkter Brustharnisch(Brust)', floor: 1, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Makellose Schulterpolster(Schultern)', floor: 1, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Stählerner Handhandschuh(Handschuh)', floor: 1, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Flammenfederschutzhandschuhe(Handschuh)', floor: 1, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Glanzlicht-Lederhose(Hose)', floor: 1, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Seelenschlinger(Schwert)', floor: 1, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Donnerkraft-Halbschuhe(Schuhe)', floor: 1, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Aurora-Flügelhülle', floor: 1, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Band des Heldens', floor: 1, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Kristalltretter(Schuhe)', floor: 1, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Sternenflug', floor: 1, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Azurblitz', floor: 1, rarity: 'Legendär', attributes: 'dummy' },

// Ebene 2
  { name: 'Minimalistisches Lederband', floor: 2, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Natürliche Legederleggings(Hose)', floor: 2, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Gebeulte Stahlbeinkleider(Hose)', floor: 2, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Altes Spaltbeil(Axt)', floor: 2, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Klassische Lederschultern(Schultern)', floor: 2, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Geprägte Panzerschultern(Schultern)', floor: 2, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Armbrust des Jägermanns(Armbrust)', floor: 2, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Panzerschuppentretter(Schuhe)', floor: 2, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Präzisionsstahl(Schwert)', floor: 2, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Harpyienstachel(Bogen)', floor: 2, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Stählernder Panzer(Brust)', floor: 2, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Holzspitzhacke(Spitzhacke)', floor: 2, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Hochlandringe', floor: 2, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Königsklinge(Schwert)', floor: 2, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Sternenstahl Leggings(Hose)', floor: 2, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Inferno Klinge(Schwert)', floor: 2, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Mitternachts Beinschützer(Hose)', floor: 2, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Mondschatten-Lederschutz(Brust)', floor: 2, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Donnerkraft-Ledergürtel(Gürtel)', floor: 2, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Sternlicht Brustplatte(Brust)', floor: 2, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Nebelverhangene Lederschultern(Schultern)', floor: 2, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Ätherischer Lederriemen(Gürtel)', floor: 2, rarity: 'Legendär', attributes: 'dummy' },

// Ebene 3
  { name: 'Brüchiger Langbogen(Bow)', floor: 3, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Rostiges Kriegsbeil(Axt)', floor: 3, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Lässige Lederschale(Brust)', floor: 3, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Kupferring(Ring)', floor: 3, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Klare Lederschulterpolster(Schultern)', floor: 3, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Imperiale Plattentretter(Schuhe)', floor: 3, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Bauchstecher(Armbrust)', floor: 3, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Schlichte Lederschulterhaube(Schultern)', floor: 3, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Eisenverstärkter Helmschutz(Helm)', floor: 3, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Diamond-Woven Leggings(Hose)', floor: 3, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Drachenherzhalskette(Halskette)', floor: 3, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Steinwurzstampfer', floor: 3, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Holzspitzhacke(Spitzhacke)', floor: 3, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Titanumhüllte Lederfinger', floor: 3, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Drachenlederhandschuhe(Handschuh)', floor: 3, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Aurora-Flügelriemen', floor: 3, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Majestic.Cactus.Hoe(Hacke)', floor: 3, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Phönixflügelläufer', floor: 3, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Vampirsäbel', floor: 3, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Auroras Schritte(Schuhe)', floor: 3, rarity: 'Legendär', attributes: 'dummy' },

// Ebene 4
  { name: 'Leichte Armbrust(Armbrust)', floor: 4, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Kadettenarmbrust(Armbrust)', floor: 4, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Holzspitzhacke(Spitzhacke)', floor: 4, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Stahlfunkenwerfer(Armbrust)', floor: 4, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Stahlbeinschützer(Hose)', floor: 4, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Fährtenbogen(Bogen)', floor: 4, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Präzise Axt(Axt)', floor: 4, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Klassische Trekkingsandalen(Schuhe)', floor: 4, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Kurzbogen des Drachentöters(Bogen)', floor: 4, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Klassische Lederpantalon(Hose)', floor: 4, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Freigiebiger Langbogen(Bogen)', floor: 4, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Fichtenstecher(Armbrust)', floor: 4, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Riffaxt(Axt)', floor: 4, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Infernospalter(Axt)', floor: 4, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Stählernde Stiefel des Mutes(Schuhe)', floor: 4, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Mondsichel-Bodengrabber(Hacke)', floor: 4, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Xardos letzter Wille(Axt)', floor: 4, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Roter Ledergürtel(Gürtel)', floor: 4, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Kältebringer(Schwert)', floor: 4, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Seelenbohrer', floor: 4, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Drachenzahn(Schwert)', floor: 4, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Göttliche Lederhandhaube', floor: 4, rarity: 'Legendär', attributes: 'dummy' },

// Ebene 5
   { name: 'Abgenutzer Stahlpanzergurt(Gürtel)', floor: 5, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Plattenbeinschützer', floor: 5, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Abgenutze Armbrust(Armbrust)', floor: 5, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schlichte Lederschulterumhänge(Schultern)', floor: 5, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Magieerfüllter Kopfpanzer(Helm)', floor: 5, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Robuster Feldfurcher(Hacke)', floor: 5, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Adeptenbogen(Bogen)', floor: 5, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Ritterliche Handhaube', floor: 5, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Ring der Stärke(Ring)', floor: 5, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Duell Klinge(Schwert)', floor: 5, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Leichte Alltagshosen(Hose)', floor: 5, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Obsidianschuppen Brustpanzer(Brust)', floor: 5, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Stahltretter der Tapferkeit(Schuhe)', floor: 5, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Saphirumhüllte Feldhacke(Hacke)', floor: 5, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Glanzlicht-Lederhandhaube', floor: 5, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Eisenballastsabatons(Schuhe)', floor: 5, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Holzspitzhacke(Spitzhacke)', floor: 5, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Titanumhüllter Lederkopfschutz(Helm)', floor: 5, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Sternenflug', floor: 5, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Dunkelmond Helmvisier', floor: 5, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Drachenschuppen Kriegsbrustplatte(Brust)', floor: 5, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Mitternachts Brustpanzer(Brust)', floor: 5, rarity: 'Legendär', attributes: 'dummy' },

// Ebene 6 
  { name: 'Solide Plattenrüstung', floor: 6, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Bequemer Ledestreifen', floor: 6, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Streitaxt', floor: 6, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schlichte Lederhaube', floor: 6, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schmerzreperierarmbrus', floor: 6, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Eisiges Amulett', floor: 6, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Glutfunken Anhänger', floor: 6, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Klarer Ledergürtel', floor: 6, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Ritterliche Brustplatte', floor: 6, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Zweckmäßige Lederfinger', floor: 6, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Halskette der Präzision', floor: 6, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Drachenauge', floor: 6, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Mondsichel Gürtel', floor: 6, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Sengende Flammenschleuder', floor: 6, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Amulett der Geisterträne', floor: 6, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Edle Lederhandrüstung', floor: 6, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Nebelverhangene Lederhandschuhe', floor: 6, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Nebelverhangener Ledergürtel', floor: 6, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Mithrilstahl Handrüstung', floor: 6, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Lichtschuss(Armbrust)', floor: 6, rarity: 'Episch', attributes: 'dummy' },

// Ebene 7
 { name: 'Kupfergeflochtenes Amulett', floor: 7, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Holzspitzhacke(Spitzhacke)', floor: 7, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Alter Fäller', floor: 7, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schlammige Brustschutz(Brust)', floor: 7, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Bequeme Lederhandschuhe(Handschuhe)', floor: 7, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Panzerschuppen Beinkleider(Hose)', floor: 7, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Runenverzierte Beinkleider(Hose)', floor: 7, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Natürliche Lederfinger', floor: 7, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Antike Lederstrap', floor: 7, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Nietenverstärkte Plattenstiefel(Schuhe)', floor: 7, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Korallenbogen(Bogen)', floor: 7, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Ritterliche Plattenbeinkleider(Hose)', floor: 7, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Antikes Lederband', floor: 7, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Eisenbestücke Florastampfer(Schuhe)', floor: 7, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Sonnengewobener Kriegsharnisch(Brust)', floor: 7, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Glanzlicht-Lederhandhaube', floor: 7, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Glanzvolle Lederpanzerung(Helm)', floor: 7, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Drachenstahlstiefel(Schuhe)', floor: 7, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Höllischer Kriegsbogen(Bogen)', floor: 7, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Medaillon des Blutzorns', floor: 7, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Titanstahl Wurzelbrecher(Hacke)', floor: 7, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Kristallklare Lederhandrüstung(Handschuh)', floor: 7, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Holzspitzhacke(Spitzhacke)', floor: 7, rarity: 'Legendär', attributes: 'dummy' },

// Ebene 8
  { name: 'Zweckmäßige Wildlederstiefel', floor: 8, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Stumpfes Beil', floor: 8, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Magieerfüllte Stahlhandschuhe', floor: 8, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Kriegsherren Panzergürtel', floor: 8, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schädelring', floor: 8, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Klare Lederhülle', floor: 8, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Thorium Beinschützer', floor: 8, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Splittermal', floor: 8, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Nietenverstärkter Helmpanzer', floor: 8, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Blutrünstiger Helmpanzer', floor: 8, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Lässiger Lederkopfschutz', floor: 8, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Tigerband', floor: 8, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Dezentes Lederband', floor: 8, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Minimalistische Lederhandrüstung', floor: 8, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Lederstrap', floor: 8, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Makelloser Helmschutz', floor: 8, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Blutrünstige Brustplatte', floor: 8, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Auge der Flammen', floor: 8, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Mondsichel Panzerharnisch', floor: 8, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Dämmerungsflug-Lederhaube', floor: 8, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Titanumhüllter Lederkopfschutz(Helm)', floor: 8, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Sternenflug', floor: 8, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Dunkelmond Helmvisier', floor: 8, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Drachenschuppen Kriegsbrustplatte(Brust)', floor: 8, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Mitternachts Brustpanzer(Brust)', floor: 8, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Blitzzorn(Schwert)', floor: 8, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Nekromantenblick(Armbrust)', floor: 8, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Höllischer Enthaupter(Axt)', floor: 8, rarity: 'Legendär', attributes: 'dummy' },

// Ebene 9
  { name: 'Gediegene Lederschulterpolster', floor: 9, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Verbeulte Plattenstiefel', floor: 9, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Steinschwert(Schwert)', floor: 9, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Lässiger Kopfschützer', floor: 9, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Imperialer Plattengürtel', floor: 9, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Imperialer Platttenhelm', floor: 9, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Ledergürtel', floor: 9, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schlichte Ledertretter', floor: 9, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Leichte Lederschutzhandschuhe', floor: 9, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Zarter Ledergürtel', floor: 9, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Wallwacht Kopfschutz', floor: 9, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Flora Handhaube', floor: 9, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Holzspitzhacke', floor: 9, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Blutmond', floor: 9, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Flammentreter', floor: 9, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Saphirumhüllte Beinschützer', floor: 9, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Dämonen Talisman', floor: 9, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Dämmerungsflug Lederhaube', floor: 9, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Schneewind', floor: 9, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Anhänger des Todesblick', floor: 9, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Mitternachts Handpanzer', floor: 9, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Titanen Entzweier', floor: 9, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Arkanstahl Helmschutz(Helm)', floor: 9, rarity: 'Legendär', attributes: 'dummy' },

// Ebene 10 
  { name: 'Schlichter Lederhelm', floor: 10, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Robuster Plattenhelm', floor: 10, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Verbeulte Axt', floor: 10, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schmierige Plattenstiefel', floor: 10, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Kurzbogen', floor: 10, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Adeptenaxt', floor: 10, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Klassischer Lederfinger', floor: 10, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Panzerschuppen Gürtel', floor: 10, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schlichtes Lederband', floor: 10, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Ocelotzahn', floor: 10, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Klinge der Wallwach', floor: 10, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Saphirumhüllte Panzerfinger', floor: 10, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Raimondos Anhänger', floor: 10, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Rubinrote Kriegshandschuhe', floor: 10, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Mondblick-Lederschutz', floor: 10, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Abyssalwächter', floor: 10, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Sonnengewobene Kriegshose', floor: 10, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Angus Abzeichen der Dunkelheit', floor: 10, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Arkanstahl Schulterhaube', floor: 10, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Götterstahl Brustpanzer', floor: 10, rarity: 'Selten', attributes: 'dummy' },

// Ebene 11
  { name: 'Leichter Lederkappe', floor: 11, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Abgenutzte Kriegshosen', floor: 11, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Zweckmäßiger Ledergürtel', floor: 11, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Tigeraugen Kette', floor: 11, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Breite Klinge', floor: 11, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Ring des Schützen', floor: 11, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Gediegene Leinenpantalon', floor: 11, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Sonnengewobener Kriegsgürtel', floor: 11, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Halskette der Macht', floor: 11, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Lichtschild-Trekkingschuhe', floor: 11, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Lichtschildstampfer', floor: 11, rarity: 'Legendär', attributes: 'dummy' },
  { name: 'Donnerkraft-Lederweste', floor: 11, rarity: 'Legendär', attributes: 'dummy' },

// Ebene 12
  { name: 'Zerschmetterer Langbogen(Bogen)', floor: 12, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Gebeulte Plattenrüstung', floor: 12, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schlammiger Talisman(Halskette)', floor: 12, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Leichter Kopfpanzer (Helm)', floor: 12, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Thorium Handpanzerhandschuhe', floor: 12, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Zorn der Wallwacht(Armbrust)', floor: 12, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Traditioneller Ledergürtel', floor: 12, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Bequemer Kopfschutz(Helm)', floor: 12, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Kriegsherrn Beinschützer(Hose)', floor: 12, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Sengender Langbogen(Bogen)', floor: 12, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Imperialer Schulterpanzer', floor: 12, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Magieerfüllter Stahlgürtel', floor: 12, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Hauer der Dorkahn', floor: 12, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Flora Handhaube', floor: 12, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Holzspitzhacke', floor: 12, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Blutmond', floor: 12, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Flammentreter', floor: 12, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Saphirumhüllte Beinschützer', floor: 12, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Dämonen Talisman', floor: 12, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Dämmerungsflug Lederhaube', floor: 12, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Schneewind', floor: 12, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Anhänger des Todesblick', floor: 12, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Mitternachts Handpanzer', floor: 12, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Titanen Entzweier', floor: 12, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Arkanstahl Helmschutz(Helm)', floor: 12, rarity: 'Episch', attributes: 'dummy' },

// Ebene 13
  { name: 'Schlundarmbrust(Armbrust)', floor: 13, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Marode Armbrust(Armbrust)', floor: 13, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Stumpfe Klinge', floor: 13, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Weicher Lederschutz', floor: 13, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Lässige Laufpantoffeln', floor: 13, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schlichte Ledertreter', floor: 13, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Zeitloser Lederschutz', floor: 13, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Stumpfes Claymore', floor: 13, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Bequeme Lederschürtze', floor: 13, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Sengenderschuss', floor: 13, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Schiefer Helmbuckel', floor: 13, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Schiefer Gürtel(Gürtel)', floor: 13, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Band des Bezwingers', floor: 13, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Halskette des Bezwingers', floor: 13, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Stählerner Gürtel', floor: 13, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Gesang der Pfeile(Bogen)', floor: 13, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Schmerzwerfer(Bogen)', floor: 13, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Sonnengewobener Kriegshelm(Helm)', floor: 13, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Hexenschuss(Armbrust)', floor: 13, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Dämonenband', floor: 13, rarity: 'Selten', attributes: 'dummy' },
  { name: 'Band der dunklen Herrschaft', floor: 13, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Ragnaröks Beinkleider', floor: 13, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Holzaxt', floor: 13, rarity: 'Episch', attributes: 'dummy' },

// Ebene 14
  { name: 'Malachit Anhänger', floor: 14, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Plattenstahlhelm', floor: 14, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Runenverzierter Kopfpanzer', floor: 14, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Runenverzierter Brustpanzer', floor: 14, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Thorium Brustschutz', floor: 14, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Makellose Handstutzschulpen', floor: 14, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Herzensucher', floor: 14, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Flora Plattenbeinschützer', floor: 14, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Lässige Lederhandrüstung', floor: 14, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Trolltöter(Schwert)', floor: 14, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Glanzvolle Heldenhosen', floor: 14, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Brise-Lufttreter', floor: 14, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Hand des Todes', floor: 14, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Alptraumhafter Spalter(Axt)', floor: 14, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Glanzlicht-Ledergürtel', floor: 14, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Herzensbrecher(Bogen)', floor: 14, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Donnerkraft-Lederhandrüstung', floor: 14, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Sebatons des Weltenfresser', floor: 14, rarity: 'Außergewöhnlich', attributes: 'dummy' },
  { name: 'Göttliche Lederhülle', floor: 14, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Lichtschild-Ledergamaschen', floor: 14, rarity: 'Episch', attributes: 'dummy' },
  { name: 'Klinge des Schatzmeisters', floor: 14, rarity: 'Episch', attributes: 'dummy' },
  { name: 'CACTUS_CLICKER.tools.bamboo_shatterer_wood_chopper', floor: 14, rarity: 'Episch', attributes: 'dummy' },

// Ebene 15
  { name: 'Zerschmettere Armbrust', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schlammiger Stirnschild', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'CACTUS_CLICKER.tools.robust_mushroom_chopper', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Magieerfüllte Plattenhosen', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Distelring', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Stahlschutzfinger', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Gediegene Lederhandschuhe', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Ring des Donners', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Wirbelaxt', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Titanstahl Plattenbeinschützer', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Stürmische Sehne', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Mondblick-Lederpantalon', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Mondblick-Lederschutz', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Morgentau-Lederhelm', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Donnergroll-Lederhelm', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Donnerfaust-Panzerhandbuckel', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Plattenschuhe des Legionärs', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Kristallklare Laufsohlen', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Verlore Hacke des Kaktus Champions', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Aurora-Flügel-Lederhandschuhe', floor: 15, rarity: 'Gewöhnlich', attributes: 'dummy' },

// Ebene 16
  { name: 'Rostige Piekser', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Rostige Plattenstiefel', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Natürliche Lederschulterhaube', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Leichte Lederschulterumhänge', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Ewige Klinge', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Geprägte Plattenhelm', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Scharfkantiger Bodenhauer', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Traditionelle Wildlederpantoffeln', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Ewiges Beil', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Kolossale Spaltaxt', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'CACTUS.CLICKER.tools.masterful_dark_corpse_woodcutter', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Antike Lederhaube', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Verstärkte Lederhandrüstung', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Bequeme Ledergamaschen', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Rainmondos Siegelring', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schwert des Zusammenhalts', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'CACTUS.CLICKER.tools.frostcatcher_mushroom_splitting_axe', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Eiskalter Henker', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Mondschatten-Lederfinger', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Titanstahl Helmdeckung', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Ragnarök', floor: 16, rarity: 'Gewöhnlich', attributes: 'dummy' },

// Ebene 17
  { name: 'Kadettenbogen', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Gediegener Lederhandgürtel', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Gediegener Lederhelm', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Abgenutzer Kopfpanzer', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Plattengürtel', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Starke Armbrust', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Unprätentiöse Lederhandhaube', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Runenverzierter Stahlgurt', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'CACTUS.CLICKER.tools.solid_dark_oak_axe', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Thorium Schulterplatten', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Klassische Lederhaube', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Schattenumhüllte Lederbeinkleider', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Lässige Ledergamaschen', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Band der Heilung', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Raimondos Unheil', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Geistertränenband', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Titanstahl Schulterumhänge', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Dunkle Vollstreckung', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' },
  { name: 'Donnerkraft-Lederpanzerung', floor: 17, rarity: 'Gewöhnlich', attributes: 'dummy' }, // Add more items as needed
];

function searchTable() {
  // Obtain the filter string from the user input field
  let filter = document.getElementById('searchInput1').value.toUpperCase();

  // Obtain the table from the DOM
  let table = document.getElementById('data-table');

  // Iterate through each row in the table
  for (let row of table.rows) {
      // Skip the header row (the first row)
      if (row.rowIndex === 0) continue;

    // Set the initial display of each row to "none"
    row.style.display = 'none';

    // Iterate through each cell in the row
    for (let cell of row.cells) {
      // Check if the cell contains the filter string
      if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
        // If so, show the row by setting its display to "table-row"
        row.style.display = 'table-row';

        break;
      }
    }
  }
}


function generateTable(items) {
    let tbody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
    let tr, td; 

    // Empty the table body
    tbody.innerHTML = "";

    // Iterate through each item in the array
    items.forEach(item => {
        // Create a new row
        tr = document.createElement("tr");
      
        // Create and append cells for each item property
        Object.values(item).forEach(value => {
            td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);

            // Add a class to the row based on the cell's content
            switch (td.textContent.toLowerCase()) {
                case 'episch'.toLowerCase():
                    tr.classList.add('cell-epic');
                    break;
                case 'legendär'.toLowerCase():
                    tr.classList.add('cell-legendary');
                    break;
                case 'selten'.toLowerCase():
                    tr.classList.add('cell-rare');
                    break;
                case 'außergewöhnlich'.toLowerCase():
                    tr.classList.add('cell-uncommon');
                    break;
            }
        });

        // Append the row to the table body
        tbody.appendChild(tr);
    });
}

// Call the function to generate the table using your 'items' array
generateTable(items);                         
searchTable();

 // Obtain the table from the DOM
  let table = document.getElementById('data-table');

  // Iterate through each row in the table
  for (let row of table.rows) {
      // Skip the header row (the first row)
      if (row.rowIndex === 0) continue;
      // Iterate through each cell in the row
    
    for (let cell of row.cells) {
      console.log(cell.textContent.toLowerCase());
      // Check if the cell contains the filter string
      if (cell.textContent.toLowerCase().indexOf("außergewöhnlich") > -1) {
        row.classList.add('cell-uncommon');
      } 
      if (cell.textContent.toLowerCase().indexOf("selten") > -1) {
        row.classList.add('cell-rare');
      }
      if (cell.textContent.toLowerCase().indexOf("episch") > -1) {
        row.classList.add('cell-epic');
      }
      if (cell.textContent.toLowerCase().indexOf("legendär") > -1) {
        row.classList.add('cell-legendary');
      }
    }
  }
