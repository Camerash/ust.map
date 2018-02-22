import React, { Component } from 'react';
import './floor_styles/AC_4.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_4.json';
import Tag from '../Tag';

class AC_4 extends Component {
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
        <svg id="AC-4" viewBox="0 0 5700 2900" className="floor-svg" style={{
            WebkitTransform: `scale(${this.props.scale},${this.props.scale})`,
            Transform: `scale(${this.props.scale},${this.props.scale})`
          }}>
          <defs />
          <g id="AC-4-BG" className="floor-bg">
            <path onClick={this.onLayerClick}
              d="M3267 2631a10 10 0 0 1-10-10v-127h-76a10 10 0 0 1-10-10v-368a10 10 0 0 1 10-10h76v-284h-343l-8 7c8 14 28 47 49 89 36 72 60 136 71 189h51a10 10 0 0 1 10 10v365a10 10 0 0 1-10 10h-44l-19 71a10 10 0 0 1-12 7l-167-48a10 10 0 0 1-7-13c0-1 36-116 20-267a678 678 0 0 0-287-489 710 710 0 0 0-404-132 693 693 0 0 0-339 91 10 10 0 0 1-1 1c-1 0-79 37-160 123a698 698 0 0 0-186 430 10 10 0 0 1-10 9l-181-12a10 10 0 0 1-9-10c0-2 1-32 10-82a960 960 0 0 1 58-198 908 908 0 0 1 422-459l-7-16a10 10 0 0 1-1-4V954l-11-1a10 10 0 0 1-9-10l-1-178a10 10 0 0 1 10-10h122v-86a10 10 0 0 1 10-10l165 1a10 10 0 0 1 10 10l-1 77c18-8 53-18 113-18s93 9 111 17l1-75a10 10 0 0 1 10-10l158 1a10 10 0 0 1 10 10v84l492-2h352V608a10 10 0 0 1 10-10h181a10 10 0 0 1 10 10v150h106l-2-150a10 10 0 0 1 10-10l182-1a10 10 0 0 1 10 10v149l418-1V604a10 10 0 0 1 10-10h488a10 10 0 0 1 10 10l-1 150h760a10 10 0 0 1 10 10l1 964a10 10 0 0 1-10 10h-266l-1 78a10 10 0 0 1-10 10h-450l-3 276h78a10 10 0 0 1 10 10l1 369a10 10 0 0 1-10 10l-78 1 2 127a10 10 0 0 1-10 10h-564a10 10 0 0 1-10-10v-128h-72a10 10 0 0 1-10-10v-367a10 10 0 0 1 10-10h77l-4-280-341 1v278l78 1a10 10 0 0 1 10 10v368a10 10 0 0 1-10 10l-76-1v130a10 10 0 0 1-10 10z"
              fill="#e4deda"
            />
            <path className="floor-bg-border" onClick={this.onLayerClick}
              d="M4230 604h488l-1 160h770l1 964h-276l-1 88h-460l-3 296h88l1 369-88 1 2 137h-564v-138h-82v-367h88l-5-300-361 1v298l88 1v368l-86-1v140h-562v-137h-86v-368h86v-304h-356l-18 14s100 161 125 291h59l1 365h-53l-20 78-167-48s146-465-271-767a718 718 0 0 0-410-134c-204 0-344 93-344 93s-317 145-351 561l-181-12s14-491 494-735l-12-24V944l-20-1-1-178h132v-96l165 1-1 94s28-25 123-25 121 24 121 24l1-92 158 1v94l502-2h362V608h181v160h127l-3-160 182-1v159l438-1V604m0-20a20 20 0 0 0-20 20v141l-398 1V607a20 20 0 0 0-20-20l-182 1a20 20 0 0 0-20 20l2 140h-87V608a20 20 0 0 0-19-20h-181a20 20 0 0 0-20 20v136h-342l-482 2v-74a20 20 0 0 0-20-20l-158-1h-1a20 20 0 0 0-20 20v61c-26-9-60-13-101-13s-76 5-103 13v-62a20 20 0 0 0-19-20l-165-1a20 20 0 0 0-20 20v76h-112a20 20 0 0 0-20 20l1 178a20 20 0 0 0 19 20h1v531a20 20 0 0 0 2 8l3 7a922 922 0 0 0-419 461 970 970 0 0 0-58 199c-9 51-10 82-10 83a20 20 0 0 0 18 21l181 12h2a20 20 0 0 0 19-18 688 688 0 0 1 183-425c80-84 156-120 157-120a20 20 0 0 0 3-2s35-22 93-44c53-21 138-45 240-45 138 0 272 44 398 130a660 660 0 0 1 283 481 772 772 0 0 1-4 189c-7 46-16 75-16 75a20 20 0 0 0 14 26l167 47a20 20 0 0 0 25-14l17-63h36a20 20 0 0 0 20-20v-365a20 20 0 0 0-20-20h-43c-12-52-36-114-70-183-18-36-35-65-45-82h327v264h-66a20 20 0 0 0-20 20v368a20 20 0 0 0 20 20h66v117a20 20 0 0 0 20 20h562a20 20 0 0 0 20-20v-120l66 1a20 20 0 0 0 20-20v-368a20 20 0 0 0-19-20l-68-1v-258l321-1 4 260h-68a20 20 0 0 0-20 20v367a20 20 0 0 0 20 20h62v118a20 20 0 0 0 20 20h564a20 20 0 0 0 20-20l-1-117 67-1a20 20 0 0 0 20-20l-1-369a20 20 0 0 0-20-20h-67l2-256h441a20 20 0 0 0 20-20v-68h256a20 20 0 0 0 20-20V764a20 20 0 0 0-20-20h-750V604a20 20 0 0 0-20-20h-488z"
              fill="#6d6e71"
            />
          </g>
          <g id="Rooms">
            <path
              className="ac-4-cls-3"
              d="M1283 2250l176 14s2-63 25-140l-170-48s-21 65-31 174z"
            />
            <path
              className="ac-4-cls-4"
              d="M1518 2025l-160-73s109-289 440-445l75 164s-235 89-355 354z"
            />
            <path
              className="ac-4-cls-5"
              d="M1428 1984l-70-33s110-289 440-443l33 73m-367 417l55 27s101-247 354-355l-33-71m-428 249l116 73m-8-25l52 34"
            />
            <path
              className="ac-4-cls-3"
              d="M1561 1842l21-26 45 39-19 24-47-37zm55-63l36-35 40 44-34 33-42-42zm115-97l29-18 30 49-26 17-33-48z"
            />
            <path className="ac-4-cls-3" d="M1817 1631l27 52s-39 20-54 30l-30-49z" />
            <path
              className="ac-4-cls-3"
              d="M1848 1616l-31 15 27 52 29-13zm-84-91l26 54-30 16-30-52 34-18z"
            />
            <path className="ac-4-cls-5" d="M1760 1595l18 35m-5-86l34-16" />
            <path
              className="ac-4-cls-3"
              d="M1873 1670s25-11 46-19l-26-73-53 21zm48-206s29-8 58-14l12 58-54 13z"
            />
            <path
              className="ac-4-cls-3"
              d="M2026 1441l-47 9 12 58-17 4 4 19s28-7 61-12z"
            />
            <path
              className="ac-4-cls-3"
              d="M1991 1588l-13-57s30-7 61-12l9 58s-30 4-57 11z"
            />
            <path
              className="ac-4-cls-3"
              d="M2026 1441s64-12 168-10l-3 121h-19l1 18s-77 1-125 7z"
            />
            <path
              className="ac-4-cls-3"
              d="M2361 1450s-78-17-167-19l-3 121h18l-1 19s59 3 121 17z"
            />
            <path
              className="ac-4-cls-3"
              d="M2399 1464l-21 76-36-9 18-77 39 10zm25 118l54 22-32 72a435 435 0 0 0-48-20zm98-74l-25 55a718 718 0 0 1 66 34l29-53s-42-23-70-36z"
            />
            <path
              className="ac-4-cls-3"
              d="M2497 1648l34-68 31 17-37 67zm95-104s55 31 126 87l-73 92-14-12-11 16a860 860 0 0 0-95-63z"
            />
            <path
              className="ac-4-cls-3"
              d="M2828 1740s-12-25-110-109l-73 92 12 10-12 14s40 33 80 81z"
            />
            <path
              className="ac-4-cls-3"
              d="M2917 1865s-42-72-89-125l-103 88s40 49 67 93l17-9 8 14zm-48 72l-17-32 65-40 20 36z"
            />
            <path
              className="ac-4-cls-3"
              d="M2893 1984l-24-47 68-36 25 52zm-99 27l70-34 20 44-72 30-18-40z"
            />
            <path
              className="ac-4-cls-3"
              d="M2837 2123s-7-24-25-72l72-30s16 44 27 81zm-7-380v-16h32v55s-13-17-32-39zm91-16h-59v55s15 20 29 43l19-13h11zm194 22h47v-24h18v86h-65v-62zm-549-219l8-18h76v68s-57-36-84-50zm162-18h-78v68l13 10h65zm0 0h76v78h-76zm-19 112v-16h39v49s-13-13-39-33zm-135-190h76v78h-76zm76 0h78v78h-78zm78 0h76v78h-76zm75 195h40v58h-40zm40 0h40v58h-40zm40 0h95v58h-95z"
            />
            <path
              className="ac-4-cls-3"
              d="M2803 1434h155v195h-155zm155 0h155v195h-155zm20 195h38v58h-38zm38 0h58v58h-58zm58 0h40v58h-40z"
            />
            <path
              className="ac-4-cls-3"
              d="M3113 1590h96v97h-96zm96 0h57v97h-57zm-96-77h75v77h-75zm75 0h78v77h-78zm-75-79h75v78h-75zm75 0h78v78h-78zm97 0h57v135h-57zm57 0h76v58h-76zm0 59h76v77h-76z"
            />
            <path
              className="ac-4-cls-3"
              d="M3285 1569h133v118h-133zm133-135h99v39h-99zm0 40h99v96h-99zm99 58h153v78h-153zm0-98h153v97h-153z"
            />
            <path
              className="ac-4-cls-3"
              d="M3418 1569h99v41h153v77h-252v-118zm-115 158h193v133h-193zm291 0h191v133h-191zm-291 133h58v58h-58zm135 0h59v135h-59zm59-95h19v-20h40v58h17v-38h21v230h-97v-230zm97 95h191v135h-191z"
            />
            <path
              className="ac-4-cls-3"
              d="M3362 1860h76v135h-135v-77h59v-58zm-182 347v80h66v-55h7v-25h-73zm123-193h117v135h-117zm117 0h76v135h-76zm77 0h98v273h-98zm-194 135h193v138h-193z"
            />
            <path
              className="ac-4-cls-3"
              d="M3594 2014h191v137h-191zm0 137h191v137h-191zm242 55v25h20v56h55v-81h-75zm269 1v80h66v-55h7v-25h-73zm655-1v25h20v56h55v-81h-75zm-1457 100h193v136h-193zm194 0h98v136h-98z"
            />
            <path
              className="ac-4-cls-3"
              d="M3594 2306h96v136h-96zm96 0h96v136h-96zm0 155h96v155h-96z"
            />
            <path
              className="ac-4-cls-4"
              d="M4517 2450v50h-288v-486h81v-81h-81v-73h153v214h38v135h-38v116h38v58h97v67z"
            />
            <path
              className="ac-4-cls-4"
              d="M4517 2450v-125h18v-213h21v-76h-136v-21h-38v-133h115v-40h59v-59h-59v-56h173v38h38v695h-56v19h-95v-29h-40z"
            />
            <path
              className="ac-4-cls-3"
              d="M3594 2461h96v155h-96zm-291 0h97v58h-97zm0 115h59v41h-59z"
            />
            <path
              className="ac-4-cls-3"
              d="M3303 2519v57h59v41h135v-156h-97v58h-97zm194-58h98v155h-98zm521-723v74h86v-85h-19v11h-67zm211-11h76v57h-76z"
            />
            <path
              className="ac-4-cls-3"
              d="M4229 1783h76v77h-76zm76-56h77v133h-77zm-76 206h81v81h-81zm153 82h38v59h-38zm0 194h38v116h-38zm-192 329h39v80h-39zm39-38h191v118h-191zm288-50h40v50h-40zm-97-125h97v58h-97z"
            />
            <path
              className="ac-4-cls-3"
              d="M4420 2229h115v97h-115zm0-193h136v76h-21v117h-115v-193zm77-253h59v59h-59zm173-56h38v38h-38zm-288 0h115v156h-115zm328 733h-59v21h-94v19h-137v118h290v-121"
            />
            <path
              className="ac-4-cls-5"
              d="M4420 2500v-81m97-36v38m-288 79v-23m0-35v-252m0-38v-138m0-81v-34m153-17v28m0 14v91m115-288h173m38 38v95m0 39v253m0 38v231"
            />
            <path
              className="ac-4-cls-3"
              d="M3690 1434h115v115h-115zm0 155h96v96h-96zm96 0h96v96h-96zm96 0h96v96h-96zm96 0h97v96h-97zm-173-155h115v115h-115zm115 0h39v58h-39zm0 59h39v57h-39zm39-59h116v115h-116zm116 0h58v115h-58zm0 137h58v114h-58zm58 0h56v114h-56zm0-137h56v58h-56zm0 59h56v57h-56zm77-59h38v58h-38zm0 59h38v57h-38z"
            />
            <path
              className="ac-4-cls-3"
              d="M4247 1434h115v115h-115zm115 0h39v58h-39zm0 59h39v57h-39zm-152 78h57v57h-57zm0 57h57v57h-57zm57-57h58v114h-58zm58 18h96v96h-96z"
            />
            <path
              className="ac-4-cls-3"
              d="M4420 1589h194v96h-194zm194 0h57v96h-57zm-213-155h115v115h-115z"
            />
            <path
              className="ac-4-cls-3"
              d="M4515 1434h116v115h-116zm117 0h39v58h-39zm0 59h39v57h-39zm76-59h161v65h46v-65h47v236h-19v15h-235v-251zm254 0h246v251h-246zm246 0h78v115h-78zm0 115h78v136h-78zm-195 178v86h58v-75h-36v-11h-22zm136-477h137v157h-137zm0-154h137v154h-137zm0-155h137v155h-137zm264 81h74v74h-74zm-225-158h59v39h-59zm59 0h58v39h-58zm175-100h60v100h-60z"
            />
            <path className="ac-4-cls-4" d="M5151 941h-57v-59h-97v-38h21v-39h133v136z" />
            <path className="ac-4-cls-3" d="M5344 764v42h39v40h39v-82h-78z" />
            <path
              className="ac-4-cls-3"
              d="M5344 806h39v40h-39zm-39-42h39v82h-39zm-38 0h38v82h-38zm-39 0h39v82h-39zm-38 0h38v82h-38zm-39 0h39v62h-39zm154 100h177v88h-150v-31h-27v-57zm-328 32h41v45h-41z"
            />
            <path
              className="ac-4-cls-3"
              d="M4977 863v33h41v45h37v-59h-58v-19h-20zm78 19h39v60h-39zm-78-118h41v80h-41zm41 0h57v41h-57z"
            />
            <path className="ac-4-cls-3" d="M5074 764h76v41h-76z" />
            <path className="ac-4-cls-5" d="M5151 862v79h-57m57-115v18" />
            <path
              className="ac-4-cls-3"
              d="M4927 863v33h-26v24h56v-57h-30zm13-99h37v60h-37zm-39 0h39v60h-39zm-38 0h38v60h-38zm-39 0h39v60h-39z"
            />
            <path
              className="ac-4-cls-3"
              d="M4786 764h39v60h-39zm-39 0h39v60h-39zm-36 0h36v80h-36zm133 138h58v39h-58zm-133-20h55v59h-55z"
            />
            <path
              className="ac-4-cls-4"
              d="M4747 863h20v-19h134v58h-57v39h-77v-59h-20v-19z"
            />
            <path
              className="ac-4-cls-5"
              d="M4747 863h20v-19h134m-154 38h20v59h77v-39h57v-42m-190-16v38"
            />
            <path
              className="ac-4-cls-3"
              d="M1764 1455v39l11 25s37-17 76-32l-8-20v-12zm0-48h79v48h-79zm0-42h136v42h-136zm0-37h59v37h-59zm118 0h18v37h-18zm-118-59h59v59h-59zm0-39h59v39h-59z"
            />
            <path className="ac-4-cls-3" d="M1900 1249v-19h-77v135h59v-37h18v-58" />
            <path className="ac-4-cls-5" d="M1840 1328h42" />
            <path className="ac-4-cls-3" d="M1764 1172h79v58h-79z" />
            <path className="ac-4-cls-3" d="M1764 1114h79v59h-79zm136 0h-57v116h57" />
            <path className="ac-4-cls-5" d="M1900 1131v80" />
            <path className="ac-4-cls-3" d="M1764 942h136v172h-136z" />
            <path
              className="ac-4-cls-3"
              d="M1745 864h40v79h-40zm40 18h38v60h-38zm38 0h39v60h-39zm39 0h38v60h-38zm-58-118h39v80h-39zm39 0h96v99h-96z"
            />
            <path
              className="ac-4-cls-3"
              d="M1785 864h-40V764h59v80h39v20h-43m167-153v33h70v-71h-60v38h-10zm-28 171h57v60h-57zm38-118h96v99h-96zm97 42h19v57h-19z"
            />
            <path
              className="ac-4-cls-3"
              d="M2069 764v-10s21-9 44-11v63h-39v-42zm82-24s-20-1-38 3v63h38zm38 1l-38-1v66h38zm38 7s-19-6-38-7v65h38zm-114 77h57v39h-57zm57 0h58v39h-58zm77-19h39v57h-39zm-20-58l23 6v10h36v42h-59zm59 16h57v99h-57zm-290 118h39v60h-39zm39 0h39v60h-39zm39 0h39v60h-39zm39 0h38v60h-38zm38 0h38v60h-38zm38 0h39v60h-39z"
            />
            <path
              className="ac-4-cls-3"
              d="M2227 882h39v60h-39zm39 0h39v60h-39zm39 0h38v60h-38zm75-118h60v40h-60zm0 100v-60h98v40h-38v20h-60zm0 0h60v39h-60z"
            />
            <path className="ac-4-cls-3" d="M2440 844h38v59h-38z" />
            <path
              className="ac-4-cls-3"
              d="M2440 764h113v80h39v38h22v21h-136v-99h-38v-40zm191 118v21h94V764h-74v118h-20z"
            />
            <path
              className="ac-4-cls-3"
              d="M2553 764h39v80h-39zm39 0h59v118h-59zm133 0h40v80h-40zm0 80h40v59h-40zm40-80h77v79h-77zm0 80h77v59h-77zm77-80h59v59h-59zm59 0h40v59h-40z"
            />
            <path
              className="ac-4-cls-3"
              d="M2940 764h39v59h-39zm39 0h37v79h-37zm37 0h58v40h-58zm0 40h58v39h-58zm78-40h57v40h-57zm0 40h57v40h-57zm57-40h39v80h-39z"
            />
            <path
              className="ac-4-cls-3"
              d="M3189 764h39v60h-39zm39 0h39v79h-39zm39 0h37v80h-37zm-846 178h94v94h-94zm0 95h136v156h-136zm0 156h136v114h-136zm94-251h41v56h-41zm0 56h41v38h-41zm87 29h86v67h-86zm126-107h58v39h-58zm0 39h58v39h-58zm77-39h58v39h-58zm0 39h58v39h-58zm-415 368h166v79h-166zm297 20h40v61h-40zm176-484h134v79h-134zm134 40h64v39h-64zm0-40h79v39h-79zm115 0h58v39h-58zm0 40h58v39h-58zm58-40h58v39h-58zm0 40h58v39h-58zm77-40h58v39h-58zm0 40h58v39h-58zm58-40h58v39h-58zm0 40h58v39h-58zm-2 39h60v39h-60zm0 39h60v39h-60z"
            />
            <path className="ac-4-cls-3" d="M3303 1019h60v39h-60zm0 39h60v39h-60z" />
            <path className="ac-4-cls-3" d="M3303 1096h60v39h-60zm0 39h60v39h-60z" />
            <path
              className="ac-4-cls-3"
              d="M3303 1173h60v39h-60zm0 77v-38h59v77h-19v-39h-40z"
            />
            <path
              className="ac-4-cls-3"
              d="M3303 1330v-80h40v39h19v41h-59zm0 0h98v79h-98zm98 0h78v79h-78zm209-4h177v82h-177zm-209-384h79v94h-79zm0 94h79v99h-79zm0 99h79v96h-79z"
            />
            <path
              className="ac-4-cls-3"
              d="M3401 1343h78v71h-78zm0-113h79v76h-79zm124-202h85v66h-85zm-221-223h59v39h-59zm0-41h59v41h-59z"
            />
            <path
              className="ac-4-cls-3"
              d="M3302 728h61v37h-61zm0-39h61v38h-61zm0-38h61v38h-61zm0-42h80v42h-80zm80 0h57v42h-57zm0 80h57v37h-57zm39 37h66v37h-66zm20-117h45v62h-45z"
            />
            <path
              className="ac-4-cls-3"
              d="M3441 670h45v56h-45zm-59 56h39v58h-39zm924-36h57v37h-57zm57-82h40v62h-40zm0 63h40v56h-40zm-57 56h39v58h-39z"
            />
            <path className="ac-4-cls-3" d="M3382 902V785h39v-21h40v58h17v80h-96z" />
            <path
              className="ac-4-cls-3"
              d="M3461 764h56v58h-56zm17 58h39v40h-39zm0 40h39v40h-39z"
            />
            <path
              className="ac-4-cls-3"
              transform="rotate(-180 3536 793)"
              d="M3517 764h39v58h-39z"
            />
            <path
              className="ac-4-cls-3"
              transform="rotate(-180 3536 842)"
              d="M3517 822h39v40h-39z"
            />
            <path
              className="ac-4-cls-3"
              transform="rotate(-180 3536 882)"
              d="M3517 862h39v40h-39z"
            />
            <path
              className="ac-4-cls-3"
              d="M3555 764h56v40h-56zm95 178h60v39h-60zm0 39h60v58h-60zm60-39h77v97h-77zm-60 97h137v96h-137zm0 96h137v96h-137zm0 96h137v96h-137z"
            />
            <path
              className="ac-4-cls-3"
              d="M3555 804v98h155V726h-99v78h-56zm56-134h40v56h-40zm40 19h59v37h-59z"
            />
            <path
              className="ac-4-cls-3"
              d="M3611 609h40v62h-40zm40 0h58v42h-58zm58 0h83v42h-83zm20 42h63v38h-63zm0 38h63v39h-63zm0 40h63v37h-63z"
            />
            <path
              className="ac-4-cls-3"
              d="M3728 765h58v79h-58zm58 0h38v79h-38zm38 0h39v59h-39zm39 0h39v59h-39z"
            />
            <path
              className="ac-4-cls-3"
              d="M3901 765h38v79h-38zm39 0h58v39h-58zm0 40h58v39h-58zm77-40h58v39h-58zm0 40h58v39h-58zm58-40h38v59h-38z"
            />
            <path
              className="ac-4-cls-3"
              d="M4112 765h38v59h-38zm38 0h40v59h-40zm40 0h37v79h-37z"
            />
            <path
              className="ac-4-cls-3"
              d="M4226 805h60v40h-60zm0-77h60v77h-60zm0-39h60v39h-60z"
            />
            <path
              className="ac-4-cls-3"
              d="M4226 651h60v39h-60zm0-43h79v42h-79zm79 0h58v42h-58zm1 177v118h97V727h-59v58h-38zm97-20h38v79h-38zm0 80h38v58h-38zm38-80h38v79h-38zm0 80h38v58h-38zm117-80v40h-60v20h-18v-60h78z"
            />
            <path
              className="ac-4-cls-3"
              d="M4498 805h60v98h-60zm36-119h59v41h-59zm0 41h59v38h-59z"
            />
            <path className="ac-4-cls-3" d="M4609 765h-15v-79h-60v-79h98v41h19v117h-16" />
            <path
              className="ac-4-cls-3"
              d="M4632 607h79v41h-79zm19 41h60v40h-60zm0 40h60v38h-60z"
            />
            <path
              className="ac-4-cls-3"
              d="M4651 725h60v40h-60zm-923 138h58v39h-58zm0 39h58v40h-58zm58-39h58v39h-58zm0 39h58v40h-58zm77-39h58v39h-58zm0 39h58v40h-58zm58-39h58v39h-58zm0 39h58v40h-58zm115-39h58v39h-58zm0 39h58v40h-58zm58-39h58v39h-58zm0 39h58v40h-58zm77-39h58v39h-58zm0 39h58v40h-58zm58-39h58v39h-58zm0 39h58v40h-58zm-3 40h137v57h-137zm0 57h137v193h-137zm0 299h137v110h-137zm137 30h40v79h-40zm172 0h21v79h-21zm38-79h138v158h-138zm0-36h78v36h-78z"
            />
            <path
              className="ac-4-cls-3"
              d="M4587 1172v20h-14v21h78v36h60v-77h-124zm65-97h60v97h-60zm-79 40h78v38h-78zm0-40h78v40h-78z"
            />
            <path
              className="ac-4-cls-3"
              d="M4672 993h39v83h-39zm-269 35h85v67h-85zm191-6h78v53h-78zm57-140h60v77h-60zm0 77h60v33h-60zm-57-39h57v39h-57zm0 39h57v33h-57z"
            />
          </g>
          <g id="Empty">
            <path
              className="ac-4-cls-6"
              d="M1383 2055l-11 37 16 5 11-37-16-5zm67-64l69 34s-22 55-35 99l-75-22s17-50 41-111zm-93-39l-24 61 39 14 23-58zm468-389l34-15 6 15-33 16-7-16zm81 48l26-8 13 38-26 8-13-38z"
            />
            <path
              className="ac-4-cls-6"
              d="M1919 1568l30-10 21 75-25 8-26-73zm3-105l-33 11 13 38 31-10-11-39zm446 103l30 9-24 72-26-7 20-74z"
            />
            <path
              className="ac-4-cls-6"
              d="M2410 1619l-24-8-12 36 24 8 12-36zm53-71l-9 18 34 15 8-19-33-14zm-66-81l34 9-12 39-32-10 10-38zm-469-524l-1 459s243-62 464 0V943zm995 1117l11 37 16-5-12-37-15 5zm3-91l12 30 38-14-13-33z"
            />
            <path
              className="ac-4-cls-6"
              d="M2967 2020l20-7-11-28-19 7 10 28zm57 459h7v-76h-14v70l7 6zM1890 753h47v10h-47zm76-8h70v18h-70zm-43-74h52v40h-52zm360 73h70v19h-70zm98 8h49v11h-49zm1-47h12v25h-12zm174 386h131v216h-131zm1-149h25v11h-25zm0 11h25v32h-25zm0 32h10v24h-10z"
            />
            <path
              className="ac-4-cls-6"
              d="M2581 942h22v43h-22zm59-2h32v16h-32zm32 0h15v88h-15zm-92 392h83v13h-83zm0 60h83v18h-83zm341 392h38v28h-38zm83-59h113v87h-113zm177 0h84v14h-84zm-1 562h86v119h-86z"
            />
            <path
              className="ac-4-cls-6"
              d="M3226 2405h39v50h-39zm28-256h12v57h-12zm569 138h87v119h-87zm0 119h41v50h-41zm0-175h32v56h-32zm0-82h14v57h-14zm4-422h84v13h-84zm0 35h38v50h-38zm84-35h110v85h-110zm130-3h44v14h-44zm63 2h85v14h-85zm75 424h11v54h-11zm-72 54h83v201h-83zm44 201h39v49h-39zm598-255h15v56h-15zm2 81h28v56h-28zm0 196h13v28h-13z"
            />
            <path
              className="ac-4-cls-6"
              d="M4763 2427h26v28h-26zm-12-29h38v29h-38zm1-636h38v51h-38zm0-36h84v11h-84zm319 0h54v13h-54zm86 1h49v28h-49zm-755-786h16v85h-16zm16 0h32v15h-32zm69 3h23v41h-23zm23 10h24v28h-24zm12 28h12v25h-12zm-734 427h519"
            />
            <path className="ac-4-cls-5" d="M4514 1407h-133" />
            <path
              className="ac-4-cls-6"
              d="M3505 1389h70v18h-70zm0-61h70v16h-70zm70 0h38v79h-38zm-95-234h132v213h-132z"
            />
            <path
              className="ac-4-cls-6"
              transform="rotate(-180 3604 984)"
              d="M3596 941h16v86h-16z"
            />
            <path
              className="ac-4-cls-6"
              transform="rotate(-180 3581 948)"
              d="M3565 941h32v15h-32z"
            />
            <path
              className="ac-4-cls-6"
              transform="rotate(-180 3516 961)"
              d="M3504 941h23v41h-23z"
            />
            <path
              className="ac-4-cls-6"
              transform="rotate(-180 3492 961)"
              d="M3480 941h24v41h-24z"
            />
            <path
              className="ac-4-cls-6"
              transform="rotate(-180 3486 994)"
              d="M3480 982h12v25h-12z"
            />
            <path
              className="ac-4-cls-6"
              d="M4560 866h46v34h-46zm796 462h83v14h-83zm0 62h83v17h-83zm-26-440h66v31h-66zm0 32h19v112h-19zm-925 407h108v18h-108zm25-61h83v16h-83z"
            />
            <path className="ac-4-cls-5" d="M4405 1389v-61" />
            <path
              className="ac-4-cls-6"
              d="M3497 1727h19v38h-19zm-1649-112l-9-18 53-21 7 19-51 20z"
            />
            <path className="ac-4-cls-5" d="M2420 873v-69h62m-42 0v-42" />
            <path
              className="ac-4-cls-6"
              d="M2461 1485l16-51h57v46l-13 28-60-23zm483 240h60v13h-60zm1054-959h19v19h-19zm521 862h40v57h-40z"
            />
            <path
              className="ac-4-cls-6"
              d="M4519 1551v77h40v57h77v-134h-117zm-154-223h41v79h-41zm37-235h132v212h-132zm504-208h24v11h-24zm0-23h54v23h-54zm153-99h39v39h-39zm39 0h57v39h-57zm0 39h57v41h-57zm77 41h39v19h-39zm309 249v315h-23v-65h-22v-37h-109v-211l154-2zM3789 940v467h197v-116h47v116h195V941l-439-1zm-989 1083l12 27 71-28-12-30-71 31zm141-261h18v22h-18zm176-37h45v24h-45zm1718 561v120h-46v-8h-38v-112h84zm2-560h111v87h-111zm-123-785v466h197v-122h47v25h-15v97h211V941h-440zm204 508h27v49h-27z"
            />
            <path fill="#d1d3d4" d="M4945 1515v-81h253v79l-65-65h-121l-67 67z" />
            <path
              className="ac-4-cls-5"
              d="M4969 1490l-24 25v-81h37m18 0h144m17 0h37v79l-24-24m-13-13l-28-28h-121l-29 28"
            />
            <path className="ac-4-cls-6" d="M4970 1685v-32h54v-13h95v12h55v33h-204z" />
            <path className="ac-4-cls-5" d="M5198 1631v54" />
            <path
              className="ac-4-cls-6"
              d="M2863 942v465h198v-27h47v28h195V942h-440zm-26 1181s63 177 0 384l168 50s15-49 19-78h-8v-100h60v-265h-60l-11-40zm2110-397h66v87h-66zm357-292h177v115h-177zm0 115h177v136h-177zm-1076-318v67h135v-44h-17v-23h-118zm306-289h39v73h-39zm-1807 56h136v195h-136zm0 195h136v38h-136z"
            />
            <path
              className="ac-4-cls-6"
              d="M2727 1227h136v180h-136zm1676-619h131v159h-131z"
            />
          </g>
          <g id="Stairs-lifts-escalators">
            <path
              className="ac-4-cls-8"
              d="M4430 1344v45h84v-45h-84zm-951 2h131v45h-131zm2-339h45v88h-45zM1923 752h-33v11h-13v-92h46v81zm-590 1260l-19 63 58 16 18-58zm467-504l31 72 55-24-26-73a596 596 0 0 0-60 25zm802-417h-46v-83h12v-23h23v23h11v83zm-46 253h131v62h-131zm-95 140l-19 57 54 22 25-54s-21-12-60-25zm470 548l17 58 57-16s-5-24-18-62zm85 347h60v99h-60zm164-222h86v50h-86zm-221-418h46v73h-46zm222 0h45v73h-45zm657 422h73v45h-73zm269-2h72v45h-72zm-242-420h46v73h-46zm239 0h45v72h-45zm456-974h46v102h-46zm789 216h47v112h-47zm7 361h83v48h-83zm-285 397h49v74h-49zm-307 422h70v45h-70z"
            />
            <ellipse className="ac-4-cls-8" cx={2370} cy={692} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={2335} cy={693} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={2300} cy={692} rx={19} ry={18} />
            <path
              className="ac-4-cls-8"
              transform="rotate(-180 2418 718)"
              d="M2395 673h46v91h-46z"
            />
            <ellipse className="ac-4-cls-8" cx={1405} cy={1994} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={1922} cy={1525} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={2400} cy={1527} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={2914} cy={1993} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={3204} cy={2134} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={3884} cy={2134} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={4128} cy={2135} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={3246} cy={1794} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={2655} cy={975} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={2655} cy={1008} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={3581} cy={974} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={3581} cy={1007} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={4433} cy={974} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={4433} cy={1007} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={4695} cy={798} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={4695} cy={830} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={5467} cy={970} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={5467} cy={1003} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={5187} cy={1775} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={4818} cy={2134} rx={19} ry={18} />
            <ellipse className="ac-4-cls-8" cx={4171} cy={1796} rx={19} ry={18} />
            <path
              className="ac-4-cls-8"
              d="M3984 1298v-57s2-20 23-20 24 19 24 19v58zm47-376l2 92s-3 24-24 24-23-23-23-23l-2-93zm-970 458v-58s3-20 24-20 23 20 23 20v58zm47-439v77s-2 20-23 20-24-19-24-19v-78zm1850-1v78s-3 20-24 20-23-20-23-20v-78zm-167 797h46v75h-46zm-1611 668v73h87v-24h-40v-49h-47zm730 0v73h-87v-24h41v-49h46zm197 0v73h83v-24h-39v-49h-44zm728 1l-1 73h-86v-24h41v-49h46zm-347-1397v84h46v-59h42v-19h-42v-9h-12v-21h-35l1 24z"
            />
          </g>
        </svg>
        <div className="floor-svg" style={{
            opacity: `${this.props.selected && this.state.isInFocus ? 1 : 0}`,
            "width": `${this.props.scale}00%`,
            "height": `${this.props.scale > 1 ? 380 : 100}%`
          }}>
          {tagLayer}
        </div>
      </div>
    );
  }
}

export default AC_4;
