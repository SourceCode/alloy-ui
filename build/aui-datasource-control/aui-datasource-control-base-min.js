AUI.add("aui-datasource-control-base",function(C){var H=C.Lang,I=H.isFunction,B=H.isString,G="bindUI",D="renderUI",F="syncUI";var E=function(){};E.ATTRS={dataSource:{value:null,setter:function(N){var A=this;var M=N;if(N){var K=M;var L=A.get("dataSourceType");if(!(M instanceof C.DataSource.Local)){if(!L){L="Local";if(I(K)){L="Function";}else{if(B(K)){L="IO";}}}M=new C.DataSource[L]({source:K});}L=M.name;var J=A._schema;if(J){M.plug(J);}A.set("dataSourceType",L);}return M;}},dataSourceType:{value:null},schema:{value:null,lazyAdd:false,setter:function(N){var A=this;var M=A.get("dataSource");var L=A._schema;if(M&&L){M.unplug(L);L=null;A._schema=null;}if(N){if(N.fn){L=N;N=N.cfg.schema;}else{var J=A.get("schemaType");var K={array:C.Plugin.DataSourceArraySchema,json:C.Plugin.DataSourceJSONSchema,text:C.Plugin.DataSourceTextSchema,xml:C.Plugin.DataSourceXMLSchema};J=J.toLowerCase()||"array";L={fn:K[J],cfg:{schema:N}};}}if(M&&L){M.plug(L);}A._schema=L;return N;}},schemaType:{value:"",lazyAdd:false,validator:B}};E.prototype={initializer:function(){var A=this;A.publish(D);A.publish(G);A.publish(F);},renderUI:function(){var A=this;A.fire(D);},bindUI:function(){var A=this;A.publish("dataError");A.publish("dataRequest");A.publish("dataReturn");A.fire(G);},syncUI:function(){var A=this;A.fire(F);}};C.DataSourceControl=E;},"@VERSION@",{requires:["aui-base","datasource","dataschema"]});