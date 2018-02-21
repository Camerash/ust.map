import React, { Component } from 'react';
import './floor_styles/AC_7.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_7.json';
import Tag from '../Tag';

class AC_7 extends Component {
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
        <svg id="AC-7" viewBox="0 0 5700 2900" className="floor-svg" style={{
            WebkitTransform: `scale(${this.props.scale},${this.props.scale})`,
            Transform: `scale(${this.props.scale},${this.props.scale})`
          }}>
          <defs />
          <g id="AC-7-BG" className="floor-bg">
            <path onClick={this.onLayerClick}
              d="M4108 2658a10 10 0 0 1-10-10v-526a10 10 0 0 1 10-10l74-1v-285h-346v283h76a10 10 0 0 1 10 10v366a10 10 0 0 1-10 10h-75v153a10 10 0 0 1-10 10h-558a10 10 0 0 1-10-10v-82h-74a10 10 0 0 1-10-10v-436a10 10 0 0 1 10-10h74v-284h-339l-9 6 48 89c35 72 59 136 70 189h52a10 10 0 0 1 10 10v370a10 10 0 0 1-10 10h-43l-16 71a10 10 0 0 1-13 7l-172-50a10 10 0 0 1-7-12c0-2 35-120 20-273a683 683 0 0 0-287-494 703 703 0 0 0-401-130 700 700 0 0 0-346 95 10 10 0 0 1-1 0c-1 1-70 35-147 121a843 843 0 0 0-195 439 10 10 0 0 1-10 8l-175-12a10 10 0 0 1-9-10c0-1 0-32 9-83a967 967 0 0 1 56-199 904 904 0 0 1 422-463l-8-16a10 10 0 0 1-1-4V951h-7a10 10 0 0 1-10-10V761a10 10 0 0 1 10-10l123-1v-84a10 10 0 0 1 10-10h158a10 10 0 0 1 8 3c19-8 61-24 115-24a294 294 0 0 1 117 25 10 10 0 0 1 7-3h157a10 10 0 0 1 10 10v83l3034 1a10 10 0 0 1 10 10v331a10 10 0 0 1-10 10h-152v195h145a10 10 0 0 1 10 10v422a10 10 0 0 1-10 10h-267v78a10 10 0 0 1-10 10l-445-2v284h79a10 10 0 0 1 10 10v374a10 10 0 0 1-10 10h-79v145a10 10 0 0 1-10 10z"
              fill="#e4deda"
            />
            <path className="floor-bg-border" onClick={this.onLayerClick}
              d="M2164 645c73 0 124 29 124 29v-7h157v93l3044 1v331h-162v215h155v422h-277v88l-455-2v304h89v374h-89v155h-642v-526l84-1v-305h-366v303h86v366h-85v163h-558v-92h-84v-436h84v-304h-352l-20 13s99 161 124 291h60v370h-51l-18 79-173-50s146-475-271-778a711 711 0 0 0-406-132c-208 0-352 96-352 96s-281 138-347 567l-174-12s10-496 490-740l-12-25V941h-17V761l133-1v-94h158v8s51-29 123-29m0-20a301 301 0 0 0-114 23 20 20 0 0 0-9-2h-158a20 20 0 0 0-20 20v74l-113 1a20 20 0 0 0-20 20v180a20 20 0 0 0 17 20v534a20 20 0 0 0 2 9l4 7a909 909 0 0 0-418 463 977 977 0 0 0-57 201c-9 52-9 83-9 85a20 20 0 0 0 18 20l175 12h1a20 20 0 0 0 20-17 833 833 0 0 1 192-432c39-45 76-75 100-92 27-19 44-28 44-28a19 19 0 0 0 2-1c1 0 36-24 96-47 54-21 141-46 245-46 137 0 270 43 395 128a665 665 0 0 1 283 487 801 801 0 0 1-4 191c-7 48-16 77-16 78a20 20 0 0 0 14 25l172 50a20 20 0 0 0 25-15l15-63h35a20 20 0 0 0 20-20v-370a20 20 0 0 0-20-20h-44c-12-52-35-114-69-183-17-35-33-64-43-81h324v264h-64a20 20 0 0 0-20 20v436a20 20 0 0 0 20 20h64v72a20 20 0 0 0 20 20h558a20 20 0 0 0 20-20v-143h65a20 20 0 0 0 20-20v-366a20 20 0 0 0-20-20h-66v-263h326v265l-64 1a20 20 0 0 0-20 20v526a20 20 0 0 0 20 20h642a20 20 0 0 0 20-20v-135h69a20 20 0 0 0 20-20v-374a20 20 0 0 0-20-20h-69v-264l435 2a20 20 0 0 0 20-20v-68h257a20 20 0 0 0 20-20v-422a20 20 0 0 0-20-20h-135v-174h142a20 20 0 0 0 20-20V762a20 20 0 0 0-20-20l-3024-2v-73a20 20 0 0 0-20-20h-157a20 20 0 0 0-8 2 307 307 0 0 0-116-24z"
              fill="#6d6e71"
            />
          </g>
          <g id="Rooms">
            <path
              className="ac-7-cls-3"
              d="M4674 1726v106h32v-19h47v-87h-79zm342 2v87h58v-74h-35v-13h-23zM1884 758h59v59h-59zm405 0h94v81h-94z"
            />
            <path className="ac-7-cls-3" d="M2382 758h64v81h-64z" />
            <path
              className="ac-7-cls-3"
              d="M2289 838h157v100h-157zm-250-40h32v43h-32zm0 43h32v43h-32zm-96-43h21v140h-80V817h59v-19zm21 0h75v140h-75zm-34-134h51v59h-51zm52 0h60v59h-60zm144 80l-55 55v86l54 53h79l54-54v-86l-54-53-78-1z"
            />
            <path
              className="ac-7-cls-3"
              d="M2042 672s118-65 247 0v126h-31l-54-53h-78l-55 54-29-1zm956 761h80v255h-80zm80 0h77v118h-77zm77 0h77v118h-77z"
            />
            <path
              className="ac-7-cls-3"
              d="M3231 1433h77v118h-77zm-153 157h77v97h-77zm77 0h77v97h-77z"
            />
            <path
              className="ac-7-cls-3"
              d="M3231 1590h58v97h-58zm77-19h78v117h-78zm0-138h78v138h-78zm78 138h78v117h-78zm0-138h78v138h-78z"
            />
            <path
              className="ac-7-cls-3"
              d="M3463 1433h96v118h-96zm96 0h96v118h-96zm-96 157h76v97h-76zm76 0h76v97h-76zm76 0h40v40h-40zm0 40h40v58h-40zm77-197h59v118h-59zm59 0h76v118h-76zm-59 118h134v79h-134zm0 79h58v58h-58zm58 0h77v58h-77zm77-197h40v60h-40zm0 60h40v77h-40zm0 77h40v60h-40zm0 60h40v58h-40zm78-197h115v119h-115zm115 0h115v119h-115zm115 0h115v119h-115zm115 0h117v119h-117zm-345 157h78v97h-78z"
            />
            <path
              className="ac-7-cls-3"
              d="M3982 1590h76v97h-76zm76 0h77v97h-77zm77 0h78v97h-78zm307-157h73v119h-73zm74 0h38v119h-38zm38 0h38v119h-38zm38 0h38v119h-38zm38 0h38v119h-38zm38 0h45v119h-45z"
            />
            <path
              className="ac-7-cls-3"
              d="M4712 1433h39v119h-39zm39 0h33v119h-33zm-514 183h43v71h-43z"
            />
            <path
              className="ac-7-cls-3"
              d="M4279 1616h43v71h-43zm19-37h24v37h-24zm24 0h39v108h-39zm39 0h38v108h-38zm38 74h27v34h-27z"
            />
            <path
              className="ac-7-cls-3"
              d="M4399 1579h155v147h-155v-39h28v-34h-28v-74zm155 0h38v108h-38zm0 108h38v24h-38zm38 0h76v39h-76zm0-108h38v108h-38zm38 0h38v108h-38zm38 74h45v73h-45zm0-74h45v73h-45z"
            />
            <path
              className="ac-7-cls-3"
              d="M4712 1579h39v108h-39zm39 0h33v64h-33zm0 64h33v44h-33zm33-210h31v13h147v241h-178v-254zm178 0h135v99h-135z"
            />
            <path
              className="ac-7-cls-3"
              d="M4962 1531h135v57h-135zm0 57h135v100h-135zm153-155h115v118h-115zm0 118h115v137h-115zm115-118h118v118h-118zm0 118h118v137h-118zm135-118h118v118h-118zm0 118h118v137h-118zm-2245 175h66v88h-66zm149 1h83v112h-83zm112 0h64v112h-64zm-67 112h108v197h-108zm38-112v112h29v-112m100 299v270h189v127l107 92v-220h50v41h86v-46h-66v-54h-59v-107h-8v-198h-160v95h-139z"
            />
            <path
              className="ac-7-cls-3"
              d="M3862 2236v41h26v13h25v-54h-51zm25-24h25v24h-25zm135-485h86v88h-86zm318 262v168h-37v130h270v-298h-233z"
            />
          </g>
          <g id="Empty">
            <path className="ac-7-cls-4" d="M5156 1727h50v31h-50zm-2147-1h110v88h-110z" />
            <path
              className="ac-7-cls-4"
              d="M1884 760h-133v179h17v554l11 25s-451 203-490 740l175 13s66-682 752-660c372 38 526 304 526 304s192 268 98 602l172 50 19-79h51v-369h-61s-28-148-123-292l20-13h6v-88h-21v-292h21v-26h2559v-103h-156v-214h163V760H2446v178h-562z"
            />
            <path
              className="ac-7-cls-4"
              d="M3269 1839v279h-84v436h84v92h559v-163h85v-147h-86v-41h-50v220l-107-92v-127h-189v-270h139v-95h160v198h8v37h39v50h13l-1-97h-12v-392h-382v112h-24v197h-107v-197h-45zm923-112v392h148v-130h233v298h-270v-130h-111v55h-84v434h643v-155h89v-279h-89v-399h-45v19h-32v-106h-82v-15h-38v15l-362 1zm1199-40h92v40h-92z"
            />
            <path
              className="ac-7-cls-4"
              d="M4751 2117h89v49h-89zm-924-354h40v51h-40zm-878-37h61v13h-61zM1972 723h70v35h-70zm317 16h68v19h-68zm-250 146v53h86l-54-53h-32zm250 53h-85l54-54v-86h31v140zm2077 495h36v119h-36zm36 0h40v119h-40zm-489 294h109v88h-109zm923 1h108v87h-108zm108 0h72v87h-72zm95 0h89v12h-89zm-2115 55h39v32h-39zm2232 13h50v18h-50z"
            />
          </g>
          <g id="Stairs-lifts-escalators">
            <ellipse className="ac-7-cls-5" cx={3250} cy={1796} rx={19} ry={18} />
            <ellipse className="ac-7-cls-5" cx={2309} cy={682} rx={19} ry={18} />
            <ellipse className="ac-7-cls-5" cx={2343} cy={682} rx={19} ry={18} />
            <ellipse className="ac-7-cls-5" cx={2378} cy={682} rx={19} ry={18} />
            <ellipse className="ac-7-cls-5" cx={4174} cy={1797} rx={19} ry={18} />
            <ellipse className="ac-7-cls-5" cx={3887} cy={2140} rx={19} ry={18} />
            <ellipse className="ac-7-cls-5" cx={4135} cy={2140} rx={19} ry={18} />
            <ellipse className="ac-7-cls-5" cx={5188} cy={1778} rx={19} ry={18} />
            <path
              className="ac-7-cls-5"
              d="M2964 1740h46v75h-46zm221-1h46v76h-46zm682 2h46v73h-46zm241 0h47v73h-47zm683 0h45v74h-45zm283 0h46v74h-46zm-323 425h89v46h-89zm-643-1h73v47h-73zm-239 0h44v47h-44zM2400 665h46v83h-46zm-516-1h47v84h-47z"
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

export default AC_7;
