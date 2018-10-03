(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{446:function(e){e.exports={header:{h1:{marginRight:"20px",fontSize:"25px",display:"inline"},body:{paddingTop:0,paddingBottom:0},h2:{display:"inline",color:"#999"}},infoBody:{backgroundColor:"#eee",padding:"0px 5px",lineHeight:"2"}}},462:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Information=0]="Information",e[e.Warning=1]="Warning",e[e.Error=2]="Error"}(t.NotificationTypes||(t.NotificationTypes={}))},654:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(445),i=n(446);function a(e){return Object(r.withInfo)({inline:!0,source:!1,styles:i,text:e})}},655:function(e,t,n){n(229),n(656),e.exports=n(657)},657:function(e,t,n){"use strict";n.r(t),function(e){var t=n(85),r=n(653),i=n.n(r),a=n(227);Object(t.addDecorator)(a.withKnobs),Object(t.setAddon)(i.a);var s=n(678);Object(t.configure)(function(){n(736),s.keys().forEach(function(e){return s(e)})},e)}.call(this,n(329)(e))},678:function(e,t,n){var r={"./Button/Button.stories.tsx":679,"./Notification/Notification.stories.tsx":732};function i(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=678},679:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(85),a=n(680),s=n(684),o=n(227);i.storiesOf("Components/Button",e).addWithJSX("basic Button",s.wInfo("\n\n  ### Notes\n\n  This is a button\n\n  ### Usage\n  ~~~js\n  <Button\n    label={'Enroll'}\n    disabled={false}\n    onClick={() => alert('hello there')}\n  />\n  ~~~")(function(){return r.createElement(a.Button,{label:o.text("label","Enroll"),disabled:o.boolean("disabled",!1),onClick:function(){return alert("hello there")}})}))}).call(this,n(79)(e))},680:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);n(681);var i=function(){};t.Button=function(e){var t=e.label,n=e.onClick,a=e.disabled,s=void 0!==a&&a,o=s?"Button_disabled":"";return r.createElement("div",{className:"Button "+o,onClick:s?i:n},r.createElement("span",null,t))};try{(t.Button||Button).displayName="Button",(t.Button||Button).__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"this dictates what the button will say",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"this dictates what the button will do",name:"onClick",required:!0,type:{name:"() => void"}},disabled:{defaultValue:{value:"false"},description:"Disables onclick",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Button.tsx#Button"]={name:"Button",docgenInfo:(t.Button||Button).__docgenInfo,path:"src/Button/Button.tsx"})}catch(e){}},681:function(e,t,n){var r=n(682);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(454)(r,i);r.locals&&(e.exports=r.locals)},682:function(e,t,n){(e.exports=n(453)(!1)).push([e.i,"",""])},684:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(445),i=n(446);function a(e){return r.withInfo({inline:!0,source:!1,styles:i,text:e})}t.wInfo=a;try{(t.wInfo||a).displayName="wInfo",(t.wInfo||a).__docgenInfo={description:"",displayName:"wInfo",props:{padStart:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the start (left) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},padEnd:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the end (right) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!0,type:{name:"() => string"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:"Returns a string that contains the concatenation of two or more strings.\n@param strings The strings to append to the end of the string.",name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions):..."}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string an object that supports being matched against, and returns an array containing the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.\n@param matcher An object that supports being matched against.",name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray; (matcher: { [Symbol.match](string: string): RegExp..."}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nReplaces text in a string, using a regular expression or search string.\nReplaces text in a string, using an object that supports replacement within a string.\nReplaces text in a string, using an object that supports replacement within a string.\n@param searchValue A string to search for.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.\n@param searchValue A object can search for and replace matches within a string.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A object can search for and replace matches within a string.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, re..."}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\nFinds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.\n@param searcher An object which supports searching within a string.",name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): nu..."}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\nIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\nSplit a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.\n@param splitter An object that can split a string.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number): string[]; (splitter: { [Symbol.split](string: str..."}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"() => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"() => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!0,type:{name:"() => string"}},"__@iterator":{defaultValue:null,description:"Iterator",name:"__@iterator",required:!0,type:{name:"() => IterableIterator<string>"}},codePointAt:{defaultValue:null,description:"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\nthe String resulting from converting this object to a String.\nIf there is no element at that position, the result is undefined.\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",name:"codePointAt",required:!0,type:{name:"(pos: number) => number"}},includes:{defaultValue:null,description:"Returns true if searchString appears as a substring of the result of converting this\nobject to a String, at one or more positions that are\ngreater than or equal to position; otherwise, returns false.\n@param searchString search string\n@param position If position is undefined, 0 is assumed, so as to search all of the String.",name:"includes",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},endsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nendPosition – length(this). Otherwise returns false.",name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number) => boolean"}},normalize:{defaultValue:null,description:'Returns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\nReturns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"',name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string): string; }'}},repeat:{defaultValue:null,description:"Returns a String value that is made from count copies appended together. If count is 0,\nthe empty string is returned.\n@param count number of copies to append",name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nposition. Otherwise returns false.",name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},anchor:{defaultValue:null,description:"Returns an <a> HTML anchor element and sets the name attribute to the text value\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a <big> HTML element",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a <blink> HTML element",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a <b> HTML element",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a <tt> HTML element",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a <font> HTML element and sets the color attribute value",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a <font> HTML element and sets the size attribute value \nReturns a <font> HTML element and sets the size attribute value",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an <i> HTML element",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an <a> HTML element and sets the href attribute value",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a <small> HTML element",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a <strike> HTML element",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a <sub> HTML element",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a <sup> HTML element",name:"sup",required:!0,type:{name:"() => string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#wInfo"]={name:"wInfo",docgenInfo:(t.wInfo||a).__docgenInfo,path:"src/utils.tsx"})}catch(e){}},687:function(e,t,n){var r={"./nestedObjectAssign":455,"./nestedObjectAssign.js":455};function i(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=687},732:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(85),a=n(733),s=n(462),o=n(227);i.storiesOf("Components/Notification",e).addWithJSX("Error notification",function(){return r.createElement(a.Notification,{message:o.text("message","Timekoden ADM1001 krever at du legger til kommentar før du låser"),type:s.NotificationTypes.Error})}).addWithJSX("infomation notification",function(){return r.createElement(a.Notification,{message:o.text("message","Timekoden ADM1001 krever at du legger til kommentar før du låser"),type:s.NotificationTypes.Information})})}).call(this,n(79)(e))},733:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(462);n(734),t.Notification=function(e){var t=e.message,n=e.type,a="notification "+n;return r.createElement("div",{className:a},r.createElement("div",{className:"check"},"☹️"),r.createElement("div",{className:"content"},r.createElement("h1",null,function(e){switch(e){case i.NotificationTypes.Information:return"Info";case i.NotificationTypes.Warning:return"Advarsel";case i.NotificationTypes.Error:return"Feil";default:return"Melding"}}(n)),r.createElement("p",null,t)))};try{(t.Notification||Notification).displayName="Notification",(t.Notification||Notification).__docgenInfo={description:"",displayName:"Notification",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"NotificationTypes"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Notification/Notification.tsx#Notification"]={name:"Notification",docgenInfo:(t.Notification||Notification).__docgenInfo,path:"src/Notification/Notification.tsx"})}catch(e){}},734:function(e,t,n){var r=n(735);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(454)(r,i);r.locals&&(e.exports=r.locals)},735:function(e,t,n){(e.exports=n(453)(!1)).push([e.i,".notification {\n  position: fixed;\n  bottom: 30px;\n  left: 50%;\n  right: 50px;\n  -webkit-transform: translate3d(-50%, 0, 0);\n  transform: translate3d(-50%, 0, 0);\n  height: auto;\n  min-width: calc(100% - 1.5rem);\n  max-width: 40rem;\n  -webkit-transition: ease 0.05s;\n  transition: ease 0.05s;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: space-around;\n  -webkit-animation: notificationSlideIn 0.4s;\n  animation: notificationSlideIn 0.4s;\n  z-index: 100; }\n  .notification.information {\n    background-color: #EDD3D5; }\n  .notification.warning {\n    background-color: #EDD3D5; }\n  .notification.error {\n    background-color: #EDD3D5; }\n  .notification .content {\n    padding-left: 10px; }\n  .notification .check {\n    display: flex;\n    align-items: center;\n    font-size: 50px; }\n\n@keyframes notificationSlideIn {\n  0% {\n    transform: translate3d(-50%, 100%, 0); }\n  50% {\n    transform: translate3d(-50%, -10%, 0); }\n  100% {\n    transform: translate3d(-50%, 0%, 0); } }\n\n@keyframes notificationSlideOut {\n  0% {\n    transform: translate3d(-50%, 0%, 0); }\n  20% {\n    transform: translate3d(-50%, -10%, 0); }\n  100% {\n    transform: translate3d(-50%, 150%, 0); } }\n",""])},736:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n.n(t),i=n(85),a=n(654);Object(i.storiesOf)("Welcome",e).addWithJSX("to your new Storybook🎊",Object(a.a)("\n\n\n    ### Notes\n\n    Hello world!:\n\n    ### Usage\n    ~~~js\n    <div>This is an example component</div>\n    ~~~\n\n    ### To use this Storybook\n\n    Explore the panels on the left.\n  ")(function(){return r.a.createElement("div",null,"This is an example component")}))}.call(this,n(329)(e))}},[[655,3,2]]]);
//# sourceMappingURL=iframe.c9048a50f3229f162f1a.bundle.js.map