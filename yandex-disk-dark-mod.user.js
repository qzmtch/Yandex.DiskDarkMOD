// ==UserScript==
// @name          Yandex.Disk Dark MOD
// @namespace     http://userstyles.org
// @description	  Update 20.01.2022 (fix)
// @author        QZMTCH
// @homepage      https://userstyles.org/styles/194676
// @include       http://disk.yandex.ru/*
// @include       https://disk.yandex.ru/*
// @include       http://*.disk.yandex.ru/*
// @include       https://*.disk.yandex.ru/*
// @include       http://docviewer.yandex.ru/*
// @include       https://docviewer.yandex.ru/*
// @include       http://*.docviewer.yandex.ru/*
// @include       https://*.docviewer.yandex.ru/*
// @include       http://yadi.sk/*
// @include       https://yadi.sk/*
// @include       http://*.yadi.sk/*
// @include       https://*.yadi.sk/*
// @include       http://disk.yandex.com/*
// @include       https://disk.yandex.com/*
// @include       http://*.disk.yandex.com/*
// @include       https://*.disk.yandex.com/*
// @include       http://docviewer.yandex.com/*
// @include       https://docviewer.yandex.com/*
// @include       http://*.docviewer.yandex.com/*
// @include       https://*.docviewer.yandex.com/*
// @run-at        document-start
// @version       0.20220120192450
// ==/UserScript==
(function() {var css = [
	".header, .root, html, .header, .journal-filter, .publish-resource-tumbler, .sidebar_fixed, .listing-item_selected, .folder-content__header, .PSHeader, .PSHeader_theme_light, .root__content-wrap",
	"{",
	"    background:#111!important;",
	"}",
	"",
	"html:not(.m-mobile) .root:not(.root_docs-view) .root__content:not(.root__content_with-widgets) .root__content-wrap:before{",
	"    background:none;",
	"}",
	"",
	".journal-filter{",
	"box-shadow: 0 0 25px 15px #111;",
	"}",
	"svg [fill=\"#000\"], svg [fill=\"currentColor\"]",
	"{",
	"    fill:#fff;",
	"}",
	".ns-view-app ,  body, .crumbs_bg_misc, .crumbs_bg_misc .crumbs__item, .page__content, .b-dialog-upload__list{",
	"    background: none;",
	"}",
	".page__content",
	"{",
	"box-shadow: 0 0 0 0 rgba(0,0,0,.1);",
	"}",
	".client-listing:not(.client-listing_loading):not(.client-listing_stub):not(.client-listing_type_trash), .burger-sidebar__sidebar, .icons-services-menu__all-services-link, .listing-wrap, .dialog-fast-scroll, .textinput__control, .b-import-social__inner, .menu__item:hover, .client-listing:not(.client-listing_loading):not(.client-listing_stub).client-listing_type_trash, .page:before, .listing-search-stub__item:hover, .create-resource-popup-with-anchor__create-item:focus, .create-resource-popup-with-anchor__create-item:hover, .gnc-notifications-item__inner, .gnc-notification-center button, .content_other, .content-inner.root, .content-inner_white, .root__content-inner_page_listing, .root__content-inner_page_photo, .desktop-fast-scroll__year-title, .root__content-inner_page_albums, .root__content-inner_page_album, .ns-view-notifications, .folder-content__header-shadow, .folder-content__header-shadow-overlay, .LeftColumn",
	"{",
	"    background:#222!important;",
	"}",
	".button2_view_default.button2_hovered_yes.button2_tone_grey-blue:before, .button2_view_default.button2_tone_grey-blue:before, .info-space__indicator, .journal-group:hover .journal-group__inner, ._nb-popup, ._nb-island-modal-popup ._nb-popup-title, .menu_view_default.menu_tone_default.menu_theme_normal, .menu_view_default.menu_tone_default.menu_theme_normal .menu__item, .button2_theme_raised:before, .icons-services-menu__service-link.link_hovered_yes, .popup-account__accounts, .popup-account__menu",
	"{",
	"    background:#333;",
	"}",
	".modal_theme_normal .modal__content, .popup2_theme_normal:before, .user2__menu-footer, .button2_view_default.button2_tone_default.button2_theme_raised:before, .menu_theme_normal, .button2_view_classic.button2_theme_normal:before, .gnc-notification-header, .gnc-notification-center, .gnc-settings__form, .gnc-settings",
	"{",
	"    background:#333!important;",
	"}",
	".dialog-fast-scroll",
	"{",
	"    border-color: #222;",
	"}",
	".button2_theme_clear, .search-form__input.textinput_view_default.textinput_theme_normal .textinput__icon.ufo-icon, h1, .textinput__control, .b-import-social__title, .b-import-social__subtitle, .listing__group-title, .user-account, .journal-cluster__title, .select2, .button2_size_s .button2__text, .publish-resource-tumbler__input, .crumbs__link, .b-space__buy-space-link, .b-packages-received__desc, .listing-search-stub__caption, .listing-search-stub__item, .resources-info-dropdown__content, .popup-account__desc, .popup-account__link, .crumbs2__item-inner, .create-resource-popup-with-anchor__title, .gnc-notifications-item__content, .gnc-notification-message__span, .gnc-notification-center button, .file-name, .button2_view_default.button2_tone_default.button2_theme_raised, .b-item-upload__part-smart, .PSHeaderService-Text, .grid-cluster-title__title-date, .desktop-fast-scroll__year-title, .albums2__subheader, .navigation__link_favorite, .Link_theme_dark",
	"{",
	"     color: #fff!important;",
	"}",
	".PSHeaderService, .PSHeaderService_active, .PSHeader-Service",
	"{",
	"    background-color: #333;",
	"}",
	".PSHeaderService_active.PSHeaderService_theme_light {",
	"    background-color: #5c5d5e;",
	"}",
	".navigation__link_current:after, .b-item-upload__fill",
	"{",
	"    background-color: #f8f8f86b;",
	"}",
	".listing-item, p, .icons-services-menu__service-link, .dialog-fast-scroll__group, .dialog__title, .b-import-social__other, .user2__add-account.user-account, .user2__menu .menu__item_type_link, .journal-group__container, .journal-filter__before, .b-tree__name, .menu_theme_normal .menu__item, .b-select-folder .b-select-folder__title_inner, .button2_size_m .button2__icon_side_left~.button2__text, .b-space, .footer__link:not(:hover), .create-resource-button__text, .relative-date, .gnc-settings__setting-name, .journal-group-item__name, .client-confirmation-dialog__title, .client-confirmation-dialog__content, .Button2, .Link, .listing-scans-stub__title",
	"{",
	"    color: #989898!important;",
	"}",
	".resources-action-bar:not(.resources-action-bar_visible), .link_theme_dark, .cluster-slice-title__part, ._nb-small-pseudo-button",
	"{",
	"    color:#fff !important;",
	"}",
	"._nb-toggler-text, .info-space__text",
	"{",
	"        color:black !important;",
	"}",
	"::-webkit-input-placeholder {color:#989898!important;}",
	"::-moz-placeholder          {color:#989898!important;}/* Firefox 19+ */",
	":-moz-placeholder           {color:#989898!important;}/* Firefox 18- */",
	":-ms-input-placeholder      {color:#989898!important;}",
	"",
	".crumbs2__fade {",
	"    background-image: linear-gradient(90deg,#222,hsla(0,0%,100%,0));",
	"}",
	"",
	".tabs__item_current:after",
	"{",
	"    background-color: rgba(0, 0, 0, 0.17);",
	"}",
	"._nb-small-pseudo-button",
	"{",
	"    box-shadow: inset 0 0 0 1px #999",
	"}",
	"._nb-small-pseudo-button:hover",
	"{",
	"    box-shadow: inset 0 0 0 1px #fff",
	"}",
	".icons-services-menu_fit-to-height .icons-services-menu__items-wrap:after",
	"{",
	"    background-image: linear-gradient(0,#222,rgba(248,248,248,0));",
	"}",
	".icons-services-menu_fit-to-height .icons-services-menu__items-wrap:before",
	"{",
	"    background-image: linear-gradient(180deg,#222,rgba(248,248,248,0));",
	"}",
	".sidebar__navigation:before",
	"{",
	"    background-image: linear-gradient(180deg,#111,rgba(248,248,248,0));",
	"}",
	".sidebar__navigation:after ",
	"{",
	"    background-image: linear-gradient(0,#111,rgba(248,248,248,0));",
	"}",
	".nb-s-view-list-icon, .textinput_view_default.textinput_theme_normal .textinput__clear, .button2_size_s .button2__icon.icon_type_arrow",
	"{",
	"    -webkit-filter: invert(100%)!important;",
	"}",
	"::-webkit-scrollbar,",
	"::-webkit-scrollbar-corner {",
	"    background: #000;",
	"    width: 14px;",
	"    height: 14px;",
	"}",
	"::-webkit-scrollbar-button {",
	"    display: none;",
	"}",
	"::-webkit-scrollbar-thumb {",
	"    background: #333;",
	"}",
	"::-webkit-scrollbar-thumb:not(:active):hover {",
	"    background: #383838;",
	"}",
	"::-webkit-scrollbar-thumb:active,",
	"::-webkit-scrollbar-thumb:hover:active {",
	"    background: #5c5c5c;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
