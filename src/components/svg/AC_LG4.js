import React, { Component } from 'react';
import './floor_styles/AC_LG4.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_LG4.json';
import Tag from '../Tag';

class AC_LG4 extends Component {
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
        <svg id="AC-LG4" viewBox="0 0 5700 2900" className="floor-svg" style={{
            WebkitTransform: `scale(${this.props.scale},${this.props.scale})`,
            Transform: `scale(${this.props.scale},${this.props.scale})`
          }}>
          <defs />
          <g id="AC-LG4-BG" className="floor-bg">
            <path onClick={this.onLayerClick}
              d="M123 2453a10 10 0 0 1-10-10v-258a10 10 0 0 1 10-10h417l1-567h-21a10 10 0 0 1-10-10v-54a10 10 0 0 1 10-10h130c13-6 26-9 38-9 22 0 41 11 55 31a111 111 0 0 1 12 22h195c18-42 44-51 62-51 15 0 27 6 32 9h134a10 10 0 0 1 10 10v39h72v-298h-172a10 10 0 0 1-10-10v-56a10 10 0 0 1 10-10h174v-98H588a10 10 0 0 1-10-10V991H474a10 10 0 0 1-10-10V738a10 10 0 0 1 10-10h320v-9a10 10 0 0 1 10-10h25v-90a10 10 0 0 1 10-10h252a10 10 0 0 1 10 6h8a502 502 0 0 1 223-70l30-32a10 10 0 0 1 7-4 10 10 0 0 1 7 3l33 33a467 467 0 0 1 163 41 495 495 0 0 1 118 76c52 45 81 87 90 102h89v-84a10 10 0 0 1 10-10h195a10 10 0 0 1 10 10v84h152v-79a10 10 0 0 1 10-10h196a10 10 0 0 1 10 10v83a10 10 0 0 1-10 10h-124v152a10 10 0 0 1-10 10h-11l-174 184v489a10 10 0 0 1-10 10c-183 9-317 91-396 158-87 73-130 145-130 145a10 10 0 0 1-14 3l-104-69-7 9a10 10 0 0 1-14 3l-2-2-76 159a10 10 0 0 1-9 6h-172v124a10 10 0 0 1-10 10h-75v86a10 10 0 0 1-10 10h-77v179a10 10 0 0 1-10 10z"
              fill="#e6e7e8"
            />
            <path className="floor-bg-border" onClick={this.onLayerClick}
              d="M1369 519l36 35a483 483 0 0 1 370 220h104v-94h195v94h172v-89h196v83h-134v162h-15l-180 190v493c-361 17-535 308-535 308l-112-75-12 17-12-7-81 169h-182v134h-85v96h-87v189H123v-258h427l1-588h-31v-54h133c13-6 25-9 35-9 45 0 60 53 60 53h208c16-41 38-51 56-51a57 57 0 0 1 30 9h136v49h92v-318h-182v-56h184v-118H588V981H474V738h330v-19h35V619h252v6h21c109-68 225-71 225-71l32-35m0-20a20 20 0 0 0-14 7l-28 29a488 488 0 0 0-66 10c-40 8-98 26-155 60a20 20 0 0 0-15-6H839a20 20 0 0 0-20 20v80h-15a20 20 0 0 0-20 19H474a20 20 0 0 0-20 20v243a20 20 0 0 0 20 20h94v102a20 20 0 0 0 20 20h664v78h-164a20 20 0 0 0-20 20v56a20 20 0 0 0 20 20h162v278h-52v-29a20 20 0 0 0-20-20h-131a77 77 0 0 0-35-9 66 66 0 0 0-41 14c-11 9-20 21-28 37H761a118 118 0 0 0-10-18 75 75 0 0 0-63-35c-13 0-26 3-40 9H520a20 20 0 0 0-20 20v54a20 20 0 0 0 20 20h11l-1 547H123a20 20 0 0 0-20 20v258a20 20 0 0 0 20 20h884a20 20 0 0 0 20-20v-169h67a20 20 0 0 0 20-20v-76h65a20 20 0 0 0 20-20v-113h162a20 20 0 0 0 18-12l72-150a20 20 0 0 0 19-8l1-1 96 64a20 20 0 0 0 28-7s11-18 33-44a717 717 0 0 1 96-99c79-66 210-146 390-154a20 20 0 0 0 19-20v-486l168-178h6a20 20 0 0 0 20-20V788h115a20 20 0 0 0 20-20v-83a20 20 0 0 0-20-20h-196a20 20 0 0 0-20 20v69h-132v-74a20 20 0 0 0-20-20h-195a20 20 0 0 0-20 20v74h-73c-12-18-42-58-89-100a505 505 0 0 0-120-77 477 477 0 0 0-164-42l-30-30a20 20 0 0 0-14-6z"
              fill="#6d6e71"
            />
          </g>
          <g id="Rooms">
            <path
              className="ac-lg4-cls-3"
              d="M649 1618v55h-36v14h-63v155h279v-209h-38v-15H649zm651-162v176h157v-21h172s36-26 40-26 0-129 0-129z"
            />
            <path
              className="ac-lg4-cls-3"
              d="M1496 1621v11h-20v18h37v-29h-17zm37-10v85l96-85h-96zm-77 174l77-89v-26h-77v115zm-241-153v191h214l27-38v-153h-241z"
            />
            <path
              className="ac-lg4-cls-3"
              d="M1361 1823h68s81-129 236-237l98 148s-105 70-185 187l-113-75-11 17-17-13-76 1zm392-308h35l10-2 32 71-50 24-27-53v-40z"
            />
            <path className="ac-lg4-cls-3" d="M1731 1591l30 50-42 27-32-49 44-28z" />
            <path
              className="ac-lg4-cls-3"
              d="M1830 1584l41 89s-64 29-108 61l-44-66 42-27-10-16zm63-3l26 73-48 19-32-70 54-22z"
            />
            <path
              className="ac-lg4-cls-3"
              d="M1947 1563l22 74-50 17-26-73 54-18zm127-635h39v38h-39zm39 0h39v38h-39zm39 0h38v38h-38zm141 0l-36 38h-67v-38h103zm-740 38h39v77h-39zm0 77h39v58h-39zm-324-28h53v87h-53zm-158-49h39v38h-39zm0 96h40v39h-40zm-38 0h38v39h-38zm-40 0h40v39h-40zm-37 0h37v39h-37z"
            />
            <path
              className="ac-lg4-cls-3"
              d="M912 1047h45v55h-45zm0-43h45v42h-45zm0-38h63v38h-63zm81 0h59v76h-59zm119 73h105v63h-105zM588 852h174v134H588zm-114 86h36v35h-36zm76 916h352v254H550zm457 0h129v81h-129zm0 81h129v84h-129zm0 84h129v89h-129zm449-369h56v20h-56zm-249 201v48h25v61h-53v-109h28zm38 0h39v108h-39z"
            />
          </g>
          <g id="Empty">
            <path className="ac-lg4-cls-4" d="M829 1618h128v190H829zm178-22h129v84h-129z" />
            <path
              className="ac-lg4-cls-4"
              d="M1007 1679h129v84h-129zm664-144h48v19l-50 31 2-50zm-389-566h26v14h-26zm0 14h26v32h-26zm26-14h44v27h-44zm0 27h44v19h-44zm151-17h47v49h-47z"
            />
            <path
              className="ac-lg4-cls-4"
              d="M1282 1101h268v-72h-91v-14h-177v86zM787 966h34v29h-34zm34 0h36v29h-36zm36 0h54v29h-54zm-26 45h81v90h-81zm-36 0h36v51h-36zm-285-73h60v43h-60zm1457-185h71v18h-71zm279-71h37v32h-37z"
            />
            <path className="ac-lg4-cls-4" d="M588 985v116h243v-43h-69v-73H588z" />
            <path
              strokeLinejoin="round"
              fill="none"
              stroke="#6d6e71"
              strokeWidth={2}
              d="M903 1854h54"
            />
            <path
              className="ac-lg4-cls-6"
              d="M903 2108h104m129-512h18v167m0 20v325h-147m746-593v-24m0-14v-23m10 0l13 20m22 39l-12-22m231-719v156h18m-110-156h13m29 0h-13m120 156h-10m44-159h109"
            />
            <path
              className="ac-lg4-cls-4"
              d="M1457 1611v39h19v-18h20v-11h17v-10h-56zm-279 21h38v50h-38z"
            />
            <path className="ac-lg4-cls-6" d="M1178 1769v-88" />
            <path className="ac-lg4-cls-4" d="M1207 1872h38v27h-38zm25 27h13v60h-13z" />
            <path
              className="ac-lg4-cls-4"
              d="M1179 1960v65h182l81-170-5-5h-153v110h-105zm-629 148v76H123v257h884v-188h87v-96h85v-49H550zm0-421v-91h-30v-54h133s68-41 95 44h208s20-81 86-42h136v52H994v22H829v15h-38v-15H649v55h-36v14z"
            />
            <path
              className="ac-lg4-cls-4"
              d="M1136 1596h17v168h-17zm0 258h17v254h-17zm18-3h26v257h-26zm815-214s81-24 144-26v-510h-841v120h-184v56l182 1v315h30v-137h306v-45h313v55zm-617-668h83v46h-83z"
            />
          </g>
          <g id="Stairs-lifts-escalators">
            <ellipse className="ac-lg4-cls-7" cx={778} cy={1043} rx={19} ry={18} />
            <ellipse className="ac-lg4-cls-7" cx={1131} cy={997} rx={19} ry={18} />
            <ellipse className="ac-lg4-cls-7" cx={1950} cy={700} rx={19} ry={18} />
            <ellipse className="ac-lg4-cls-7" cx={1984} cy={701} rx={19} ry={18} />
            <ellipse className="ac-lg4-cls-7" cx={2019} cy={700} rx={19} ry={18} />
            <ellipse className="ac-lg4-cls-7" cx={2371} cy={701} rx={19} ry={18} />
            <ellipse className="ac-lg4-cls-7" cx={1529} cy={1006} rx={19} ry={18} />
            <ellipse className="ac-lg4-cls-7" cx={1196} cy={1703} rx={19} ry={18} />
            <ellipse className="ac-lg4-cls-7" cx={1918} cy={1530} rx={19} ry={18} />
            <path
              className="ac-lg4-cls-7"
              d="M1019 1764h101v19h-101zm587-353h158v45h-158zm253 76l23 64-56 23-28-61 61-26zm20-807h46v91h-46zm517 3h46v84h-46zm-317 190h162v18h-162zm0 33h162v18h-162zm-756-202h93v24h-93zm-136 265h73v46h-73z"
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

export default AC_LG4;
