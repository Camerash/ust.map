import React, { Component } from 'react';
import './floor_styles/AC_5.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_5.json';
import Tag from '../Tag';

class AC_5 extends Component {
  constructor(props) {
   super(props);
   this.state = {isInFocus: false};
   this.onLayerClick = this.onLayerClick.bind(this);
  }

  onLayerClick() {
    this.props.onClick(this.props.id);
    setTimeout(() => {this.setState({isInFocus: true});}, this.props.animDuration);
  }

  render() {
    let tagLayer = null;
    var infoArr = [];
    Object.keys(infoJson).forEach(function(key) {
      infoArr.push(infoJson[key]);
    });

    if(!this.props.selected && this.state.isInFocus) {
      setTimeout(() => {this.setState({isInFocus: false});}, this.props.animDuration);
    }

    if(this.props.selected || this.state.isInFocus) {
      tagLayer = infoArr.map(item => <Tag id={item.id} key={item.id} width="5700" height="2900" data={item} />)
    } else {
      tagLayer = null;
    }

    return (
      <div>
        <svg id="AC-5" viewBox="0 0 5700 2900" className="floor-svg" style={{
            WebkitTransform: `scale(${this.props.scale},${this.props.scale})`,
            Transform: `scale(${this.props.scale},${this.props.scale})`
          }}>
          <defs />
          <g id="AC-5-BG" className="floor-bg">
            <path onClick={this.onLayerClick}
              d="M3271 2632a10 10 0 0 1-10-10v-127h-76a10 10 0 0 1-10-10v-368a10 10 0 0 1 10-10h76v-284h-343l-8 7c8 14 28 47 49 89 36 72 60 136 71 189h51a10 10 0 0 1 10 10v365a10 10 0 0 1-10 10h-44l-19 71a10 10 0 0 1-12 7l-167-48a10 10 0 0 1-7-13c0-1 36-116 20-267a678 678 0 0 0-287-489 715 715 0 0 0-407-133c-103 0-189 24-243 45-58 22-93 44-93 44a10 10 0 0 1-2 1s-79 38-160 125a704 704 0 0 0-185 431 10 10 0 0 1-10 9l-181-12a10 10 0 0 1-9-10c0-2 1-32 10-82a960 960 0 0 1 58-198 908 908 0 0 1 422-459l-7-16a10 10 0 0 1-1-4V955l-11-1a10 10 0 0 1-9-10l-1-178a10 10 0 0 1 10-10h122v-86a10 10 0 0 1 10-10l165 1a10 10 0 0 1 10 10l-1 77c18-8 53-18 113-18s93 9 111 17l1-75a10 10 0 0 1 10-10l158 1a10 10 0 0 1 10 10v84l492-2h352V609a10 10 0 0 1 10-10h181a10 10 0 0 1 10 10v148h104V609a10 10 0 0 1 10-10l182-1a10 10 0 0 1 10 10v149l418-1V605a10 10 0 0 1 10-10h488a10 10 0 0 1 10 10l-1 150h760a10 10 0 0 1 10 10l1 964a10 10 0 0 1-10 10h-266l-1 78a10 10 0 0 1-10 10h-450l-3 276h78a10 10 0 0 1 10 10l1 369a10 10 0 0 1-10 10l-78 1 2 127a10 10 0 0 1-10 10h-564a10 10 0 0 1-10-10v-128h-72a10 10 0 0 1-10-10v-367a10 10 0 0 1 10-10h77l-4-280-341 1v278l78 1a10 10 0 0 1 10 10v368a10 10 0 0 1-10 10l-76-1v130a10 10 0 0 1-10 10z"
              fill="#e4deda"
            />
            <path className="floor-bg-border" onClick={this.onLayerClick}
              d="M4234 605h488l-1 160h770l1 964h-276l-1 88h-460l-3 296h88l1 369-88 1 2 137h-564v-138h-82v-367h88l-5-300-361 1v298l88 1v368l-86-1v140h-562v-137h-86v-368h86v-304h-356l-18 14s100 161 125 291h59l1 365h-53l-20 78-167-48s146-465-271-767a723 723 0 0 0-413-135c-203 0-342 91-342 91s-316 148-350 564l-181-12s14-491 494-735l-12-24V945l-20-1-1-178h132v-96l165 1-1 94s28-25 123-25 121 24 121 24l1-92 158 1v94l502-2h362V609h181v158h124V609l182-1v159l438-1V605m0-20a20 20 0 0 0-20 20v141l-398 1V608a20 20 0 0 0-20-20l-182 1a20 20 0 0 0-20 20v138h-84V609a20 20 0 0 0-20-20h-181a20 20 0 0 0-20 20v136h-342l-482 2v-74a20 20 0 0 0-20-20l-158-1h-1a20 20 0 0 0-20 20v61c-26-9-60-13-101-13s-76 5-103 13v-62a20 20 0 0 0-19-20l-165-1a20 20 0 0 0-20 20v76h-112a20 20 0 0 0-20 20l1 178a20 20 0 0 0 19 20h1v531a20 20 0 0 0 2 8l3 7a922 922 0 0 0-419 461 970 970 0 0 0-58 199c-9 51-10 82-10 83a20 20 0 0 0 18 21l181 12h2a20 20 0 0 0 19-18 694 694 0 0 1 183-426c80-85 156-122 157-122a20 20 0 0 0 2-1s35-22 92-44c53-20 138-44 239-44 139 0 274 44 401 131a660 660 0 0 1 283 481 772 772 0 0 1-4 189c-7 46-15 75-16 75a20 20 0 0 0 14 26l167 47a20 20 0 0 0 25-14l17-63h36a20 20 0 0 0 20-20v-365a20 20 0 0 0-20-20h-43c-12-52-36-114-70-183-18-36-35-65-45-82h327v264h-66a20 20 0 0 0-20 20v368a20 20 0 0 0 20 20h66v117a20 20 0 0 0 20 20h562a20 20 0 0 0 20-20v-120l66 1a20 20 0 0 0 20-20v-368a20 20 0 0 0-19-20l-68-1v-258l321-1 4 260h-68a20 20 0 0 0-20 20v367a20 20 0 0 0 20 20h62v118a20 20 0 0 0 20 20h564a20 20 0 0 0 20-20l-1-117 68-1a20 20 0 0 0 19-20l-1-369a20 20 0 0 0-20-20h-67l2-256h441a20 20 0 0 0 20-20v-68h256a20 20 0 0 0 20-20V765a20 20 0 0 0-20-20h-750V605a20 20 0 0 0-20-20h-488z"
              fill="#6d6e71"
            />
          </g>
          <g id="Rooms">
            <path
              className="ac-5-cls-3"
              d="M1943 1408l-1-179h-39v-133h39V766h-196v176h22v466h175z"
            />
            <path
              className="ac-5-cls-4"
              d="M1874 1408h68v-179h-39v-133h39V943m0-177h-197v176h22v38"
            />
            <path className="ac-5-cls-5" d="M1533 1699l40 40 27-25-38-43-29 28z" />
            <path className="ac-5-cls-5" d="M1590 1646l-29 25 39 43 27-24z" />
            <path className="ac-5-cls-5" d="M1619 1622l-29 24 37 44 28-23z" />
            <path className="ac-5-cls-5" d="M1650 1598l-31 24 36 45 28-21z" />
            <path className="ac-5-cls-5" d="M1681 1576l-31 22 33 48 30-22z" />
            <path className="ac-5-cls-5" d="M1713 1556l-32 20 32 48 29-18z" />
            <path className="ac-5-cls-5" d="M1746 1536l-33 20 29 50 32-19z" />
            <path
              className="ac-5-cls-3"
              d="M1587 1752l72 72s102-107 215-152l-42-91s-129 52-245 171z"
            />
            <path
              className="ac-5-cls-4"
              d="M1605 1737l-18 16 72 71s72-87 215-152l-33-74"
            />
            <path
              className="ac-5-cls-4"
              d="M1707 1674l-16 11 41 57 11-8 7 9 16-11-48-67m60-34l38 71m-202 26s83-82 170-124"
            />
            <path
              className="ac-5-cls-3"
              d="M1962 1453l25 114-61 19 18 59s64-21 134-29l-8-63s148-20 298 24l33-111s-38-11-78-20l-11 58s-58-13-124-13l-2 38h-52l-1-57h-17l3 58-35 3-9-98s-59 6-113 18z"
            />
            <path
              className="ac-5-cls-5"
              d="M1816 1588l-32 16-38-68s28-15 55-27l31 72m9 19s31-15 54-21l27 74-48 19zm238-125l5 58 35-3-3-58a311 311 0 0 0-37 3z"
            />
            <path
              className="ac-5-cls-5"
              d="M2075 1435l4 40s26-3 54-3v-41s-35 1-58 4zm59 55h37v-59h-38zm72 1l-35-1v-59l38 1z"
            />
            <path className="ac-5-cls-5" d="M2242 1494l-36-3 3-59 38 3z" />
            <path className="ac-5-cls-5" d="M2285 1439l-38-4-5 59 35 4z" />
            <path
              className="ac-5-cls-5"
              d="M2323 1446l-38-7-8 59 35 6 11-58zm-5 118l-13 64 46 11 17-62-50-13z"
            />
            <path className="ac-5-cls-5" d="M2276 1622l29 6 13-64-33-6-9 64z" />
            <path className="ac-5-cls-5" d="M2252 1554l33 4-9 64-31-5 7-63z" />
            <path className="ac-5-cls-5" d="M2220 1551l32 3-7 63-31-3z" />
            <path className="ac-5-cls-5" d="M2152 1548l2 63s31 0 60 3l6-63s-35-4-68-3z" />
            <path className="ac-5-cls-5" d="M2120 1549l32-1 2 63-32 1z" />
            <path
              className="ac-5-cls-5"
              d="M2070 1553l8 63a407 407 0 0 1 44-4l-2-63s-25 1-50 4zm64-63v39h52l2-38-54-1z"
            />
            <path
              className="ac-5-cls-4"
              d="M1926 1586s31-11 61-19m-4-20l-21-94s52-11 113-18m-144 167l13 43s72-22 134-29m245-170s39 9 78 20l-22 73m-67-35l-3 18m-4 19l69 17-6 19"
            />
            <path
              className="ac-5-cls-5"
              d="M2397 1588l-20 60a531 531 0 0 1 70 28l27-60s-38-16-77-28zm126-80l-25 55 49 25 28-53a404 404 0 0 0-52-27z"
            />
            <path
              className="ac-5-cls-5"
              d="M2625 1564l-50-29-28 53 47 26zm48 32l-35 48 28 22 37-47-30-23z"
            />
            <path className="ac-5-cls-5" d="M2733 1644l-30-25-37 47 28 22z" />
            <path className="ac-5-cls-5" d="M2761 1670l-28-26-39 44 27 25z" />
            <path className="ac-5-cls-5" d="M2790 1698l-29-28-40 43 28 26z" />
            <path
              className="ac-5-cls-5"
              d="M2482 1600l-34 76s127 52 215 148l86-85s-73-70-111-95l35-48-48-32-31 50-96-51m-654-110v37l-65 29-12-24v-42h77z"
            />
            <path
              className="ac-5-cls-3"
              d="M1964 806h-42v135h459v18h117v-57h115v-76h-173v-19h-59v-40h-130v-14s-79-30-181 0v13h-90v40z"
            />
            <path
              className="ac-5-cls-5"
              d="M1767 1383h76v69h-76zm0-37h58v37h-58zm0-38h58v38h-58zm0-38h58v38h-58zm0-39h58v38h-58zm0-38h58v38h-58zm0-38h58v38h-58zm0-98h58v38h-58zm0-39h58v38h-58zm0-38h58v38h-58zm0 115h58v59h-58zm56-329h57v57h-57zm21 78v136h98v-38h-21v-98h-77zm126-172h69v73h-69zm123 74v60h40v-65a195 195 0 0 0-40 5zm97-5v65h39v-59a179 179 0 0 0-39-6zm-308 529h60v58h-60zm20 58h40v40h-40zm192-446h39v61h-39zm115 0h39v61h-39zm39 0h39v61h-39zm39 0h39v61h-39z"
            />
            <path
              className="ac-5-cls-5"
              d="M2325 882h39v61h-39zm39 0h39v61h-39zm-77-116h58v97h-58zm94 0h59v40h-59zm59 0h58v60h-58zm58 0h38v60h-38zm38 0h38v60h-38zm38 0h40v60h-40z"
            />
            <path className="ac-5-cls-5" d="M2613 766h57v40h-57z" />
            <path className="ac-5-cls-5" d="M2755 902h-142v-96h58v-40h57v59h77v77h-37" />
            <path
              className="ac-5-cls-5"
              d="M2728 766h59v59h-59zm59 0h76v59h-76zm56 136h-38v-76h58v18h-20v58zm20-136h38v78h-38zm38 0h38v59h-38zm39 0h39v59h-39zm39 0h38v79h-38zm38 0h58v39h-58zm0 40h58v39h-58zm77-40h58v39h-58zm0 40h58v39h-58z"
            />
            <path className="ac-5-cls-5" d="M3151 766h39v79h-39zm39 0h38v59h-38z" />
            <path className="ac-5-cls-3" d="M3459 902v-77h117v-59h134v136h-251z" />
            <path className="ac-5-cls-5" d="M3228 766h39v78h-39zm39 0h39v78h-39z" />
            <path
              className="ac-5-cls-5"
              d="M3305 766h58v40h-58zm0 40h58v38h-58zm77-40h77v80h-77zm0 80h77v57h-77zm77-80h39v59h-39zm39 0h39v59h-39zm39 0h39v59h-39z"
            />
            <path className="ac-5-cls-4" d="M3459 902h57m21 0h173v-35m0-9v-92h-134" />
            <path
              className="ac-5-cls-5"
              d="M3526 1029h85v65h-85zm85-88h80v98h-80zm0 98h80v95h-80z"
            />
            <path
              className="ac-5-cls-5"
              d="M3611 1133h80v97h-80zm0 97h80v77h-80zm-229-173h57v39h-57zm58 0h39v58h-39zm-20 59h59v38h-59zm-38 0h38v58h-38zm38 38h59v38h-59zm-38 38h57v39h-57zm0 77h57v37h-57zm58-77h39v58h-39zm0 58h39v57h-39zm-135-387h38v61h-38zm-134 0h57v38h-57zm0 38h57v40h-57zm76-38h58v38h-58zm0 38h58v40h-58zm-384-37h57v38h-57zm0 38h57v40h-57zm77-38h58v38h-58zm0 38h58v40h-58zm58-38h57v38h-57zm0 38h57v40h-57zm115-39h58v38h-58zm0 38h58v40h-58zm191 118h59v38h-59zm0 38h59v38h-59z"
            />
            <path
              className="ac-5-cls-5"
              d="M3304 1094h59v40h-59zm0 118h59v38h-59zm0 38h59v38h-59z"
            />
            <path className="ac-5-cls-5" d="M3304 1287h59v40h-59zm0-153h59v79h-59z" />
            <path
              className="ac-5-cls-5"
              d="M3304 1326h98v81h-98zm98 0h79v81h-79zm209 0h80v81h-80zm80 0h38v81h-38zm38 39h60v42h-60zm0-39h60v39h-60zm0-76h60v76h-60zm0-76h60v76h-60zm0-78h60v78h-60zm0-39h60v39h-60zm0-39h60v39h-60z"
            />
            <path className="ac-5-cls-5" d="M3729 980h60v39h-60zm0-39h60v38h-60z" />
            <path
              className="ac-5-cls-5"
              d="M3729 865h60v77h-60zm0-58h58v39h-58zm0-41h58v41h-58z"
            />
            <path className="ac-5-cls-5" d="M3788 865h56v38h-56z" />
            <path className="ac-5-cls-5" d="M3788 902h56v39h-56zm75-37h57v38h-57z" />
            <path className="ac-5-cls-5" d="M3863 902h57v39h-57zm58-37h58v38h-58z" />
            <path
              className="ac-5-cls-5"
              d="M3921 902h58v39h-58zm116-38h57v38h-57zm0 38h57v39h-57zm57-38h57v38h-57zm0 38h57v39h-57zm78-37h57v38h-57z"
            />
            <path className="ac-5-cls-5" d="M4172 902h57v39h-57zm57-37h57v38h-57z" />
            <path
              className="ac-5-cls-5"
              d="M4229 902h57v39h-57zm-290-136h58v39h-58zm0 39h58v40h-58zm79-39h58v39h-58zm0 39h58v40h-58zm-231-39h38v80h-38zm38 0h39v59h-39z"
            />
            <path
              className="ac-5-cls-5"
              d="M3863 766h38v59h-38zm38 0h38v59h-38zm174 0h38v59h-38zm38 0h37v59h-37zm38 0h39v79h-39zm39 0h39v79h-39zm39 0h57v39h-57zm0 39h57v39h-57zm0 136h57v39h-57zm0 39h57v39h-57z"
            />
            <path className="ac-5-cls-5" d="M4229 1018h57v39h-57zm0 39h57v39h-57z" />
            <path className="ac-5-cls-5" d="M4229 1095h57v39h-57zm0 39h57v39h-57z" />
            <path className="ac-5-cls-5" d="M4229 1172h57v39h-57zm0 39h57v116h-57z" />
            <path
              className="ac-5-cls-5"
              d="M4229 1326h174v81h-174zm95-95h79v76h-79zm0-97h79v97h-79zm0-97h79v97h-79zm0-96h79v96h-79zm79 87h86v65h-86zm130 5h42v83h-42zm-228-267h39v79h-39zm0 79h39v58h-39zm39-79h59v136h-59zm59 0h35v68h-35zm0 68h35v68h-35zm35-68h76v136h-76zm76 0h40v136h-40zm19 350h98v190h-98zm0 212v79h178v-43h-60v-18h-19v-18h-99z"
            />
            <path
              className="ac-5-cls-5"
              d="M4651 1328h60v36h-60zm0-40h60v40h-60zm0-38h60v38h-60zm0-39h60v39h-60zm0-39h60v39h-60zm0-39h60v39h-60zm0-38h60v38h-60zm-57-154v154h117V959h-60v-18h-57z"
            />
            <path
              className="ac-5-cls-5"
              d="M4651 959v-76h134v58h-74v18h-60zm134-76h60v58h-60zm61 0h54v58h-54zm-133-117h117v78h-117zm129-1h37v79h-37zm38 0h57v41h-57z"
            />
            <path
              className="ac-5-cls-5"
              d="M4999 844h-119v-38h57v-41h99v41h117v135h-137v-97"
            />
            <path
              className="ac-5-cls-5"
              d="M5036 765h48v41h-48zm48 0h69v41h-69zm105 0v41h-36v135h113V765h-77zm292 0h-215v137h169v50h46V765zm-89 256h95v73h-95z"
            />
            <path
              className="ac-5-cls-5"
              d="M5151 941h135v135h-135zm0 136h135v154h-135zm0 154h135v177h-135z"
            />
            <path
              className="ac-5-cls-4"
              d="M1965 806h-44v137h460v17h117v-57m-522-97h3v-40h91v-13s82-32 182 0v13h102m259 136h-100m0 41h44"
            />
            <path
              className="ac-5-cls-5"
              d="M2381 960h40v77h-40zm0 77h40v60h-40zm59 290h58v39h-58zm58 0h60v81h-60zm19-233h41v58h-41z"
            />
            <path
              className="ac-5-cls-3"
              d="M2729 1211V942h134v327h-38v58h-268v-20h131v-96"
            />
            <path
              className="ac-5-cls-5"
              d="M2517 1152h41v59h-41zm0 97h41v57h-41zm87-221h84v66h-84zm84 299h40v81h-40zm41 0h58v81h-58z"
            />
            <path
              className="ac-5-cls-5"
              d="M2786 1327h79v81h-79zm39-58h39v58h-39zm-137-117h40v59h-40zm0-58h40v58h-40zm0-76h40v76h-40zm0-76h40v76h-40z"
            />
            <path
              className="ac-5-cls-4"
              d="M2755 942h-26m37 0h97l2 327m-177-58v96h-131m0 20h131"
            />
          </g>
          <g id="Empty">
            <path
              className="ac-5-cls-6"
              d="M1533 1699l126 126s-174 153-193 441l-181-12s22-332 248-555zm1130 125s292 258 179 689l167 48 20-78h52v-365h-60s-30-128-125-291l18-14h356v304h-86v368h86v137h562v-140h86v-373h-87v-293h361v299h-84v367h82v138h564v-137h86v-370h-89v-296h464v-88h276v-322H2537v78l-14 23s148 63 267 190zm-721-881v153h-39v133h39v179h439v-177h40v-134h-40V943h-439zm615 151h131v212h-131zm0-151h47v41h-47zm85-1h46v17h-46zm31 17h15v69h-15zm248-38h19v21h-19zm307 0h19v21h-19zm-363 21h441v465h-441zm614 152h132v213h-132z"
            />
            <path className="ac-5-cls-6" d="M3481 1343h24v65h-24z" />
            <path
              className="ac-5-cls-6"
              d="M3504 1389h106v19h-106zm-122-353h57v22h-57zm89-94h8v115h-8zm8 0h47v43h-47zm85-1h29v19h-29zm30 0h17v88h-17zm194 0h440v466h-440zm-479-332h181v157h-181zm305 0h182v157h-182zm620-4h487v161h-487zm-730 721h82v16h-82zm899 17h24v65h-24zm24 46h106v19h-106zm0-63h82v16h-82zm-24-232h130v212h-130zm0-151h14v85h-14zm14 0h33v17h-33zm72 0h46v43h-46z"
            />
            <path
              className="ac-5-cls-6"
              d="M4533 943h41v75h-41zm21-75h48v34h-48zm157 73h439v466h-439z"
            />
            <path
              className="ac-5-cls-6"
              d="M4976 863h41v79h-41zm-76 0h58v58h-58zm426 89h67v30h-67zm0 52h19v90h-19zm0 90h162v215h-162z"
            />
            <path
              className="ac-5-cls-6"
              d="M5457 1308h30v99h-30zm-131 81h131v18h-131zM1925 672h45v58h-45zm45 73h69v21h-69zm316 0h68v21h-68zm97 11h47v10h-47zm-493 719l32-11 11 38-30 10-13-37zm461 164l26 9 20-60-30-9-16 60zm50-173l32 11-12 36-32-9 12-38zm2752-701h36v41h-36z"
            />
          </g>
          <g id="Stairs-lifts-escalators">
            <path
              className="ac-5-cls-7"
              d="M4427 1343v45h84v-45h-84zm-922 0h106v46h-106zm-26-337h47v88h-47zM1926 753h-33v10h-13v-92h46v82zm-123 756l30 71 56-23-27-74a596 596 0 0 0-59 26zm756-164h131v62h-131zm-96 139l-20 56 55 22 25-54s-21-12-60-24zm2092-718h48v102h-48zm791 216h47v112h-47zm13 360h83v48h-83z"
            />
            <ellipse className="ac-5-cls-7" cx={2372} cy={693} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={2338} cy={694} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={2303} cy={693} rx={19} ry={18} />
            <path
              className="ac-5-cls-7"
              transform="rotate(-180 2421 720)"
              d="M2398 674h46v91h-46z"
            />
            <ellipse className="ac-5-cls-7" cx={1925} cy={1526} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={2403} cy={1527} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={2657} cy={975} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={2657} cy={1008} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={3574} cy={976} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={3574} cy={1009} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={4436} cy={974} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={4436} cy={1007} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={4698} cy={798} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={4698} cy={831} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={5469} cy={970} rx={19} ry={18} />
            <ellipse className="ac-5-cls-7" cx={5469} cy={1003} rx={19} ry={18} />
            <path
              className="ac-5-cls-7"
              d="M4031 923v92s-2 24-23 24-24-23-24-23v-93zm-920 18v77s-2 20-23 20-24-19-24-19v-78zm1849 0v77s-2 20-23 20-24-19-24-19v-78zm-471 68v85h44v-59h42v-19h-42v-30h-44v23zm-1932-25h47v110h-47z"
            />
          </g>
        </svg>
        <div className="floor-svg" style={{
            opacity: `${this.props.selected && this.state.isInFocus ? 1 : 0}`,
            "width": `${this.props.scale}00%`,
            "height": `${this.props.scale > 1 ? 95*this.props.scale : 100}%`
          }}>
          {tagLayer}
        </div>
      </div>
    );
  }
}

export default AC_5;
