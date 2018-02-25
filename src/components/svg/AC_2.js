import React, { Component } from 'react';
import './floor_styles/AC_2.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_2.json';
import Tag from '../Tag';

class AC_2 extends Component {
  constructor(props) {
   super(props);
   this.state = {isInFocus: false};
   this.onLayerClick = this.onLayerClick.bind(this);
  }

  onLayerClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    let tagLayer = null;
    var infoArr = [];
    Object.keys(infoJson).forEach(function(key) {
      infoArr.push(infoJson[key]);
    });

    if(!this.props.selected && this.state.isInFocus) {
      setTimeout(() => {this.setState({isInFocus: false});}, this.props.animDuration);
    } else if (this.props.selected && !this.state.isInFocus) {
      setTimeout(() => {this.setState({isInFocus: true});}, this.props.animDuration);
    }

    if(this.props.selected || this.state.isInFocus) {
      tagLayer = infoArr.map(item => <Tag id={item.id} key={item.id} width="5700" height="2900" data={item} />)
    } else {
      tagLayer = null;
    }

    return (
      <div>
        <svg id="AC-2" viewBox="0 0 5700 2900" className="floor-svg" style={{
            WebkitTransform: `scale(${this.props.scale},${this.props.scale})`,
            Transform: `scale(${this.props.scale},${this.props.scale})`
          }}>
          <defs />
          <g id="AC-2-BG" className="floor-bg">
            <path onClick={this.onLayerClick}
              d="M4594 2775a10 10 0 0 1-10-10v-86a10 10 0 0 1 10-10h150l-35-46h-522a10 10 0 0 1-10-10v-126h-72a10 10 0 0 1-10-10v-368a10 10 0 0 1 10-10h78v-246h-268l-78 1v244l78 1a10 10 0 0 1 9 10v412l45-1a10 10 0 0 1 10 10l1 159a10 10 0 0 1-10 10l-126-1a10 10 0 0 1-10-10v-69h-568a10 10 0 0 1-10-10v-128h-76a10 10 0 0 1-10-10v-362a10 10 0 0 1 10-10h76v-276h-344l-4 2c9 15 28 47 48 85 36 72 60 135 72 188h51a10 10 0 0 1 10 10l3 371a10 10 0 0 1-10 10h-49l-15 62a10 10 0 0 1-13 7l-250-70a10 10 0 0 1-7-12c0-2 28-112 12-250a554 554 0 0 0-251-420 636 636 0 0 0-352-110 624 624 0 0 0-304 82h-1c-1 1-70 38-142 116a609 609 0 0 0-162 367 10 10 0 0 1-10 9l-260-15a10 10 0 0 1-9-10c0-2 1-34 11-85a998 998 0 0 1 60-201 825 825 0 0 1 421-444l-9-15a10 10 0 0 1-2-5v-43l2-686a10 10 0 0 1 10-10h102v-86a10 10 0 0 1 10-10l134 1c14-11 67-51 153-51s138 41 150 52l130 1a10 10 0 0 1 10 10v44h76a10 10 0 0 1 7 3s38 37 90 37c35 0 69-17 101-50 38-44 30-94 30-94a10 10 0 0 1 10-12h48v-47a10 10 0 0 1 10-10h120a10 10 0 0 1 10 10v201h342V609a10 10 0 0 1 10-10l487-1a10 10 0 0 1 10 10v49l418-1v-51a10 10 0 0 1 10-10h488a10 10 0 0 1 10 10l-1 150h767a10 10 0 0 1 10 10v577h40a10 10 0 0 1 10 10l1 371a10 10 0 0 1-10 10h-324v78a10 10 0 0 1-10 10l-358-2v648l-1 298a10 10 0 0 1-10 10z"
              fill="#e4deda"
            />
            <path className="floor-bg-border" onClick={this.onLayerClick}
              d="M2943 554v211h362V609l487-1v59l438-1v-61h488l-1 160h777v587h50l1 371h-334v88l-369-2v956h-248v-86h170l-50-66h-527v-136h-82v-368h88v-266h-278l-88 1v264l88 1v422l54-1 1 159-125-1v-79h-578v-138h-86v-362h86v-296h-356l-18 6s102 159 127 289h59l3 371h-57l-17 70-250-71s114-446-243-680a644 644 0 0 0-358-112c-184 0-310 83-310 83s-282 150-309 491l-259-15s22-510 495-726l-14-24v-44l2-685h112v-96l138 1s54-51 149-51 147 52 147 52l133 1v54h86s40 40 97 40c32 0 70-13 108-53 42-49 33-103 33-103h58v-57h120m0-20h-120a20 20 0 0 0-20 20v37h-38a20 20 0 0 0-20 23c0 1 2 13-1 28a118 118 0 0 1-27 58c-29 31-61 47-93 47-25 0-47-10-60-17a130 130 0 0 1-23-17 20 20 0 0 0-14-6h-66v-34a20 20 0 0 0-20-20l-126-1c-18-14-71-52-154-52s-138 37-156 51l-131-1a20 20 0 0 0-20 20v76h-92a20 20 0 0 0-20 20l-2 685v44a20 20 0 0 0 3 10l3 5a833 833 0 0 0-415 445 1008 1008 0 0 0-61 203c-10 52-11 85-11 86a20 20 0 0 0 19 21l259 15h1a20 20 0 0 0 20-19c14-170 94-290 160-360a595 595 0 0 1 786-86 545 545 0 0 1 246 413c16 135-11 244-11 245a20 20 0 0 0 13 24l250 71a20 20 0 0 0 25-15l14-54h41a20 20 0 0 0 20-21l-3-370a20 20 0 0 0-20-20h-43c-12-52-36-114-71-182l-40-73h322v256h-66a20 20 0 0 0-20 20v362a20 20 0 0 0 20 20h66v118a20 20 0 0 0 20 20h558v59a20 20 0 0 0 19 20l126 1a20 20 0 0 0 20-20l-1-159a20 20 0 0 0-20-20h-34v-401a20 20 0 0 0-20-20l-68-1v-224l68-1h258v226h-68a20 20 0 0 0-20 20v368a20 20 0 0 0 20 20h62v116a20 20 0 0 0 20 20h517l19 26h-129a20 20 0 0 0-20 20v86a20 20 0 0 0 20 20h248a20 20 0 0 0 20-20l1-298v-638l348 2a20 20 0 0 0 20-20v-68h314a20 20 0 0 0 20-20l-1-371a20 20 0 0 0-20-20h-30V765a20 20 0 0 0-20-20h-757l1-140a20 20 0 0 0-20-20h-488a20 20 0 0 0-20 20v42h-398v-39a20 20 0 0 0-20-20l-487 1a20 20 0 0 0-20 20v136h-322V554a20 20 0 0 0-20-20z"
              fill="#6d6e71"
            />
          </g>
          <g id="Rooms">
            <path className="ac-2-cls-3" d="M4520 2069h97v77h-97z" />
            <path
              className="ac-2-cls-3"
              d="M4616 2069h97v77h-97zm-3305 3s-23 76-31 175l99 8 4-56-20-1s5-44 23-105z"
            />
            <path
              className="ac-2-cls-3"
              d="M1396 2133l-13 66-4 56 78 4s2-47 16-109zm55-106l55 21s-21 54-33 102l-57-13a852 852 0 0 1 35-110z"
            />
            <path
              className="ac-2-cls-3"
              d="M1463 1999l53 24-10 25-55-21s7-18 12-28zm-53-152s-36 58-56 105l70 31s29-55 53-95zm21-32s-9 11-21 32l51 31 20-29s-28-20-50-34z"
            />
            <path className="ac-2-cls-3" d="M1465 1768l-34 47 34 23 33-45-33-25z" />
            <path className="ac-2-cls-3" d="M1490 1738l-25 30 47 37 24-28-46-39z" />
            <path className="ac-2-cls-3" d="M1528 1695l-38 43 46 39 36-41-44-41z" />
            <path className="ac-2-cls-3" d="M1556 1668a316 316 0 0 0-28 27l44 41 27-24z" />
            <path className="ac-2-cls-3" d="M1585 1643l-29 25 43 44 26-24-40-45z" />
            <path className="ac-2-cls-3" d="M1615 1618l-30 25 40 45 27-24-37-46z" />
            <path
              className="ac-2-cls-3"
              d="M1798 1506s-100 46-183 112l49 62s75-65 166-102zm-161 222l39-33 49 62-34 30z"
            />
            <path className="ac-2-cls-3" d="M1761 1637s-55 34-85 58l49 62s47-35 76-53z" />
            <path className="ac-2-cls-3" d="M1808 1612l-47 25 40 67s23-14 41-22z" />
            <path
              className="ac-2-cls-3"
              d="M1845 1612l-31 14 28 56 29-14zm-6-15l32 71 46-19-25-73s-33 11-53 21zm81-134l48 168s100-31 215-25l6-177s-154-4-269 34z"
            />
            <path
              className="ac-2-cls-3"
              d="M2398 1463s-83-30-209-34l-6 177s71-1 169 25zm28 112l-24 72s27 8 47 18l32-67s-19-12-55-23zm417 147v34l50 63 16-11h15v-86h-81zm-1020-286v59l27-10-7-19v-30h-20z"
            />
            <path className="ac-2-cls-3" d="M1764 1407v88l10 24 49-24v-59h20v-29h-79z" />
            <path
              className="ac-2-cls-3"
              d="M1764 1348h40v60h-40zm0-38h60v38h-60zm0-40h60v40h-60z"
            />
            <path
              className="ac-2-cls-3"
              d="M1764 1233h60v38h-60zm0-41h60v41h-60zm0-39h60v39h-60z"
            />
            <path
              className="ac-2-cls-3"
              d="M1764 1116h60v38h-60zm0-40v40h59v-59h-20v19h-39z"
            />
            <path className="ac-2-cls-3" d="M1764 1018h40v58h-40z" />
            <path
              className="ac-2-cls-3"
              d="M1764 980h59v39h-59zm0-39h59v39h-59zm0-58h59v57h-59zm-2-117h41v80h-41zm41 0h57v41h-57zm57 0h78v41h-78zm-57 41h135v58h-135zm97 424h40v57h-40zm0 57h40v58h-40zm0 58h40v61h-40z"
            />
            <path
              className="ac-2-cls-3"
              d="M1841 883h78v60h21v288h-40v176h-20v-42h-37l-2-482z"
            />
            <path
              className="ac-2-cls-3"
              d="M1919 883h38v59h-38zm38 0h38v59h-38zm38 0h39v59h-39zm39 0h39v59h-39zm39 0h39v59h-39zm39 0h39v59h-39zm40 0h39v59h-39zm39 0h39v59h-39zm39 0h39v59h-39zm39 0h39v59h-39zm39 0h36v59h-36zm37 0h35v59h-35zm-369-117h39v41h-39zm0 41h39v58h-39z"
            />
            <path
              className="ac-2-cls-3"
              d="M2014 766h56v41h-56zm0 41h39v58h-39zm58 19h60v39h-60zm78 0h39v39h-39zm-79-73l-1 73h41v-82s-13 1-40 9zm79-12a177 177 0 0 0-39 3v82h39zm39 1l-39-1v85h39zm38 6s-19-5-38-6v84h38zm24 7l-24-7v58h58v-40h-34zm-5 51h39v58h-39zm39-40h39v20h-39zm0 20h58v39h-58zm0 40h58v38h-58zm-309-153h61v75h-61zm405 93h97v81h-97zm97 0h38v41h-38zm0 41h38v39h-38zm38-41h39v80h-39zm39 0h59v40h-59zm0 40h59v40h-59zm59-40h19v21h-19z"
            />
            <path
              className="ac-2-cls-3"
              d="M2632 766h57v40h-57zm0 40h57v40h-57zm58-40h39v80h-39z"
            />
            <path className="ac-2-cls-3" d="M2728 766h39v80h-39zm39 0h38v80h-38z" />
            <path
              className="ac-2-cls-3"
              d="M2804 766h39v80h-39zm39 0h58v40h-58zm0 40h58v40h-58zm946-40h39v60h-39z"
            />
            <path className="ac-2-cls-3" d="M3827 766h39v60h-39zm39 0h38v80h-38z" />
            <path
              className="ac-2-cls-3"
              d="M3903 766h39v80h-39zm39 0h58v40h-58zm0 40h58v40h-58z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 4210 796)"
              d="M4191 766h39v60h-39z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 4172 796)"
              d="M4153 766h39v60h-39z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 4134 806)"
              d="M4115 766h38v80h-38z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 4096 806)"
              d="M4076 766h39v80h-39z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 4047 786)"
              d="M4018 766h58v40h-58z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 4047 826)"
              d="M4018 806h58v40h-58z"
            />
            <path
              className="ac-2-cls-3"
              d="M3094 766h57v40h-57zm0 40h57v40h-57zm57-40h39v80h-39zm39 0h39v80h-39z"
            />
            <path
              className="ac-2-cls-3"
              d="M3228 766h38v80h-38zm38 0h39v80h-39zm39 0h58v40h-58zm0 40h58v40h-58zm-384-40h58v40h-58zm0 40h58v40h-58zm58-40h38v80h-38zm38 0h58v40h-58zm0 40h58v40h-58zm288-197h78v43h-78zm0 43h59v39h-59zm0 39h59v38h-59z"
            />
            <path
              className="ac-2-cls-3"
              d="M3305 729h58v38h-58zm77-120h58v43h-58zm58 0h40v62h-40zm790 158h58v40h-58zm0 40h58v40h-58zm-1-197h78v43h-78zm0 43h59v39h-59zm0 39h59v38h-59z"
            />
            <path
              className="ac-2-cls-3"
              d="M4230 730h58v38h-58zm77-120h58v43h-58zm58 0h40v62h-40z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 3760 786)"
              d="M3731 766h58v40h-58z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 3760 826)"
              d="M3731 806h58v40h-58z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 3750 631)"
              d="M3712 609h78v43h-78z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 3760 671)"
              d="M3731 652h59v39h-59z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 3760 710)"
              d="M3731 691h59v38h-59z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 3760 748)"
              d="M3731 729h58v38h-58z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 3683 631)"
              d="M3654 609h58v43h-58z"
            />
            <path
              className="ac-2-cls-3"
              transform="rotate(-180 3634 640)"
              d="M3614 609h40v62h-40z"
            />
            <path
              className="ac-2-cls-3"
              d="M2536 846h39v58h-39zm39 0h39v58h-39zm57 0h39v58h-39zm39 0h39v58h-39zm-292 18h138v79h-138zm0 79h138v153h-138z"
            />
            <path
              className="ac-2-cls-3"
              d="M2379 1095h138v95h-138zm0 96h138v116h-138zm0 116h138v99h-138zm349-443h138v79h-138zm0 79h138v153h-138zm577 0h138v79h-138zm0 79h138v153h-138zm0 305h138v79h-138z"
            />
            <path
              className="ac-2-cls-3"
              d="M3305 1174h138v153h-138zm346-231h138v79h-138zm0 79h138v153h-138zm-39 305h176v79h-176z"
            />
            <path
              className="ac-2-cls-3"
              d="M3651 1174h138v153h-138zm-923-78h138v95h-138zm0 95h138v116h-138zm0 117h138v99h-138zm-211 40h39v58h-39zm147 17h24v41h-24z"
            />
            <path
              className="ac-2-cls-3"
              d="M2664 1329h24v37h-24zm203-465h54v38h-54zm0 39h54v41h-54zm73-39h58v38h-58zm0 39h58v41h-58zm58-39h58v38h-58zm0 38h58v41h-58zm116-37h58v38h-58zm0 38h58v41h-58zm58-39h58v38h-58zm0 39h58v41h-58zm77-38h58v38h-58zm0 38h58v41h-58zm58-39h58v38h-58zm0 39h58v41h-58zm424-39h58v38h-58zm0 38h58v41h-58zm58-38h58v38h-58zm0 38h58v41h-58zm76 1h58v41h-58zm1-39h115v38h-115zm57 38h58v41h-58zm115-38h58v38h-58zm0 39h58v41h-58zm58-39h58v38h-58zm0 38h58v41h-58zm77-37h58v38h-58zm0 38h58v41h-58zm58-39h58v38h-58zm0 39h58v41h-58zm-703 126h85v65h-85zm-924 0h85v65h-85zm876-263h75v40h-75zm76 0h58v80h-58zm58-95h95v57h-95zm0 57h95v58h-95zm0 58h95v57h-95zm0 57h95v59h-95z"
            />
            <path
              className="ac-2-cls-3"
              d="M3429 671v122h-47v109h232v-56h-58v-40h-76V671h-51zm936 1h40v57h-40zm-58 20h58v38h-58zm0 38h40v58h-40z"
            />
            <path
              className="ac-2-cls-3"
              d="M4307 903V787h40v-57h58v172l-98 1zm98-136h37v77h-37zm0 77h37v40h-37zm37-77h119v77h-119zm0 77h77v59h-77zm78 0h41v59h-41z"
            />
            <path
              className="ac-2-cls-3"
              d="M4538 730h59v38h-59zm0-41h59v41h-59zm0-79h40v78h-40zm40 0h39v59h-39zm39 0h37v59h-37zm38 0h60v59h-60zm20 59h40v59h-40zm-59 20h59v39h-59zm20 78v-39h79v53h-33v-14h-46zm79 0h37v78h-37zm37 0h37v78h-37zm37 0h39v78h-39zm39 0h39v78h-39zm39 0h213v78h-213zm213 0h78v98h-78zm78 0h77v98h-77z"
            />
            <path
              className="ac-2-cls-3"
              d="M5234 767h77v98h-77zm77 0h93v98h-93zm93 0h83v98h-83zm-73 116h66v49h-66zm-176 41h176v168h-176zm-172-59h38v79h-38zm-52 0v33h-25v23h54v-56h-29zm-160 0v18h-77v60h212v-78h-135zm-116 18h39v61h-39z"
            />
            <path className="ac-2-cls-3" d="M4538 943v120h106v18h34v-67h37v-71h-177z" />
            <path
              className="ac-2-cls-3"
              d="M4494 1095v16s2 37 57 127l117-48h47v-109h-71v-18h-106v32zm-89-67h47v65h-47zm-174-85h174v207h-174zm0 225h117v61h-117z"
            />
            <path
              d="M2521 1507s289 107 443 442l-91 40 10 28-70 30s-75-240-364-382z"
              fill="#d4e6ac"
            />
            <path
              className="ac-2-cls-3"
              d="M2838 2120s-11-36-25-73l70-30s19 44 28 82zm180-686h172v78h-172z"
            />
            <path
              className="ac-2-cls-3"
              d="M3018 1511h172v76h-172zm0 76h76v96h-76zm77 0h96v96h-96zm23 135h65v87h-65zm188 149h79v64h-79zm79-52h210v116h-210z"
            />
            <path
              className="ac-2-cls-3"
              d="M3306 1724h139v96h-139zm288 95h-149v-95h121v9h10v28h18v58zm0 116h194v190h-136v99h58v94h-37v36h-79v-419z"
            />
            <path
              className="ac-2-cls-3"
              d="M3652 2125h39v61h-39zm0 61h39v38h-39zm39-61h40v42h-40z"
            />
            <path
              className="ac-2-cls-3"
              d="M3691 2224v-57h40v-42h57v99h-97zm19 0h78v94h-78zm-37 94h115v95h-115zm-79 36h79v59h-79zm252-127h66v54h-66zm-636-755h76v97h-76zm0 97h76v59h-76zm0 59h76v57h-76z"
            />
            <path className="ac-2-cls-3" d="M3285 1606h77v78h-77z" />
            <path
              className="ac-2-cls-3"
              d="M3285 1530h77v77h-77zm0-78h77v77h-77zm97 0h86v77h-86zm0 77h86v77h-86zm0 78h86v78h-86zm87-155h86v77h-86zm0 77h86v77h-86zm0 78h86v78h-86zm106-155h76v77h-76zm0 77h76v77h-76zm0 77h76v78h-76zm77-154h76v77h-76zm0 77h76v77h-76zm0 77h76v78h-76zm96-154h76v77h-76zm0 77h76v77h-76zm0 77h76v78h-76zm77-154h76v77h-76zm0 77h76v77h-76zm0 77h76v78h-76zm98-173v251h116v-97h19v-154h-135zm270 0v251h-116v-97h-19v-154h135z"
            />
            <path
              className="ac-2-cls-3"
              d="M4039 1587h39v97h-39zm191-135h21v39h-21zm0 40h21v39h-21z"
            />
            <path className="ac-2-cls-3" d="M4230 1530h21v39h-21zm0 39h21v39h-21z" />
            <path
              className="ac-2-cls-3"
              d="M4230 1607h78v77h-78zm78 0h78v77h-78zm78-39h96v116h-96z"
            />
            <path className="ac-2-cls-3" d="M4481 1568h98v116h-98z" />
            <path className="ac-2-cls-3" d="M4578 1568h95v116h-95zm-192-38h58v38h-58z" />
            <path
              className="ac-2-cls-3"
              d="M4443 1530h19v38h-19zm-57-97h77v97h-77zm77 0h75v97h-75zm75 0h78v97h-78zm78 0h58v97h-58zm95 78h25l50-49v-23h-75v72zm75 154v19h160v-40h-40v21h-120z"
            />
            <path
              className="ac-2-cls-3"
              d="M4711 1511v173h75v-19h120v-21h40v-205h-160v23l-50 49h-25zm235-72h253v167h-253zm0 188h100v57h-100zm100 0h54v57h-54zm302-78h40v40h-40zm-115 20v115h98v-75h-21v-40h-77zm0-41v41h77v-58h-37v17h-40z"
            />
            <path
              className="ac-2-cls-3"
              d="M5233 1434h253v115h-176v-38h-37v17h-40v-94zm98 193h95v-39h60v96h-155v-57zm-1309 110h86v72h-86zm208-14h174v307h-174zm194 0h97v79h-97zm0 79h97v74h-97z"
            />
            <path
              className="ac-2-cls-3"
              d="M4520 1723h75v79h-75zm0 79h75v74h-75zm76 0h60v74h-60zm0-79h60v79h-60zm60 0h56v79h-56zm0 79h56v74h-56zm180-61h33v68h-33zm54-18h48v87h-48zm-137 90h86v140h-86zm18 140h69v60h-69zm0 60h69v56h-69zm0 56h69v34h-69zm0 133h69v79h-69zm-346-286h97v57h-97zm0 57h97v57h-97z"
            />
            <path
              className="ac-2-cls-3"
              d="M4521 1916h95v57h-95zm0 57h95v57h-95zm96-57h96v114h-96zm-386 153h39v77h-39zm39 0h97v77h-97zm97 0h58v39h-58zm0 39h58v39h-58zm-136 39h78v78h-78zm78 0h58v58h-58zm58 0h58v78h-58zm58 0h57v78h-57z"
            />
            <path className="ac-2-cls-3" d="M4481 2147h58v78h-58zm59 0h58v78h-58z" />
            <path
              className="ac-2-cls-3"
              d="M4597 2147h57v78h-57zm57 0h58v78h-58zm-229-78h95v77h-95zm-1244 133h75v80h-75zm86-91h56v86h-56z"
            />
            <path
              className="ac-2-cls-3"
              d="M3255 2202h12v-5h56v277h-40v-154h-16v-94h-12v-24zm244-267h96v575h-96z"
            />
            <path
              className="ac-2-cls-3"
              d="M3499 2600v9h95v-100h-58v91h-37zM5440 865h47v88h-47z"
            />
            <path
              className="ac-2-cls-5"
              d="M2481 1598l-32 67s246 82 364 382l70-30-10-28m-385-411l33-71s289 108 443 442l-71 31"
            />
          </g>
          <g id="Empty">
            <path
              className="ac-2-cls-6"
              d="M1457 2259l83 5s6-313 309-495 613-1 613-1 203 87 283 331c55 175 15 383 13 380s85 23 85 23 112-291-109-601c-214-325-602-294-602-294s-214-5-416 154-244 388-244 388-15 73-15 110zm-76-207l-11 36 16 5 11-36-16-5zm64-61l18 8s-23 53-37 97l-17-5s11-38 36-100zm-91-39l-23 58 39 14 23-55zm468-390l35-15 6 15-33 16-8-16z"
            />
            <path className="ac-2-cls-6" d="M1904 1610l26-7 12 38-25 8-13-39z" />
            <path
              className="ac-2-cls-6"
              d="M1917 1568l30-10 21 75-26 8-25-73zm3-105l-33 10 13 38 31-9-11-39zm452 95l30 9-24 72-26-8 20-73z"
            />
            <path
              className="ac-2-cls-6"
              d="M2414 1611l-24-8-12 36 24 8 12-36zm47-65l-6 17 33 15 8-17-35-15zm-63-83l34 10-12 38-32-9 10-39zm-458-520l-2 443s219-62 440 0V943zm538 491v33l53 24 5-9v-27h76v36h-17v51l2 2v-18h47v-33h14v-3h-44v-56h-136zm284 212v21l16 16h163v-37zm-72-212h75v39h-75zm193 0h57v39h-57zm77 0h59v249h-59zm-214 56h195v137h-195zm176 566l11 36 16-4-12-37-15 5zm5-90l12 30 38-14-13-33z"
            />
            <path
              className="ac-2-cls-6"
              d="M2968 2016l20-7-11-27-19 7 10 27zm-126 103s68 183 1 383l165 47 18-75-8-7v-356l-12-39z"
            />
            <path className="ac-2-cls-6" d="M3018 2111h58v248h-58z" />
            <path
              className="ac-2-cls-6"
              d="M3018 2358h58v40h-58zm7 116h7v-76h-14v69l7 7zM1878 756h60v10h-60zm89-8h70v18h-70zm-43-75h52v40h-52zm359 75h70v19h-70zm98 8h49v11h-49zm2-49h12v25h-12zm175 386h130v214h-130zm-1-150h25v11h-25zm0 11h25v31h-25zm0 31h10v24h-10z"
            />
            <path
              className="ac-2-cls-6"
              d="M2581 943h22v42h-22zm61 0h31v16h-31zm31 0h15v85h-15zm-92 386h83v13h-83zm0 60h83v18h-83zm343 391h36v28h-36zm81-56h113v85h-113zm177-2h84v14h-84zm73 504h12v56h-12z"
            />
            <path
              className="ac-2-cls-6"
              d="M3181 2281h86v119h-86zm46 119h39v50h-39zm28-255h12v57h-12zm339 267h194v197h-194zm-95 97h37v90h-37zm-232-35h56v136h-56zm56-269h176v405h-176zm-17-270h17v176h-17zm17 0h176v270h-176zm271-174h-18v-28h-10v-9h223v112h-19v-93h-176v18zm194 712h56v136h-56zm57 0h70v215h-70zm70 57h54v158h-54zm-22-83h22v26h-22zm-67-166h86v119h-86z"
            />
            <path
              className="ac-2-cls-6"
              d="M3826 2399h41v50h-41zm0-172h20v54h-20zm1-119h14v94h-14zm1-384h84v13h-84zm0 35h38v50h-38zm84-35h110v85h-110zm-84 85h116v35h-116zm246 0h119v35h-119zm-30-86h44v14h-44zm64 0h85v14h-85zm73 424h11v54h-11zm-76 54h87v200h-87z"
            />
            <path
              className="ac-2-cls-6"
              d="M4152 2400h40v50h-40zm599-253h15v56h-15zm0 79h20v55h-20zm2 195h13v28h-13z"
            />
            <path
              className="ac-2-cls-6"
              d="M4765 2421h26v28h-26zm26-21h48v74h-48zm-38-8h38v29h-38z"
            />
            <path
              className="ac-2-cls-6"
              d="M4751 2281v111h40v8h48v-119h-88zm-520-18h480v350h-480zm540 211h69v194h-69zm-177 231h248v60h-248zm159-922h38v27h-38zm0-59h83v11h-83zm83 0h33v17h-33zm33-1h21v87h-21zm68 0h11v87h-11zm11-6h74v92h-74zm74 19h51v73h-51zm35-12h69v12h-69zm101 0h49v28h-49zm-212-118h154v21h-154zm191 24h62v54h-62zm173-81v60h77v-21h-39v-39h-38zm-1059-97h135v155h-135zm-1384-278h438v232h-438zm0-231h438v231h-438zm515-272h47v31h-47zm0 32h47v26h-47zm0 26h47v65h-47zm98-120h133v157h-133zm312 58h438v99h-438zm613-57h132v157h-132zm0 333h16v85h-16zm16 0h32v15h-32zm70 0h23v41h-23zm23 0h24v41h-24zm12 41h12v25h-12zm189 71h19v-91h152v-21h-171v112zm0 26h20v97s-1 14-20 15z"
            />
            <path className="ac-2-cls-5" d="M4694 1190v20m0 48v29h461v-66m0-46v-83" />
            <path
              className="ac-2-cls-6"
              d="M5155 883h156v42h-156zm-134-18h38v18h96v60h-134v-78zm-1232 541h519"
            />
            <path
              className="ac-2-cls-5"
              d="M3846 943l327 1m-384 349h441v-143m510 256h-359"
            />
            <path
              className="ac-2-cls-6"
              d="M3443 1346h39v60h-39zm64 42h69v18h-69zm0-61h69v16h-69z"
            />
            <path className="ac-2-cls-6" d="M3575 1327h37v79h-37zm-93-234h130v213h-130z" />
            <path
              className="ac-2-cls-6"
              transform="rotate(-180 3605 986)"
              d="M3597 944h16v85h-16z"
            />
            <path
              className="ac-2-cls-6"
              transform="rotate(-180 3582 951)"
              d="M3566 944h32v15h-32z"
            />
            <path
              className="ac-2-cls-6"
              transform="rotate(-180 3516 964)"
              d="M3504 944h23v41h-23z"
            />
            <path
              className="ac-2-cls-6"
              transform="rotate(-180 3492 964)"
              d="M3480 944h24v41h-24z"
            />
            <path
              className="ac-2-cls-6"
              transform="rotate(-180 3486 997)"
              d="M3480 985h12v25h-12z"
            />
            <path
              className="ac-2-cls-6"
              d="M4561 869h46v34h-46zm795 437h83v36h-83zm0 83h83v17h-83zm83-83h56v100h-56z"
            />
            <path className="ac-2-cls-6" d="M5494 1352h50v54h-50zm-163-420h66v37h-66z" />
            <path
              className="ac-2-cls-6"
              d="M5331 968h19v101h-19zm-173 824h49v18h-49zm-753-404h108v18h-108zm109-21h25v39h-25z"
            />
            <path className="ac-2-cls-6" d="M4538 1388h39v18h-39zm-107-61h107v16h-107z" />
            <path className="ac-2-cls-5" d="M4405 1388v-61m-175-177h175v18h-175z" />
          </g>
          <g id="Stairs-lifts-escalators">
            <path
              className="ac-2-cls-7"
              d="M4431 1343v45h83v-21h24v-24h-107zm60-334h47v86h-47zm-984 334h69v45h-69zm-26-334h47v84h-47zM1878 673h46v83h-46zm-547 1337l-19 62 58 16 18-58zm467-502l24 54 56-23-21-57a596 596 0 0 0-59 26zm759-499h48v85h-48zm24 333h83v47h-83zm-120 141l-19 56 54 22 25-54s-21-12-60-24zm471 546l17 59 57-16s-5-25-18-63zm100 369h45v76h-45zm149 2h47v74h-47zm0-246h86v48h-86zm-221-418h46v73h-46zm222 0h45v73h-45zm659 421h72v45h-72zm26 242v74h26v-26h19v-48h-45zm238 1h47v77h-47zm0-244h74v45h-74zm-239-420h46v73h-46zm242 1h45v72h-45zm-52-422h174v24h-174zm0 46h174v22h-174zm505-594h46v102h-46zm789 201h47v101h-47zm-19 374h108v47h-108zm-231 285h37v57h-37zm-27 109h49v74h-49zm-320 24h83v49h-45v-26h-38v-23zm13 398h70v45h-70z"
            />
            <ellipse className="ac-2-cls-7" cx={2370} cy={695} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={2336} cy={696} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={2301} cy={695} rx={19} ry={18} />
            <path
              className="ac-2-cls-7"
              transform="rotate(-180 2418 721)"
              d="M2395 675h46v91h-46z"
            />
            <ellipse className="ac-2-cls-7" cx={1403} cy={1991} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={1920} cy={1525} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={2400} cy={1525} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={2916} cy={1991} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={3205} cy={2131} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={3885} cy={2131} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={4134} cy={2131} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={3247} cy={1791} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={2655} cy={977} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={2655} cy={1010} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={3582} cy={976} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={3582} cy={1009} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={4437} cy={976} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={4437} cy={1009} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={4696} cy={800} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={4696} cy={833} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={5467} cy={972} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={5467} cy={1005} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={5187} cy={1772} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={4818} cy={2131} rx={19} ry={18} />
            <ellipse className="ac-2-cls-7" cx={4173} cy={1791} rx={19} ry={18} />
            <path
              className="ac-2-cls-7"
              d="M3987 1293v-57s2-20 23-20 24 19 24 19v58zm47-350v77s-3 20-24 20-24-19-24-19v-78zm878 344v-52s2-19 23-19 24 18 24 18v53zm47-344v77s-3 20-24 20-24-19-24-19v-78z"
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

export default AC_2;
