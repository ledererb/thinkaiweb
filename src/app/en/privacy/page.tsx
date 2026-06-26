"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedHeroBg from "@/components/AnimatedHeroBg";

export default function Privacy() {
    return (
    <LanguageProvider lang="en">
        <>
            <Navigation />
            <main>
                <section className="privacy-hero">
                    <AnimatedHeroBg />
                    <div className="container hero-inner">
                        <h1>Privacy Policy</h1>
                        <p className="lead">
                            A ThinkAI Kft. adatvédelmi nyilatkozata és adatkezelési irányelvei.
                        </p>
                    </div>
                </section>

                <section className="privacy-content">
                    <div className="container content-wrap">
                        <h2>1. Bevezetés</h2>
                        <p>
                            A ThinkAI Kft. (1111 Budapest, Lágymányosi utca 12. Fsz. 2. ajtó., a
                            továbbiakban szolgáltató, adatkezelő), mint adatkezelő, magára nézve
                            kötelezőnek ismeri el jelen jogi közlemény tartalmát. Kötelezettséget
                            vállal arra, hogy tevékenységével kapcsolatos minden adatkezelés megfelel
                            a jelen szabályzatban és a hatályos jogszabályokban meghatározott
                            elvárásoknak.
                        </p>
                        <p>
                            A ThinkAI Kft. thinkai.hu címen elérhető szolgáltatásának
                            adatkezeléseivel kapcsolatosan felmerülő adatvédelmi irányelvek
                            folyamatosan elérhetők a{" "}
                            <a href="https://thinkai.hu/adatvedelem/">
                                https://thinkai.hu/adatvedelem/
                            </a>{" "}
                            címen.
                        </p>
                        <p>
                            A ThinkAI Kft. fenntartja magának a jogot jelen tájékoztató bármikori
                            megváltoztatására. Természetesen az esetleges változásokról kellő időben
                            értesíti közönségét. Amennyiben felhasználónknak olyan kérdése lenne,
                            mely jelen közleményünk alapján nem egyértelmű, kérjük, írja meg
                            nekünk, és kollégánk megválaszolja kérdését.
                        </p>
                        <p>
                            A ThinkAI Kft. elkötelezett felhasználói és partnerei személyes
                            adatainak védelmében, kiemelten fontosnak tartja ügyfelei információs
                            önrendelkezési jogának tiszteletben tartását. A ThinkAI Kft. a személyes
                            adatokat bizalmasan kezeli, és megtesz minden olyan biztonsági,
                            technikai és szervezési intézkedést, mely az adatok biztonságát
                            garantálja.
                        </p>
                        <p>
                            Adatkezelési alapelvei összhangban vannak az adatvédelemmel kapcsolatos
                            hatályos jogszabályokkal, így különösen az alábbiakkal:
                        </p>
                        <ul>
                            <li>1992. évi LXIII. törvény – a személyes adatok védelméről és a közérdekű adatok nyilvánosságáról (Avtv.)</li>
                            <li>1995. évi CXIX. törvény – a kutatás és a közvetlen üzletszerzés célját szolgáló név- és lakcímadatok kezeléséről (Katv.)</li>
                            <li>2000. évi C. törvény – a számvitelről (Számv. tv.)</li>
                            <li>2001. évi CVIII. törvény – az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről (Eker. tv.)</li>
                            <li>2008. évi XLVIII. törvény – a gazdasági reklámtevékenység alapvető feltételeiről és egyes korlátairól (Grt.)</li>
                            <li>2011. évi CXII. törvény – az információs önrendelkezési jogról és az információszabadságról (Infotv.)</li>
                        </ul>

                        <h2>2. Definíciók</h2>
                        <ul>
                            <li><strong>Érintett:</strong> bármely meghatározott, személyes adat alapján azonosított, vagy – közvetlenül vagy közvetve – azonosítható természetes személy.</li>
                            <li><strong>Személyes adat:</strong> az érintettel kapcsolatba hozható adat – különösen az érintett neve, azonosító jele, valamint egy vagy több fizikai, fiziológiai, mentális, gazdasági, kulturális vagy szociális azonosságára jellemző ismeret –, valamint az adatból levonható, az érintettre vonatkozó következtetés.</li>
                            <li><strong>Hozzájárulás:</strong> az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok kezeléséhez.</li>
                            <li><strong>Tiltakozás:</strong> az érintett nyilatkozata, amellyel személyes adatainak kezelését kifogásolja, és az adatkezelés megszüntetését, illetve a kezelt adatok törlését kéri.</li>
                            <li><strong>Data Controller:</strong> az a természetes vagy jogi személy, illetve jogi személyiséggel nem rendelkező szervezet, aki vagy amely az adatok kezelésének célját meghatározza, az adatkezelésre vonatkozó döntéseket meghozza és végrehajtja.</li>
                            <li><strong>Adatkezelés:</strong> az alkalmazott eljárástól függetlenül az adatokon végzett bármely művelet vagy a műveletek összessége, így például gyűjtése, felvétele, rögzítése, rendszerezése, tárolása, megváltoztatása, felhasználása, továbbítása, nyilvánosságra hozatala, összehangolása vagy összekapcsolása, zárolása, törlése és megsemmisítése.</li>
                            <li><strong>Adattovábbítás:</strong> ha az adatot meghatározott harmadik személy számára hozzáférhetővé teszik.</li>
                            <li><strong>Nyilvánosságra hozatal:</strong> ha az adatot bárki számára hozzáférhetővé teszik.</li>
                            <li><strong>Adattörlés:</strong> az adatok felismerhetetlenné tétele oly módon, hogy a helyreállításuk többé nem lehetséges.</li>
                            <li><strong>Adatzárolás:</strong> az adatok továbbításának, megismerésének, nyilvánosságra hozatalának, átalakításának, megváltoztatásának, megsemmisítésének, törlésének, összekapcsolásának vagy összehangolásának és felhasználásának véglegesen vagy meghatározott időre történő lehetetlenné tétele.</li>
                            <li><strong>Adatmegsemmisítés:</strong> az adatok vagy az azokat tartalmazó adathordozó teljes fizikai megsemmisítése.</li>
                            <li><strong>Adatfeldolgozás:</strong> az adatkezelési műveletekhez kapcsolódó technikai feladatok elvégzése, függetlenül a műveletek végrehajtásához alkalmazott módszertől és eszköztől.</li>
                            <li><strong>Adatfeldolgozó:</strong> az a természetes vagy jogi személy, illetve jogi személyiséggel nem rendelkező szervezet, aki vagy amely szerződés alapján adatok feldolgozását végzi.</li>
                            <li><strong>Harmadik személy:</strong> olyan természetes vagy jogi személy, illetve jogi személyiséggel nem rendelkező szervezet, amely vagy aki nem azonos az érintettel, az adatkezelővel vagy az adatfeldolgozóval.</li>
                            <li><strong>Harmadik ország:</strong> minden olyan állam, amely nem EGT-állam.</li>
                        </ul>

                        <h2>3. A ThinkAI Kft. adatkezelésének alapelvei</h2>
                        <p>
                            Személyes adat akkor kezelhető, ha ahhoz az érintett hozzájárul, vagy
                            azt törvény vagy – törvény felhatalmazása alapján, az abban
                            meghatározott körben – helyi önkormányzat rendelete közérdeken alapuló
                            célból elrendeli.
                        </p>
                        <p>
                            Cselekvőképtelen és korlátozottan cselekvőképes kiskorú személy
                            nyilatkozatához a törvényes képviselőjének consenta szükséges.
                        </p>
                        <p>
                            Személyes adatot kezelni csak meghatározott célból, jog gyakorlása és
                            kötelezettség teljesítése érdekében lehet. Az adatkezelésnek minden
                            szakaszában meg kell felelnie e célnak. Csak olyan személyes adat
                            kezelhető, amely az adatkezelés céljának megvalósulásához elengedhetetlen,
                            a cél elérésére alkalmas, csak a cél megvalósulásához szükséges mértékben
                            és ideig.
                        </p>
                        <p>
                            Az érintettet – egyértelműen, közérthetően és részletesen – tájékoztatni
                            kell az adatai kezelésével kapcsolatos minden tényről, így különösen az
                            adatkezelés céljáról és jogalapjáról, az adatkezelésre és az
                            adatfeldolgozásra jogosult személyéről, az adatkezelés időtartamáról,
                            illetve arról, hogy kik ismerhetik meg az adatokat.
                        </p>

                        <h2>4. A személyes adatok köre, az adatkezelés célja, jogcíme és időtartama</h2>
                        <p>
                            A ThinkAI Kft. tevékenységének adatkezelései önkéntes consenton
                            alapulnak. Bizonyos esetekben azonban a megadott adatok egy körének
                            kezelését, tárolását, továbbítását jogszabályok teszik kötelezővé,
                            melyről külön értesítjük közönségünket.
                        </p>

                        <h3>4.1. A thinkai.hu honlap látogatóinak adatai</h3>
                        <p>
                            <strong>Purpose of Data Processing:</strong> a thinkai.hu weboldal látogatása
                            során a ThinkAI Kft. a szolgáltatás teljesítése, működésének
                            ellenőrzése, és a visszaélések megakadályozása érdekében rögzíti a
                            látogatói adatokat.
                        </p>
                        <p>
                            <strong>Legal Basis of Data Processing:</strong> az érintett consenta,
                            illetve az elektronikus kereskedelmi szolgáltatások, valamint az
                            információs társadalommal összefüggő szolgáltatások egyes kérdéseiről
                            szóló 2001. évi CVIII. törvény 13/A. § (3) bekezdése.
                        </p>
                        <p>
                            <strong>A kezelt adatok köre:</strong> a látogatás dátuma és időpontja,
                            a látogató felhasználó számítógépének IP címe, böngészőjének típusa, a
                            megtekintett és az előzőleg látogatott weboldal címe.
                        </p>
                        <p>
                            <strong>Az adatkezelés időtartama:</strong> a honlap megtekintésétől
                            számított 3650 nap.
                        </p>
                        <p>
                            A thinkai.hu címen elérhető weboldal html kódja a ThinkAI Kft.-től
                            független, külső szerverről érkező és külső szerverre mutató
                            hivatkozásokat tartalmaz. E hivatkozások szolgáltatói az ő szerverükre
                            történő közvetlen kapcsolódás miatt felhasználói adatokat képesek
                            gyűjteni.
                        </p>
                        <p>
                            Külső szerverek segítik a honlap látogatottsági és egyéb webanalitikai
                            adatainak független mérését és auditálását (Google Analytics). A mérési
                            adatok kezeléséről az adatkezelők tudnak részletes felvilágosítást
                            nyújtani. Elérhetőségük:{" "}
                            <a href="https://www.google.com/analytics/" target="_blank" rel="noopener noreferrer">
                                www.google.com/analytics/
                            </a>
                        </p>
                        <p>
                            A szolgáltató, illetve a megjelölt külső szolgáltatók a testre szabott
                            kiszolgálás érdekében a felhasználó számítógépén kis adatcsomagot, ún.
                            sütit (cookie) helyeznek el és olvasnak vissza. A sütit a felhasználó
                            képes törölni saját számítógépéről, illetve letilthatja böngészőjében a
                            sütik alkalmazását.
                        </p>

                        <h3>4.2. Egyéb adatkezelések</h3>
                        <p>
                            E tájékoztatóban fel nem sorolt adatkezelésekről az adat felvételekor
                            adunk tájékoztatást. Tájékoztatjuk ügyfeleinket, hogy a bíróság, az
                            ügyész, a nyomozó hatóság, szabálysértési hatóság, a közigazgatási
                            hatóság, illetőleg jogszabály felhatalmazása alapján más szervek
                            tájékoztatás adása, adatok közlése, átadása, illetőleg iratok
                            rendelkezésre bocsátása végett megkeresheti az adatkezelőt.
                        </p>
                        <p>
                            A ThinkAI Kft. a hatóságok részére – amennyiben a hatóság a pontos célt
                            és az adatok körét megjelölte – személyes adatot csak annyit és olyan
                            mértékben ad ki, amely a megkeresés céljának megvalósításához
                            elengedhetetlenül szükséges.
                        </p>

                        <h2>5. A személyes adatok tárolásának módja, az adatkezelés biztonsága</h2>
                        <p>
                            A ThinkAI Kft. számítástechnikai rendszerei és más adatmegőrzési helyei
                            a székhelyén, adatfeldolgozóinál, valamint a Cloudways Ltd és a
                            Mailchimp Ltd által működtetett szervereken találhatók meg.
                        </p>
                        <p>
                            A ThinkAI Kft. a személyes adatok kezeléséhez a szolgáltatás nyújtása
                            során alkalmazott informatikai eszközöket úgy választja meg és
                            üzemelteti, hogy a kezelt adat:
                        </p>
                        <ul>
                            <li>az arra feljogosítottak számára hozzáférhető (rendelkezésre állás);</li>
                            <li>hitelessége és hitelesítése biztosított (adatkezelés hitelessége);</li>
                            <li>változatlansága igazolható (adatintegritás);</li>
                            <li>a jogosulatlan hozzáférés ellen védett (adat bizalmassága).</li>
                        </ul>
                        <p>
                            A ThinkAI Kft. az adatkezelés során megőrzi a titkosságot (megvédi az
                            információt, hogy csak az férhessen hozzá, aki erre jogosult), a
                            sértetlenséget (megvédi az információnak és a feldolgozás módszerének a
                            pontosságát és teljességét), és a rendelkezésre állást (gondoskodik
                            arról, hogy amikor a jogosult használónak szüksége van rá, valóban hozzá
                            tudjon férni a kívánt információhoz).
                        </p>

                        <h2>6. Az adatkezelő adatai, elérhetősége</h2>
                        <table>
                            <tbody>
                                <tr><td><strong>Név</strong></td><td>Think AI Kft.</td></tr>
                                <tr><td><strong>Székhely</strong></td><td>1111 Budapest, Lágymányosi utca 12. Fsz. 2. ajtó</td></tr>
                                <tr><td><strong>Cégjegyzékszám</strong></td><td>01-09-426295</td></tr>
                                <tr><td><strong>Bejegyző bíróság</strong></td><td>Pest megyei bíróság, mint cégbíróság</td></tr>
                                <tr><td><strong>Adószám</strong></td><td>32478620-2-43</td></tr>
                                <tr><td><strong>E-mail</strong></td><td><a href="mailto:hello@thinkai.hu">hello@thinkai.hu</a></td></tr>
                            </tbody>
                        </table>

                        <h2>7. Az adatfeldolgozó adatai, elérhetősége</h2>
                        <table>
                            <tbody>
                                <tr><td><strong>Név</strong></td><td>Cloudways Ltd.</td></tr>
                                <tr><td><strong>Székhely</strong></td><td>52 Springvale, Pope Pius XII Street Mosta MST2653, Malta</td></tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr><td><strong>Név</strong></td><td>The Rocket Science Group LLC.</td></tr>
                                <tr><td><strong>Székhely</strong></td><td>675 Ponce de Leon Ave NE, Suite 5000, Atlanta, GA 30308 USA</td></tr>
                            </tbody>
                        </table>

                        <h2>8. Jogorvoslati lehetőségek</h2>
                        <p>
                            Az érintett tájékoztatást kérhet személyes adatai kezeléséről, valamint
                            kérheti személyes adatainak helyesbítését, illetve – a jogszabályban
                            elrendelt adatkezelések kivételével – törlését az adatfelvételénél
                            jelzett módon.
                        </p>
                        <p>
                            Az érintett kérelmére a ThinkAI Kft. tájékoztatást ad az általa kezelt,
                            illetőleg az általa megbízott feldolgozó által feldolgozott adatairól,
                            az adatkezelés céljáról, jogalapjáról, időtartamáról, az adatfeldolgozó
                            nevéről, címéről és az adatkezeléssel összefüggő tevékenységéről,
                            továbbá arról, hogy kik és milyen célból kapják vagy kapták meg az
                            adatokat. Az adatkezelő a kérelem benyújtásától számított legrövidebb
                            idő alatt, legfeljebb azonban 30 napon belül, írásban, közérthető
                            formában adja meg a tájékoztatást.
                        </p>
                        <p>
                            A ThinkAI Kft. a személyes adatot törli, ha kezelése jogellenes, az
                            érintett kéri, az adatkezelés célja megszűnt, vagy az adatok
                            tárolásának törvényben meghatározott határideje lejárt, azt a bíróság
                            vagy a Nemzeti Adatvédelmi és Információszabadság Hatóság elrendelte.
                        </p>
                        <p>
                            Az érintett a jogainak megsértése esetén az adatkezelő ellen bírósághoz
                            fordulhat. A bíróság az ügyben soron kívül jár el.
                        </p>

                        <div className="authority-box">
                            <h3>Jogorvoslati lehetőség</h3>
                            <p>Panasszal a Nemzeti Adatvédelmi és Információszabadság Hatóságnál lehet élni:</p>
                            <table>
                                <tbody>
                                    <tr><td><strong>Név</strong></td><td>Nemzeti Adatvédelmi és Információszabadság Hatóság</td></tr>
                                    <tr><td><strong>Székhely</strong></td><td>1125 Budapest, Szilágyi Erzsébet fasor 22/c</td></tr>
                                    <tr><td><strong>Postacím</strong></td><td>1530 Budapest, Pf.: 5.</td></tr>
                                    <tr><td><strong>Telefon</strong></td><td>+36 (1) 391-1400</td></tr>
                                    <tr><td><strong>URL</strong></td><td><a href="http://naih.hu" target="_blank" rel="noopener noreferrer">http://naih.hu</a></td></tr>
                                    <tr><td><strong>E-mail</strong></td><td><a href="mailto:ugyfelszolgalat@naih.hu">ugyfelszolgalat@naih.hu</a></td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="copyright">ThinkAI Kft. © 2024 – Minden jog fenntartva</p>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
        main {
          background: var(--background-dark);
          color: #fff;
        }

        /* Hero */
        .privacy-hero {
          padding: 160px 0 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            var(--background-dark) 0%,
            rgba(18, 187, 188, 0.06) 100%
          );
        }
        .hero-inner {
          position: relative;
          z-index: 1;
        }
        h1 {
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          margin-bottom: 16px;
          font-weight: 300;
          color: #fff;
        }
        .lead {
          color: #cbd5e1;
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Content */
        .privacy-content {
          padding: 60px 0 100px;
        }
        .content-wrap {
          max-width: 800px;
          margin: 0 auto;
        }
        h2 {
          font-size: 1.5rem;
          color: var(--accent);
          margin: 48px 0 16px;
          font-weight: 600;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        h3 {
          font-size: 1.15rem;
          color: #e2e8f0;
          margin: 32px 0 12px;
          font-weight: 600;
        }
        p {
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 16px;
          font-size: 0.95rem;
        }
        ul {
          color: #cbd5e1;
          padding-left: 24px;
          margin-bottom: 20px;
        }
        li {
          line-height: 1.7;
          margin-bottom: 8px;
          font-size: 0.95rem;
        }
        a {
          color: var(--accent);
          text-decoration: underline;
        }
        a:hover {
          opacity: 0.8;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0 24px;
        }
        td {
          padding: 10px 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.9rem;
          color: #cbd5e1;
        }
        td:first-child {
          width: 180px;
          white-space: nowrap;
        }
        .authority-box {
          background: rgba(18, 187, 188, 0.06);
          border: 1px solid rgba(18, 187, 188, 0.2);
          border-radius: 12px;
          padding: 28px 32px;
          margin: 40px 0;
        }
        .authority-box h3 {
          margin-top: 0;
          color: var(--accent);
        }
        .copyright {
          text-align: center;
          color: #64748b;
          font-size: 0.85rem;
          margin-top: 60px;
        }
      `}</style>
        </>
    </LanguageProvider>
    );
}