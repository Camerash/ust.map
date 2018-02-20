import React, { Component } from 'react';
import './floor_styles/AC_LG3.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_LG3.json';
import Tag from '../Tag';

class AC_LG3 extends Component {
  constructor(props) {
   super(props);
   this.state = {isInFocus: true};
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
        <div className="tag-layer">
          {tagLayer}
        </div>
        <svg id="AC-LG3" viewBox="0 0 5700 2900">
          <defs />
          <g id="AC-LG3-BG" className="floor-bg">
            <path
              d="M123 2456a10 10 0 0 1-10-10v-258a10 10 0 0 1 10-10h417v-568h-21a10 10 0 0 1-10-10v-53a10 10 0 0 1 10-10h130c14-6 26-9 38-9 22 0 41 10 55 31a111 111 0 0 1 12 22h195c18-42 44-51 62-51 15 0 27 6 33 9h133a10 10 0 0 1 10 10v39h103l1-131a10 10 0 0 1 10-10l450 2 2-335-1066-2a10 10 0 0 1-10-10l1-108H461a10 10 0 0 1-10-10V710a10 10 0 0 1 10-10l373 1v-86a10 10 0 0 1 10-10l252 1a10 10 0 0 1 10 9 482 482 0 0 1 227-75l33-33a10 10 0 0 1 14 0l34 34a459 459 0 0 1 163 41 487 487 0 0 1 118 77c50 45 79 89 88 103h85v-79a10 10 0 0 1 10-10h195a10 10 0 0 1 10 10v83h152v-79a10 10 0 0 1 10-10h197a10 10 0 0 1 10 10v84a10 10 0 0 1-10 10h-125v152a10 10 0 0 1-10 10h-11l-38 39-2 644a10 10 0 0 1-12 9 696 696 0 0 0-98-7 688 688 0 0 0-397 129 10 10 0 0 1-14-1l-84-117a847 847 0 0 0-274 342 667 667 0 0 0-53 181 10 10 0 0 1-10 9h-184v116a10 10 0 0 1-10 10l-76-1v150a10 10 0 0 1-10 10z"
              fill="#e6e7e8"
            />
          <path className="floor-bg-border"
              d="M1373 514l37 36a477 477 0 0 1 368 222h100v-89h195v93h172v-89h197v84h-135v162h-15l-44 44-2 649a702 702 0 0 0-100-8c-246 0-403 132-403 132l-89-125c-310 224-340 536-340 536h-194v126l-86-1v160H123v-258h427v-588h-31v-53h133c13-7 25-9 35-9 45 0 60 53 60 53h209c15-41 38-51 55-51a57 57 0 0 1 30 9h136v49h123l1-141 460 2 2-355-1076-2 1-118H461V710l383 1v-96l252 1v12h8c108-75 234-79 234-79l35-35m0-20a20 20 0 0 0-14 6l-30 30a496 496 0 0 0-72 11 526 526 0 0 0-78 25 455 455 0 0 0-70 35 20 20 0 0 0-13-5l-252-1a20 20 0 0 0-20 20v76l-363-1a20 20 0 0 0-20 20v274a20 20 0 0 0 20 20h207l-1 98a20 20 0 0 0 20 20l1056 2-2 315-440-2a20 20 0 0 0-20 20l-1 121h-83v-29a20 20 0 0 0-20-20h-131a77 77 0 0 0-35-9 66 66 0 0 0-41 14c-11 9-20 21-28 37H761a118 118 0 0 0-11-18 75 75 0 0 0-63-35c-12 0-26 3-40 9H519a20 20 0 0 0-20 20v53a20 20 0 0 0 20 20h11v548H123a20 20 0 0 0-20 20v258a20 20 0 0 0 20 20h911a20 20 0 0 0 20-20v-140l66 1a20 20 0 0 0 20-20v-106h174a20 20 0 0 0 20-18c0-1 8-77 53-179 39-91 117-220 262-330l78 107a20 20 0 0 0 29 4s39-32 106-63c62-29 162-64 284-64a686 686 0 0 1 97 7 20 20 0 0 0 23-19l2-640 32-33h7a20 20 0 0 0 20-20V791h114a20 20 0 0 0 20-20v-84a20 20 0 0 0-20-20h-196a20 20 0 0 0-20 20v69h-132v-73a20 20 0 0 0-20-20h-195a20 20 0 0 0-20 20v69h-69c-12-18-41-58-88-100a497 497 0 0 0-119-79 468 468 0 0 0-163-42l-31-31a20 20 0 0 0-15-6z"
              fill="#6d6e71"
            />
          </g>
          <g id="Empty">
            <path
              className="ac-lg3-cls-3"
              d="M2282 756h71v15h-71zm-243-73h34v30h-34zM548 2187H121v257l913 2v-160l86 1v-126h57v-54h-26v-292h-14v-32h-123v-19h138v-165H549l-1 588zm63-623h94v34h-94zm384 2h95v32h-95zm181 65h37v51h-37zm279-114h58v96h-58z"
            />
            <path className="ac-lg3-cls-4" d="M1609 1527v-10h-96m96 66v38l19 23" />
            <path
              className="ac-lg3-cls-3"
              d="M1654 1625s68-52 150-88l65 140s-69 28-126 73zm264-154l49 171s120-39 279-16l2-649 44-44h-200v36h-40v38h-36v37h-42v41h-36v381zm-155-367h137v341h-137z"
            />
            <path
              className="ac-lg3-cls-4"
              d="M1876 1104v-78h62v-39h39v-37h38V774h12v-20h-60v19"
            />
            <path
              className="ac-lg3-cls-3"
              d="M1889 1585l7 17-52 21-8-17 53-21zm26-9l30-9 22 75-28 8-24-74z"
            />
            <path className="ac-lg3-cls-4" d="M1918 1471l-37 11" />
            <path
              className="ac-lg3-cls-3"
              d="M575 984v-13h-95V788h345v-77H461v273h114zm269-273h77v-55h155v29s36-34 64-48h71v37h36v29h250v-29h37v-33h77s88 64 113 102v28h54s-104-205-368-221l-36-36-36 35s-127 5-234 79h-8v-12H844zM688 984h78v78h68v-54h80s-1 55 5 95H687z"
            />
            <path
              className="ac-lg3-cls-3"
              d="M790 963h72v29h-72zm492 50v90h269v-76h-90v-14h-179z"
            />
            <path
              className="ac-lg3-cls-3"
              d="M1461 967h40v60h-40zm784-280h107v30h-107zm-1026 326h11v90h-11zm-146-50h40v40h-40zm209 4h28v47h-28zm-480 41h31v55h-31z"
            />
          </g>
          <g id="Rooms">
            <path
              className="ac-lg3-cls-5"
              d="M1823 772h40v41h-40zm40 0h57v41h-57zm-650 859h146v156h-146zm146-18v190h35l40-40v-54h29l50-49v-47h-154zm-182 234v175h172s25-63 61-128v-47zm0 314v-139h172s-28 70-35 139zM480 934h38v38h-38zm517 29h57v81h-57zm-78 140h39v-47h-43a430 430 0 0 0 4 47zm39-100v53h-43a450 450 0 0 1 0-53zm0 57h39v43h-39z"
            />
            <path className="ac-lg3-cls-5" d="M996 1060h39v43h-39zm39 0h39v43h-39z" />
            <path
              className="ac-lg3-cls-5"
              d="M1073 1060h40v43h-40zm40-24h107v67h-107zm117-23h52v90h-52zm80-46h44v47h-44zm241 0h41v75h-41zm0 75h41v62h-41zm234-270h38v41h-38zm59 851l52-21 19 56-46 19-25-54z"
            />
          </g>
          <g id="Stairs-lifts-escalators">
            <ellipse className="ac-lg3-cls-6" cx={1950} cy={701} rx={19} ry={18} />
            <ellipse className="ac-lg3-cls-6" cx={1527} cy={1003} rx={19} ry={18} />
            <ellipse className="ac-lg3-cls-6" cx={1916} cy={1533} rx={19} ry={18} />
            <ellipse className="ac-lg3-cls-6" cx={1194} cy={1701} rx={19} ry={18} />
            <ellipse className="ac-lg3-cls-6" cx={1132} cy={995} rx={19} ry={18} />
            <ellipse className="ac-lg3-cls-6" cx={783} cy={1044} rx={19} ry={18} />
            <ellipse className="ac-lg3-cls-6" cx={1985} cy={702} rx={19} ry={18} />
            <ellipse className="ac-lg3-cls-6" cx={2019} cy={701} rx={19} ry={18} />
            <ellipse className="ac-lg3-cls-6" cx={2373} cy={701} rx={19} ry={18} />
            <path
              className="ac-lg3-cls-6"
              d="M1878 681h47v91h-47zm517 6h47v84h-47zm-317 189h162v21h-162zm0 29h162v21h-162zm-887 62h71v46h-71zm162 0h73v47h-73zm-836-33h58v38h-58zm1278 582s31-15 61-25l27 74-56 21zm-136 50l11 17 105-60-10-17-106 60zm-645 198h123v19h-123z"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default AC_LG3;
