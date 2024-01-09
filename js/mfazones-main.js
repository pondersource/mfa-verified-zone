(()=>{"use strict";var e=function(t,e,n,o,s,i,a,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):s&&(c=r?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}({},(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);const n=e.exports,o="mfazones";console.log("registering our MfaVerified check"),window.OCA.WorkflowEngine.registerCheck({class:"OCA\\mfazones\\Check\\MfaVerified",name:t(o,"multi-factor authentication"),operators:[{operator:"is",name:t(o,"is verified")},{operator:"!is",name:t(o,"is not verified")}],component:n});var s={attach:function(t){console.log("Attaching MFA Zone plugin to "+t.id),console.log(t),t.registerTabView(new OCA.mfazones.MfaZoneTabView),t.fileActions.registerAction({name:"mfa",displayName:"MFA Zone",type:1,mime:"all",permissions:OC.PERMISSION_NONE,iconClass:"icon-category-security",actionHandler:function(t,e){const n=OC.generateUrl("/apps/mfazones/getMfaStatus");$.ajax({type:"GET",url:n,dataType:"json",async:!0,success:function(t){if(t.error)console.log(t.error);else if(!0!==t.mfa_passed){confirm("This folder requires Multi Factor Authentication. Do you want to enable it for your account?")&&(window.location.href=OC.generateUrl("/settings/user/security"))}else alert("You have already enabled Multi Factor Authentication for your account.")}})}});const e=t.setFiles;t.setFiles=function(n){n.forEach((t=>{console.log("seeing",t.name),"asdf"===t.name&&console.log("registering")})),e.bind(t)(n),console.log("gathering ids");let o=[];document.getElementsByTagName("tr").forEach((t=>{"string"==typeof t.getAttribute("data-id")&&"number"==typeof parseInt(t.getAttribute("data-id"))&&o.push(t.getAttribute("data-id"))}))}.bind(t),t._getWebdavProperties=function(){return[].concat(this.filesClient.getPropfindProperties())}.bind(t)}};OC.Plugins.register("OCA.Files.FileList",s),function(){const t=OCA.Files.DetailTabView.extend({id:"mfazoneTabView",className:"tab mfazoneTabView",getLabel:function(){return"MFA Zone"},getIcon:function(){return"icon-category-security"},render:function(){const t=this.getFileInfo();if(!t)return void console.error("File info not found!");console.log("Rendering MFA Zone tab for "+t.getFullPath());const e=OC.generateUrl("/apps/mfazones/access"),n={source:t.getFullPath()},o=this;_fullPath=t.getFullPath(),$.ajax({type:"GET",url:e,dataType:"json",data:n,async:!0,success:function(t){console.log(t),o.addHtml(o,n,t.access)},error:function(t,e,n){console.log(t.status),console.log(n)}})},addHtml:function(t,e,n){t.$el.html(function(t){return'\n\t\t\t<div style="text-align:center; word-wrap:break-word;">\n\t\t\t\t<style>\n\t\t\t\t\t.switch {\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tdisplay: inline;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t.switch input { \n\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t\twidth: 0;\n\t\t\t\t\t\theight: 0;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t.slider {\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\twidth: 30px;\n\t\t\t\t\t\theight: 15px;\n\t\t\t\t\t\tbackground-color: #ccc;\n\t\t\t\t\t\t-webkit-transition: .4s;\n\t\t\t\t\t\ttransition: .4s;\n\t\t\t\t\t\tmargin-top: auto;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t.slider:before {\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tcontent: "";\n\t\t\t\t\t\theight: 9px;\n\t\t\t\t\t\twidth: 9px;\n\t\t\t\t\t\tleft: 3px;\n\t\t\t\t\t\tbottom: 3px;\n\t\t\t\t\t\tbackground-color: white;\n\t\t\t\t\t\t-webkit-transition: .4s;\n\t\t\t\t\t\ttransition: .4s;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tinput:checked + .slider {\n\t\t\t\t\t\tbackground-color: #2196F3;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tinput:focus + .slider {\n\t\t\t\t\t\tbox-shadow: 0 0 1px #2196F3;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tinput:checked + .slider:before {\n\t\t\t\t\t\t-webkit-transform: translateX(15px);\n\t\t\t\t\t\t-ms-transform: translateX(15px);\n\t\t\t\t\t\ttransform: translateX(15px);\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t/* Rounded sliders */\n\t\t\t\t\t.slider.round {\n\t\t\t\t\t\tborder-radius: 15px;\n\t\t\t\t\t}\n\t\t\t\t\t \n\t\t\t\t\t.slider.round:before {\n\t\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t\t}\n\t\t\t\t</style>\n\t\t\t\t<span id="mfa-current-file-path" hidden></span>\n\t\t\t\t <span style="--icon-size:36px;">\n\t\t\t\t\t <label class="switch">\n\t\t\t\t\t\t <input id="checkbox-radio-switch-mfa" type="checkbox" '.concat(t?"":"disabled",'>\n\t\t\t\t\t\t <span class="slider round"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enforce MFA requirement\n\t\t\t\t\t </label>\n\t\t\t\t </span>\n\t\t\t\t <br/>\n\t\t\t\t <br/>\n\t\t\t\t <br/>\n\t\t\t\t <div id="need-mfa" style="--icon-size:36px;">\n\t\t\t\t\t <label for="enable-2fa-button">You need to login with two factor authentication to use this feature.</label><br><br>\n\t\t\t\t\t <button id="enable-2fa-button">Enable 2FA</button>\n\t\t\t\t </div>\n\t\t\t</div>\n\t\t')}(n));const o=OC.generateUrl("/apps/mfazones/get");$.ajax({type:"GET",url:o,dataType:"json",data:e,async:!0,success:function(e){e.error?console.log(e.error):(self.document.getElementById("checkbox-radio-switch-mfa").checked=e.status,e.mfa_passed?t.$el.find("#need-mfa").hide():t.$el.find("#enable-2fa-button").click(t.showDialog),n&&t.$el.find("#checkbox-radio-switch-mfa").click(t.boxChecked),self.document.getElementById("mfa-current-file-path").textContent=_fullPath)},error:function(t,e,n){console.log(t.status),console.log(e),console.log(n)}})},showDialog:function(){confirm("You must enable two factor authentication to use MFAZone app. Do you want to enable 2FA?")&&(window.location.href=OC.generateUrl("/settings/user/security"))},boxChecked:function(){const t=this,e=OC.generateUrl("/apps/mfazones/set"),n={source:self.document.getElementById("mfa-current-file-path").textContent,protect:t.checked};$.ajax({type:"POST",url:e,dataType:"json",data:n,async:!0,success:function(e){t.checked},error:function(t,e,n){console.log(t.status),console.log(n)}})}});OCA.mfazones=OCA.mfazones||{},OCA.mfazones.MfaZoneTabView=t}()})();
//# sourceMappingURL=mfazones-main.js.map?v=23bcd1e38eee7f6fbb4c