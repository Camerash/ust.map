import React, { Component } from 'react';
import './floor_styles/AC_LG5.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_LG5.json';
import Tag from '../Tag';

class AC_LG5 extends Component {
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
        <svg id="AC-LG5" viewBox="0 0 5700 2900" className="floor-svg" style={{
            WebkitTransform: `scale(${this.props.scale},${this.props.scale})`,
            Transform: `scale(${this.props.scale},${this.props.scale})`
          }}>
          <defs />
          <g id="AC-LG5-BG" className="floor-bg">
            <path onClick={this.onLayerClick}
              d="M124 2455a10 10 0 0 1-10-10v-258a10 10 0 0 1 10-10h417v-12h-22a10 10 0 0 1-10-10v-44a10 10 0 0 1 10-10h22l1-497h-21a10 10 0 0 1-10-10v-54a10 10 0 0 1 10-10h92a10 10 0 0 1 10 10l-1 37 455 2 1-37a10 10 0 0 1 10-10h91a10 10 0 0 1 10 10v39h72v-298h-172a10 10 0 0 1-10-10v-56a10 10 0 0 1 10-10h174v-97l-157 1-212 57a10 10 0 0 1-12-7l-11-49-658 4a10 10 0 0 1-10-10l-1-121a10 10 0 0 1 10-10h39V707a10 10 0 0 1 10-10h505v-1a10 10 0 0 1 10-10h45l-1-70a10 10 0 0 1 10-11h262a10 10 0 0 1 10 6h8a502 502 0 0 1 223-70l30-32a10 10 0 0 1 7-4 10 10 0 0 1 7 3l33 33a467 467 0 0 1 163 41 495 495 0 0 1 118 76c52 44 81 87 90 101h89v-78a10 10 0 0 1 10-10h157a10 10 0 0 1 10 10v22h75V513a10 10 0 0 1 10-10h52a10 10 0 0 1 10 10v190h81v-22a10 10 0 0 1 10-10h158a10 10 0 0 1 10 10v81a10 10 0 0 1-10 10h-127v154a10 10 0 0 1-10 10l-345 1v47a10 10 0 0 1-10 10h-30v48a10 10 0 0 1-10 10h-50v50a10 10 0 0 1-10 10h-76v285h12a10 10 0 0 1 10 10v51a10 10 0 0 1-8 10l15 31 115-39a10 10 0 0 1 13 7l32 113a10 10 0 0 1-7 12 711 711 0 0 0-311 177 10 10 0 0 1-4 2l-264 122-345 228a10 10 0 0 1-5 1H718v147a10 10 0 0 1-10 10h-87v6h23a10 10 0 0 1 10 10v40a10 10 0 0 1-10 10l-41 1 1 33a10 10 0 0 1-6 9l-134 66a10 10 0 0 1-4 1z"
              fill="#e6e7e8"
            />
          <path className="floor-bg-border" onClick={this.onLayerClick}
              d="M2184 513v200h101v-32h158v81h-137v164l-355 1v57h-40v58h-60v60h-86v305h22v51h-13l25 53 123-42 32 114a713 713 0 0 0-316 179l-264 122-346 228H708v157h-97v26h33v40l-51 1 1 43-134 66H124v-258h427v-32h-32v-44h32l1-517h-31v-54h92l-1 47 475 2 1-47h91v49h92v-318h-182v-56h184v-118l-168 2-213 57-12-56-667 4-1-121 49-1V707h515v-11h55l-1-81h262v6h21c109-68 225-71 225-71l32-35 36 35a483 483 0 0 1 370 220h104v-89h157v32h95V513h52m0-20h-52a20 20 0 0 0-20 20v180h-55v-12a20 20 0 0 0-20-20h-157a20 20 0 0 0-20 20v69h-73c-12-18-42-58-89-100a505 505 0 0 0-120-77 477 477 0 0 0-164-42l-30-30a20 20 0 0 0-14-6 20 20 0 0 0-14 7l-28 29a488 488 0 0 0-66 10c-40 8-98 26-155 60a20 20 0 0 0-15-6H830a20 20 0 0 0-20 21l1 60h-35a20 20 0 0 0-18 11H261a20 20 0 0 0-20 20v258h-29a20 20 0 0 0-20 20l1 121a20 20 0 0 0 20 20l650-4 9 41a20 20 0 0 0 25 15l210-57 146-1v77h-164a20 20 0 0 0-20 20v56a20 20 0 0 0 20 20h162v278h-52v-29a20 20 0 0 0-20-20h-91a20 20 0 0 0-20 19l-1 28-435-2 1-26a20 20 0 0 0-20-21h-92a20 20 0 0 0-20 20v54a20 20 0 0 0 20 20h11l-1 477h-12a20 20 0 0 0-20 20v44a20 20 0 0 0 4 12H124a20 20 0 0 0-20 20v258a20 20 0 0 0 20 20h336a20 20 0 0 0 9-2l133-66a20 20 0 0 0 12-19l-1-22 31-1a20 20 0 0 0 20-20v-40a20 20 0 0 0-1-6h45a20 20 0 0 0 20-20v-137h300a20 20 0 0 0 11-3l344-227 264-122a20 20 0 0 0 6-4 701 701 0 0 1 306-174 20 20 0 0 0 14-25l-32-113a20 20 0 0 0-25-14l-107 37-7-16a20 20 0 0 0 5-13v-51a20 20 0 0 0-20-20h-2v-265h66a20 20 0 0 0 20-20v-40h40a20 20 0 0 0 20-20v-38h20a20 20 0 0 0 20-20v-37l335-1a20 20 0 0 0 20-20V782h117a20 20 0 0 0 20-20v-81a20 20 0 0 0-20-20h-158a20 20 0 0 0-20 20v12h-61V513a20 20 0 0 0-20-20z"
              fill="#6d6e71"
            />
          </g>
          <g id="Rooms">
            <path
              className="ac-lg5-cls-3"
              d="M1089 634v118h-81v-48s31-35 81-70zM1370 515l-34 34a141 141 0 0 1-14 3v180h98V552a106 106 0 0 0-14-2zM1302 1458v291h155s75-90 128-129v-162zM1851 1042V867h99v117h-39v58h-60zM1538 792h98v96h-98zM1557 888h116v136h-116zM1459 792h79v38h-79zM1459 830h79v58h-79zM1459 888h98v57h-98zM1459 965h57v12h28v-12h13v-20h-98v20zM1361 926h78v39h-78z"
            />
            <path
              className="ac-lg5-cls-3"
              d="M1303 869v95h58v-38h78v-57h-136zM1303 792h137v77h-137zM1145 792h157v77h-157zM1145 926h99v38h59v-95h-158v57z"
            />
            <path className="ac-lg5-cls-3" d="M1185 926h59v39h-59z" />
            <path
              className="ac-lg5-cls-3"
              d="M1176 964v49h60v-24h-16v-25h-44zM1108 977h36v36h-36z"
            />
            <path className="ac-lg5-cls-3" d="M1070 953v11h16v20h-18v43h40v-62h9v-12h-47z" />
            <path
              className="ac-lg5-cls-3"
              d="M1051 964h19v-20h57v-56h-76v76zM989 888v105h39v-29h23v-76h-62zM989 993h39v34h-39zM1068 1061v50l37-10h22v-40h-59zM969 1061v76l99-26v-50h-99zM969 1041v96l-77 21s-16-59-15-117zM969 964v77h-92s1-47 4-77zM1028 792h99v96h-99zM941 792s-24 40-36 77h84v19h39v-96z"
            />
            <path className="ac-lg5-cls-3" d="M886 934s7-34 19-65h84v65z" />
            <path
              className="ac-lg5-cls-3"
              d="M941 792H753v154h131s15-90 57-154zM714 745H490v143h28v-41h196V745z"
            />
            <path
              className="ac-lg5-cls-3"
              d="M636 847h78v41h-78zM636 888h78v59h-78zM518 847h89v41h-89zM490 888h127v49H490zM636 964h39v58h-39zM675 964h81v58h-81zM636 1023h120v38H636zM851 658v94h115a201 201 0 0 1 22-28h-20v-66zM1008 752h-42a629 629 0 0 1 42-48z"
            />
          </g>
          <g id="Empty">
            <path
              className="ac-lg5-cls-4"
              d="M1476 1102h289v286h-289zM1271 1591h-92v-49h-91v47H612v-49h-91v54h31v517h-33v44h32v33H124v257h336l134-66v-43h50v-41h-33v-26h97v-157h320l181-119v-315h62v-87z"
            />
            <path
              className="ac-lg5-cls-4"
              d="M1674 1729l-36 33-264 122-165 109v-315h62v89h201s56-76 130-132zM1633 1458v151s96-68 166-98l-25-53z"
            />
            <path
              className="ac-lg5-cls-4"
              d="M1617 1622s54-50 182-111l31 73-31 14 9 16s-86 46-129 85zM1847 1621l-8-18s56-23 110-39l5 19s-62 15-107 38z"
            />
            <path
              className="ac-lg5-cls-4"
              d="M1822 1566l37-14 7 17-36 15-8-18zM1859 1491l12 34 62-18-11-38-63 22zM1092 615v6h21s84-63 209-69v180h-233v-98s-52 33-100 90h-21v-66H851v94h-21v-7H490v297H267v47h557v13l-611 4V985h48V707h515v-11h55v-81z"
            />
            <path className="ac-lg5-cls-4" d="M824 1010v92h56s-8-52-2-92z" />
            <path className="ac-lg5-cls-5" d="M490 976h116v27M606 1042v19h30" />
            <path className="ac-lg5-cls-4" d="M778 964h72v29h-72z" />
            <path
              className="ac-lg5-cls-5"
              d="M911 792v-9M939 792v-9M911 762v-10M939 762v-10M938 964v-9M966 964v-9M938 944v-10M966 944v-10"
            />
            <path
              className="ac-lg5-cls-4"
              d="M1420 552v180h238v-53s32 24 55 53h36s-106-161-329-180zM1068 964h18v20h-18zM1108 965h36v12h-36zM1108 1013h36v15h-36zM1176 1013h60v14h-60z"
            />
            <path
              className="ac-lg5-cls-4"
              d="M1220 964h40v63h-24v-38h-16v-25zM1352 964v63h24v-37h63v-26h-87z"
            />
            <path
              className="ac-lg5-cls-4"
              d="M1376 1012h63v16h-63zM1459 965h45v63h-45zM1516 965h-12v62h53v-62h-13v12h-28v-12zM1376 990h63v21h-63zM1260 964h93v30h-93zM1260 995h93v32h-93z"
            />
            <path
              className="ac-lg5-cls-5"
              d="M1028 1027v16M1127 1027v16M1144 1013h9M1167 1013h9M1144 965h9M1167 965h9M1557 1027v27M1557 1075v27"
            />
            <path className="ac-lg5-cls-4" d="M1636 830h80v58h-80z" />
            <path
              className="ac-lg5-cls-5"
              d="M1915 797v-27M1915 840v27M1972 770h132M2207 770h99"
            />
            <path
              className="ac-lg5-cls-4"
              d="M1966 752h72v17h-72zM2285 681h66v32h-66zM2382 681h14v60h-14zM1924 682h17v60h-17z"
            />
            <path className="ac-lg5-cls-5" d="M1658 732h22" />
            <path
              className="ac-lg5-cls-4"
              d="M267 1042h223v47H267zM490 937h88v39h-88zM788 1010h37v51h-37zM756 1030h32v31h-32zM1070 944h57v10h-57zM1046 990h22v37h-22z"
            />
            <path
              className="ac-lg5-cls-5"
              d="M1440 1025h5M1440 977h6M1454 1025h5M1453 977h6M1636 792v-19M1636 752v-20"
            />
          </g>
          <g id="Stairs-lifts-escalators">
            <ellipse className="ac-lg5-cls-6" cx={1957} cy={699} rx={19} ry={18} />
            <ellipse className="ac-lg5-cls-6" cx={1988} cy={699} rx={19} ry={18} />
            <ellipse className="ac-lg5-cls-6" cx={1921} cy={1530} rx={19} ry={18} />
            <ellipse className="ac-lg5-cls-6" cx={2019} cy={699} rx={19} ry={18} />
            <ellipse className="ac-lg5-cls-6" cx={2367} cy={696} rx={19} ry={18} />
            <path className="ac-lg5-cls-6" d="M2396 681h47v82h-47zM1880 681h45v80h-45z" />
            <path className="ac-lg5-cls-4" d="M1880 761h59v9h-59z" />
            <path
              className="ac-lg5-cls-6"
              d="M2081 857h150v19h-150zM2081 888h150v19h-150zM1089 1217h184v56h-184zM1476 701h181v22h-181z"
            />
            <path
              className="ac-lg5-cls-6"
              d="M1476 680h181v22h-181zM1606 1407h181v51h-181zM1799 1511l60-20 12 34-21 7 9 20-37 14z"
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

export default AC_LG5;
