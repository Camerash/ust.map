import React, { Component } from 'react';
import './floor_styles/AC_LG1.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_LG1.json';
import Tag from '../Tag';

class AC_LG1 extends Component {
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
        <svg id="AC-LG1" viewBox="0 0 5700 2900">
          <defs />
          <g id="AC-LG1-BG" className="floor-bg">
            <path
              d="M1263 2321a10 10 0 0 1-10-10v-44l-663-2a10 10 0 0 1-10-10l-1-87h-54a10 10 0 0 1-10-10v-44a10 10 0 0 1 10-10h24l1-498h-26a10 10 0 0 1-10-10v-53a10 10 0 0 1 10-10h93a10 10 0 0 1 10 10v46h453v-44a10 10 0 0 1 10-10h91a10 10 0 0 1 10 10v42h100l-1-129a10 10 0 0 1 10-10h451l2-338-1038-2a10 10 0 0 1-10-10V995H478a10 10 0 0 1-10-10l-1-276a10 10 0 0 1 10-10h353v-79a10 10 0 0 1 10-10h254a10 10 0 0 1 10 10v30a474 474 0 0 1 209-82l50-50a10 10 0 0 1 14 0l50 50c54 10 104 26 149 48a485 485 0 0 1 102 66c42 35 64 67 72 79h116v-82a10 10 0 0 1 10-10h158a10 10 0 0 1 10 10v23h28a10 10 0 0 1 10 10v50l148 1 1-50a10 10 0 0 1 10-10h29v-23a10 10 0 0 1 10-10h146V231a10 10 0 0 1 10-10h334a10 10 0 0 1 10 10v646a10 10 0 0 1-10 10l-384-3v199a10 10 0 0 1-10 10h-122l2 310v1l-15 214a10 10 0 0 1-12 9s-27-5-70-5c-87 0-259 21-433 155a717 717 0 0 0-235 354 588 588 0 0 0-25 180 10 10 0 0 1-10 10z"
              fill="#e6e7e8"
            />
            <path className="floor-bg-border"
              d="M2770 231v646l-394-3v209h-132l2 321-15 214s-27-6-72-6c-93 0-265 22-439 157-283 235-264 542-264 542h-193v-54l-673-2-1-96-64-1v-44h34l1-518h-36v-53h93l1 56h472v-54h91v52h120l-1-139h461l2-358-1048-2V985H478l-1-276h364l-1-89h254v50c101-81 224-92 224-92l52-53 53 52a461 461 0 0 1 322 194h131v-92h158l1 33h37l1 60 167 1 1-60h39v-33h156V231h334m0-20h-334a20 20 0 0 0-20 20v429h-136a20 20 0 0 0-20 20v13h-19a20 20 0 0 0-20 20l-1 40-128-1v-40a20 20 0 0 0-20-20h-18v-13a20 20 0 0 0-20-20h-158a20 20 0 0 0-20 20v72h-101c-10-15-33-44-71-77a495 495 0 0 0-103-67c-46-23-96-39-149-48l-48-48a20 20 0 0 0-28 0l-48 48a480 480 0 0 0-70 16 511 511 0 0 0-75 29 453 453 0 0 0-49 27v-11a20 20 0 0 0-20-20H840a20 20 0 0 0-20 21v68H477a20 20 0 0 0-20 21l1 275a20 20 0 0 0 20 20h217v93a20 20 0 0 0 20 20l1028 2-1 318h-442a20 20 0 0 0-20 21l1 118h-80v-32a20 20 0 0 0-20-20h-91a20 20 0 0 0-20 20v34H637v-36a20 20 0 0 0-20-20h-93a20 20 0 0 0-20 20v53a20 20 0 0 0 20 20h16l-1 478h-14a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44l1 77a20 20 0 0 0 20 20l653 2v34a20 20 0 0 0 20 20h193a20 20 0 0 0 20-21s-1-19 2-50a658 658 0 0 1 24-128c27-93 89-229 230-347a701 701 0 0 1 427-153c42 0 68 5 68 5a20 20 0 0 0 24-18l15-214v-2l-2-300h112a20 20 0 0 0 20-20V894l373 3h1a20 20 0 0 0 20-20V231a20 20 0 0 0-20-20z"
              fill="#6d6e71"
            />
          </g>
          <g id="Rooms">
            <path className="ac-lg1-cls-3" d="M1459 890h45v49h-45zm45 0h49v49h-49z" />
            <path
              d="M1498 1799l109 86s-50 62-75 115l-55-28-14 32-71-33s44-94 106-172z"
              fill="#d4e6ac"
            />
            <path
              className="ac-lg1-cls-3"
              d="M560 1622h598v464H560zm598 319h107v59h-107zm124 0v35h12v24h39l42 14 18-43-66-30h-45zm164 55l-21 54 73 27 20-48-72-33z"
            />
            <path
              className="ac-lg1-cls-3"
              d="M1406 2104l19-54 73 27-16 49-76-22zm-228-87v136h68v-20h96v-20h38v-16l-67-20 20-60h-155z"
            />
            <path
              className="ac-lg1-cls-3"
              d="M1149 2171v86h114v54h193s2-87 26-185l-63-18v26h-39v19h-115v18zm329-199l54 28-14 29-55-25 15-32z"
            />
            <path
              className="ac-lg1-cls-5"
              d="M1480 1823s-58 79-74 121m87-139l5-6 109 86s-53 70-75 115m-139-29l36 17"
            />
            <path
              className="ac-lg1-cls-3"
              d="M1466 1773s134-176 330-257l74 162s-160 69-263 207z"
            />
            <path
              className="ac-lg1-cls-3"
              d="M1836 1605l54-22 27 75a440 440 0 0 0-47 20zm98-586h116v81h-116zm-34 0h33v56h-33zm0 56h33v25h-33z"
            />
            <path
              className="ac-lg1-cls-3"
              d="M1783 964h118v136h-118zm148-67v70h97s-27-31-31-70zm3 70h27v30h-27zm27 0h25v30h-25zm25 0h25v30h-25zm49 30h-24v-30h17l7 10zm-390-252v26s26 53 147 76c108 34 142-24 142-24s15-29 0-52h-189a209 209 0 0 0-19-26zm-24 219h162v136h-162z"
            />
            <path
              className="ac-lg1-cls-3"
              d="M1551 964h71v136h-71zm-242 1h44v47h-44zm-81 70h53v65h-53zm-62 0h50v65h-50zm-209 22h39v42h-39zm39 0h38v42h-38zm39 0h37v42h-37zm37 0h41v42h-41zm-95-93h77v77h-77zm95 0v37h41v-27h-21v-10h-20zm-151 0h56v39h-61s-1-21 5-39zm36 76h-43l2-37h41zm0 59h-36s-8-25-7-59h43zM592 936h59v49h-59z"
            />
            <path
              className="ac-lg1-cls-3"
              d="M649 936h59v49h-59zm59 0h59v49h-59zm1573 88h95v59h-95zm60-94l-20 36v41h55v-77h-35zm429-56V231h-334v540h-115v103h449zm-1694 16h69v-52s-49-2-69 19zm121-39s-28-11-52-13v52h52zm46-8s-27 2-46 8v39h46zm37 7s-10-9-37-7v47h37zm22 40l-3 50h56v-50h-53zm2-33l-2 33h53v-49s-34-2-51 16zm97-11s-25-7-46-5v49h46zm58 1v43h45v-51s-29 2-45 8zm94 7s-19-13-49-15v51h49zm-477 36h69v49h-69zm69 0h52v49h-52zm52 0h46v49h-46zm46 0h36v49h-36zm112 0h46v49h-46zm46 0h40v49h-40z"
            />
          </g>
          <g id="Empty">
            <path className="ac-lg1-cls-5" d="M871 963h25m277 1h18" />
            <path
              className="ac-lg1-cls-6"
              d="M589 2086h426v169H589zm-29 0v28h-35v44h64v-72h-29zm456 0v169h37v-51h76v-51h-38v-67h-75z"
            />
            <path
              className="ac-lg1-cls-6"
              d="M1158 2017v69h-67v67h87v-136h-20zm107-40h30v24h-30zm-107-74h22v39h-22zm0-135h22v40h-22zm0-146h22v12h35v49h-35v38h-22v-99z"
            />
            <path
              className="ac-lg1-cls-5"
              d="M1208 1768h7v-85m-35 124h18v19m0 22v16m0 21v18h-18m35-269h29m24 0h188l18 19m17 16l6 6m14 14l16 16"
            />
            <path
              className="ac-lg1-cls-6"
              d="M524 1543h94v56h-94zm566 2h91v53h-91zm812 73l25-10 14 41-24 9-15-40zm15-43l24 74 25-8-21-76-28 10zm-96-4l35-15 14 35-34 14-15-34z"
            />
            <path
              className="ac-lg1-cls-6"
              d="M1763 1100h481v304l-13 214s-134-19-265 23l-37-132-30 10-22-66v-64h-115zm518-17h-37v-74l19-13v28h18v59zm40-76h56v17h-56z"
            />
            <path className="ac-lg1-cls-5" d="M2277 981l4 5v21h11m-2-41h15" />
            <path className="ac-lg1-cls-6" d="M2321 874s-3 42-12 56h67v-56z" />
            <path
              className="ac-lg1-cls-5"
              d="M2309 930s-14 35-37 57m-237-10s17 17 35 28v95m-73-295h27v-34m-27 126v-6"
            />
            <path
              strokeDasharray="11.43 3.81"
              fill="none"
              stroke="#6d6e71"
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M1997 887v-74"
            />
            <path className="ac-lg1-cls-5" d="M1997 811v-6" />
            <path className="ac-lg1-cls-6" d="M1964 754h69v18h-69zm315 0h69v18h-69z" />
            <path className="ac-lg1-cls-5" d="M1934 771h30" />
            <path className="ac-lg1-cls-6" d="M1113 1035h29v44h-29zm-324-72h83v30h-83z" />
            <path
              className="ac-lg1-cls-6"
              d="M715 985v113h206s-10-33-6-90h-82v49h-66v-72zm-237-49h114v49H478zm635 142h53v21h-53zm103-43h13v65h-13zm66-70v134h269v-74h-92v-13h-150v-47h-27z"
            />
            <path
              className="ac-lg1-cls-6"
              d="M1459 964h45v61h-45zm-346 0h41v10h-41zm11-316h84v27h40v30h246v-29h37v-28h83s-70-57-191-71l-53-52-52 53s-121 16-194 70z"
            />
            <path className="ac-lg1-cls-5" d="M1270 705v40m202-40v40" />
            <path
              className="ac-lg1-cls-6"
              d="M1094 670H921v47h-91v76H477v-84h364v-89h253v50zm-296 338h35v49h-35z"
            />
            <path className="ac-lg1-cls-5" d="M1083 670v6" />
            <path
              strokeDasharray="12.4 4.13"
              fill="none"
              stroke="#6d6e71"
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M1083 680v163"
            />
            <path className="ac-lg1-cls-5" d="M1083 845v6" />
          </g>
          <g id="Stairs-lifts-escalators">
            <path
              className="ac-lg1-cls-9"
              d="M1598 1561l36 50s63-53 136-84l-18-38-62 33-10-15zm198-45s34-19 62-27l26 76-22 7-6-16-35 15z"
            />
            <ellipse className="ac-lg1-cls-9" cx={1131} cy={992} rx={19} ry={18} />
            <ellipse className="ac-lg1-cls-9" cx={1528} cy={1001} rx={19} ry={18} />
            <ellipse className="ac-lg1-cls-9" cx={1948} cy={700} rx={19} ry={18} />
            <ellipse className="ac-lg1-cls-9" cx={1983} cy={700} rx={19} ry={18} />
            <ellipse className="ac-lg1-cls-9" cx={2015} cy={700} rx={19} ry={18} />
            <ellipse className="ac-lg1-cls-9" cx={2299} cy={700} rx={19} ry={18} />
            <ellipse className="ac-lg1-cls-9" cx={2334} cy={700} rx={19} ry={18} />
            <ellipse className="ac-lg1-cls-9" cx={2366} cy={700} rx={19} ry={18} />
            <ellipse className="ac-lg1-cls-9" cx={783} cy={1042} rx={19} ry={18} />
            <ellipse className="ac-lg1-cls-9" cx={1198} cy={1701} rx={19} ry={18} />
            <ellipse className="ac-lg1-cls-9" cx={1918} cy={1531} rx={19} ry={18} />
            <ellipse className="ac-lg1-cls-9" cx={1403} cy={1995} rx={19} ry={18} />
            <path
              className="ac-lg1-cls-9"
              d="M1191 964h71v47h-71zm162 1h82v47h-82zm-50-260h135v32h-135zm573-26h46v92h-46zm514 0h46v92h-46zm-291 317h22v105h-22zm32 0h51v105h-51zm61 0h22v105h-22zm-122-124h172v23h-172zm0 33h172v24h-172zm-737 1112l73 27-18 55-75-22 20-60zm-95-218v103h41v-17h80l25 18 41-55-54-35h-92v-14h-41z"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default AC_LG1;
