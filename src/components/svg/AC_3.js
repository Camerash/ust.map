import React, { Component } from 'react';
import './floor_styles/AC_3.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_3.json';
import Tag from '../Tag';

class AC_3 extends Component {
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
        <svg id="AC-3" viewBox="0 0 5700 2900" className="floor-svg" style={{
            WebkitTransform: `scale(${this.props.scale},${this.props.scale})`,
            Transform: `scale(${this.props.scale},${this.props.scale})`
          }}>
          <defs />
          <g id="AC-3-BG" className="floor-bg">
            <path onClick={this.onLayerClick}
              d="M4185 2631a10 10 0 0 1-10-10v-126h-72a10 10 0 0 1-10-10v-368a10 10 0 0 1 10-10h78v-281h-268l-78 1v279l78 1a10 10 0 0 1 10 10v367a10 10 0 0 1-10 10l-76 2v124a10 10 0 0 1-10 10h-562a10 10 0 0 1-10-10v-127h-76a10 10 0 0 1-10-10v-368a10 10 0 0 1 10-10h76v-284h-343l-8 7c8 14 28 47 49 89 36 72 60 136 71 189h51a10 10 0 0 1 10 10v365a10 10 0 0 1-10 10h-44l-19 71a10 10 0 0 1-12 7l-167-48a10 10 0 0 1-7-13c0-1 36-116 20-267a678 678 0 0 0-287-489 710 710 0 0 0-404-132 693 693 0 0 0-339 91 10 10 0 0 1-1 1c-1 0-78 36-157 122a699 699 0 0 0-183 428 10 10 0 0 1-10 9l-177-13a10 10 0 0 1-9-10c0-1 0-32 8-81a926 926 0 0 1 56-196 882 882 0 0 1 417-456l-10-17a10 10 0 0 1-2-5v-44l2-496h-9a10 10 0 0 1-10-10l-1-179a10 10 0 0 1 10-10l125 1v-82a10 10 0 0 1 10-10h159a10 10 0 0 1 10 10v75c18-9 54-20 115-20 60 0 94 10 112 19v-76a10 10 0 0 1 10-10h158a10 10 0 0 1 10 10v84l492-2 352 1V607a10 10 0 0 1 10-10h181a10 10 0 0 1 10 10v150h106l-2-150a10 10 0 0 1 10-10l182-1a10 10 0 0 1 10 10v149l418-1V603a10 10 0 0 1 10-10h178a10 10 0 0 1 10 10v151h107l1-151a10 10 0 0 1 10-10h182a10 10 0 0 1 10 10l-1 150h767a10 10 0 0 1 10 10v637l1 331a10 10 0 0 1-10 10h-274v78a10 10 0 0 1-10 10l-358-2v395h100a10 10 0 0 1 10 10v218a10 10 0 0 1-10 10h-100v25a10 10 0 0 1-10 10l-81 1 1 125a10 10 0 0 1-10 10z"
              fill="#e4deda"
            />
            <path className="floor-bg-border" onClick={this.onLayerClick}
              d="M4228 603h178v161h127l1-161h181v160h777v968h-283v88l-369-2v414l110 1v218h-110v35l-90 1 1 135h-567v-136h-82v-368h88v-301h-278l-87 1v299l87 1v367l-86 2v134h-562v-137h-86v-368h86v-304h-356l-18 14s101 161 125 291h60v365h-52l-20 78-167-48s146-465-271-767a718 718 0 0 0-410-134c-204 0-344 93-344 93s-311 142-345 558l-177-13s6-485 486-729l-17-26v-44l2-506h-19l-1-179 135 1v-92h159v92s30-27 125-27 122 27 122 27v-94h158v94l502-2h362V607h181v160h127l-3-160 182-1v159l438-1V603m0-20a20 20 0 0 0-20 20v141l-398 1V606a20 20 0 0 0-20-20l-182 1a20 20 0 0 0-20 20l2 140h-87V607a20 20 0 0 0-19-20h-181a20 20 0 0 0-20 20v136h-342l-482 2v-74a20 20 0 0 0-20-20h-159a20 20 0 0 0-20 20l1 61c-27-9-61-14-102-14-50 0-84 7-105 15v-60a20 20 0 0 0-20-20h-159a20 20 0 0 0-20 20v72l-115-1a20 20 0 0 0-20 20l1 179a20 20 0 0 0 19 20l-2 486v44a20 20 0 0 0 3 10l5 9a892 892 0 0 0-413 456 936 936 0 0 0-55 197c-9 50-9 81-9 83a20 20 0 0 0 18 20l177 13h2a20 20 0 0 0 19-18 689 689 0 0 1 179-422 627 627 0 0 1 107-92c29-19 48-28 48-28a19 19 0 0 0 3-2s35-22 93-44c53-21 138-45 240-45 138 0 272 44 398 130a660 660 0 0 1 283 481 772 772 0 0 1-4 189c-7 46-15 75-16 75a20 20 0 0 0 14 26l167 47a20 20 0 0 0 25-14l17-63h36a20 20 0 0 0 20-20v-365a20 20 0 0 0-20-20h-43c-12-52-36-114-70-183-18-36-35-65-45-82h327v264h-66a20 20 0 0 0-20 20v368a20 20 0 0 0 20 20h66v117a20 20 0 0 0 20 20h562a20 20 0 0 0 20-20v-114l67-2a20 20 0 0 0 19-20v-367a20 20 0 0 0-19-20l-68-1v-259l68-1h257v261h-68a20 20 0 0 0-20 20v368a20 20 0 0 0 20 20h62v116a20 20 0 0 0 20 20h567a20 20 0 0 0 20-20l-1-115 71-1a20 20 0 0 0 19-20v-15h90a20 20 0 0 0 20-20v-218a20 20 0 0 0-19-20h-91v-375l349 2a20 20 0 0 0 20-20v-68h263a20 20 0 0 0 20-20V763a20 20 0 0 0-20-20h-757V603a20 20 0 0 0-20-20h-181a20 20 0 0 0-20 20l-1 141h-87V603a20 20 0 0 0-20-20z"
              fill="#6d6e71"
            />
          </g>
          <g id="Rooms">
            <path
              className="ac-3-cls-3"
              d="M2248 753l-24-6v59h58v-41h-34zm129 576h58v80h-58zm-1057 744l167 47s-19 61-24 140l-174-13s10-120 31-174zm202-49s-23 50-35 96l-56-16s19-59 39-104zm-161-72l19-38 67 35-15 33zm77-137s-34 50-58 99l119 61 50-83z"
            />
            <path
              className="ac-3-cls-3"
              d="M1495 1738s-28 31-57 77l111 77 48-64zm67-14l41 40-34 39-43-38 36-41zm68 67l-33 37-28-25 34-39 27 27z"
            />
            <path
              className="ac-3-cls-3"
              d="M1495 1738s101-118 218-184l68 117s-79 47-151 120l-68-67-37 41z"
            />
            <path
              className="ac-3-cls-3"
              d="M1797 1597l27 51a288 288 0 0 0-43 23l-29-49z"
            />
            <path className="ac-3-cls-3" d="M1781 1563l-48 26 19 33 45-25-16-34z" />
            <path className="ac-3-cls-3" d="M1763 1526l-50 28 20 35 48-26-18-37z" />
            <path
              className="ac-3-cls-3"
              d="M1797 1510l-34 16 34 71 33-16-33-71zm50 107l51-20 19 54-47 20z"
            />
            <path
              className="ac-3-cls-4"
              d="M1920 1465s64-23 151-29l17 176s-63 4-120 23z"
            />
            <path
              className="ac-3-cls-5"
              d="M1941 1538l-21-73s65-23 151-29l7 80m2 16l8 80s-82 8-120 23l-21-75"
            />
            <path
              className="ac-3-cls-4"
              d="M2071 1436s162-19 326 29l-48 172s-108-38-261-25z"
            />
            <path
              className="ac-3-cls-5"
              d="M2078 1516l-7-80s54-4 77-3m21 0s110-3 228 32l-21 75m-6 22l-21 75s-103-36-261-25l-8-80"
            />
            <path className="ac-3-cls-3" d="M2399 1652l25-72s29 10 54 21l-32 71-47-20z" />
            <path
              className="ac-3-cls-4"
              d="M2494 1564s128 59 211 138l41-44s149 133 215 296l-92 40-14-31 52-28s-51-117-162-222l-95 98s-89-90-204-139z"
            />
            <path
              className="ac-3-cls-5"
              d="M2486 1583l8-19s128 57 211 138l41-44s141 118 215 296l-73 32"
            />
            <path
              className="ac-3-cls-5"
              d="M2869 1994l-14-31 52-28s-58-122-162-222l-95 98s-114-101-204-139l32-71"
            />
            <path
              className="ac-3-cls-3"
              d="M2494 1564l25-54 36 17-27 54zm95-19l-34-18-27 54 32 17z"
            />
            <path className="ac-3-cls-3" d="M2622 1565l-33-20-29 53 31 18z" />
            <path className="ac-3-cls-3" d="M2654 1587l-32-22-31 51 30 19z" />
            <path className="ac-3-cls-3" d="M2686 1609l-32-22-33 48 29 21z" />
            <path className="ac-3-cls-3" d="M2716 1632l-30-23-36 47 29 23z" />
            <path
              className="ac-3-cls-3"
              d="M2746 1658a274 274 0 0 0-30-26l-37 47 26 23zm-96 153a706 706 0 0 1 51 57l106-87s-31-37-62-68z"
            />
            <path
              className="ac-3-cls-3"
              d="M2763 1957s-31-49-62-89l106-87s40 49 73 105z"
            />
            <path className="ac-3-cls-3" d="M2907 1935l-85 45-24-45 82-49s11 19 27 49z" />
            <path
              className="ac-3-cls-3"
              d="M2869 1994l-71 31s-9-22-35-68l35-22 24 45 33-17zm-59 58l71-28s19 44 28 81l-74 21s-10-38-25-74z"
            />
            <path
              className="ac-3-cls-3"
              d="M2907 2139l-10-31-62 18 8 31zm41-45l10 36 57-14-10-38z"
            />
            <path
              className="ac-3-cls-3"
              d="M2843 2157s14 48 16 102h67v-63l-19-57zm85-19l19 55v45h128v-122h-60l-87 22zm25 205v-105h122v144h-76v-39h-46z"
            />
            <path
              className="ac-3-cls-4"
              d="M2859 2259a719 719 0 0 1 3 99l137 5v-20h-46v-84z"
            />
            <path className="ac-3-cls-5" d="M2977 2363l-115-5c1-51-3-99-3-99h67" />
            <path className="ac-3-cls-5" d="M2999 2363v-20h-46v-84" />
            <path className="ac-3-cls-3" d="M1760 1408h77v47h-77zm0-42h79v42h-79z" />
            <path className="ac-3-cls-3" d="M1760 1329h60v38h-60z" />
            <path className="ac-3-cls-3" d="M1819 1308h39v58h-39zm59 58h58v42h-58z" />
            <path
              className="ac-3-cls-3"
              d="M1878 1329h58v38h-58zm0-40h58v40h-58zm0-38h58v38h-58z"
            />
            <path
              className="ac-3-cls-3"
              d="M1878 1213h58v39h-58zm-118 57h41v59h-41zm59-38h39v57h-39z"
            />
            <path
              className="ac-3-cls-3"
              d="M1760 1232v38h40v19h19v-57h-59zm59-174h39v58h-39zm-59-39h41v60h-41zm59-39h39v57h-39z"
            />
            <path
              className="ac-3-cls-3"
              d="M1760 980v39h40v19h19v-58h-59zm0 194h41v58h-41z"
            />
            <path className="ac-3-cls-3" d="M1800 1194h58v38h-58zm-40-79h41v59h-41z" />
            <path
              className="ac-3-cls-3"
              d="M1858 1115h-58v39h19v20h39v-59zm20 59h58v39h-58zm0-40h58v40h-58z"
            />
            <path
              className="ac-3-cls-3"
              d="M1878 1097h58v38h-58zm0-40h58v40h-58zm0-39h58v39h-58zm0-38h58v38h-58zm0-38h58v38h-58zm499 347h58v40h-58zm0-38h58v38h-58z"
            />
            <path
              className="ac-3-cls-3"
              d="M2377 1213h58v39h-58zm0-39h58v39h-58zm0-40h58v40h-58z"
            />
            <path
              className="ac-3-cls-3"
              d="M2377 1097h58v38h-58zm0-40h58v40h-58zm0-39h58v39h-58zm0-38h58v38h-58zm0-38h58v38h-58zm425 347h62v40h-62zm0-38h62v38h-62z"
            />
            <path
              className="ac-3-cls-3"
              d="M2802 1213h62v39h-62zm0-39h62v39h-62zm0-40h62v40h-62z"
            />
            <path
              className="ac-3-cls-3"
              d="M2802 1097h62v38h-62zm0-40h62v40h-62zm0-39h62v39h-62zm0-38h62v38h-62zm0-38h62v38h-62zm499 348h62v40h-62zm0-38h62v38h-62z"
            />
            <path
              className="ac-3-cls-3"
              d="M3301 1214h62v39h-62zm0-39h62v39h-62zm0-40h62v40h-62zm0-38h62v38h-62z"
            />
            <path
              className="ac-3-cls-3"
              d="M3301 1058h62v40h-62zm0-40h62v39h-62zm0-38h62v38h-62zm0-38h62v38h-62zm424 349h62v40h-62zm0-39h62v38h-62z"
            />
            <path
              className="ac-3-cls-3"
              d="M3725 1214h62v39h-62zm0-39h62v39h-62zm0-40h62v40h-62zm0-38h62v38h-62z"
            />
            <path
              className="ac-3-cls-3"
              d="M3725 1058h62v40h-62zm0-40h62v39h-62zm0-38h62v38h-62zm0-38h62v38h-62zm501 349h62v40h-62zm0-38h62v38h-62zm0-39h62v39h-62z"
            />
            <path
              className="ac-3-cls-3"
              d="M4226 1176h62v39h-62zm0-40h62v40h-62zm0-38h62v38h-62zm0-40h62v40h-62zm0-39h62v39h-62zm0-38h62v38h-62zm0-38h62v38h-62zm-2466 135v37h59v-57h-19v20h-40zm0-136h79v39h-79zm-19-177h80v61h-80zm40 98h40v40h-40zm78-98h76v98h-76z"
            />
            <path
              className="ac-3-cls-3"
              d="M1741 863h118v-98h-38v61h-80v37zm40 40v39h78v-79h-38v40h-40zm-40-40h40v78h-40zm137 20h38v59h-38z"
            />
            <path
              className="ac-3-cls-3"
              d="M1915 883h39v59h-39zm40 0h38v59h-38zm38 0h39v59h-39zm39 0h38v59h-38zm38 0h39v59h-39zm39 0h38v59h-38zm38 0h39v59h-39zm39 0h38v59h-38zm38 0h39v59h-39zm39 0h38v59h-38zm38 0h39v59h-39zm-327-97h58v40h-58zm0 40h58v38h-58zm77 0h58v38h-58zm58 0h38v38h-38zm58 0h58v38h-58zm77-20h39v58h-39z"
            />
            <path
              className="ac-3-cls-3"
              d="M2282 826h58v38h-58zm0-61h58v61h-58zm-250 0h38v41h-38zm-59-92v40h-9v34h70v-74h-61z"
            />
            <path
              className="ac-3-cls-3"
              d="M2065 765v-13a404 404 0 0 1 44-10v84h-58v-20h19v-41zm82-26l-38 3v84h38zm39 1a265 265 0 0 0-39-1v87h39zm38 7s-19-6-38-7v85h38zm272 59h75v96h-75zm192-41h77v80h19v56h-96V765zm-234 177h100v96h-100zm0 96h100v97h-100z"
            />
            <path
              className="ac-3-cls-3"
              d="M2454 1134h100v98h-100zm0 98h100v77h-100zm0 97h100v80h-100zm232-195h98v97h-98zm0 97h98v78h-98z"
            />
            <path
              className="ac-3-cls-3"
              d="M2686 1038h98v97h-98zm0-96h98v96h-98zm-85 87h85v64h-85zm85 300h98v80h-98zm98 0h80v80h-80zm18-466h59v79h-59zm59-19h58v39h-58zm0 39h38v59h-38zm38 19h58v39h-58zm58-19h39v59h-39zm-19-39h58v39h-58zm58 0h39v58h-39zm0 58h58v39h-58zm39-58h39v58h-39zm76 20h57v39h-57z"
            />
            <path className="ac-3-cls-3" d="M3111 902h57v39h-57zm58-38h58v39h-58z" />
            <path className="ac-3-cls-3" d="M3169 902h58v39h-58zm76-38h58v39h-58z" />
            <path className="ac-3-cls-3" d="M3245 902h58v39h-58zm59 0h58v39h-58z" />
            <path
              className="ac-3-cls-3"
              d="M3304 864h58v39h-58zm-2 466h98v79h-98zm98 0h79v79h-79zm-20-388h99v57h-99zm0 57h99v59h-99zm0 59h99v58h-99zm0 58h58v39h-58zm58 0h41v56h-41zm0 56h41v59h-41zm-58 59h38v77h-38zm38 0h60v39h-60z"
            />
            <path
              className="ac-3-cls-3"
              d="M3418 1269h60v39h-60zm192-76h40v58h-40zm0 58h40v57h-40zm40 19h58v38h-58zm0-77h58v38h-58zm-40-78h59v39h-59zm0 39h59v39h-59zm60-39h39v58h-39zm-60-59h40v59h-40zm40 0h58v40h-58z"
            />
            <path className="ac-3-cls-3" d="M3525 1028h86v67h-86zm85-86h98v57h-98z" />
            <path
              className="ac-3-cls-3"
              d="M3610 999h98v57h-98zm0 331h176v79h-176zm-845-565h37v80h-37zm37 0h40v80h-40zm40 0h39v60h-39z"
            />
            <path className="ac-3-cls-3" d="M2880 765h39v60h-39zm39 0h39v60h-39z" />
            <path
              className="ac-3-cls-3"
              d="M2957 765h39v60h-39zm39 0h39v60h-39zm39 0h39v60h-39z"
            />
            <path
              className="ac-3-cls-3"
              d="M3073 765h38v60h-38zm77 0h37v80h-37zm38 0h39v80h-39z"
            />
            <path
              className="ac-3-cls-3"
              d="M3226 765h39v80h-39zm39 0h37v80h-37zm37 39h60v40h-60z"
            />
            <path
              className="ac-3-cls-3"
              d="M3302 765h60v40h-60zm0-37h60v37h-60zm0-39h60v39h-60zm0-39h60v39h-60zm0-41h80v41h-80zm80 0h57v41h-57z"
            />
            <path
              className="ac-3-cls-3"
              d="M3438 609h42v60h-42zm-58 60h100v233h-100zm100 175h36v36h-36z"
            />
            <path
              className="ac-3-cls-3"
              d="M3480 765h36v80h-36zm36 0h57v116h-57zm57 0h37v116h-37zm-462 0v59h-19v20h58v-79h-39zm499-156v293h98V708h20v-58h-20v-41h-98z"
            />
            <path className="ac-3-cls-3" d="M3708 609h79v41h-79zm20 41h59v40h-59z" />
            <path
              className="ac-3-cls-3"
              d="M3728 689h59v37h-59zm0 37h59v38h-59zm0 39h59v59h-59zm0 79v98h59v-40h17v-58h-76z"
            />
            <path
              className="ac-3-cls-3"
              d="M3787 902h56v39h-56zm17-58h39v58h-39zm-17-79h36v59h-36zm36 0h40v59h-40zm40 0h38v80h-38z"
            />
            <path
              className="ac-3-cls-3"
              d="M3900 765h40v80h-40zm40 0h58v41h-58zm0 41h58v39h-58zm77-41h58v41h-58zm0 41h58v39h-58z"
            />
            <path
              className="ac-3-cls-3"
              d="M4074 765h39v80h-39zm39 0h39v80h-39zm39 0h39v61h-39zm39 0h37v61h-37zm37 41h59v39h-59zm0-41h59v41h-59zm-2-38h61v37h-61zm0-38h61v38h-61zm0-39h61v39h-61zm0-41h80v41h-80zm80 0h58v41h-58z"
            />
            <path className="ac-3-cls-3" d="M4363 609h41v61h-41zm0 61h41v58h-41z" />
            <path
              className="ac-3-cls-3"
              d="M4306 689h58v38h-58zm0 38h99v78h-99zm0 79h68v42h-68z"
            />
            <path
              className="ac-3-cls-3"
              d="M4306 902v-54h68v-42h104v57h16v39h-188zm99-137h55v41h-55zm55 0h38v41h-38zm38 0h60v60h-60zm-4 98h64v39h-64z"
            />
            <path
              className="ac-3-cls-3"
              d="M4478 806v57h80v-38h-60v-19h-20zm57-117h60v38h-60zm0 38h60v37h-60z"
            />
            <path
              className="ac-3-cls-3"
              d="M4535 609v80h61v76h56v-38h-17v-38h17v-80h-117zm117 0h61v41h-61zm0 41h61v39h-61z"
            />
            <path
              className="ac-3-cls-3"
              d="M4635 689h78v38h-78zm17 76h27v16h33v-54h-60v38zm60 0h56v61h-56zm56 0h39v61h-39zm39 0h40v61h-40zm40 0h38v61h-38zm38 0h39v61h-39z"
            />
            <path
              className="ac-3-cls-3"
              d="M4923 765h39v61h-39zm39 0h56v80h-56zm57 0h39v40h-39zm0 40h39v40h-39z"
            />
            <path
              className="ac-3-cls-3"
              d="M5057 804h39v41h-39zm97-39h97v80h-97zm19 98h39v39h-39zm39 0h38v39h-38z"
            />
            <path
              className="ac-3-cls-3"
              d="M5347 922v-20h-97v-39h-38v-18h38v-80h173v98s18-1 20 0 0 59 0 59z"
            />
            <path className="ac-3-cls-3" d="M5423 765h60v60h-60z" />
            <path
              className="ac-3-cls-3"
              d="M5423 824h60v39h-60zm20 39h40v39h-40zm0 39h40v50h-40zm-26 121h74v71h-74zm-148-82h39v117h-39zm-117 0h41v59h-41zm0 59h41v77h-41z"
            />
            <path className="ac-3-cls-3" d="M5152 1076h41v58h-41zm0 136h79v39h-79z" />
            <path className="ac-3-cls-3" d="M5152 1250h79v77h-79zm0 77h179v82h-179z" />
            <path className="ac-3-cls-3" d="M5230 1212h59v115h-59zM3863 863h58v40h-58z" />
            <path className="ac-3-cls-3" d="M3863 902h58v40h-58z" />
            <path className="ac-3-cls-3" d="M3920 863h58v40h-58z" />
            <path
              className="ac-3-cls-3"
              d="M3920 902h58v40h-58zm116-39h58v40h-58zm0 40h58v40h-58z"
            />
            <path
              className="ac-3-cls-3"
              d="M4093 863h58v40h-58zm0 40h58v40h-58zm78-40h58v40h-58zm0 40h58v40h-58z"
            />
            <path
              className="ac-3-cls-3"
              d="M4228 863h58v40h-58zm0 40h58v40h-58zm-2 427h136v79h-136zm99-127h79v105h-79zm0-50h79v50h-79zm0-52h79v52h-79zm0-82h79v59h-79zm0-76l78-9v85h-78v-76z"
            />
            <path
              className="ac-3-cls-3"
              d="M4403 1028h85v68h-85zm131 300h60v81h-60zm60 0h40v81h-40zm40 39h79v42h-79zm19-39h60v39h-60zm0-38h60v38h-60z"
            />
            <path
              className="ac-3-cls-3"
              d="M4653 1252h60v39h-60zm0-40h60v40h-60zm0-58h60v58h-60zm0-39h60v39h-60z"
            />
            <path
              className="ac-3-cls-3"
              d="M4634 1077h79v39h-79zm0-39h79v39h-79zm0-38h79v38h-79zm0-118h79v117h-79zm-99 114h40v23h-40zm0 39h60v100h-60zm0 100h79v39h-79zm0 39h79v78h-79zm0 78h98v56h-98z"
            />
            <path
              className="ac-3-cls-3"
              d="M4712 902h38v41h-38zm38 0h38v41h-38zm38 0h39v41h-39zm39 0h39v41h-39zm39 0h38v41h-38zm62-15v10h-24v23h54v-33h-30zm52-24h77v80h-77zm116 0h55v80h-55zm-39 0h39v39h-39zm0 39h39v41h-39zm-2525 534v46l-5 11h64v20h59v-77h-118zm154 77v96s85 61 130 120h64v-216zm79-77h115v77h-115zm350 302h65v75h-65zm-121-147h40v38h-40zm0-38h60v37h-60z"
            />
            <path
              className="ac-3-cls-3"
              d="M2994 1436h115v118h-115zm60 118h55v37h-55zm55-1h38v37h-38zm38-117h59v59h-59z"
            />
            <path className="ac-3-cls-3" d="M3109 1436v117h59v-21h-21v-96h-38z" />
            <path
              className="ac-3-cls-3"
              d="M3206 1495h-59v37h21v21h38v-58zm-172 96v38h-40v58h98v-96h-58zm58 0h96v96h-96zm55-37h41v37h-41zm59-118h58v117h-58zm-18 117h76v37h-76zm0 38h76v59h-76zm0 59h76v37h-76zm96-214h84v117h-84zm0 117h174v134h-174zm84-117h91v117h-91z"
            />
            <path
              className="ac-3-cls-3"
              d="M3458 1436h57v117h-57zm57 0h95v117h-95zm-57 117h152v134h-152zm152-117h175v117h-175zm0 117h117v134h-117zm117 0h59v134h-59zm154-41h58v41h-58zm58 21h78v21h-78zm0-97h39v97h-39zm-116 117h116v134h-116z"
            />
            <path
              className="ac-3-cls-3"
              d="M3939 1553h39v134h-39zm39 0h39v134h-39zm-155-117v117h58v-41h58v-76h-116zm155 0h76v59h-56v38h-20v-97z"
            />
            <path
              className="ac-3-cls-3"
              d="M3998 1495v38h19v20h37v-58h-56zm19 58h113v134h-113zm37-117h59v117h-59zm59 0h57v117h-57zm17 117h59v134h-59zm40-117h117v117h-117zm20 117h55v134h-55zm55 0h138v134h-138zm42-117h116v116h-116zm116 0h60v116h-60zm-20 117h134v134h-134zm81-117h170v116h-170zm170 0h39v116h-39zm0 117h39v134h-39zm-615 189h66v-14h20v86h-86v-72zm691-306v251h233v-187h-73v-49h-20v-10h-12l-4-4-124-1zm233 81l67-67h121l65 65v118h-51v21h-28v-12h-95v13h-28v-19h-51v-119zm288 93h103v78h-103zm0-174v174h102v-10h66v-164h-168zm-461 797h65v55h-65zm-926-25h66v80h-66zm-666 1h67v79h-67zm87 332h39v80h-39z"
            />
            <path
              className="ac-3-cls-4"
              d="M3304 2422v119h154v79h327v-137h-173v19h-19v19h-96v-135h-78v-38h-39v74h-76"
            />
            <path
              className="ac-3-cls-3"
              d="M3304 2541h38v80h-38zm38 0h116v80h-116zm-38-290h192v97h-192zm0 97h75v37h-75zm0 37h38v38h-38zm38 0h38v38h-38zm77-37h77v38h-77zm78 76h77v59h-77zm0 59h57v38h-57zm19-232h77v19h-77z"
            />
            <path className="ac-3-cls-3" d="M3497 2270h96v155h-96z" />
            <path
              className="ac-3-cls-3"
              d="M3573 2424h19v38h-19zm20-173h66v57h36v58h-25v96h-77v-211z"
            />
            <path
              className="ac-3-cls-3"
              d="M3785 2308v154h-115v-96h25v-58h90zm0 197h40v115h-40z"
            />
            <path
              className="ac-3-cls-5"
              d="M3458 2620h327m-173-137h173m-288 38v60m81-60h15v-19h19"
            />
            <path className="ac-3-cls-4" d="M3304 1959h192v175h-192z" />
            <path className="ac-3-cls-5" d="M3593 2581v-60m-289-99v95" />
            <path
              className="ac-3-cls-3"
              d="M3304 2134h36v39h-36zm36 0h40v39h-40zm40 0h77v39h-77zm77 0h40v39h-40zm-153 39h192v58h-192zm0-214h36v73h-36zm289 155h38v118h-38zm38 0h155v118h-155zm-38-77h193v77h-193zm0-78h97v78h-97z"
            />
            <path
              className="ac-3-cls-3"
              d="M3689 1959h97v78h-97zm-193 0h97v136h-97zm1 214h96v58h-96z"
            />
            <path className="ac-3-cls-5" d="M3304 2033v65m36-139h117" />
            <path
              className="ac-3-cls-4"
              d="M3313 1863v-44h-11v-92h192v38h20v-38h58v38h21v39h-60v78h-58v-19h-162z"
            />
            <path className="ac-3-cls-3" d="M3380 1902h58v37h-58z" />
            <path
              className="ac-3-cls-3"
              d="M3302 1863v76h78v-37h57v-39h-135zm135 0h38v76h-38zm38 19h58v57h-58zm58-19h59v76h-59z"
            />
            <path
              className="ac-3-cls-5"
              d="M3302 1819v-92m33 0h159m41 0h37v38h21v39m-60 59h-29"
            />
          </g>
          <g id="Empty">
            <path
              className="ac-3-cls-6"
              d="M1388 2052l-11 37 16 5 11-37-16-5zm64-61l18 9s-25 60-39 104l-18-5s14-46 39-108zm-91-39l-23 58 39 14 23-55zm462-387l34-15 6 15-33 16-7-16zm81 48l26-8 13 38-26 8-13-38z"
            />
            <path
              className="ac-3-cls-6"
              d="M1917 1570l30-10 21 75-25 8-26-73zm3-105l-33 11 13 38 31-10-11-39zm449 98l30 9-24 72-26-7 20-74z"
            />
            <path
              className="ac-3-cls-6"
              d="M2411 1616l-24-8-12 36 24 8 12-36zm50-66l-9 18 34 15 8-19-33-14zm-66-81l34 9-12 39-32-10 10-38zm-459-527l-1 459s221-62 442 0V942zm985 1120l11 37 16-5-12-37-15 5zm3-91l12 30 38-14-13-33z"
            />
            <path
              className="ac-3-cls-6"
              d="M2965 2022l20-7-11-28-19 7 10 28zm57 459h7v-76h-14v70l7 6zM1888 755h47v10h-47zm76-8h70v18h-70zm-43-74h52v40h-52zm360 73h70v19h-70zm98 8h49v11h-49zm1-47h12v25h-12zm174 386h131v216h-131zm1-151h25v11h-25zm0 11h25v32h-25zm0 32h10v24h-10z"
            />
            <path
              className="ac-3-cls-6"
              d="M2579 942h22v43h-22zm59 0h32v16h-32zm32 0h15v88h-15zm-92 392h83v13h-83zm0 60h83v18h-83zm341 392h38v28h-38zm83-59h113v87h-113zm177 0h84v14h-84zm-1 562h86v119h-86z"
            />
            <path
              className="ac-3-cls-6"
              d="M3224 2407h39v50h-39zm28-256h12v57h-12zm573 138h86v119h-86zm0 119h40v50h-40zm0-175h20v56h-20zm0-82h13v57h-13zm0-422h84v13h-84zm0 35h38v50h-38zm84-35h110v85h-110zm132-1h44v14h-44zm64 0h85v14h-85zm72 424h11v54h-11zm-72 54h83v201h-83zm43 201h40v50h-40zm600-255h15v56h-15zm2 81h20v47h-20zm1 196h13v28h-13z"
            />
            <path
              className="ac-3-cls-6"
              d="M4763 2429h26v28h-26zm-12-29h38v29h-38zm-1-636h38v51h-38zm0-36h84v11h-84zm320 0h54v13h-54zm85 1h49v28h-49zm-2291-554h438v234h-438zm0-233h438v233h-438zm1539 1h16v85h-16zm16 0h32v15h-32zm69 0h23v41h-23zm23 0h24v41h-24zm12 41h12v25h-12zm-737 427h519"
            />
            <path className="ac-3-cls-5" d="M4512 1409h-133" />
            <path
              className="ac-3-cls-6"
              d="M3503 1391h70v18h-70zm0-61h70v16h-70zm70 0h38v79h-38zm-95-234h132v213h-132z"
            />
            <path
              className="ac-3-cls-6"
              transform="rotate(-180 3602 986)"
              d="M3594 943h16v86h-16z"
            />
            <path
              className="ac-3-cls-6"
              transform="rotate(-180 3579 950)"
              d="M3563 943h32v15h-32z"
            />
            <path
              className="ac-3-cls-6"
              transform="rotate(-180 3514 963)"
              d="M3502 943h23v41h-23z"
            />
            <path
              className="ac-3-cls-6"
              transform="rotate(-180 3490 963)"
              d="M3478 943h24v41h-24z"
            />
            <path
              className="ac-3-cls-6"
              transform="rotate(-180 3484 996)"
              d="M3478 984h12v25h-12z"
            />
            <path
              className="ac-3-cls-6"
              d="M4558 868h46v34h-46zm796 462h83v14h-83zm0 62h83v17h-83zm-26-440h66v31h-66zm0 32h19v112h-19zm-925 407h108v18h-108zm25-61h83v16h-83z"
            />
            <path className="ac-3-cls-5" d="M4403 1391v-61" />
            <path
              className="ac-3-cls-6"
              d="M3302 1819h12v20h-12zm231-15h59v59h-59zm-39-77h20v38h-20z"
            />
            <path
              className="ac-3-cls-6"
              d="M3572 1727h214v212h-193v-174h-21v-38zm-76 368h97v78h-97zm163 156h36v57h-36zm36 0h90v57h-90zm-1848-634l-9-18 53-21 7 19-51 20zm-87-162v41l12 26s46-22 77-34l-13-33zm619-690v137h117v-96h37v-41h-154z"
            />
            <path className="ac-3-cls-5" d="M2418 875v-69h62m-42 0v-42" />
            <path className="ac-3-cls-6" d="M2571 863h59v39h-59z" />
            <path
              className="ac-3-cls-6"
              d="M2533 765h155v136h-58v-38h-59v-57h-38v-41zm-74 722l16-51h57v46l-13 28-60-23z"
            />
            <path
              className="ac-3-cls-6"
              d="M2591 1493v54s-43-24-73-37l9-17zm95 20h-95v33s44 24 95 63zm-36-77h115v77h-115zm166 293h43v52l-43-52zm103 0v84h-12l-16 12a512 512 0 0 0-32-44v-52zm23-2h60v13h-60zm-8-77h61v37h-61z"
            />
            <path
              className="ac-3-cls-6"
              d="M2898 1436h96v214h-60v37h-36v-251zm598-555h39v22h-39zm59 0h37v22h-37zm443-116h19v19h-19zm519 865h40v57h-40z"
            />
            <path
              className="ac-3-cls-6"
              d="M4517 1553v77h40v57h77v-134h-117zm-154-223h41v79h-41zm40-235h132v212h-132zm132-152h40v53h-40zm369-56h24v11h-24zm0-23h54v23h-54zm153-99h39v39h-39zm39 0h57v39h-57zm0 39h57v41h-57zm77 41h39v19h-39zm309 249v315h-23v-65h-22v-37h-109v-211l154-2zM3787 942v467h197v-116h47v116h195V943l-439-1zm-925 1416s-3 82-25 152l167 47 18-76-7-6v-54l-42-3 3-55zm-64-333l12 27 71-28-12-30-71 31zm141-261h18v22h-18zm194-37h26v11h-26zm1577 542h41v188h-41zm60 10v9h65v120h-46v-8h-38v-121h19z"
            />
            <path
              className="ac-3-cls-6"
              d="M4710 2621h40v-140h85v-73h-46v49h-79v164zm152-388v193h-27v26h112v-219h-85zm-634-504h482v893h-482zm607-1h111v87h-111z"
            />
            <path
              className="ac-3-cls-6"
              d="M4945 1721h96v19h29v75h-125v-94zm422-33h117v40h-117zm32-252h84v252h-84zm-687-493v466h197v-122h47v25h-15v97h211V943h-440zm204 508h27v49h-27z"
            />
            <path fill="#d1d3d4" d="M4943 1517v-81h253v79l-65-65h-121l-67 67z" />
            <path
              className="ac-3-cls-5"
              d="M4967 1492l-24 25v-81h37m18 0h144m17 0h37v79l-24-24m-13-13l-28-28h-121l-29 28"
            />
            <path className="ac-3-cls-6" d="M4968 1687v-32h54v-13h95v12h55v33h-204z" />
            <path className="ac-3-cls-5" d="M5196 1633v54" />
            <path className="ac-3-cls-6" d="M5333 1600h66v88h-66z" />
          </g>
          <g id="Stairs-lifts-escalators">
            <path
              className="ac-3-cls-8"
              d="M4428 1346v45h84v-44l-84-1zm60-338h47v87h-47zm-984 340h69v45h-69zm-26-340h47v88h-47zM1921 755h-33v10h-13v-92h46v82zm-583 1255l-19 62 58 16 18-58zm460-499l24 54 56-23-21-57a596 596 0 0 0-59 26zm756-502h48v85h-48zm24 338h83v47h-83zm-119 140l-19 56 54 22 25-54s-21-12-60-24zm470 547l17 59 57-16s-5-25-18-63zm100 369h45v76h-45zm149 4h47v76h-47zm0-248h86v48h-86zm-221-418h46v73h-46zm222 0h45v73h-45zm659 422h73v45h-73zm27 245v74h45v-74h-45zm240-1h43v76h-43zm0-246h72v45h-72zm-242-420h46v73h-46zm242 1h45v72h-45zm453-975h46v102h-46zm789 217h47v112h-47zm7 360h83v48h-83zm-484 107h47v49h-47zm200 290h49v74h-49zm-307 422h70v45h-70z"
            />
            <ellipse className="ac-3-cls-8" cx={2367} cy={693} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={2333} cy={694} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={2298} cy={693} rx={19} ry={18} />
            <path
              className="ac-3-cls-8"
              transform="rotate(-180 2415 719)"
              d="M2392 673h46v91h-46z"
            />
            <ellipse className="ac-3-cls-8" cx={1410} cy={1991} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={1920} cy={1528} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={2398} cy={1529} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={2912} cy={1995} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={3202} cy={2136} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={3882} cy={2136} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={4130} cy={2136} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={3244} cy={1796} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={2652} cy={977} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={2652} cy={1010} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={3579} cy={976} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={3579} cy={1009} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={4434} cy={976} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={4434} cy={1009} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={4693} cy={800} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={4693} cy={833} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={5464} cy={972} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={5464} cy={1005} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={5184} cy={1777} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={4815} cy={2136} rx={19} ry={18} />
            <ellipse className="ac-3-cls-8" cx={4170} cy={1796} rx={19} ry={18} />
            <path
              className="ac-3-cls-8"
              d="M3984 1293v-57s2-20 23-20 24 19 24 19v58zm47-350v77s-3 20-24 20-24-19-24-19v-78zm-972 439v-57s3-20 23-20 24 19 24 19v58zm47-439v77s-2 20-23 20-24-19-24-19v-78zm1803 344v-52s2-19 23-19 24 18 24 18v53zm47-344v77s-3 20-24 20-24-19-24-19v-78zm-167 797h46v75h-46z"
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

export default AC_3;
