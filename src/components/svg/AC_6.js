import React, { Component } from 'react';
import './floor_styles/AC_6.css';
import './floor_styles/floorBorder.css';
import infoJson from '../../assets/floor_info/AC_6.json';
import Tag from '../Tag';

class AC_6 extends Component {
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
        <svg id="AC-6" viewBox="0 0 5700 2900">
          <defs />
          <g id="AC-6-BG" className="floor-bg">
            <path
              d="M3268 2631a10 10 0 0 1-10-10v-127h-76a10 10 0 0 1-10-10v-368a10 10 0 0 1 10-10h76v-284h-343l-8 7c9 14 28 47 49 89 36 72 60 136 71 189h52a10 10 0 0 1 10 10v365a10 10 0 0 1-10 10h-45l-18 71a10 10 0 0 1-13 7l-167-48a10 10 0 0 1-7-13c1-1 36-116 21-267a678 678 0 0 0-287-489 715 715 0 0 0-408-133c-103 0-189 25-243 45-58 22-93 44-93 44a10 10 0 0 1-1 1c-1 0-79 38-160 125a704 704 0 0 0-185 431 10 10 0 0 1-10 9h-1l-180-12a10 10 0 0 1-10-10c0-2 1-32 11-82a967 967 0 0 1 59-198 916 916 0 0 1 424-459l-7-16a10 10 0 0 1-1-4V953l-35-1a10 10 0 0 1-10-10l1-187a10 10 0 0 1 10-10h132v-86a10 10 0 0 1 10-10h159a10 10 0 0 1 10 10v3h231v-2a10 10 0 0 1 10-10h161a10 10 0 0 1 10 10l1 86 848 1V604a10 10 0 0 1 10-10h487a10 10 0 0 1 10 10v146h725V604a10 10 0 0 1 10-10h181a10 10 0 0 1 10 10v150h752a10 10 0 0 1 10 10v329a10 10 0 0 1-10 10h-142v192l142-2a10 10 0 0 1 10 10v425a10 10 0 0 1-10 10h-258v78a10 10 0 0 1-10 10h-451l-3 276h78a10 10 0 0 1 10 10l1 369a10 10 0 0 1-10 10l-78 1 2 127a10 10 0 0 1-10 10h-564a10 10 0 0 1-10-10v-128h-72a10 10 0 0 1-10-10v-367a10 10 0 0 1 10-10h78l-4-280-342 1v278l78 1a10 10 0 0 1 10 10v368a10 10 0 0 1-10 10l-76-1v130a10 10 0 0 1-10 10z"
              fill="#e4deda"
            />
            <path className="floor-bg-border"
              d="M3793 604v156h745V604h181v160h762v329h-152v212l152-2v425h-268v88h-461l-3 296h88l1 369-88 1 2 137h-564v-138h-82v-367h88l-4-300-362 1v298l88 1v368l-86-1v140h-562v-137h-86v-368h86v-304h-356l-18 14s100 161 125 291h60v365h-52l-21 78-167-48s146-465-271-767a723 723 0 0 0-413-135c-202 0-341 91-341 91s-317 148-351 564l-181-12s17-491 497-735l-11-24V943l-45-1 1-187h142v-96h159v13h251v-12h161l1 96h868V604h487m0-20h-487a20 20 0 0 0-20 20v132h-828l-1-76a20 20 0 0 0-20-20h-161a20 20 0 0 0-19 12h-213a20 20 0 0 0-19-13h-159a20 20 0 0 0-20 20v76h-122a20 20 0 0 0-20 20l-1 187a20 20 0 0 0 20 20l25 1v531a20 20 0 0 0 2 8l3 7a928 928 0 0 0-421 460 977 977 0 0 0-59 200c-9 51-11 82-11 83a20 20 0 0 0 19 21l181 12h1a20 20 0 0 0 20-19 694 694 0 0 1 183-425c80-85 155-122 156-122a20 20 0 0 0 3-1s34-22 92-44c53-20 137-44 238-44 140 0 275 44 402 131a660 660 0 0 1 283 481 772 772 0 0 1-4 189c-7 46-16 75-16 75a20 20 0 0 0 14 26l167 47a20 20 0 0 0 25-14l16-63h37a20 20 0 0 0 20-20v-365a20 20 0 0 0-20-20h-44c-12-52-35-114-70-183-18-36-34-65-44-82h327v264h-66a20 20 0 0 0-20 20v368a20 20 0 0 0 20 20h66v117a20 20 0 0 0 20 20h562a20 20 0 0 0 20-20v-120l66 1a20 20 0 0 0 20-20v-368a20 20 0 0 0-20-20l-68-1v-258l322-1 4 260h-68a20 20 0 0 0-20 20v367a20 20 0 0 0 20 20h62v118a20 20 0 0 0 20 20h564a20 20 0 0 0 20-20l-1-117 67-1a20 20 0 0 0 20-20l-1-369a20 20 0 0 0-20-20h-68l3-256h441a20 20 0 0 0 20-20v-68h248a20 20 0 0 0 20-20v-425a20 20 0 0 0-20-20l-132 2v-172h132a20 20 0 0 0 20-20V764a20 20 0 0 0-20-20h-742V604a20 20 0 0 0-20-20h-181a20 20 0 0 0-20 20v136h-705V604a20 20 0 0 0-20-20z"
              fill="#6d6e71"
            />
          </g>
          <g id="Rooms">
            <path
              className="ac-6-cls-3"
              d="M5151 1408v-77h80v-81h60v158h-140zm140-62h38v62h-38zM1724 755h82v64h-82zm-1 64h63v40h-63z"
            />
            <path
              className="ac-6-cls-3"
              d="M1724 858h82v40h-82zm-1 40h82v44h-82zm141-20h139v64h-139zm139 0h40v64h-40zm40 0h40v64h-40zm40 0h39v64h-39zm-277-123h39v64h-39zm39 0h81v64h-81zm111-96h69v76h-69zm8 96h61v45h-61zm61-19h38v64h-38zm0-64h38v64h-38zm38 27h39v101h-39zm39 60h79v41h-79zm79 0h55v41h-55zm55-87h44v48h-44z"
            />
            <path
              className="ac-6-cls-3"
              d="M2236 800v-41h-134v-60h-39v-27h173v48h44v80h-18"
            />
            <path className="ac-6-cls-4" d="M2236 741v-21" />
            <path
              className="ac-6-cls-3"
              d="M2200 878h80v64h-80zm80-41h38s31 14 61 0h40v105h-139zm99-81h40v44h-40zm40 0h39v64h-39zm39 0h39v64h-39z"
            />
            <path className="ac-6-cls-3" d="M2496 756h81v64h-81z" />
            <path
              className="ac-6-cls-3"
              d="M2576 756h39v64h-39zm39 0h81v64h-81zm81 0h39v64h-39zm39 0h78v64h-78zm78 0h40v64h-40zm-394 122h39v64h-39zm39 0h39v64h-39z"
            />
            <path
              className="ac-6-cls-3"
              d="M2496 878h61v64h-61zm112 148h86v66h-86zm85-127h60v43h-60zm60 0h60v43h-60zm60 0h56v43h-56zm91 534h78v79h-78zm0 79h78v78h-78zm0 97h78v78h-78z"
            />
            <path
              className="ac-6-cls-3"
              d="M2981 1433h77v79h-77zm0 79h77v78h-77zm77-20h60v60h-60zm0 60h60v38h-60zm20-119h39v39h-39zm-97 176h136v78h-136zm156-19h96v97h-96z"
            />
            <path className="ac-6-cls-3" d="M3232 1590h77v97h-77zm-95-157h96v119h-96z" />
            <path
              className="ac-6-cls-3"
              d="M3232 1433h77v119h-77zm77 0h97v119h-97zm97 0h77v119h-77zm-97 119h97v135h-97zm97 0h77v135h-77zm77-119h192v196h-192zm193 0h192v196h-192zm-193 196h133v58h-133zm250 0h136v58h-136zm-117 0h117v58h-117zm-496 97h66v86h-66zm188 0h38v58h-38z"
            />
            <path
              className="ac-6-cls-3"
              d="M3308 1783h38v60h-38zm38-57h39v39h-39zm0 77h39v40h-39zm40-20h38v60h-38zm19-57h58v39h-58zm19 39h39v78h-39zm-116 78h78v78h-78zm78 0h77v78h-77zm77-117h77v117h-77zm0 117h77v78h-77zm-77-78h-40v38h40v-20m173-57v117h154v-98h-39v-19h-115z"
            />
            <path
              className="ac-6-cls-3"
              d="M3791 1726h-117v19h39v98h78v-117zm-232 117h78v78h-78zm78 0h76v78h-76zm76 0h78v78h-78zm-19 115h97v138h-97zm-96 0h96v79h-96z"
            />
            <path className="ac-6-cls-3" d="M3598 2036h96v60h-96zm-39-78h39v59h-39z" />
            <path className="ac-6-cls-3" d="M3559 2016h39v80h-39z" />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 3357 2027)"
              d="M3308 1958h97v138h-97z"
            />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 3453 1997)"
              d="M3405 1958h96v79h-96z"
            />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 3453 2066)"
              d="M3405 2036h96v60h-96z"
            />
            <path className="ac-6-cls-3" d="M3694 2309h97v136h-97z" />
            <path className="ac-6-cls-3" d="M3599 2309h96v77h-96zm0 77h96v58h-96z" />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 3357 2377)"
              d="M3309 2309h97v136h-97z"
            />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 3453 2348)"
              d="M3406 2309h95v77h-95z"
            />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 3453 2416)"
              d="M3406 2386h95v58h-95z"
            />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 3520 1987)"
              d="M3501 1958h39v59h-39z"
            />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 3520 2036)"
              d="M3501 2016h39v40h-39z"
            />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 3520 2076)"
              d="M3501 2056h39v40h-39z"
            />
            <path
              className="ac-6-cls-3"
              d="M3309 2114h77v77h-77zm77 0h77v77h-77zm-77 78h77v77h-77zm77 0h77v77h-77zm250-78h77v77h-77zm77 0h77v77h-77zm-77 78h77v77h-77zm77 0h77v77h-77zm-249-78h38v77h-38zm0 78h76v77h-76z"
            />
            <path className="ac-6-cls-3" d="M3501 2114h39v77h-39zm58 40h37v57h-37z" />
            <path
              className="ac-6-cls-3"
              d="M3559 2114v40h37v57h40v-97h-77zm0 97h77v58h-77zm-58 98h39v39h-39zm0 39h39v58h-39zm0 58h39v39h-39zm59 0h39v39h-39zm0-38h39v38h-39zm-1-59h40v39h-40zm-58 155h39v59h-39zm58 0h40v59h-40zm-250 0h97v158h-97z"
            />
            <path
              className="ac-6-cls-3"
              d="M3405 2464h96v158h-96zm194 0h193v158h-193zm-59 19v39h-39v38h19v61h59v-61h20v-38h-40v-39m-377-274h76v80h-76zm667 0h67v81h-67zm257 0h67v80h-67zm664 0h67v80h-67zm-865-776h193v254h-193zm193 0h77v98h-77zm0 98h77v38h-77zm0 38h77v118h-77z"
            />
            <path
              className="ac-6-cls-3"
              d="M4174 1433h192v254h-192zm192 0h155v195h-155zm0 196h58v59h-58zm58 0h38v59h-38zm38 0h115v59h-115zm116 0h39v59h-39z"
            />
            <path
              className="ac-6-cls-3"
              d="M4616 1629h57v59h-57zm-96-196h153v90h-153zm0 90h153v105h-153zm-498 216h86v75h-86zm209-13h39v39h-39zm39 0h38v39h-38zm38 0h39v39h-39zm39 0h39v39h-39zm39 0h38v78h-38zm76 0h38v78h-38zm-76 78h77v39h-77zm-155-39h77v78h-77zm77 0h78v78h-78zm-77 78h77v78h-77zm77 0h78v78h-78zm78 0h77v78h-77zm-155 116h97v136h-97zm97 0h96v136h-96zm96 0h38v58h-38zm0 58h38v40h-38zm0 40h38v38h-38zm96-331h96v78h-96zm96 0h38v117h-38zm38 0h58v117h-58zm-38 117h96v78h-96zm-134 78h40v40h-40zm0 40h40v57h-40z"
            />
            <path
              className="ac-6-cls-3"
              d="M4482 2017h40v78h-40zm0-174v78h39v20h95v-98h-134z"
            />
            <path
              className="ac-6-cls-3"
              d="M4521 1941h95v154h-95zm95 18h96v58h-96zm0 58h96v78h-96zm-385 98h77v78h-77zm0 78h77v78h-77zm77-78h77v78h-77zm0 78h77v78h-77zm77-78h77v78h-77zm0 78h77v78h-77zm97-78h39v39h-39zm0 39h39v58h-39zm0 58h39v59h-39z"
            />
            <path
              className="ac-6-cls-5"
              d="M4462 2477h20v45l230 1v21l-211-1v78h-58v-78h-19v-21h38v-45z"
            />
            <path
              className="ac-6-cls-3"
              d="M4520 2115h96v78h-96zm0 78h96v78h-96zm96-78h96v156h-96zm-385 192h96v79h-96zm0 79h96v59h-96zm96-79h97v138h-97zm97 0h39v39h-39zm0 40h39v59h-39zm0 59h39v39h-39z"
            />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 4568 2376)"
              d="M4520 2308h97v138h-97z"
            />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 4501 2327)"
              d="M4482 2308h39v39h-39z"
            />
            <path className="ac-6-cls-5" d="M4231 2522h96v99h-96z" />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 4501 2376)"
              d="M4482 2347h39v59h-39z"
            />
            <path
              className="ac-6-cls-3"
              transform="rotate(-180 4501 2426)"
              d="M4482 2406h39v39h-39z"
            />
            <path className="ac-6-cls-3" d="M4617 2308h96v137h-96zm-386 156h96v58h-96z" />
            <path className="ac-6-cls-5" d="M4327 2522h97v99h-97z" />
            <path
              className="ac-6-cls-3"
              d="M4327 2464h97v58h-97zm97 0h39v58h-39zm58 0h37v58h-37zm37 0h39v58h-39zm39 0h38v58h-38zm38 0h39v58h-39zm39 0h77v58h-77zm-116 79h78v78h-78zm78 0h38v78h-38zm38 0h77v78h-77zm77-6h39v85h-39z"
            />
            <path
              className="ac-6-cls-4"
              d="M4519 2543h-18v78h-58v-78h-19v78h-97v-78m-96 0v78h96"
            />
            <path
              className="ac-6-cls-3"
              d="M4944 1726h72v89h-72zm73 0h58v89h-58zm-305-293v255h145v-78h107v-163h-46v52h-46v-50h-21v-16h-139z"
            />
            <path
              className="ac-6-cls-3"
              d="M4857 1610h107v78h-107zm107-177h132v117h-132zm56 117h77v39h-77zm-56 0h55v138h-55zm56 39h77v98h-77zm95-156h117v117h-117z"
            />
            <path
              className="ac-6-cls-5"
              d="M3307 1112v-77h60v-96h-60v-20h60V801h58v20h38v-61h20v61h114v78h-75v38h-78v98h40v77h-177z"
            />
            <path
              className="ac-6-cls-3"
              d="M5115 1550h117v138h-117zm116-117h115v117h-115z"
            />
            <path
              className="ac-6-cls-3"
              d="M5231 1550h115v138h-115zm134-117h117v117h-117zm0 117h117v138h-117zM3307 760h60v60h-60zm0 60h60v58h-60zm0 58h60v41h-60zm0 61h60v57h-60zm0 57h60v39h-60zm60-236h58v41h-58zm58 0h39v61h-39zm58 0h39v61h-39zm39 0h38v61h-38z"
            />
            <path className="ac-6-cls-3" d="M3558 760h39v61h-39zm-114 177h40v40h-40z" />
            <path
              className="ac-6-cls-5"
              d="M3615 1328h80v-120h39V820h-68v58h-69v21h-19v38h117v39h-80v352zm-228-216v38h-40v79h-40v19h30v159h108v-61h39v-79h-58v-117h58v-38h-97z"
            />
            <path
              className="ac-6-cls-3"
              d="M3444 977h40v57h-40zm153-217h69v118h-69zm69 0h67v60h-67zm68 0h59v80h-59zm0 80h59v38h-59zm0 38h59v61h-59zm0 61h59v38h-59zm-119-2h41v39h-41zm41 0h40v39h-40zm78 40h59v38h-59zm0 38h59v39h-59zm0 39h59v39h-59z"
            />
            <path className="ac-6-cls-3" d="M3734 1092h59v39h-59zm0 39h59v39h-59z" />
            <path
              className="ac-6-cls-3"
              d="M3734 1169h59v39h-59zm-119 39h60v37h-60zm0 37h60v62h-60zm80-37h98v37h-98zm0 37h58v44h-58zm0 44h58v40h-58zm-80 39h50v79h-50z"
            />
            <path
              className="ac-6-cls-3"
              d="M3665 1328h88v79h-88zm-358-216h80v38h-80zm0 38h40v79h-40zm119 0h59v39h-59zm0 40h59v39h-59zm0 39h59v38h-59zm18 117h39v61h-39z"
            />
            <path className="ac-6-cls-4" d="M3425 1112h-118V760h290v139h-75" />
            <path
              className="ac-6-cls-4"
              d="M3444 1112h40V937h38m-215 292v19h30v159h146v-79m1-21v-195m131 96V937h-37"
            />
            <path
              className="ac-6-cls-3"
              d="M3530 1026h85v67h-85zm297-239h39v53h-39zm39-27h57v61h-57z"
            />
            <path
              className="ac-6-cls-3"
              d="M3827 840v99h96V821h-57v19h-39zm96-80h79v139h-79zm79 0h79v139h-79z"
            />
            <path
              className="ac-6-cls-3"
              d="M4080 760h149v139h-149zm150 80h40v59h-40zm78-80h39v61h-39zm39 0h49v61h-49zm49 0h47v61h-47zm47 0h39v61h-39zm39 0h79v61h-79zm19 61h60v40h-60zm0 40h60v38h-60z"
            />
            <path
              className="ac-6-cls-3"
              d="M4470 899h-200v-59h-40v-80h78v61h193v78m60-139h36v61h-36zm36 0h52v39h-52z"
            />
            <path
              className="ac-6-cls-5"
              d="M4649 760h44v17h-14v122h36v40h-41v134h-77v39h-19v215h77v-20h19v38h-136v-310h40v-96h-17v-40h88V760z"
            />
            <path
              className="ac-6-cls-3"
              d="M4679 847h36v52h-36zm-118 52v-78h36v-21h52v99h-88zm-331 40h98v98h-98zm0 193h59v39h-59zm0 39h59v39h-59zm0 39h98v28h-98z"
            />
            <path
              className="ac-6-cls-3"
              d="M4230 1237h141v171h-141zm0-200v95h59v78h39v-173h-98zm118-98h59v38h-59zm0 38h59v77h-59zm0 77h59v39h-59z"
            />
            <path
              className="ac-6-cls-3"
              d="M4348 1092h59v40h-59zm0 40h59v37h-59zm0 37h59v43h-59zm59-143h84v66h-84zm131 319h40v63h-40zm136-38h39v58h-39zm-96 38h39v63h-39z"
            />
            <path className="ac-6-cls-3" d="M4616 1345h39v63h-39zm-38-78h39v59h-39z" />
            <path
              className="ac-6-cls-3"
              d="M4616 1267h39v59h-39zm39 0h57v40h-57zm0 78h19v20h38v43h-57v-63zm-77-233h135v155h-135zm19-39h115v39h-115zm77-76h39v76h-39zm0-58h39v58h-39zm41-175h170v139h-170z"
            />
            <path
              className="ac-6-cls-4"
              d="M4561 939h17v96h-40v272m174-368h3v-40h-36V777h14v-17h-44v40"
            />
            <path
              className="ac-6-cls-3"
              d="M4885 764h38v59h-38zm38 0h39v59h-39zm39 0h58v79h-58zm58 0h69v37h-69zm0 37h40v41h-40z"
            />
            <path
              className="ac-6-cls-3"
              d="M4885 823v80h135v-60h-58v-20h-77zm204-59h33v37h-33zm33 0h34v37h-34zm-102 139h136V801h-96v42h-40v60zm136-139h170v139h-170z"
            />
            <path
              className="ac-6-cls-3"
              d="M5325 764h43v83h-43zm-174 175h62v38h-62zm0 38h62v39h-62zm80-38h60v38h-60zm0 38h60v96h-60zm-80 39h80v58h-80zm0 58h140v176h-140zm0 176h80v38h-80zm0 38h80v42h-80z"
            />
            <path className="ac-6-cls-5" d="M5325 846h44v-82h66v65h46v120h-156V846z" />
            <path className="ac-6-cls-3" d="M5435 764h46v66h-46z" />
            <path
              className="ac-6-cls-4"
              d="M5325 935v-89h44v-82h66v65h46v120h-46m-24 0h-86"
            />
            <path className="ac-6-cls-3" d="M5394 1019h87v73h-87z" />
          </g>
          <g id="Empty">
            <path
              className="ac-6-cls-6"
              d="M1779 1518s-434 174-497 735l181 12c-3-38 57-587 631-652 0 0 372-37 632 284 0 0 199 209 113 615l167 48 21-78h52v-365h-60s-36-166-125-291l18-14h13v-125h-21v-254h18v-26h-53V942h-176v149h-135V942h-790v552z"
            />
            <path
              className="ac-6-cls-6"
              d="M2925 1761h39v51h-39zm23-35h62v13h-62zm62 0h111v87h-111zm176 0h82v13h-82zm-4 563h92v120h-92zm49 120h43v49h-43zm37 94h41v118h-41zm233 57h19v61h-19zm78 0h20v61h-20zm246-151h43v49h-43zm0-119h91v119h-91zm0-57h24v56h-24zm0-80h17v56h-17zm922 256h43v49h-43zm0-119h91v119h-91zm0-57h24v56h-24zm0-80h17v56h-17z"
            />
            <path
              className="ac-6-cls-6"
              transform="rotate(-180 4176 2433)"
              d="M4154 2409h43v49h-43z"
            />
            <path
              className="ac-6-cls-6"
              transform="rotate(-180 4151 2349)"
              d="M4106 2290h91v119h-91z"
            />
            <path
              className="ac-6-cls-6"
              transform="rotate(-180 4185 2261)"
              d="M4173 2233h24v56h-24z"
            />
            <path
              className="ac-6-cls-6"
              transform="rotate(-180 4188 2181)"
              d="M4180 2153h17v56h-17z"
            />
            <path
              className="ac-6-cls-6"
              d="M3256 2153h18v56h-18zm569-427h89v13h-89zm89 0h109v88h-109zm833 1h89v13h-89zm89 0h109v88h-109z"
            />
            <path
              className="ac-6-cls-6"
              d="M4022 1726h66v13h-66zm86 0h84v13h-84zm316 0h38v78h-38zm77 0h19v78h-19zm-20 78h135v39h-135zm593-78h50v13h-50zm81 1h58v29h-58zm235-39h91v42h-91zm-38-299h83v19h-83zm83-85v41h23v63h23v-105l-46 1zm-83 25h68v17h-68zm-23-326h18v90h-18zm0-54h65v33h-65zm-617-10h439v469h-439zm-305 16h14v71h-14zm0-16h45v16h-45zm84 0h47v44h-47zm47 0h40v96h-40zm-131 153h131v211h-131zm23 237h83v15h-83zm-23 60h106v19h-106zm-614-450v306h-40v162h246v-101h23v101h208V939h-437zm-309 153h131v215h-131zm25 236h82v14h-82zm-26 61h107v18h-107zm-614-633v651h468v-159h-30V756h-438zm-311 186h50v39h-50zm88 0h31v13h-31zm31 0h16v83h-16zm-721-206h69v19h-69zm-90 9h59v10h-59zm47-86h43v66h-43zm367 77h67v20h-67zm99 10h57v10h-57z"
            />
            <path
              className="ac-6-cls-6"
              d="M3306 604h487v155h-487zm178 333h48v45h-48zm85 0h47v19h-47z"
            />
            <path
              className="ac-6-cls-6"
              d="M3601 955h15v71h-15zm1146 808h41v53h-41zM4538 604v156h177v4h4V604h-181zm334 845h45v50h-45z"
            />
          </g>
          <g id="Stairs-lifts-escalators">
            <path
              className="ac-6-cls-7"
              d="M4407 1344v45h131v-45h-131zm-924-2h132v47h-132zm1-361h46v111h-46zM1866 659h48v86h-48zm3481 322h47v112h-47zm-18 365h129v43h-129z"
            />
            <ellipse className="ac-6-cls-7" cx={2367} cy={682} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={2333} cy={683} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={2298} cy={682} rx={19} ry={18} />
            <path
              className="ac-6-cls-7"
              transform="rotate(-180 2413 705)"
              d="M2390 663h46v83h-46z"
            />
            <ellipse className="ac-6-cls-7" cx={2658} cy={975} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={2658} cy={1007} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={3576} cy={976} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={3576} cy={1008} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={4437} cy={974} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={4437} cy={1006} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={4697} cy={795} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={4697} cy={828} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={5463} cy={968} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={5463} cy={1000} rx={19} ry={18} />
            <path
              className="ac-6-cls-7"
              d="M3065 1406v-92s3-23 24-23 24 23 24 23v92zm922-99v-72s2-23 23-23 24 23 24 23v72zm504-299v84h47v-57h39v-20h-39v-32h-47v25zm-1933-26h49v110h-49zm2516 757h50v77h-50zm-285 1h47v76h-47zm-25 424h74v45h-74zm25 245h48v73h-48z"
            />
            <path
              className="ac-6-cls-7"
              transform="rotate(-180 4142 2187)"
              d="M4105 2164h74v45h-74z"
            />
            <path
              className="ac-6-cls-7"
              transform="rotate(-180 4130 2445)"
              d="M4105 2409h48v73h-48z"
            />
            <ellipse className="ac-6-cls-7" cx={5189} cy={1776} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={4819} cy={2137} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={4134} cy={2137} rx={19} ry={18} />
            <path className="ac-6-cls-7" d="M3842 2164h74v45h-74zm26 245h48v73h-48z" />
            <path
              className="ac-6-cls-7"
              transform="rotate(-180 3219 2186)"
              d="M3182 2164h74v45h-74z"
            />
            <path
              className="ac-6-cls-7"
              transform="rotate(-180 3206 2445)"
              d="M3182 2409h48v73h-48z"
            />
            <ellipse className="ac-6-cls-7" cx={3886} cy={2137} rx={19} ry={18} />
            <ellipse className="ac-6-cls-7" cx={3209} cy={2138} rx={19} ry={18} />
          </g>
        </svg>
      </div>
    );
  }
}

export default AC_6;
