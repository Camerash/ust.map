import React, { Component } from 'react';
import './floor_styles/AC_1.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_1.json';
import Tag from '../Tag';

class AC_1 extends Component {
  constructor(props) {
   super(props);
   this.state = {isInFocus: false};
   this.onLayerClick = this.onLayerClick.bind(this);
  }

  onLayerClick() {
    this.props.onClick(this.props.id);
    this.setState({isInFocus: true});
  }

  render() {
    let tagLayer = null;
    var infoArr = [];
    Object.keys(infoJson).forEach(function(key) {
      infoArr.push(infoJson[key]);
    });

    if(this.state.isInFocus) {
      tagLayer = infoArr.map(item => <Tag id={item.id} key={item.id} width="5700" height="2900" data={item} />)
    } else {
      tagLayer = null;
    }

    return (
      <div>
        <svg id="AC-1" viewBox="0 0 5700 2900" className="floor-svg" style={{
            WebkitTransform: `scale(${this.props.scale},${this.props.scale})`,
            Transform: `scale(${this.props.scale},${this.props.scale})`
          }}>
          <defs />
          <g id="AC-1-BG" className="floor-bg">
            <path
              className="ac-1-cls-1" onClick={this.onLayerClick}
              d="M3674 2781a10 10 0 0 1-10-10v-88a10 10 0 0 1 10-10h107v-53h-513a10 10 0 0 1-10-10v-123h-76a10 10 0 0 1-10-10v-362a10 10 0 0 1 10-10h116v-276h-385l-4 2c9 14 26 40 44 74 24 44 55 110 69 176h78a10 10 0 0 1 10 10v408a10 10 0 0 1-12 10l-64-13-15 61a10 10 0 0 1-13 7l-250-70a10 10 0 0 1-7-12c0-1 28-112 12-250a554 554 0 0 0-251-420 636 636 0 0 0-352-110 624 624 0 0 0-305 82c-1 1-70 38-142 116a609 609 0 0 0-162 367 10 10 0 0 1-10 9l-260-15a10 10 0 0 1-9-10c0-2 1-37 12-94a958 958 0 0 1 71-220 869 869 0 0 1 523-464v-5h-115a10 10 0 0 1-10-10v-344h-640l-183 46a10 10 0 0 1-12-7c-1-4-27-95-6-209 12-66 38-127 77-180a515 515 0 0 1 390-202c54 0 107 11 159 32a564 564 0 0 1 218 168h111v-86a10 10 0 0 1 10-10h164a10 10 0 0 1 10 10v83h223v-80a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10v44h76a10 10 0 0 1 6 2c1 1 43 36 95 36 36 0 68-16 97-48 31-39 33-96 33-96a10 10 0 0 1 10-10h45v-84a10 10 0 0 1 10-10h68v-2a10 10 0 0 1 10-10h42a10 10 0 0 1 10 10v373a10 10 0 0 1-10 10h-48v33a10 10 0 0 1-10 10h-31v39h13a10 10 0 0 1 10 10v173h418V638a10 10 0 0 1 10-10h176a10 10 0 0 1 10 10v174a10 10 0 0 1 9 10v28h96v-26a10 10 0 0 1 9-10V637a10 10 0 0 1 10-10h177a10 10 0 0 1 10 10v599a10 10 0 0 1-10 10h-41v33h227l-1-36c1-13 10-31 33-31 25 0 33 19 34 29v38h178V639a10 10 0 0 1 10-10h424a10 10 0 0 1 10 10v24h50a10 10 0 0 1 10 10v769h219a10 10 0 0 1 10 10v363a10 10 0 0 1-10 10h-93v648a10 10 0 0 1-10 10h-76v129a10 10 0 0 1-10 10h-566a10 10 0 0 1-10-10v-127h-74a10 10 0 0 1-10-10l-2-364a10 10 0 0 1 10-10h78v-274h-258v944a10 10 0 0 1-10 10z"
            />
            <path
              className="ac-1-cls-2 floor-bg-border" onClick={this.onLayerClick}
              d="M2944 511v373h-58v43h-41v59h23v183h438V638h176v184h9v38h116v-36h9V637h177v599h-51v53h247l-1-46s1-21 23-21 24 20 24 20l1 47h198V639h424v34h60v779h229v363h-103v658h-86v139h-566v-137h-84l-2-364h88v-294h-278v954h-242v-88h117v-73h-523v-133h-86v-362h126v-296h-396l-18 6s95 136 120 266h86v408l-74-14-17 70-250-71s114-446-243-680a644 644 0 0 0-358-112c-184 0-310 84-310 84s-282 150-309 490l-259-15s18-568 606-771v-23h-125v-354h-651l-184 47s-107-364 270-537c65-29 126-41 181-41 229 0 372 200 372 200h126v-96h164v93h243v-90h160v54h86s44 38 101 38c33 0 69-12 104-51 35-42 36-103 36-103h55v-94h78v-12h42m0-20h-42a20 20 0 0 0-19 12h-59a20 20 0 0 0-20 20v74h-36a20 20 0 0 0-19 20s-2 54-31 90c-27 29-57 44-89 44-48 0-87-32-88-33a20 20 0 0 0-13-5h-66v-34a20 20 0 0 0-20-20h-160a20 20 0 0 0-20 20v70h-203v-73a20 20 0 0 0-20-20h-164a20 20 0 0 0-20 20v76h-96a584 584 0 0 0-219-167 425 425 0 0 0-352 10h-1c-89 41-159 96-208 163-40 54-67 116-79 185a527 527 0 0 0 7 213 20 20 0 0 0 24 13l182-45h628v334a20 20 0 0 0 20 20h74a983 983 0 0 0-155 76 881 881 0 0 0-151 118 879 879 0 0 0-185 261 968 968 0 0 0-72 222c-11 58-12 94-12 95a20 20 0 0 0 19 21l259 15h1a20 20 0 0 0 20-18c11-137 64-258 158-360a600 600 0 0 1 441-196c120 0 237 37 347 109a544 544 0 0 1 246 412 788 788 0 0 1-12 246 20 20 0 0 0 14 24l250 71a20 20 0 0 0 25-15l13-51 55 10a20 20 0 0 0 24-19v-408a20 20 0 0 0-20-20h-70a576 576 0 0 0-27-84 864 864 0 0 0-41-87c-13-25-26-46-35-61h361v256h-106a20 20 0 0 0-20 20v362a20 20 0 0 0 20 20h66v113a20 20 0 0 0 20 20h503v33h-97a20 20 0 0 0-20 20v88a20 20 0 0 0 20 20h242a20 20 0 0 0 20-20v-934h238v254h-68a20 20 0 0 0-20 21l2 364a20 20 0 0 0 20 19h64v117a20 20 0 0 0 20 20h566a20 20 0 0 0 20-20v-119h66a20 20 0 0 0 20-20v-638h83a20 20 0 0 0 20-20v-363a20 20 0 0 0-20-20h-209V673a20 20 0 0 0-20-20h-40v-14a20 20 0 0 0-20-20h-424a20 20 0 0 0-20 20v630h-159v-29c-2-15-14-38-44-38-16 0-30 8-37 21a46 46 0 0 0-6 19v2l1 25h-207v-13h31a20 20 0 0 0 20-20V637a20 20 0 0 0-20-20h-177a20 20 0 0 0-20 20v171a20 20 0 0 0-9 16v16h-76v-18a20 20 0 0 0-9-16V638a20 20 0 0 0-20-20h-176a20 20 0 0 0-20 20v511h-398V986a20 20 0 0 0-20-20h-3v-19h21a20 20 0 0 0 20-20v-23h38a20 20 0 0 0 20-20V511a20 20 0 0 0-20-20z"
            />
            <path
              className="ac-1-cls-1" onClick={this.onLayerClick}
              d="M4010 1054c-24 0-32-18-33-28a10 10 0 0 1 0-1v-61a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v60a10 10 0 0 1 0 1c-1 10-9 29-34 29z"
            />
            <path
              className="ac-1-cls-2 floor-bg-border" onClick={this.onLayerClick}
              d="M4035 964v60s-2 20-24 20h-1c-21 0-23-19-23-19v-61h48m0-20h-48a20 20 0 0 0-20 20v61a20 20 0 0 0 0 2c2 15 14 37 43 37h1c16 0 29-7 37-19a44 44 0 0 0 7-19 20 20 0 0 0 0-2v-60a20 20 0 0 0-20-20z"
            />
            <path
              className="ac-1-cls-1" onClick={this.onLayerClick}
              d="M3086 1056c-24 0-32-18-33-28a10 10 0 0 1 0-1v-61a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v61c-1 10-10 29-34 29z"
            />
            <path
              className="ac-1-cls-2 floor-bg-border" onClick={this.onLayerClick}
              d="M3111 966v60s-2 20-24 20h-1c-21 0-23-19-23-19v-61h48m0-20h-48a20 20 0 0 0-20 20v61a20 20 0 0 0 0 2c1 15 14 37 43 37h1c16 0 29-7 37-19a44 44 0 0 0 6-19 20 20 0 0 0 1-2v-60a20 20 0 0 0-20-20z"
            />
          </g>
          <g id="Rooms">
            <path
              className="ac-1-cls-3"
              d="M4013 1436h163v236h-163zM998 766l10 8h25v75h-71l-8-3s15-37 44-80zm35 8h57v75h-57zm57 0h58v116h-58zm0 116h58v37h-58zm-134 76h116v76H956zm-38-3l38 3v38h-43a354 354 0 0 1 5-41zm38 79h-43s-2-21 0-38h43z"
            />
            <path
              className="ac-1-cls-3"
              d="M1071 966h40v47h-40zm0 76v-29h40v88l-183 49s-14-42-15-108zm40-4h105v63h-105zm117-23h32v-14h21v100h-53v-86zm81-49h44v48h-44zm-141-192h135v153h-135zm269 95h-133v-77h25v-8s0-4 5-4h72s6 0 6 6v7h25z"
            />
            <path
              className="ac-1-cls-3"
              d="M1304 869h133v-95h135v56h-19v39h19v58h-268v-58zm248 97h79v136h-79zm39-194h39v58h-39zm0 58h39v39h-39zm0 39h39v58h-39zm810 2h58v58h-58zm0 58h58v38h-58zm155-20h56v39h-56zm79 0h54v39h-54zm54 0h41v76h-41zm137-98h40v60h-40zm0 60h40v58h-40zm-137 114v114h59v77h98v-7h22V986l-179-1zm-47 49h47v65h-47zm-358-260h72v17h-72zm1949-135h175v221h-175zm423 57h61v78h-61zm21 160h40v71h-40zm0 71h40v79h-40zm-80 0h61v112h-61zm3-39h54v38h-54zm-59 112h56v39h-56zm0 39h98v61h-98z"
            />
            <path className="ac-1-cls-3" d="M4452 1198h53v-98h177v-10h23v143h-253v-35z" />
            <path
              className="ac-1-cls-3"
              d="M4452 1100h53v98h-53zm-180-192h136v79h-136zm136 125h67v67h-67z"
            />
            <path
              className="ac-1-cls-3"
              d="M4272 986h136v114h44v307h-180V986zm-964-348h174v222h-174zm308 0h175v222h-175zm0 270h97v136h-97zm174 136h-77V908h39l18 18 10-9h12l-2 127zm-222 55h48v-55h174v192h-126s-24-21-31-23v32h-41v-51s14 3 24 9v-84h-48z"
            />
            <path
              className="ac-1-cls-3"
              d="M3568 1033h48v65h-48zm-261-115h176v317h-176zm716 822h64v74h-64zm-193 179h38v58h-38zm0 58h86v133h-86z"
            />
            <path
              className="ac-1-cls-3"
              d="M3830 1818v101h38v58h48v-160l-86 1zm12 330v57h73v-45h-51v-12h-22zm0 82v-25h73v80h-66v-55h-7zm-12 55h86v38h-86zm18 196h65v35h-65zm0 35h65v38h-65zm0 38h65v39h-65zm0 39h65v38h-65z"
            />
            <path
              className="ac-1-cls-3"
              d="M3848 2630h65v39h-65zm19 79h46v62h-46zm-41 0h41v62h-41zm-36 0h36v62h-36zm-29 0h29v62h-29z"
            />
            <path
              className="ac-1-cls-3"
              d="M3733 2709h29v62h-29zm-30 0h30v62h-30zm-29 0h29v62h-29zm-75-437h192v339h-192zm131-103h61v103h-61z"
            />
            <path
              className="ac-1-cls-3"
              d="M3599 2035v237h131v-103h60v-134h-191zm0-116h192v116h-192zm153-47h39v47h-39zm-153-11h58v58h-58zm131-133h61v36h-61zm-96 0h96v36h-96zm-94 0h94v36h-94zm-97 110h156v99h-156zm-135-110h63v55h-63zm0 55h63v55h-63zm195 154h96v83h-96zm0 83h96v94h-96zm0 94h96v94h-96zm-195-177h195v271h-195zm195 271h96v56h-96zm0 56h96v115h-96zm0 115h38v51h-38zm0 51h38v57h-38zm38-51h58v120h-58zm0 120h58v113h-58zm-233-291h195v403h-195zm-190-480h66v87h-66zm-303-197h128v135h-128z"
            />
            <path
              className="ac-1-cls-3"
              d="M2825 1514h-38v17h-95l-32 32 132 133 23-22v-143h10v-17zm0-59h117v59h-117zm0-66h117v66h-117z"
            />
            <path
              className="ac-1-cls-3"
              d="M2535 1412v68l-13 30s38 17 82 42h67l21-21h95v-17h38v-125h-136v23zm283 316h79v37h-47s-25-33-32-37z"
            />
            <path
              className="ac-1-cls-3"
              d="M2923 1728v85h-12l-17 12s-25-35-44-60h47v-37zm-495-147l-26 73s34 12 48 19l32-71-54-21zm94-71l-30 71 33 18 35-70-38-19zm71 36l-33-17-35 70 29 16 39-69z"
            />
            <path className="ac-1-cls-3" d="M2657 1588s-36-27-64-42l-39 69s36 20 58 36z" />
            <path className="ac-1-cls-3" d="M2684 1706s-42-35-72-55l45-63s41 27 76 59z" />
            <path className="ac-1-cls-3" d="M2721 1740l-37-34 49-59s23 19 43 39z" />
            <path
              className="ac-1-cls-3"
              d="M2815 1847s-38-54-94-107l55-54s61 53 100 115z"
            />
            <path
              className="ac-1-cls-3"
              d="M2893 1985s-19-52-78-138l61-46s52 66 88 152zm-419-366l48 22 8-17 73 42-44 67s-52-36-109-60z"
            />
            <path
              className="ac-1-cls-3"
              d="M2593 1760a271 271 0 0 0-34-27l44-67 43 30zm38 30l-35-30 50-64 38 35-53 59z"
            />
            <path
              className="ac-1-cls-3"
              d="M2665 1825s-23-24-34-35l53-59 37 36zm138 200s-39-97-138-200l56-58s112 119 153 226zm19 49l73-27 18 56-74 20-17-49z"
            />
            <path
              className="ac-1-cls-3"
              d="M2854 2185s-9-44-15-62l74-20s11 40 16 68zm10 200s-11 89-25 119l45 13 5-27 35 5 5-38 38 5 8-46-75-12 2-16z"
            />
            <path className="ac-1-cls-3" d="M2968 2541l-84-24 5-27 90 16-11 35z" />
            <path
              className="ac-1-cls-3"
              d="M3008 2553l-40-12 11-35 40 9-11 38zm11-439h59v76h-59z"
            />
            <path
              className="ac-1-cls-3"
              d="M3019 2189h59v33h-59zm0 33h59v62h-59zm0 62h59v40h-59z"
            />
            <path
              className="ac-1-cls-3"
              d="M3019 2323h59v40h-59zm0 40h59v38h-59zm-84-267l15 56 69-17v-21l-9-41-75 23zm-1267-285s-34-85 50-141l74-43 36 66s-101 52-160 118zm170-208l55-21 26 73-48 18-33-70zm-183-11s94-63 143-80l32 70s-105 53-129 76z"
            />
            <path
              className="ac-1-cls-3"
              d="M1502 1728s76-81 153-136l46 66s-59 46-96 124zm-11 109l-49-35s28-38 60-74l19 11-39 50 25 29z"
            />
            <path
              className="ac-1-cls-3"
              d="M1421 1835a329 329 0 0 1 21-33l49 35-18 29zm-29 49s11-20 29-49l35 21-29 48z"
            />
            <path
              className="ac-1-cls-3"
              d="M1365 1935l27-51 35 20-25 48zm137 31l-20 43 35 17 22-42-37-18zm-211 208s-5 19-7 57l39 3 7-53z"
            />
            <path
              className="ac-1-cls-3"
              d="M1312 2078s-15 51-21 96l39 7-9 72 138 11s2-62 23-137zm170-69l-21 55 36 14a275 275 0 0 1 20-52z"
            />
            <path
              className="ac-1-cls-3"
              d="M1442 2116l19-52 36 14s-8 21-15 49zm-86-161l36 16-23 58-37-13s10-30 24-61zm1623-577h293v319h-293zm329 27h251v267h-251zm251 0h182v267h-182zm231 31h222v236h-222z"
            />
          </g>
          <g id="Empty">
            <path className="ac-1-cls-4" d="M1932 1506l16 57m-86-791v98h57v235h-158" />
            <path
              className="ac-1-cls-5"
              d="M1459 2264l80 2s6-310 309-490 614-4 614-4 202 88 282 331c56 173 15 381 15 381l80 20s116-291-106-598c-213-323-601-291-601-291s-215-5-417 152-244 404-244 404-13 53-12 93zm-175-33a165 165 0 0 0-2 20l39 2 2-19zm81-296l-9 20 36 16 10-19-37-17zm81 59s-24 57-39 111l19 6s14-55 39-109zm0 0l-7-3m-47-20l39 17m76-170l37 39m15 16l27 31"
            />
            <path className="ac-1-cls-4" d="M1529 1911s27 9 50 4m-106-49s10 26 37 37" />
            <path
              className="ac-1-cls-5"
              d="M1792 1627l46-24 33 70-43 20-36-66zm32-58l35-15 7 15-36 13-6-13zm95 2l29-8 5 19-28 9-6-20zm12 38l12 38 27-8-11-38-28 8z"
            />
            <path className="ac-1-cls-5" d="M1925 1591l6 18 28-8-6-19-28 9z" />
            <path
              className="ac-1-cls-5"
              d="M1905 1616l26-9 12 40-24 8-14-39zm-16-139l7 22 32-10-7-22-32 10z"
            />
            <path
              className="ac-1-cls-5"
              d="M1901 1515l31-9-4-17-32 10 5 16zm-32-31l-11 4m31-11l-9 3m519-13l-4 22 31 10 8-22-35-10z"
            />
            <path
              className="ac-1-cls-5"
              d="M2390 1505l5-16 31 10-5 17-31-11zm-11 37l-5 21 28 9 6-22-29-8z"
            />
            <path className="ac-1-cls-5" d="M2368 1581l6-18 28 9-5 18-29-9z" />
            <path
              className="ac-1-cls-5"
              d="M2352 1639l16-58 29 9-19 57-26-8zm50 15l-24-7 14-41 23 9-13 39zm60-101l-5 14 35 14 6-14-36-14zm353 497l36-14 10 24-37 14-9-24zm44 148l38-4v7l76-8 7 56-67 6v19h67v47h-64v19l64 3-1 49-115-7s14-87-5-187zm38-4l99-17m13-2l10-2m-208-496l14 17h59v34h-66l-28-29 21-22z"
            />
            <path
              className="ac-1-cls-5"
              d="M2815 1666v8l-4 3 14 17h39v-28h-49zm49 0h79v27h-79zm59 119h38v28h-38zm85-57h110v86h-110zm176 0h61v12h-61zm0 479h51v24h37v189h-41v-17h-47v-196zm124-369v11m0 88v-76m291-23v-74m-228-36h147m22 0h-8m258 36v90m0 18v-6m40-102h38v53h-38zm106-36h87v86h-87z"
            />
            <path
              className="ac-1-cls-5"
              d="M3830 1728h107v12h-107zm217 0h43v12h-43zm61 0h61v12h-61zm74 0h25m29 0h-12m12-119h482v1003h-482zm-128 501h50v50h-50zm0 97h89v79h-89zm0 153h84v116h-84zm84 93h44v159h-44zm217-1000h538v156h-538zm348 156h171v119h-171zm-2 131h39v75h-39zm39 0h47v45h-47z"
            />
            <path
              className="ac-1-cls-5"
              d="M4755 1814h88v298h-88zm53 299h35v47h-35zm-53 37h12v55h-12zm0 55h88v272h-88zm0-92v16m-563-20v18m-11 22h16v58h-16zm271-916h254v220h-254zm-43 174h43v46h-43zm-1-547h56m68 48v-17"
            />
            <path className="ac-1-cls-4" d="M4532 873v-13h-48" />
            <path
              className="ac-1-cls-5"
              d="M4408 908h48v56h-48zm0 56h21v69h-21zm86-56h47v82h-47zm47 19h40v74h-40zm-9-105h23v37h-23zm-1050 38h56m78 0h-55m-78 58h47v72h-47zm85-10h48v57h-48zm32 57h16v69h-16zm-281-105v17m0 23v18m461-58v19m0 38v-18m-2321 67h47v62h-47zm-178 0h27v58h-27z"
            />
            <path
              className="ac-1-cls-5"
              d="M1281 1101h271v-73h-93v-14h-150v10h-28v77zm-170-135h37v12h-37zm66 3h12v23h-12zm0 47h39v22h-39zm825-276h36v31h-36zm-34 22h34v9h-34zm316-11h72v23h-72zm106 23h52v22h-52z"
            />
            <path
              className="ac-1-cls-4"
              d="M2324 791v40h38v40h39v209h158v57h17v18h20v16h58v9"
            />
            <path className="ac-1-cls-3" d="M2665 1333v79h24v-23h41v-37h-40v-19h-25z" />
            <path className="ac-1-cls-5" d="M2537 1333h23v79h-23z" />
            <path className="ac-1-cls-4" d="M2426 1475l12-36h97" />
            <path
              className="ac-1-cls-5"
              d="M3830 2323h86v155h-86zm-327 164h38v124h-38zM2556 948h48v66h-48zm79 0h39v15h-39z"
            />
          </g>
          <g id="Stairs-lifts-escalators">
            <path
              className="ac-1-cls-6"
              d="M2961 1740h47v74h-47zm223 0h46v74h-46zm804-776h48v60s-2 20-24 20-24-19-24-19zm-925 2h48v60s-2 20-24 20-24-19-24-19zm47 412h-48v-59s2-20 24-20 24 19 24 19zm467 27h-54v-67s2-22 27-23 27 22 27 22zm459-103h-48v-59s2-20 24-20 24 19 24 19z"
            />
            <ellipse className="ac-1-cls-7" cx={1949} cy={695} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={1983} cy={696} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={2018} cy={695} rx={19} ry={18} />
            <path className="ac-1-cls-7" d="M1876 676h46v96h-46z" />
            <ellipse className="ac-1-cls-7" cx={2371} cy={697} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={2336} cy={698} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={2302} cy={697} rx={19} ry={18} />
            <path
              className="ac-1-cls-7"
              transform="rotate(-180 2419 723)"
              d="M2396 678h46v91h-46z"
            />
            <path
              className="ac-1-cls-7"
              d="M2507 1178h158v21h-158zm30 75h152v81h-152zm-30-38h158v21h-158z"
            />
            <ellipse className="ac-1-cls-7" cx={2402} cy={1529} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={1921} cy={1529} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={1404} cy={1996} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={1529} cy={1004} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={1129} cy={996} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={2658} cy={1016} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={2658} cy={981} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={3584} cy={983} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={3584} cy={1015} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={3249} cy={1796} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={2916} cy={1993} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={3202} cy={2137} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={3888} cy={2135} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={4176} cy={1796} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={4441} cy={983} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={4441} cy={1017} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={4697} cy={806} rx={19} ry={18} />
            <ellipse className="ac-1-cls-7" cx={4697} cy={839} rx={19} ry={18} />
            <path
              className="ac-1-cls-7"
              d="M1287 703h130v31h-130zm-110 289v24h83v-47h-71v23h-12zm175-26h84v48h-84z"
            />
            <path
              className="ac-1-cls-6"
              d="M1798 1512s35-15 61-25l27 73-20 9-7-15-35 15zm-310 269l26 31 6-5 54 42 25-29-83-74-28 35zm-156 235s-20 53-20 62l75 22 17-58zm1104-456l27-73 59 23-24 57-36-14-5 14zm124-227v35h22v25h83v-47h-82v-13h-23zm356 708l72-27 22 59-75 23zm268 118v48h51v24h20v-48h-24v-24h-47zm0 244v74h88v-57h-41v-17h-47zm-625-1390h45v85h-45zm924-23h47v109h-47zm575 333h159v24h-159zm0 41h159v24h-159zm-190 376h69v74h-69zm222-12v12h-3v74h21v-50h27v28h-4v-25h-20v47h45v-74h-48v-12h-18zm18 432h73v48h-73zm659 0h75v45h-75zm27-375v29h86v-49h-22v26h-44v-6h-20zm-300-795h47v110h-47zm67-267v135h49v-87h-24v-48h-25zm120 283h36v84h-36z"
            />
          </g>
        </svg>
        <div className="floor-svg" style={{
            opacity: `${this.props.selected ? 1 : 0}`,
            "width": `${this.props.scale}00%`,
            "height": `${this.props.scale > 1 ? 390 : 100}%`
          }}>
          {tagLayer}
        </div>
      </div>
    );
  }
}

export default AC_1;
