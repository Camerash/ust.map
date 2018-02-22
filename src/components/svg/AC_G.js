import React, { Component } from 'react';
import './floor_styles/AC_G.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_G.json';
import Tag from '../Tag';

class AC_G extends Component {
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
        <svg id="AC-G" viewBox="0 0 5700 2900" className="floor-svg" style={{
            WebkitTransform: `scale(${this.props.scale},${this.props.scale})`,
            Transform: `scale(${this.props.scale},${this.props.scale})`
          }}>
          <defs />
          <g id="AC-G-BG" className="floor-bg">
            <path
              className="ac-g-cls-1" onClick={this.onLayerClick}
              d="M3018 2704l-15-1c-32-2-181-70-243-99-97-46-214-104-241-123-60-41-98-120-109-143l-23-61c-14-42-33-93-47-109l-9-13c-20-25-44-57-149-73h-7a168 168 0 0 0-22-2c-51 0-104 28-153 81a10 10 0 0 1-1 1l-11 11c-40 38-146 141-233 165-83 26-437 121-453 124a40 40 0 0 1-6 0c-19 0-42-11-52-37l-1-1c-6-22-8-125-9-159h-118l-541 2a10 10 0 0 1-10-10l-1-95h-41a10 10 0 0 1-10-10v-41a10 10 0 0 1 10-10h27v-491h-3a109 109 0 0 0-12 0 41 41 0 0 1-14-2 10 10 0 0 1-3-1c-5-5-6-12-6-47l1-11c-1-8 3-12 7-13a17 17 0 0 1 9-3h76c0-5 1-8 5-12 5-4 11-4 21-4h448c8 0 14 0 19 4 3 3 4 7 4 12h35a248 248 0 0 1 18 0h25a15 15 0 0 1 12 5c5 5 4 12 4 15v32h7a3869 3869 0 0 1 90 0v-119c-1-3-2-12 6-17a10 10 0 0 1 5-2h17l433-1 1-24 2-36a10 10 0 0 1 14-9c2 0 16 2 78 2h22v-261h-758l-178 47a10 10 0 0 1-13-7l-7-35-182 1a10 10 0 0 1-10-10v-110h-58l-203 1a10 10 0 0 1-10-10V716a10 10 0 0 1 10-10h368v-86a10 10 0 0 1 10-10h257a10 10 0 0 1 10 11v25a340 340 0 0 1 52-30 479 479 0 0 1 249-41c61 7 117 21 167 42 40 17 76 39 108 65 43 35 65 68 72 80h115v-83a10 10 0 0 1 10-10l132-1a196 196 0 0 1 35-33c23-16 61-36 112-36 39 0 80 12 117 36a257 257 0 0 1 43 34l113 1-2-436a10 10 0 0 1 10-10h445a10 10 0 0 1 10 10v64h86a10 10 0 0 1 10 10v214a10 10 0 0 1-10 10h-20l-1 425a10 10 0 0 1-10 10l-253 1v434h87a10 10 0 0 1 10 10v31h1739a10 10 0 0 1 10 10l1 170a10 10 0 0 1-10 10h-285v185a10 10 0 0 1-10 10l-450 2a10 10 0 0 1-10-10l1-71-456-2v70a10 10 0 0 1-10 10l-237-2h-144l1 45c8 12 40 62 58 114 16 46 30 101 35 121h52a10 10 0 0 1 10 10l3 369a10 10 0 0 1-10 11h-41l-7 30-6 29a255 255 0 0 1 33 25c34 31 34 54 28 68-15 36-27 57-71 57z"
            />
            <path
              className="ac-g-cls-2 floor-bg-border" onClick={this.onLayerClick}
              d="M2885 234v74h96v214h-30l-1 435h-263v455h97v41h1749l1 170h-295v195l-449 2v-81l-476-3v81l-236-3h-155l1 59s39 57 59 114 36 128 36 128l60-1 3 370-49 1-9 38-7 35s79 47 63 85c-15 35-24 51-62 51l-14-1c-49-4-431-186-480-220s-86-97-105-139-48-146-71-173-38-70-166-89c-3 0-14-2-29-2-34 0-93 11-160 84-18 16-143 147-241 174-86 28-438 122-451 124a30 30 0 0 1-5 0c-14 0-34-8-43-31-7-24-9-167-9-167l-128 1-541 2-1-105h-51v-41h36l1-54v-445c0-13 2-12-12-12h-13a31 31 0 0 1-11-1c-3-3-1-39-1-51l1-4a7 7 0 0 1 5-1h75l11-1c0-16 0-16 16-16h448c13 0 13 0 14 14v2l20 1h67a5 5 0 0 1 4 2c3 2 2 6 2 9v35c0 4 2 6 6 6h69l42-1v-127c0-3-2-7 2-10l16-1h443l3-70c2 2 49 3 82 3l31-1 1-7v-273h-769l3-1-4 1h1l-180 47-10-42H733V994H461V716h378v-96h258v46s88-82 265-82l45 1c262 28 343 187 343 187h129l1-93 137-1s50-69 142-69 155 70 155 70l128 1-2-446h445m0-20h-445a20 20 0 0 0-20 20l2 426-99-1a273 273 0 0 0-41-32 256 256 0 0 0-54-26 212 212 0 0 0-69-12c-42 0-83 13-118 38a211 211 0 0 0-34 31l-127 1a20 20 0 0 0-20 20v73h-99c-10-15-33-46-72-78-32-26-69-49-110-66-51-22-108-36-169-42l-1-1-47-1a531 531 0 0 0-121 13 443 443 0 0 0-87 30 370 370 0 0 0-37 20v-6a20 20 0 0 0-20-21H840a20 20 0 0 0-20 20v76H462a20 20 0 0 0-20 20v278a20 20 0 0 0 20 20h251v99a20 20 0 0 0 20 20h174l6 27a20 20 0 0 0 24 15l178-47h746v241h-12c-57 0-72-2-76-2a20 20 0 0 0-26 19 1638 1638 0 0 1-2 50 617362 617362 0 0 1-436 1h-5a20 20 0 0 0-11 4 25 25 0 0 0-10 16 32 32 0 0 0 0 10v108a1491 1491 0 0 1-77 0v-22c0-3 1-14-7-22a25 25 0 0 0-19-8h-69a24 24 0 0 0-6-9c-7-8-17-8-26-8H631c-11 0-21 0-28 8a24 24 0 0 0-6 9h-68a27 27 0 0 0-15 4c-5 3-12 9-11 21l-1 11v26c1 12 2 23 10 29a20 20 0 0 0 6 3 51 51 0 0 0 17 3h5v471h-17a20 20 0 0 0-20 20v41a20 20 0 0 0 20 20h31l1 85a20 20 0 0 0 20 20l541-2 109-1 1 55c2 80 6 93 8 98v1c12 31 40 44 62 44a50 50 0 0 0 8 0c16-3 370-98 454-125 39-10 85-37 139-80 42-33 79-68 98-87l11-11a20 20 0 0 0 2-1c46-51 96-78 145-78a156 156 0 0 1 21 1l7 1c101 15 123 45 142 69l10 13c12 15 31 68 45 106l23 62a467 467 0 0 0 43 76c22 31 45 55 69 71a4220 4220 0 0 0 394 191c67 28 87 33 96 33l15 1c24 0 40-6 53-18 13-11 20-27 28-45 4-10 7-26-4-47-6-10-15-21-27-32a258 258 0 0 0-29-23l5-22 5-22 33-1a20 20 0 0 0 20-20l-3-370a20 20 0 0 0-20-20l-44 1c-6-25-19-73-33-115-18-49-48-97-58-113l-1-33h134l237 3a20 20 0 0 0 20-20v-61l436 3v60a20 20 0 0 0 20 20l449-1a20 20 0 0 0 20-20v-176h275a20 20 0 0 0 20-20l-1-169a20 20 0 0 0-20-20H2804v-21a20 20 0 0 0-20-20h-77V977h243a20 20 0 0 0 20-20l1-415h10a20 20 0 0 0 20-20V308a20 20 0 0 0-20-20h-76v-54a20 20 0 0 0-20-20z"
            />
            <path
              className="ac-g-cls-1" onClick={this.onLayerClick}
              d="M2163 2483a169 169 0 1 1 0-338 169 169 0 0 1 0 338z"
            />
            <path
              className="ac-g-cls-2 floor-bg-border" onClick={this.onLayerClick}
              d="M2163 2155a159 159 0 1 1-159 159 159 159 0 0 1 159-159m0-20a179 179 0 1 0 69 14 178 178 0 0 0-69-14z"
            />
          </g>
          <g id="Rooms">
            <path
              className="ac-g-cls-3"
              d="M559 1639h580v427H559zm746-182v272h201l64-64v-208h-265zm318 172s75-87 174-117l80 166s-95 36-117 60z"
            />
            <path
              className="ac-g-cls-3"
              d="M1516 1809l5-4 52 41 26-29-93-88 64-64v-78h47v38l143 113s-120 82-171 172l-30-10zm-202 266l112 34s-20 80-22 132l-80-8 2-17-20-2v-20l-18-1s0-17 26-118zm-125-193h28v48h-28zM923 970a263 263 0 0 0-4 40h61v-40zm76 0h116v76H999zm116 73h106v65h-106zm117-24h33v-13h23v101h-56v-88zm250-170h110v78h-110zm918-19v271h119V909h281V619h-32s7 76-69 129-172-16-172-16h-48v98zm243 204h44v67h-44zm-7 144h51v58h-51zm-122 355s41 14 69 32l-45 86s-54-31-63-32z"
            />
            <path
              className="ac-g-cls-3"
              d="M2758 1696s-78-80-175-131l-48 90s106 63 152 115z"
            />
            <path
              className="ac-g-cls-3"
              d="M2778 1718l-20-22-71 74 19 19zm25 417l93-27s31 105 30 197h-58v-11h-41a1573 1573 0 0 0-24-159z"
            />
            <path
              className="ac-g-cls-3"
              d="M2803 2498s33-126 24-204h41v11h58s0 130-29 218zm173-965h295v163h-295zm336-6h244v141h-244zm245 0h183v141h-183zm232 0h220v141h-220zm221 0h163v141h-163zm-942 201h44v87h-44zm51 0h66v87h-66zm912 16h61v74h-61zm-2631-15h106l12 12-27 33 24 33 8 17h-86v-17h-18v-19h-19v-59zm1333 176l51-34s56 74 74 130l-55 24s-36-69-70-120z"
            />
          </g>
          <g id="Empty">
            <path
              className="ac-g-cls-4"
              d="M1217 1729v250h131l9-25 187 67s19-74 45-111l-30-10-36-76h-86v-17h-18v-19h-19v-59zm0-133h88v133h-88zm-28 181h28v106h-28zm-666 334h87v41h-87zm36-44h30v44h-30zm270 22h45v63h-45zm262 0h90v76h-90zm90-112h36v135h-36zm681-489l60-18 12 34-57 18-15-34zm538-18l-10 33 60 19 12-34-62-18zm62 84l35 15-17 39-33-13 15-41z"
            />
            <path
              className="ac-g-cls-4"
              d="M1357 1954l-23 61 36 13s17-45 26-60zm90 41l19 6s-22 56-32 86l-19-5zm-64 62l-4 14 36 11 4-12-36-13zm-771-532h477v52H612zm2660 8h35v135h-35zm468-6h50v141h-50zm-732 201h60v87h-60zm-84 58h39v29h-39zm-1-58h85v13h-85zm262 0h85v13h-85zm87 29h43v60h-43zm-528 62l86-73s38 41 46 58l-92 67z"
            />
            <path className="ac-g-cls-4" d="M2810 1907l-26-36 92-67s19 26 28 42z" />
            <path className="ac-g-cls-4" d="M2858 1998s-30-65-48-91l94-61s44 61 63 106z" />
            <path
              className="ac-g-cls-4"
              d="M2888 2022l-12-32-18 8 12 31 18-7zm-9 33l18-7 17 54-18 6-17-53zm49-87l13 32 19-6 10 28 21-8s-13-39-24-62zm-5 94l16-5 11 36-14 4-13-35zm-875 140s-109 107 0 227l76-76s-35-35 0-74zm92 66l-33-74s-28 12-40 27l57 58s4-6 16-11zm0 95s-5-1-16-10l-57 58s28 24 43 27z"
            />
            <circle className="ac-g-cls-4" cx={2162} cy={2316} r={53} />
            <circle className="ac-g-cls-4" cx={2162} cy={2315} r={28} />
            <path
              className="ac-g-cls-4"
              d="M2465 2155v202l203 5v-168h-20l-1-18h-21v-21h-161z"
            />
            <path
              className="ac-g-cls-4"
              d="M2504 2231v225c17 18 51 34 51 34l304 87 16-60-288-79-4-207zm387-427v22l33 47v-69h-33zm-28-76h35v76h-22l-38-49 25-27zm927-6h42v97h-42z"
            />
            <path
              className="ac-g-cls-4"
              d="M3831 1768h61v51h-61zm110-37h88v88h-88zm195 36h23v51h-23zm60-36h43v87h-43zm-5-204h43v141h-43zm-18 0h17v124h-17zm-1272-50h75v153h-75zm-57 153h132v61h-132zm-58 0h58v61h-58zm58-134h57v134h-57zm-60-43h41v81h-41zm-75-41h75v123h-75zm-184 125v-98h145v132h-37s-29-18-41-24l-9 18z"
            />
            <path
              className="ac-g-cls-4"
              d="M2670 1554v17h-37l-41-24-9 18s70 40 109 73l18-21v-63z"
            />
            <path className="ac-g-cls-4" d="M2687 1412v27h-17v115h40v-142h-23z" />
            <path
              className="ac-g-cls-4"
              d="M2976 1453v24h-75v19h-57v134h-58v61h10l-20 24s-60-65-84-77l18-21-1-83h116v-81zm336 74h-6v164h26v-23h-20m-336-215h1557v45H2976z"
            />
            <path
              className="ac-g-cls-4"
              d="M2976 1537v-39h1558v125h-293v-93h-935v7h-330zm-454-167h165v69h-165zm303-848h117v424h-117zm-383 159l-2-213h56V360h55v-52h217v-74h117v74h96v40h-319v15h-39v126h-19v-22h-38v139h-18v-27h-42v102h-64z"
            />
            <path
              className="ac-g-cls-4"
              d="M2711 505s34 44 37 114h77V505zm-619 485h11v141h-11zm33 22h11v152h-11zm60 1h11v152h-11zm33-23h10v142h-10zm-233-63h18v18h-18zm0 76h18v18h-18zm0 78h18v18h-18zm0 77h18v18h-18zm321-229h18v18h-18zm0 76h18v18h-18zm0 78h18v18h-18zm0 77h18v18h-18z"
            />
            <circle className="ac-g-cls-4" cx={2159} cy={870} r={83} />
            <path
              className="ac-g-cls-5"
              d="M1727 1112v-59h153m-325-60h70s16 0 36-18c0 0 22-21 46-21h58m-160-314h-72v35h-38v29h-249v-30h-38v-34h-73S950 748 925 935h-85"
            />
            <path className="ac-g-cls-4" d="M1462 971h41v63h-41zm-149 0h44v48h-44z" />
            <path
              className="ac-g-cls-4"
              d="M1288 1020v87h267v-75h-93v-12h-174zm-69-1h13v89h-13zm-37 0h37v24h-37zm-67-49h35v14h-35zm-135 0h19v77h116v60l-183 48s-20-54-13-145h61zm-246 24H462V716h378v220H733l1 58z"
            />
            <path
              strokeLinejoin="round"
              fill="none"
              stroke="#6d6e71"
              strokeWidth={2}
              d="M1555 1032v-62"
            />
            <path className="ac-g-cls-5" d="M1879 772v108m1 228V946" />
            <path className="ac-g-cls-4" d="M610 2131h190m290 0H899" />
            <path
              className="ac-g-cls-5"
              d="M923 970H817v100h-62V936m0 55h14m48 0h-31m1733 110h38l2-144h140m-96 33v-33"
            />
          </g>
          <g id="Stairs-lifts-escalators">
            <ellipse className="ac-g-cls-7" cx={4177} cy={1799} rx={19} ry={18} />
            <path
              className="ac-g-cls-7"
              d="M4090 1767v51h46v-51h24v-23h-47v57h-1v-34h-22z"
            />
            <ellipse className="ac-g-cls-7" cx={1196} cy={1703} rx={19} ry={18} />
            <path
              className="ac-g-cls-7"
              d="M1292 1820s-16 27 0 62h46l62 37 30-54-77-45zm108 220l-6 20-11-4-5 15-36-11 5-15 18 6v-2l-19-7-6 19 85 25-5 20-107-29s14-51 20-62z"
            />
            <ellipse className="ac-g-cls-7" cx={1403} cy={1995} rx={19} ry={18} />
            <path
              className="ac-g-cls-7"
              d="M1518 1741l-27 33 22 38 8-7 52 41 26-29-81-76zm281-229s47-20 60-23l20 56-35 13 5 11-20 9z"
            />
            <ellipse className="ac-g-cls-7" cx={1920} cy={1530} rx={19} ry={18} />
            <path
              className="ac-g-cls-7"
              d="M1762 1387h117v68h-117zm341-395h22v172h-22zm93 0h22v172h-22zm-60 20h49v126h-49z"
            />
            <ellipse className="ac-g-cls-7" cx={1951} cy={701} rx={19} ry={18} />
            <ellipse className="ac-g-cls-7" cx={1985} cy={702} rx={19} ry={18} />
            <ellipse className="ac-g-cls-7" cx={2020} cy={701} rx={19} ry={18} />
            <path className="ac-g-cls-7" d="M1880 681h46v91h-46z" />
            <ellipse className="ac-g-cls-7" cx={2371} cy={700} rx={19} ry={18} />
            <ellipse className="ac-g-cls-7" cx={2336} cy={701} rx={19} ry={18} />
            <ellipse className="ac-g-cls-7" cx={2302} cy={700} rx={19} ry={18} />
            <path
              className="ac-g-cls-7"
              transform="rotate(-180 2419 726)"
              d="M2396 680h46v91h-46z"
            />
            <ellipse className="ac-g-cls-7" cx={2400} cy={1529} rx={19} ry={18} />
            <path
              className="ac-g-cls-7"
              d="M2462 1488l-24 66 20 8 4-8 35 14 25-55s-36-17-60-25zm106-498v25h-11v85h46v-86h-11v-24h-24zm-55 188h127v21h-127zm0 37h127v21h-127zm9 35h164v120h-164z"
            />
            <ellipse className="ac-g-cls-7" cx={2656} cy={1018} rx={19} ry={18} />
            <ellipse className="ac-g-cls-7" cx={2656} cy={982} rx={19} ry={18} />
            <ellipse className="ac-g-cls-7" cx={2916} cy={1994} rx={19} ry={18} />
            <path
              className="ac-g-cls-7"
              d="M2915 2043l8 19 16-5 11 36 59-16s-12-51-18-63z"
            />
            <ellipse className="ac-g-cls-7" cx={3248} cy={1797} rx={19} ry={18} />
            <ellipse className="ac-g-cls-7" cx={1529} cy={1004} rx={19} ry={18} />
            <ellipse className="ac-g-cls-7" cx={1134} cy={1001} rx={19} ry={18} />
            <ellipse className="ac-g-cls-7" cx={779} cy={1046} rx={19} ry={18} />
            <path
              className="ac-g-cls-7"
              d="M1188 967h72v47h-72zm168 5h72v47h-72zm-60-263h156v19h-156z"
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

export default AC_G;
