import React, { Component } from 'react';
import './floor_styles/AC_LG7.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_LG7.json';
import Tag from '../Tag';

class AC_LG7 extends Component {
  constructor(props) {
   super(props);
   this.state = {isInFocus: false};
   this.onLayerClick = this.onLayerClick.bind(this);
  }

  onLayerClick() {
    this.props.onClick(this.props.id);
    this.setState({isInFocus: true}) 
  }

  render() {
    let tagLayer = null;
    var infoArr = [];
    Object.keys(infoJson).forEach(function(key) {
      infoArr.push(infoJson[key]);
    });
    let dummyLayer = infoArr.map(item => <Tag id={item.id} key={item.id} width="5700" height="2900" data={item} />)

    if(this.state.isInFocus) {
      tagLayer = dummyLayer;
    } else {
      tagLayer = null;
    }

    return (
      <div>
        <svg id="AC-LG7" viewBox="0 0 5700 2900" className="floor-svg" style={{
            WebkitTransform: `scale(${this.props.scale},${this.props.scale})`,
            Transform: `scale(${this.props.scale},${this.props.scale})`
          }}>
           <defs />
           <g id="AC-LG7-BG" className="floor-bg">
             <path onClick={this.onLayerClick}
               d="M1098 1759a10 10 0 0 1-10-10v-60H575a10 10 0 0 1-10-10v-84a10 10 0 0 1 10-10l37-1 646 4 2-471-154 1-212 57a10 10 0 0 1-12-7l-11-49-658 4a10 10 0 0 1-10-10l-1-191a10 10 0 0 1 10-10h139V704a10 10 0 0 1 10-10h177l55 3c92 0 149-22 181-40 35-20 48-40 48-40a10 10 0 0 1 8-5h261a10 10 0 0 1 7 3 440 440 0 0 1 244-77l21-22a10 10 0 0 1 7-4 10 10 0 0 1 7 3l24 23c56 4 110 16 160 34a469 469 0 0 1 111 60c47 35 72 68 81 79l42 1v-89a10 10 0 0 1 10-10h650a10 10 0 0 1 10 10l-1 153a10 10 0 0 1-10 9h-151v155a10 10 0 0 1-3 8l-206 203v289a10 10 0 0 1-10 10c-50 2-121 19-147 26l30 104a10 10 0 0 1-8 12c-53 13-104 37-104 38a10 10 0 0 1-14-5l-47-99a822 822 0 0 0-302 229 10 10 0 0 1-8 4z"
               fill="#e6e7e8"
             />
             <path className="floor-bg-border"
               d="M1370 522l26 26c251 15 352 173 352 173l57 1v-99h650l-1 152h-161v165l-209 207v293c-64 3-159 28-159 28l32 114c-55 13-107 39-107 39l-51-108s-181 70-315 236h-386v-70H575v-84l37-1 656 4 2-492-165 2-213 57-12-56-667 4-1-191 149-1V704h177l55 3c184 0 237-85 237-85h261l1 10c110-83 246-85 254-85h1l23-25m0-20a20 20 0 0 0-14 7l-18 19a509 509 0 0 0-169 37 420 420 0 0 0-72 38 20 20 0 0 0-6-1H830a19 19 0 0 0-16 10c-1 1-14 19-46 37-31 17-86 38-175 38l-54-2-1-1H361a20 20 0 0 0-20 20v198H212a20 20 0 0 0-20 20l1 191a20 20 0 0 0 20 20l650-4 9 41a20 20 0 0 0 25 15l210-57 142-1-1 451-636-4-37 1a20 20 0 0 0-20 20v84a20 20 0 0 0 20 20h503v50a20 20 0 0 0 20 20h386a20 20 0 0 0 16-8c67-83 146-141 201-175a810 810 0 0 1 88-47l43 90a20 20 0 0 0 27 9s50-24 103-36a20 20 0 0 0 14-25l-26-94c31-8 91-21 135-24a20 20 0 0 0 19-20v-284l203-200a20 20 0 0 0 6-15V795h141a20 20 0 0 0 20-19l1-153a20 20 0 0 0-20-20h-650a20 20 0 0 0-20 20v79l-27-1c-11-14-37-45-80-77a479 479 0 0 0-114-61c-49-19-103-30-159-34l-21-21a20 20 0 0 0-14-6z"
               fill="#6d6e71"
             />
           </g>
           <g id="Empty">
             <path
               className="ac-lg7-cls-3"
               d="M684 745h133m22 0h16v-85h207s6-6 30-28m32-22l12 21s92-53 186-59v30h20m24 0h10m26 0h17v-30s173 3 305 159l19-16"
             />
             <path className="ac-lg7-cls-4" d="M1805 722v50h-21s-16-24-36-51zm0 110v-23" />
             <path className="ac-lg7-cls-3" d="M1805 793v-21h26" />
             <path className="ac-lg7-cls-4" d="M1855 772h91" />
             <path className="ac-lg7-cls-3" d="M1880 741v-61h162v152" />
             <path className="ac-lg7-cls-4" d="M1880 772v-15m59 15v-15" />
             <path
               d="M859 886l39 10m24 6s45 8 91 8m20 0s52 1 95-8m20-3l97-19m19-5l92-15m82 0l50-2m21-2s60 0 100 4m21 0l65 11"
               strokeWidth={6}
               stroke="#6d6e71"
               strokeMiterlimit={10}
               fill="none"
             />
             <path className="ac-lg7-cls-3" d="M1322 602v149" />
             <path
               className="ac-lg7-cls-4"
               d="M1297 968v23h-27v607H575v81h523v70h386s126-160 315-236v-102h-33V946h-38v22h-150v-19h-142v19zm528 599l57-22 21 54-53 22-25-54z"
             />
             <path
               className="ac-lg7-cls-4"
               d="M1945 1541l-58 18 16 40 54-17-12-41zm-54-62l12 37 33-9-11-39a312 312 0 0 0-34 11zm194-332l-164 156v151l4 14s74-24 159-28zm-93-315h50v114h-50z"
             />
             <path className="ac-lg7-cls-3" d="M2129 623v293s-3 30-26 30h-61" />
             <path className="ac-lg7-cls-3" d="M2207 623v287s0 48-30 76-165 165-165 165" />
             <path
               className="ac-lg7-cls-3"
               d="M2166 793v118s1 33-26 58c-34 35-158 155-158 155m311-349v-29m0-21v-44h162"
             />
             <path
               className="ac-lg7-cls-4"
               d="M2293 753h69v22h-69zm69 11h45v11h-45zm-69-83h69v34h-69zm100 34h15v24h-15zm-423 38h71v19h-71zm-42-73h11v60h-11zm-782 389V953l-37 6v87h-19v-45H913v-36H760v73h-20v64h-53v-57h-14v57h-47v-82h111v-55H566v-29h-70v50H377v125h503l12 54 217-57h42v-39h-5zm26-121v21h6v45h35v93h14v-93h23v-45h21v-38l-99 17z"
             />
             <path className="ac-lg7-cls-3" d="M496 936v-45m0-21v-66m0-24v-35h12m22 0h131" />
             <path className="ac-lg7-cls-4" d="M1362 919l74-10v59h-74v-49z" />
           </g>
           <g id="Rooms">
             <path
               className="ac-lg7-cls-6"
               d="M687 1045h53v57h-53zM552 936l6-25s79-13 168 0l7 24h-20v30H566v-29zm1206 10v-37h47v-77h165v-60h72v60h-50v114h-68v155h-158V946h-8zm-463-17v39h67v-49l-67 10zm27-271l39 8-7 41-32-4v-45z"
             />
             <path
               className="ac-lg7-cls-6"
               d="M1322 747h28l8-40-36-4v44zm-176 248h32v19h35v93h-62v-38h-5v-74zm104 0h20v111h-43v-92h23v-19zm-624 25h47v83h-47z"
             />
           </g>
           <g id="Stairs-lifts-escalators">
             <path
               className="ac-lg7-cls-7"
               d="M1475 676v6h-16v39h16v6h64v-51h-64zM274 1044h102v47H274z"
             />
             <ellipse className="ac-lg7-cls-7" cx={1959} cy={701} rx={19} ry={18} />
             <ellipse className="ac-lg7-cls-7" cx={1990} cy={701} rx={19} ry={18} />
             <ellipse className="ac-lg7-cls-7" cx={2021} cy={701} rx={19} ry={18} />
             <ellipse className="ac-lg7-cls-7" cx={2380} cy={698} rx={19} ry={18} />
             <path className="ac-lg7-cls-7" d="M1880 680h48v50h-48zm527 1h48v94h-48z" />
           </g>
        </svg>
        <div className="floor-svg" style={{
            opacity: `${this.props.selected ? 1 : 0}`,
            WebkitTransform: `scale(${this.props.scale},${this.props.scale})`,
            Transform: `scale(${this.props.scale},${this.props.scale})`
          }}>
          {tagLayer}
        </div>
      </div>
    );
  }
}

export default AC_LG7;
