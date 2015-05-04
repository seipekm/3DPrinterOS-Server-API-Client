// threejs.org/license
'use strict';var THREE={REVISION:"71"};"object"===typeof module&&(module.exports=THREE);void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});THREE.log=function(){console.log.apply(console,arguments)};THREE.warn=function(){console.warn.apply(console,arguments)};THREE.error=function(){console.error.apply(console,arguments)};THREE.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;
THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;
THREE.MinEquation=103;THREE.MaxEquation=104;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=300;THREE.CubeReflectionMapping=301;THREE.CubeRefractionMapping=302;
THREE.EquirectangularReflectionMapping=303;THREE.EquirectangularRefractionMapping=304;THREE.SphericalReflectionMapping=305;THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;
THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.HalfFloatType=1025;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;THREE.RGBEFormat=THREE.RGBAFormat;THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;
THREE.RGBA_S3TC_DXT5_Format=2004;THREE.RGB_PVRTC_4BPPV1_Format=2100;THREE.RGB_PVRTC_2BPPV1_Format=2101;THREE.RGBA_PVRTC_4BPPV1_Format=2102;THREE.RGBA_PVRTC_2BPPV1_Format=2103;
THREE.Projector=function(){THREE.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){THREE.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){THREE.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(a,b){THREE.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};
THREE.CanvasRenderer=function(){THREE.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");this.domElement=document.createElement("canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};THREE.Color=function(a){return 3===arguments.length?this.setRGB(arguments[0],arguments[1],arguments[2]):this.set(a)};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a};b=.5>=c?c*(1+b):c+b-c*b;c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a),this.r=
    Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=
    a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=
    Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+
    (255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;
    return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
    darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
    grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
    lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
    palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
    tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;
    this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2);"XYZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=
    c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===a.order&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],l=c+f+b;0<l?(c=.5/Math.sqrt(l+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
    .25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;this.normalize();return this}}(),inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=
    -1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
    multiply:function(a,b){return void 0!==b?(THREE.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,l=b._w;this._x=c*l+f*g+d*k-e*h;this._y=d*l+f*h+e*g-c*k;this._z=e*l+f*k+c*h-d*g;this._w=f*l-c*g-d*h-e*k;this.onChangeCallback();return this},multiplyVector3:function(a){THREE.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
        return a.applyQuaternion(this)},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(g),k=Math.sqrt(1-g*g);if(.001>Math.abs(k))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;g=Math.sin((1-b)*h)/k;h=
        Math.sin(b*h)/k;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=
        a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Quaternion(this._x,this._y,this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         b){if(void 0!==b)return THREE.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},sub:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},
    subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);
        this.y<a.y&&(this.y=a.y);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector2,b=new THREE.Vector2);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=
        Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},
    distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===
    a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];return this},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
    this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=
    a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&THREE.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromAxisAngle(b,
    c));return this}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*
c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,l=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-l*-f;this.y=k*a+b*-f+l*-e-h*-g;this.z=l*a+b*-g+h*-f-k*-e;return this},project:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyProjection(a)}}(),
    unproject:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyProjection(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=
        a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3,
        b=new THREE.Vector3);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):
        Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},
    setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},cross:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=
        e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(){var a,b;return function(c){void 0===a&&(a=new THREE.Vector3);a.copy(c).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===
    a&&(a=new THREE.Vector3);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(a,b){THREE.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},
    setEulerFromQuaternion:function(a,b){THREE.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){THREE.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){THREE.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    b){THREE.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length();a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;
        return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=
        a.array[b+2];return this},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
    case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=
    a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>
b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var l=a[10];if(.01>Math.abs(d-g)&&.01>Math.abs(f-c)&&.01>Math.abs(k-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(k+b)&&.1>Math.abs(e+h+l-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;l=(l+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>l?.01>e?(b=0,d=c=.707106781):(b=
    Math.sqrt(e),c=d/b,d=f/b):h>l?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),b=d/c,d=k/c):.01>l?(c=b=.707106781,d=0):(d=Math.sqrt(l),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+l-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&
(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=
    Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);
    this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+
    Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},
    fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];this.w=a.array[b+3];return this},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)}};
THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},copy:function(a){this._x=
    a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=THREE.Math.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],l=e[9],p=e[2],q=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-l,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(q,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,
    k)):(this._y=Math.atan2(-p,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(q,-1,1)),.99999>Math.abs(q)?(this._y=Math.atan2(-p,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(p,-1,1)),.99999>Math.abs(p)?(this._x=Math.atan2(q,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-l,k),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=
    Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(q,k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-l,e),this._y=0)):THREE.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeRotationFromQuaternion(b);this.setFromRotationMatrix(a,c,d);return this}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,
    b||this._order)},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?
    a.set(this._x,this._y,this._z):new THREE.Vector3(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Euler(this._x,this._y,this._z,this._order)}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
    this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=
    this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
    this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>
this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&
    a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);
    this.makeEmpty();b.traverse(function(b){var e=b.geometry;if(void 0!==e)if(e instanceof THREE.Geometry)for(var f=e.vertices,e=0,g=f.length;e<g;e++)a.copy(f[e]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a);else if(e instanceof THREE.BufferGeometry&&void 0!==e.attributes.position)for(f=e.attributes.position.array,e=0,g=f.length;e<g;e+=3)a.set(f[e],f[e+1],f[e+2]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},
    makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
        this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-
    this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=
        new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,
        this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);
        this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};THREE.Matrix3=function(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&THREE.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,k){var l=this.elements;l[0]=a;l[3]=b;l[6]=c;l[1]=d;l[4]=e;l[7]=f;l[2]=g;l[5]=h;l[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){THREE.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
    multiplyVector3Array:function(a){THREE.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=
        a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];
        c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");THREE.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];
        a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]]},clone:function(){return(new THREE.Matrix3).fromArray(this.elements)}};
THREE.Matrix4=function(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&THREE.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,k,l,p,q,n,t,r,s){var u=this.elements;u[0]=a;u[4]=b;u[8]=c;u[12]=d;u[1]=e;u[5]=f;u[9]=g;u[13]=h;u[2]=k;u[6]=l;u[10]=p;u[14]=q;u[3]=n;u[7]=t;u[11]=r;u[15]=s;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){THREE.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},
    copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){var d=this.elements;a.set(d[0],d[1],d[2]);b.set(d[4],d[5],d[6]);c.set(d[8],d[9],d[10]);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements;b=b.elements;var d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),
        f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===a instanceof THREE.Euler&&THREE.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,
        l=c*h,p=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+l*d;b[5]=a-p*d;b[9]=-c*g;b[2]=p-a*d;b[6]=l+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,l=d*h,p=d*e,b[0]=a+p*c,b[4]=l*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-l,b[6]=p+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,l=d*h,p=d*e,b[0]=a-p*c,b[4]=-f*e,b[8]=l+k*c,b[1]=k+l*c,b[5]=f*h,b[9]=p-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,l=c*h,p=c*e,b[0]=g*h,b[4]=l*d-k,b[8]=a*d+p,b[1]=g*e,b[5]=p*d+a,b[9]=k*d-l,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===
    a.order?(a=f*g,k=f*d,l=c*g,p=c*d,b[0]=g*h,b[4]=p-a*e,b[8]=l*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+l,b[10]=a-p*e):"XZY"===a.order&&(a=f*g,k=f*d,l=c*g,p=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+p,b[5]=f*h,b[9]=k*e-l,b[2]=l*e-k,b[6]=c*h,b[10]=p*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){THREE.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},
    makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var l=c*h,c=c*k,p=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(p+e);b[4]=l-f;b[8]=c+h;b[1]=l+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+p);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var g=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,
        c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(THREE.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],
        k=c[12],l=c[1],p=c[5],q=c[9],n=c[13],t=c[2],r=c[6],s=c[10],u=c[14],v=c[3],x=c[7],D=c[11],c=c[15],w=d[0],y=d[4],A=d[8],E=d[12],G=d[1],F=d[5],z=d[9],I=d[13],U=d[2],M=d[6],H=d[10],L=d[14],P=d[3],N=d[7],R=d[11],d=d[15];e[0]=f*w+g*G+h*U+k*P;e[4]=f*y+g*F+h*M+k*N;e[8]=f*A+g*z+h*H+k*R;e[12]=f*E+g*I+h*L+k*d;e[1]=l*w+p*G+q*U+n*P;e[5]=l*y+p*F+q*M+n*N;e[9]=l*A+p*z+q*H+n*R;e[13]=l*E+p*I+q*L+n*d;e[2]=t*w+r*G+s*U+u*P;e[6]=t*y+r*F+s*M+u*N;e[10]=t*A+r*z+s*H+u*R;e[14]=t*E+r*I+s*L+u*d;e[3]=v*w+x*G+D*U+c*P;e[7]=v*y+
    x*F+D*M+c*N;e[11]=v*A+x*z+D*H+c*R;e[15]=v*E+x*I+D*L+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=
        a;b[15]*=a;return this},multiplyVector3:function(a){THREE.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");return a.applyProjection(this)},multiplyVector4:function(a){THREE.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){THREE.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
        return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix4(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){THREE.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){THREE.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
        return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],l=a[2],p=a[6],q=a[10],n=a[14];return a[3]*(+e*h*p-d*k*p-e*g*q+c*k*q+d*g*n-c*h*n)+a[7]*(+b*h*n-b*k*q+e*f*q-d*f*n+d*k*l-e*h*l)+a[11]*(+b*k*p-b*g*n-e*f*p+c*f*n+e*g*l-c*k*l)+a[15]*(-d*g*l-b*h*p+b*g*q+d*f*p-c*f*q+c*h*l)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];
        a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){THREE.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=
        this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[12],k=d[1],l=d[5],p=d[9],q=d[13],n=d[2],t=d[6],r=d[10],s=d[14],u=d[3],v=d[7],x=d[11],d=d[15];c[0]=p*s*v-q*r*v+q*t*x-l*s*x-p*t*d+l*r*d;c[4]=h*r*v-g*s*v-h*t*x+f*s*x+g*t*d-f*r*d;c[8]=g*q*v-h*p*v+h*l*x-f*q*x-g*l*d+f*p*d;c[12]=h*p*t-g*q*t-h*l*r+f*q*r+g*l*s-f*p*s;c[1]=q*r*u-p*s*u-q*n*x+
    k*s*x+p*n*d-k*r*d;c[5]=g*s*u-h*r*u+h*n*x-e*s*x-g*n*d+e*r*d;c[9]=h*p*u-g*q*u-h*k*x+e*q*x+g*k*d-e*p*d;c[13]=g*q*n-h*p*n+h*k*r-e*q*r-g*k*s+e*p*s;c[2]=l*s*u-q*t*u+q*n*v-k*s*v-l*n*d+k*t*d;c[6]=h*t*u-f*s*u-h*n*v+e*s*v+f*n*d-e*t*d;c[10]=f*q*u-h*l*u+h*k*v-e*q*v-f*k*d+e*l*d;c[14]=h*l*n-f*q*n-h*k*t+e*q*t+f*k*s-e*l*s;c[3]=p*t*u-l*r*u-p*n*v+k*r*v+l*n*x-k*t*x;c[7]=f*r*u-g*t*u+g*n*v-e*r*v-f*n*x+e*t*x;c[11]=g*l*u-f*p*u-g*k*v+e*p*v+f*k*x-e*l*x;c[15]=f*p*n-g*l*n+g*k*t-e*p*t-f*k*r+e*l*r;c=e*c[0]+k*c[4]+n*c[8]+u*c[12];
        if(0==c){if(b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");THREE.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(a){THREE.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(a){THREE.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(a){THREE.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(a){THREE.error("THREE.Matrix4: .rotateZ() has been removed.")},
    rotateByAxis:function(a,b){THREE.error("THREE.Matrix4: .rotateByAxis() has been removed.")},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,
        c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,l=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+
    d*h,l*g+c,l*h-d*f,0,k*h-d*g,l*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];
        c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,l=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=l;b.elements[9]*=l;b.elements[10]*=l;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;
        g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(THREE.Math.degToRad(.5*a));var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,k=c-d,l=f-e;g[0]=2/h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/k;g[9]=0;g[13]=-((c+d)/k);g[2]=0;g[6]=0;g[10]=-2/l;g[14]=-((f+e)/l);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],
        a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){return(new THREE.Matrix4).fromArray(this.elements)}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
    var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);
    b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),l=c.dot(this.direction),p=-c.dot(b),q=c.lengthSq(),n=Math.abs(1-k*k),t;0<n?(d=k*p-l,e=k*l-p,t=h*n,0<=d?e>=-t?e<=t?(h=1/n,d*=h,e*=h,k=d*(d+k*e+2*l)+e*(k*d+e+2*p)+q):(e=h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*p)+q):(e=-h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*p)+q):e<=-t?(d=Math.max(0,-(-k*h+l)),e=0<d?-h:Math.min(Math.max(-h,-p),h),k=-d*d+e*(e+2*p)+q):e<=t?(d=0,e=Math.min(Math.max(-h,-p),h),k=e*(e+
    2*p)+q):(d=Math.max(0,-(k*h+l)),e=0<d?h:Math.min(Math.max(-h,-p),h),k=-d*d+e*(e+2*p)+q)):(e=0<k?-h:h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*p)+q);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return k}}(),isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},intersectSphere:function(){var a=new THREE.Vector3;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;
    if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},
    isIntersectionBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*
    g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));
        if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
    this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);
    return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};
THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],l=c[7],p=c[8],q=c[9],n=c[10],t=c[11],r=c[12],s=c[13],u=c[14],c=c[15];b[0].setComponents(f-a,l-g,t-p,c-r).normalize();b[1].setComponents(f+
a,l+g,t+p,c+r).normalize();b[2].setComponents(f+d,l+h,t+q,c+s).normalize();b[3].setComponents(f-d,l-h,t-q,c-s).normalize();b[4].setComponents(f-e,l-k,t-n,c-u).normalize();b[5].setComponents(f+e,l+k,t+n,c+u).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,
    c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),
    containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
    c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
    coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),g=this.coplanarPoint(b);g.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,g);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
        a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};
THREE.Math={generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){if(a<=
    b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return Math.floor(this.randFloat(a,b))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(){var a=Math.PI/180;return function(b){return b*a}}(),radToDeg:function(){var a=
    180/Math.PI;return function(b){return b*a}}(),isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a}};
THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,l,p,q,n;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:f+
2;l=this.points[c[0]];p=this.points[c[1]];q=this.points[c[2]];n=this.points[c[3]];h=g*g;k=g*h;d.x=b(l.x,p.x,q.x,n.x,g,h,k);d.y=b(l.y,p.y,q.y,n.y,g,h,k);d.z=b(l.z,p.z,q.z,n.z,g,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
    a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new THREE.Vector3,n=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=n.chunks[b]-n.chunks[b-1];g=Math.ceil(a*c/n.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+1/g*c*(f-e),d=this.getPoint(d),h.push(k.copy(d).clone());
    h.push(k.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var l=d*k-e*e;h=h||new THREE.Vector3;if(0==l)return h.set(-2,-1,-1);l=1/l;k=(k*f-e*g)*l;d=(d*g-e*f)*l;return h.set(1-k-d,d,k)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
    clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
    a=.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=[],d=b.length,e=0;e<d;e++)c[e]=b[e];for(e=0;e<d;e++)c[e].call(this,a)}}}};
(function(a){a.Raycaster=function(b,c,f,g){this.ray=new a.Ray(b,c);this.near=f||0;this.far=g||Infinity;this.params={Sprite:{},Mesh:{},PointCloud:{threshold:1},LOD:{},Line:{}}};var b=function(a,b){return a.distance-b.distance},c=function(a,b,f,g){a.raycast(b,f);if(!0===g){a=a.children;g=0;for(var h=a.length;g<h;g++)c(a[g],b,f,!0)}};a.Raycaster.prototype={constructor:a.Raycaster,precision:1E-4,linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(b,c){c instanceof a.PerspectiveCamera?
    (this.ray.origin.copy(c.position),this.ray.direction.set(b.x,b.y,.5).unproject(c).sub(c.position).normalize()):c instanceof a.OrthographicCamera?(this.ray.origin.set(b.x,b.y,-1).unproject(c),this.ray.direction.set(0,0,-1).transformDirection(c.matrixWorld)):a.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,e){var f=[];c(a,this,f,e);f.sort(b);return f},intersectObjects:function(d,e){var f=[];if(!1===d instanceof Array)return a.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
    f;for(var g=0,h=d.length;g<h;g++)c(d[g],this,f,e);f.sort(b);return f}}})(THREE);
THREE.Object3D=function(){Object.defineProperty(this,"id",{value:THREE.Object3DIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Object3D";this.parent=void 0;this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var a=new THREE.Vector3,b=new THREE.Euler,c=new THREE.Quaternion,d=new THREE.Vector3(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,
    value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d}});this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixAutoUpdate=!0;this.matrixWorldNeedsUpdate=!1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}};THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);
THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");return this.rotation.order},set eulerOrder(a){THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");this.rotation.order=a},get useQuaternion(){THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},
    applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,
        c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));
        return this}}(),translate:function(a,b){THREE.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,
        b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return THREE.error("THREE.Object3D.add: object can't be added as a child of itself.",
        a),this;a instanceof THREE.Object3D?(void 0!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):THREE.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=void 0,a.dispatchEvent({type:"removed"}),this.children.splice(b,1))},getChildByName:function(a){THREE.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
        return this.getObjectByName(a)},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){a=a||new THREE.Vector3;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=
        new THREE.Vector3,b=new THREE.Vector3;return function(c){c=c||new THREE.Quaternion;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Euler;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new THREE.Vector3,b=new THREE.Quaternion;return function(c){c=c||new THREE.Vector3;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,
        b,c);return c}}(),getWorldDirection:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverseVisible(a)}},traverseAncestors:function(a){this.parent&&(a(this.parent),
        this.parent.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},
    toJSON:function(){var a={metadata:{version:4.3,type:"Object",generator:"ObjectExporter"}},b={},c={},d=function(b){void 0===a.materials&&(a.materials=[]);if(void 0===c[b.uuid]){var d=b.toJSON();delete d.metadata;c[b.uuid]=d;a.materials.push(d)}return b.uuid},e=function(c){var g={};g.uuid=c.uuid;g.type=c.type;""!==c.name&&(g.name=c.name);"{}"!==JSON.stringify(c.userData)&&(g.userData=c.userData);!0!==c.visible&&(g.visible=c.visible);if(c instanceof THREE.PerspectiveCamera)g.fov=c.fov,g.aspect=c.aspect,
        g.near=c.near,g.far=c.far;else if(c instanceof THREE.OrthographicCamera)g.left=c.left,g.right=c.right,g.top=c.top,g.bottom=c.bottom,g.near=c.near,g.far=c.far;else if(c instanceof THREE.AmbientLight)g.color=c.color.getHex();else if(c instanceof THREE.DirectionalLight)g.color=c.color.getHex(),g.intensity=c.intensity;else if(c instanceof THREE.PointLight)g.color=c.color.getHex(),g.intensity=c.intensity,g.distance=c.distance,g.decay=c.decay;else if(c instanceof THREE.SpotLight)g.color=c.color.getHex(),
        g.intensity=c.intensity,g.distance=c.distance,g.angle=c.angle,g.exponent=c.exponent,g.decay=c.decay;else if(c instanceof THREE.HemisphereLight)g.color=c.color.getHex(),g.groundColor=c.groundColor.getHex();else if(c instanceof THREE.Mesh||c instanceof THREE.Line||c instanceof THREE.PointCloud){var h=c.geometry;void 0===a.geometries&&(a.geometries=[]);if(void 0===b[h.uuid]){var k=h.toJSON();delete k.metadata;b[h.uuid]=k;a.geometries.push(k)}g.geometry=h.uuid;g.material=d(c.material);c instanceof THREE.Line&&
    (g.mode=c.mode)}else c instanceof THREE.Sprite&&(g.material=d(c.material));g.matrix=c.matrix.toArray();if(0<c.children.length)for(g.children=[],h=0;h<c.children.length;h++)g.children.push(e(c.children[h]));return g};a.object=e(this);return a},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.quaternion.copy(this.quaternion);a.scale.copy(this.scale);a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);
        a.matrixWorld.copy(this.matrixWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));if(!0===b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;
THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.materialIndex=this.materialIndex;for(var b=0,c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();return a}};
THREE.Face4=function(a,b,c,d,e,f,g){THREE.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g)};THREE.BufferAttribute=function(a,b){this.array=a;this.itemSize=b;this.needsUpdate=!1};
THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get length(){return this.array.length},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},setX:function(a,b){this.array[a*this.itemSize]=b;return this},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},setXY:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                b,c){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},clone:function(){return new THREE.BufferAttribute(new this.array.constructor(this.array),this.itemSize)}};
THREE.Int8Attribute=function(a,b){THREE.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint8Attribute=function(a,b){THREE.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint8ClampedAttribute=function(a,b){THREE.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Int16Attribute=function(a,b){THREE.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint16Attribute=function(a,b){THREE.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Int32Attribute=function(a,b){THREE.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint32Attribute=function(a,b){THREE.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Float32Attribute=function(a,b){THREE.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Float64Attribute=function(a,b){THREE.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.DynamicBufferAttribute=function(a,b){THREE.BufferAttribute.call(this,a,b);this.updateRange={offset:0,count:-1}};THREE.DynamicBufferAttribute.prototype=Object.create(THREE.BufferAttribute.prototype);THREE.DynamicBufferAttribute.prototype.constructor=THREE.DynamicBufferAttribute;
THREE.DynamicBufferAttribute.prototype.clone=function(){return new THREE.DynamicBufferAttribute(new this.array.constructor(this.array),this.itemSize)};THREE.BufferGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="BufferGeometry";this.attributes={};this.attributesKeys=[];this.offsets=this.drawcalls=[];this.boundingSphere=this.boundingBox=null};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(a,b,c){!1===b instanceof THREE.BufferAttribute?(THREE.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.attributes[a]={array:b,itemSize:c}):(this.attributes[a]=b,this.attributesKeys=Object.keys(this.attributes))},getAttribute:function(a){return this.attributes[a]},addDrawCall:function(a,b,c){this.drawcalls.push({start:a,count:b,index:void 0!==c?c:0})},applyMatrix:function(a){var b=
    this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere()},center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.applyMatrix((new THREE.Matrix4).setPosition(a));return a},fromGeometry:function(a,b){b=b||{vertexColors:THREE.NoColors};
    var c=a.vertices,d=a.faces,e=a.faceVertexUvs,f=b.vertexColors,g=0<e[0].length,h=3==d[0].vertexNormals.length,k=new Float32Array(9*d.length);this.addAttribute("position",new THREE.BufferAttribute(k,3));var l=new Float32Array(9*d.length);this.addAttribute("normal",new THREE.BufferAttribute(l,3));if(f!==THREE.NoColors){var p=new Float32Array(9*d.length);this.addAttribute("color",new THREE.BufferAttribute(p,3))}if(!0===g){var q=new Float32Array(6*d.length);this.addAttribute("uv",new THREE.BufferAttribute(q,
        2))}for(var n=0,t=0,r=0;n<d.length;n++,t+=6,r+=9){var s=d[n],u=c[s.a],v=c[s.b],x=c[s.c];k[r]=u.x;k[r+1]=u.y;k[r+2]=u.z;k[r+3]=v.x;k[r+4]=v.y;k[r+5]=v.z;k[r+6]=x.x;k[r+7]=x.y;k[r+8]=x.z;!0===h?(u=s.vertexNormals[0],v=s.vertexNormals[1],x=s.vertexNormals[2],l[r]=u.x,l[r+1]=u.y,l[r+2]=u.z,l[r+3]=v.x,l[r+4]=v.y,l[r+5]=v.z,l[r+6]=x.x,l[r+7]=x.y,l[r+8]=x.z):(u=s.normal,l[r]=u.x,l[r+1]=u.y,l[r+2]=u.z,l[r+3]=u.x,l[r+4]=u.y,l[r+5]=u.z,l[r+6]=u.x,l[r+7]=u.y,l[r+8]=u.z);f===THREE.FaceColors?(s=s.color,p[r]=
        s.r,p[r+1]=s.g,p[r+2]=s.b,p[r+3]=s.r,p[r+4]=s.g,p[r+5]=s.b,p[r+6]=s.r,p[r+7]=s.g,p[r+8]=s.b):f===THREE.VertexColors&&(u=s.vertexColors[0],v=s.vertexColors[1],s=s.vertexColors[2],p[r]=u.r,p[r+1]=u.g,p[r+2]=u.b,p[r+3]=v.r,p[r+4]=v.g,p[r+5]=v.b,p[r+6]=s.r,p[r+7]=s.g,p[r+8]=s.b);!0===g&&(s=e[0][n][0],u=e[0][n][1],v=e[0][n][2],q[t]=s.x,q[t+1]=s.y,q[t+2]=u.x,q[t+3]=u.y,q[t+4]=v.x,q[t+5]=v.y)}this.computeBoundingSphere();return this},computeBoundingBox:function(){var a=new THREE.Vector3;return function(){null===
this.boundingBox&&(this.boundingBox=new THREE.Box3);var b=this.attributes.position.array;if(b){var c=this.boundingBox;c.makeEmpty();for(var d=0,e=b.length;d<e;d+=3)a.set(b[d],b[d+1],b[d+2]),c.expandByPoint(a)}if(void 0===b||0===b.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0);(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&THREE.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')}}(),
    computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.expandByPoint(b);a.center(d);for(var g=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),g=Math.max(g,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&
    THREE.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.attributes;if(a.position){var b=a.position.array;if(void 0===a.normal)this.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(b.length),3));else for(var c=a.normal.array,d=0,e=c.length;d<e;d++)c[d]=0;var c=a.normal.array,f,g,h,k=new THREE.Vector3,l=new THREE.Vector3,
        p=new THREE.Vector3,q=new THREE.Vector3,n=new THREE.Vector3;if(a.index)for(var t=a.index.array,r=0<this.offsets.length?this.offsets:[{start:0,count:t.length,index:0}],s=0,u=r.length;s<u;++s){e=r[s].start;f=r[s].count;for(var v=r[s].index,d=e,e=e+f;d<e;d+=3)f=3*(v+t[d]),g=3*(v+t[d+1]),h=3*(v+t[d+2]),k.fromArray(b,f),l.fromArray(b,g),p.fromArray(b,h),q.subVectors(p,l),n.subVectors(k,l),q.cross(n),c[f]+=q.x,c[f+1]+=q.y,c[f+2]+=q.z,c[g]+=q.x,c[g+1]+=q.y,c[g+2]+=q.z,c[h]+=q.x,c[h+1]+=q.y,c[h+2]+=q.z}else for(d=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         0,e=b.length;d<e;d+=9)k.fromArray(b,d),l.fromArray(b,d+3),p.fromArray(b,d+6),q.subVectors(p,l),n.subVectors(k,l),q.cross(n),c[d]=q.x,c[d+1]=q.y,c[d+2]=q.z,c[d+3]=q.x,c[d+4]=q.y,c[d+5]=q.z,c[d+6]=q.x,c[d+7]=q.y,c[d+8]=q.z;this.normalizeNormals();a.normal.needsUpdate=!0}},computeTangents:function(){function a(a,b,c){q.fromArray(d,3*a);n.fromArray(d,3*b);t.fromArray(d,3*c);r.fromArray(f,2*a);s.fromArray(f,2*b);u.fromArray(f,2*c);v=n.x-q.x;x=t.x-q.x;D=n.y-q.y;w=t.y-q.y;y=n.z-q.z;A=t.z-q.z;E=s.x-r.x;G=
        u.x-r.x;F=s.y-r.y;z=u.y-r.y;I=1/(E*z-G*F);U.set((z*v-F*x)*I,(z*D-F*w)*I,(z*y-F*A)*I);M.set((E*x-G*v)*I,(E*w-G*D)*I,(E*A-G*y)*I);k[a].add(U);k[b].add(U);k[c].add(U);l[a].add(M);l[b].add(M);l[c].add(M)}function b(a){ha.fromArray(e,3*a);O.copy(ha);ba=k[a];oa.copy(ba);oa.sub(ha.multiplyScalar(ha.dot(ba))).normalize();ja.crossVectors(O,ba);qa=ja.dot(l[a]);ca=0>qa?-1:1;h[4*a]=oa.x;h[4*a+1]=oa.y;h[4*a+2]=oa.z;h[4*a+3]=ca}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||
        void 0===this.attributes.uv)THREE.warn("THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var c=this.attributes.index.array,d=this.attributes.position.array,e=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/3;void 0===this.attributes.tangent&&this.addAttribute("tangent",new THREE.BufferAttribute(new Float32Array(4*g),4));for(var h=this.attributes.tangent.array,k=[],l=[],p=0;p<g;p++)k[p]=new THREE.Vector3,
        l[p]=new THREE.Vector3;var q=new THREE.Vector3,n=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector2,s=new THREE.Vector2,u=new THREE.Vector2,v,x,D,w,y,A,E,G,F,z,I,U=new THREE.Vector3,M=new THREE.Vector3,H,L,P,N,R;0===this.drawcalls.length&&this.addDrawCall(0,c.length,0);var V=this.drawcalls,p=0;for(L=V.length;p<L;++p){H=V[p].start;P=V[p].count;var J=V[p].index,g=H;for(H+=P;g<H;g+=3)P=J+c[g],N=J+c[g+1],R=J+c[g+2],a(P,N,R)}var oa=new THREE.Vector3,ja=new THREE.Vector3,ha=new THREE.Vector3,O=new THREE.Vector3,
        ca,ba,qa,p=0;for(L=V.length;p<L;++p)for(H=V[p].start,P=V[p].count,J=V[p].index,g=H,H+=P;g<H;g+=3)P=J+c[g],N=J+c[g+1],R=J+c[g+2],b(P),b(N),b(R)}},computeOffsets:function(a){void 0===a&&(a=65535);for(var b=this.attributes.index.array,c=this.attributes.position.array,d=b.length/3,e=new Uint16Array(b.length),f=0,g=0,h=[{start:0,count:0,index:0}],k=h[0],l=0,p=0,q=new Int32Array(6),n=new Int32Array(c.length),t=new Int32Array(c.length),r=0;r<c.length;r++)n[r]=-1,t[r]=-1;for(c=0;c<d;c++){for(var s=p=0;3>
    s;s++)r=b[3*c+s],-1==n[r]?(q[2*s]=r,q[2*s+1]=-1,p++):n[r]<k.index?(q[2*s]=r,q[2*s+1]=-1,l++):(q[2*s]=r,q[2*s+1]=n[r]);if(g+p>k.index+a)for(k={start:f,count:0,index:g},h.push(k),p=0;6>p;p+=2)s=q[p+1],-1<s&&s<k.index&&(q[p+1]=-1);for(p=0;6>p;p+=2)r=q[p],s=q[p+1],-1===s&&(s=g++),n[r]=s,t[s]=r,e[f++]=s-k.index,k.count++}this.reorderBuffers(e,t,g);return this.drawcalls=this.offsets=h},merge:function(a,b){if(!1===a instanceof THREE.BufferGeometry)THREE.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        a);else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},reorderBuffers:function(a,b,c){var d={},e;for(e in this.attributes)"index"!=e&&(d[e]=new this.attributes[e].array.constructor(this.attributes[e].itemSize*
    c));for(var f=0;f<c;f++){var g=b[f];for(e in this.attributes)if("index"!=e)for(var h=this.attributes[e].array,k=this.attributes[e].itemSize,l=d[e],p=0;p<k;p++)l[f*k+p]=h[g*k+p]}this.attributes.index.array=a;for(e in this.attributes)"index"!=e&&(this.attributes[e].array=d[e],this.attributes[e].numItems=this.attributes[e].itemSize*c)},toJSON:function(){var a={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type,data:{attributes:{}}},b=this.attributes,
        c=this.offsets,d=this.boundingSphere,e;for(e in b){var f=b[e],g=Array.prototype.slice.call(f.array);a.data.attributes[e]={itemSize:f.itemSize,type:f.array.constructor.name,array:g}}0<c.length&&(a.data.offsets=JSON.parse(JSON.stringify(c)));null!==d&&(a.data.boundingSphere={center:d.center.toArray(),radius:d.radius});return a},clone:function(){var a=new THREE.BufferGeometry,b;for(b in this.attributes)a.addAttribute(b,this.attributes[b].clone());b=0;for(var c=this.offsets.length;b<c;b++){var d=this.offsets[b];
        a.offsets.push({start:d.start,index:d.index,count:d.count})}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.Geometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=
    this.tangentsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=
    this.verticesNeedUpdate=!0},fromBufferGeometry:function(a){for(var b=this,c=a.attributes,d=c.position.array,e=void 0!==c.index?c.index.array:void 0,f=void 0!==c.normal?c.normal.array:void 0,g=void 0!==c.color?c.color.array:void 0,h=void 0!==c.uv?c.uv.array:void 0,k=[],l=[],p=c=0;c<d.length;c+=3,p+=2)b.vertices.push(new THREE.Vector3(d[c],d[c+1],d[c+2])),void 0!==f&&k.push(new THREE.Vector3(f[c],f[c+1],f[c+2])),void 0!==g&&b.colors.push(new THREE.Color(g[c],g[c+1],g[c+2])),void 0!==h&&l.push(new THREE.Vector2(h[p],
    h[p+1]));var q=function(a,c,d){var e=void 0!==f?[k[a].clone(),k[c].clone(),k[d].clone()]:[],n=void 0!==g?[b.colors[a].clone(),b.colors[c].clone(),b.colors[d].clone()]:[];b.faces.push(new THREE.Face3(a,c,d,e,n));void 0!==h&&b.faceVertexUvs[0].push([l[a].clone(),l[c].clone(),l[d].clone()])};if(void 0!==e)if(d=a.drawcalls,0<d.length)for(c=0;c<d.length;c++)for(var p=d[c],n=p.start,t=p.count,r=p.index,p=n,n=n+t;p<n;p+=3)q(r+e[p],r+e[p+1],r+e[p+2]);else for(c=0;c<e.length;c+=3)q(e[c],e[c+1],e[c+2]);else for(c=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   0;c<d.length/3;c+=3)q(c,c+1,c+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.applyMatrix((new THREE.Matrix4).setPosition(a));return a},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],
    g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,f,g,h=new THREE.Vector3,k=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(a=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.vertexNormals[0]=d[c.a].clone(),c.vertexNormals[1]=d[c.b].clone(),c.vertexNormals[2]=d[c.c].clone()},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=
    e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=
    this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,k={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),g.push(k)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<
d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){var a,b,c,d,e,f,g,h,k,l,p,q,n,t,r,s,u,v=[],x=[];c=new THREE.Vector3;var D=new THREE.Vector3,w=new THREE.Vector3,y=new THREE.Vector3,A=new THREE.Vector3;a=0;for(b=this.vertices.length;a<b;a++)v[a]=new THREE.Vector3,x[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)e=this.faces[a],f=this.faceVertexUvs[0][a],d=e.a,u=e.b,e=e.c,g=this.vertices[d],h=this.vertices[u],k=this.vertices[e],
    l=f[0],p=f[1],q=f[2],f=h.x-g.x,n=k.x-g.x,t=h.y-g.y,r=k.y-g.y,h=h.z-g.z,g=k.z-g.z,k=p.x-l.x,s=q.x-l.x,p=p.y-l.y,l=q.y-l.y,q=1/(k*l-s*p),c.set((l*f-p*n)*q,(l*t-p*r)*q,(l*h-p*g)*q),D.set((k*n-s*f)*q,(k*r-s*t)*q,(k*g-s*h)*q),v[d].add(c),v[u].add(c),v[e].add(c),x[d].add(D),x[u].add(D),x[e].add(D);D=["a","b","c","d"];a=0;for(b=this.faces.length;a<b;a++)for(e=this.faces[a],c=0;c<Math.min(e.vertexNormals.length,3);c++)A.copy(e.vertexNormals[c]),d=e[D[c]],u=v[d],w.copy(u),w.sub(A.multiplyScalar(A.dot(u))).normalize(),
    y.crossVectors(e.vertexNormals[c],u),d=y.dot(x[d]),d=0>d?-1:1,e.vertexTangents[c]=new THREE.Vector4(w.x,w.y,w.z,d);this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);
    this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===a instanceof THREE.Geometry)THREE.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,l=this.faceVertexUvs[0];a=a.faceVertexUvs[0];void 0===c&&(c=0);void 0!==b&&(d=(new THREE.Matrix3).getNormalMatrix(b));for(var p=0,q=g.length;p<q;p++){var n=g[p].clone();void 0!==b&&n.applyMatrix4(b);f.push(n)}p=0;for(q=k.length;p<
q;p++){var g=k[p],t,r=g.vertexNormals,s=g.vertexColors,n=new THREE.Face3(g.a+e,g.b+e,g.c+e);n.normal.copy(g.normal);void 0!==d&&n.normal.applyMatrix3(d).normalize();b=0;for(f=r.length;b<f;b++)t=r[b].clone(),void 0!==d&&t.applyMatrix3(d).normalize(),n.vertexNormals.push(t);n.color.copy(g.color);b=0;for(f=s.length;b<f;b++)t=s[b],n.vertexColors.push(t.clone());n.materialIndex=g.materialIndex+c;h.push(n)}p=0;for(q=a.length;p<q;p++)if(c=a[p],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());
    l.push(d)}}},mergeMesh:function(a){!1===a instanceof THREE.Mesh?THREE.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<
g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]==e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=b;return f},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==l[b])return l[b];l[b]=k.length/3;k.push(a.x,a.y,
    a.z);return l[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==q[b])return q[b];q[b]=p.length;p.push(a.getHex());return q[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==t[b])return t[b];t[b]=n.length/2;n.push(a.x,a.y);return t[b]}var e={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type};""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==
f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}var h=[],k=[],l={},p=[],q={},n=[],t={};for(g=0;g<this.faces.length;g++){var r=this.faces[g],s=void 0!==this.faceVertexUvs[0][g],u=0<r.normal.length(),v=0<r.vertexNormals.length,x=1!==r.color.r||1!==r.color.g||1!==r.color.b,D=0<r.vertexColors.length,w=0,w=a(w,0,0),w=a(w,1,!1),w=a(w,2,!1),w=a(w,3,s),w=a(w,4,u),w=a(w,5,v),w=a(w,6,x),w=a(w,7,D);h.push(w);h.push(r.a,r.b,r.c);s&&(s=this.faceVertexUvs[0][g],
    h.push(d(s[0]),d(s[1]),d(s[2])));u&&h.push(b(r.normal));v&&(u=r.vertexNormals,h.push(b(u[0]),b(u[1]),b(u[2])));x&&h.push(c(r.color));D&&(r=r.vertexColors,h.push(c(r[0]),c(r[1]),c(r[2])))}e.data={};e.data.vertices=f;e.data.normals=k;0<p.length&&(e.data.colors=p);0<n.length&&(e.data.uvs=[n]);e.data.faces=h;return e},clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=b.length;c<d;c++)a.faces.push(b[c].clone());c=0;
    for(d=this.faceVertexUvs.length;c<d;c++){b=this.faceVertexUvs[c];void 0===a.faceVertexUvs[c]&&(a.faceVertexUvs[c]=[]);for(var e=0,f=b.length;e<f;e++){for(var g=b[e],h=[],k=0,l=g.length;k<l;k++)h.push(g[k].clone());a.faceVertexUvs[c].push(h)}}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;
THREE.Camera=function(){THREE.Object3D.call(this);this.type="Camera";this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.getWorldDirection=function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();
THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();THREE.Camera.prototype.clone=function(a){void 0===a&&(a=new THREE.Camera);THREE.Object3D.prototype.clone.call(this,a);a.matrixWorldInverse.copy(this.matrixWorldInverse);a.projectionMatrix.copy(this.projectionMatrix);return a};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);this.type="CubeCamera";var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));
    this.add(g);var h=new THREE.PerspectiveCamera(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,n=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=
        1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=n;c.activeCubeFace=5;a.render(b,k,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CubeCamera.prototype.constructor=THREE.CubeCamera;
THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.type="OrthographicCamera";this.zoom=1;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2;this.projectionMatrix.makeOrthographic(c-a,c+a,d+b,d-b,this.near,this.far)};
THREE.OrthographicCamera.prototype.clone=function(){var a=new THREE.OrthographicCamera;THREE.Camera.prototype.clone.call(this,a);a.zoom=this.zoom;a.left=this.left;a.right=this.right;a.top=this.top;a.bottom=this.bottom;a.near=this.near;a.far=this.far;a.projectionMatrix.copy(this.projectionMatrix);return a};
THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.type="PerspectiveCamera";this.zoom=1;this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){var a=THREE.Math.radToDeg(2*Math.atan(Math.tan(.5*THREE.Math.degToRad(this.fov))/this.zoom));if(this.fullWidth){var b=this.fullWidth/this.fullHeight,a=Math.tan(THREE.Math.degToRad(.5*a))*this.near,c=-a,d=b*c,b=Math.abs(b*a-d),c=Math.abs(a-c);this.projectionMatrix.makeFrustum(d+this.x*b/this.fullWidth,d+(this.x+this.width)*b/this.fullWidth,a-(this.y+this.height)*c/this.fullHeight,a-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(a,
    this.aspect,this.near,this.far)};THREE.PerspectiveCamera.prototype.clone=function(){var a=new THREE.PerspectiveCamera;THREE.Camera.prototype.clone.call(this,a);a.zoom=this.zoom;a.fov=this.fov;a.aspect=this.aspect;a.near=this.near;a.far=this.far;a.projectionMatrix.copy(this.projectionMatrix);return a};THREE.Light=function(a){THREE.Object3D.call(this);this.type="Light";this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.constructor=THREE.Light;
THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};THREE.AmbientLight=function(a){THREE.Light.call(this,a);this.type="AmbientLight"};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.constructor=THREE.AmbientLight;THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};
THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.type="AreaLight";this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=.5;this.quadraticAttenuation=.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);THREE.AreaLight.prototype.constructor=THREE.AreaLight;
THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.type="DirectionalLight";this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;
    this.shadowCascadeOffset=new THREE.Vector3(0,0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,.99,.998];this.shadowCascadeFarZ=[.99,.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight;
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraLeft=this.shadowCameraLeft;a.shadowCameraRight=this.shadowCameraRight;a.shadowCameraTop=this.shadowCameraTop;a.shadowCameraBottom=this.shadowCameraBottom;a.shadowCameraVisible=
    this.shadowCameraVisible;a.shadowBias=this.shadowBias;a.shadowDarkness=this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;a.shadowCascade=this.shadowCascade;a.shadowCascadeOffset.copy(this.shadowCascadeOffset);a.shadowCascadeCount=this.shadowCascadeCount;a.shadowCascadeBias=this.shadowCascadeBias.slice(0);a.shadowCascadeWidth=this.shadowCascadeWidth.slice(0);a.shadowCascadeHeight=this.shadowCascadeHeight.slice(0);a.shadowCascadeNearZ=this.shadowCascadeNearZ.slice(0);
    a.shadowCascadeFarZ=this.shadowCascadeFarZ.slice(0);return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.type="HemisphereLight";this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.constructor=THREE.HemisphereLight;
THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.HemisphereLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};THREE.PointLight=function(a,b,c,d){THREE.Light.call(this,a);this.type="PointLight";this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.constructor=THREE.PointLight;
THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;a.decay=this.decay;return a};
THREE.SpotLight=function(a,b,c,d,e,f){THREE.Light.call(this,a);this.type="SpotLight";this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.decay=void 0!==f?f:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=this.shadowMapWidth=
    512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.constructor=THREE.SpotLight;
THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.decay=this.decay;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraFov=this.shadowCameraFov;a.shadowCameraVisible=this.shadowCameraVisible;a.shadowBias=this.shadowBias;
    a.shadowDarkness=this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;return a};THREE.Cache={files:{},add:function(a,b){this.files[a]=b},get:function(a){return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};
THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.imageLoader=new THREE.ImageLoader;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/a.total).toFixed(0)+
"%"):b+((a.loaded/1024).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=this.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function d(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          d,e,g,h,k,s){var u=b+e,v,x=THREE.Loader.Handlers.get(u);null!==x?v=x.load(u):(v=new THREE.Texture,x=f.imageLoader,x.crossOrigin=f.crossOrigin,x.load(u,function(a){if(!1===THREE.Math.isPowerOfTwo(a.width)||!1===THREE.Math.isPowerOfTwo(a.height)){var b=c(a.width),d=c(a.height),e=document.createElement("canvas");e.width=b;e.height=d;e.getContext("2d").drawImage(a,0,0,b,d);v.image=e}else v.image=a;v.needsUpdate=!0}));v.sourceFile=e;g&&(v.repeat.set(g[0],g[1]),1!==g[0]&&(v.wrapS=THREE.RepeatWrapping),
1!==g[1]&&(v.wrapT=THREE.RepeatWrapping));h&&v.offset.set(h[0],h[1]);k&&(e={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==e[k[0]]&&(v.wrapS=e[k[0]]),void 0!==e[k[1]]&&(v.wrapT=e[k[1]]));s&&(v.anisotropy=s);a[d]=v}function e(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var f=this,g="MeshLambertMaterial",h={color:15658734,opacity:1,map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var k=a.shading.toLowerCase();"phong"===k?g="MeshPhongMaterial":
"basic"===k&&(g="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(h.blending=THREE[a.blending]);void 0!==a.transparent&&(h.transparent=a.transparent);void 0!==a.opacity&&1>a.opacity&&(h.transparent=!0);void 0!==a.depthTest&&(h.depthTest=a.depthTest);void 0!==a.depthWrite&&(h.depthWrite=a.depthWrite);void 0!==a.visible&&(h.visible=a.visible);void 0!==a.flipSided&&(h.side=THREE.BackSide);void 0!==a.doubleSided&&(h.side=THREE.DoubleSide);void 0!==a.wireframe&&(h.wireframe=a.wireframe);
    void 0!==a.vertexColors&&("face"===a.vertexColors?h.vertexColors=THREE.FaceColors:a.vertexColors&&(h.vertexColors=THREE.VertexColors));a.colorDiffuse?h.color=e(a.colorDiffuse):a.DbgColor&&(h.color=a.DbgColor);a.colorSpecular&&(h.specular=e(a.colorSpecular));a.colorEmissive&&(h.emissive=e(a.colorEmissive));void 0!==a.transparency&&(console.warn("THREE.Loader: transparency has been renamed to opacity"),a.opacity=a.transparency);void 0!==a.opacity&&(h.opacity=a.opacity);a.specularCoef&&(h.shininess=
        a.specularCoef);a.mapDiffuse&&b&&d(h,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);a.mapLight&&b&&d(h,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&d(h,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&d(h,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&d(h,"specularMap",
        a.mapSpecular,a.mapSpecularRepeat,a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapAlpha&&b&&d(h,"alphaMap",a.mapAlpha,a.mapAlphaRepeat,a.mapAlphaOffset,a.mapAlphaWrap,a.mapAlphaAnisotropy);a.mapBumpScale&&(h.bumpScale=a.mapBumpScale);a.mapNormalFactor&&(h.normalScale=new THREE.Vector2(a.mapNormalFactor,a.mapNormalFactor));g=new THREE[g](h);void 0!==a.DbgName&&(g.name=a.DbgName);return g}};
THREE.Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=0,c=this.handlers.length;b<c;b+=2){var d=this.handlers[b+1];if(this.handlers[b].test(a))return d}return null}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=THREE.Cache.get(a);void 0!==f?b&&b(f):(f=new XMLHttpRequest,f.open("GET",a,!0),f.addEventListener("load",function(c){THREE.Cache.add(a,this.response);b&&b(this.response);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),void 0!==this.responseType&&(f.responseType=
    this.responseType),f.send(null),e.manager.itemStart(a))},setResponseType:function(a){this.responseType=a},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=THREE.Cache.get(a);if(void 0!==f)b(f);else return f=document.createElement("img"),f.addEventListener("load",function(c){THREE.Cache.add(a,this);b&&b(this);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),f.src=a,e.manager.itemStart(a),f},setCrossOrigin:function(a){this.crossOrigin=
    a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.constructor=THREE.JSONLoader;THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText),k=h.metadata;if(void 0!==k){if("object"===k.type){THREE.error("THREE.JSONLoader: "+b+" should be loaded with THREE.ObjectLoader instead.");return}if("scene"===k.type){THREE.error("THREE.JSONLoader: "+b+" seems to be a Scene. Use THREE.SceneLoader instead.");return}}h=a.parse(h,
    d);c(h.geometry,h.materials)}else THREE.error("THREE.JSONLoader: "+b+" seems to be unreachable or the file is empty.");a.onLoadComplete()}else THREE.error("THREE.JSONLoader: Couldn't load "+b+" ("+f.status+")");else f.readyState===f.LOADING?e&&(0===g&&(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,k,l,p,q,n,t,r,s,u,v,x=a.faces;p=a.vertices;var D=a.normals,w=a.colors,y=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&y++;for(d=0;d<y;d++)c.faceVertexUvs[d]=[]}k=0;for(l=p.length;k<l;)d=new THREE.Vector3,d.x=p[k++]*b,d.y=p[k++]*b,d.z=p[k++]*b,c.vertices.push(d);k=0;for(l=x.length;k<l;)if(b=x[k++],t=b&1,h=b&2,d=b&8,q=b&16,r=b&32,p=b&64,b&=128,t){t=new THREE.Face3;
    t.a=x[k];t.b=x[k+1];t.c=x[k+3];s=new THREE.Face3;s.a=x[k+1];s.b=x[k+2];s.c=x[k+3];k+=4;h&&(h=x[k++],t.materialIndex=h,s.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<y;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)n=x[k++],v=u[2*n],n=u[2*n+1],v=new THREE.Vector2(v,n),2!==g&&c.faceVertexUvs[d][h].push(v),0!==g&&c.faceVertexUvs[d][h+1].push(v);q&&(q=3*x[k++],t.normal.set(D[q++],D[q++],D[q]),s.normal.copy(t.normal));if(r)for(d=0;4>d;d++)q=3*x[k++],r=new THREE.Vector3(D[q++],
        D[q++],D[q]),2!==d&&t.vertexNormals.push(r),0!==d&&s.vertexNormals.push(r);p&&(p=x[k++],p=w[p],t.color.setHex(p),s.color.setHex(p));if(b)for(d=0;4>d;d++)p=x[k++],p=w[p],2!==d&&t.vertexColors.push(new THREE.Color(p)),0!==d&&s.vertexColors.push(new THREE.Color(p));c.faces.push(t);c.faces.push(s)}else{t=new THREE.Face3;t.a=x[k++];t.b=x[k++];t.c=x[k++];h&&(h=x[k++],t.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<y;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)n=x[k++],v=u[2*n],n=u[2*n+1],
    v=new THREE.Vector2(v,n),c.faceVertexUvs[d][h].push(v);q&&(q=3*x[k++],t.normal.set(D[q++],D[q++],D[q]));if(r)for(d=0;3>d;d++)q=3*x[k++],r=new THREE.Vector3(D[q++],D[q++],D[q]),t.vertexNormals.push(r);p&&(p=x[k++],t.color.setHex(w[p]));if(b)for(d=0;3>d;d++)p=x[k++],t.vertexColors.push(new THREE.Color(w[p]));c.faces.push(t)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],
    1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&THREE.warn("THREE.JSONLoader: When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+
c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.");c.animation=a.animation;c.animations=a.animations})();(function(b){if(void 0!==a.morphTargets){var d,g,h,k,l,p;d=0;for(g=a.morphTargets.length;d<g;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=a.morphTargets[d].name,c.morphTargets[d].vertices=[],l=c.morphTargets[d].vertices,p=a.morphTargets[d].vertices,h=0,k=p.length;h<k;h+=3){var q=new THREE.Vector3;q.x=p[h]*b;q.y=p[h+1]*b;q.z=p[h+2]*b;l.push(q)}}if(void 0!==
    a.morphColors)for(d=0,g=a.morphColors.length;d<g;d++)for(c.morphColors[d]={},c.morphColors[d].name=a.morphColors[d].name,c.morphColors[d].colors=[],k=c.morphColors[d].colors,l=a.morphColors[d].colors,b=0,h=l.length;b<h;b+=3)p=new THREE.Color(16755200),p.setRGB(l[b],l[b+1],l[b+2]),k.push(p)})(d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,
    materials:d}};THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.data.attributes,d;for(d in c){var e=c[d],f=new self[e.type](e.array);b.addAttribute(d,new THREE.BufferAttribute(f,e.itemSize))}c=a.data.offsets;void 0!==c&&(b.offsets=JSON.parse(JSON.stringify(c)));
    a=a.data.boundingSphere;void 0!==a&&(c=new THREE.Vector3,void 0!==a.center&&c.fromArray(a.center),b.boundingSphere=new THREE.Sphere(c,a.radius));return b}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE[a.type];void 0!==a.color&&b.color.setHex(a.color);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&(b.shininess=a.shininess);
    void 0!==a.uniforms&&(b.uniforms=a.uniforms);void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.shading&&(b.shading=a.shading);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.wireframe&&(b.wireframe=a.wireframe);void 0!==a.size&&
    (b.size=a.size);void 0!==a.sizeAttenuation&&(b.sizeAttenuation=a.sizeAttenuation);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.texturePath=""};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){e.parse(JSON.parse(a),b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),
    d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":g=new THREE[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "CubeGeometry":g=
    new THREE.BoxGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":g=new THREE.CircleGeometry(h.radius,h.segments);break;case "CylinderGeometry":g=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded);break;case "SphereGeometry":g=new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "IcosahedronGeometry":g=new THREE.IcosahedronGeometry(h.radius,
    h.detail);break;case "TorusGeometry":g=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":g=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "BufferGeometry":g=d.parse(h);break;case "Geometry":g=c.parse(h.data).geometry}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a,b){var c={};if(void 0!==a)for(var d=function(a){void 0===b[a]&&
THREE.warn("THREE.ObjectLoader: Undefined texture",a);return b[a]},e=new THREE.MaterialLoader,f=0,g=a.length;f<g;f++){var h=a[f],k=e.parse(h);k.uuid=h.uuid;void 0!==h.name&&(k.name=h.name);void 0!==h.map&&(k.map=d(h.map));void 0!==h.bumpMap&&(k.bumpMap=d(h.bumpMap),h.bumpScale&&(k.bumpScale=new THREE.Vector2(h.bumpScale,h.bumpScale)));void 0!==h.alphaMap&&(k.alphaMap=d(h.alphaMap));void 0!==h.envMap&&(k.envMap=d(h.envMap));void 0!==h.normalMap&&(k.normalMap=d(h.normalMap),h.normalScale&&(k.normalScale=
    new THREE.Vector2(h.normalScale,h.normalScale)));void 0!==h.lightMap&&(k.lightMap=d(h.lightMap));void 0!==h.specularMap&&(k.specularMap=d(h.specularMap));c[h.uuid]=k}return c},parseImages:function(a,b){var c=this,d={};if(void 0!==a&&0<a.length){var e=new THREE.LoadingManager(b),f=new THREE.ImageLoader(e);f.setCrossOrigin(this.crossOrigin);for(var e=function(a){c.manager.itemStart(a);return f.load(a,function(){c.manager.itemEnd(a)})},g=0,h=a.length;g<h;g++){var k=a[g],l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url)?
    k.url:c.texturePath+k.url;d[k.uuid]=e(l)}}return d},parseTextures:function(a,b){var c={};if(void 0!==a)for(var d=0,e=a.length;d<e;d++){var f=a[d];void 0===f.image&&THREE.warn('THREE.ObjectLoader: No "image" speficied for',f.uuid);void 0===b[f.image]&&THREE.warn("THREE.ObjectLoader: Undefined image",f.image);var g=new THREE.Texture(b[f.image]);g.needsUpdate=!0;g.uuid=f.uuid;void 0!==f.name&&(g.name=f.name);void 0!==f.repeat&&(g.repeat=new THREE.Vector2(f.repeat[0],f.repeat[1]));void 0!==f.minFilter&&
(g.minFilter=THREE[f.minFilter]);void 0!==f.magFilter&&(g.magFilter=THREE[f.magFilter]);void 0!==f.anisotropy&&(g.anisotropy=f.anisotropy);f.wrap instanceof Array&&(g.wrapS=THREE[f.wrap[0]],g.wrapT=THREE[f.wrap[1]]);c[f.uuid]=g}return c},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;e=function(a){void 0===c[a]&&THREE.warn("THREE.ObjectLoader: Undefined geometry",a);return c[a]};var f=function(a){void 0===d[a]&&THREE.warn("THREE.ObjectLoader: Undefined material",a);return d[a]};
    switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance,b.decay);break;case "SpotLight":e=new THREE.SpotLight(b.color,
        b.intensity,b.distance,b.angle,b.exponent,b.decay);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);break;case "Mesh":e=new THREE.Mesh(e(b.geometry),f(b.material));break;case "Line":e=new THREE.Line(e(b.geometry),f(b.material),b.mode);break;case "PointCloud":e=new THREE.PointCloud(e(b.geometry),f(b.material));break;case "Sprite":e=new THREE.Sprite(f(b.material));break;case "Group":e=new THREE.Group;break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==
    b.name&&(e.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=b.userData);if(void 0!==b.children)for(var g in b.children)e.add(this.parseObject(b.children[g],c,d));return e}}()};
THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){var e=new THREE.ImageLoader(this.manager);e.setCrossOrigin(this.crossOrigin);e.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)},c,d)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.DataTextureLoader=THREE.BinaryTextureLoader=function(){this._parser=null};
THREE.BinaryTextureLoader.prototype={constructor:THREE.BinaryTextureLoader,load:function(a,b,c,d){var e=this,f=new THREE.DataTexture,g=new THREE.XHRLoader;g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:THREE.ClampToEdgeWrapping,f.wrapT=void 0!==a.wrapT?a.wrapT:THREE.ClampToEdgeWrapping,f.magFilter=void 0!==a.magFilter?a.magFilter:
    THREE.LinearFilter,f.minFilter=void 0!==a.minFilter?a.minFilter:THREE.LinearMipMapLinearFilter,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}};THREE.CompressedTextureLoader=function(){this._parser=null};
THREE.CompressedTextureLoader.prototype={constructor:THREE.CompressedTextureLoader,load:function(a,b,c){var d=this,e=[],f=new THREE.CompressedTexture;f.image=e;var g=new THREE.XHRLoader;g.setResponseType("arraybuffer");if(a instanceof Array){var h=0;c=function(c){g.load(a[c],function(a){a=d._parser(a,!0);e[c]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};h+=1;6===h&&(1==a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.format=a.format,f.needsUpdate=!0,b&&b(f))})};for(var k=0,l=
    a.length;k<l;++k)c(k)}else g.load(a,function(a){a=d._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,g=0;g<c;g++){e[g]={mipmaps:[]};for(var h=0;h<a.mipmapCount;h++)e[g].mipmaps.push(a.mipmaps[g*a.mipmapCount+h]),e[g].format=a.format,e[g].width=a.width,e[g].height=a.height}else f.image.width=a.width,f.image.height=a.height,f.mipmaps=a.mipmaps;1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter);f.format=a.format;f.needsUpdate=!0;b&&b(f)});return f}};
THREE.Material=function(){Object.defineProperty(this,"id",{value:THREE.MaterialIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Material";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.colorWrite=this.depthWrite=this.depthTest=!0;this.polygonOffset=
    !1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this._needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)THREE.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},toJSON:function(){var a={metadata:{version:4.2,
    type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type};""!==this.name&&(a.name=this.name);this instanceof THREE.MeshBasicMaterial?(a.color=this.color.getHex(),this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshLambertMaterial?(a.color=this.color.getHex(),a.emissive=this.emissive.getHex(),this.vertexColors!==THREE.NoColors&&
(a.vertexColors=this.vertexColors),this.shading!==THREE.SmoothShading&&(a.shading=this.shading),this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshPhongMaterial?(a.color=this.color.getHex(),a.emissive=this.emissive.getHex(),a.specular=this.specular.getHex(),a.shininess=this.shininess,this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.shading!==THREE.SmoothShading&&(a.shading=this.shading),
this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshNormalMaterial?(this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshDepthMaterial?(this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.PointCloudMaterial?(a.size=this.size,a.sizeAttenuation=
    this.sizeAttenuation,a.color=this.color.getHex(),this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.blending!==THREE.NormalBlending&&(a.blending=this.blending)):this instanceof THREE.ShaderMaterial?(a.uniforms=this.uniforms,a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader):this instanceof THREE.SpriteMaterial&&(a.color=this.color.getHex());1>this.opacity&&(a.opacity=this.opacity);!1!==this.transparent&&(a.transparent=this.transparent);!1!==this.wireframe&&
(a.wireframe=this.wireframe);return a},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.blendSrcAlpha=this.blendSrcAlpha;a.blendDstAlpha=this.blendDstAlpha;a.blendEquationAlpha=this.blendEquationAlpha;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=
    this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);THREE.MaterialIdCount=0;
THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.type="LineBasicMaterial";this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.type="LineDashedMaterial";this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.constructor=THREE.LineDashedMaterial;
THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.type="MeshBasicMaterial";this.color=new THREE.Color(16777215);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;
    a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.type="MeshLambertMaterial";this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
    "round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=
    this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.type="MeshPhongMaterial";this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.wrapAround=this.metal=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=
    1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);a.specularMap=this.specularMap;
    a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.type="MeshDepthMaterial";this.wireframe=this.morphTargets=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;
THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.type="MeshNormalMaterial";this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshFaceMaterial=function(a){this.uuid=THREE.Math.generateUUID();this.type="MeshFaceMaterial";this.materials=a instanceof Array?a:[]};
THREE.MeshFaceMaterial.prototype={constructor:THREE.MeshFaceMaterial,toJSON:function(){for(var a={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},b=0,c=this.materials.length;b<c;b++)a.materials.push(this.materials[b].toJSON());return a},clone:function(){for(var a=new THREE.MeshFaceMaterial,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a}};
THREE.PointCloudMaterial=function(a){THREE.Material.call(this);this.type="PointCloudMaterial";this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.PointCloudMaterial.prototype=Object.create(THREE.Material.prototype);THREE.PointCloudMaterial.prototype.constructor=THREE.PointCloudMaterial;
THREE.PointCloudMaterial.prototype.clone=function(){var a=new THREE.PointCloudMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleBasicMaterial=function(a){THREE.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ParticleSystemMaterial=function(a){THREE.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.attributes=null;this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=
    this.morphTargets=this.skinning=!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.setValues(a)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);THREE.ShaderMaterial.prototype.constructor=THREE.ShaderMaterial;
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
    this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a);this.type="RawShaderMaterial"};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);THREE.RawShaderMaterial.prototype.constructor=THREE.RawShaderMaterial;THREE.RawShaderMaterial.prototype.clone=function(){var a=new THREE.RawShaderMaterial;THREE.ShaderMaterial.prototype.clone.call(this,a);return a};
THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.type="SpriteMaterial";this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.constructor=THREE.SpriteMaterial;
THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.rotation=this.rotation;a.fog=this.fog;return a};
THREE.Texture=function(a,b,c,d,e,f,g,h,k){Object.defineProperty(this,"id",{value:THREE.TextureIdCount++});this.uuid=THREE.Math.generateUUID();this.sourceFile=this.name="";this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;
    this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this._needsUpdate=!1;this.onUpdate=null};THREE.Texture.DEFAULT_IMAGE=void 0;THREE.Texture.DEFAULT_MAPPING=THREE.UVMapping;
THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=
    this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=this.unpackAlignment;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CubeTexture=function(a,b,c,d,e,f,g,h,k){b=void 0!==b?b:THREE.CubeReflectionMapping;THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.images=a};
THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CubeTexture.prototype.constructor=THREE.CubeTexture;THREE.CubeTexture.clone=function(a){void 0===a&&(a=new THREE.CubeTexture);THREE.Texture.prototype.clone.call(this,a);a.images=this.images;return a};THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,k,l,p){THREE.Texture.call(this,null,f,g,h,k,l,d,e,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.constructor=THREE.CompressedTexture;THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,k,l,p){THREE.Texture.call(this,null,f,g,h,k,l,d,e,p);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.constructor=THREE.DataTexture;
THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.VideoTexture=function(a,b,c,d,e,f,g,h,k){THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.generateMipmaps=!1;var l=this,p=function(){requestAnimationFrame(p);a.readyState===a.HAVE_ENOUGH_DATA&&(l.needsUpdate=!0)};p()};THREE.VideoTexture.prototype=Object.create(THREE.Texture.prototype);THREE.VideoTexture.prototype.constructor=THREE.VideoTexture;
THREE.Group=function(){THREE.Object3D.call(this);this.type="Group"};THREE.Group.prototype=Object.create(THREE.Object3D.prototype);THREE.Group.prototype.constructor=THREE.Group;THREE.PointCloud=function(a,b){THREE.Object3D.call(this);this.type="PointCloud";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.PointCloudMaterial({color:16777215*Math.random()})};THREE.PointCloud.prototype=Object.create(THREE.Object3D.prototype);THREE.PointCloud.prototype.constructor=THREE.PointCloud;
THREE.PointCloud.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray;return function(c,d){var e=this,f=e.geometry,g=c.params.PointCloud.threshold;a.getInverse(this.matrixWorld);b.copy(c.ray).applyMatrix4(a);if(null===f.boundingBox||!1!==b.isIntersectionBox(f.boundingBox)){var h=g/((this.scale.x+this.scale.y+this.scale.z)/3),k=new THREE.Vector3,g=function(a,f){var g=b.distanceToPoint(a);if(g<h){var k=b.closestPointToPoint(a);k.applyMatrix4(e.matrixWorld);var n=c.ray.origin.distanceTo(k);
    d.push({distance:n,distanceToRay:g,point:k.clone(),index:f,face:null,object:e})}};if(f instanceof THREE.BufferGeometry){var l=f.attributes,p=l.position.array;if(void 0!==l.index){var l=l.index.array,q=f.offsets;0===q.length&&(q=[{start:0,count:l.length,index:0}]);for(var n=0,t=q.length;n<t;++n)for(var r=q[n].start,s=q[n].index,f=r,r=r+q[n].count;f<r;f++){var u=s+l[f];k.fromArray(p,3*u);g(k,u)}}else for(l=p.length/3,f=0;f<l;f++)k.set(p[3*f],p[3*f+1],p[3*f+2]),g(k,f)}else for(k=this.geometry.vertices,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       f=0;f<k.length;f++)g(k[f],f)}}}();THREE.PointCloud.prototype.clone=function(a){void 0===a&&(a=new THREE.PointCloud(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){THREE.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud.");return new THREE.PointCloud(a,b)};
THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.type="Line";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.mode=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.constructor=THREE.Line;
THREE.Line.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==d.ray.isIntersectionSphere(c)){a.getInverse(this.matrixWorld);b.copy(d.ray).applyMatrix4(a);var h=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3,p=new THREE.Vector3,q=this.mode===THREE.LineStrip?1:2;if(g instanceof
    THREE.BufferGeometry){var n=g.attributes;if(void 0!==n.index){var t=n.index.array,n=n.position.array,r=g.offsets;0===r.length&&(r=[{start:0,count:t.length,index:0}]);for(var s=0;s<r.length;s++)for(var u=r[s].start,v=r[s].count,x=r[s].index,g=u;g<u+v-1;g+=q){var D=x+t[g+1];h.fromArray(n,3*(x+t[g]));k.fromArray(n,3*D);D=b.distanceSqToSegment(h,k,p,l);D>f||(D=b.origin.distanceTo(p),D<d.near||D>d.far||e.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),index:g,offsetIndex:s,face:null,faceIndex:null,
    object:this}))}}else for(n=n.position.array,g=0;g<n.length/3-1;g+=q)h.fromArray(n,3*g),k.fromArray(n,3*g+3),D=b.distanceSqToSegment(h,k,p,l),D>f||(D=b.origin.distanceTo(p),D<d.near||D>d.far||e.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(g instanceof THREE.Geometry)for(h=g.vertices,k=h.length,g=0;g<k-1;g+=q)D=b.distanceSqToSegment(h[g],h[g+1],p,l),D>f||(D=b.origin.distanceTo(p),D<d.near||D>d.far||e.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),
    index:g,face:null,faceIndex:null,object:this}))}}}();THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.mode));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.constructor=THREE.Mesh;THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];THREE.warn("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3;return function(g,h){var k=this.geometry;null===k.boundingSphere&&k.computeBoundingSphere();c.copy(k.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==g.ray.isIntersectionSphere(c)&&(a.getInverse(this.matrixWorld),b.copy(g.ray).applyMatrix4(a),null===k.boundingBox||!1!==b.isIntersectionBox(k.boundingBox)))if(k instanceof THREE.BufferGeometry){var l=
    this.material;if(void 0!==l){var p=k.attributes,q,n,t=g.precision;if(void 0!==p.index){var r=p.index.array,s=p.position.array,u=k.offsets;0===u.length&&(u=[{start:0,count:r.length,index:0}]);for(var v=0,x=u.length;v<x;++v)for(var p=u[v].start,D=u[v].index,k=p,w=p+u[v].count;k<w;k+=3){p=D+r[k];q=D+r[k+1];n=D+r[k+2];d.fromArray(s,3*p);e.fromArray(s,3*q);f.fromArray(s,3*n);var y=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==THREE.DoubleSide);if(null!==y){y.applyMatrix4(this.matrixWorld);
    var A=g.ray.origin.distanceTo(y);A<t||A<g.near||A>g.far||h.push({distance:A,point:y,face:new THREE.Face3(p,q,n,THREE.Triangle.normal(d,e,f)),faceIndex:null,object:this})}}}else for(s=p.position.array,r=k=0,w=s.length;k<w;k+=3,r+=9)p=k,q=k+1,n=k+2,d.fromArray(s,r),e.fromArray(s,r+3),f.fromArray(s,r+6),y=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==THREE.DoubleSide),null!==y&&(y.applyMatrix4(this.matrixWorld),A=g.ray.origin.distanceTo(y),A<t||A<g.near||A>
g.far||h.push({distance:A,point:y,face:new THREE.Face3(p,q,n,THREE.Triangle.normal(d,e,f)),faceIndex:null,object:this}))}}else if(k instanceof THREE.Geometry)for(r=this.material instanceof THREE.MeshFaceMaterial,s=!0===r?this.material.materials:null,t=g.precision,u=k.vertices,v=0,x=k.faces.length;v<x;v++)if(D=k.faces[v],l=!0===r?s[D.materialIndex]:this.material,void 0!==l){p=u[D.a];q=u[D.b];n=u[D.c];if(!0===l.morphTargets){y=k.morphTargets;A=this.morphTargetInfluences;d.set(0,0,0);e.set(0,0,0);f.set(0,
    0,0);for(var w=0,E=y.length;w<E;w++){var G=A[w];if(0!==G){var F=y[w].vertices;d.x+=(F[D.a].x-p.x)*G;d.y+=(F[D.a].y-p.y)*G;d.z+=(F[D.a].z-p.z)*G;e.x+=(F[D.b].x-q.x)*G;e.y+=(F[D.b].y-q.y)*G;e.z+=(F[D.b].z-q.z)*G;f.x+=(F[D.c].x-n.x)*G;f.y+=(F[D.c].y-n.y)*G;f.z+=(F[D.c].z-n.z)*G}}d.add(p);e.add(q);f.add(n);p=d;q=e;n=f}y=l.side===THREE.BackSide?b.intersectTriangle(n,q,p,!0):b.intersectTriangle(p,q,n,l.side!==THREE.DoubleSide);null!==y&&(y.applyMatrix4(this.matrixWorld),A=g.ray.origin.distanceTo(y),A<t||
A<g.near||A>g.far||h.push({distance:A,point:y,face:D,faceIndex:v,object:this}))}}}();THREE.Mesh.prototype.clone=function(a,b){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a,b);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.type="Bone";this.skin=a};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);THREE.Bone.prototype.constructor=THREE.Bone;
THREE.Skeleton=function(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<this.bones.length?64:64<this.bones.length?32:16<this.bones.length?16:8,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),
    this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(THREE.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new THREE.Matrix4)};
THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}};
THREE.Skeleton.prototype.pose=function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)};
THREE.Skeleton.prototype.update=function(){var a=new THREE.Matrix4;return function(){for(var b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new THREE.Matrix4;this.bindMatrixInverse=new THREE.Matrix4;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e,f,g,h=0,k=this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],e=d.pos,f=d.rotq,g=d.scl,b=new THREE.Bone(this),a.push(b),b.name=d.name,b.position.set(e[0],e[1],e[2]),b.quaternion.set(f[0],f[1],f[2],f[3]),void 0!==g?b.scale.set(g[0],g[1],g[2]):b.scale.set(1,
    1,1);h=0;for(k=this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],-1!==d.parent?a[d.parent].add(a[h]):this.add(a[h])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new THREE.Skeleton(a,void 0,c))};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh;THREE.SkinnedMesh.prototype.bind=function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)};
THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()};THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):THREE.warn("THREE.SkinnedMesh unreckognized bindMode: "+this.bindMode)};
THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.type="MorphAnimMesh";this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.constructor=THREE.MorphAnimMesh;THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)_?(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=(c.end-c.start)/b*1E3,this.time=0):THREE.warn("THREE.MorphAnimMesh: animation["+a+"] undefined in .playAnimation()")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.interpolateTargets=function(a,b,c){for(var d=this.morphTargetInfluences,e=0,f=d.length;e<f;e++)d[e]=0;-1<a&&(d[a]=1-c);-1<b&&(d[b]=c)};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.constructor=THREE.LOD;THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}();
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();
THREE.LOD.prototype.clone=function(a){void 0===a&&(a=new THREE.LOD);THREE.Object3D.prototype.clone.call(this,a);for(var b=0,c=this.objects.length;b<c;b++){var d=this.objects[b].object.clone();d.visible=0===b;a.addLevel(d,this.objects[b].distance)}return a};
THREE.Sprite=function(){var a=new Uint16Array([0,1,2,0,2,3]),b=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),c=new Float32Array([0,0,1,0,1,1,0,1]),d=new THREE.BufferGeometry;d.addAttribute("index",new THREE.BufferAttribute(a,1));d.addAttribute("position",new THREE.BufferAttribute(b,3));d.addAttribute("uv",new THREE.BufferAttribute(c,2));return function(a){THREE.Object3D.call(this);this.type="Sprite";this.geometry=d;this.material=void 0!==a?a:new THREE.SpriteMaterial}}();
THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);THREE.Sprite.prototype.constructor=THREE.Sprite;THREE.Sprite.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceToPoint(a);d>this.scale.x||c.push({distance:d,point:this.position,face:null,object:this})}}();THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};
THREE.Particle=THREE.Sprite;THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare.prototype.constructor=THREE.LensFlare;
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-c.rotation)};THREE.Scene=function(){THREE.Object3D.call(this);this.type="Scene";this.overrideMaterial=this.fog=null;this.autoUpdate=!0};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.constructor=THREE.Scene;THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};
THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.ShaderChunk={};THREE.ShaderChunk.common="#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\nfloat square( in float a ) { return a*a; }\nvec2  square( in vec2 a )  { return vec2( a.x*a.x, a.y*a.y ); }\nvec3  square( in vec3 a )  { return vec3( a.x*a.x, a.y*a.y, a.z*a.z ); }\nvec4  square( in vec4 a )  { return vec4( a.x*a.x, a.y*a.y, a.z*a.z, a.w*a.w ); }\nfloat saturate( in float a ) { return clamp( a, 0.0, 1.0 ); }\nvec2  saturate( in vec2 a )  { return clamp( a, 0.0, 1.0 ); }\nvec3  saturate( in vec3 a )  { return clamp( a, 0.0, 1.0 ); }\nvec4  saturate( in vec4 a )  { return clamp( a, 0.0, 1.0 ); }\nfloat average( in float a ) { return a; }\nfloat average( in vec2 a )  { return ( a.x + a.y) * 0.5; }\nfloat average( in vec3 a )  { return ( a.x + a.y + a.z) / 3.0; }\nfloat average( in vec4 a )  { return ( a.x + a.y + a.z + a.w) * 0.25; }\nfloat whiteCompliment( in float a ) { return saturate( 1.0 - a ); }\nvec2  whiteCompliment( in vec2 a )  { return saturate( vec2(1.0) - a ); }\nvec3  whiteCompliment( in vec3 a )  { return saturate( vec3(1.0) - a ); }\nvec4  whiteCompliment( in vec4 a )  { return saturate( vec4(1.0) - a ); }\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n}\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal) {\n\tfloat distance = dot( planeNormal, point-pointOnPlane );\n\treturn point - distance * planeNormal;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn pointOnLine + lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) );\n}\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\tif ( decayExponent > 0.0 ) {\n\t  return pow( saturate( 1.0 - lightDistance / cutoffDistance ), decayExponent );\n\t}\n\treturn 1.0;\n}\n\nvec3 inputToLinear( in vec3 a ) {\n#ifdef GAMMA_INPUT\n\treturn pow( a, vec3( float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\nvec3 linearToOutput( in vec3 a ) {\n#ifdef GAMMA_OUTPUT\n\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\n";
THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n";THREE.ShaderChunk.lights_lambert_vertex="vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * attenuation;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * attenuation;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * attenuation * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * attenuation * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack += ambientLightColor;\n\n#endif\n";
THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n";THREE.ShaderChunk.default_vertex="#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n\tvec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n";
THREE.ShaderChunk.map_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";THREE.ShaderChunk.lightmap_pars_vertex="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif";THREE.ShaderChunk.lights_phong_fragment="#ifndef FLAT_SHADED\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n\t#endif\n\n#else\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += pointLightColor[ i ] * pointDiffuseWeight * attenuation;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * attenuation * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\ttotalDiffuseLight += spotLightColor[ i ] * spotDiffuseWeight * attenuation * spotEffect;\n\n\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\ttotalSpecularLight += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * attenuation * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\ttotalDiffuseLight += hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\n#ifdef METAL\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) * specular + totalSpecularLight + emissive;\n\n#else\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) + totalSpecularLight + emissive;\n\n#endif\n";
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif";
THREE.ShaderChunk.envmap_pars_fragment="#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif";THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";
THREE.ShaderChunk.lights_phong_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif";THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor.xyz = inputToLinear( texelColor.xyz );\n\n\tdiffuseColor *= texelColor;\n\n#endif";THREE.ShaderChunk.lightmap_vertex="#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif";THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n";
THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\n\tvColor.xyz = inputToLinear( color.xyz );\n\n#endif";THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n";THREE.ShaderChunk.linear_to_gamma_fragment="\n\toutgoingLight = linearToOutput( outgoingLight );\n";THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";THREE.ShaderChunk.lights_lambert_pars_vertex="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n";
THREE.ShaderChunk.map_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\n\tenvColor.xyz = inputToLinear( envColor.xyz );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = exp2( - square( fogDensity ) * square( depth ) * LOG2 );\n\t\tfogFactor = whiteCompliment( fogFactor );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\toutgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif";
THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.defaultnormal_vertex="#ifdef USE_SKINNING\n\n\tvec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n\tvec3 objectNormal = morphedNormal;\n\n#else\n\n\tvec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n";THREE.ShaderChunk.lights_phong_pars_fragment="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n";
THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";THREE.ShaderChunk.map_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\n\toutgoingLight *= diffuseColor.xyz * texture2D( lightMap, vUv2 ).xyz;\n\n#endif";THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif";THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif";
THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.shadowmap_fragment="#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t// NOTE: I am unsure if this is correct in linear space.  -bhouston, Dec 29, 2014\n\tshadowColor = inputToLinear( shadowColor );\n\n\toutgoingLight = outgoingLight * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#elif defined( USE_MORPHTARGETS )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";
THREE.UniformsUtils={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];b[c][d]=e instanceof THREE.Color||e instanceof THREE.Vector2||e instanceof THREE.Vector3||e instanceof THREE.Vector4||e instanceof THREE.Matrix4||e instanceof THREE.Texture?e.clone():e instanceof Array?e.slice():e}}return b}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:.98},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",
    value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",value:[]},hemisphereLightGroundColor:{type:"fv",
    value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},pointLightDecay:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]},spotLightDecay:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",
    value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",
    THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"\t#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\t#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,
    "}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",
    THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
    lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,
        THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,
        THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,
        THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,
        THREE.ShaderChunk.specularmap_fragment,"\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t\telse\n\t\t\toutgoingLight += diffuseColor.rgb * vLightBack + emissive;\n\t#else\n\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t#endif",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
    phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif",THREE.ShaderChunk.common,
        THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,
        THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"\tvViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;",
        THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,
        THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;",
        THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( psColor, opacity );",
        THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphatest_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),
        vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",
            THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
    depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;\nuniform float mFar;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,
        "void main() {\n\tvNormal = normalize( normalMatrix * normal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},cube:{uniforms:{tCube:{type:"t",value:null},
        tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},equirect:{uniforms:{tEquirect:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );",THREE.ShaderChunk.logdepthbuf_fragment,
        "}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",
        THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")}};
THREE.WebGLRenderer=function(a){function b(a){var b=a.geometry;a=a.material;var c=b.vertices.length;if(a.attributes){void 0===b.__webglCustomAttributesList&&(b.__webglCustomAttributesList=[]);for(var d in a.attributes){var e=a.attributes[d];if(!e.__webglInitialized||e.createUniqueBuffers){e.__webglInitialized=!0;var f=1;"v2"===e.type?f=2:"v3"===e.type?f=3:"v4"===e.type?f=4:"c"===e.type&&(f=3);e.size=f;e.array=new Float32Array(c*f);e.buffer=m.createBuffer();e.buffer.belongsToAttribute=d;e.needsUpdate=
    !0}b.__webglCustomAttributesList.push(e)}}}function c(a,b){return a.material instanceof THREE.MeshFaceMaterial?a.material.materials[b.materialIndex]:a.material}function d(a,b,c,d){c=c.attributes;var e=b.attributes;b=b.attributesKeys;for(var f=0,g=b.length;f<g;f++){var h=b[f],k=e[h];if(0<=k){var n=c[h];void 0!==n?(h=n.itemSize,m.bindBuffer(m.ARRAY_BUFFER,n.buffer),W.enableAttribute(k),m.vertexAttribPointer(k,h,m.FLOAT,!1,0,d*h*4)):void 0!==a.defaultAttributeValues&&(2===a.defaultAttributeValues[h].length?
    m.vertexAttrib2fv(k,a.defaultAttributeValues[h]):3===a.defaultAttributeValues[h].length&&m.vertexAttrib3fv(k,a.defaultAttributeValues[h]))}}W.disableUnusedAttributes()}function e(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function f(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function g(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   b){return b[0]-a[0]}function h(a){if(!1!==a.visible){if(!(a instanceof THREE.Scene||a instanceof THREE.Group)){void 0===a.__webglInit&&(a.__webglInit=!0,a._modelViewMatrix=new THREE.Matrix4,a._normalMatrix=new THREE.Matrix3,a.addEventListener("removed",wb));var c=a.geometry;if(void 0!==c&&void 0===c.__webglInit)if(c.__webglInit=!0,c.addEventListener("dispose",jb),c instanceof THREE.BufferGeometry)B.info.memory.geometries++;else if(a instanceof THREE.Mesh)q(a,c);else if(a instanceof THREE.Line){if(void 0===
    c.__webglVertexBuffer){c.__webglVertexBuffer=m.createBuffer();c.__webglColorBuffer=m.createBuffer();c.__webglLineDistanceBuffer=m.createBuffer();B.info.memory.geometries++;var d=c.vertices.length;c.__vertexArray=new Float32Array(3*d);c.__colorArray=new Float32Array(3*d);c.__lineDistanceArray=new Float32Array(1*d);c.__webglLineCount=d;b(a);c.verticesNeedUpdate=!0;c.colorsNeedUpdate=!0;c.lineDistancesNeedUpdate=!0}}else a instanceof THREE.PointCloud&&void 0===c.__webglVertexBuffer&&(c.__webglVertexBuffer=
    m.createBuffer(),c.__webglColorBuffer=m.createBuffer(),B.info.memory.geometries++,d=c.vertices.length,c.__vertexArray=new Float32Array(3*d),c.__colorArray=new Float32Array(3*d),c.__webglParticleCount=d,b(a),c.verticesNeedUpdate=!0,c.colorsNeedUpdate=!0);if(void 0===a.__webglActive)if(a.__webglActive=!0,a instanceof THREE.Mesh)if(c instanceof THREE.BufferGeometry)n(ba,c,a);else{if(c instanceof THREE.Geometry)for(var c=Ua[c.id],d=0,e=c.length;d<e;d++)n(ba,c[d],a)}else a instanceof THREE.Line||a instanceof
THREE.PointCloud?n(ba,c,a):(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)&&qa.push({id:null,object:a,opaque:null,transparent:null,z:0});if(a instanceof THREE.Light)ca.push(a);else if(a instanceof THREE.Sprite)Xa.push(a);else if(a instanceof THREE.LensFlare)Ya.push(a);else if((c=ba[a.id])&&(!1===a.frustumCulled||!0===cb.intersectsObject(a)))for(d=0,e=c.length;d<e;d++){var f=c[d],g=f,k=g.object,l=g.buffer,p=k.geometry,k=k.material;k instanceof THREE.MeshFaceMaterial?(k=k.materials[p instanceof
THREE.BufferGeometry?0:l.materialIndex],g.material=k,k.transparent?Qa.push(g):Ka.push(g)):k&&(g.material=k,k.transparent?Qa.push(g):Ka.push(g));f.render=!0;!0===B.sortObjects&&(wa.setFromMatrixPosition(a.matrixWorld),wa.applyProjection(db),f.z=wa.z)}}d=0;for(e=a.children.length;d<e;d++)h(a.children[d])}}function k(a,b,c,d,e){for(var f,g=0,h=a.length;g<h;g++){f=a[g];var k=f.object,m=f.buffer;w(k,b);if(e)f=e;else{f=f.material;if(!f)continue;u(f)}B.setMaterialFaces(f);m instanceof THREE.BufferGeometry?
    B.renderBufferDirect(b,c,d,f,m,k):B.renderBuffer(b,c,d,f,m,k)}}function l(a,b,c,d,e,f){for(var g,h=0,k=a.length;h<k;h++){g=a[h];var m=g.object;if(m.visible){if(f)g=f;else{g=g[b];if(!g)continue;u(g)}B.renderImmediateObject(c,d,e,g,m)}}}function p(a){var b=a.object.material;b.transparent?(a.transparent=b,a.opaque=null):(a.opaque=b,a.transparent=null)}function q(a,b){var d=a.material,e=!1;if(void 0===Ua[b.id]||!0===b.groupsNeedUpdate){delete ba[a.id];for(var f=Ua,g=b.id,d=d instanceof THREE.MeshFaceMaterial,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                h=da.get("OES_element_index_uint")?4294967296:65535,k,e={},l=b.morphTargets.length,p=b.morphNormals.length,q,s={},t=[],r=0,w=b.faces.length;r<w;r++){k=b.faces[r];var u=d?k.materialIndex:0;u in e||(e[u]={hash:u,counter:0});k=e[u].hash+"_"+e[u].counter;k in s||(q={id:Qb++,faces3:[],materialIndex:u,vertices:0,numMorphTargets:l,numMorphNormals:p},s[k]=q,t.push(q));s[k].vertices+3>h&&(e[u].counter+=1,k=e[u].hash+"_"+e[u].counter,k in s||(q={id:Qb++,faces3:[],materialIndex:u,vertices:0,numMorphTargets:l,
    numMorphNormals:p},s[k]=q,t.push(q)));s[k].faces3.push(r);s[k].vertices+=3}f[g]=t;b.groupsNeedUpdate=!1}f=Ua[b.id];g=0;for(d=f.length;g<d;g++){h=f[g];if(void 0===h.__webglVertexBuffer){e=h;e.__webglVertexBuffer=m.createBuffer();e.__webglNormalBuffer=m.createBuffer();e.__webglTangentBuffer=m.createBuffer();e.__webglColorBuffer=m.createBuffer();e.__webglUVBuffer=m.createBuffer();e.__webglUV2Buffer=m.createBuffer();e.__webglSkinIndicesBuffer=m.createBuffer();e.__webglSkinWeightsBuffer=m.createBuffer();
    e.__webglFaceBuffer=m.createBuffer();e.__webglLineBuffer=m.createBuffer();if(p=e.numMorphTargets)for(e.__webglMorphTargetsBuffers=[],l=0;l<p;l++)e.__webglMorphTargetsBuffers.push(m.createBuffer());if(p=e.numMorphNormals)for(e.__webglMorphNormalsBuffers=[],l=0;l<p;l++)e.__webglMorphNormalsBuffers.push(m.createBuffer());B.info.memory.geometries++;e=h;r=a;w=r.geometry;p=e.faces3;l=3*p.length;s=1*p.length;t=3*p.length;p=c(r,e);e.__vertexArray=new Float32Array(3*l);e.__normalArray=new Float32Array(3*l);
    e.__colorArray=new Float32Array(3*l);e.__uvArray=new Float32Array(2*l);1<w.faceVertexUvs.length&&(e.__uv2Array=new Float32Array(2*l));w.hasTangents&&(e.__tangentArray=new Float32Array(4*l));r.geometry.skinWeights.length&&r.geometry.skinIndices.length&&(e.__skinIndexArray=new Float32Array(4*l),e.__skinWeightArray=new Float32Array(4*l));r=null!==da.get("OES_element_index_uint")&&21845<s?Uint32Array:Uint16Array;e.__typeArray=r;e.__faceArray=new r(3*s);e.__lineArray=new r(2*t);if(w=e.numMorphTargets)for(e.__morphTargetsArrays=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 [],r=0;r<w;r++)e.__morphTargetsArrays.push(new Float32Array(3*l));if(w=e.numMorphNormals)for(e.__morphNormalsArrays=[],r=0;r<w;r++)e.__morphNormalsArrays.push(new Float32Array(3*l));e.__webglFaceCount=3*s;e.__webglLineCount=2*t;if(p.attributes)for(s in void 0===e.__webglCustomAttributesList&&(e.__webglCustomAttributesList=[]),s=void 0,p.attributes){var t=p.attributes[s],r={},v;for(v in t)r[v]=t[v];if(!r.__webglInitialized||r.createUniqueBuffers)r.__webglInitialized=!0,w=1,"v2"===r.type?w=2:"v3"===
    r.type?w=3:"v4"===r.type?w=4:"c"===r.type&&(w=3),r.size=w,r.array=new Float32Array(l*w),r.buffer=m.createBuffer(),r.buffer.belongsToAttribute=s,t.needsUpdate=!0,r.__original=t;e.__webglCustomAttributesList.push(r)}e.__inittedArrays=!0;b.verticesNeedUpdate=!0;b.morphTargetsNeedUpdate=!0;b.elementsNeedUpdate=!0;b.uvsNeedUpdate=!0;b.normalsNeedUpdate=!0;b.tangentsNeedUpdate=!0;e=b.colorsNeedUpdate=!0}else e=!1;(e||void 0===a.__webglActive)&&n(ba,h,a)}a.__webglActive=!0}function n(a,b,c){var d=c.id;a[d]=
    a[d]||[];a[d].push({id:d,buffer:b,object:c,material:null,z:0})}function t(a){var b=a.geometry;if(b instanceof THREE.BufferGeometry)for(var d=b.attributes,e=b.attributesKeys,f=0,g=e.length;f<g;f++){var h=e[f],k=d[h],n="index"===h?m.ELEMENT_ARRAY_BUFFER:m.ARRAY_BUFFER;void 0===k.buffer?(k.buffer=m.createBuffer(),m.bindBuffer(n,k.buffer),m.bufferData(n,k.array,k instanceof THREE.DynamicBufferAttribute?m.DYNAMIC_DRAW:m.STATIC_DRAW),k.needsUpdate=!1):!0===k.needsUpdate&&(m.bindBuffer(n,k.buffer),void 0===
k.updateRange||-1===k.updateRange.count?m.bufferSubData(n,0,k.array):0===k.updateRange.count?console.error("THREE.WebGLRenderer.updateObject: using updateRange for THREE.DynamicBufferAttribute and marked as needsUpdate but count is 0, ensure you are using set methods or updating manually."):(m.bufferSubData(n,k.updateRange.offset*k.array.BYTES_PER_ELEMENT,k.array.subarray(k.updateRange.offset,k.updateRange.offset+k.updateRange.count)),k.updateRange.count=0),k.needsUpdate=!1)}else if(a instanceof THREE.Mesh){!0===
b.groupsNeedUpdate&&q(a,b);for(var l=Ua[b.id],f=0,p=l.length;f<p;f++){var t=l[f],w=c(a,t),u=w.attributes&&r(w);if(b.verticesNeedUpdate||b.morphTargetsNeedUpdate||b.elementsNeedUpdate||b.uvsNeedUpdate||b.normalsNeedUpdate||b.colorsNeedUpdate||b.tangentsNeedUpdate||u){var v=t,x=a,D=m.DYNAMIC_DRAW,A=!b.dynamic,E=w;if(v.__inittedArrays){var G=!1===E instanceof THREE.MeshPhongMaterial&&E.shading===THREE.FlatShading,y=void 0,z=void 0,F=void 0,B=void 0,I=void 0,H=void 0,M=void 0,R=void 0,P=void 0,U=void 0,
    O=void 0,J=void 0,L=void 0,N=void 0,Ka=void 0,V=void 0,W=void 0,Qa=void 0,Ya=void 0,Xa=void 0,da=void 0,ba=void 0,ja=void 0,Pa=void 0,ka=void 0,Q=void 0,ha=void 0,ia=void 0,ob=void 0,Y=void 0,ub=void 0,pa=void 0,ab=void 0,oa=void 0,ca=void 0,qa=void 0,Ca=void 0,ta=void 0,na=void 0,wa=void 0,La=0,Ma=0,kb=0,yb=0,zb=0,Ra=0,Aa=0,eb=0,Ha=0,la=0,ra=0,K=0,za=void 0,Sa=v.__vertexArray,Ab=v.__uvArray,lb=v.__uv2Array,Na=v.__normalArray,sa=v.__tangentArray,Da=v.__colorArray,Ea=v.__skinIndexArray,Fa=v.__skinWeightArray,
    Gb=v.__morphTargetsArrays,Bb=v.__morphNormalsArrays,mb=v.__webglCustomAttributesList,C=void 0,Va=v.__faceArray,Ta=v.__lineArray,ea=x.geometry,fb=ea.elementsNeedUpdate,vb=ea.uvsNeedUpdate,Mb=ea.normalsNeedUpdate,Ob=ea.tangentsNeedUpdate,ib=ea.colorsNeedUpdate,sb=ea.morphTargetsNeedUpdate,Cb=ea.vertices,$=v.faces3,xa=ea.faces,Hb=ea.faceVertexUvs[0],Oa=ea.faceVertexUvs[1],$a=ea.skinIndices,Ga=ea.skinWeights,nb=ea.morphTargets,bb=ea.morphNormals;if(ea.verticesNeedUpdate){y=0;for(z=$.length;y<z;y++)B=
    xa[$[y]],J=Cb[B.a],L=Cb[B.b],N=Cb[B.c],Sa[Ma]=J.x,Sa[Ma+1]=J.y,Sa[Ma+2]=J.z,Sa[Ma+3]=L.x,Sa[Ma+4]=L.y,Sa[Ma+5]=L.z,Sa[Ma+6]=N.x,Sa[Ma+7]=N.y,Sa[Ma+8]=N.z,Ma+=9;m.bindBuffer(m.ARRAY_BUFFER,v.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,Sa,D)}if(sb)for(ca=0,qa=nb.length;ca<qa;ca++){y=ra=0;for(z=$.length;y<z;y++)na=$[y],B=xa[na],J=nb[ca].vertices[B.a],L=nb[ca].vertices[B.b],N=nb[ca].vertices[B.c],Ca=Gb[ca],Ca[ra]=J.x,Ca[ra+1]=J.y,Ca[ra+2]=J.z,Ca[ra+3]=L.x,Ca[ra+4]=L.y,Ca[ra+5]=L.z,Ca[ra+6]=N.x,Ca[ra+
7]=N.y,Ca[ra+8]=N.z,E.morphNormals&&(G?Xa=Ya=Qa=bb[ca].faceNormals[na]:(wa=bb[ca].vertexNormals[na],Qa=wa.a,Ya=wa.b,Xa=wa.c),ta=Bb[ca],ta[ra]=Qa.x,ta[ra+1]=Qa.y,ta[ra+2]=Qa.z,ta[ra+3]=Ya.x,ta[ra+4]=Ya.y,ta[ra+5]=Ya.z,ta[ra+6]=Xa.x,ta[ra+7]=Xa.y,ta[ra+8]=Xa.z),ra+=9;m.bindBuffer(m.ARRAY_BUFFER,v.__webglMorphTargetsBuffers[ca]);m.bufferData(m.ARRAY_BUFFER,Gb[ca],D);E.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglMorphNormalsBuffers[ca]),m.bufferData(m.ARRAY_BUFFER,Bb[ca],D))}if(Ga.length){y=0;
    for(z=$.length;y<z;y++)B=xa[$[y]],Pa=Ga[B.a],ka=Ga[B.b],Q=Ga[B.c],Fa[la]=Pa.x,Fa[la+1]=Pa.y,Fa[la+2]=Pa.z,Fa[la+3]=Pa.w,Fa[la+4]=ka.x,Fa[la+5]=ka.y,Fa[la+6]=ka.z,Fa[la+7]=ka.w,Fa[la+8]=Q.x,Fa[la+9]=Q.y,Fa[la+10]=Q.z,Fa[la+11]=Q.w,ha=$a[B.a],ia=$a[B.b],ob=$a[B.c],Ea[la]=ha.x,Ea[la+1]=ha.y,Ea[la+2]=ha.z,Ea[la+3]=ha.w,Ea[la+4]=ia.x,Ea[la+5]=ia.y,Ea[la+6]=ia.z,Ea[la+7]=ia.w,Ea[la+8]=ob.x,Ea[la+9]=ob.y,Ea[la+10]=ob.z,Ea[la+11]=ob.w,la+=12;0<la&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglSkinIndicesBuffer),
        m.bufferData(m.ARRAY_BUFFER,Ea,D),m.bindBuffer(m.ARRAY_BUFFER,v.__webglSkinWeightsBuffer),m.bufferData(m.ARRAY_BUFFER,Fa,D))}if(ib){y=0;for(z=$.length;y<z;y++)B=xa[$[y]],M=B.vertexColors,R=B.color,3===M.length&&E.vertexColors===THREE.VertexColors?(da=M[0],ba=M[1],ja=M[2]):ja=ba=da=R,Da[Ha]=da.r,Da[Ha+1]=da.g,Da[Ha+2]=da.b,Da[Ha+3]=ba.r,Da[Ha+4]=ba.g,Da[Ha+5]=ba.b,Da[Ha+6]=ja.r,Da[Ha+7]=ja.g,Da[Ha+8]=ja.b,Ha+=9;0<Ha&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,Da,
    D))}if(Ob&&ea.hasTangents){y=0;for(z=$.length;y<z;y++)B=xa[$[y]],P=B.vertexTangents,Ka=P[0],V=P[1],W=P[2],sa[Aa]=Ka.x,sa[Aa+1]=Ka.y,sa[Aa+2]=Ka.z,sa[Aa+3]=Ka.w,sa[Aa+4]=V.x,sa[Aa+5]=V.y,sa[Aa+6]=V.z,sa[Aa+7]=V.w,sa[Aa+8]=W.x,sa[Aa+9]=W.y,sa[Aa+10]=W.z,sa[Aa+11]=W.w,Aa+=12;m.bindBuffer(m.ARRAY_BUFFER,v.__webglTangentBuffer);m.bufferData(m.ARRAY_BUFFER,sa,D)}if(Mb){y=0;for(z=$.length;y<z;y++)if(B=xa[$[y]],I=B.vertexNormals,H=B.normal,3===I.length&&!1===G)for(Y=0;3>Y;Y++)pa=I[Y],Na[Ra]=pa.x,Na[Ra+1]=
    pa.y,Na[Ra+2]=pa.z,Ra+=3;else for(Y=0;3>Y;Y++)Na[Ra]=H.x,Na[Ra+1]=H.y,Na[Ra+2]=H.z,Ra+=3;m.bindBuffer(m.ARRAY_BUFFER,v.__webglNormalBuffer);m.bufferData(m.ARRAY_BUFFER,Na,D)}if(vb&&Hb){y=0;for(z=$.length;y<z;y++)if(F=$[y],U=Hb[F],void 0!==U)for(Y=0;3>Y;Y++)ab=U[Y],Ab[kb]=ab.x,Ab[kb+1]=ab.y,kb+=2;0<kb&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglUVBuffer),m.bufferData(m.ARRAY_BUFFER,Ab,D))}if(vb&&Oa){y=0;for(z=$.length;y<z;y++)if(F=$[y],O=Oa[F],void 0!==O)for(Y=0;3>Y;Y++)oa=O[Y],lb[yb]=oa.x,lb[yb+1]=oa.y,
    yb+=2;0<yb&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglUV2Buffer),m.bufferData(m.ARRAY_BUFFER,lb,D))}if(fb){y=0;for(z=$.length;y<z;y++)Va[zb]=La,Va[zb+1]=La+1,Va[zb+2]=La+2,zb+=3,Ta[eb]=La,Ta[eb+1]=La+1,Ta[eb+2]=La,Ta[eb+3]=La+2,Ta[eb+4]=La+1,Ta[eb+5]=La+2,eb+=6,La+=3;m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,v.__webglFaceBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,Va,D);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,v.__webglLineBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,Ta,D)}if(mb)for(Y=0,ub=mb.length;Y<ub;Y++)if(C=
        mb[Y],C.__original.needsUpdate){K=0;if(1===C.size)if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],C.array[K]=C.value[B.a],C.array[K+1]=C.value[B.b],C.array[K+2]=C.value[B.c],K+=3;else{if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)za=C.value[$[y]],C.array[K]=za,C.array[K+1]=za,C.array[K+2]=za,K+=3}else if(2===C.size)if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],J=C.value[B.a],L=C.value[B.b],N=C.value[B.c],C.array[K]=J.x,
    C.array[K+1]=J.y,C.array[K+2]=L.x,C.array[K+3]=L.y,C.array[K+4]=N.x,C.array[K+5]=N.y,K+=6;else{if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)N=L=J=za=C.value[$[y]],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=L.x,C.array[K+3]=L.y,C.array[K+4]=N.x,C.array[K+5]=N.y,K+=6}else if(3===C.size){var T;T="c"===C.type?["r","g","b"]:["x","y","z"];if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],J=C.value[B.a],L=C.value[B.b],N=C.value[B.c],C.array[K]=J[T[0]],C.array[K+1]=
    J[T[1]],C.array[K+2]=J[T[2]],C.array[K+3]=L[T[0]],C.array[K+4]=L[T[1]],C.array[K+5]=L[T[2]],C.array[K+6]=N[T[0]],C.array[K+7]=N[T[1]],C.array[K+8]=N[T[2]],K+=9;else if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)N=L=J=za=C.value[$[y]],C.array[K]=J[T[0]],C.array[K+1]=J[T[1]],C.array[K+2]=J[T[2]],C.array[K+3]=L[T[0]],C.array[K+4]=L[T[1]],C.array[K+5]=L[T[2]],C.array[K+6]=N[T[0]],C.array[K+7]=N[T[1]],C.array[K+8]=N[T[2]],K+=9;else if("faceVertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)za=C.value[$[y]],
    J=za[0],L=za[1],N=za[2],C.array[K]=J[T[0]],C.array[K+1]=J[T[1]],C.array[K+2]=J[T[2]],C.array[K+3]=L[T[0]],C.array[K+4]=L[T[1]],C.array[K+5]=L[T[2]],C.array[K+6]=N[T[0]],C.array[K+7]=N[T[1]],C.array[K+8]=N[T[2]],K+=9}else if(4===C.size)if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],J=C.value[B.a],L=C.value[B.b],N=C.value[B.c],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=J.z,C.array[K+3]=J.w,C.array[K+4]=L.x,C.array[K+5]=L.y,C.array[K+6]=L.z,C.array[K+7]=L.w,C.array[K+
8]=N.x,C.array[K+9]=N.y,C.array[K+10]=N.z,C.array[K+11]=N.w,K+=12;else if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)N=L=J=za=C.value[$[y]],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=J.z,C.array[K+3]=J.w,C.array[K+4]=L.x,C.array[K+5]=L.y,C.array[K+6]=L.z,C.array[K+7]=L.w,C.array[K+8]=N.x,C.array[K+9]=N.y,C.array[K+10]=N.z,C.array[K+11]=N.w,K+=12;else if("faceVertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)za=C.value[$[y]],J=za[0],L=za[1],N=za[2],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=
    J.z,C.array[K+3]=J.w,C.array[K+4]=L.x,C.array[K+5]=L.y,C.array[K+6]=L.z,C.array[K+7]=L.w,C.array[K+8]=N.x,C.array[K+9]=N.y,C.array[K+10]=N.z,C.array[K+11]=N.w,K+=12;m.bindBuffer(m.ARRAY_BUFFER,C.buffer);m.bufferData(m.ARRAY_BUFFER,C.array,D)}A&&(delete v.__inittedArrays,delete v.__colorArray,delete v.__normalArray,delete v.__tangentArray,delete v.__uvArray,delete v.__uv2Array,delete v.__faceArray,delete v.__vertexArray,delete v.__lineArray,delete v.__skinIndexArray,delete v.__skinWeightArray)}}}b.verticesNeedUpdate=
    !1;b.morphTargetsNeedUpdate=!1;b.elementsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.tangentsNeedUpdate=!1;w.attributes&&s(w)}else if(a instanceof THREE.Line){w=c(a,b);u=w.attributes&&r(w);if(b.verticesNeedUpdate||b.colorsNeedUpdate||b.lineDistancesNeedUpdate||u){var Db=m.DYNAMIC_DRAW,S,aa,Z,Ba,X,Eb,Rb=b.vertices,Ib=b.colors,gb=b.lineDistances,ya=Rb.length,pb=Ib.length,qb=gb.length,Wa=b.__vertexArray,tb=b.__colorArray,hb=b.__lineDistanceArray,$b=b.colorsNeedUpdate,
    Fb=b.lineDistancesNeedUpdate,Sb=b.__webglCustomAttributesList,Jb,cb,ua,Kb,Ia,fa;if(b.verticesNeedUpdate){for(S=0;S<ya;S++)Ba=Rb[S],X=3*S,Wa[X]=Ba.x,Wa[X+1]=Ba.y,Wa[X+2]=Ba.z;m.bindBuffer(m.ARRAY_BUFFER,b.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,Wa,Db)}if($b){for(aa=0;aa<pb;aa++)Eb=Ib[aa],X=3*aa,tb[X]=Eb.r,tb[X+1]=Eb.g,tb[X+2]=Eb.b;m.bindBuffer(m.ARRAY_BUFFER,b.__webglColorBuffer);m.bufferData(m.ARRAY_BUFFER,tb,Db)}if(Fb){for(Z=0;Z<qb;Z++)hb[Z]=gb[Z];m.bindBuffer(m.ARRAY_BUFFER,b.__webglLineDistanceBuffer);
    m.bufferData(m.ARRAY_BUFFER,hb,Db)}if(Sb)for(Jb=0,cb=Sb.length;Jb<cb;Jb++)if(fa=Sb[Jb],fa.needsUpdate&&(void 0===fa.boundTo||"vertices"===fa.boundTo)){X=0;Kb=fa.value.length;if(1===fa.size)for(ua=0;ua<Kb;ua++)fa.array[ua]=fa.value[ua];else if(2===fa.size)for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],fa.array[X]=Ia.x,fa.array[X+1]=Ia.y,X+=2;else if(3===fa.size)if("c"===fa.type)for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],fa.array[X]=Ia.r,fa.array[X+1]=Ia.g,fa.array[X+2]=Ia.b,X+=3;else for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],
    fa.array[X]=Ia.x,fa.array[X+1]=Ia.y,fa.array[X+2]=Ia.z,X+=3;else if(4===fa.size)for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],fa.array[X]=Ia.x,fa.array[X+1]=Ia.y,fa.array[X+2]=Ia.z,fa.array[X+3]=Ia.w,X+=4;m.bindBuffer(m.ARRAY_BUFFER,fa.buffer);m.bufferData(m.ARRAY_BUFFER,fa.array,Db);fa.needsUpdate=!1}}b.verticesNeedUpdate=!1;b.colorsNeedUpdate=!1;b.lineDistancesNeedUpdate=!1;w.attributes&&s(w)}else if(a instanceof THREE.PointCloud){w=c(a,b);u=w.attributes&&r(w);if(b.verticesNeedUpdate||b.colorsNeedUpdate||
    u){var db=m.DYNAMIC_DRAW,Tb,Ub,ac,ma,bc,Nb=b.vertices,Vb=Nb.length,Pb=b.colors,rb=Pb.length,cc=b.__vertexArray,dc=b.__colorArray,wb=b.colorsNeedUpdate,gc=b.__webglCustomAttributesList,ec,jb,va,Lb,Ja,ga;if(b.verticesNeedUpdate){for(Tb=0;Tb<Vb;Tb++)ac=Nb[Tb],ma=3*Tb,cc[ma]=ac.x,cc[ma+1]=ac.y,cc[ma+2]=ac.z;m.bindBuffer(m.ARRAY_BUFFER,b.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,cc,db)}if(wb){for(Ub=0;Ub<rb;Ub++)bc=Pb[Ub],ma=3*Ub,dc[ma]=bc.r,dc[ma+1]=bc.g,dc[ma+2]=bc.b;m.bindBuffer(m.ARRAY_BUFFER,
    b.__webglColorBuffer);m.bufferData(m.ARRAY_BUFFER,dc,db)}if(gc)for(ec=0,jb=gc.length;ec<jb;ec++){ga=gc[ec];if(ga.needsUpdate&&(void 0===ga.boundTo||"vertices"===ga.boundTo))if(Lb=ga.value.length,ma=0,1===ga.size)for(va=0;va<Lb;va++)ga.array[va]=ga.value[va];else if(2===ga.size)for(va=0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.x,ga.array[ma+1]=Ja.y,ma+=2;else if(3===ga.size)if("c"===ga.type)for(va=0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.r,ga.array[ma+1]=Ja.g,ga.array[ma+2]=Ja.b,ma+=3;else for(va=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.x,ga.array[ma+1]=Ja.y,ga.array[ma+2]=Ja.z,ma+=3;else if(4===ga.size)for(va=0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.x,ga.array[ma+1]=Ja.y,ga.array[ma+2]=Ja.z,ga.array[ma+3]=Ja.w,ma+=4;m.bindBuffer(m.ARRAY_BUFFER,ga.buffer);m.bufferData(m.ARRAY_BUFFER,ga.array,db);ga.needsUpdate=!1}}b.verticesNeedUpdate=!1;b.colorsNeedUpdate=!1;w.attributes&&s(w)}}function r(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function s(a){for(var b in a.attributes)a.attributes[b].needsUpdate=
    !1}function u(a){!0===a.transparent?W.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha):W.setBlending(THREE.NoBlending);W.setDepthTest(a.depthTest);W.setDepthWrite(a.depthWrite);W.setColorWrite(a.colorWrite);W.setPolygonOffset(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)}function v(a,b,c,d,e){var f,g,h,k;Mb=0;if(d.needsUpdate){d.program&&hc(d);d.addEventListener("dispose",ic);var n=pc[d.type];if(n){var l=THREE.ShaderLib[n];
    d.__webglShader={uniforms:THREE.UniformsUtils.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}}else d.__webglShader={uniforms:d.uniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader};for(var p=0,q=0,r=0,s=0,t=0,w=b.length;t<w;t++){var v=b[t];v.onlyShadow||!1===v.visible||(v instanceof THREE.DirectionalLight&&p++,v instanceof THREE.PointLight&&q++,v instanceof THREE.SpotLight&&r++,v instanceof THREE.HemisphereLight&&s++)}f=p;g=q;h=r;k=s;for(var u,z=0,G=
    0,F=b.length;G<F;G++){var J=b[G];J.castShadow&&(J instanceof THREE.SpotLight&&z++,J instanceof THREE.DirectionalLight&&!J.shadowCascade&&z++)}u=z;var H;if(Nb&&e&&e.skeleton&&e.skeleton.useVertexTexture)H=1024;else{var N=m.getParameter(m.MAX_VERTEX_UNIFORM_VECTORS),M=Math.floor((N-20)/4);void 0!==e&&e instanceof THREE.SkinnedMesh&&(M=Math.min(e.skeleton.bones.length,M),M<e.skeleton.bones.length&&THREE.warn("WebGLRenderer: too many bones - "+e.skeleton.bones.length+", this GPU supports just "+M+" (try OpenGL instead of ANGLE)"));
    H=M}var P={precision:L,supportsVertexTextures:Vb,map:!!d.map,envMap:!!d.envMap,envMapMode:d.envMap&&d.envMap.mapping,lightMap:!!d.lightMap,bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,specularMap:!!d.specularMap,alphaMap:!!d.alphaMap,combine:d.combine,vertexColors:d.vertexColors,fog:c,useFog:d.fog,fogExp:c instanceof THREE.FogExp2,flatShading:d.shading===THREE.FlatShading,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:ja,skinning:d.skinning,maxBones:H,useVertexTexture:Nb&&e&&e.skeleton&&
e.skeleton.useVertexTexture,morphTargets:d.morphTargets,morphNormals:d.morphNormals,maxMorphTargets:B.maxMorphTargets,maxMorphNormals:B.maxMorphNormals,maxDirLights:f,maxPointLights:g,maxSpotLights:h,maxHemiLights:k,maxShadows:u,shadowMapEnabled:B.shadowMapEnabled&&e.receiveShadow&&0<u,shadowMapType:B.shadowMapType,shadowMapDebug:B.shadowMapDebug,shadowMapCascade:B.shadowMapCascade,alphaTest:d.alphaTest,metal:d.metal,wrapAround:d.wrapAround,doubleSided:d.side===THREE.DoubleSide,flipSided:d.side===
THREE.BackSide},R=[];n?R.push(n):(R.push(d.fragmentShader),R.push(d.vertexShader));if(void 0!==d.defines)for(var O in d.defines)R.push(O),R.push(d.defines[O]);for(O in P)R.push(O),R.push(P[O]);for(var Ka=R.join(),V,W=0,Qa=Pa.length;W<Qa;W++){var Ya=Pa[W];if(Ya.code===Ka){V=Ya;V.usedTimes++;break}}void 0===V&&(V=new THREE.WebGLProgram(B,Ka,d,P),Pa.push(V),B.info.memory.programs=Pa.length);d.program=V;var Xa=V.attributes;if(d.morphTargets){d.numSupportedMorphTargets=0;for(var ca,da="morphTarget",ba=
    0;ba<B.maxMorphTargets;ba++)ca=da+ba,0<=Xa[ca]&&d.numSupportedMorphTargets++}if(d.morphNormals)for(d.numSupportedMorphNormals=0,da="morphNormal",ba=0;ba<B.maxMorphNormals;ba++)ca=da+ba,0<=Xa[ca]&&d.numSupportedMorphNormals++;d.uniformsList=[];for(var ha in d.__webglShader.uniforms){var ta=d.program.uniforms[ha];ta&&d.uniformsList.push([d.__webglShader.uniforms[ha],ta])}d.needsUpdate=!1}d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(B.maxMorphTargets));
    var ab=!1,oa=!1,qa=!1,Ua=d.program,ka=Ua.uniforms,Q=d.__webglShader.uniforms;Ua.id!==ob&&(m.useProgram(Ua.program),ob=Ua.id,qa=oa=ab=!0);d.id!==ub&&(-1===ub&&(qa=!0),ub=d.id,oa=!0);if(ab||a!==vb)m.uniformMatrix4fv(ka.projectionMatrix,!1,a.projectionMatrix.elements),ja&&m.uniform1f(ka.logDepthBufFC,2/(Math.log(a.far+1)/Math.LN2)),a!==vb&&(vb=a),(d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap)&&null!==ka.cameraPosition&&(wa.setFromMatrixPosition(a.matrixWorld),m.uniform3f(ka.cameraPosition,
        wa.x,wa.y,wa.z)),(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshBasicMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==ka.viewMatrix&&m.uniformMatrix4fv(ka.viewMatrix,!1,a.matrixWorldInverse.elements);if(d.skinning)if(e.bindMatrix&&null!==ka.bindMatrix&&m.uniformMatrix4fv(ka.bindMatrix,!1,e.bindMatrix.elements),e.bindMatrixInverse&&null!==ka.bindMatrixInverse&&m.uniformMatrix4fv(ka.bindMatrixInverse,!1,e.bindMatrixInverse.elements),
        Nb&&e.skeleton&&e.skeleton.useVertexTexture){if(null!==ka.boneTexture){var db=D();m.uniform1i(ka.boneTexture,db);B.setTexture(e.skeleton.boneTexture,db)}null!==ka.boneTextureWidth&&m.uniform1i(ka.boneTextureWidth,e.skeleton.boneTextureWidth);null!==ka.boneTextureHeight&&m.uniform1i(ka.boneTextureHeight,e.skeleton.boneTextureHeight)}else e.skeleton&&e.skeleton.boneMatrices&&null!==ka.boneGlobalMatrices&&m.uniformMatrix4fv(ka.boneGlobalMatrices,!1,e.skeleton.boneMatrices);if(oa){c&&d.fog&&(Q.fogColor.value=
        c.color,c instanceof THREE.Fog?(Q.fogNear.value=c.near,Q.fogFar.value=c.far):c instanceof THREE.FogExp2&&(Q.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(Ob){var qa=!0,ia,Za,Y,bb=0,cb=0,ib=0,xb,pb,qb,Ca,jb,na=jc,rb=na.directional.colors,La=na.directional.positions,Ma=na.point.colors,kb=na.point.positions,yb=na.point.distances,zb=na.point.decays,Ra=na.spot.colors,Aa=na.spot.positions,eb=na.spot.distances,Ha=na.spot.directions,
        la=na.spot.anglesCos,ra=na.spot.exponents,K=na.spot.decays,za=na.hemi.skyColors,Sa=na.hemi.groundColors,Ab=na.hemi.positions,lb=0,Na=0,sa=0,Da=0,Ea=0,Fa=0,Gb=0,Bb=0,mb=0,C=0,Va=0,Ta=0;ia=0;for(Za=b.length;ia<Za;ia++)Y=b[ia],Y.onlyShadow||(xb=Y.color,Ca=Y.intensity,jb=Y.distance,Y instanceof THREE.AmbientLight?Y.visible&&(bb+=xb.r,cb+=xb.g,ib+=xb.b):Y instanceof THREE.DirectionalLight?(Ea+=1,Y.visible&&(pa.setFromMatrixPosition(Y.matrixWorld),wa.setFromMatrixPosition(Y.target.matrixWorld),pa.sub(wa),
        pa.normalize(),mb=3*lb,La[mb]=pa.x,La[mb+1]=pa.y,La[mb+2]=pa.z,y(rb,mb,xb,Ca),lb+=1)):Y instanceof THREE.PointLight?(Fa+=1,Y.visible&&(C=3*Na,y(Ma,C,xb,Ca),wa.setFromMatrixPosition(Y.matrixWorld),kb[C]=wa.x,kb[C+1]=wa.y,kb[C+2]=wa.z,yb[Na]=jb,zb[Na]=0===Y.distance?0:Y.decay,Na+=1)):Y instanceof THREE.SpotLight?(Gb+=1,Y.visible&&(Va=3*sa,y(Ra,Va,xb,Ca),pa.setFromMatrixPosition(Y.matrixWorld),Aa[Va]=pa.x,Aa[Va+1]=pa.y,Aa[Va+2]=pa.z,eb[sa]=jb,wa.setFromMatrixPosition(Y.target.matrixWorld),pa.sub(wa),
        pa.normalize(),Ha[Va]=pa.x,Ha[Va+1]=pa.y,Ha[Va+2]=pa.z,la[sa]=Math.cos(Y.angle),ra[sa]=Y.exponent,K[sa]=0===Y.distance?0:Y.decay,sa+=1)):Y instanceof THREE.HemisphereLight&&(Bb+=1,Y.visible&&(pa.setFromMatrixPosition(Y.matrixWorld),pa.normalize(),Ta=3*Da,Ab[Ta]=pa.x,Ab[Ta+1]=pa.y,Ab[Ta+2]=pa.z,pb=Y.color,qb=Y.groundColor,y(za,Ta,pb,Ca),y(Sa,Ta,qb,Ca),Da+=1)));ia=3*lb;for(Za=Math.max(rb.length,3*Ea);ia<Za;ia++)rb[ia]=0;ia=3*Na;for(Za=Math.max(Ma.length,3*Fa);ia<Za;ia++)Ma[ia]=0;ia=3*sa;for(Za=Math.max(Ra.length,
        3*Gb);ia<Za;ia++)Ra[ia]=0;ia=3*Da;for(Za=Math.max(za.length,3*Bb);ia<Za;ia++)za[ia]=0;ia=3*Da;for(Za=Math.max(Sa.length,3*Bb);ia<Za;ia++)Sa[ia]=0;na.directional.length=lb;na.point.length=Na;na.spot.length=sa;na.hemi.length=Da;na.ambient[0]=bb;na.ambient[1]=cb;na.ambient[2]=ib;Ob=!1}if(qa){var ea=jc;Q.ambientLightColor.value=ea.ambient;Q.directionalLightColor.value=ea.directional.colors;Q.directionalLightDirection.value=ea.directional.positions;Q.pointLightColor.value=ea.point.colors;Q.pointLightPosition.value=
        ea.point.positions;Q.pointLightDistance.value=ea.point.distances;Q.pointLightDecay.value=ea.point.decays;Q.spotLightColor.value=ea.spot.colors;Q.spotLightPosition.value=ea.spot.positions;Q.spotLightDistance.value=ea.spot.distances;Q.spotLightDirection.value=ea.spot.directions;Q.spotLightAngleCos.value=ea.spot.anglesCos;Q.spotLightExponent.value=ea.spot.exponents;Q.spotLightDecay.value=ea.spot.decays;Q.hemisphereLightSkyColor.value=ea.hemi.skyColors;Q.hemisphereLightGroundColor.value=ea.hemi.groundColors;
        Q.hemisphereLightDirection.value=ea.hemi.positions;x(Q,!0)}else x(Q,!1)}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){Q.opacity.value=d.opacity;Q.diffuse.value=d.color;Q.map.value=d.map;Q.lightMap.value=d.lightMap;Q.specularMap.value=d.specularMap;Q.alphaMap.value=d.alphaMap;d.bumpMap&&(Q.bumpMap.value=d.bumpMap,Q.bumpScale.value=d.bumpScale);d.normalMap&&(Q.normalMap.value=d.normalMap,Q.normalScale.value.copy(d.normalScale));
        var fb;d.map?fb=d.map:d.specularMap?fb=d.specularMap:d.normalMap?fb=d.normalMap:d.bumpMap?fb=d.bumpMap:d.alphaMap&&(fb=d.alphaMap);if(void 0!==fb){var wb=fb.offset,Qb=fb.repeat;Q.offsetRepeat.value.set(wb.x,wb.y,Qb.x,Qb.y)}Q.envMap.value=d.envMap;Q.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;Q.reflectivity.value=d.reflectivity;Q.refractionRatio.value=d.refractionRatio}if(d instanceof THREE.LineBasicMaterial)Q.diffuse.value=d.color,Q.opacity.value=d.opacity;else if(d instanceof
        THREE.LineDashedMaterial)Q.diffuse.value=d.color,Q.opacity.value=d.opacity,Q.dashSize.value=d.dashSize,Q.totalSize.value=d.dashSize+d.gapSize,Q.scale.value=d.scale;else if(d instanceof THREE.PointCloudMaterial){if(Q.psColor.value=d.color,Q.opacity.value=d.opacity,Q.size.value=d.size,Q.scale.value=U.height/2,Q.map.value=d.map,null!==d.map){var Wb=d.map.offset,Xb=d.map.repeat;Q.offsetRepeat.value.set(Wb.x,Wb.y,Xb.x,Xb.y)}}else d instanceof THREE.MeshPhongMaterial?(Q.shininess.value=d.shininess,Q.emissive.value=
        d.emissive,Q.specular.value=d.specular,d.wrapAround&&Q.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(Q.emissive.value=d.emissive,d.wrapAround&&Q.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(Q.mNear.value=a.near,Q.mFar.value=a.far,Q.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(Q.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&Q.shadowMatrix)for(var sb=0,Cb=0,$=b.length;Cb<$;Cb++){var xa=b[Cb];xa.castShadow&&(xa instanceof
    THREE.SpotLight||xa instanceof THREE.DirectionalLight&&!xa.shadowCascade)&&(Q.shadowMap.value[sb]=xa.shadowMap,Q.shadowMapSize.value[sb]=xa.shadowMapSize,Q.shadowMatrix.value[sb]=xa.shadowMatrix,Q.shadowDarkness.value[sb]=xa.shadowDarkness,Q.shadowBias.value[sb]=xa.shadowBias,sb++)}for(var Hb=d.uniformsList,Oa,$a,Ga,nb=0,fc=Hb.length;nb<fc;nb++){var T=Hb[nb][0];if(!1!==T.needsUpdate){var Db=T.type,S=T.value,aa=Hb[nb][1];switch(Db){case "1i":m.uniform1i(aa,S);break;case "1f":m.uniform1f(aa,S);break;
        case "2f":m.uniform2f(aa,S[0],S[1]);break;case "3f":m.uniform3f(aa,S[0],S[1],S[2]);break;case "4f":m.uniform4f(aa,S[0],S[1],S[2],S[3]);break;case "1iv":m.uniform1iv(aa,S);break;case "3iv":m.uniform3iv(aa,S);break;case "1fv":m.uniform1fv(aa,S);break;case "2fv":m.uniform2fv(aa,S);break;case "3fv":m.uniform3fv(aa,S);break;case "4fv":m.uniform4fv(aa,S);break;case "Matrix3fv":m.uniformMatrix3fv(aa,!1,S);break;case "Matrix4fv":m.uniformMatrix4fv(aa,!1,S);break;case "i":m.uniform1i(aa,S);break;case "f":m.uniform1f(aa,
            S);break;case "v2":m.uniform2f(aa,S.x,S.y);break;case "v3":m.uniform3f(aa,S.x,S.y,S.z);break;case "v4":m.uniform4f(aa,S.x,S.y,S.z,S.w);break;case "c":m.uniform3f(aa,S.r,S.g,S.b);break;case "iv1":m.uniform1iv(aa,S);break;case "iv":m.uniform3iv(aa,S);break;case "fv1":m.uniform1fv(aa,S);break;case "fv":m.uniform3fv(aa,S);break;case "v2v":void 0===T._array&&(T._array=new Float32Array(2*S.length));for(var Z=0,Ba=S.length;Z<Ba;Z++)Ga=2*Z,T._array[Ga]=S[Z].x,T._array[Ga+1]=S[Z].y;m.uniform2fv(aa,T._array);
            break;case "v3v":void 0===T._array&&(T._array=new Float32Array(3*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)Ga=3*Z,T._array[Ga]=S[Z].x,T._array[Ga+1]=S[Z].y,T._array[Ga+2]=S[Z].z;m.uniform3fv(aa,T._array);break;case "v4v":void 0===T._array&&(T._array=new Float32Array(4*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)Ga=4*Z,T._array[Ga]=S[Z].x,T._array[Ga+1]=S[Z].y,T._array[Ga+2]=S[Z].z,T._array[Ga+3]=S[Z].w;m.uniform4fv(aa,T._array);break;case "m3":m.uniformMatrix3fv(aa,!1,S.elements);break;case "m3v":void 0===
        T._array&&(T._array=new Float32Array(9*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)S[Z].flattenToArrayOffset(T._array,9*Z);m.uniformMatrix3fv(aa,!1,T._array);break;case "m4":m.uniformMatrix4fv(aa,!1,S.elements);break;case "m4v":void 0===T._array&&(T._array=new Float32Array(16*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)S[Z].flattenToArrayOffset(T._array,16*Z);m.uniformMatrix4fv(aa,!1,T._array);break;case "t":Oa=S;$a=D();m.uniform1i(aa,$a);if(!Oa)continue;if(Oa instanceof THREE.CubeTexture||Oa.image instanceof
            Array&&6===Oa.image.length){var X=Oa,Eb=$a;if(6===X.image.length)if(X.needsUpdate){X.image.__webglTextureCube||(X.addEventListener("dispose",Pb),X.image.__webglTextureCube=m.createTexture(),B.info.memory.textures++);m.activeTexture(m.TEXTURE0+Eb);m.bindTexture(m.TEXTURE_CUBE_MAP,X.image.__webglTextureCube);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,X.flipY);for(var Rb=X instanceof THREE.CompressedTexture,Ib=X.image[0]instanceof THREE.DataTexture,gb=[],ya=0;6>ya;ya++)gb[ya]=!B.autoScaleCubemaps||Rb||Ib?Ib?
            X.image[ya].image:X.image[ya]:E(X.image[ya],qc);var Yb=gb[0],Zb=THREE.Math.isPowerOfTwo(Yb.width)&&THREE.Math.isPowerOfTwo(Yb.height),Wa=I(X.format),tb=I(X.type);A(m.TEXTURE_CUBE_MAP,X,Zb);for(ya=0;6>ya;ya++)if(Rb)for(var hb,$b=gb[ya].mipmaps,Fb=0,Sb=$b.length;Fb<Sb;Fb++)hb=$b[Fb],X.format!==THREE.RGBAFormat&&X.format!==THREE.RGBFormat?-1<kc().indexOf(Wa)?m.compressedTexImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,Fb,Wa,hb.width,hb.height,0,hb.data):THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()"):
            m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,Fb,Wa,hb.width,hb.height,0,Wa,tb,hb.data);else Ib?m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,0,Wa,gb[ya].width,gb[ya].height,0,Wa,tb,gb[ya].data):m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,0,Wa,Wa,tb,gb[ya]);X.generateMipmaps&&Zb&&m.generateMipmap(m.TEXTURE_CUBE_MAP);X.needsUpdate=!1;if(X.onUpdate)X.onUpdate()}else m.activeTexture(m.TEXTURE0+Eb),m.bindTexture(m.TEXTURE_CUBE_MAP,X.image.__webglTextureCube)}else if(Oa instanceof THREE.WebGLRenderTargetCube){var Jb=
            Oa;m.activeTexture(m.TEXTURE0+$a);m.bindTexture(m.TEXTURE_CUBE_MAP,Jb.__webglTexture)}else B.setTexture(Oa,$a);break;case "tv":void 0===T._array&&(T._array=[]);Z=0;for(Ba=T.value.length;Z<Ba;Z++)T._array[Z]=D();m.uniform1iv(aa,T._array);Z=0;for(Ba=T.value.length;Z<Ba;Z++)Oa=T.value[Z],$a=T._array[Z],Oa&&B.setTexture(Oa,$a);break;default:THREE.warn("THREE.WebGLRenderer: Unknown uniform type: "+Db)}}}}m.uniformMatrix4fv(ka.modelViewMatrix,!1,e._modelViewMatrix.elements);ka.normalMatrix&&m.uniformMatrix3fv(ka.normalMatrix,
        !1,e._normalMatrix.elements);null!==ka.modelMatrix&&m.uniformMatrix4fv(ka.modelMatrix,!1,e.matrixWorld.elements);return Ua}function x(a,b){a.ambientLightColor.needsUpdate=b;a.directionalLightColor.needsUpdate=b;a.directionalLightDirection.needsUpdate=b;a.pointLightColor.needsUpdate=b;a.pointLightPosition.needsUpdate=b;a.pointLightDistance.needsUpdate=b;a.pointLightDecay.needsUpdate=b;a.spotLightColor.needsUpdate=b;a.spotLightPosition.needsUpdate=b;a.spotLightDistance.needsUpdate=b;a.spotLightDirection.needsUpdate=
    b;a.spotLightAngleCos.needsUpdate=b;a.spotLightExponent.needsUpdate=b;a.spotLightDecay.needsUpdate=b;a.hemisphereLightSkyColor.needsUpdate=b;a.hemisphereLightGroundColor.needsUpdate=b;a.hemisphereLightDirection.needsUpdate=b}function D(){var a=Mb;a>=Wb&&THREE.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+Wb);Mb+=1;return a}function w(a,b){a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,a.matrixWorld);a._normalMatrix.getNormalMatrix(a._modelViewMatrix)}
    function y(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function A(a,b,c){c?(m.texParameteri(a,m.TEXTURE_WRAP_S,I(b.wrapS)),m.texParameteri(a,m.TEXTURE_WRAP_T,I(b.wrapT)),m.texParameteri(a,m.TEXTURE_MAG_FILTER,I(b.magFilter)),m.texParameteri(a,m.TEXTURE_MIN_FILTER,I(b.minFilter))):(m.texParameteri(a,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(a,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),b.wrapS===THREE.ClampToEdgeWrapping&&b.wrapT===THREE.ClampToEdgeWrapping||THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( "+
    b.sourceFile+" )"),m.texParameteri(a,m.TEXTURE_MAG_FILTER,z(b.magFilter)),m.texParameteri(a,m.TEXTURE_MIN_FILTER,z(b.minFilter)),b.minFilter!==THREE.NearestFilter&&b.minFilter!==THREE.LinearFilter&&THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( "+b.sourceFile+" )"));(c=da.get("EXT_texture_filter_anisotropic"))&&b.type!==THREE.FloatType&&b.type!==THREE.HalfFloatType&&(1<b.anisotropy||b.__currentAnisotropy)&&
    (m.texParameterf(a,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,B.getMaxAnisotropy())),b.__currentAnisotropy=b.anisotropy)}function E(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElement("canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);THREE.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a);return d}return a}
    function G(a,b){m.bindRenderbuffer(m.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_COMPONENT16,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_STENCIL,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a)):m.renderbufferStorage(m.RENDERBUFFER,m.RGBA4,b.width,b.height)}function F(a){a instanceof
    THREE.WebGLRenderTargetCube?(m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture),m.generateMipmap(m.TEXTURE_CUBE_MAP),m.bindTexture(m.TEXTURE_CUBE_MAP,null)):(m.bindTexture(m.TEXTURE_2D,a.__webglTexture),m.generateMipmap(m.TEXTURE_2D),m.bindTexture(m.TEXTURE_2D,null))}function z(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?m.NEAREST:m.LINEAR}function I(a){var b;if(a===THREE.RepeatWrapping)return m.REPEAT;if(a===THREE.ClampToEdgeWrapping)return m.CLAMP_TO_EDGE;
        if(a===THREE.MirroredRepeatWrapping)return m.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return m.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return m.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return m.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return m.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return m.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return m.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return m.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return m.UNSIGNED_SHORT_4_4_4_4;
        if(a===THREE.UnsignedShort5551Type)return m.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return m.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return m.BYTE;if(a===THREE.ShortType)return m.SHORT;if(a===THREE.UnsignedShortType)return m.UNSIGNED_SHORT;if(a===THREE.IntType)return m.INT;if(a===THREE.UnsignedIntType)return m.UNSIGNED_INT;if(a===THREE.FloatType)return m.FLOAT;b=da.get("OES_texture_half_float");if(null!==b&&a===THREE.HalfFloatType)return b.HALF_FLOAT_OES;if(a===THREE.AlphaFormat)return m.ALPHA;
        if(a===THREE.RGBFormat)return m.RGB;if(a===THREE.RGBAFormat)return m.RGBA;if(a===THREE.LuminanceFormat)return m.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return m.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return m.FUNC_ADD;if(a===THREE.SubtractEquation)return m.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return m.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return m.ZERO;if(a===THREE.OneFactor)return m.ONE;if(a===THREE.SrcColorFactor)return m.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return m.ONE_MINUS_SRC_COLOR;
        if(a===THREE.SrcAlphaFactor)return m.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return m.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return m.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return m.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return m.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return m.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return m.SRC_ALPHA_SATURATE;b=da.get("WEBGL_compressed_texture_s3tc");if(null!==b){if(a===THREE.RGB_S3TC_DXT1_Format)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if(a===THREE.RGBA_S3TC_DXT1_Format)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}b=da.get("WEBGL_compressed_texture_pvrtc");if(null!==b){if(a===THREE.RGB_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===THREE.RGB_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===THREE.RGBA_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if(a===THREE.RGBA_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}b=da.get("EXT_blend_minmax");if(null!==b){if(a===THREE.MinEquation)return b.MIN_EXT;if(a===THREE.MaxEquation)return b.MAX_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION);a=a||{};var U=void 0!==a.canvas?a.canvas:document.createElement("canvas"),M=void 0!==a.context?a.context:null,H=1,L=void 0!==a.precision?a.precision:"highp",P=void 0!==a.alpha?a.alpha:!1,N=void 0!==a.depth?a.depth:!0,R=void 0!==a.stencil?
        a.stencil:!0,V=void 0!==a.antialias?a.antialias:!1,J=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,oa=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,ja=void 0!==a.logarithmicDepthBuffer?a.logarithmicDepthBuffer:!1,ha=new THREE.Color(0),O=0,ca=[],ba={},qa=[],Ka=[],Qa=[],Xa=[],Ya=[];this.domElement=U;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.gammaFactor=2;this.shadowMapEnabled=this.gammaOutput=this.gammaInput=
        !1;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var B=this,Pa=[],ob=null,ab=null,ub=-1,ta="",vb=null,Mb=0,ib=0,bb=0,pb=U.width,qb=U.height,Xb=0,fc=0,cb=new THREE.Frustum,db=new THREE.Matrix4,wa=new THREE.Vector3,pa=new THREE.Vector3,Ob=!0,jc={ambient:[0,
        0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[],decays:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[],decays:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},m;try{var Yb={alpha:P,depth:N,stencil:R,antialias:V,premultipliedAlpha:J,preserveDrawingBuffer:oa};m=M||U.getContext("webgl",Yb)||U.getContext("experimental-webgl",Yb);if(null===m){if(null!==U.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";
        throw"Error creating WebGL context.";}U.addEventListener("webglcontextlost",function(a){a.preventDefault();Zb();lc();ba={}},!1)}catch(rc){THREE.error("THREE.WebGLRenderer: "+rc)}var W=new THREE.WebGLState(m,I);void 0===m.getShaderPrecisionFormat&&(m.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});var da=new THREE.WebGLExtensions(m);da.get("OES_texture_float");da.get("OES_texture_float_linear");da.get("OES_texture_half_float");da.get("OES_texture_half_float_linear");
    da.get("OES_standard_derivatives");ja&&da.get("EXT_frag_depth");var rb=function(a,b,c,d){!0===J&&(a*=d,b*=d,c*=d);m.clearColor(a,b,c,d)},lc=function(){m.clearColor(0,0,0,1);m.clearDepth(1);m.clearStencil(0);m.enable(m.DEPTH_TEST);m.depthFunc(m.LEQUAL);m.frontFace(m.CCW);m.cullFace(m.BACK);m.enable(m.CULL_FACE);m.enable(m.BLEND);m.blendEquation(m.FUNC_ADD);m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA);m.viewport(ib,bb,pb,qb);rb(ha.r,ha.g,ha.b,O)},Zb=function(){vb=ob=null;ta="";ub=-1;Ob=!0;W.reset()};
    lc();this.context=m;this.state=W;var Wb=m.getParameter(m.MAX_TEXTURE_IMAGE_UNITS),sc=m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS),tc=m.getParameter(m.MAX_TEXTURE_SIZE),qc=m.getParameter(m.MAX_CUBE_MAP_TEXTURE_SIZE),Vb=0<sc,Nb=Vb&&da.get("OES_texture_float"),uc=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.HIGH_FLOAT),vc=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.MEDIUM_FLOAT),wc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.HIGH_FLOAT),xc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.MEDIUM_FLOAT),
        kc=function(){var a;return function(){if(void 0!==a)return a;a=[];if(da.get("WEBGL_compressed_texture_pvrtc")||da.get("WEBGL_compressed_texture_s3tc"))for(var b=m.getParameter(m.COMPRESSED_TEXTURE_FORMATS),c=0;c<b.length;c++)a.push(b[c]);return a}}(),yc=0<uc.precision&&0<wc.precision,mc=0<vc.precision&&0<xc.precision;"highp"!==L||yc||(mc?(L="mediump",THREE.warn("THREE.WebGLRenderer: highp not supported, using mediump.")):(L="lowp",THREE.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp.")));
    "mediump"!==L||mc||(L="lowp",THREE.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));var zc=new THREE.ShadowMapPlugin(this,ca,ba,qa),Ac=new THREE.SpritePlugin(this,Xa),Bc=new THREE.LensFlarePlugin(this,Ya);this.getContext=function(){return m};this.forceContextLoss=function(){da.get("WEBGL_lose_context").loseContext()};this.supportsVertexTextures=function(){return Vb};this.supportsFloatTextures=function(){return da.get("OES_texture_float")};this.supportsHalfFloatTextures=function(){return da.get("OES_texture_half_float")};
    this.supportsStandardDerivatives=function(){return da.get("OES_standard_derivatives")};this.supportsCompressedTextureS3TC=function(){return da.get("WEBGL_compressed_texture_s3tc")};this.supportsCompressedTexturePVRTC=function(){return da.get("WEBGL_compressed_texture_pvrtc")};this.supportsBlendMinMax=function(){return da.get("EXT_blend_minmax")};this.getMaxAnisotropy=function(){var a;return function(){if(void 0!==a)return a;var b=da.get("EXT_texture_filter_anisotropic");return a=null!==b?m.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT):
        0}}();this.getPrecision=function(){return L};this.getPixelRatio=function(){return H};this.setPixelRatio=function(a){H=a};this.setSize=function(a,b,c){U.width=a*H;U.height=b*H;!1!==c&&(U.style.width=a+"px",U.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){ib=a*H;bb=b*H;pb=c*H;qb=d*H;m.viewport(ib,bb,pb,qb)};this.setScissor=function(a,b,c,d){m.scissor(a*H,b*H,c*H,d*H)};this.enableScissorTest=function(a){a?m.enable(m.SCISSOR_TEST):m.disable(m.SCISSOR_TEST)};this.getClearColor=
        function(){return ha};this.setClearColor=function(a,b){ha.set(a);O=void 0!==b?b:1;rb(ha.r,ha.g,ha.b,O)};this.getClearAlpha=function(){return O};this.setClearAlpha=function(a){O=a;rb(ha.r,ha.g,ha.b,O)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=m.COLOR_BUFFER_BIT;if(void 0===b||b)d|=m.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=m.STENCIL_BUFFER_BIT;m.clear(d)};this.clearColor=function(){m.clear(m.COLOR_BUFFER_BIT)};this.clearDepth=function(){m.clear(m.DEPTH_BUFFER_BIT)};this.clearStencil=function(){m.clear(m.STENCIL_BUFFER_BIT)};
    this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.resetGLState=Zb;var wb=function(a){a.target.traverse(function(a){a.removeEventListener("remove",wb);if(a instanceof THREE.Mesh||a instanceof THREE.PointCloud||a instanceof THREE.Line)delete ba[a.id];else if(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)for(var b=qa,c=b.length-1;0<=c;c--)b[c].object===a&&b.splice(c,1);delete a.__webglInit;delete a._modelViewMatrix;delete a._normalMatrix;delete a.__webglActive})},
        jb=function(a){a=a.target;a.removeEventListener("dispose",jb);delete a.__webglInit;if(a instanceof THREE.BufferGeometry){for(var b in a.attributes){var c=a.attributes[b];void 0!==c.buffer&&(m.deleteBuffer(c.buffer),delete c.buffer)}B.info.memory.geometries--}else if(b=Ua[a.id],void 0!==b){for(var c=0,d=b.length;c<d;c++){var e=b[c];if(void 0!==e.numMorphTargets){for(var f=0,g=e.numMorphTargets;f<g;f++)m.deleteBuffer(e.__webglMorphTargetsBuffers[f]);delete e.__webglMorphTargetsBuffers}if(void 0!==e.numMorphNormals){f=
            0;for(g=e.numMorphNormals;f<g;f++)m.deleteBuffer(e.__webglMorphNormalsBuffers[f]);delete e.__webglMorphNormalsBuffers}nc(e)}delete Ua[a.id]}else nc(a);ta=""},Pb=function(a){a=a.target;a.removeEventListener("dispose",Pb);a.image&&a.image.__webglTextureCube?(m.deleteTexture(a.image.__webglTextureCube),delete a.image.__webglTextureCube):void 0!==a.__webglInit&&(m.deleteTexture(a.__webglTexture),delete a.__webglTexture,delete a.__webglInit);B.info.memory.textures--},oc=function(a){a=a.target;a.removeEventListener("dispose",
            oc);if(a&&void 0!==a.__webglTexture){m.deleteTexture(a.__webglTexture);delete a.__webglTexture;if(a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)m.deleteFramebuffer(a.__webglFramebuffer[b]),m.deleteRenderbuffer(a.__webglRenderbuffer[b]);else m.deleteFramebuffer(a.__webglFramebuffer),m.deleteRenderbuffer(a.__webglRenderbuffer);delete a.__webglFramebuffer;delete a.__webglRenderbuffer}B.info.memory.textures--},ic=function(a){a=a.target;a.removeEventListener("dispose",ic);hc(a)},nc=function(a){for(var b=
            "__webglVertexBuffer __webglNormalBuffer __webglTangentBuffer __webglColorBuffer __webglUVBuffer __webglUV2Buffer __webglSkinIndicesBuffer __webglSkinWeightsBuffer __webglFaceBuffer __webglLineBuffer __webglLineDistanceBuffer".split(" "),c=0,d=b.length;c<d;c++){var e=b[c];void 0!==a[e]&&(m.deleteBuffer(a[e]),delete a[e])}if(void 0!==a.__webglCustomAttributesList){for(e in a.__webglCustomAttributesList)m.deleteBuffer(a.__webglCustomAttributesList[e].buffer);delete a.__webglCustomAttributesList}B.info.memory.geometries--},
        hc=function(a){var b=a.program.program;if(void 0!==b){a.program=void 0;var c,d,e=!1;a=0;for(c=Pa.length;a<c;a++)if(d=Pa[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=[];a=0;for(c=Pa.length;a<c;a++)d=Pa[a],d.program!==b&&e.push(d);Pa=e;m.deleteProgram(b);B.info.memory.programs--}}};this.renderBufferImmediate=function(a,b,c){W.initAttributes();a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=m.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=
        m.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=m.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=m.createBuffer());a.hasPositions&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglVertexBuffer),m.bufferData(m.ARRAY_BUFFER,a.positionArray,m.DYNAMIC_DRAW),W.enableAttribute(b.attributes.position),m.vertexAttribPointer(b.attributes.position,3,m.FLOAT,!1,0,0));if(a.hasNormals){m.bindBuffer(m.ARRAY_BUFFER,a.__webglNormalBuffer);if(!1===c instanceof THREE.MeshPhongMaterial&&
        c.shading===THREE.FlatShading){var d,e,f,g,h,k,n,l,p,q,r,s=3*a.count;for(r=0;r<s;r+=9)q=a.normalArray,d=q[r],e=q[r+1],f=q[r+2],g=q[r+3],k=q[r+4],l=q[r+5],h=q[r+6],n=q[r+7],p=q[r+8],d=(d+g+h)/3,e=(e+k+n)/3,f=(f+l+p)/3,q[r]=d,q[r+1]=e,q[r+2]=f,q[r+3]=d,q[r+4]=e,q[r+5]=f,q[r+6]=d,q[r+7]=e,q[r+8]=f}m.bufferData(m.ARRAY_BUFFER,a.normalArray,m.DYNAMIC_DRAW);W.enableAttribute(b.attributes.normal);m.vertexAttribPointer(b.attributes.normal,3,m.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglUvBuffer),
        m.bufferData(m.ARRAY_BUFFER,a.uvArray,m.DYNAMIC_DRAW),W.enableAttribute(b.attributes.uv),m.vertexAttribPointer(b.attributes.uv,2,m.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,a.colorArray,m.DYNAMIC_DRAW),W.enableAttribute(b.attributes.color),m.vertexAttribPointer(b.attributes.color,3,m.FLOAT,!1,0,0));W.disableUnusedAttributes();m.drawArrays(m.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  b,c,e,f,g){if(!1!==e.visible)if(t(g),a=v(a,b,c,e,g),b=!1,c="direct_"+f.id+"_"+a.id+"_"+(e.wireframe?1:0),c!==ta&&(ta=c,b=!0),b&&W.initAttributes(),g instanceof THREE.Mesh){g=!0===e.wireframe?m.LINES:m.TRIANGLES;var h=f.attributes.index;if(h){var k,n;h.array instanceof Uint32Array&&da.get("OES_element_index_uint")?(k=m.UNSIGNED_INT,n=4):(k=m.UNSIGNED_SHORT,n=2);c=f.offsets;if(0===c.length)b&&(d(e,a,f,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,h.array.length,k,0),B.info.render.calls++,
        B.info.render.vertices+=h.array.length,B.info.render.faces+=h.array.length/3;else{b=!0;for(var l=0,p=c.length;l<p;l++){var q=c[l].index;b&&(d(e,a,f,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer));m.drawElements(g,c[l].count,k,c[l].start*n);B.info.render.calls++;B.info.render.vertices+=c[l].count;B.info.render.faces+=c[l].count/3}}}else b&&d(e,a,f,0),e=f.attributes.position,m.drawArrays(g,0,e.array.length/e.itemSize),B.info.render.calls++,B.info.render.vertices+=e.array.length/e.itemSize,B.info.render.faces+=
        e.array.length/(3*e.itemSize)}else if(g instanceof THREE.PointCloud)if(g=m.POINTS,h=f.attributes.index)if(h.array instanceof Uint32Array&&da.get("OES_element_index_uint")?(k=m.UNSIGNED_INT,n=4):(k=m.UNSIGNED_SHORT,n=2),c=f.offsets,0===c.length)b&&(d(e,a,f,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,h.array.length,k,0),B.info.render.calls++,B.info.render.points+=h.array.length;else for(1<c.length&&(b=!0),l=0,p=c.length;l<p;l++)q=c[l].index,b&&(d(e,a,f,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
        h.buffer)),m.drawElements(g,c[l].count,k,c[l].start*n),B.info.render.calls++,B.info.render.points+=c[l].count;else if(b&&d(e,a,f,0),e=f.attributes.position,c=f.offsets,0===c.length)m.drawArrays(g,0,e.array.length/3),B.info.render.calls++,B.info.render.points+=e.array.length/3;else for(l=0,p=c.length;l<p;l++)m.drawArrays(g,c[l].index,c[l].count),B.info.render.calls++,B.info.render.points+=c[l].count;else if(g instanceof THREE.Line)if(g=g.mode===THREE.LineStrip?m.LINE_STRIP:m.LINES,W.setLineWidth(e.linewidth*
        H),h=f.attributes.index)if(h.array instanceof Uint32Array?(k=m.UNSIGNED_INT,n=4):(k=m.UNSIGNED_SHORT,n=2),c=f.offsets,0===c.length)b&&(d(e,a,f,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,h.array.length,k,0),B.info.render.calls++,B.info.render.vertices+=h.array.length;else for(1<c.length&&(b=!0),l=0,p=c.length;l<p;l++)q=c[l].index,b&&(d(e,a,f,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,c[l].count,k,c[l].start*n),B.info.render.calls++,B.info.render.vertices+=
        c[l].count;else if(b&&d(e,a,f,0),e=f.attributes.position,c=f.offsets,0===c.length)m.drawArrays(g,0,e.array.length/3),B.info.render.calls++,B.info.render.vertices+=e.array.length/3;else for(l=0,p=c.length;l<p;l++)m.drawArrays(g,c[l].index,c[l].count),B.info.render.calls++,B.info.render.vertices+=c[l].count};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){t(f);c=v(a,b,c,d,f);b=c.attributes;a=!1;c=e.id+"_"+c.id+"_"+(d.wireframe?1:0);c!==ta&&(ta=c,a=!0);a&&W.initAttributes();if(!d.morphTargets&&
        0<=b.position)a&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),W.enableAttribute(b.position),m.vertexAttribPointer(b.position,3,m.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),W.enableAttribute(c.position),m.vertexAttribPointer(c.position,3,m.FLOAT,!1,0,0)):0<=c.position&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),W.enableAttribute(c.position),m.vertexAttribPointer(c.position,
        3,m.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length)for(var h=0,k=f.morphTargetForcedOrder,n=f.morphTargetInfluences,l;h<d.numSupportedMorphTargets&&h<k.length;)l=c["morphTarget"+h],0<=l&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[k[h]]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0)),l=c["morphNormal"+h],0<=l&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[k[h]]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[h]=
        n[k[h]],h++;else{k=[];n=f.morphTargetInfluences;h=f.geometry.morphTargets;n.length>h.length&&(console.warn("THREE.WebGLRenderer: Influences array is bigger than morphTargets array."),n.length=h.length);h=0;for(l=n.length;h<l;h++)k.push([n[h],h]);k.length>d.numSupportedMorphTargets?(k.sort(g),k.length=d.numSupportedMorphTargets):k.length>d.numSupportedMorphNormals?k.sort(g):0===k.length&&k.push([0,0]);for(var h=0,p=d.numSupportedMorphTargets;h<p;h++)if(k[h]){var q=k[h][1];l=c["morphTarget"+h];0<=l&&
    (m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[q]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0));l=c["morphNormal"+h];0<=l&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[q]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0));f.__webglMorphTargetInfluences[h]=n[q]}else f.__webglMorphTargetInfluences[h]=0}null!==d.program.uniforms.morphTargetInfluences&&m.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(a){if(e.__webglCustomAttributesList)for(c=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 0,n=e.__webglCustomAttributesList.length;c<n;c++)k=e.__webglCustomAttributesList[c],0<=b[k.buffer.belongsToAttribute]&&(m.bindBuffer(m.ARRAY_BUFFER,k.buffer),W.enableAttribute(b[k.buffer.belongsToAttribute]),m.vertexAttribPointer(b[k.buffer.belongsToAttribute],k.size,m.FLOAT,!1,0,0));0<=b.color&&(0<f.geometry.colors.length||0<f.geometry.faces.length?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglColorBuffer),W.enableAttribute(b.color),m.vertexAttribPointer(b.color,3,m.FLOAT,!1,0,0)):void 0!==d.defaultAttributeValues&&
    m.vertexAttrib3fv(b.color,d.defaultAttributeValues.color));0<=b.normal&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglNormalBuffer),W.enableAttribute(b.normal),m.vertexAttribPointer(b.normal,3,m.FLOAT,!1,0,0));0<=b.tangent&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglTangentBuffer),W.enableAttribute(b.tangent),m.vertexAttribPointer(b.tangent,4,m.FLOAT,!1,0,0));0<=b.uv&&(f.geometry.faceVertexUvs[0]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUVBuffer),W.enableAttribute(b.uv),m.vertexAttribPointer(b.uv,2,m.FLOAT,!1,0,
        0)):void 0!==d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv,d.defaultAttributeValues.uv));0<=b.uv2&&(f.geometry.faceVertexUvs[1]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUV2Buffer),W.enableAttribute(b.uv2),m.vertexAttribPointer(b.uv2,2,m.FLOAT,!1,0,0)):void 0!==d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv2,d.defaultAttributeValues.uv2));d.skinning&&0<=b.skinIndex&&0<=b.skinWeight&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),W.enableAttribute(b.skinIndex),m.vertexAttribPointer(b.skinIndex,
        4,m.FLOAT,!1,0,0),m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),W.enableAttribute(b.skinWeight),m.vertexAttribPointer(b.skinWeight,4,m.FLOAT,!1,0,0));0<=b.lineDistance&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglLineDistanceBuffer),W.enableAttribute(b.lineDistance),m.vertexAttribPointer(b.lineDistance,1,m.FLOAT,!1,0,0))}W.disableUnusedAttributes();f instanceof THREE.Mesh?(f=e.__typeArray===Uint32Array?m.UNSIGNED_INT:m.UNSIGNED_SHORT,d.wireframe?(W.setLineWidth(d.wireframeLinewidth*H),a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
        e.__webglLineBuffer),m.drawElements(m.LINES,e.__webglLineCount,f,0)):(a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),m.drawElements(m.TRIANGLES,e.__webglFaceCount,f,0)),B.info.render.calls++,B.info.render.vertices+=e.__webglFaceCount,B.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.mode===THREE.LineStrip?m.LINE_STRIP:m.LINES,W.setLineWidth(d.linewidth*H),m.drawArrays(f,0,e.__webglLineCount),B.info.render.calls++):f instanceof THREE.PointCloud&&(m.drawArrays(m.POINTS,
        0,e.__webglParticleCount),B.info.render.calls++,B.info.render.points+=e.__webglParticleCount)}};this.render=function(a,b,c,d){if(!1===b instanceof THREE.Camera)THREE.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var g=a.fog;ta="";ub=-1;vb=null;Ob=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();a.traverse(function(a){a instanceof THREE.SkinnedMesh&&a.skeleton.update()});b.matrixWorldInverse.getInverse(b.matrixWorld);db.multiplyMatrices(b.projectionMatrix,
        b.matrixWorldInverse);cb.setFromMatrix(db);ca.length=0;Ka.length=0;Qa.length=0;Xa.length=0;Ya.length=0;h(a);!0===B.sortObjects&&(Ka.sort(e),Qa.sort(f));zc.render(a,b);B.info.render.calls=0;B.info.render.vertices=0;B.info.render.faces=0;B.info.render.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);d=0;for(var n=qa.length;d<n;d++){var m=qa[d],q=m.object;q.visible&&(w(q,b),p(m))}a.overrideMaterial?(d=a.overrideMaterial,u(d),
        k(Ka,b,ca,g,d),k(Qa,b,ca,g,d),l(qa,"",b,ca,g,d)):(W.setBlending(THREE.NoBlending),k(Ka,b,ca,g,null),l(qa,"opaque",b,ca,g,null),k(Qa,b,ca,g,null),l(qa,"transparent",b,ca,g,null));Ac.render(a,b);Bc.render(a,b,Xb,fc);c&&c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter&&F(c);W.setDepthTest(!0);W.setDepthWrite(!0);W.setColorWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=v(a,b,c,d,e);ta="";B.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,
        m,cb):e.render(function(a){B.renderBufferImmediate(a,f,d)})};var Ua={},Qb=0,pc={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointCloudMaterial:"particle_basic"};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?m.disable(m.CULL_FACE):(b===THREE.FrontFaceDirectionCW?m.frontFace(m.CW):m.frontFace(m.CCW),a===THREE.CullFaceBack?m.cullFace(m.BACK):a===
    THREE.CullFaceFront?m.cullFace(m.FRONT):m.cullFace(m.FRONT_AND_BACK),m.enable(m.CULL_FACE))};this.setMaterialFaces=function(a){W.setDoubleSided(a.side===THREE.DoubleSide);W.setFlipSided(a.side===THREE.BackSide)};this.uploadTexture=function(a){void 0===a.__webglInit&&(a.__webglInit=!0,a.addEventListener("dispose",Pb),a.__webglTexture=m.createTexture(),B.info.memory.textures++);m.bindTexture(m.TEXTURE_2D,a.__webglTexture);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,a.flipY);m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        a.premultiplyAlpha);m.pixelStorei(m.UNPACK_ALIGNMENT,a.unpackAlignment);a.image=E(a.image,tc);var b=a.image,c=THREE.Math.isPowerOfTwo(b.width)&&THREE.Math.isPowerOfTwo(b.height),d=I(a.format),e=I(a.type);A(m.TEXTURE_2D,a,c);var f=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<f.length&&c){for(var g=0,h=f.length;g<h;g++)b=f[g],m.texImage2D(m.TEXTURE_2D,g,d,b.width,b.height,0,d,e,b.data);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,d,b.width,b.height,0,d,e,b.data);else if(a instanceof THREE.CompressedTexture)for(g=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           0,h=f.length;g<h;g++)b=f[g],a.format!==THREE.RGBAFormat&&a.format!==THREE.RGBFormat?-1<kc().indexOf(d)?m.compressedTexImage2D(m.TEXTURE_2D,g,d,b.width,b.height,0,b.data):THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):m.texImage2D(m.TEXTURE_2D,g,d,b.width,b.height,0,d,e,b.data);else if(0<f.length&&c){g=0;for(h=f.length;g<h;g++)b=f[g],m.texImage2D(m.TEXTURE_2D,g,d,d,e,b);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,d,d,e,a.image);
        a.generateMipmaps&&c&&m.generateMipmap(m.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()};this.setTexture=function(a,b){m.activeTexture(m.TEXTURE0+b);a.needsUpdate?B.uploadTexture(a):m.bindTexture(m.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&void 0===a.__webglFramebuffer){void 0===a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",oc);a.__webglTexture=m.createTexture();
        B.info.memory.textures++;var c=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height),d=I(a.format),e=I(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture);A(m.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=m.createFramebuffer();a.__webglRenderbuffer[f]=m.createRenderbuffer();m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=m.TEXTURE_CUBE_MAP_POSITIVE_X+f;m.bindFramebuffer(m.FRAMEBUFFER,
            a.__webglFramebuffer[f]);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,h,g.__webglTexture,0);G(a.__webglRenderbuffer[f],a)}c&&m.generateMipmap(m.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=m.createFramebuffer(),a.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:m.createRenderbuffer(),m.bindTexture(m.TEXTURE_2D,a.__webglTexture),A(m.TEXTURE_2D,a,c),m.texImage2D(m.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=m.TEXTURE_2D,m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer),
            m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,d,a.__webglTexture,0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):G(a.__webglRenderbuffer,a),c&&m.generateMipmap(m.TEXTURE_2D);b?m.bindTexture(m.TEXTURE_CUBE_MAP,null):m.bindTexture(m.TEXTURE_2D,null);m.bindRenderbuffer(m.RENDERBUFFER,
            null);m.bindFramebuffer(m.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=pb,a=qb,d=ib,e=bb);b!==ab&&(m.bindFramebuffer(m.FRAMEBUFFER,b),m.viewport(d,e,c,a),ab=b);Xb=c;fc=a};this.readRenderTargetPixels=function(a,b,c,d,e,f){if(!(a instanceof THREE.WebGLRenderTarget))console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");else if(a.__webglFramebuffer)if(a.format!==THREE.RGBAFormat)console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");
    else{var g=!1;a.__webglFramebuffer!==ab&&(m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer),g=!0);m.checkFramebufferStatus(m.FRAMEBUFFER)===m.FRAMEBUFFER_COMPLETE?m.readPixels(b,c,d,e,m.RGBA,m.UNSIGNED_BYTE,f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");g&&m.bindFramebuffer(m.FRAMEBUFFER,ab)}};this.initMaterial=function(){THREE.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};this.addPrePlugin=function(){THREE.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};
    this.addPostPlugin=function(){THREE.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};this.updateShadowMap=function(){THREE.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}};
THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
    THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=void 0!==c.shareDepthFrom?c.shareDepthFrom:null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(a,b){this.width=a;this.height=b},clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;
    a.shareDepthFrom=this.shareDepthFrom;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube.prototype.constructor=THREE.WebGLRenderTargetCube;
THREE.WebGLExtensions=function(a){var b={};this.get=function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
    break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c)}null===d&&THREE.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}};
THREE.WebGLProgram=function(){var a=0;return function(b,c,d,e){var f=b.context,g=d.defines,h=d.__webglShader.uniforms,k=d.attributes,l=d.__webglShader.vertexShader,p=d.__webglShader.fragmentShader,q=d.index0AttributeName;void 0===q&&!0===e.morphTargets&&(q="position");var n="SHADOWMAP_TYPE_BASIC";e.shadowMapType===THREE.PCFShadowMap?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===THREE.PCFSoftShadowMap&&(n="SHADOWMAP_TYPE_PCF_SOFT");var t="ENVMAP_TYPE_CUBE",r="ENVMAP_MODE_REFLECTION",s="ENVMAP_BLENDING_MULTIPLY";
    if(e.envMap){switch(d.envMap.mapping){case THREE.CubeReflectionMapping:case THREE.CubeRefractionMapping:t="ENVMAP_TYPE_CUBE";break;case THREE.EquirectangularReflectionMapping:case THREE.EquirectangularRefractionMapping:t="ENVMAP_TYPE_EQUIREC";break;case THREE.SphericalReflectionMapping:t="ENVMAP_TYPE_SPHERE"}switch(d.envMap.mapping){case THREE.CubeRefractionMapping:case THREE.EquirectangularRefractionMapping:r="ENVMAP_MODE_REFRACTION"}switch(d.combine){case THREE.MultiplyOperation:s="ENVMAP_BLENDING_MULTIPLY";
        break;case THREE.MixOperation:s="ENVMAP_BLENDING_MIX";break;case THREE.AddOperation:s="ENVMAP_BLENDING_ADD"}}var u=0<b.gammaFactor?b.gammaFactor:1,v,x;v=[];for(var D in g)x=g[D],!1!==x&&(x="#define "+D+" "+x,v.push(x));v=v.join("\n");g=f.createProgram();d instanceof THREE.RawShaderMaterial?b=d="":(d=["precision "+e.precision+" float;","precision "+e.precision+" int;",v,e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":
        "","#define GAMMA_FACTOR "+u,"#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,"#define MAX_BONES "+e.maxBones,e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+r:"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":
        "",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals?"#define USE_MORPHNORMALS":"",e.wrapAround?"#define WRAP_AROUND":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+n:"",e.shadowMapDebug?
        "#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n"].join("\n"),
        b=["precision "+e.precision+" float;","precision "+e.precision+" int;",e.bumpMap||e.normalMap||e.flatShading?"#extension GL_OES_standard_derivatives : enable":"",v,"#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,e.alphaTest?"#define ALPHATEST "+e.alphaTest:"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+
        u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+t:"",e.envMap?"#define "+r:"",e.envMap?"#define "+s:"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.flatShading?"#define FLAT_SHADED":"",e.metal?"#define METAL":
            "",e.wrapAround?"#define WRAP_AROUND":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+n:"",e.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n"));l=new THREE.WebGLShader(f,f.VERTEX_SHADER,d+l);p=new THREE.WebGLShader(f,f.FRAGMENT_SHADER,
        b+p);f.attachShader(g,l);f.attachShader(g,p);void 0!==q&&f.bindAttribLocation(g,0,q);f.linkProgram(g);q=f.getProgramInfoLog(g);!1===f.getProgramParameter(g,f.LINK_STATUS)&&THREE.error("THREE.WebGLProgram: shader error: "+f.getError(),"gl.VALIDATE_STATUS",f.getProgramParameter(g,f.VALIDATE_STATUS),"gl.getPRogramInfoLog",q);""!==q&&THREE.warn("THREE.WebGLProgram: gl.getProgramInfoLog()"+q);f.deleteShader(l);f.deleteShader(p);q="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" ");
    e.useVertexTexture?(q.push("boneTexture"),q.push("boneTextureWidth"),q.push("boneTextureHeight")):q.push("boneGlobalMatrices");e.logarithmicDepthBuffer&&q.push("logDepthBufFC");for(var w in h)q.push(w);h=q;w={};q=0;for(b=h.length;q<b;q++)n=h[q],w[n]=f.getUniformLocation(g,n);this.uniforms=w;q="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");for(h=0;h<e.maxMorphTargets;h++)q.push("morphTarget"+h);for(h=0;h<e.maxMorphNormals;h++)q.push("morphNormal"+h);for(var y in k)q.push(y);
    e=q;k={};y=0;for(h=e.length;y<h;y++)w=e[y],k[w]=f.getAttribLocation(g,w);this.attributes=k;this.attributesKeys=Object.keys(this.attributes);this.id=a++;this.code=c;this.usedTimes=1;this.program=g;this.vertexShader=l;this.fragmentShader=p;return this}}();
THREE.WebGLShader=function(){var a=function(a){a=a.split("\n");for(var c=0;c<a.length;c++)a[c]=c+1+": "+a[c];return a.join("\n")};return function(b,c,d){c=b.createShader(c);b.shaderSource(c,d);b.compileShader(c);!1===b.getShaderParameter(c,b.COMPILE_STATUS)&&THREE.error("THREE.WebGLShader: Shader couldn't compile.");""!==b.getShaderInfoLog(c)&&THREE.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b.getShaderInfoLog(c),a(d));return c}}();
THREE.WebGLState=function(a,b){var c=new Uint8Array(16),d=new Uint8Array(16),e=null,f=null,g=null,h=null,k=null,l=null,p=null,q=null,n=null,t=null,r=null,s=null,u=null,v=null,x=null,D=null;this.initAttributes=function(){for(var a=0,b=c.length;a<b;a++)c[a]=0};this.enableAttribute=function(b){c[b]=1;0===d[b]&&(a.enableVertexAttribArray(b),d[b]=1)};this.disableUnusedAttributes=function(){for(var b=0,e=d.length;b<e;b++)d[b]!==c[b]&&(a.disableVertexAttribArray(b),d[b]=0)};this.setBlending=function(c,d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  n,q,r,s,t){c!==e&&(c===THREE.NoBlending?a.disable(a.BLEND):c===THREE.AdditiveBlending?(a.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):c===THREE.SubtractiveBlending?(a.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):c===THREE.MultiplyBlending?(a.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):c===THREE.CustomBlending?a.enable(a.BLEND):(a.enable(a.BLEND),a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),
    a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),e=c);if(c===THREE.CustomBlending){r=r||d;s=s||n;t=t||q;if(d!==f||r!==k)a.blendEquationSeparate(b(d),b(r)),f=d,k=r;if(n!==g||q!==h||s!==l||t!==p)a.blendFuncSeparate(b(n),b(q),b(s),b(t)),g=n,h=q,l=s,p=t}else p=l=k=h=g=f=null};this.setDepthTest=function(b){q!==b&&(b?a.enable(a.DEPTH_TEST):a.disable(a.DEPTH_TEST),q=b)};this.setDepthWrite=function(b){n!==b&&(a.depthMask(b),n=b)};this.setColorWrite=function(b){t!==b&&(a.colorMask(b,
    b,b,b),t=b)};this.setDoubleSided=function(b){r!==b&&(b?a.disable(a.CULL_FACE):a.enable(a.CULL_FACE),r=b)};this.setFlipSided=function(b){s!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),s=b)};this.setLineWidth=function(b){b!==u&&(a.lineWidth(b),u=b)};this.setPolygonOffset=function(b,c,d){v!==b&&(b?a.enable(a.POLYGON_OFFSET_FILL):a.disable(a.POLYGON_OFFSET_FILL),v=b);!b||x===c&&D===d||(a.polygonOffset(c,d),x=c,D=d)};this.reset=function(){for(var a=0;a<d.length;a++)d[a]=0;s=r=t=n=q=e=null}};
THREE.LensFlarePlugin=function(a,b){var c,d,e,f,g,h,k,l,p,q,n=a.context,t,r,s,u,v,x;this.render=function(D,w,y,A){if(0!==b.length){D=new THREE.Vector3;var E=A/y,G=.5*y,F=.5*A,z=16/A,I=new THREE.Vector2(z*E,z),U=new THREE.Vector3(1,1,0),M=new THREE.Vector2(1,1);if(void 0===s){var z=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),H=new Uint16Array([0,1,2,0,2,3]);t=n.createBuffer();r=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,t);n.bufferData(n.ARRAY_BUFFER,z,n.STATIC_DRAW);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,
    r);n.bufferData(n.ELEMENT_ARRAY_BUFFER,H,n.STATIC_DRAW);v=n.createTexture();x=n.createTexture();n.bindTexture(n.TEXTURE_2D,v);n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);n.bindTexture(n.TEXTURE_2D,x);n.texImage2D(n.TEXTURE_2D,0,
    n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);var z=(u=0<n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS))?{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
        fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
        fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
    H=n.createProgram(),L=n.createShader(n.FRAGMENT_SHADER),P=n.createShader(n.VERTEX_SHADER),N="precision "+a.getPrecision()+" float;\n";n.shaderSource(L,N+z.fragmentShader);n.shaderSource(P,N+z.vertexShader);n.compileShader(L);n.compileShader(P);n.attachShader(H,L);n.attachShader(H,P);n.linkProgram(H);s=H;p=n.getAttribLocation(s,"position");q=n.getAttribLocation(s,"uv");c=n.getUniformLocation(s,"renderType");d=n.getUniformLocation(s,"map");e=n.getUniformLocation(s,"occlusionMap");f=n.getUniformLocation(s,
    "opacity");g=n.getUniformLocation(s,"color");h=n.getUniformLocation(s,"scale");k=n.getUniformLocation(s,"rotation");l=n.getUniformLocation(s,"screenPosition")}n.useProgram(s);n.enableVertexAttribArray(p);n.enableVertexAttribArray(q);n.uniform1i(e,0);n.uniform1i(d,1);n.bindBuffer(n.ARRAY_BUFFER,t);n.vertexAttribPointer(p,2,n.FLOAT,!1,16,0);n.vertexAttribPointer(q,2,n.FLOAT,!1,16,8);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r);n.disable(n.CULL_FACE);n.depthMask(!1);H=0;for(L=b.length;H<L;H++)if(z=16/A,I.set(z*
    E,z),P=b[H],D.set(P.matrixWorld.elements[12],P.matrixWorld.elements[13],P.matrixWorld.elements[14]),D.applyMatrix4(w.matrixWorldInverse),D.applyProjection(w.projectionMatrix),U.copy(D),M.x=U.x*G+G,M.y=U.y*F+F,u||0<M.x&&M.x<y&&0<M.y&&M.y<A){n.activeTexture(n.TEXTURE1);n.bindTexture(n.TEXTURE_2D,v);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,M.x-8,M.y-8,16,16,0);n.uniform1i(c,0);n.uniform2f(h,I.x,I.y);n.uniform3f(l,U.x,U.y,U.z);n.disable(n.BLEND);n.enable(n.DEPTH_TEST);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,
    0);n.activeTexture(n.TEXTURE0);n.bindTexture(n.TEXTURE_2D,x);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,M.x-8,M.y-8,16,16,0);n.uniform1i(c,1);n.disable(n.DEPTH_TEST);n.activeTexture(n.TEXTURE1);n.bindTexture(n.TEXTURE_2D,v);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0);P.positionScreen.copy(U);P.customUpdateCallback?P.customUpdateCallback(P):P.updateLensFlares();n.uniform1i(c,2);n.enable(n.BLEND);for(var N=0,R=P.lensFlares.length;N<R;N++){var V=P.lensFlares[N];.001<V.opacity&&.001<V.scale&&(U.x=V.x,
    U.y=V.y,U.z=V.z,z=V.size*V.scale/A,I.x=z*E,I.y=z,n.uniform3f(l,U.x,U.y,U.z),n.uniform2f(h,I.x,I.y),n.uniform1f(k,V.rotation),n.uniform1f(f,V.opacity),n.uniform3f(g,V.color.r,V.color.g,V.color.b),a.state.setBlending(V.blending,V.blendEquation,V.blendSrc,V.blendDst),a.setTexture(V.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0))}}n.enable(n.CULL_FACE);n.enable(n.DEPTH_TEST);n.depthMask(!0);a.resetGLState()}}};
THREE.ShadowMapPlugin=function(a,b,c,d){function e(a,b,d){if(b.visible){var f=c[b.id];if(f&&b.castShadow&&(!1===b.frustumCulled||!0===p.intersectsObject(b)))for(var g=0,h=f.length;g<h;g++){var k=f[g];b._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,b.matrixWorld);s.push(k)}g=0;for(h=b.children.length;g<h;g++)e(a,b.children[g],d)}}var f=a.context,g,h,k,l,p=new THREE.Frustum,q=new THREE.Matrix4,n=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3,s=[],u=THREE.ShaderLib.depthRGBA,v=THREE.UniformsUtils.clone(u.uniforms);
    g=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader});h=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,morphTargets:!0});k=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,skinning:!0});l=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,morphTargets:!0,skinning:!0});g._shadowPass=!0;h._shadowPass=!0;k._shadowPass=
        !0;l._shadowPass=!0;this.render=function(c,v){if(!1!==a.shadowMapEnabled){var u,y,A,E,G,F,z,I,U=[];E=0;f.clearColor(1,1,1,1);f.disable(f.BLEND);f.enable(f.CULL_FACE);f.frontFace(f.CCW);a.shadowMapCullFace===THREE.CullFaceFront?f.cullFace(f.FRONT):f.cullFace(f.BACK);a.state.setDepthTest(!0);u=0;for(y=b.length;u<y;u++)if(A=b[u],A.castShadow)if(A instanceof THREE.DirectionalLight&&A.shadowCascade)for(G=0;G<A.shadowCascadeCount;G++){var M;if(A.shadowCascadeArray[G])M=A.shadowCascadeArray[G];else{z=A;
        var H=G;M=new THREE.DirectionalLight;M.isVirtual=!0;M.onlyShadow=!0;M.castShadow=!0;M.shadowCameraNear=z.shadowCameraNear;M.shadowCameraFar=z.shadowCameraFar;M.shadowCameraLeft=z.shadowCameraLeft;M.shadowCameraRight=z.shadowCameraRight;M.shadowCameraBottom=z.shadowCameraBottom;M.shadowCameraTop=z.shadowCameraTop;M.shadowCameraVisible=z.shadowCameraVisible;M.shadowDarkness=z.shadowDarkness;M.shadowBias=z.shadowCascadeBias[H];M.shadowMapWidth=z.shadowCascadeWidth[H];M.shadowMapHeight=z.shadowCascadeHeight[H];
        M.pointsWorld=[];M.pointsFrustum=[];I=M.pointsWorld;F=M.pointsFrustum;for(var L=0;8>L;L++)I[L]=new THREE.Vector3,F[L]=new THREE.Vector3;I=z.shadowCascadeNearZ[H];z=z.shadowCascadeFarZ[H];F[0].set(-1,-1,I);F[1].set(1,-1,I);F[2].set(-1,1,I);F[3].set(1,1,I);F[4].set(-1,-1,z);F[5].set(1,-1,z);F[6].set(-1,1,z);F[7].set(1,1,z);M.originalCamera=v;F=new THREE.Gyroscope;F.position.copy(A.shadowCascadeOffset);F.add(M);F.add(M.target);v.add(F);A.shadowCascadeArray[G]=M}H=A;I=G;z=H.shadowCascadeArray[I];z.position.copy(H.position);
        z.target.position.copy(H.target.position);z.lookAt(z.target);z.shadowCameraVisible=H.shadowCameraVisible;z.shadowDarkness=H.shadowDarkness;z.shadowBias=H.shadowCascadeBias[I];F=H.shadowCascadeNearZ[I];H=H.shadowCascadeFarZ[I];z=z.pointsFrustum;z[0].z=F;z[1].z=F;z[2].z=F;z[3].z=F;z[4].z=H;z[5].z=H;z[6].z=H;z[7].z=H;U[E]=M;E++}else U[E]=A,E++;u=0;for(y=U.length;u<y;u++){A=U[u];A.shadowMap||(G=THREE.LinearFilter,a.shadowMapType===THREE.PCFSoftShadowMap&&(G=THREE.NearestFilter),A.shadowMap=new THREE.WebGLRenderTarget(A.shadowMapWidth,
        A.shadowMapHeight,{minFilter:G,magFilter:G,format:THREE.RGBAFormat}),A.shadowMapSize=new THREE.Vector2(A.shadowMapWidth,A.shadowMapHeight),A.shadowMatrix=new THREE.Matrix4);if(!A.shadowCamera){if(A instanceof THREE.SpotLight)A.shadowCamera=new THREE.PerspectiveCamera(A.shadowCameraFov,A.shadowMapWidth/A.shadowMapHeight,A.shadowCameraNear,A.shadowCameraFar);else if(A instanceof THREE.DirectionalLight)A.shadowCamera=new THREE.OrthographicCamera(A.shadowCameraLeft,A.shadowCameraRight,A.shadowCameraTop,
        A.shadowCameraBottom,A.shadowCameraNear,A.shadowCameraFar);else{THREE.error("THREE.ShadowMapPlugin: Unsupported light type for shadow",A);continue}c.add(A.shadowCamera);!0===c.autoUpdate&&c.updateMatrixWorld()}A.shadowCameraVisible&&!A.cameraHelper&&(A.cameraHelper=new THREE.CameraHelper(A.shadowCamera),c.add(A.cameraHelper));if(A.isVirtual&&M.originalCamera==v){G=v;E=A.shadowCamera;F=A.pointsFrustum;z=A.pointsWorld;n.set(Infinity,Infinity,Infinity);t.set(-Infinity,-Infinity,-Infinity);for(H=0;8>
    H;H++)I=z[H],I.copy(F[H]),I.unproject(G),I.applyMatrix4(E.matrixWorldInverse),I.x<n.x&&(n.x=I.x),I.x>t.x&&(t.x=I.x),I.y<n.y&&(n.y=I.y),I.y>t.y&&(t.y=I.y),I.z<n.z&&(n.z=I.z),I.z>t.z&&(t.z=I.z);E.left=n.x;E.right=t.x;E.top=t.y;E.bottom=n.y;E.updateProjectionMatrix()}E=A.shadowMap;F=A.shadowMatrix;G=A.shadowCamera;G.position.setFromMatrixPosition(A.matrixWorld);r.setFromMatrixPosition(A.target.matrixWorld);G.lookAt(r);G.updateMatrixWorld();G.matrixWorldInverse.getInverse(G.matrixWorld);A.cameraHelper&&
    (A.cameraHelper.visible=A.shadowCameraVisible);A.shadowCameraVisible&&A.cameraHelper.update();F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);F.multiply(G.projectionMatrix);F.multiply(G.matrixWorldInverse);q.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse);p.setFromMatrix(q);a.setRenderTarget(E);a.clear();s.length=0;e(c,c,G);A=0;for(E=s.length;A<E;A++)z=s[A],F=z.object,z=z.buffer,H=F.material instanceof THREE.MeshFaceMaterial?F.material.materials[0]:F.material,I=void 0!==F.geometry.morphTargets&&
    0<F.geometry.morphTargets.length&&H.morphTargets,L=F instanceof THREE.SkinnedMesh&&H.skinning,I=F.customDepthMaterial?F.customDepthMaterial:L?I?l:k:I?h:g,a.setMaterialFaces(H),z instanceof THREE.BufferGeometry?a.renderBufferDirect(G,b,null,I,z,F):a.renderBuffer(G,b,null,I,z,F);A=0;for(E=d.length;A<E;A++)z=d[A],F=z.object,F.visible&&F.castShadow&&(F._modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld),a.renderImmediateObject(G,b,null,g,F))}u=a.getClearColor();y=a.getClearAlpha();f.clearColor(u.r,
        u.g,u.b,y);f.enable(f.BLEND);a.shadowMapCullFace===THREE.CullFaceFront&&f.cullFace(f.BACK);a.resetGLState()}}};
THREE.SpritePlugin=function(a,b){var c,d,e,f,g,h,k,l,p,q,n,t,r,s,u,v,x;function D(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var w=a.context,y,A,E,G,F=new THREE.Vector3,z=new THREE.Quaternion,I=new THREE.Vector3;this.render=function(U,M){if(0!==b.length){if(void 0===E){var H=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),L=new Uint16Array([0,1,2,0,2,3]);y=w.createBuffer();A=w.createBuffer();w.bindBuffer(w.ARRAY_BUFFER,y);w.bufferData(w.ARRAY_BUFFER,H,w.STATIC_DRAW);w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,
    A);w.bufferData(w.ELEMENT_ARRAY_BUFFER,L,w.STATIC_DRAW);var H=w.createProgram(),L=w.createShader(w.VERTEX_SHADER),P=w.createShader(w.FRAGMENT_SHADER);w.shaderSource(L,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
    w.shaderSource(P,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
    w.compileShader(L);w.compileShader(P);w.attachShader(H,L);w.attachShader(H,P);w.linkProgram(H);E=H;v=w.getAttribLocation(E,"position");x=w.getAttribLocation(E,"uv");c=w.getUniformLocation(E,"uvOffset");d=w.getUniformLocation(E,"uvScale");e=w.getUniformLocation(E,"rotation");f=w.getUniformLocation(E,"scale");g=w.getUniformLocation(E,"color");h=w.getUniformLocation(E,"map");k=w.getUniformLocation(E,"opacity");l=w.getUniformLocation(E,"modelViewMatrix");p=w.getUniformLocation(E,"projectionMatrix");q=
        w.getUniformLocation(E,"fogType");n=w.getUniformLocation(E,"fogDensity");t=w.getUniformLocation(E,"fogNear");r=w.getUniformLocation(E,"fogFar");s=w.getUniformLocation(E,"fogColor");u=w.getUniformLocation(E,"alphaTest");H=document.createElement("canvas");H.width=8;H.height=8;L=H.getContext("2d");L.fillStyle="white";L.fillRect(0,0,8,8);G=new THREE.Texture(H);G.needsUpdate=!0}w.useProgram(E);w.enableVertexAttribArray(v);w.enableVertexAttribArray(x);w.disable(w.CULL_FACE);w.enable(w.BLEND);w.bindBuffer(w.ARRAY_BUFFER,
    y);w.vertexAttribPointer(v,2,w.FLOAT,!1,16,0);w.vertexAttribPointer(x,2,w.FLOAT,!1,16,8);w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,A);w.uniformMatrix4fv(p,!1,M.projectionMatrix.elements);w.activeTexture(w.TEXTURE0);w.uniform1i(h,0);L=H=0;(P=U.fog)?(w.uniform3f(s,P.color.r,P.color.g,P.color.b),P instanceof THREE.Fog?(w.uniform1f(t,P.near),w.uniform1f(r,P.far),w.uniform1i(q,1),L=H=1):P instanceof THREE.FogExp2&&(w.uniform1f(n,P.density),w.uniform1i(q,2),L=H=2)):(w.uniform1i(q,0),L=H=0);for(var P=0,N=b.length;P<
N;P++){var R=b[P];R._modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,R.matrixWorld);R.z=-R._modelViewMatrix.elements[14]}b.sort(D);for(var V=[],P=0,N=b.length;P<N;P++){var R=b[P],J=R.material;w.uniform1f(u,J.alphaTest);w.uniformMatrix4fv(l,!1,R._modelViewMatrix.elements);R.matrixWorld.decompose(F,z,I);V[0]=I.x;V[1]=I.y;R=0;U.fog&&J.fog&&(R=L);H!==R&&(w.uniform1i(q,R),H=R);null!==J.map?(w.uniform2f(c,J.map.offset.x,J.map.offset.y),w.uniform2f(d,J.map.repeat.x,J.map.repeat.y)):(w.uniform2f(c,
    0,0),w.uniform2f(d,1,1));w.uniform1f(k,J.opacity);w.uniform3f(g,J.color.r,J.color.g,J.color.b);w.uniform1f(e,J.rotation);w.uniform2fv(f,V);a.state.setBlending(J.blending,J.blendEquation,J.blendSrc,J.blendDst);a.state.setDepthTest(J.depthTest);a.state.setDepthWrite(J.depthWrite);J.map&&J.map.image&&J.map.image.width?a.setTexture(J.map,0):a.setTexture(G,0);w.drawElements(w.TRIANGLES,6,w.UNSIGNED_SHORT,0)}w.enable(w.CULL_FACE);a.resetGLState()}}};
THREE.GeometryUtils={merge:function(a,b,c){THREE.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){THREE.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};
THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.Texture(void 0,b);e.load(a,function(a){f.image=a;f.needsUpdate=!0;c&&c(f)},void 0,function(a){d&&d(a)});f.sourceFile=a;return f},loadTextureCube:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.CubeTexture([],b);f.flipY=!1;var g=0;b=function(b){e.load(a[b],function(a){f.images[b]=a;g+=1;6===g&&(f.needsUpdate=!0,c&&
c(f))},void 0,d)};for(var h=0,k=a.length;h<k;++h)b(h);return f},loadCompressedTexture:function(){THREE.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){THREE.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]};b|=1;var d=a.width,e=a.height,f=document.createElement("canvas");
    f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,k=g.createImageData(d,e),l=k.data,p=0;p<d;p++)for(var q=0;q<e;q++){var n=0>q-1?0:q-1,t=q+1>e-1?e-1:q+1,r=0>p-1?0:p-1,s=p+1>d-1?d-1:p+1,u=[],v=[0,0,h[4*(q*d+p)]/255*b];u.push([-1,0,h[4*(q*d+r)]/255*b]);u.push([-1,-1,h[4*(n*d+r)]/255*b]);u.push([0,-1,h[4*(n*d+p)]/255*b]);u.push([1,-1,h[4*(n*d+s)]/255*b]);u.push([1,0,h[4*(q*d+s)]/255*b]);u.push([1,1,h[4*(t*d+s)]/255*b]);u.push([0,1,h[4*(t*d+p)]/255*
    b]);u.push([-1,1,h[4*(t*d+r)]/255*b]);n=[];r=u.length;for(t=0;t<r;t++){var s=u[t],x=u[(t+1)%r],s=[s[0]-v[0],s[1]-v[1],s[2]-v[2]],x=[x[0]-v[0],x[1]-v[1],x[2]-v[2]];n.push(c([s[1]*x[2]-s[2]*x[1],s[2]*x[0]-s[0]*x[2],s[0]*x[1]-s[1]*x[0]]))}u=[0,0,0];for(t=0;t<n.length;t++)u[0]+=n[t][0],u[1]+=n[t][1],u[2]+=n[t][2];u[0]/=n.length;u[1]/=n.length;u[2]/=n.length;v=4*(q*d+p);l[v]=(u[0]+1)/2*255|0;l[v+1]=(u[1]+1)/2*255|0;l[v+2]=255*u[2]|0;l[v+3]=255}g.putImageData(k,0,0);return f},generateDataTexture:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            b,c){var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g);c=Math.floor(255*c.b);for(var h=0;h<d;h++)e[3*h]=f,e[3*h+1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};
THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){try{return this.faces[this.face][this.weight][this.style]}catch(a){throw"The font "+this.face+" with "+this.weight+" weight and "+this.style+" style is missing.";}},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=
    a},drawText:function(a){var b=this.getFace(),c=this.size/b.resolution,d=0,e=String(a).split(""),f=e.length,g=[];for(a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,k,l,p,q,n,t,r,s,u,v=b.glyphs[a]||b.glyphs["?"];if(v){if(v.o)for(b=v._cachedOutline||(v._cachedOutline=v.o.split(" ")),l=b.length,a=0;a<l;)switch(k=b[a++],k){case "m":k=b[a++]*c+d;p=b[a++]*c;e.moveTo(k,p);
    break;case "l":k=b[a++]*c+d;p=b[a++]*c;e.lineTo(k,p);break;case "q":k=b[a++]*c+d;p=b[a++]*c;t=b[a++]*c+d;r=b[a++]*c;e.quadraticCurveTo(t,r,k,p);if(g=f[f.length-1])for(q=g.x,n=g.y,g=1,h=this.divisions;g<=h;g++){var x=g/h;THREE.Shape.Utils.b2(x,q,t,k);THREE.Shape.Utils.b2(x,n,r,p)}break;case "b":if(k=b[a++]*c+d,p=b[a++]*c,t=b[a++]*c+d,r=b[a++]*c,s=b[a++]*c+d,u=b[a++]*c,e.bezierCurveTo(t,r,s,u,k,p),g=f[f.length-1])for(q=g.x,n=g.y,g=1,h=this.divisions;g<=h;g++)x=g/h,THREE.Shape.Utils.b3(x,q,t,s,k),THREE.Shape.Utils.b3(x,
    n,r,u,p)}return{offset:v.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){b=b||{};var c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],k,l,p;if(0<b(a))for(l=0;l<e;l++)g[l]=l;else for(l=0;l<e;l++)g[l]=e-1-l;var q=2*e;for(l=e-1;2<e;){if(0>=q--){THREE.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()");break}k=l;e<=k&&(k=0);l=k+1;e<=l&&(l=0);p=l+1;e<=p&&(p=0);var n;a:{var t=n=void 0,r=void 0,s=void 0,
    u=void 0,v=void 0,x=void 0,D=void 0,w=void 0,t=a[g[k]].x,r=a[g[k]].y,s=a[g[l]].x,u=a[g[l]].y,v=a[g[p]].x,x=a[g[p]].y;if(1E-10>(s-t)*(x-r)-(u-r)*(v-t))n=!1;else{var y=void 0,A=void 0,E=void 0,G=void 0,F=void 0,z=void 0,I=void 0,U=void 0,M=void 0,H=void 0,M=U=I=w=D=void 0,y=v-s,A=x-u,E=t-v,G=r-x,F=s-t,z=u-r;for(n=0;n<e;n++)if(D=a[g[n]].x,w=a[g[n]].y,!(D===t&&w===r||D===s&&w===u||D===v&&w===x)&&(I=D-t,U=w-r,M=D-s,H=w-u,D-=v,w-=x,M=y*H-A*M,I=F*U-z*I,U=E*w-G*D,-1E-10<=M&&-1E-10<=U&&-1E-10<=I)){n=!1;break a}n=
    !0}}if(n){f.push([a[g[k]],a[g[l]],a[g[p]]]);h.push([g[k],g[l],g[p]]);k=l;for(p=l+1;p<e;k++,p++)g[k]=g[p];e--;q=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;
THREE.Audio=function(a){THREE.Object3D.call(this);this.type="Audio";this.context=a.context;this.source=this.context.createBufferSource();this.source.onended=this.onEnded.bind(this);this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.panner=this.context.createPanner();this.panner.connect(this.gain);this.autoplay=!1;this.startTime=0;this.isPlaying=!1};THREE.Audio.prototype=Object.create(THREE.Object3D.prototype);THREE.Audio.prototype.constructor=THREE.Audio;
THREE.Audio.prototype.load=function(a){var b=this,c=new XMLHttpRequest;c.open("GET",a,!0);c.responseType="arraybuffer";c.onload=function(a){b.context.decodeAudioData(this.response,function(a){b.source.buffer=a;b.autoplay&&b.play()})};c.send();return this};
THREE.Audio.prototype.play=function(){if(!0===this.isPlaying)THREE.warn("THREE.Audio: Audio is already playing.");else{var a=this.context.createBufferSource();a.buffer=this.source.buffer;a.loop=this.source.loop;a.onended=this.source.onended;a.connect(this.panner);a.start(0,this.startTime);this.isPlaying=!0;this.source=a}};THREE.Audio.prototype.pause=function(){this.source.stop();this.startTime=this.context.currentTime};THREE.Audio.prototype.stop=function(){this.source.stop();this.startTime=0};
THREE.Audio.prototype.onEnded=function(){this.isPlaying=!1};THREE.Audio.prototype.setLoop=function(a){this.source.loop=a};THREE.Audio.prototype.setRefDistance=function(a){this.panner.refDistance=a};THREE.Audio.prototype.setRolloffFactor=function(a){this.panner.rolloffFactor=a};THREE.Audio.prototype.setVolume=function(a){this.gain.gain.value=a};
THREE.Audio.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3;return function(b){THREE.Object3D.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}();THREE.AudioListener=function(){THREE.Object3D.call(this);this.type="AudioListener";this.context=new (window.AudioContext||window.webkitAudioContext)};THREE.AudioListener.prototype=Object.create(THREE.Object3D.prototype);THREE.AudioListener.prototype.constructor=THREE.AudioListener;
THREE.AudioListener.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3;return function(g){THREE.Object3D.prototype.updateMatrixWorld.call(this,g);g=this.context.listener;var h=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.subVectors(a,f);g.setPosition(a.x,a.y,a.z);g.setOrientation(d.x,d.y,d.z,h.x,h.y,h.z);g.setVelocity(e.x,e.y,e.z);f.copy(a)}}();
THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(a){THREE.warn("THREE.Curve: Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=.5*(c-a);d=.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.constructor=THREE.CurvePath;THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};
THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};THREE.CurvePath.prototype.getPoint=function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,k,l,p,q=a[0]instanceof THREE.Vector3;p=q?new THREE.Vector3:new THREE.Vector2;k=0;for(l=a.length;k<l;k++)h=a[k],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),q&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),p.add(h);a={minX:e,minY:f,maxX:b,maxY:c};q&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,k;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,k=g/c.maxX,k=b.getUtoTmapping(k,g),g=b.getPoint(k),k=b.getTangent(k),k.set(-k.y,k.x).multiplyScalar(h),f.x=g.x+k.x,f.y=g.y+k.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);THREE.Gyroscope.prototype.constructor=THREE.Gyroscope;
THREE.Gyroscope.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3,e=new THREE.Quaternion,f=new THREE.Vector3;return function(g){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||g)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(d,e,f),this.matrix.decompose(a,b,c),this.matrixWorld.compose(d,b,f)):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=
    !1,g=!0;for(var h=0,k=this.children.length;h<k;h++)this.children[h].updateMatrixWorld(g)}}();THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.Path.prototype.constructor=THREE.Path;THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};
THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};
THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),k=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(k);k=k.getPoint(1);h.push(k.x);h.push(k.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a,b){a||(a=40);for(var c=[],d=0;d<a;d++)c.push(this.getPoint(d/a));return c};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);a=a||12;var c=[],d,e,f,g,h,k,l,p,q,n,t,r,s;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];k=f[3];q=f[0];n=f[1];0<c.length?(g=c[c.length-1],t=g.x,
    r=g.y):(g=this.actions[d-1].args,t=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)s=f/a,g=THREE.Shape.Utils.b2(s,t,q,h),s=THREE.Shape.Utils.b2(s,r,n,k),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];k=f[5];q=f[0];n=f[1];l=f[2];p=f[3];0<c.length?(g=c[c.length-1],t=g.x,r=g.y):(g=this.actions[d-1].args,t=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)s=f/a,g=THREE.Shape.Utils.b3(s,t,q,l,h),s=THREE.Shape.Utils.b3(s,r,n,p,k),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.CSPLINE_THRU:g=
    this.actions[d-1].args;s=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;s=s.concat(f[0]);s=new THREE.SplineCurve(s);for(f=1;f<=g;f++)c.push(s.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];k=f[1];n=f[2];l=f[3];g=f[4];q=!!f[5];t=g-l;r=2*a;for(f=1;f<=r;f++)s=f/r,q||(s=1-s),s=l+s*t,g=h+n*Math.cos(s),s=k+n*Math.sin(s),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.ELLIPSE:for(h=f[0],k=f[1],n=f[2],p=f[3],l=f[4],g=f[5],q=!!f[6],t=g-l,r=2*a,f=1;f<=r;f++)s=f/r,q||
(s=1-s),s=l+s*t,g=h+n*Math.cos(s),s=k+p*Math.sin(s),c.push(new THREE.Vector2(g,s))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new THREE.Shape;f.actions=e.actions;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,n=h.y-g.y;if(1E-10<Math.abs(n)){if(0>n&&(g=b[f],k=-k,h=b[e],n=-n),!(a.y<g.y||a.y>h.y))if(a.y==g.y){if(a.x==g.x)return!0}else{e=n*(a.x-g.x)-k*(a.y-g.y);if(0==e)return!0;0>e||(d=!d)}}else if(a.y==g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=
    h.x))return!0}return d}var e=function(a){var b,c,d,e,f=[],g=new THREE.Path;b=0;for(c=a.length;b<c;b++)d=a[b],e=d.args,d=d.action,d==THREE.PathActions.MOVE_TO&&0!=g.actions.length&&(f.push(g),g=new THREE.Path),g[d].apply(g,e);0!=g.actions.length&&f.push(g);return f}(this.actions);if(0==e.length)return[];if(!0===b)return c(e);var f,g,h,k=[];if(1==e.length)return g=e[0],h=new THREE.Shape,h.actions=g.actions,h.curves=g.curves,k.push(h),k;var l=!THREE.Shape.Utils.isClockWise(e[0].getPoints()),l=a?!l:l;
    h=[];var p=[],q=[],n=0,t;p[n]=void 0;q[n]=[];var r,s;r=0;for(s=e.length;r<s;r++)g=e[r],t=g.getPoints(),f=THREE.Shape.Utils.isClockWise(t),(f=a?!f:f)?(!l&&p[n]&&n++,p[n]={s:new THREE.Shape,p:t},p[n].s.actions=g.actions,p[n].s.curves=g.curves,l&&n++,q[n]=[]):q[n].push({h:g,p:t[0]});if(!p[0])return c(e);if(1<p.length){r=!1;s=[];g=0;for(e=p.length;g<e;g++)h[g]=[];g=0;for(e=p.length;g<e;g++)for(f=q[g],l=0;l<f.length;l++){n=f[l];t=!0;for(var u=0;u<p.length;u++)d(n.p,p[u].p)&&(g!=u&&s.push({froms:g,tos:u,
        hole:l}),t?(t=!1,h[u].push(n)):r=!0);t&&h[g].push(n)}0<s.length&&(r||(q=h))}r=0;for(s=p.length;r<s;r++)for(h=p[r].s,k.push(h),g=q[r],e=0,f=g.length;e<f;e++)h.holes.push(g[e].h);return k};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.constructor=THREE.Shape;THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};
THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};
THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={triangulateShape:function(a,b){function c(a,b,c){return a.x!=b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-d.x,l=e.y-d.y,p=a.x-d.x,q=a.y-d.y,E=h*k-g*l,G=h*p-g*q;if(1E-10<Math.abs(E)){if(0<E){if(0>G||G>E)return[];k=l*p-k*q;if(0>k||k>E)return[]}else{if(0<G||G<E)return[];k=l*p-k*q;if(0<k||k<E)return[]}if(0==k)return!f||0!=G&&G!=E?[a]:[];if(k==E)return!f||0!=G&&G!=E?[b]:[];if(0==G)return[d];
    if(G==E)return[e];f=k/E;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!=G||l*p!=k*q)return[];h=0==g&&0==h;k=0==k&&0==l;if(h&&k)return a.x!=d.x||a.y!=d.y?[]:[a];if(h)return c(d,e,a)?[a]:[];if(k)return c(a,b,d)?[d]:[];0!=g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),d.x<e.x?(b=d,E=d.x,l=e,d=e.x):(b=e,E=e.x,l=d,d=d.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),d.y<e.y?(b=d,E=d.y,l=e,d=e.y):(b=e,E=e.y,l=d,d=d.y));return k<=E?a<E?[]:a==E?f?[]:[b]:a<=d?[b,h]:[b,l]:k>d?[]:k==d?f?[]:[g]:a<=d?[g,h]:
    [g,l]}function e(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return 1E-10<Math.abs(a)?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}var f,g,h,k,l,p={};h=a.concat();f=0;for(g=b.length;f<g;f++)Array.prototype.push.apply(h,b[f]);f=0;for(g=h.length;f<g;f++)l=h[f].x+":"+h[f].y,void 0!==p[l]&&THREE.warn("THREE.Shape: Duplicate point",l),p[l]=f;f=function(a,b){function c(a,b){var d=h.length-1,f=a-1;0>f&&(f=d);var g=a+1;g>d&&(g=0);d=e(h[a],h[f],h[g],k[b]);
    if(!d)return!1;d=k.length-1;f=b-1;0>f&&(f=d);g=b+1;g>d&&(g=0);return(d=e(k[b],k[f],k[g],h[a]))?!0:!1}function f(a,b){var c,e;for(c=0;c<h.length;c++)if(e=c+1,e%=h.length,e=d(a,b,h[c],h[e],!0),0<e.length)return!0;return!1}function g(a,c){var e,f,h,k;for(e=0;e<l.length;e++)for(f=b[l[e]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=d(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,l=[],p,q,A,E,G,F=[],z,I,U,M=0;for(p=b.length;M<p;M++)l.push(M);z=0;for(var H=2*l.length;0<l.length;){H--;if(0>
    H){console.log("Infinite Loop! Holes left:"+l.length+", Probably Hole outside Shape!");break}for(q=z;q<h.length;q++){A=h[q];p=-1;for(M=0;M<l.length;M++)if(E=l[M],G=A.x+":"+A.y+":"+E,void 0===F[G]){k=b[E];for(I=0;I<k.length;I++)if(E=k[I],c(q,I)&&!f(A,E)&&!g(A,E)){p=I;l.splice(M,1);z=h.slice(0,q+1);E=h.slice(q);I=k.slice(p);U=k.slice(0,p+1);h=z.concat(I).concat(U).concat(E);z=q;break}if(0<=p)break;F[G]=!0}if(0<=p)break}}return h}(a,b);var q=THREE.FontUtils.Triangulate(f,!1);f=0;for(g=q.length;f<g;f++)for(k=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    q[f],h=0;3>h;h++)l=k[h].x+":"+k[h].y,l=p[l],void 0!==l&&(k[h]=l);return q.concat()},isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*
    a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.constructor=THREE.LineCurve;THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};
THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.constructor=THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b=new THREE.Vector2;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return b};THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b=new THREE.Vector2;b.x=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);return b.normalize()};
THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.constructor=THREE.CubicBezierCurve;THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.constructor=THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint=function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector2;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);return c};THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};
THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.constructor=THREE.EllipseCurve;THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);a=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;b=new THREE.Vector2;b.x=this.aX+this.xRadius*Math.cos(a);b.y=this.aY+this.yRadius*Math.sin(a);return b};
THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.ArcCurve.prototype.constructor=THREE.ArcCurve;THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});
THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);b.z=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return b});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);b.y=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b.z=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return b});
THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,f.z,b.z,a);return c});
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-0;var c=Math.floor(a);a-=c;var c=c+(0<c?0:(Math.floor(Math.abs(c)/b.length)+1)*b.length),d=b[(c-1)%b.length],e=b[c%b.length],f=b[(c+1)%b.length],b=b[(c+2)%b.length],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,f.z,b.z,a);return c});
THREE.AnimationHandler={LINEAR:0,CATMULLROM:1,CATMULLROM_FORWARD:2,add:function(){THREE.warn("THREE.AnimationHandler.add() has been deprecated.")},get:function(){THREE.warn("THREE.AnimationHandler.get() has been deprecated.")},remove:function(){THREE.warn("THREE.AnimationHandler.remove() has been deprecated.")},animations:[],init:function(a){if(!0===a.initialized)return a;for(var b=0;b<a.hierarchy.length;b++){for(var c=0;c<a.hierarchy[b].keys.length;c++)if(0>a.hierarchy[b].keys[c].time&&(a.hierarchy[b].keys[c].time=
        0),void 0!==a.hierarchy[b].keys[c].rot&&!(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)){var d=a.hierarchy[b].keys[c].rot;a.hierarchy[b].keys[c].rot=(new THREE.Quaternion).fromArray(d)}if(a.hierarchy[b].keys.length&&void 0!==a.hierarchy[b].keys[0].morphTargets){d={};for(c=0;c<a.hierarchy[b].keys.length;c++)for(var e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++){var f=a.hierarchy[b].keys[c].morphTargets[e];d[f]=-1}a.hierarchy[b].usedMorphTargets=d;for(c=0;c<a.hierarchy[b].keys.length;c++){var g=
{};for(f in d){for(e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++)if(a.hierarchy[b].keys[c].morphTargets[e]===f){g[f]=a.hierarchy[b].keys[c].morphTargetsInfluences[e];break}e===a.hierarchy[b].keys[c].morphTargets.length&&(g[f]=0)}a.hierarchy[b].keys[c].morphTargetsInfluences=g}}for(c=1;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].time===a.hierarchy[b].keys[c-1].time&&(a.hierarchy[b].keys.splice(c,1),c--);for(c=0;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].index=c}a.initialized=
    !0;return a},parse:function(a){var b=function(a,c){c.push(a);for(var d=0;d<a.children.length;d++)b(a.children[d],c)},c=[];if(a instanceof THREE.SkinnedMesh)for(var d=0;d<a.skeleton.bones.length;d++)c.push(a.skeleton.bones[d]);else b(a,c);return c},play:function(a){-1===this.animations.indexOf(a)&&this.animations.push(a)},stop:function(a){a=this.animations.indexOf(a);-1!==a&&this.animations.splice(a,1)},update:function(a){for(var b=0;b<this.animations.length;b++)this.animations[b].resetBlendWeights();
    for(b=0;b<this.animations.length;b++)this.animations[b].update(a)}};THREE.Animation=function(a,b){this.root=a;this.data=THREE.AnimationHandler.init(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=!0;this.weight=0;this.interpolationType=THREE.AnimationHandler.LINEAR};
THREE.Animation.prototype={constructor:THREE.Animation,keyTypes:["pos","rot","scl"],play:function(a,b){this.currentTime=void 0!==a?a:0;this.weight=void 0!==b?b:1;this.isPlaying=!0;this.reset();THREE.AnimationHandler.play(this)},stop:function(){this.isPlaying=!1;THREE.AnimationHandler.stop(this)},reset:function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a];void 0===c.animationCache&&(c.animationCache={animations:{},blending:{positionWeight:0,quaternionWeight:0,scaleWeight:0}});
    var d=this.data.name,e=c.animationCache.animations,f=e[d];void 0===f&&(f={prevKey:{pos:0,rot:0,scl:0},nextKey:{pos:0,rot:0,scl:0},originalMatrix:c.matrix},e[d]=f);for(c=0;3>c;c++){for(var d=this.keyTypes[c],e=this.data.hierarchy[a].keys[0],g=this.getNextKeyWith(d,a,1);g.time<this.currentTime&&g.index>e.index;)e=g,g=this.getNextKeyWith(d,a,g.index+1);f.prevKey[d]=e;f.nextKey[d]=g}}},resetBlendWeights:function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a].animationCache;void 0!==
c&&(c=c.blending,c.positionWeight=0,c.quaternionWeight=0,c.scaleWeight=0)}},update:function(){var a=[],b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Quaternion,e=function(a,b){var c=[],d=[],e,q,n,t,r,s;e=(a.length-1)*b;q=Math.floor(e);e-=q;c[0]=0===q?q:q-1;c[1]=q;c[2]=q>a.length-2?q:q+1;c[3]=q>a.length-3?q:q+2;q=a[c[0]];t=a[c[1]];r=a[c[2]];s=a[c[3]];c=e*e;n=e*c;d[0]=f(q[0],t[0],r[0],s[0],e,c,n);d[1]=f(q[1],t[1],r[1],s[1],e,c,n);d[2]=f(q[2],t[2],r[2],s[2],e,c,n);return d},f=function(a,b,c,d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             e,f,n){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*n+(-3*(b-c)-2*a-d)*f+a*e+b};return function(f){if(!1!==this.isPlaying&&(this.currentTime+=f*this.timeScale,0!==this.weight)){f=this.data.length;if(this.currentTime>f||0>this.currentTime)this.loop?(this.currentTime%=f,0>this.currentTime&&(this.currentTime+=f),this.reset()):this.stop();f=0;for(var h=this.hierarchy.length;f<h;f++)for(var k=this.hierarchy[f],l=k.animationCache.animations[this.data.name],p=k.animationCache.blending,q=0;3>q;q++){var n=this.keyTypes[q],
    t=l.prevKey[n],r=l.nextKey[n];if(0<this.timeScale&&r.time<=this.currentTime||0>this.timeScale&&t.time>=this.currentTime){t=this.data.hierarchy[f].keys[0];for(r=this.getNextKeyWith(n,f,1);r.time<this.currentTime&&r.index>t.index;)t=r,r=this.getNextKeyWith(n,f,r.index+1);l.prevKey[n]=t;l.nextKey[n]=r}var s=(this.currentTime-t.time)/(r.time-t.time),u=t[n],v=r[n];0>s&&(s=0);1<s&&(s=1);if("pos"===n)if(this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=u[0]+(v[0]-u[0])*s,c.y=u[1]+(v[1]-u[1])*s,
    c.z=u[2]+(v[2]-u[2])*s,t=this.weight/(this.weight+p.positionWeight),k.position.lerp(c,t),p.positionWeight+=this.weight;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)a[0]=this.getPrevKeyWith("pos",f,t.index-1).pos,a[1]=u,a[2]=v,a[3]=this.getNextKeyWith("pos",f,r.index+1).pos,s=.33*s+.33,r=e(a,s),t=this.weight/(this.weight+p.positionWeight),p.positionWeight+=this.weight,n=k.position,n.x+=(r[0]-n.x)*t,n.y+=(r[1]-
n.y)*t,n.z+=(r[2]-n.z)*t,this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(s=e(a,1.01*s),b.set(s[0],s[1],s[2]),b.sub(n),b.y=0,b.normalize(),s=Math.atan2(b.x,b.z),k.rotation.set(0,s,0))}else"rot"===n?(THREE.Quaternion.slerp(u,v,d,s),0===p.quaternionWeight?(k.quaternion.copy(d),p.quaternionWeight=this.weight):(t=this.weight/(this.weight+p.quaternionWeight),THREE.Quaternion.slerp(k.quaternion,d,k.quaternion,t),p.quaternionWeight+=this.weight)):"scl"===n&&(c.x=u[0]+(v[0]-u[0])*s,c.y=
    u[1]+(v[1]-u[1])*s,c.z=u[2]+(v[2]-u[2])*s,t=this.weight/(this.weight+p.scaleWeight),k.scale.lerp(c,t),p.scaleWeight+=this.weight)}return!0}}}(),getNextKeyWith:function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]},getPrevKeyWith:function(a,b,c){var d=
    this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]}};
THREE.KeyFrameAnimation=function(a){this.root=a.node;this.data=THREE.AnimationHandler.init(a);this.hierarchy=THREE.AnimationHandler.parse(this.root);this.currentTime=0;this.timeScale=.001;this.isPlaying=!1;this.loop=this.isPaused=!0;a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
    d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype={constructor:THREE.KeyFrameAnimation,play:function(a){this.currentTime=void 0!==a?a:0;if(!1===this.isPlaying){this.isPlaying=!0;var b=this.hierarchy.length,c,d;for(a=0;a<b;a++)c=this.hierarchy[a],d=this.data.hierarchy[a],void 0===d.animationCache&&(d.animationCache={},d.animationCache.prevKey=null,d.animationCache.nextKey=null,d.animationCache.originalMatrix=c.matrix),c=this.data.hierarchy[a].keys,c.length&&(d.animationCache.prevKey=c[0],d.animationCache.nextKey=
    c[1],this.startTime=Math.min(c[0].time,this.startTime),this.endTime=Math.max(c[c.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.play(this)},stop:function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.stop(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;d.copy(b.matrix);b.matrix=d;delete c.animationCache}}},update:function(a){if(!1!==
    this.isPlaying){this.currentTime+=a*this.timeScale;a=this.data.length;!0===this.loop&&this.currentTime>a&&(this.currentTime%=a);this.currentTime=Math.min(this.currentTime,a);a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a],d=this.data.hierarchy[a],e=d.keys,d=d.animationCache;if(e.length){var f=d.prevKey,g=d.nextKey;if(g.time<=this.currentTime){for(;g.time<this.currentTime&&g.index>f.index;)f=g,g=e[f.index+1];d.prevKey=f;d.nextKey=g}g.time>=this.currentTime?f.interpolate(g,this.currentTime):
    f.interpolate(g,g.time);this.data.hierarchy[a].node.updateMatrix();c.matrixWorldNeedsUpdate=!0}}}},getNextKeyWith:function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]},getPrevKeyWith:function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]}};
THREE.MorphAnimation=function(a){this.mesh=a;this.frames=a.morphTargetInfluences.length;this.currentTime=0;this.duration=1E3;this.loop=!0;this.currentFrame=this.lastFrame=0;this.isPlaying=!1};
THREE.MorphAnimation.prototype={constructor:THREE.MorphAnimation,play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},update:function(a){if(!1!==this.isPlaying){this.currentTime+=a;!0===this.loop&&this.currentTime>this.duration&&(this.currentTime%=this.duration);this.currentTime=Math.min(this.currentTime,this.duration);a=this.duration/this.frames;var b=Math.floor(this.currentTime/a),c=this.mesh.morphTargetInfluences;b!=this.currentFrame&&(c[this.lastFrame]=0,c[this.currentFrame]=
    1,c[b]=0,this.lastFrame=this.currentFrame,this.currentFrame=b);c[b]=this.currentTime%a/a;c[this.lastFrame]=1-c[b]}}};
THREE.BoxGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,s){var u,v=h.widthSegments,x=h.heightSegments,D=e/2,w=f/2,y=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)u="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)u="y",x=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)u="x",v=h.depthSegments;var A=v+1,E=x+1,G=e/v,F=f/x,z=new THREE.Vector3;z[u]=0<g?1:-1;for(e=0;e<E;e++)for(f=0;f<A;f++){var I=new THREE.Vector3;I[a]=(f*G-D)*c;I[b]=(e*F-w)*d;I[u]=g;h.vertices.push(I)}for(e=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        0;e<x;e++)for(f=0;f<v;f++)w=f+A*e,a=f+A*(e+1),b=f+1+A*(e+1),c=f+1+A*e,d=new THREE.Vector2(f/v,1-e/x),g=new THREE.Vector2(f/v,1-(e+1)/x),u=new THREE.Vector2((f+1)/v,1-(e+1)/x),D=new THREE.Vector2((f+1)/v,1-e/x),w=new THREE.Face3(w+y,a+y,c+y),w.normal.copy(z),w.vertexNormals.push(z.clone(),z.clone(),z.clone()),w.materialIndex=s,h.faces.push(w),h.faceVertexUvs[0].push([d,g,D]),w=new THREE.Face3(a+y,b+y,c+y),w.normal.copy(z),w.vertexNormals.push(z.clone(),z.clone(),z.clone()),w.materialIndex=s,h.faces.push(w),
    h.faceVertexUvs[0].push([g.clone(),u,D.clone()])}THREE.Geometry.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;var h=this;d=a/2;e=b/2;f=c/2;g("z","y",-1,-1,c,b,d,0);g("z","y",1,-1,c,b,-d,1);g("x","z",1,1,a,c,e,2);g("x","z",1,-1,a,c,-e,3);g("x","y",1,-1,a,b,f,4);g("x","y",-1,-1,a,b,-f,5);this.mergeVertices()};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.BoxGeometry.prototype.constructor=THREE.BoxGeometry;
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e,f=[];e=new THREE.Vector3;var g=new THREE.Vector2(.5,.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3,k=c+e/b*d;h.x=a*Math.cos(k);h.y=a*Math.sin(k);this.vertices.push(h);f.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,
    0,1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([f[e].clone(),f[e+1].clone(),g.clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CircleGeometry.prototype.constructor=THREE.CircleGeometry;
THREE.CubeGeometry=function(a,b,c,d,e,f){THREE.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry.");return new THREE.BoxGeometry(a,b,c,d,e,f)};
THREE.CylinderGeometry=function(a,b,c,d,e,f,g,h){THREE.Geometry.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=d||8;e=e||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var k=c/2,l,p,q=[],n=[];for(p=0;p<=e;p++){var t=[],r=[],s=p/e,u=s*(b-a)+a;for(l=0;l<=d;l++){var v=l/d,x=new THREE.Vector3;x.x=u*Math.sin(v*h+
g);x.y=-s*c+k;x.z=u*Math.cos(v*h+g);this.vertices.push(x);t.push(this.vertices.length-1);r.push(new THREE.Vector2(v,1-s))}q.push(t);n.push(r)}c=(b-a)/c;for(l=0;l<d;l++)for(0!==a?(g=this.vertices[q[0][l]].clone(),h=this.vertices[q[0][l+1]].clone()):(g=this.vertices[q[1][l]].clone(),h=this.vertices[q[1][l+1]].clone()),g.setY(Math.sqrt(g.x*g.x+g.z*g.z)*c).normalize(),h.setY(Math.sqrt(h.x*h.x+h.z*h.z)*c).normalize(),p=0;p<e;p++){var t=q[p][l],r=q[p+1][l],s=q[p+1][l+1],u=q[p][l+1],v=g.clone(),x=g.clone(),
    D=h.clone(),w=h.clone(),y=n[p][l].clone(),A=n[p+1][l].clone(),E=n[p+1][l+1].clone(),G=n[p][l+1].clone();this.faces.push(new THREE.Face3(t,r,u,[v,x,w]));this.faceVertexUvs[0].push([y,A,G]);this.faces.push(new THREE.Face3(r,s,u,[x.clone(),D,w.clone()]));this.faceVertexUvs[0].push([A.clone(),E,G.clone()])}if(!1===f&&0<a)for(this.vertices.push(new THREE.Vector3(0,k,0)),l=0;l<d;l++)t=q[0][l],r=q[0][l+1],s=this.vertices.length-1,v=new THREE.Vector3(0,1,0),x=new THREE.Vector3(0,1,0),D=new THREE.Vector3(0,
    1,0),y=n[0][l].clone(),A=n[0][l+1].clone(),E=new THREE.Vector2(A.x,0),this.faces.push(new THREE.Face3(t,r,s,[v,x,D])),this.faceVertexUvs[0].push([y,A,E]);if(!1===f&&0<b)for(this.vertices.push(new THREE.Vector3(0,-k,0)),l=0;l<d;l++)t=q[e][l+1],r=q[e][l],s=this.vertices.length-1,v=new THREE.Vector3(0,-1,0),x=new THREE.Vector3(0,-1,0),D=new THREE.Vector3(0,-1,0),y=n[e][l+1].clone(),A=n[e][l].clone(),E=new THREE.Vector2(A.x,1),this.faces.push(new THREE.Face3(t,r,s,[v,x,D])),this.faceVertexUvs[0].push([y,
    A,E]);this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry.prototype.constructor=THREE.CylinderGeometry;THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),this.type="ExtrudeGeometry",a=a instanceof Array?a:[a],this.addShapeList(a,b),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.constructor=THREE.ExtrudeGeometry;
THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||THREE.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=1,d=a.x-b.x,e=a.y-b.y,f=c.x-a.x,g=c.y-a.y,h=d*d+e*e;if(1E-10<Math.abs(d*g-e*f)){var k=Math.sqrt(h),l=Math.sqrt(f*f+g*g),h=b.x-e/k;b=b.y+d/k;f=((c.x-g/l-h)*g-(c.y+f/l-b)*f)/(d*g-e*f);c=h+d*f-a.x;a=b+e*f-a.y;d=c*c+a*a;if(2>=d)return new THREE.Vector2(c,a);d=Math.sqrt(d/2)}else a=!1,1E-10<d?1E-10<f&&(a=!0):
    -1E-10>d?-1E-10>f&&(a=!0):Math.sign(e)==Math.sign(g)&&(a=!0),a?(c=-e,a=d,d=Math.sqrt(h)):(c=d,a=e,d=Math.sqrt(h/2));return new THREE.Vector2(c/d,a/d)}function e(a,b){var c,d;for(O=a.length;0<=--O;){c=O;d=O-1;0>d&&(d=a.length-1);for(var e=0,f=t+2*p,e=0;e<f;e++){var g=oa*e,h=oa*(e+1),k=b+c+g,g=b+d+g,l=b+d+h,h=b+c+h,k=k+U,g=g+U,l=l+U,h=h+U;I.faces.push(new THREE.Face3(k,g,h,null,null,x));I.faces.push(new THREE.Face3(g,l,h,null,null,x));k=D.generateSideWallUV(I,k,g,l,h);I.faceVertexUvs[0].push([k[0],
    k[1],k[3]]);I.faceVertexUvs[0].push([k[1],k[2],k[3]])}}}function f(a,b,c){I.vertices.push(new THREE.Vector3(a,b,c))}function g(a,b,c){a+=U;b+=U;c+=U;I.faces.push(new THREE.Face3(a,b,c,null,null,v));a=D.generateTopUV(I,a,b,c);I.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,l=void 0!==b.bevelSize?b.bevelSize:k-2,p=void 0!==b.bevelSegments?b.bevelSegments:3,q=void 0!==b.bevelEnabled?b.bevelEnabled:!0,n=void 0!==b.curveSegments?b.curveSegments:
    12,t=void 0!==b.steps?b.steps:1,r=b.extrudePath,s,u=!1,v=b.material,x=b.extrudeMaterial,D=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,w,y,A,E;r&&(s=r.getSpacedPoints(t),u=!0,q=!1,w=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(r,t,!1),y=new THREE.Vector3,A=new THREE.Vector3,E=new THREE.Vector3);q||(l=k=p=0);var G,F,z,I=this,U=this.vertices.length,r=a.extractPoints(n),n=r.shape,M=r.holes;if(r=!THREE.Shape.Utils.isClockWise(n)){n=n.reverse();F=0;for(z=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             M.length;F<z;F++)G=M[F],THREE.Shape.Utils.isClockWise(G)&&(M[F]=G.reverse());r=!1}var H=THREE.Shape.Utils.triangulateShape(n,M),L=n;F=0;for(z=M.length;F<z;F++)G=M[F],n=n.concat(G);var P,N,R,V,J,oa=n.length,ja,ha=H.length,r=[],O=0;R=L.length;P=R-1;for(N=O+1;O<R;O++,P++,N++)P===R&&(P=0),N===R&&(N=0),r[O]=d(L[O],L[P],L[N]);var ca=[],ba,qa=r.concat();F=0;for(z=M.length;F<z;F++){G=M[F];ba=[];O=0;R=G.length;P=R-1;for(N=O+1;O<R;O++,P++,N++)P===R&&(P=0),N===R&&(N=0),ba[O]=d(G[O],G[P],G[N]);ca.push(ba);qa=
    qa.concat(ba)}for(P=0;P<p;P++){R=P/p;V=k*(1-R);N=l*Math.sin(R*Math.PI/2);O=0;for(R=L.length;O<R;O++)J=c(L[O],r[O],N),f(J.x,J.y,-V);F=0;for(z=M.length;F<z;F++)for(G=M[F],ba=ca[F],O=0,R=G.length;O<R;O++)J=c(G[O],ba[O],N),f(J.x,J.y,-V)}N=l;for(O=0;O<oa;O++)J=q?c(n[O],qa[O],N):n[O],u?(A.copy(w.normals[0]).multiplyScalar(J.x),y.copy(w.binormals[0]).multiplyScalar(J.y),E.copy(s[0]).add(A).add(y),f(E.x,E.y,E.z)):f(J.x,J.y,0);for(R=1;R<=t;R++)for(O=0;O<oa;O++)J=q?c(n[O],qa[O],N):n[O],u?(A.copy(w.normals[R]).multiplyScalar(J.x),
    y.copy(w.binormals[R]).multiplyScalar(J.y),E.copy(s[R]).add(A).add(y),f(E.x,E.y,E.z)):f(J.x,J.y,h/t*R);for(P=p-1;0<=P;P--){R=P/p;V=k*(1-R);N=l*Math.sin(R*Math.PI/2);O=0;for(R=L.length;O<R;O++)J=c(L[O],r[O],N),f(J.x,J.y,h+V);F=0;for(z=M.length;F<z;F++)for(G=M[F],ba=ca[F],O=0,R=G.length;O<R;O++)J=c(G[O],ba[O],N),u?f(J.x,J.y+s[t-1].y,s[t-1].x+V):f(J.x,J.y,h+V)}(function(){if(q){var a;a=0*oa;for(O=0;O<ha;O++)ja=H[O],g(ja[2]+a,ja[1]+a,ja[0]+a);a=t+2*p;a*=oa;for(O=0;O<ha;O++)ja=H[O],g(ja[0]+a,ja[1]+a,ja[2]+
a)}else{for(O=0;O<ha;O++)ja=H[O],g(ja[2],ja[1],ja[0]);for(O=0;O<ha;O++)ja=H[O],g(ja[0]+oa*t,ja[1]+oa*t,ja[2]+oa*t)}})();(function(){var a=0;e(L,a);a+=L.length;F=0;for(z=M.length;F<z;F++)G=M[F],e(G,a),a+=G.length})()};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new THREE.Vector2(b.x,b.y),new THREE.Vector2(c.x,c.y),new THREE.Vector2(d.x,d.y)]},generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new THREE.Vector2(b.x,1-b.z),new THREE.Vector2(c.x,1-c.z),new THREE.Vector2(d.x,1-d.z),new THREE.Vector2(e.x,1-e.z)]:[new THREE.Vector2(b.y,1-b.z),new THREE.Vector2(c.y,1-c.z),new THREE.Vector2(d.y,
    1-d.z),new THREE.Vector2(e.y,1-e.z)]}};THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);this.type="ShapeGeometry";!1===a instanceof Array&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.constructor=THREE.ShapeGeometry;THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,l=e.holes;if(!THREE.Shape.Utils.isClockWise(k))for(k=k.reverse(),e=0,f=l.length;e<f;e++)g=l[e],THREE.Shape.Utils.isClockWise(g)&&(l[e]=g.reverse());var p=THREE.Shape.Utils.triangulateShape(k,l);e=0;for(f=l.length;e<f;e++)g=l[e],
    k=k.concat(g);l=k.length;f=p.length;for(e=0;e<l;e++)g=k[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)l=p[e],k=l[0]+h,g=l[1]+h,l=l[2]+h,this.faces.push(new THREE.Face3(k,g,l,null,null,c)),this.faceVertexUvs[0].push(d.generateTopUV(this,k,g,l))};
THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=b||12;c=c||0;d=d||2*Math.PI;for(var e=1/(a.length-1),f=1/b,g=0,h=b;g<=h;g++)for(var k=c+g*f*d,l=Math.cos(k),p=Math.sin(k),k=0,q=a.length;k<q;k++){var n=a[k],t=new THREE.Vector3;t.x=l*n.x-p*n.y;t.y=p*n.x+l*n.y;t.z=n.z;this.vertices.push(t)}c=a.length;g=0;for(h=b;g<h;g++)for(k=0,q=a.length-1;k<q;k++){b=p=k+c*g;d=p+c;var l=p+1+c,p=p+1,n=g*f,t=k*e,r=
    n+f,s=t+e;this.faces.push(new THREE.Face3(b,d,p));this.faceVertexUvs[0].push([new THREE.Vector2(n,t),new THREE.Vector2(r,t),new THREE.Vector2(n,s)]);this.faces.push(new THREE.Face3(d,l,p));this.faceVertexUvs[0].push([new THREE.Vector2(r,t),new THREE.Vector2(r,s),new THREE.Vector2(n,s)])}this.mergeVertices();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.LatheGeometry.prototype.constructor=THREE.LatheGeometry;
THREE.PlaneGeometry=function(a,b,c,d){console.info("THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint.");THREE.Geometry.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a,b,c,d))};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry.prototype.constructor=THREE.PlaneGeometry;
THREE.PlaneBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=c||1;d=d||1;var g=c+1,h=d+1,k=a/c,l=b/d;b=new Float32Array(g*h*3);a=new Float32Array(g*h*3);for(var p=new Float32Array(g*h*2),q=0,n=0,t=0;t<h;t++)for(var r=t*l-f,s=0;s<g;s++)b[q]=s*k-e,b[q+1]=-r,a[q+2]=1,p[n]=s/c,p[n+1]=1-t/d,q+=3,n+=2;q=0;e=new (65535<b.length/3?Uint32Array:Uint16Array)(c*d*6);for(t=0;t<d;t++)for(s=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  0;s<c;s++)f=s+g*(t+1),h=s+1+g*(t+1),k=s+1+g*t,e[q]=s+g*t,e[q+1]=f,e[q+2]=k,e[q+3]=f,e[q+4]=h,e[q+5]=k,q+=6;this.addAttribute("index",new THREE.BufferAttribute(e,1));this.addAttribute("position",new THREE.BufferAttribute(b,3));this.addAttribute("normal",new THREE.BufferAttribute(a,3));this.addAttribute("uv",new THREE.BufferAttribute(p,2))};THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.PlaneBufferGeometry.prototype.constructor=THREE.PlaneBufferGeometry;
THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||0;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):8;var g,h=[],k=a,l=(b-a)/d;for(a=0;a<d+1;a++){for(g=0;g<c+1;g++){var p=new THREE.Vector3,q=e+g/c*f;p.x=k*Math.cos(q);p.y=k*Math.sin(q);this.vertices.push(p);h.push(new THREE.Vector2((p.x/b+1)/2,
    (p.y/b+1)/2))}k+=l}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++)for(e=a*(c+1),g=0;g<c;g++)f=q=g+e,l=q+c+1,p=q+c+2,this.faces.push(new THREE.Face3(f,l,p,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[p].clone()]),f=q,l=q+c+2,p=q+1,this.faces.push(new THREE.Face3(f,l,p,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[p].clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,k)};
THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry.prototype.constructor=THREE.RingGeometry;
THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h,k,l=[],p=[];for(k=0;k<=c;k++){var q=[],n=[];for(h=0;h<=b;h++){var t=h/b,r=k/c,s=new THREE.Vector3;s.x=-a*Math.cos(d+t*e)*Math.sin(f+r*g);
    s.y=a*Math.cos(f+r*g);s.z=a*Math.sin(d+t*e)*Math.sin(f+r*g);this.vertices.push(s);q.push(this.vertices.length-1);n.push(new THREE.Vector2(t,1-r))}l.push(q);p.push(n)}for(k=0;k<c;k++)for(h=0;h<b;h++){d=l[k][h+1];e=l[k][h];f=l[k+1][h];g=l[k+1][h+1];var q=this.vertices[d].clone().normalize(),n=this.vertices[e].clone().normalize(),t=this.vertices[f].clone().normalize(),r=this.vertices[g].clone().normalize(),s=p[k][h+1].clone(),u=p[k][h].clone(),v=p[k+1][h].clone(),x=p[k+1][h+1].clone();Math.abs(this.vertices[d].y)===
a?(s.x=(s.x+u.x)/2,this.faces.push(new THREE.Face3(d,f,g,[q,t,r])),this.faceVertexUvs[0].push([s,v,x])):Math.abs(this.vertices[f].y)===a?(v.x=(v.x+x.x)/2,this.faces.push(new THREE.Face3(d,e,f,[q,n,t])),this.faceVertexUvs[0].push([s,u,v])):(this.faces.push(new THREE.Face3(d,e,g,[q,n,r])),this.faceVertexUvs[0].push([s,u,x]),this.faces.push(new THREE.Face3(e,f,g,[n.clone(),t,r.clone()])),this.faceVertexUvs[0].push([u.clone(),v,x.clone()]))}this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,
    a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry.prototype.constructor=THREE.SphereGeometry;THREE.TextGeometry=function(a,b){b=b||{};var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b);this.type="TextGeometry"};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TextGeometry.prototype.constructor=THREE.TextGeometry;
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=c||8;d=d||6;e=e||2*Math.PI;for(var f=new THREE.Vector3,g=[],h=[],k=0;k<=c;k++)for(var l=0;l<=d;l++){var p=l/d*e,q=k/c*Math.PI*2;f.x=a*Math.cos(p);f.y=a*Math.sin(p);var n=new THREE.Vector3;n.x=(a+b*Math.cos(q))*Math.cos(p);n.y=(a+b*Math.cos(q))*Math.sin(p);n.z=b*Math.sin(q);this.vertices.push(n);g.push(new THREE.Vector2(l/
d,k/c));h.push(n.clone().sub(f).normalize())}for(k=1;k<=c;k++)for(l=1;l<=d;l++)a=(d+1)*k+l-1,b=(d+1)*(k-1)+l-1,e=(d+1)*(k-1)+l,f=(d+1)*k+l,p=new THREE.Face3(a,b,f,[h[a].clone(),h[b].clone(),h[f].clone()]),this.faces.push(p),this.faceVertexUvs[0].push([g[a].clone(),g[b].clone(),g[f].clone()]),p=new THREE.Face3(b,e,f,[h[b].clone(),h[e].clone(),h[f].clone()]),this.faces.push(p),this.faceVertexUvs[0].push([g[b].clone(),g[e].clone(),g[f].clone()]);this.computeFaceNormals()};
THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusGeometry.prototype.constructor=THREE.TorusGeometry;
THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=b/c;b=Math.cos(a);f*=d*(2+b)*.5;g=d*(2+b)*g*.5;d=e*d*Math.sin(a)*.5;return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,p:e,q:f,heightScale:g};a=a||100;b=b||40;c=c||64;d=d||8;e=e||2;f=f||3;g=g||1;for(var k=Array(c),l=new THREE.Vector3,p=new THREE.Vector3,q=new THREE.Vector3,n=0;n<c;++n){k[n]=
    Array(d);var t=n/c*2*e*Math.PI,r=h(t,f,e,a,g),t=h(t+.01,f,e,a,g);l.subVectors(t,r);p.addVectors(t,r);q.crossVectors(l,p);p.crossVectors(q,l);q.normalize();p.normalize();for(t=0;t<d;++t){var s=t/d*2*Math.PI,u=-b*Math.cos(s),s=b*Math.sin(s),v=new THREE.Vector3;v.x=r.x+u*p.x+s*q.x;v.y=r.y+u*p.y+s*q.y;v.z=r.z+u*p.z+s*q.z;k[n][t]=this.vertices.push(v)-1}}for(n=0;n<c;++n)for(t=0;t<d;++t)e=(n+1)%c,f=(t+1)%d,a=k[n][t],b=k[e][t],e=k[e][f],f=k[n][f],g=new THREE.Vector2(n/c,t/d),l=new THREE.Vector2((n+1)/c,
    t/d),p=new THREE.Vector2((n+1)/c,(t+1)/d),q=new THREE.Vector2(n/c,(t+1)/d),this.faces.push(new THREE.Face3(a,b,f)),this.faceVertexUvs[0].push([g,l,q]),this.faces.push(new THREE.Face3(b,e,f)),this.faceVertexUvs[0].push([l.clone(),p,q.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry.prototype.constructor=THREE.TorusKnotGeometry;
THREE.TubeGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="TubeGeometry";this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;f=f||THREE.TubeGeometry.NoTaper;var g=[],h,k,l=b+1,p,q,n,t,r,s=new THREE.Vector3,u,v,x;u=new THREE.TubeGeometry.FrenetFrames(a,b,e);v=u.normals;x=u.binormals;this.tangents=u.tangents;this.normals=v;this.binormals=x;for(u=0;u<l;u++)for(g[u]=[],p=u/(l-1),r=a.getPointAt(p),h=v[u],k=x[u],n=c*f(p),p=0;p<d;p++)q=
    p/d*2*Math.PI,t=-n*Math.cos(q),q=n*Math.sin(q),s.copy(r),s.x+=t*h.x+q*k.x,s.y+=t*h.y+q*k.y,s.z+=t*h.z+q*k.z,g[u][p]=this.vertices.push(new THREE.Vector3(s.x,s.y,s.z))-1;for(u=0;u<b;u++)for(p=0;p<d;p++)f=e?(u+1)%b:u+1,l=(p+1)%d,a=g[u][p],c=g[f][p],f=g[f][l],l=g[u][l],s=new THREE.Vector2(u/b,p/d),v=new THREE.Vector2((u+1)/b,p/d),x=new THREE.Vector2((u+1)/b,(p+1)/d),h=new THREE.Vector2(u/b,(p+1)/d),this.faces.push(new THREE.Face3(a,c,l)),this.faceVertexUvs[0].push([s,v,h]),this.faces.push(new THREE.Face3(c,
    f,l)),this.faceVertexUvs[0].push([v.clone(),x,h.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry.prototype.constructor=THREE.TubeGeometry;THREE.TubeGeometry.NoTaper=function(a){return 1};THREE.TubeGeometry.SinusoidalTaper=function(a){return Math.sin(Math.PI*a)};
THREE.TubeGeometry.FrenetFrames=function(a,b,c){var d=new THREE.Vector3,e=[],f=[],g=[],h=new THREE.Vector3,k=new THREE.Matrix4;b+=1;var l,p,q;this.tangents=e;this.normals=f;this.binormals=g;for(l=0;l<b;l++)p=l/(b-1),e[l]=a.getTangentAt(p),e[l].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;l=Math.abs(e[0].x);p=Math.abs(e[0].y);q=Math.abs(e[0].z);l<=a&&(a=l,d.set(1,0,0));p<=a&&(a=p,d.set(0,1,0));q<=a&&d.set(0,0,1);h.crossVectors(e[0],d).normalize();f[0].crossVectors(e[0],
    h);g[0].crossVectors(e[0],f[0]);for(l=1;l<b;l++)f[l]=f[l-1].clone(),g[l]=g[l-1].clone(),h.crossVectors(e[l-1],e[l]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[l-1].dot(e[l]),-1,1)),f[l].applyMatrix4(k.makeRotationAxis(h,d))),g[l].crossVectors(e[l],f[l]);if(c)for(d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d),l=1;l<b;l++)f[l].applyMatrix4(k.makeRotationAxis(e[l],d*l)),g[l].crossVectors(e[l],f[l])};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);k.faces.push(d);u.copy(a).add(b).add(c).divideScalar(3);d=Math.atan2(u.z,-u.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])}function g(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    b){for(var c=Math.pow(2,b),d=e(k.vertices[a.a]),g=e(k.vertices[a.b]),h=e(k.vertices[a.c]),l=[],n=0;n<=c;n++){l[n]=[];for(var p=e(d.clone().lerp(h,n/c)),q=e(g.clone().lerp(h,n/c)),s=c-n,r=0;r<=s;r++)l[n][r]=0==r&&n==c?p:e(p.clone().lerp(q,r/s))}for(n=0;n<c;n++)for(r=0;r<2*(c-n)-1;r++)d=Math.floor(r/2),0==r%2?f(l[n][d+1],l[n+1][d],l[n][d]):f(l[n][d+1],l[n+1][d+1],l[n+1][d])}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+.5,a.y));return a.clone()}
    THREE.Geometry.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;for(var k=this,l=0,p=a.length;l<p;l+=3)e(new THREE.Vector3(a[l],a[l+1],a[l+2]));a=this.vertices;for(var q=[],n=l=0,p=b.length;l<p;l+=3,n++){var t=a[b[l]],r=a[b[l+1]],s=a[b[l+2]];q[n]=new THREE.Face3(t.index,r.index,s.index,[t.clone(),r.clone(),s.clone()])}for(var u=new THREE.Vector3,l=0,p=q.length;l<p;l++)g(q[l],d);l=0;for(p=this.faceVertexUvs[0].length;l<p;l++)b=this.faceVertexUvs[0][l],
        d=b[0].x,a=b[1].x,q=b[2].x,n=Math.max(d,Math.max(a,q)),t=Math.min(d,Math.min(a,q)),.9<n&&.1>t&&(.2>d&&(b[0].x+=1),.2>a&&(b[1].x+=1),.2>q&&(b[2].x+=1));l=0;for(p=this.vertices.length;l<p;l++)this.vertices[l].multiplyScalar(c);this.mergeVertices();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PolyhedronGeometry.prototype.constructor=THREE.PolyhedronGeometry;
THREE.DodecahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};var c=(1+Math.sqrt(5))/2,d=1/c;THREE.PolyhedronGeometry.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,
    11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b)};THREE.DodecahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.DodecahedronGeometry.prototype.constructor=THREE.DodecahedronGeometry;
THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b}};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry.prototype.constructor=THREE.IcosahedronGeometry;THREE.OctahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b}};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.OctahedronGeometry.prototype.constructor=THREE.OctahedronGeometry;
THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b}};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry.prototype.constructor=THREE.TetrahedronGeometry;
THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,k,l,p=b+1;for(g=0;g<=c;g++)for(l=g/c,h=0;h<=b;h++)k=h/b,k=a(k,l),d.push(k);var q,n,t,r;for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*p+h,d=g*p+h+1,l=(g+1)*p+h+1,k=(g+1)*p+h,q=new THREE.Vector2(h/b,g/c),n=new THREE.Vector2((h+1)/b,g/c),t=new THREE.Vector2((h+1)/b,(g+1)/c),r=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,
    d,k)),f.push([q,n,r]),e.push(new THREE.Face3(d,l,k)),f.push([n.clone(),t,r.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry.prototype.constructor=THREE.ParametricGeometry;
THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1]);a=new THREE.BufferGeometry;a.addAttribute("position",new THREE.BufferAttribute(b,3));a.addAttribute("color",new THREE.BufferAttribute(c,3));b=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,a,b,THREE.LinePieces)};THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);
THREE.AxisHelper.prototype.constructor=THREE.AxisHelper;
THREE.ArrowHelper=function(){var a=new THREE.Geometry;a.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var b=new THREE.CylinderGeometry(0,.5,1,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,-.5,0));return function(c,d,e,f,g,h){THREE.Object3D.call(this);void 0===f&&(f=16776960);void 0===e&&(e=1);void 0===g&&(g=.2*e);void 0===h&&(h=.2*g);this.position.copy(d);this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:f}));this.line.matrixAutoUpdate=!1;this.add(this.line);
    this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:f}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(c);this.setLength(e,g,h)}}();THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.constructor=THREE.ArrowHelper;
THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,a-b,1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};
THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a)};THREE.BoxHelper=function(a){var b=new THREE.BufferGeometry;b.addAttribute("position",new THREE.BufferAttribute(new Float32Array(72),3));THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);THREE.BoxHelper.prototype.constructor=THREE.BoxHelper;
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.geometry.attributes.position.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=c.x;d[4]=b.y;d[5]=b.z;d[6]=c.x;d[7]=b.y;d[8]=b.z;d[9]=c.x;d[10]=c.y;d[11]=b.z;d[12]=c.x;d[13]=c.y;d[14]=b.z;d[15]=b.x;d[16]=c.y;d[17]=b.z;d[18]=b.x;d[19]=c.y;d[20]=b.z;d[21]=b.x;d[22]=b.y;d[23]=b.z;d[24]=b.x;d[25]=b.y;d[26]=c.z;d[27]=c.x;d[28]=b.y;d[29]=c.z;d[30]=c.x;d[31]=b.y;
    d[32]=c.z;d[33]=c.x;d[34]=c.y;d[35]=c.z;d[36]=c.x;d[37]=c.y;d[38]=c.z;d[39]=b.x;d[40]=c.y;d[41]=c.z;d[42]=b.x;d[43]=c.y;d[44]=c.z;d[45]=b.x;d[46]=b.y;d[47]=c.z;d[48]=b.x;d[49]=b.y;d[50]=b.z;d[51]=b.x;d[52]=b.y;d[53]=c.z;d[54]=c.x;d[55]=b.y;d[56]=b.z;d[57]=c.x;d[58]=b.y;d[59]=c.z;d[60]=c.x;d[61]=c.y;d[62]=b.z;d[63]=c.x;d[64]=c.y;d[65]=c.z;d[66]=b.x;d[67]=c.y;d[68]=b.z;d[69]=b.x;d[70]=c.y;d[71]=c.z;this.geometry.attributes.position.needsUpdate=!0;this.geometry.computeBoundingSphere();this.matrix=a.matrixWorld;
    this.matrixAutoUpdate=!1};THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.constructor=THREE.BoundingBoxHelper;THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
    b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);THREE.CameraHelper.prototype.constructor=THREE.CameraHelper;
THREE.CameraHelper.prototype.update=function(){var a,b,c=new THREE.Vector3,d=new THREE.Camera,e=function(e,g,h,k){c.set(g,h,k).unproject(d);e=b[e];if(void 0!==e)for(g=0,h=e.length;g<h;g++)a.vertices[e[g]].copy(c)};return function(){a=this.geometry;b=this.pointMap;d.projectionMatrix.copy(this.camera.projectionMatrix);e("c",0,0,-1);e("t",0,0,1);e("n1",-1,-1,-1);e("n2",1,-1,-1);e("n3",-1,1,-1);e("n4",1,1,-1);e("f1",-1,-1,1);e("f2",1,-1,1);e("f3",-1,1,1);e("f4",1,1,1);e("u1",.7,1.1,-1);e("u2",-.7,1.1,
    -1);e("u3",0,2,-1);e("cf1",-1,0,1);e("cf2",1,0,1);e("cf3",0,-1,1);e("cf4",0,1,1);e("cn1",-1,0,-1);e("cn2",1,0,-1);e("cn3",0,-1,-1);e("cn4",0,1,-1);a.verticesNeedUpdate=!0}}();
THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;b=b||1;var c=new THREE.Geometry;c.vertices.push(new THREE.Vector3(-b,b,0),new THREE.Vector3(b,b,0),new THREE.Vector3(b,-b,0),new THREE.Vector3(-b,-b,0),new THREE.Vector3(-b,b,0));var d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Line(c,d);this.add(this.lightPlane);
    c=new THREE.Geometry;c.vertices.push(new THREE.Vector3,new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.constructor=THREE.DirectionalLightHelper;
THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();
THREE.EdgesHelper=function(a,b,c){b=void 0!==b?b:16777215;c=Math.cos(THREE.Math.degToRad(void 0!==c?c:1));var d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry,k;a.geometry instanceof THREE.BufferGeometry?(k=new THREE.Geometry,k.fromBufferGeometry(a.geometry)):k=a.geometry.clone();k.mergeVertices();k.computeFaceNormals();var l=k.vertices;k=k.faces;for(var p=0,q=0,n=k.length;q<n;q++)for(var t=k[q],r=0;3>r;r++){d[0]=t[g[r]];d[1]=t[g[(r+1)%3]];d.sort(f);var s=d.toString();
    void 0===e[s]?(e[s]={vert1:d[0],vert2:d[1],face1:q,face2:void 0},p++):e[s].face2=q}d=new Float32Array(6*p);f=0;for(s in e)if(g=e[s],void 0===g.face2||k[g.face1].normal.dot(k[g.face2].normal)<=c)p=l[g.vert1],d[f++]=p.x,d[f++]=p.y,d[f++]=p.z,p=l[g.vert2],d[f++]=p.x,d[f++]=p.y,d[f++]=p.z;h.addAttribute("position",new THREE.BufferAttribute(d,3));THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:b}),THREE.LinePieces);this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};
THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype);THREE.EdgesHelper.prototype.constructor=THREE.EdgesHelper;
THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=new THREE.Geometry;c=0;for(var e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.constructor=THREE.FaceNormalsHelper;
THREE.FaceNormalsHelper.prototype.update=function(){var a=this.geometry.vertices,b=this.object,c=b.geometry.vertices,d=b.geometry.faces,e=b.matrixWorld;b.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(e);for(var f=b=0,g=d.length;b<g;b++,f+=2){var h=d[b];a[f].copy(c[h.a]).add(c[h.b]).add(c[h.c]).divideScalar(3).applyMatrix4(e);a[f+1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(a[f])}this.geometry.verticesNeedUpdate=!0;return this};
THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.constructor=THREE.GridHelper;THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};
THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];var c=new THREE.SphereGeometry(b,4,2);c.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(var d=0;8>d;d++)c.faces[d].color=this.colors[4>d?0:1];d=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,d);this.add(this.lightSphere);
    this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.constructor=THREE.HemisphereLightHelper;THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();
THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.constructor=THREE.PointLightHelper;
THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};
THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry,c=0;c<this.bones.length;c++)this.bones[c].parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)));c=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.Line.call(this,b,c,THREE.LinePieces);this.root=a;this.matrix=a.matrixWorld;
    this.matrixAutoUpdate=!1;this.update()};THREE.SkeletonHelper.prototype=Object.create(THREE.Line.prototype);THREE.SkeletonHelper.prototype.constructor=THREE.SkeletonHelper;THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};
THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=(new THREE.Matrix4).getInverse(this.root.matrixWorld),c=new THREE.Matrix4,d=0,e=0;e<this.bones.length;e++){var f=this.bones[e];f.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,f.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,f.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0;a.computeBoundingSphere()};
THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.constructor=THREE.SpotLightHelper;THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};
THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();
THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:16711680;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexNormals.length;g<h;g++)c.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.constructor=THREE.VertexNormalsHelper;
THREE.VertexNormalsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var p=f[k],q=0,n=p.vertexNormals.length;q<n;q++){var t=p.vertexNormals[q];d[h].copy(e[p[a[q]]]).applyMatrix4(g);b.copy(t).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
    b.add(d[h]);h+=1;d[h].copy(b);h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:255;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexTangents.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.constructor=THREE.VertexTangentsHelper;
THREE.VertexTangentsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var p=f[k],q=0,n=p.vertexTangents.length;q<n;q++){var t=p.vertexTangents[q];d[h].copy(e[p[a[q]]]).applyMatrix4(g);b.copy(t).transformDirection(g).multiplyScalar(this.size);b.add(d[h]);h+=1;d[h].copy(b);
    h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry;if(a.geometry instanceof THREE.Geometry){for(var k=a.geometry.vertices,l=a.geometry.faces,p=0,q=new Uint32Array(6*l.length),n=0,t=l.length;n<t;n++)for(var r=l[n],s=0;3>s;s++){d[0]=r[g[s]];d[1]=r[g[(s+1)%3]];d.sort(f);var u=d.toString();void 0===e[u]&&(q[2*p]=d[0],q[2*p+1]=d[1],e[u]=!0,p++)}d=new Float32Array(6*p);n=0;for(t=p;n<t;n++)for(s=0;2>s;s++)p=
    k[q[2*n+s]],g=6*n+3*s,d[g+0]=p.x,d[g+1]=p.y,d[g+2]=p.z;h.addAttribute("position",new THREE.BufferAttribute(d,3))}else if(a.geometry instanceof THREE.BufferGeometry){if(void 0!==a.geometry.attributes.index){k=a.geometry.attributes.position.array;t=a.geometry.attributes.index.array;l=a.geometry.drawcalls;p=0;0===l.length&&(l=[{count:t.length,index:0,start:0}]);for(var q=new Uint32Array(2*t.length),r=0,v=l.length;r<v;++r)for(var s=l[r].start,u=l[r].count,g=l[r].index,n=s,x=s+u;n<x;n+=3)for(s=0;3>s;s++)d[0]=
    g+t[n+s],d[1]=g+t[n+(s+1)%3],d.sort(f),u=d.toString(),void 0===e[u]&&(q[2*p]=d[0],q[2*p+1]=d[1],e[u]=!0,p++);d=new Float32Array(6*p);n=0;for(t=p;n<t;n++)for(s=0;2>s;s++)g=6*n+3*s,p=3*q[2*n+s],d[g+0]=k[p],d[g+1]=k[p+1],d[g+2]=k[p+2]}else for(k=a.geometry.attributes.position.array,p=k.length/3,q=p/3,d=new Float32Array(6*p),n=0,t=q;n<t;n++)for(s=0;3>s;s++)g=18*n+6*s,q=9*n+3*s,d[g+0]=k[q],d[g+1]=k[q+1],d[g+2]=k[q+2],p=9*n+(s+1)%3*3,d[g+3]=k[p],d[g+4]=k[p+1],d[g+5]=k[p+2];h.addAttribute("position",new THREE.BufferAttribute(d,
    3))}THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.WireframeHelper.prototype.constructor=THREE.WireframeHelper;THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(a){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.ImmediateRenderObject.prototype.constructor=THREE.ImmediateRenderObject;
THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphBlendMesh.prototype.constructor=THREE.MorphBlendMesh;
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):THREE.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
    f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};
var aseMaterials = function(){
    var t = this;
    this.materials = {};
    this.get = function(material){
        var material;
        switch (material){
            case "box":
                material =  new THREE.LineDashedMaterial({
                    color: 0x00d2ff,
                    dashSize: 2,
                    gapSize: 1
                });
                break;
            case "object":
                material = new THREE.MeshPhongMaterial( {
                        "color": 16744448,
                        "ambient": 11556864,
                        "emissive": 10440704,
                        "specular": 8195855,
                        "shininess": 30,
                        "blending": 0,
                        "side": 2,
                        "shading": THREE.FlatShading
                    }
                );
                break;
        }
        return material;
    }
}
var aseMaterial = new aseMaterials();

// system.js - http://github.com/mrdoob/system.js
'use strict';var System={browser:function(){var a=navigator.userAgent;return/Arora/i.test(a)?"Arora":/Chrome/i.test(a)?"Chrome":/Epiphany/i.test(a)?"Epiphany":/Firefox/i.test(a)?"Firefox":/Mobile(\/.*)? Safari/i.test(a)?"Mobile Safari":/MSIE/i.test(a)?"Internet Explorer":/Midori/i.test(a)?"Midori":/Opera/.test(a)?"Opera":/Safari/i.test(a)?"Safari":!1}(),os:function(){var a=navigator.userAgent;return/Android/i.test(a)?"Android":/CrOS/i.test(a)?"Chrome OS":/iP[ao]d|iPhone/i.test(a)?"iOS":/Linux/i.test(a)?
    "Linux":/Mac OS/i.test(a)?"Mac OS":/windows/i.test(a)?"Windows":!1}(),support:{canvas:!!window.CanvasRenderingContext2D,localStorage:function(){try{return!!window.localStorage.getItem}catch(a){return!1}}(),file:!!window.File&&!!window.FileReader&&!!window.FileList&&!!window.Blob,fileSystem:!!window.requestFileSystem||!!window.webkitRequestFileSystem,getUserMedia:!!window.navigator.getUserMedia||!!window.navigator.webkitGetUserMedia||!!window.navigator.mozGetUserMedia||!!window.navigator.msGetUserMedia,
    requestAnimationFrame:!!window.mozRequestAnimationFrame||!!window.webkitRequestAnimationFrame||!!window.oRequestAnimationFrame||!!window.msRequestAnimationFrame,sessionStorage:function(){try{return!!window.sessionStorage.getItem}catch(a){return!1}}(),webgl:function(){try{return!!window.WebGLRenderingContext&&!!document.createElement("canvas").getContext("experimental-webgl")}catch(a){return!1}}(),worker:!!window.Worker}};
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 */

THREE.EditorControls = function ( object, domElement ) {

    domElement = ( domElement !== undefined ) ? domElement : document;

    // API

    this.enabled = true;
    this.center = new THREE.Vector3();

    // internals

    var scope = this;
    var vector = new THREE.Vector3();

    var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2 };
    var state = STATE.NONE;

    var center = this.center;
    var normalMatrix = new THREE.Matrix3();
    var pointer = new THREE.Vector2();
    var pointerOld = new THREE.Vector2();

    // events

    var changeEvent = { type: 'change' };

    this.focus = function ( target, frame ) {

        var scale = new THREE.Vector3();
        target.matrixWorld.decompose( center, new THREE.Quaternion(), scale );

        if ( frame && target.geometry ) {

            scale = ( scale.x + scale.y + scale.z ) / 3;
            center.add(target.geometry.boundingSphere.center.clone().multiplyScalar( scale ));
            var radius = target.geometry.boundingSphere.radius * ( scale );
            var pos = object.position.clone().sub( center ).normalize().multiplyScalar( radius * 2 );
            object.position.copy( center ).add( pos );

        }

        object.lookAt( center );

        scope.dispatchEvent( changeEvent );

    };

    this.pan = function ( delta ) {

        var distance = object.position.distanceTo( center );

        delta.multiplyScalar( distance * 0.001 );
        delta.applyMatrix3( normalMatrix.getNormalMatrix( object.matrix ) );

        object.position.add( delta );
        center.add( delta );

        scope.dispatchEvent( changeEvent );

    };

    this.zoom = function ( delta ) {

        var distance = object.position.distanceTo( center );

        delta.multiplyScalar( distance * 0.001 );

        if ( delta.length() > distance ) return;

        delta.applyMatrix3( normalMatrix.getNormalMatrix( object.matrix ) );

        object.position.add( delta );

        scope.dispatchEvent( changeEvent );

    };

    this.rotate = function ( delta ) {

        vector.copy( object.position ).sub( center );

        var theta = Math.atan2( vector.x, vector.z );
        var phi = Math.atan2( Math.sqrt( vector.x * vector.x + vector.z * vector.z ), vector.y );

        theta += delta.x;
        phi += delta.y;

        var EPS = 0.000001;

        phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

        var radius = vector.length();

        vector.x = radius * Math.sin( phi ) * Math.sin( theta );
        vector.y = radius * Math.cos( phi );
        vector.z = radius * Math.sin( phi ) * Math.cos( theta );

        object.position.copy( center ).add( vector );

        object.lookAt( center );

        scope.dispatchEvent( changeEvent );

    };

    // mouse

    function onMouseDown( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();

        if ( event.button === 0 ) {

            state = STATE.ROTATE;

        } else if ( event.button === 1 ) {

            state = STATE.ZOOM;

        } else if ( event.button === 2 ) {

            state = STATE.PAN;

        }

        pointerOld.set( event.clientX, event.clientY );

        domElement.addEventListener( 'mousemove', onMouseMove, false );
        domElement.addEventListener( 'mouseup', onMouseUp, false );
        domElement.addEventListener( 'mouseout', onMouseUp, false );
        domElement.addEventListener( 'dblclick', onMouseUp, false );

    }

    function onMouseMove( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();

        pointer.set( event.clientX, event.clientY );

        var movementX = pointer.x - pointerOld.x;
        var movementY = pointer.y - pointerOld.y;

        if ( state === STATE.ROTATE ) {

            scope.rotate( new THREE.Vector3( - movementX * 0.005, - movementY * 0.005, 0 ) );

        } else if ( state === STATE.ZOOM ) {

            scope.zoom( new THREE.Vector3( 0, 0, movementY ) );

        } else if ( state === STATE.PAN ) {

            scope.pan( new THREE.Vector3( - movementX, movementY, 0 ) );

        }

        pointerOld.set( event.clientX, event.clientY );

    }

    function onMouseUp( event ) {

        domElement.removeEventListener( 'mousemove', onMouseMove, false );
        domElement.removeEventListener( 'mouseup', onMouseUp, false );
        domElement.removeEventListener( 'mouseout', onMouseUp, false );
        domElement.removeEventListener( 'dblclick', onMouseUp, false );

        state = STATE.NONE;

    }

    function onMouseWheel( event ) {

        event.preventDefault();

        // if ( scope.enabled === false ) return;

        var delta = 0;

        if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

            delta = - event.wheelDelta;

        } else if ( event.detail ) { // Firefox

            delta = event.detail * 10;

        }

        scope.zoom( new THREE.Vector3( 0, 0, delta ) );

    }

    domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
    domElement.addEventListener( 'mousedown', onMouseDown, false );
    domElement.addEventListener( 'mousewheel', onMouseWheel, false );
    domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

    // touch

    var touch = new THREE.Vector3();

    var touches = [ new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3() ];
    var prevTouches = [ new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3() ];

    var prevDistance = null;

    function touchStart( event ) {

        if ( scope.enabled === false ) return;

        switch ( event.touches.length ) {

            case 1:
                touches[ 0 ].set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, 0 );
                touches[ 1 ].set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, 0 );
                break;

            case 2:
                touches[ 0 ].set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, 0 );
                touches[ 1 ].set( event.touches[ 1 ].pageX, event.touches[ 1 ].pageY, 0 );
                prevDistance = touches[ 0 ].distanceTo( touches[ 1 ] );
                break;

        }

        prevTouches[ 0 ].copy( touches[ 0 ] );
        prevTouches[ 1 ].copy( touches[ 1 ] );

    }


    function touchMove( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        var getClosest = function( touch, touches ) {

            var closest = touches[ 0 ];

            for ( var i in touches ) {
                if ( closest.distanceTo(touch) > touches[ i ].distanceTo(touch) ) closest = touches[ i ];
            }

            return closest;

        }

        switch ( event.touches.length ) {

            case 1:
                touches[ 0 ].set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, 0 );
                touches[ 1 ].set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, 0 );
                scope.rotate( touches[ 0 ].sub( getClosest( touches[ 0 ] ,prevTouches ) ).multiplyScalar( - 0.005 ) );
                break;

            case 2:
                touches[ 0 ].set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, 0 );
                touches[ 1 ].set( event.touches[ 1 ].pageX, event.touches[ 1 ].pageY, 0 );
                distance = touches[ 0 ].distanceTo( touches[ 1 ] );
                scope.zoom( new THREE.Vector3( 0, 0, prevDistance - distance ) );
                prevDistance = distance;


                var offset0 = touches[ 0 ].clone().sub( getClosest( touches[ 0 ] ,prevTouches ) );
                var offset1 = touches[ 1 ].clone().sub( getClosest( touches[ 1 ] ,prevTouches ) );
                offset0.x = -offset0.x;
                offset1.x = -offset1.x;

                scope.pan( offset0.add( offset1 ).multiplyScalar( 0.5 ) );

                break;

        }

        prevTouches[ 0 ].copy( touches[ 0 ] );
        prevTouches[ 1 ].copy( touches[ 1 ] );

    }

    domElement.addEventListener( 'touchstart', touchStart, false );
    domElement.addEventListener( 'touchmove', touchMove, false );

};

THREE.EditorControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.EditorControls.prototype.constructor = THREE.EditorControls;
/**
 * @author arodic / https://github.com/arodic
 */
/*jshint sub:true*/

(function () {

    function roundmy(number){

        var pir = 15 * (Math.PI / 180);
        return Math.floor((number + pir / 2) / pir) * pir;
        console.log()

    };

    'use strict';

    var GizmoMaterial = function ( parameters ) {

        THREE.MeshBasicMaterial.call( this );

        this.depthTest = false;
        this.depthWrite = false;
        this.side = THREE.FrontSide;
        this.transparent = true;

        this.setValues( parameters );

        this.oldColor = this.color.clone();
        this.oldOpacity = this.opacity;

        this.highlight = function( highlighted ) {

            if ( highlighted ) {

                this.color.setRGB( 0, 0, 0 );
                this.opacity = 1;

            } else {

                this.color.copy( this.oldColor );
                this.opacity = this.oldOpacity;

            }

        };

    };

    GizmoMaterial.prototype = Object.create( THREE.MeshBasicMaterial.prototype );
    GizmoMaterial.prototype.constructor = GizmoMaterial;

    var GizmoLineMaterial = function ( parameters ) {

        THREE.LineBasicMaterial.call( this );

        this.depthTest = false;
        this.depthWrite = false;
        this.transparent = true;
        this.linewidth = 1;

        this.setValues( parameters );

        this.oldColor = this.color.clone();
        this.oldOpacity = this.opacity;

        this.highlight = function( highlighted ) {

            if ( highlighted ) {

                this.color.setRGB( 0, 0, 0 ); // podsvetka
                this.opacity = 1;

            } else {

                this.color.copy( this.oldColor );
                this.opacity = this.oldOpacity;

            }

        };

    };

    GizmoLineMaterial.prototype = Object.create( THREE.LineBasicMaterial.prototype );
    GizmoLineMaterial.prototype.constructor = GizmoLineMaterial;

    var ColorX = 0xe60b49;
    var ColorY = 0x69de77;
    var ColorZ= 0x369bef;
    var ColorSelect = 0x000000;
    var ColorSelecthandle = 0x000000;




    THREE.TransformGizmo = function () {

        var scope = this;
        var showPickers = false; //debug
        var showActivePlane = false; //debug

        this.init = function () {

            THREE.Object3D.call( this );

            this.handles = new THREE.Object3D();
            this.pickers = new THREE.Object3D();
            this.planes = new THREE.Object3D();

            this.add(this.handles);
            this.add(this.pickers);
            this.add(this.planes);

            //// PLANES

            var planeGeometry = new THREE.PlaneGeometry( 50, 50, 2, 2 );
            var planeMaterial = new THREE.MeshBasicMaterial( { wireframe: true } );
            planeMaterial.side = THREE.DoubleSide;

            var planes = {
                "XY":   new THREE.Mesh( planeGeometry, planeMaterial ),
                "YZ":   new THREE.Mesh( planeGeometry, planeMaterial ),
                "XZ":   new THREE.Mesh( planeGeometry, planeMaterial ),
                "XYZE": new THREE.Mesh( planeGeometry, planeMaterial )
            };

            this.activePlane = planes["XYZE"];

            planes["YZ"].rotation.set( 0, Math.PI/2, 0 );
            planes["XZ"].rotation.set( -Math.PI/2, 0, 0 );

            for (var i in planes) {
                planes[i].name = i;
                this.planes.add(planes[i]);
                this.planes[i] = planes[i];
                planes[i].visible = false;
            }

            //// HANDLES AND PICKERS

            var setupGizmos = function( gizmoMap, parent ) {

                for ( var name in gizmoMap ) {

                    for ( i = gizmoMap[name].length; i--;) {

                        var object = gizmoMap[name][i][0];
                        var position = gizmoMap[name][i][1];
                        var rotation = gizmoMap[name][i][2];

                        object.name = name;

                        if ( position ) object.position.set( position[0], position[1], position[2] );
                        if ( rotation ) object.rotation.set( rotation[0], rotation[1], rotation[2] );

                        parent.add( object );

                    }

                }

            };

            setupGizmos(this.handleGizmos, this.handles);
            setupGizmos(this.pickerGizmos, this.pickers);

            // reset Transformations

            this.traverse(function ( child ) {
                if (child instanceof THREE.Mesh) {
                    child.updateMatrix();

                    var tempGeometry = new THREE.Geometry();
                    tempGeometry.merge( child.geometry, child.matrix );

                    child.geometry = tempGeometry;
                    child.position.set( 0, 0, 0 );
                    child.rotation.set( 0, 0, 0 );
                    child.scale.set( 1, 1, 1 );
                }
            });

        };

        this.hide = function () {
            this.traverse(function( child ) {
                child.visible = false;
            });
        };

        this.show = function () {
            this.traverse(function( child ) {
                child.visible = true;
                if (child.parent == scope.pickers ) child.visible = showPickers;
                if (child.parent == scope.planes ) child.visible = false;
            });
            this.activePlane.visible = showActivePlane;
        };

        this.highlight = function ( axis ) {
            this.traverse(function( child ) {
                if ( child.material && child.material.highlight ){
                    if ( child.name == axis ) {
                        child.material.highlight( true );
                    } else {
                        child.material.highlight( false );
                    }
                }
            });
        };

    };

    THREE.TransformGizmo.prototype = Object.create( THREE.Object3D.prototype );
    THREE.TransformGizmo.prototype.constructor = THREE.TransformGizmo;

    THREE.TransformGizmo.prototype.update = function ( rotation, eye ) {

        var vec1 = new THREE.Vector3( 0, 0, 0 );
        var vec2 = new THREE.Vector3( 0, 1, 0 );
        var lookAtMatrix = new THREE.Matrix4();

        this.traverse(function(child) {
            if ( child.name.search("E") != -1 ) {
                child.quaternion.setFromRotationMatrix( lookAtMatrix.lookAt( eye, vec1, vec2 ) );
            } else if ( child.name.search("X") != -1 || child.name.search("Y") != -1 || child.name.search("Z") != -1 ) {
                child.quaternion.setFromEuler( rotation );
            }
        });

    };

    THREE.TransformGizmoTranslate = function () {

        THREE.TransformGizmo.call( this );

        var arrowGeometry = new THREE.Geometry();
        var mesh = new THREE.Mesh( new THREE.CylinderGeometry( 0, 0.05, 0.2, 12, 1, false ) );
        mesh.position.y = 0.5;
        mesh.updateMatrix();

        arrowGeometry.merge( mesh.geometry, mesh.matrix );

        var lineXGeometry = new THREE.Geometry();
        lineXGeometry.vertices.push( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ) );

        var lineYGeometry = new THREE.Geometry();
        lineYGeometry.vertices.push( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );

        var lineZGeometry = new THREE.Geometry();
        lineZGeometry.vertices.push( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 1 ) );

        this.handleGizmos = {
            X: [
                [ new THREE.Mesh( arrowGeometry, new GizmoMaterial( { color: ColorX } ) ), [ 0.5, 0, 0 ], [ 0, 0, -Math.PI/2 ] ],
                [ new THREE.Line( lineXGeometry, new GizmoLineMaterial( { color: ColorX } ) ) ]
            ],
            Y: [
                [ new THREE.Mesh( arrowGeometry, new GizmoMaterial( { color: ColorY } ) ), [ 0, 0.5, 0 ] ],
                [	new THREE.Line( lineYGeometry, new GizmoLineMaterial( { color: ColorY } ) ) ]
            ],
            Z: [
                [ new THREE.Mesh( arrowGeometry, new GizmoMaterial( { color: ColorZ } ) ), [ 0, 0, 0.5 ], [ Math.PI/2, 0, 0 ] ],
                [ new THREE.Line( lineZGeometry, new GizmoLineMaterial( { color: ColorZ } ) ) ]
            ],
            XYZ: [
                //[ new THREE.Mesh( new THREE.OctahedronGeometry( 0.1, 0 ), new GizmoMaterial( { color: ColorSelect, opacity: 0.25 } ) ), [ 0, 0, 0 ], [ 0, 0, 0 ] ]
            ],
            XY: [
                [ new THREE.Mesh( new THREE.PlaneGeometry( 0.29, 0.29 ), new GizmoMaterial( { color: ColorSelect, opacity: 0.25 } ) ), [ 0.15, 0.15, 0 ] ]
            ],
            YZ: [
                [ new THREE.Mesh( new THREE.PlaneGeometry( 0.29, 0.29 ), new GizmoMaterial( { color: ColorSelect, opacity: 0.25 } ) ), [ 0, 0.15, 0.15 ], [ 0, Math.PI/2, 0 ] ]
            ],
            XZ: [
                [ new THREE.Mesh( new THREE.PlaneGeometry( 0.29, 0.29 ), new GizmoMaterial( { color: ColorSelect, opacity: 0.25 } ) ), [ 0.15, 0, 0.15 ], [ -Math.PI/2, 0, 0 ] ]
            ]
        };

        this.pickerGizmos = {
            X: [
                [ new THREE.Mesh( new THREE.CylinderGeometry( 0.2, 0, 1, 4, 1, false ), new GizmoMaterial( { color: ColorX, opacity: 0.25 } ) ), [ 0.6, 0, 0 ], [ 0, 0, -Math.PI/2 ] ]
            ],
            Y: [
                [ new THREE.Mesh( new THREE.CylinderGeometry( 0.2, 0, 1, 4, 1, false ), new GizmoMaterial( { color: ColorY, opacity: 0.25 } ) ), [ 0, 0.6, 0 ] ]
            ],
            Z: [
                [ new THREE.Mesh( new THREE.CylinderGeometry( 0.2, 0, 1, 4, 1, false ), new GizmoMaterial( { color: ColorZ, opacity: 0.25 } ) ), [ 0, 0, 0.6 ], [ Math.PI/2, 0, 0 ] ]
            ],
            XYZ: [
                //[ new THREE.Mesh( new THREE.OctahedronGeometry( 0.2, 0 ), new GizmoMaterial( { color: ColorSelect, opacity: 0.25 } ) ) ]
            ],
            XY: [
                [ new THREE.Mesh( new THREE.PlaneGeometry( 0.4, 0.4 ), new GizmoMaterial( { color: ColorSelect, opacity: 0.25 } ) ), [ 0.2, 0.2, 0 ] ]
            ],
            YZ: [
                [ new THREE.Mesh( new THREE.PlaneGeometry( 0.4, 0.4 ), new GizmoMaterial( { color: ColorSelect, opacity: 0.25 } ) ), [ 0, 0.2, 0.2 ], [ 0, Math.PI/2, 0 ] ]
            ],
            XZ: [
                [ new THREE.Mesh( new THREE.PlaneGeometry( 0.4, 0.4 ), new GizmoMaterial( { color: ColorSelect, opacity: 0.25 } ) ), [ 0.2, 0, 0.2 ], [ -Math.PI/2, 0, 0 ] ]
            ]
        };

        this.setActivePlane = function ( axis, eye ) {

            var tempMatrix = new THREE.Matrix4();
            eye.applyMatrix4( tempMatrix.getInverse( tempMatrix.extractRotation( this.planes[ "XY" ].matrixWorld ) ) );

            if ( axis == "X" ) {
                this.activePlane = this.planes[ "XY" ];
                if ( Math.abs(eye.y) > Math.abs(eye.z) ) this.activePlane = this.planes[ "XZ" ];
            }

            if ( axis == "Y" ){
                this.activePlane = this.planes[ "XY" ];
                if ( Math.abs(eye.x) > Math.abs(eye.z) ) this.activePlane = this.planes[ "YZ" ];
            }

            if ( axis == "Z" ){
                this.activePlane = this.planes[ "XZ" ];
                if ( Math.abs(eye.x) > Math.abs(eye.y) ) this.activePlane = this.planes[ "YZ" ];
            }

            if ( axis == "XYZ" ) this.activePlane = this.planes[ "XYZE" ];

            if ( axis == "XY" ) this.activePlane = this.planes[ "XY" ];

            if ( axis == "YZ" ) this.activePlane = this.planes[ "YZ" ];

            if ( axis == "XZ" ) this.activePlane = this.planes[ "XZ" ];

            this.hide();
            this.show();

        };

        this.init();

    };

    THREE.TransformGizmoTranslate.prototype = Object.create( THREE.TransformGizmo.prototype );
    THREE.TransformGizmoTranslate.prototype.constructor = THREE.TransformGizmoTranslate;

    THREE.TransformGizmoRotate = function () {

        THREE.TransformGizmo.call( this );



        var CircleGeometry = function ( radius, facing, arc ) {

            var geometry = new THREE.Geometry();
            arc = arc ? arc : 1;
            for ( var i = 0; i <= 64 * arc; ++i ) {
                if ( facing == 'x' ) geometry.vertices.push( new THREE.Vector3( 0, Math.cos( i / 32 * Math.PI ), Math.sin( i / 32 * Math.PI ) ).multiplyScalar(radius) );
                if ( facing == 'y' ) geometry.vertices.push( new THREE.Vector3( Math.cos( i / 32 * Math.PI ), 0, Math.sin( i / 32 * Math.PI ) ).multiplyScalar(radius) );
                if ( facing == 'z' ) geometry.vertices.push( new THREE.Vector3( Math.sin( i / 32 * Math.PI ), Math.cos( i / 32 * Math.PI ), 0 ).multiplyScalar(radius) );
            }

            return geometry;
        };
        var gizomoSize = 1.2

        this.handleGizmos = {
            X: [
                [ new THREE.Line( new CircleGeometry(gizomoSize,'x',0.5), new GizmoLineMaterial( { color: ColorX } ) ) ]
            ],
            Y: [
                [ new THREE.Line( new CircleGeometry(gizomoSize,'y',0.5), new GizmoLineMaterial( { color: ColorY } ) ) ]
            ],
            Z: [
                [ new THREE.Line( new CircleGeometry(gizomoSize,'z',0.5), new GizmoLineMaterial( { color: ColorZ } ) ) ]

            ],
            E: [
                //[ new THREE.Line( new CircleGeometry(1.25,'z',1), new GizmoLineMaterial( { color: 0xcccc00 } ) ) ]
            ],
            XYZE: [
                [ new THREE.Line( new CircleGeometry(gizomoSize,'z',1), new GizmoLineMaterial( { color: 0xFFFFFF,opacity: 0.5 ,transparent: true } ) ) ]
            ]
        };

        this.pickerGizmos = {
            X: [
                [ new THREE.Mesh( new THREE.TorusGeometry( gizomoSize, 0.5, 4, 12, Math.PI ), new GizmoMaterial( { color: ColorX, opacity: 0.25 } ) ), [ 0, 0, 0 ], [ 0, -Math.PI/2, -Math.PI/2 ] ]
            ],
            Y: [
                [ new THREE.Mesh( new THREE.TorusGeometry( gizomoSize, 0.5, 4, 12, Math.PI ), new GizmoMaterial( { color: ColorY, opacity: 0.25 } ) ), [ 0, 0, 0 ], [ Math.PI/2, 0, 0 ] ]
            ],
            Z: [
                [ new THREE.Mesh( new THREE.TorusGeometry( gizomoSize, 0.5, 4, 12, Math.PI ), new GizmoMaterial( { color: ColorZ, opacity: 0.25 } ) ), [ 0, 0, 0 ], [ 0, 0, -Math.PI/2 ] ]
            ],
            E: [
                //[ new THREE.Mesh( new THREE.TorusGeometry( 1.25, 0.12, 2, 24 ), new GizmoMaterial( { color: ColorSelect, opacity: 0.25 } ) ) ]
            ],
            XYZE: [
                //[ new THREE.Mesh( new THREE.Geometry() ) ]// TODO
            ]
        };

        this.setActivePlane = function ( axis ) {

            if ( axis == "E" ) this.activePlane = this.planes[ "XYZE" ];

            if ( axis == "X" ) this.activePlane = this.planes[ "YZ" ];

            if ( axis == "Y" ) this.activePlane = this.planes[ "XZ" ];

            if ( axis == "Z" ) this.activePlane = this.planes[ "XY" ];

            this.hide();
            this.show();

        };

        this.update = function ( rotation, eye2 ) {

            THREE.TransformGizmo.prototype.update.apply( this, arguments );

            var group = {
                handles: this["handles"],
                pickers: this["pickers"],
            };

            var tempMatrix = new THREE.Matrix4();
            var worldRotation = new THREE.Euler( 0, 0, 1 );
            var tempQuaternion = new THREE.Quaternion();
            var unitX = new THREE.Vector3( 1, 0, 0 );
            var unitY = new THREE.Vector3( 0, 1, 0 );
            var unitZ = new THREE.Vector3( 0, 0, 1 );
            var quaternionX = new THREE.Quaternion();
            var quaternionY = new THREE.Quaternion();
            var quaternionZ = new THREE.Quaternion();
            var eye = eye2.clone();

            worldRotation.copy( this.planes["XY"].rotation );
            tempQuaternion.setFromEuler( worldRotation );

            tempMatrix.makeRotationFromQuaternion( tempQuaternion ).getInverse( tempMatrix );
            eye.applyMatrix4( tempMatrix );

            this.traverse(function(child) {

                tempQuaternion.setFromEuler( worldRotation );

                if ( child.name == "X" ) {
                    quaternionX.setFromAxisAngle( unitX, Math.atan2( -eye.y, eye.z ) );
                    tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionX );
                    child.quaternion.copy( tempQuaternion );
                }

                if ( child.name == "Y" ) {
                    quaternionY.setFromAxisAngle( unitY, Math.atan2( eye.x, eye.z ) );
                    tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionY );
                    child.quaternion.copy( tempQuaternion );
                }

                if ( child.name == "Z" ) {
                    quaternionZ.setFromAxisAngle( unitZ, Math.atan2( eye.y, eye.x ) );
                    tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionZ );
                    child.quaternion.copy( tempQuaternion );

                }


            });

        };

        this.init();

    };

    THREE.TransformGizmoRotate.prototype = Object.create( THREE.TransformGizmo.prototype );
    THREE.TransformGizmoRotate.prototype.constructor = THREE.TransformGizmoRotate;

    THREE.TransformGizmoScale = function () {

        THREE.TransformGizmo.call( this );

        var arrowGeometry = new THREE.Geometry();
        var mesh = new THREE.Mesh( new THREE.BoxGeometry( 0.125, 0.125, 0.125 ) );
        mesh.position.y = 0.5;
        mesh.updateMatrix();

        arrowGeometry.merge( mesh.geometry, mesh.matrix );

        var lineXGeometry = new THREE.Geometry();
        lineXGeometry.vertices.push( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ) );

        var lineYGeometry = new THREE.Geometry();
        lineYGeometry.vertices.push( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );

        var lineZGeometry = new THREE.Geometry();
        lineZGeometry.vertices.push( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 1 ) );

        this.handleGizmos = {
            X: [
                [ new THREE.Mesh( arrowGeometry, new GizmoMaterial( { color: ColorX } ) ), [ 0.5, 0, 0 ], [ 0, 0, -Math.PI/2 ] ],
                [ new THREE.Line( lineXGeometry, new GizmoLineMaterial( { color: ColorX } ) ) ]
            ],
            Y: [
                [ new THREE.Mesh( arrowGeometry, new GizmoMaterial( { color: ColorY } ) ), [ 0, 0.5, 0 ] ],
                [ new THREE.Line( lineYGeometry, new GizmoLineMaterial( { color: ColorY } ) ) ]
            ],
            Z: [
                [ new THREE.Mesh( arrowGeometry, new GizmoMaterial( { color: ColorZ } ) ), [ 0, 0, 0.5 ], [ Math.PI/2, 0, 0 ] ],
                [ new THREE.Line( lineZGeometry, new GizmoLineMaterial( { color: ColorZ } ) ) ]
            ],
            XYZ: [
                [ new THREE.Mesh( new THREE.BoxGeometry( 0.125, 0.125, 0.125 ), new GizmoMaterial( { color: 0xffffff, opacity: 0.25 } ) ) ]
            ]
        };

        this.pickerGizmos = {
            X: [
                [ new THREE.Mesh( new THREE.CylinderGeometry( 0.2, 0, 1, 4, 1, false ), new GizmoMaterial( { color: ColorX, opacity: 0.25 } ) ), [ 0.6, 0, 0 ], [ 0, 0, -Math.PI/2 ] ]
            ],
            Y: [
                [ new THREE.Mesh( new THREE.CylinderGeometry( 0.2, 0, 1, 4, 1, false ), new GizmoMaterial( { color: ColorY, opacity: 0.25 } ) ), [ 0, 0.6, 0 ] ]
            ],
            Z: [
                [ new THREE.Mesh( new THREE.CylinderGeometry( 0.2, 0, 1, 4, 1, false ), new GizmoMaterial( { color: ColorZ, opacity: 0.25 } ) ), [ 0, 0, 0.6 ], [ Math.PI/2, 0, 0 ] ]
            ],
            XYZ: [
                [ new THREE.Mesh( new THREE.BoxGeometry( 0.4, 0.4, 0.4 ), new GizmoMaterial( { color: 0xffffff, opacity: 0.25 } ) ) ]
            ]
        };

        this.setActivePlane = function ( axis, eye ) {

            var tempMatrix = new THREE.Matrix4();
            eye.applyMatrix4( tempMatrix.getInverse( tempMatrix.extractRotation( this.planes[ "XY" ].matrixWorld ) ) );

            if ( axis == "X" ) {
                this.activePlane = this.planes[ "XY" ];
                if ( Math.abs(eye.y) > Math.abs(eye.z) ) this.activePlane = this.planes[ "XZ" ];
            }

            if ( axis == "Y" ){
                this.activePlane = this.planes[ "XY" ];
                if ( Math.abs(eye.x) > Math.abs(eye.z) ) this.activePlane = this.planes[ "YZ" ];
            }

            if ( axis == "Z" ){
                this.activePlane = this.planes[ "XZ" ];
                if ( Math.abs(eye.x) > Math.abs(eye.y) ) this.activePlane = this.planes[ "YZ" ];
            }

            if ( axis == "XYZ" ) this.activePlane = this.planes[ "XYZE" ];

            this.hide();
            this.show();

        };

        this.init();

    };

    THREE.TransformGizmoScale.prototype = Object.create( THREE.TransformGizmo.prototype );
    THREE.TransformGizmoScale.prototype.constructor = THREE.TransformGizmoScale;

    THREE.TransformControls = function ( camera, domElement ) {

        // TODO: Make non-uniform scale and rotate play nice in hierarchies
        // TODO: ADD RXYZ contol

        THREE.Object3D.call( this );

        domElement = ( domElement !== undefined ) ? domElement : document;

        this.gizmo = {};
        this.gizmo["translate"] = new THREE.TransformGizmoTranslate();
        this.gizmo["rotate"] = new THREE.TransformGizmoRotate();
        this.gizmo["scale"] = new THREE.TransformGizmoScale();

        this.add(this.gizmo["translate"]);
        this.add(this.gizmo["rotate"]);
        this.add(this.gizmo["scale"]);

        this.gizmo["translate"].hide();
        this.gizmo["rotate"].hide();
        this.gizmo["scale"].hide();

        this.object = undefined;
        this.snap = null;
        this.space = "world";
        this.size = 1;
        this.axis = null;

        var scope = this;

        var _dragging = false;
        var _mode = "translate";
        var _plane = "XY";

        var changeEvent = { type: "change" };
        var mouseDownEvent = { type: "mouseDown" };
        var mouseUpEvent = { type: "mouseUp", mode: _mode };
        var objectChangeEvent = { type: "objectChange" };

        var ray = new THREE.Raycaster();
        var pointerVector = new THREE.Vector3();

        var point = new THREE.Vector3();
        var offset = new THREE.Vector3();

        var rotation = new THREE.Vector3();
        var offsetRotation = new THREE.Vector3();
        var scale = 1;

        var lookAtMatrix = new THREE.Matrix4();
        var eye = new THREE.Vector3();

        var tempMatrix = new THREE.Matrix4();
        var tempVector = new THREE.Vector3();
        var tempQuaternion = new THREE.Quaternion();
        var unitX = new THREE.Vector3( 1, 0, 0 );
        var unitY = new THREE.Vector3( 0, 1, 0 );
        var unitZ = new THREE.Vector3( 0, 0, 1 );

        var quaternionXYZ = new THREE.Quaternion();
        var quaternionX = new THREE.Quaternion();
        var quaternionY = new THREE.Quaternion();
        var quaternionZ = new THREE.Quaternion();
        var quaternionE = new THREE.Quaternion();

        var oldPosition = new THREE.Vector3();
        var oldScale = new THREE.Vector3();
        var oldRotationMatrix = new THREE.Matrix4();

        var parentRotationMatrix  = new THREE.Matrix4();
        var parentScale = new THREE.Vector3();

        var worldPosition = new THREE.Vector3();
        var worldRotation = new THREE.Euler();
        var worldRotationMatrix  = new THREE.Matrix4();
        var camPosition = new THREE.Vector3();
        var camRotation = new THREE.Euler();

        domElement.addEventListener( "mousedown", onPointerDown, false );
        domElement.addEventListener( "touchstart", onPointerDown, false );

        domElement.addEventListener( "mousemove", onPointerHover, false );
        domElement.addEventListener( "touchmove", onPointerHover, false );

        domElement.addEventListener( "mousemove", onPointerMove, false );
        domElement.addEventListener( "touchmove", onPointerMove, false );

        domElement.addEventListener( "mouseup", onPointerUp, false );
        domElement.addEventListener( "mouseout", onPointerUp, false );
        domElement.addEventListener( "touchend", onPointerUp, false );
        domElement.addEventListener( "touchcancel", onPointerUp, false );
        domElement.addEventListener( "touchleave", onPointerUp, false );

        this.attach = function ( object ) {

            scope.object = object;

            this.gizmo["translate"].hide();
            this.gizmo["rotate"].hide();
            this.gizmo["scale"].hide();
            this.gizmo[_mode].show();

            scope.update();

        };

        this.detach = function ( object ) {

            scope.object = undefined;
            this.axis = null;

            this.gizmo["translate"].hide();
            this.gizmo["rotate"].hide();
            this.gizmo["scale"].hide();

        };

        this.setMode = function ( mode ) {

            _mode = mode ? mode : _mode;

            if ( _mode == "scale" ) scope.space = "local";

            this.gizmo["translate"].hide();
            this.gizmo["rotate"].hide();
            this.gizmo["scale"].hide();
            this.gizmo[_mode].show();

            this.update();
            scope.dispatchEvent( changeEvent );

        };

        this.setSnap = function ( snap ) {

            scope.snap = snap;

        };

        this.setSize = function ( size ) {

            scope.size = size;
            this.update();
            scope.dispatchEvent( changeEvent );

        };

        this.setSpace = function ( space ) {

            scope.space = space;
            this.update();
            scope.dispatchEvent( changeEvent );

        };

        this.update = function () {

            if ( scope.object === undefined ) return;

            scope.object.updateMatrixWorld();
            worldPosition.setFromMatrixPosition( scope.object.matrixWorld );
            worldRotation.setFromRotationMatrix( tempMatrix.extractRotation( scope.object.matrixWorld ) );

            camera.updateMatrixWorld();
            camPosition.setFromMatrixPosition( camera.matrixWorld );
            camRotation.setFromRotationMatrix( tempMatrix.extractRotation( camera.matrixWorld ) );

            scale = worldPosition.distanceTo( camPosition ) / 6 * scope.size;
            this.position.copy( worldPosition );
            this.scale.set( scale, scale, scale );

            eye.copy( camPosition ).sub( worldPosition ).normalize();

            if ( scope.space == "local" )
                this.gizmo[_mode].update( worldRotation, eye );

            else if ( scope.space == "world" )
                this.gizmo[_mode].update( new THREE.Euler(), eye );

            this.gizmo[_mode].highlight( scope.axis );

        };

        function onPointerHover( event ) {

            if ( scope.object === undefined || _dragging === true ) return;

            event.preventDefault();

            var pointer = event.changedTouches ? event.changedTouches[ 0 ] : event;

            var intersect = intersectObjects( pointer, scope.gizmo[_mode].pickers.children );

            var axis = null;

            if ( intersect ) {

                axis = intersect.object.name;

            }

            if ( scope.axis !== axis ) {

                scope.axis = axis;
                scope.update();
                scope.dispatchEvent( changeEvent );

            }

        }

        function onPointerDown( event ) {

            if ( scope.object === undefined || _dragging === true ) return;

            event.preventDefault();
            event.stopPropagation();

            var pointer = event.changedTouches ? event.changedTouches[ 0 ] : event;

            if ( pointer.button === 0 || pointer.button === undefined ) {

                var intersect = intersectObjects( pointer, scope.gizmo[_mode].pickers.children );

                if ( intersect ) {

                    scope.dispatchEvent( mouseDownEvent );

                    scope.axis = intersect.object.name;

                    scope.update();

                    eye.copy( camPosition ).sub( worldPosition ).normalize();

                    scope.gizmo[_mode].setActivePlane( scope.axis, eye );

                    var planeIntersect = intersectObjects( pointer, [scope.gizmo[_mode].activePlane] );

                    oldPosition.copy( scope.object.position );
                    oldScale.copy( scope.object.scale );

                    oldRotationMatrix.extractRotation( scope.object.matrix );
                    worldRotationMatrix.extractRotation( scope.object.matrixWorld );

                    parentRotationMatrix.extractRotation( scope.object.parent.matrixWorld );
                    parentScale.setFromMatrixScale( tempMatrix.getInverse( scope.object.parent.matrixWorld ) );

                    offset.copy( planeIntersect.point );

                }

            }

            _dragging = true;

        }

        function onPointerMove( event ) {

            if ( scope.object === undefined || scope.axis === null || _dragging === false ) return;

            event.preventDefault();
            event.stopPropagation();

            var pointer = event.changedTouches? event.changedTouches[0] : event;

            var planeIntersect = intersectObjects( pointer, [scope.gizmo[_mode].activePlane] );

            point.copy( planeIntersect.point );

            if ( _mode == "translate" ) {

                point.sub( offset );
                point.multiply(parentScale);

                if ( scope.space == "local" ) {

                    point.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

                    if ( scope.axis.search("X") == -1 ) point.x = 0;
                    if ( scope.axis.search("Y") == -1 ) point.y = 0;
                    if ( scope.axis.search("Z") == -1 ) point.z = 0;

                    point.applyMatrix4( oldRotationMatrix );

                    scope.object.position.copy( oldPosition );
                    scope.object.position.add( point );

                }

                if ( scope.space == "world" || scope.axis.search("XYZ") != -1 ) {
                    if ( scope.axis.search("X") == -1 ) point.x = 0;
                    if ( scope.axis.search("Y") == -1 ) point.y = 0;
                    if ( scope.axis.search("Z") == -1 ) point.z = 0;

                    point.applyMatrix4( tempMatrix.getInverse( parentRotationMatrix ) );

                    scope.object.position.copy( oldPosition );
                    scope.object.position.add( point );

                }

                if ( scope.snap !== null ) {

                    if ( scope.axis.search("X") != -1 ) scope.object.position.x = Math.round( scope.object.position.x / scope.snap ) * scope.snap;
                    if ( scope.axis.search("Y") != -1 ) scope.object.position.y = Math.round( scope.object.position.y / scope.snap ) * scope.snap;
                    if ( scope.axis.search("Z") != -1 ) scope.object.position.z = Math.round( scope.object.position.z / scope.snap ) * scope.snap;

                }

            } else if ( _mode == "scale" ) {

                point.sub( offset );
                point.multiply(parentScale);

                if ( scope.space == "local" ) {

                    if ( scope.axis == "XYZ") {

                        scale = 1 + ( ( point.y ) / 50 );

                        scope.object.scale.x = oldScale.x * scale;
                        scope.object.scale.y = oldScale.y * scale;
                        scope.object.scale.z = oldScale.z * scale;

                    } else {

                        point.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

                        if ( scope.axis == "X" ) scope.object.scale.x = oldScale.x * ( 1 + point.x / 50 );
                        if ( scope.axis == "Y" ) scope.object.scale.y = oldScale.y * ( 1 + point.y / 50 );
                        if ( scope.axis == "Z" ) scope.object.scale.z = oldScale.z * ( 1 + point.z / 50 );

                    }

                }

            } else if ( _mode == "rotate" ) {

                point.sub( worldPosition );
                point.multiply(parentScale);
                tempVector.copy(offset).sub( worldPosition );
                tempVector.multiply(parentScale);

                if ( scope.axis == "E" ) {

                    point.applyMatrix4( tempMatrix.getInverse( lookAtMatrix ) );
                    tempVector.applyMatrix4( tempMatrix.getInverse( lookAtMatrix ) );

                    rotation.set( Math.atan2( point.z, point.y ), Math.atan2( point.x, point.z ), Math.atan2( point.y, point.x ) );
                    offsetRotation.set( Math.atan2( tempVector.z, tempVector.y ), Math.atan2( tempVector.x, tempVector.z ), Math.atan2( tempVector.y, tempVector.x ) );

                    tempQuaternion.setFromRotationMatrix( tempMatrix.getInverse( parentRotationMatrix ) );

                    quaternionE.setFromAxisAngle( eye, rotation.z - offsetRotation.z );
                    quaternionXYZ.setFromRotationMatrix( worldRotationMatrix );

                    tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionE );
                    tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionXYZ );

                    scope.object.quaternion.copy( tempQuaternion );

                } else if ( scope.axis == "XYZE" ) {

                    quaternionE.setFromEuler( point.clone().cross(tempVector).normalize() ); // rotation axis

                    tempQuaternion.setFromRotationMatrix( tempMatrix.getInverse( parentRotationMatrix ) );
                    quaternionX.setFromAxisAngle( quaternionE, - point.clone().angleTo(tempVector) );
                    quaternionXYZ.setFromRotationMatrix( worldRotationMatrix );

                    tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionX );
                    tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionXYZ );

                    scope.object.quaternion.copy( tempQuaternion );

                } else if ( scope.space == "local" ) {

                    point.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

                    tempVector.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

                    rotation.set( roundmy(Math.atan2( point.z, point.y )), roundmy(Math.atan2( point.x, point.z )), roundmy(Math.atan2( point.y, point.x )) );
                    offsetRotation.set( roundmy(Math.atan2( tempVector.z, tempVector.y )), roundmy(Math.atan2( tempVector.x, tempVector.z )), roundmy(Math.atan2( tempVector.y, tempVector.x )) );

                    quaternionXYZ.setFromRotationMatrix( oldRotationMatrix );
                    quaternionX.setFromAxisAngle( unitX, rotation.x - offsetRotation.x );
                    quaternionY.setFromAxisAngle( unitY, rotation.y - offsetRotation.y );
                    quaternionZ.setFromAxisAngle( unitZ, rotation.z - offsetRotation.z );

                    if ( scope.axis == "X" ) quaternionXYZ.multiplyQuaternions( quaternionXYZ, quaternionX );
                    if ( scope.axis == "Y" ) quaternionXYZ.multiplyQuaternions( quaternionXYZ, quaternionY );
                    if ( scope.axis == "Z" ) quaternionXYZ.multiplyQuaternions( quaternionXYZ, quaternionZ );

                    scope.object.quaternion.copy( quaternionXYZ );


                } else if ( scope.space == "world" ) {

                    rotation.set( roundmy(Math.atan2( point.z, point.y )), roundmy(Math.atan2( point.x, point.z )), roundmy(Math.atan2( point.y, point.x )) );
                    offsetRotation.set( roundmy(Math.atan2( tempVector.z, tempVector.y )), roundmy(Math.atan2( tempVector.x, tempVector.z )), roundmy(Math.atan2( tempVector.y, tempVector.x ) ));

                    tempQuaternion.setFromRotationMatrix( tempMatrix.getInverse( parentRotationMatrix ) );

                    quaternionX.setFromAxisAngle( unitX, rotation.x - offsetRotation.x );
                    quaternionY.setFromAxisAngle( unitY, rotation.y - offsetRotation.y );
                    quaternionZ.setFromAxisAngle( unitZ, rotation.z - offsetRotation.z );
                    quaternionXYZ.setFromRotationMatrix( worldRotationMatrix );

                    if ( scope.axis == "X" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionX );
                    if ( scope.axis == "Y" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionY );
                    if ( scope.axis == "Z" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionZ );

                    tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionXYZ );

                    scope.object.quaternion.copy( tempQuaternion );

                }


            }

            scope.update();
            scope.dispatchEvent( changeEvent );
            scope.dispatchEvent( objectChangeEvent );

        }



        function onPointerUp( event ) {

            if ( _dragging && ( scope.axis !== null ) ) {
                mouseUpEvent.mode = _mode;
                scope.dispatchEvent( mouseUpEvent )
            }
            _dragging = false;
            onPointerHover( event );

        }

        function intersectObjects( pointer, objects ) {

            var rect = domElement.getBoundingClientRect();
            var x = ( pointer.clientX - rect.left ) / rect.width;
            var y = ( pointer.clientY - rect.top ) / rect.height;

            pointerVector.set( ( x * 2 ) - 1, - ( y * 2 ) + 1, 0.5 );
            pointerVector.unproject( camera );

            ray.set( camPosition, pointerVector.sub( camPosition ).normalize() );

            var intersections = ray.intersectObjects( objects, true );
            return intersections[0] ? intersections[0] : false;

        }

    };

    THREE.TransformControls.prototype = Object.create( THREE.Object3D.prototype );
    THREE.TransformControls.prototype.constructor = THREE.TransformControls;

}());
/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.BabylonLoader = function ( manager ) {

    this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.BabylonLoader.prototype = {

    constructor: THREE.ObjectLoader,

    load: function ( url, onLoad, onProgress, onError ) {

        var scope = this;

        var loader = new THREE.XHRLoader( scope.manager );
        loader.setCrossOrigin( this.crossOrigin );
        loader.load( url, function ( text ) {

            onLoad( scope.parse( JSON.parse( text ) ) );

        }, onProgress, onError );

    },

    setCrossOrigin: function ( value ) {

        this.crossOrigin = value;

    },

    parse: function ( json ) {

        var materials = this.parseMaterials( json );
        var scene = this.parseObjects( json, materials );

        return scene;

    },

    parseMaterials: function ( json ) {

        var materials = {};

        for ( var i = 0, l = json.materials.length; i < l; i ++ ) {

            var data = json.materials[ i ];

            var material = new THREE.MeshPhongMaterial();
            material.name = data.name;
            material.ambient.fromArray( data.ambient );
            material.color.fromArray( data.diffuse );
            material.emissive.fromArray( data.emissive );
            material.specular.fromArray( data.specular );
            material.shininess = data.specularPower;
            material.opacity = data.alpha;

            materials[ data.id ] = material;

        }

        if ( json.multiMaterials ) {

            for ( var i = 0, l = json.multiMaterials.length; i < l; i ++ ) {

                var data = json.multiMaterials[ i ];

                console.warn( 'THREE.BabylonLoader: Multi materials not yet supported.' );

                materials[ data.id ] = new THREE.MeshPhongMaterial();

            }

        }

        return materials;

    },

    parseGeometry: function ( json ) {

        var geometry = new THREE.BufferGeometry();

        // indices

        var indices = new Uint16Array( json.indices );

        geometry.addAttribute( 'index', new THREE.BufferAttribute( indices, 1 ) );

        // positions

        var positions = new Float32Array( json.positions );

        for ( var j = 2, jl = positions.length; j < jl; j += 3 ) {

            positions[ j ] = - positions[ j ];

        }

        geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

        // normals

        if ( json.normals ) {

            var normals = new Float32Array( json.normals );

            for ( var j = 2, jl = normals.length; j < jl; j += 3 ) {

                normals[ j ] = - normals[ j ];

            }

            geometry.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );

        }

        // uvs

        if ( json.uvs ) {

            var uvs = new Float32Array( json.uvs );

            geometry.addAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );

        }

        // offsets

        var subMeshes = json.subMeshes;

        if ( subMeshes ) {

            for ( var j = 0, jl = subMeshes.length; j < jl; j ++ ) {

                var subMesh = subMeshes[ j ];

                geometry.addDrawCall( subMesh.indexStart, subMesh.indexCount );

            }

        } else {

            geometry.addDrawCall( 0, json.indices.length );

        }

        return geometry;

    },

    parseObjects: function ( json, materials ) {

        var objects = {};
        var scene = new THREE.Scene();

        var cameras = json.cameras;

        for ( var i = 0, l = cameras.length; i < l; i ++ ) {

            var data = cameras[ i ];

            var camera = new THREE.PerspectiveCamera( ( data.fov / Math.PI ) * 180, 1.33, data.minZ, data.maxZ );

            camera.name = data.name;
            camera.position.fromArray( data.position );
            if ( data.rotation ) camera.rotation.fromArray( data.rotation );

            objects[ data.id ] = camera;

        }

        var lights = json.lights;

        for ( var i = 0, l = lights.length; i < l; i ++ ) {

            var data = lights[ i ];

            var light;

            switch ( data.type ) {

                case 0:
                    light = new THREE.PointLight();
                    break;

                case 1:
                    light = new THREE.DirectionalLight();
                    break;

                case 2:
                    light = new THREE.SpotLight();
                    break;

                case 3:
                    light = new THREE.HemisphereLight();
                    break;
            }

            light.name = data.name;
            light.position.set( data.position[ 0 ], data.position[ 1 ], - data.position[ 2 ] );
            light.color.fromArray( data.diffuse );
            if ( data.intensity ) light.intensity = data.intensity;

            objects[ data.id ] = light;

            scene.add( light );

        }

        var meshes = json.meshes;

        for ( var i = 0, l = meshes.length; i < l; i ++ ) {

            var data = meshes[ i ];

            var object;

            if ( data.indices ) {

                var geometry = this.parseGeometry( data );

                object = new THREE.Mesh( geometry, materials[ data.materialId ] );

            } else {

                object = new THREE.Group();

            }

            object.name = data.name;
            object.position.set( data.position[ 0 ], data.position[ 1 ], - data.position[ 2 ] );
            object.rotation.fromArray( data.rotation );
            if ( data.rotationQuaternion ) object.quaternion.fromArray( data.rotationQuaternion );
            object.scale.fromArray( data.scaling );
            // object.visible = data.isVisible;

            if ( data.parentId ) {

                objects[ data.parentId ].add( object );

            } else {

                scene.add( object );

            }

            objects[ data.id ] = object;

        }

        return scene;

    }

};
/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.OBJLoader = function ( manager ) {

    this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.OBJLoader.prototype = {

    constructor: THREE.OBJLoader,

    load: function ( url, onLoad, onProgress, onError ) {

        var scope = this;

        var loader = new THREE.XHRLoader( scope.manager );
        loader.setCrossOrigin( this.crossOrigin );
        loader.load( url, function ( text ) {

            onLoad( scope.parse( text ) );

        }, onProgress, onError );

    },

    parse: function ( text ) {

        console.time( 'OBJLoader' );

        var object, objects = [];
        var geometry, material;

        function parseVertexIndex( value ) {

            var index = parseInt( value );

            return ( index >= 0 ? index - 1 : index + vertices.length / 3 ) * 3;

        }

        function parseNormalIndex( value ) {

            var index = parseInt( value );

            return ( index >= 0 ? index - 1 : index + normals.length / 3 ) * 3;

        }

        function parseUVIndex( value ) {

            var index = parseInt( value );

            return ( index >= 0 ? index - 1 : index + uvs.length / 2 ) * 2;

        }

        function addVertex( a, b, c ) {

            geometry.vertices.push(
                vertices[ a ], vertices[ a + 1 ], vertices[ a + 2 ],
                vertices[ b ], vertices[ b + 1 ], vertices[ b + 2 ],
                vertices[ c ], vertices[ c + 1 ], vertices[ c + 2 ]
            );

        }

        function addNormal( a, b, c ) {

            geometry.normals.push(
                normals[ a ], normals[ a + 1 ], normals[ a + 2 ],
                normals[ b ], normals[ b + 1 ], normals[ b + 2 ],
                normals[ c ], normals[ c + 1 ], normals[ c + 2 ]
            );

        }

        function addUV( a, b, c ) {

            geometry.uvs.push(
                uvs[ a ], uvs[ a + 1 ],
                uvs[ b ], uvs[ b + 1 ],
                uvs[ c ], uvs[ c + 1 ]
            );

        }

        function addFace( a, b, c, d,  ua, ub, uc, ud,  na, nb, nc, nd ) {

            var ia = parseVertexIndex( a );
            var ib = parseVertexIndex( b );
            var ic = parseVertexIndex( c );

            if ( d === undefined ) {

                addVertex( ia, ib, ic );

            } else {

                var id = parseVertexIndex( d );

                addVertex( ia, ib, id );
                addVertex( ib, ic, id );

            }

            if ( ua !== undefined ) {

                var ia = parseUVIndex( ua );
                var ib = parseUVIndex( ub );
                var ic = parseUVIndex( uc );

                if ( d === undefined ) {

                    addUV( ia, ib, ic );

                } else {

                    var id = parseUVIndex( ud );

                    addUV( ia, ib, id );
                    addUV( ib, ic, id );

                }

            }

            if ( na !== undefined ) {

                var ia = parseNormalIndex( na );
                var ib = parseNormalIndex( nb );
                var ic = parseNormalIndex( nc );

                if ( d === undefined ) {

                    addNormal( ia, ib, ic );

                } else {

                    var id = parseNormalIndex( nd );

                    addNormal( ia, ib, id );
                    addNormal( ib, ic, id );

                }

            }

        }

        // create mesh if no objects in text

        if ( /^o /gm.test( text ) === false ) {

            geometry = {
                vertices: [],
                normals: [],
                uvs: []
            };

            material = {
                name: ''
            };

            object = {
                name: '',
                geometry: geometry,
                material: material
            };

            objects.push( object );

        }

        var vertices = [];
        var normals = [];
        var uvs = [];

        // v float float float

        var vertex_pattern = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

        // vn float float float

        var normal_pattern = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

        // vt float float

        var uv_pattern = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

        // f vertex vertex vertex ...

        var face_pattern1 = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/;

        // f vertex/uv vertex/uv vertex/uv ...

        var face_pattern2 = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/;

        // f vertex/uv/normal vertex/uv/normal vertex/uv/normal ...

        var face_pattern3 = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/;

        // f vertex//normal vertex//normal vertex//normal ... 

        var face_pattern4 = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/

        //

        var lines = text.split( '\n' );

        for ( var i = 0; i < lines.length; i ++ ) {

            var line = lines[ i ];
            line = line.trim();

            var result;

            if ( line.length === 0 || line.charAt( 0 ) === '#' ) {

                continue;

            } else if ( ( result = vertex_pattern.exec( line ) ) !== null ) {

                // ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

                vertices.push(
                    parseFloat( result[ 1 ] ),
                    parseFloat( result[ 2 ] ),
                    parseFloat( result[ 3 ] )
                );

            } else if ( ( result = normal_pattern.exec( line ) ) !== null ) {

                // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

                normals.push(
                    parseFloat( result[ 1 ] ),
                    parseFloat( result[ 2 ] ),
                    parseFloat( result[ 3 ] )
                );

            } else if ( ( result = uv_pattern.exec( line ) ) !== null ) {

                // ["vt 0.1 0.2", "0.1", "0.2"]

                uvs.push(
                    parseFloat( result[ 1 ] ),
                    parseFloat( result[ 2 ] )
                );

            } else if ( ( result = face_pattern1.exec( line ) ) !== null ) {

                // ["f 1 2 3", "1", "2", "3", undefined]

                addFace(
                    result[ 1 ], result[ 2 ], result[ 3 ], result[ 4 ]
                );

            } else if ( ( result = face_pattern2.exec( line ) ) !== null ) {

                // ["f 1/1 2/2 3/3", " 1/1", "1", "1", " 2/2", "2", "2", " 3/3", "3", "3", undefined, undefined, undefined]

                addFace(
                    result[ 2 ], result[ 5 ], result[ 8 ], result[ 11 ],
                    result[ 3 ], result[ 6 ], result[ 9 ], result[ 12 ]
                );

            } else if ( ( result = face_pattern3.exec( line ) ) !== null ) {

                // ["f 1/1/1 2/2/2 3/3/3", " 1/1/1", "1", "1", "1", " 2/2/2", "2", "2", "2", " 3/3/3", "3", "3", "3", undefined, undefined, undefined, undefined]

                addFace(
                    result[ 2 ], result[ 6 ], result[ 10 ], result[ 14 ],
                    result[ 3 ], result[ 7 ], result[ 11 ], result[ 15 ],
                    result[ 4 ], result[ 8 ], result[ 12 ], result[ 16 ]
                );

            } else if ( ( result = face_pattern4.exec( line ) ) !== null ) {

                // ["f 1//1 2//2 3//3", " 1//1", "1", "1", " 2//2", "2", "2", " 3//3", "3", "3", undefined, undefined, undefined]

                addFace(
                    result[ 2 ], result[ 5 ], result[ 8 ], result[ 11 ],
                    undefined, undefined, undefined, undefined,
                    result[ 3 ], result[ 6 ], result[ 9 ], result[ 12 ]
                );

            } else if ( /^o /.test( line ) ) {

                geometry = {
                    vertices: [],
                    normals: [],
                    uvs: []
                };

                material = {
                    name: ''
                };

                object = {
                    name: line.substring( 2 ).trim(),
                    geometry: geometry,
                    material: material
                };

                objects.push( object )

            } else if ( /^g /.test( line ) ) {

                // group

            } else if ( /^usemtl /.test( line ) ) {

                // material

                material.name = line.substring( 7 ).trim();

            } else if ( /^mtllib /.test( line ) ) {

                // mtl file

            } else if ( /^s /.test( line ) ) {

                // smooth shading

            } else {

                // console.log( "THREE.OBJLoader: Unhandled line " + line );

            }

        }

        var container = new THREE.Object3D();

        for ( var i = 0, l = objects.length; i < l; i ++ ) {

            var object = objects[ i ];
            var geometry = object.geometry;

            var buffergeometry = new THREE.BufferGeometry();

            buffergeometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( geometry.vertices ), 3 ) );

            if ( geometry.normals.length > 0 ) {
                buffergeometry.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( geometry.normals ), 3 ) );
            }

            if ( geometry.uvs.length > 0 ) {
                buffergeometry.addAttribute( 'uv', new THREE.BufferAttribute( new Float32Array( geometry.uvs ), 2 ) );
            }

            var material = new THREE.MeshLambertMaterial();
            material.name = object.material.name;

            var mesh = new THREE.Mesh( buffergeometry, material );
            mesh.name = object.name;

            container.add( mesh );

        }

        console.timeEnd( 'OBJLoader' );

        return container;

    }

};
/**
 * @author Wei Meng / http://about.me/menway
 *
 * Description: A THREE loader for PLY ASCII files (known as the Polygon File Format or the Stanford Triangle Format).
 *
 *
 * Limitations: ASCII decoding assumes file is UTF-8.
 *
 * Usage:
 *	var loader = new THREE.PLYLoader();
 *	loader.load('./models/ply/ascii/dolphins.ply', function (geometry) {
 *
 *		scene.add( new THREE.Mesh( geometry ) );
 *
 *	} );
 *
 * If the PLY file uses non standard property names, they can be mapped while
 * loading. For example, the following maps the properties
 * “diffuse_(red|green|blue)” in the file to standard color names.
 *
 * loader.setPropertyNameMapping( {
 *	diffuse_red: 'red',
 *	diffuse_green: 'green',
 *	diffuse_blue: 'blue'
 * } );
 *
 */


THREE.PLYLoader = function () {

    this.propertyNameMapping = {};

};

THREE.PLYLoader.prototype = {

    constructor: THREE.PLYLoader,

    setPropertyNameMapping: function ( mapping ) {

        this.propertyNameMapping = mapping;

    },

    load: function ( url, callback ) {

        var scope = this;
        var request = new XMLHttpRequest();

        request.addEventListener( 'load', function ( event ) {

            var geometry = scope.parse( event.target.response );

            scope.dispatchEvent( { type: 'load', content: geometry } );

            if ( callback ) callback( geometry );

        }, false );

        request.addEventListener( 'progress', function ( event ) {

            scope.dispatchEvent( { type: 'progress', loaded: event.loaded, total: event.total } );

        }, false );

        request.addEventListener( 'error', function () {

            scope.dispatchEvent( { type: 'error', message: 'Couldn\'t load URL [' + url + ']' } );

        }, false );

        request.open( 'GET', url, true );
        request.responseType = "arraybuffer";
        request.send( null );

    },

    bin2str: function (buf) {

        var array_buffer = new Uint8Array(buf);
        var str = '';
        for(var i = 0; i < buf.byteLength; i++) {
            str += String.fromCharCode(array_buffer[i]); // implicitly assumes little-endian
        }

        return str;

    },

    isASCII: function( data ){

        var header = this.parseHeader( this.bin2str( data ) );

        return header.format === "ascii";

    },

    parse: function ( data ) {

        if ( data instanceof ArrayBuffer ) {

            return this.isASCII( data )
                ? this.parseASCII( this.bin2str( data ) )
                : this.parseBinary( data );

        } else {

            return this.parseASCII( data );

        }

    },

    parseHeader: function ( data ) {

        var patternHeader = /ply([\s\S]*)end_header\s/;
        var headerText = "";
        if ( ( result = patternHeader.exec( data ) ) !== null ) {
            headerText = result [ 1 ];
        }

        var header = {
            comments: [],
            elements: [],
            headerLength: result[ 0 ].length
        };

        var lines = headerText.split( '\n' );
        var currentElement = undefined;
        var lineType, lineValues;

        function make_ply_element_property( propertValues, propertyNameMapping ) {

            var property = {
                type: propertValues[ 0 ]
            };

            if ( property.type === 'list' ) {

                property.name = propertValues[ 3 ];
                property.countType = propertValues[ 1 ];
                property.itemType = propertValues[ 2 ];

            } else {

                property.name = propertValues[ 1 ];

            }

            if ( property.name in propertyNameMapping ) {

                property.name = propertyNameMapping[ property.name ];

            }

            return property;

        }

        for ( var i = 0; i < lines.length; i ++ ) {

            var line = lines[ i ];
            line = line.trim()
            if ( line === "" ) { continue; }
            lineValues = line.split( /\s+/ );
            lineType = lineValues.shift()
            line = lineValues.join(" ")

            switch( lineType ) {

                case "format":

                    header.format = lineValues[0];
                    header.version = lineValues[1];

                    break;

                case "comment":

                    header.comments.push(line);

                    break;

                case "element":

                    if ( !(currentElement === undefined) ) {

                        header.elements.push(currentElement);

                    }

                    currentElement = Object();
                    currentElement.name = lineValues[0];
                    currentElement.count = parseInt( lineValues[1] );
                    currentElement.properties = [];

                    break;

                case "property":

                    currentElement.properties.push( make_ply_element_property( lineValues, this.propertyNameMapping ) );

                    break;


                default:

                    console.log("unhandled", lineType, lineValues);

            }

        }

        if ( !(currentElement === undefined) ) {

            header.elements.push(currentElement);

        }

        return header;

    },

    parseASCIINumber: function ( n, type ) {

        switch( type ) {

            case 'char': case 'uchar': case 'short': case 'ushort': case 'int': case 'uint':
            case 'int8': case 'uint8': case 'int16': case 'uint16': case 'int32': case 'uint32':

            return parseInt( n );

            case 'float': case 'double': case 'float32': case 'float64':

            return parseFloat( n );

        }

    },

    parseASCIIElement: function ( properties, line ) {

        values = line.split( /\s+/ );

        var element = Object();

        for ( var i = 0; i < properties.length; i ++ ) {

            if ( properties[i].type === "list" ) {

                var list = [];
                var n = this.parseASCIINumber( values.shift(), properties[i].countType );

                for ( j = 0; j < n; j ++ ) {

                    list.push( this.parseASCIINumber( values.shift(), properties[i].itemType ) );

                }

                element[ properties[i].name ] = list;

            } else {

                element[ properties[i].name ] = this.parseASCIINumber( values.shift(), properties[i].type );

            }

        }

        return element;

    },

    parseASCII: function ( data ) {

        // PLY ascii format specification, as per http://en.wikipedia.org/wiki/PLY_(file_format)

        var geometry = new THREE.Geometry();

        var result;

        var header = this.parseHeader( data );

        var patternBody = /end_header\s([\s\S]*)$/;
        var body = "";
        if ( ( result = patternBody.exec( data ) ) !== null ) {
            body = result [ 1 ];
        }

        var lines = body.split( '\n' );
        var currentElement = 0;
        var currentElementCount = 0;
        geometry.useColor = false;

        for ( var i = 0; i < lines.length; i ++ ) {

            var line = lines[ i ];
            line = line.trim()
            if ( line === "" ) { continue; }

            if ( currentElementCount >= header.elements[currentElement].count ) {

                currentElement++;
                currentElementCount = 0;

            }

            var element = this.parseASCIIElement( header.elements[currentElement].properties, line );

            this.handleElement( geometry, header.elements[currentElement].name, element );

            currentElementCount++;

        }

        return this.postProcess( geometry );

    },

    postProcess: function ( geometry ) {

        if ( geometry.useColor ) {

            for ( var i = 0; i < geometry.faces.length; i ++ ) {

                geometry.faces[i].vertexColors = [
                    geometry.colors[geometry.faces[i].a],
                    geometry.colors[geometry.faces[i].b],
                    geometry.colors[geometry.faces[i].c]
                ];

            }

            geometry.elementsNeedUpdate = true;

        }

        geometry.computeBoundingSphere();

        return geometry;

    },

    handleElement: function ( geometry, elementName, element ) {

        if ( elementName === "vertex" ) {

            geometry.vertices.push(
                new THREE.Vector3( element.x, element.y, element.z )
            );

            if ( 'red' in element && 'green' in element && 'blue' in element ) {

                geometry.useColor = true;

                color = new THREE.Color();
                color.setRGB( element.red / 255.0, element.green / 255.0, element.blue / 255.0 );
                geometry.colors.push( color );

            }

        } else if ( elementName === "face" ) {

            var vertex_indices = element.vertex_indices;

            if ( vertex_indices.length === 3 ) {

                geometry.faces.push(
                    new THREE.Face3( vertex_indices[ 0 ], vertex_indices[ 1 ], vertex_indices[ 2 ] )
                );

            } else if ( vertex_indices.length === 4 ) {

                geometry.faces.push(
                    new THREE.Face3( vertex_indices[ 0 ], vertex_indices[ 1 ], vertex_indices[ 3 ] ),
                    new THREE.Face3( vertex_indices[ 1 ], vertex_indices[ 2 ], vertex_indices[ 3 ] )
                );

            }

        }

    },

    binaryRead: function ( dataview, at, type, little_endian ) {

        switch( type ) {

            // corespondences for non-specific length types here match rply:
            case 'int8':		case 'char':	 return [ dataview.getInt8( at ), 1 ];

            case 'uint8':		case 'uchar':	 return [ dataview.getUint8( at ), 1 ];

            case 'int16':		case 'short':	 return [ dataview.getInt16( at, little_endian ), 2 ];

            case 'uint16':	case 'ushort': return [ dataview.getUint16( at, little_endian ), 2 ];

            case 'int32':		case 'int':		 return [ dataview.getInt32( at, little_endian ), 4 ];

            case 'uint32':	case 'uint':	 return [ dataview.getUint32( at, little_endian ), 4 ];

            case 'float32': case 'float':	 return [ dataview.getFloat32( at, little_endian ), 4 ];

            case 'float64': case 'double': return [ dataview.getFloat64( at, little_endian ), 8 ];

        }

    },

    binaryReadElement: function ( dataview, at, properties, little_endian ) {

        var element = Object();
        var result, read = 0;

        for ( var i = 0; i < properties.length; i ++ ) {

            if ( properties[i].type === "list" ) {

                var list = [];

                result = this.binaryRead( dataview, at+read, properties[i].countType, little_endian );
                var n = result[0];
                read += result[1];

                for ( j = 0; j < n; j ++ ) {

                    result = this.binaryRead( dataview, at+read, properties[i].itemType, little_endian );
                    list.push( result[0] );
                    read += result[1];

                }

                element[ properties[i].name ] = list;

            } else {

                result = this.binaryRead( dataview, at+read, properties[i].type, little_endian );
                element[ properties[i].name ] = result[0];
                read += result[1];

            }

        }

        return [ element, read ];

    },

    parseBinary: function ( data ) {

        var geometry = new THREE.Geometry();

        var header = this.parseHeader( this.bin2str( data ) );
        var little_endian = (header.format === "binary_little_endian");
        var body = new DataView( data, header.headerLength );
        var result, loc = 0;

        for ( var currentElement = 0; currentElement < header.elements.length; currentElement ++ ) {

            for ( var currentElementCount = 0; currentElementCount < header.elements[currentElement].count; currentElementCount ++ ) {

                result = this.binaryReadElement( body, loc, header.elements[currentElement].properties, little_endian );
                loc += result[1];
                var element = result[0];

                this.handleElement( geometry, header.elements[currentElement].name, element );

            }

        }

        return this.postProcess( geometry );

    }

};

THREE.EventDispatcher.prototype.apply( THREE.PLYLoader.prototype );
/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.SceneLoader = function ( manager ) {

    this.onLoadStart = function () {};
    this.onLoadProgress = function() {};
    this.onLoadComplete = function () {};

    this.callbackSync = function () {};
    this.callbackProgress = function () {};

    this.geometryHandlers = {};
    this.hierarchyHandlers = {};

    this.addGeometryHandler( "ascii", THREE.JSONLoader );

    this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.SceneLoader.prototype = {

    constructor: THREE.SceneLoader,

    load: function ( url, onLoad, onProgress, onError ) {

        var scope = this;

        var loader = new THREE.XHRLoader( scope.manager );
        loader.setCrossOrigin( this.crossOrigin );
        loader.load( url, function ( text ) {

            scope.parse( JSON.parse( text ), onLoad, url );

        }, onProgress, onError );

    },

    setCrossOrigin: function ( value ) {

        this.crossOrigin = value;

    },

    addGeometryHandler: function ( typeID, loaderClass ) {

        this.geometryHandlers[ typeID ] = { "loaderClass": loaderClass };

    },

    addHierarchyHandler: function ( typeID, loaderClass ) {

        this.hierarchyHandlers[ typeID ] = { "loaderClass": loaderClass };

    },

    parse: function ( json, callbackFinished, url ) {

        var scope = this;

        var urlBase = THREE.Loader.prototype.extractUrlBase( url );

        var geometry, material, camera, fog,
            texture, images, color,
            light, hex, intensity,
            counter_models, counter_textures,
            total_models, total_textures,
            result;

        var target_array = [];

        var data = json;

        // async geometry loaders

        for ( var typeID in this.geometryHandlers ) {

            var loaderClass = this.geometryHandlers[ typeID ][ "loaderClass" ];
            this.geometryHandlers[ typeID ][ "loaderObject" ] = new loaderClass();

        }

        // async hierachy loaders

        for ( var typeID in this.hierarchyHandlers ) {

            var loaderClass = this.hierarchyHandlers[ typeID ][ "loaderClass" ];
            this.hierarchyHandlers[ typeID ][ "loaderObject" ] = new loaderClass();

        }

        counter_models = 0;
        counter_textures = 0;

        result = {

            scene: new THREE.Scene(),
            geometries: {},
            face_materials: {},
            materials: {},
            textures: {},
            objects: {},
            cameras: {},
            lights: {},
            fogs: {},
            empties: {},
            groups: {}

        };

        if ( data.transform ) {

            var position = data.transform.position,
                rotation = data.transform.rotation,
                scale = data.transform.scale;

            if ( position ) {

                result.scene.position.fromArray( position );

            }

            if ( rotation ) {

                result.scene.rotation.fromArray( rotation );

            }

            if ( scale ) {

                result.scene.scale.fromArray( scale );

            }

            if ( position || rotation || scale ) {

                result.scene.updateMatrix();
                result.scene.updateMatrixWorld();

            }

        }

        function get_url( source_url, url_type ) {

            if ( url_type == "relativeToHTML" ) {

                return source_url;

            } else {

                return urlBase + source_url;

            }

        };

        // toplevel loader function, delegates to handle_children

        function handle_objects() {

            handle_children( result.scene, data.objects );

        }

        // handle all the children from the loaded json and attach them to given parent

        function handle_children( parent, children ) {

            var mat, dst, pos, rot, scl, quat;

            for ( var objID in children ) {

                // check by id if child has already been handled,
                // if not, create new object

                var object = result.objects[ objID ];
                var objJSON = children[ objID ];

                if ( object === undefined ) {

                    // meshes

                    if ( objJSON.type && ( objJSON.type in scope.hierarchyHandlers ) ) {

                        if ( objJSON.loading === undefined ) {

                            material = result.materials[ objJSON.material ];

                            objJSON.loading = true;

                            var loader = scope.hierarchyHandlers[ objJSON.type ][ "loaderObject" ];

                            // ColladaLoader

                            if ( loader.options ) {

                                loader.load( get_url( objJSON.url, data.urlBaseType ), create_callback_hierachy( objID, parent, material, objJSON ) );

                                // UTF8Loader
                                // OBJLoader

                            } else {

                                loader.load( get_url( objJSON.url, data.urlBaseType ), create_callback_hierachy( objID, parent, material, objJSON ) );

                            }

                        }

                    } else if ( objJSON.geometry !== undefined ) {

                        geometry = result.geometries[ objJSON.geometry ];

                        // geometry already loaded

                        if ( geometry ) {

                            var needsTangents = false;

                            material = result.materials[ objJSON.material ];
                            needsTangents = material instanceof THREE.ShaderMaterial;

                            pos = objJSON.position;
                            rot = objJSON.rotation;
                            scl = objJSON.scale;
                            mat = objJSON.matrix;
                            quat = objJSON.quaternion;

                            // use materials from the model file
                            // if there is no material specified in the object

                            if ( ! objJSON.material ) {

                                material = new THREE.MeshFaceMaterial( result.face_materials[ objJSON.geometry ] );

                            }

                            // use materials from the model file
                            // if there is just empty face material
                            // (must create new material as each model has its own face material)

                            if ( ( material instanceof THREE.MeshFaceMaterial ) && material.materials.length === 0 ) {

                                material = new THREE.MeshFaceMaterial( result.face_materials[ objJSON.geometry ] );

                            }

                            if ( material instanceof THREE.MeshFaceMaterial ) {

                                for ( var i = 0; i < material.materials.length; i ++ ) {

                                    needsTangents = needsTangents || ( material.materials[ i ] instanceof THREE.ShaderMaterial );

                                }

                            }

                            if ( needsTangents ) {

                                geometry.computeTangents();

                            }

                            if ( objJSON.skin ) {

                                object = new THREE.SkinnedMesh( geometry, material );

                            } else if ( objJSON.morph ) {

                                object = new THREE.MorphAnimMesh( geometry, material );

                                if ( objJSON.duration !== undefined ) {

                                    object.duration = objJSON.duration;

                                }

                                if ( objJSON.time !== undefined ) {

                                    object.time = objJSON.time;

                                }

                                if ( objJSON.mirroredLoop !== undefined ) {

                                    object.mirroredLoop = objJSON.mirroredLoop;

                                }

                                if ( material.morphNormals ) {

                                    geometry.computeMorphNormals();

                                }

                            } else {

                                object = new THREE.Mesh( geometry, material );

                            }

                            object.name = objID;

                            if ( mat ) {

                                object.matrixAutoUpdate = false;
                                object.matrix.set(
                                    mat[0],  mat[1],  mat[2],  mat[3],
                                    mat[4],  mat[5],  mat[6],  mat[7],
                                    mat[8],  mat[9],  mat[10], mat[11],
                                    mat[12], mat[13], mat[14], mat[15]
                                );

                            } else {

                                object.position.fromArray( pos );

                                if ( quat ) {

                                    object.quaternion.fromArray( quat );

                                } else {

                                    object.rotation.fromArray( rot );

                                }

                                object.scale.fromArray( scl );

                            }

                            object.visible = objJSON.visible;
                            object.castShadow = objJSON.castShadow;
                            object.receiveShadow = objJSON.receiveShadow;

                            parent.add( object );

                            result.objects[ objID ] = object;

                        }

                        // lights

                    } else if ( objJSON.type === "AmbientLight" || objJSON.type === "PointLight" ||
                        objJSON.type === "DirectionalLight" || objJSON.type === "SpotLight" ||
                        objJSON.type === "HemisphereLight" || objJSON.type === "AreaLight" ) {

                        var color = objJSON.color;
                        var intensity = objJSON.intensity;
                        var distance = objJSON.distance;
                        var position = objJSON.position;
                        var rotation = objJSON.rotation;

                        switch ( objJSON.type ) {

                            case 'AmbientLight':
                                light = new THREE.AmbientLight( color );
                                break;

                            case 'PointLight':
                                light = new THREE.PointLight( color, intensity, distance );
                                light.position.fromArray( position );
                                break;

                            case 'DirectionalLight':
                                light = new THREE.DirectionalLight( color, intensity );
                                light.position.fromArray( objJSON.direction );
                                break;

                            case 'SpotLight':
                                light = new THREE.SpotLight( color, intensity, distance, 1 );
                                light.angle = objJSON.angle;
                                light.position.fromArray( position );
                                light.target.set( position[ 0 ], position[ 1 ] - distance, position[ 2 ] );
                                light.target.applyEuler( new THREE.Euler( rotation[ 0 ], rotation[ 1 ], rotation[ 2 ], 'XYZ' ) );
                                break;

                            case 'HemisphereLight':
                                light = new THREE.DirectionalLight( color, intensity, distance );
                                light.target.set( position[ 0 ], position[ 1 ] - distance, position[ 2 ] );
                                light.target.applyEuler( new THREE.Euler( rotation[ 0 ], rotation[ 1 ], rotation[ 2 ], 'XYZ' ) );
                                break;

                            case 'AreaLight':
                                light = new THREE.AreaLight(color, intensity);
                                light.position.fromArray( position );
                                light.width = objJSON.size;
                                light.height = objJSON.size_y;
                                break;

                        }

                        parent.add( light );

                        light.name = objID;
                        result.lights[ objID ] = light;
                        result.objects[ objID ] = light;

                        // cameras

                    } else if ( objJSON.type === "PerspectiveCamera" || objJSON.type === "OrthographicCamera" ) {

                        pos = objJSON.position;
                        rot = objJSON.rotation;
                        quat = objJSON.quaternion;

                        if ( objJSON.type === "PerspectiveCamera" ) {

                            camera = new THREE.PerspectiveCamera( objJSON.fov, objJSON.aspect, objJSON.near, objJSON.far );

                        } else if ( objJSON.type === "OrthographicCamera" ) {

                            camera = new THREE.OrthographicCamera( objJSON.left, objJSON.right, objJSON.top, objJSON.bottom, objJSON.near, objJSON.far );

                        }

                        camera.name = objID;
                        camera.position.fromArray( pos );

                        if ( quat !== undefined ) {

                            camera.quaternion.fromArray( quat );

                        } else if ( rot !== undefined ) {

                            camera.rotation.fromArray( rot );

                        } else if ( objJSON.target ) {

                            camera.lookAt( new THREE.Vector3().fromArray( objJSON.target ) );

                        }

                        parent.add( camera );

                        result.cameras[ objID ] = camera;
                        result.objects[ objID ] = camera;

                        // pure Object3D

                    } else {

                        pos = objJSON.position;
                        rot = objJSON.rotation;
                        scl = objJSON.scale;
                        quat = objJSON.quaternion;

                        object = new THREE.Object3D();
                        object.name = objID;
                        object.position.fromArray( pos );

                        if ( quat ) {

                            object.quaternion.fromArray( quat );

                        } else {

                            object.rotation.fromArray( rot );

                        }

                        object.scale.fromArray( scl );
                        object.visible = ( objJSON.visible !== undefined ) ? objJSON.visible : false;

                        parent.add( object );

                        result.objects[ objID ] = object;
                        result.empties[ objID ] = object;

                    }

                    if ( object ) {

                        if ( objJSON.userData !== undefined ) {

                            for ( var key in objJSON.userData ) {

                                var value = objJSON.userData[ key ];
                                object.userData[ key ] = value;

                            }

                        }

                        if ( objJSON.groups !== undefined ) {

                            for ( var i = 0; i < objJSON.groups.length; i ++ ) {

                                var groupID = objJSON.groups[ i ];

                                if ( result.groups[ groupID ] === undefined ) {

                                    result.groups[ groupID ] = [];

                                }

                                result.groups[ groupID ].push( objID );

                            }

                        }

                    }

                }

                if ( object !== undefined && objJSON.children !== undefined ) {

                    handle_children( object, objJSON.children );

                }

            }

        };

        function handle_mesh( geo, mat, id ) {

            result.geometries[ id ] = geo;
            result.face_materials[ id ] = mat;
            handle_objects();

        };

        function handle_hierarchy( node, id, parent, material, obj ) {

            var p = obj.position;
            var r = obj.rotation;
            var q = obj.quaternion;
            var s = obj.scale;

            node.position.fromArray( p );

            if ( q ) {

                node.quaternion.fromArray( q );

            } else {

                node.rotation.fromArray( r );

            }

            node.scale.fromArray( s );

            // override children materials
            // if object material was specified in JSON explicitly

            if ( material ) {

                node.traverse( function ( child ) {

                    child.material = material;

                } );

            }

            // override children visibility
            // with root node visibility as specified in JSON

            var visible = ( obj.visible !== undefined ) ? obj.visible : true;

            node.traverse( function ( child ) {

                child.visible = visible;

            } );

            parent.add( node );

            node.name = id;

            result.objects[ id ] = node;
            handle_objects();

        };

        function create_callback_geometry( id ) {

            return function ( geo, mat ) {

                geo.name = id;

                handle_mesh( geo, mat, id );

                counter_models -= 1;

                scope.onLoadComplete();

                async_callback_gate();

            }

        };

        function create_callback_hierachy( id, parent, material, obj ) {

            return function ( event ) {

                var result;

                // loaders which use EventDispatcher

                if ( event.content ) {

                    result = event.content;

                    // ColladaLoader

                } else if ( event.dae ) {

                    result = event.scene;


                    // UTF8Loader

                } else {

                    result = event;

                }

                handle_hierarchy( result, id, parent, material, obj );

                counter_models -= 1;

                scope.onLoadComplete();

                async_callback_gate();

            }

        };

        function create_callback_embed( id ) {

            return function ( geo, mat ) {

                geo.name = id;

                result.geometries[ id ] = geo;
                result.face_materials[ id ] = mat;

            }

        };

        function async_callback_gate() {

            var progress = {

                totalModels : total_models,
                totalTextures : total_textures,
                loadedModels : total_models - counter_models,
                loadedTextures : total_textures - counter_textures

            };

            scope.callbackProgress( progress, result );

            scope.onLoadProgress();

            if ( counter_models === 0 && counter_textures === 0 ) {

                finalize();
                callbackFinished( result );

            }

        };

        function finalize() {

            // take care of targets which could be asynchronously loaded objects

            for ( var i = 0; i < target_array.length; i ++ ) {

                var ta = target_array[ i ];

                var target = result.objects[ ta.targetName ];

                if ( target ) {

                    ta.object.target = target;

                } else {

                    // if there was error and target of specified name doesn't exist in the scene file
                    // create instead dummy target
                    // (target must be added to scene explicitly as parent is already added)

                    ta.object.target = new THREE.Object3D();
                    result.scene.add( ta.object.target );

                }

                ta.object.target.userData.targetInverse = ta.object;

            }

        };

        var callbackTexture = function ( count ) {

            counter_textures -= count;
            async_callback_gate();

            scope.onLoadComplete();

        };

        // must use this instead of just directly calling callbackTexture
        // because of closure in the calling context loop

        var generateTextureCallback = function ( count ) {

            return function () {

                callbackTexture( count );

            };

        };

        function traverse_json_hierarchy( objJSON, callback ) {

            callback( objJSON );

            if ( objJSON.children !== undefined ) {

                for ( var objChildID in objJSON.children ) {

                    traverse_json_hierarchy( objJSON.children[ objChildID ], callback );

                }

            }

        };

        // first go synchronous elements

        // fogs

        var fogID, fogJSON;

        for ( fogID in data.fogs ) {

            fogJSON = data.fogs[ fogID ];

            if ( fogJSON.type === "linear" ) {

                fog = new THREE.Fog( 0x000000, fogJSON.near, fogJSON.far );

            } else if ( fogJSON.type === "exp2" ) {

                fog = new THREE.FogExp2( 0x000000, fogJSON.density );

            }

            color = fogJSON.color;
            fog.color.setRGB( color[0], color[1], color[2] );

            result.fogs[ fogID ] = fog;

        }

        // now come potentially asynchronous elements

        // geometries

        // count how many geometries will be loaded asynchronously

        var geoID, geoJSON;

        for ( geoID in data.geometries ) {

            geoJSON = data.geometries[ geoID ];

            if ( geoJSON.type in this.geometryHandlers ) {

                counter_models += 1;

                scope.onLoadStart();

            }

        }

        // count how many hierarchies will be loaded asynchronously

        for ( var objID in data.objects ) {

            traverse_json_hierarchy( data.objects[ objID ], function ( objJSON ) {

                if ( objJSON.type && ( objJSON.type in scope.hierarchyHandlers ) ) {

                    counter_models += 1;

                    scope.onLoadStart();

                }

            });

        }

        total_models = counter_models;

        for ( geoID in data.geometries ) {

            geoJSON = data.geometries[ geoID ];

            if ( geoJSON.type === "cube" ) {

                geometry = new THREE.BoxGeometry( geoJSON.width, geoJSON.height, geoJSON.depth, geoJSON.widthSegments, geoJSON.heightSegments, geoJSON.depthSegments );
                geometry.name = geoID;
                result.geometries[ geoID ] = geometry;

            } else if ( geoJSON.type === "plane" ) {

                geometry = new THREE.PlaneGeometry( geoJSON.width, geoJSON.height, geoJSON.widthSegments, geoJSON.heightSegments );
                geometry.name = geoID;
                result.geometries[ geoID ] = geometry;

            } else if ( geoJSON.type === "sphere" ) {

                geometry = new THREE.SphereGeometry( geoJSON.radius, geoJSON.widthSegments, geoJSON.heightSegments );
                geometry.name = geoID;
                result.geometries[ geoID ] = geometry;

            } else if ( geoJSON.type === "cylinder" ) {

                geometry = new THREE.CylinderGeometry( geoJSON.topRad, geoJSON.botRad, geoJSON.height, geoJSON.radSegs, geoJSON.heightSegs );
                geometry.name = geoID;
                result.geometries[ geoID ] = geometry;

            } else if ( geoJSON.type === "torus" ) {

                geometry = new THREE.TorusGeometry( geoJSON.radius, geoJSON.tube, geoJSON.segmentsR, geoJSON.segmentsT );
                geometry.name = geoID;
                result.geometries[ geoID ] = geometry;

            } else if ( geoJSON.type === "icosahedron" ) {

                geometry = new THREE.IcosahedronGeometry( geoJSON.radius, geoJSON.subdivisions );
                geometry.name = geoID;
                result.geometries[ geoID ] = geometry;

            } else if ( geoJSON.type in this.geometryHandlers ) {

                var loader = this.geometryHandlers[ geoJSON.type ][ "loaderObject" ];
                loader.load( get_url( geoJSON.url, data.urlBaseType ), create_callback_geometry( geoID ) );

            } else if ( geoJSON.type === "embedded" ) {

                var modelJson = data.embeds[ geoJSON.id ],
                    texture_path = "";

                // pass metadata along to jsonLoader so it knows the format version

                modelJson.metadata = data.metadata;

                if ( modelJson ) {

                    var jsonLoader = this.geometryHandlers[ "ascii" ][ "loaderObject" ];
                    var model = jsonLoader.parse( modelJson, texture_path );
                    create_callback_embed( geoID )( model.geometry, model.materials );

                }

            }

        }

        // textures

        // count how many textures will be loaded asynchronously

        var textureID, textureJSON;

        for ( textureID in data.textures ) {

            textureJSON = data.textures[ textureID ];

            if ( textureJSON.url instanceof Array ) {

                counter_textures += textureJSON.url.length;

                for( var n = 0; n < textureJSON.url.length; n ++ ) {

                    scope.onLoadStart();

                }

            } else {

                counter_textures += 1;

                scope.onLoadStart();

            }

        }

        total_textures = counter_textures;

        for ( textureID in data.textures ) {

            textureJSON = data.textures[ textureID ];

            if ( textureJSON.mapping !== undefined && THREE[ textureJSON.mapping ] !== undefined ) {

                textureJSON.mapping = THREE[ textureJSON.mapping ];

            }

            var texture;

            if ( textureJSON.url instanceof Array ) {

                var count = textureJSON.url.length;
                var url_array = [];

                for ( var i = 0; i < count; i ++ ) {

                    url_array[ i ] = get_url( textureJSON.url[ i ], data.urlBaseType );

                }

                var loader = THREE.Loader.Handlers.get( url_array[ 0 ] );

                if ( loader !== null ) {

                    texture = loader.load( url_array, generateTextureCallback( count ) );

                    if ( textureJSON.mapping !== undefined )
                        texture.mapping = textureJSON.mapping;

                } else {

                    texture = THREE.ImageUtils.loadTextureCube( url_array, textureJSON.mapping, generateTextureCallback( count ) );

                }

            } else {

                var fullUrl = get_url( textureJSON.url, data.urlBaseType );
                var textureCallback = generateTextureCallback( 1 );

                var loader = THREE.Loader.Handlers.get( fullUrl );

                if ( loader !== null ) {

                    texture = loader.load( fullUrl, textureCallback );

                } else {

                    texture = new THREE.Texture();
                    loader = new THREE.ImageLoader();

                    ( function ( texture ) {

                        loader.load( fullUrl, function ( image ) {

                            texture.image = image;
                            texture.needsUpdate = true;

                            textureCallback();

                        } );

                    } )( texture )


                }

                if ( textureJSON.mapping !== undefined )
                    texture.mapping = textureJSON.mapping;

                if ( THREE[ textureJSON.minFilter ] !== undefined )
                    texture.minFilter = THREE[ textureJSON.minFilter ];

                if ( THREE[ textureJSON.magFilter ] !== undefined )
                    texture.magFilter = THREE[ textureJSON.magFilter ];

                if ( textureJSON.anisotropy ) texture.anisotropy = textureJSON.anisotropy;

                if ( textureJSON.repeat ) {

                    texture.repeat.set( textureJSON.repeat[ 0 ], textureJSON.repeat[ 1 ] );

                    if ( textureJSON.repeat[ 0 ] !== 1 ) texture.wrapS = THREE.RepeatWrapping;
                    if ( textureJSON.repeat[ 1 ] !== 1 ) texture.wrapT = THREE.RepeatWrapping;

                }

                if ( textureJSON.offset ) {

                    texture.offset.set( textureJSON.offset[ 0 ], textureJSON.offset[ 1 ] );

                }

                // handle wrap after repeat so that default repeat can be overriden

                if ( textureJSON.wrap ) {

                    var wrapMap = {
                        "repeat": THREE.RepeatWrapping,
                        "mirror": THREE.MirroredRepeatWrapping
                    }

                    if ( wrapMap[ textureJSON.wrap[ 0 ] ] !== undefined ) texture.wrapS = wrapMap[ textureJSON.wrap[ 0 ] ];
                    if ( wrapMap[ textureJSON.wrap[ 1 ] ] !== undefined ) texture.wrapT = wrapMap[ textureJSON.wrap[ 1 ] ];

                }

            }

            result.textures[ textureID ] = texture;

        }

        // materials

        var matID, matJSON;
        var parID;

        for ( matID in data.materials ) {

            matJSON = data.materials[ matID ];

            for ( parID in matJSON.parameters ) {

                if ( parID === "envMap" || parID === "map" || parID === "lightMap" || parID === "bumpMap" || parID === "normalMap" || parID === "alphaMap" ) {

                    matJSON.parameters[ parID ] = result.textures[ matJSON.parameters[ parID ] ];

                } else if ( parID === "shading" ) {

                    matJSON.parameters[ parID ] = ( matJSON.parameters[ parID ] === "flat" ) ? THREE.FlatShading : THREE.SmoothShading;

                } else if ( parID === "side" ) {

                    if ( matJSON.parameters[ parID ] == "double" ) {

                        matJSON.parameters[ parID ] = THREE.DoubleSide;

                    } else if ( matJSON.parameters[ parID ] == "back" ) {

                        matJSON.parameters[ parID ] = THREE.BackSide;

                    } else {

                        matJSON.parameters[ parID ] = THREE.FrontSide;

                    }

                } else if ( parID === "blending" ) {

                    matJSON.parameters[ parID ] = matJSON.parameters[ parID ] in THREE ? THREE[ matJSON.parameters[ parID ] ] : THREE.NormalBlending;

                } else if ( parID === "combine" ) {

                    matJSON.parameters[ parID ] = matJSON.parameters[ parID ] in THREE ? THREE[ matJSON.parameters[ parID ] ] : THREE.MultiplyOperation;

                } else if ( parID === "vertexColors" ) {

                    if ( matJSON.parameters[ parID ] == "face" ) {

                        matJSON.parameters[ parID ] = THREE.FaceColors;

                        // default to vertex colors if "vertexColors" is anything else face colors or 0 / null / false

                    } else if ( matJSON.parameters[ parID ] ) {

                        matJSON.parameters[ parID ] = THREE.VertexColors;

                    }

                } else if ( parID === "wrapRGB" ) {

                    var v3 = matJSON.parameters[ parID ];
                    matJSON.parameters[ parID ] = new THREE.Vector3( v3[ 0 ], v3[ 1 ], v3[ 2 ] );

                } else if ( parID === "normalScale" ) {

                    var v2 = matJSON.parameters[ parID ];
                    matJSON.parameters[ parID ] = new THREE.Vector2( v2[ 0 ], v2[ 1 ] );

                }

            }

            if ( matJSON.parameters.opacity !== undefined && matJSON.parameters.opacity < 1.0 ) {

                matJSON.parameters.transparent = true;

            }

            material = new THREE[ matJSON.type ]( matJSON.parameters );
            material.name = matID;

            result.materials[ matID ] = material;

        }

        // second pass through all materials to initialize MeshFaceMaterials
        // that could be referring to other materials out of order

        for ( matID in data.materials ) {

            matJSON = data.materials[ matID ];

            if ( matJSON.parameters.materials ) {

                var materialArray = [];

                for ( var i = 0; i < matJSON.parameters.materials.length; i ++ ) {

                    var label = matJSON.parameters.materials[ i ];
                    materialArray.push( result.materials[ label ] );

                }

                result.materials[ matID ].materials = materialArray;

            }

        }

        // objects ( synchronous init of procedural primitives )

        handle_objects();

        // defaults

        if ( result.cameras && data.defaults.camera ) {

            result.currentCamera = result.cameras[ data.defaults.camera ];

        }

        if ( result.fogs && data.defaults.fog ) {

            result.scene.fog = result.fogs[ data.defaults.fog ];

        }

        // synchronous callback

        scope.callbackSync( result );

        // just in case there are no async elements

        async_callback_gate();

    }

}
/**
 * @author aleeper / http://adamleeper.com/
 * @author mrdoob / http://mrdoob.com/
 * @author gero3 / https://github.com/gero3
 *
 * Description: A THREE loader for STL ASCII files, as created by Solidworks and other CAD programs.
 *
 * Supports both binary and ASCII encoded files, with automatic detection of type.
 *
 * Limitations:
 *  Binary decoding supports "Magics" color format (http://en.wikipedia.org/wiki/STL_(file_format)#Color_in_binary_STL).
 *  There is perhaps some question as to how valid it is to always assume little-endian-ness.
 *  ASCII decoding assumes file is UTF-8. Seems to work for the examples...
 *
 * Usage:
 *  var loader = new THREE.STLLoader();
 *  loader.load( './models/stl/slotted_disk.stl', function ( geometry ) {
 *    scene.add( new THREE.Mesh( geometry ) );
 *  });
 *
 * For binary STLs geometry might contain colors for vertices. To use it:
 *  // use the same code to load STL as above
 *  if (geometry.hasColors) {
 *    material = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: THREE.VertexColors });
 *  } else { .... }
 *  var mesh = new THREE.Mesh( geometry, material );
 */


THREE.STLLoader = function ( manager ) {

    this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.STLLoader.prototype = {

    constructor: THREE.STLLoader,

    load: function ( url, onLoad, onProgress, onError ) {

        var scope = this;

        var loader = new THREE.XHRLoader( scope.manager );
        loader.setCrossOrigin( this.crossOrigin );
        loader.setResponseType('arraybuffer');
        loader.load( url, function ( text ) {

            onLoad( scope.parse( text ) );

        }, onProgress, onError );

    },

    parse: function ( data ) {

        var isBinary = function () {

            var expect, face_size, n_faces, reader;
            reader = new DataView( binData );
            face_size = (32 / 8 * 3) + ((32 / 8 * 3) * 3) + (16 / 8);
            n_faces = reader.getUint32(80,true);
            expect = 80 + (32 / 8) + (n_faces * face_size);

            if ( expect === reader.byteLength ) {

                return true;

            }

            // some binary files will have different size from expected,
            // checking characters higher than ASCII to confirm is binary
            var fileLength = reader.byteLength;
            for ( var index = 0; index < fileLength; index ++ ) {

                if ( reader.getUint8(index, false) > 127 ) {

                    return true;

                }

            }

            return false;

        };

        var binData = this.ensureBinary( data );

        return isBinary()
            ? this.parseBinary( binData )
            : this.parseASCII( this.ensureString( data ) );

    },

    parseBinary: function ( data ) {

        var reader = new DataView( data );
        var faces = reader.getUint32( 80, true );

        var r, g, b, hasColors = false, colors;
        var defaultR, defaultG, defaultB, alpha;

        // process STL header
        // check for default color in header ("COLOR=rgba" sequence).

        for ( var index = 0; index < 80 - 10; index ++ ) {

            if ((reader.getUint32(index, false) == 0x434F4C4F /*COLO*/) &&
                (reader.getUint8(index + 4) == 0x52 /*'R'*/) &&
                (reader.getUint8(index + 5) == 0x3D /*'='*/)) {

                hasColors = true;
                colors = new Float32Array( faces * 3 * 3);

                defaultR = reader.getUint8(index + 6) / 255;
                defaultG = reader.getUint8(index + 7) / 255;
                defaultB = reader.getUint8(index + 8) / 255;
                alpha = reader.getUint8(index + 9) / 255;
            }
        }

        var dataOffset = 84;
        var faceLength = 12 * 4 + 2;

        var offset = 0;

        var geometry = new THREE.BufferGeometry();

        var vertices = new Float32Array( faces * 3 * 3 );
        var normals = new Float32Array( faces * 3 * 3 );

        for ( var face = 0; face < faces; face ++ ) {

            var start = dataOffset + face * faceLength;
            var normalX = reader.getFloat32(start, true);
            var normalY = reader.getFloat32(start + 4, true);
            var normalZ = reader.getFloat32(start + 8, true);

            if (hasColors) {

                var packedColor = reader.getUint16(start + 48, true);

                if ((packedColor & 0x8000) === 0) { // facet has its own unique color

                    r = (packedColor & 0x1F) / 31;
                    g = ((packedColor >> 5) & 0x1F) / 31;
                    b = ((packedColor >> 10) & 0x1F) / 31;
                } else {

                    r = defaultR;
                    g = defaultG;
                    b = defaultB;
                }
            }

            for ( var i = 1; i <= 3; i ++ ) {

                var vertexstart = start + i * 12;

                vertices[ offset     ] = reader.getFloat32( vertexstart, true );
                vertices[ offset + 1 ] = reader.getFloat32( vertexstart + 4, true );
                vertices[ offset + 2 ] = reader.getFloat32( vertexstart + 8, true );

                normals[ offset     ] = normalX;
                normals[ offset + 1 ] = normalY;
                normals[ offset + 2 ] = normalZ;

                if (hasColors) {
                    colors[ offset     ] = r;
                    colors[ offset + 1 ] = g;
                    colors[ offset + 2 ] = b;
                }

                offset += 3;

            }

        }

        geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        geometry.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );

        if (hasColors) {
            geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
            geometry.hasColors = true;
            geometry.alpha = alpha;
        }

        return geometry;

    },

    parseASCII: function ( data ) {

        var geometry, length, normal, patternFace, patternNormal, patternVertex, result, text;
        geometry = new THREE.Geometry();
        patternFace = /facet([\s\S]*?)endfacet/g;

        while ( ( result = patternFace.exec( data ) ) !== null ) {

            text = result[0];
            patternNormal = /normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;

            while ( ( result = patternNormal.exec( text ) ) !== null ) {

                normal = new THREE.Vector3( parseFloat( result[ 1 ] ), parseFloat( result[ 3 ] ), parseFloat( result[ 5 ] ) );

            }

            patternVertex = /vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;

            while ( ( result = patternVertex.exec( text ) ) !== null ) {

                geometry.vertices.push( new THREE.Vector3( parseFloat( result[ 1 ] ), parseFloat( result[ 3 ] ), parseFloat( result[ 5 ] ) ) );

            }

            length = geometry.vertices.length;

            geometry.faces.push( new THREE.Face3( length - 3, length - 2, length - 1, normal ) );

        }

        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();

        return geometry;

    },

    ensureString: function ( buf ) {

        if (typeof buf !== "string"){
            var array_buffer = new Uint8Array(buf);
            var str = '';
            for(var i = 0; i < buf.byteLength; i++) {
                str += String.fromCharCode(array_buffer[i]); // implicitly assumes little-endian
            }
            return str;
        } else {
            return buf;
        }

    },

    ensureBinary: function ( buf ) {

        if (typeof buf === "string"){
            var array_buffer = new Uint8Array(buf.length);
            for(var i = 0; i < buf.length; i++) {
                array_buffer[i] = buf.charCodeAt(i) & 0xff; // implicitly assumes little-endian
            }
            return array_buffer.buffer || array_buffer;
        } else {
            return buf;
        }

    }

};

if ( typeof DataView === 'undefined'){

    DataView = function(buffer, byteOffset, byteLength){

        this.buffer = buffer;
        this.byteOffset = byteOffset || 0;
        this.byteLength = byteLength || buffer.byteLength || buffer.length;
        this._isString = typeof buffer === "string";

    }

    DataView.prototype = {

        _getCharCodes:function(buffer,start,length){
            start = start || 0;
            length = length || buffer.length;
            var end = start + length;
            var codes = [];
            for (var i = start; i < end; i++) {
                codes.push(buffer.charCodeAt(i) & 0xff);
            }
            return codes;
        },

        _getBytes: function (length, byteOffset, littleEndian) {

            var result;

            // Handle the lack of endianness
            if (littleEndian === undefined) {

                littleEndian = this._littleEndian;

            }

            // Handle the lack of byteOffset
            if (byteOffset === undefined) {

                byteOffset = this.byteOffset;

            } else {

                byteOffset = this.byteOffset + byteOffset;

            }

            if (length === undefined) {

                length = this.byteLength - byteOffset;

            }

            // Error Checking
            if (typeof byteOffset !== 'number') {

                throw new TypeError('DataView byteOffset is not a number');

            }

            if (length < 0 || byteOffset + length > this.byteLength) {

                throw new Error('DataView length or (byteOffset+length) value is out of bounds');

            }

            if (this.isString){

                result = this._getCharCodes(this.buffer, byteOffset, byteOffset + length);

            } else {

                result = this.buffer.slice(byteOffset, byteOffset + length);

            }

            if (!littleEndian && length > 1) {

                if (!(result instanceof Array)) {

                    result = Array.prototype.slice.call(result);

                }

                result.reverse();
            }

            return result;

        },

        // Compatibility functions on a String Buffer

        getFloat64: function (byteOffset, littleEndian) {

            var b = this._getBytes(8, byteOffset, littleEndian),

                sign = 1 - (2 * (b[7] >> 7)),
                exponent = ((((b[7] << 1) & 0xff) << 3) | (b[6] >> 4)) - ((1 << 10) - 1),

            // Binary operators such as | and << operate on 32 bit values, using + and Math.pow(2) instead
                mantissa = ((b[6] & 0x0f) * Math.pow(2, 48)) + (b[5] * Math.pow(2, 40)) + (b[4] * Math.pow(2, 32)) +
                    (b[3] * Math.pow(2, 24)) + (b[2] * Math.pow(2, 16)) + (b[1] * Math.pow(2, 8)) + b[0];

            if (exponent === 1024) {
                if (mantissa !== 0) {
                    return NaN;
                } else {
                    return sign * Infinity;
                }
            }

            if (exponent === -1023) { // Denormalized
                return sign * mantissa * Math.pow(2, -1022 - 52);
            }

            return sign * (1 + mantissa * Math.pow(2, -52)) * Math.pow(2, exponent);

        },

        getFloat32: function (byteOffset, littleEndian) {

            var b = this._getBytes(4, byteOffset, littleEndian),

                sign = 1 - (2 * (b[3] >> 7)),
                exponent = (((b[3] << 1) & 0xff) | (b[2] >> 7)) - 127,
                mantissa = ((b[2] & 0x7f) << 16) | (b[1] << 8) | b[0];

            if (exponent === 128) {
                if (mantissa !== 0) {
                    return NaN;
                } else {
                    return sign * Infinity;
                }
            }

            if (exponent === -127) { // Denormalized
                return sign * mantissa * Math.pow(2, -126 - 23);
            }

            return sign * (1 + mantissa * Math.pow(2, -23)) * Math.pow(2, exponent);
        },

        getInt32: function (byteOffset, littleEndian) {
            var b = this._getBytes(4, byteOffset, littleEndian);
            return (b[3] << 24) | (b[2] << 16) | (b[1] << 8) | b[0];
        },

        getUint32: function (byteOffset, littleEndian) {
            return this.getInt32(byteOffset, littleEndian) >>> 0;
        },

        getInt16: function (byteOffset, littleEndian) {
            return (this.getUint16(byteOffset, littleEndian) << 16) >> 16;
        },

        getUint16: function (byteOffset, littleEndian) {
            var b = this._getBytes(2, byteOffset, littleEndian);
            return (b[1] << 8) | b[0];
        },

        getInt8: function (byteOffset) {
            return (this.getUint8(byteOffset) << 24) >> 24;
        },

        getUint8: function (byteOffset) {
            return this._getBytes(1, byteOffset)[0];
        }

    };

}
/**
 * Loader for UTF8 version2 (after r51) encoded models generated by:
 *	http://code.google.com/p/webgl-loader/
 *
 * Code to load/decompress mesh is taken from r100 of this webgl-loader
 */

THREE.UTF8Loader = function () {};

/**
 * Load UTF8 encoded model
 * @param jsonUrl - URL from which to load json containing information about model
 * @param callback - Callback(THREE.Object3D) on successful loading of model
 * @param options - options on how to load model (see THREE.MTLLoader.MaterialCreator for basic options)
 *                  Additional options include
 *                   geometryBase: Base url from which to load referenced geometries
 *                   materialBase: Base url from which to load referenced textures
 */

THREE.UTF8Loader.prototype.load = function ( jsonUrl, callback, options ) {

    this.downloadModelJson( jsonUrl, callback, options );

};

// BufferGeometryCreator

THREE.UTF8Loader.BufferGeometryCreator = function () {
};

THREE.UTF8Loader.BufferGeometryCreator.prototype.create = function ( attribArray, indices ) {

    var ntris = indices.length / 3;

    var geometry = new THREE.BufferGeometry();

    var positions = new Float32Array( ntris * 3 * 3 );
    var normals = new Float32Array( ntris * 3 * 3 );
    var uvs = new Float32Array( ntris * 3 * 2 );

    var i, j, offset;
    var x, y, z;
    var u, v;

    var end = attribArray.length;
    var stride = 8;

    // extract positions

    j = 0;
    offset = 0;

    for( i = offset; i < end; i += stride ) {

        x = attribArray[ i ];
        y = attribArray[ i + 1 ];
        z = attribArray[ i + 2 ];

        positions[ j++ ] = x;
        positions[ j++ ] = y;
        positions[ j++ ] = z;

    }

    // extract uvs

    j = 0;
    offset = 3;

    for( i = offset; i < end; i += stride ) {

        u = attribArray[ i ];
        v = attribArray[ i + 1 ];

        uvs[ j++ ] = u;
        uvs[ j++ ] = v;

    }

    // extract normals

    j = 0;
    offset = 5;

    for( i = offset; i < end; i += stride ) {

        x = attribArray[ i ];
        y = attribArray[ i + 1 ];
        z = attribArray[ i + 2 ];

        normals[ j++ ] = x;
        normals[ j++ ] = y;
        normals[ j++ ] = z;

    }

    geometry.addAttribute( 'index', new THREE.BufferAttribute( indices, 1 ) );
    geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
    geometry.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
    geometry.addAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );

    geometry.offsets.push( { start: 0, count: indices.length, index: 0 } );

    geometry.computeBoundingSphere();

    return geometry;

};


// UTF-8 decoder from webgl-loader (r100)
// http://code.google.com/p/webgl-loader/

// Model manifest description. Contains objects like:
// name: {
//   materials: { 'material_name': { ... } ... },
//   decodeParams: {
//     decodeOffsets: [ ... ],
//     decodeScales: [ ... ],
//   },
//   urls: {
//     'url': [
//       { material: 'material_name',
//         attribRange: [#, #],
//         indexRange: [#, #],
//         names: [ 'object names' ... ],
//         lengths: [#, #, # ... ]
//       }
//     ],
//     ...
//   }
// }

var DEFAULT_DECODE_PARAMS = {

    decodeOffsets: [-4095, -4095, -4095, 0, 0, -511, -511, -511],
    decodeScales: [1/8191, 1/8191, 1/8191, 1/1023, 1/1023, 1/1023, 1/1023, 1/1023]

    // TODO: normal decoding? (see walt.js)
    // needs to know: input, output (from vertex format!)
    //
    // Should split attrib/index.
    // 1) Decode position and non-normal attributes.
    // 2) Decode indices, computing normals
    // 3) Maybe normalize normals? Only necessary for refinement, or fixed?
    // 4) Maybe refine normals? Should this be part of regular refinement?
    // 5) Morphing

};

// Triangle strips!

// TODO: will it be an optimization to specialize this method at
// runtime for different combinations of stride, decodeOffset and
// decodeScale?

THREE.UTF8Loader.prototype.decompressAttribsInner_ = function ( str, inputStart, inputEnd,
                                                                output, outputStart, stride,
                                                                decodeOffset, decodeScale ) {

    var prev = 0;

    for ( var j = inputStart; j < inputEnd; j ++ ) {

        var code = str.charCodeAt( j );
        prev += ( code >> 1 ) ^ ( -( code & 1 ) );

        output[ outputStart ] = decodeScale * ( prev + decodeOffset );
        outputStart += stride;

    }

};

THREE.UTF8Loader.prototype.decompressIndices_ = function( str, inputStart, numIndices,
                                                          output, outputStart ) {

    var highest = 0;

    for ( var i = 0; i < numIndices; i ++ ) {

        var code = str.charCodeAt( inputStart ++ );

        output[ outputStart ++ ] = highest - code;

        if ( code === 0 ) {

            highest ++;

        }

    }

};

THREE.UTF8Loader.prototype.decompressAABBs_ = function ( str, inputStart, numBBoxen,
                                                         decodeOffsets, decodeScales ) {
    var numFloats = 6 * numBBoxen;

    var inputEnd = inputStart + numFloats;
    var outputStart = 0;

    var bboxen = new Float32Array( numFloats );

    for ( var i = inputStart; i < inputEnd; i += 6 ) {

        var minX = str.charCodeAt(i + 0) + decodeOffsets[0];
        var minY = str.charCodeAt(i + 1) + decodeOffsets[1];
        var minZ = str.charCodeAt(i + 2) + decodeOffsets[2];

        var radiusX = (str.charCodeAt(i + 3) + 1) >> 1;
        var radiusY = (str.charCodeAt(i + 4) + 1) >> 1;
        var radiusZ = (str.charCodeAt(i + 5) + 1) >> 1;

        bboxen[ outputStart++ ] = decodeScales[0] * (minX + radiusX);
        bboxen[ outputStart++ ] = decodeScales[1] * (minY + radiusY);
        bboxen[ outputStart++ ] = decodeScales[2] * (minZ + radiusZ);

        bboxen[ outputStart++ ] = decodeScales[0] * radiusX;
        bboxen[ outputStart++ ] = decodeScales[1] * radiusY;
        bboxen[ outputStart++ ] = decodeScales[2] * radiusZ;

    }

    return bboxen;

};

THREE.UTF8Loader.prototype.decompressMesh =  function ( str, meshParams, decodeParams, name, idx, callback ) {

    // Extract conversion parameters from attribArrays.

    var stride = decodeParams.decodeScales.length;

    var decodeOffsets = decodeParams.decodeOffsets;
    var decodeScales = decodeParams.decodeScales;

    var attribStart = meshParams.attribRange[0];
    var numVerts = meshParams.attribRange[1];

    // Decode attributes.

    var inputOffset = attribStart;
    var attribsOut = new Float32Array( stride * numVerts );

    for (var j = 0; j < stride; j ++ ) {

        var end = inputOffset + numVerts;

        var decodeScale = decodeScales[j];

        if ( decodeScale ) {

            // Assume if decodeScale is never set, simply ignore the
            // attribute.

            this.decompressAttribsInner_( str, inputOffset, end,
                attribsOut, j, stride,
                decodeOffsets[j], decodeScale );
        }

        inputOffset = end;

    }

    var indexStart = meshParams.indexRange[ 0 ];
    var numIndices = 3 * meshParams.indexRange[ 1 ];

    var indicesOut = new Uint16Array( numIndices );

    this.decompressIndices_( str, inputOffset, numIndices, indicesOut, 0 );

    // Decode bboxen.

    var bboxen = undefined;
    var bboxOffset = meshParams.bboxes;

    if ( bboxOffset ) {

        bboxen = this.decompressAABBs_( str, bboxOffset, meshParams.names.length, decodeOffsets, decodeScales );
    }

    callback( name, idx, attribsOut, indicesOut, bboxen, meshParams );

};

THREE.UTF8Loader.prototype.copyAttrib = function ( stride, attribsOutFixed, lastAttrib, index ) {

    for ( var j = 0; j < stride; j ++ ) {

        lastAttrib[ j ] = attribsOutFixed[ stride * index + j ];

    }

};

THREE.UTF8Loader.prototype.decodeAttrib2 = function ( str, stride, decodeOffsets, decodeScales, deltaStart,
                                                      numVerts, attribsOut, attribsOutFixed, lastAttrib,
                                                      index ) {

    for ( var j = 0; j < 5; j ++ ) {

        var code = str.charCodeAt( deltaStart + numVerts*j + index );
        var delta = ( code >> 1) ^ (-(code & 1));

        lastAttrib[ j ] += delta;
        attribsOutFixed[ stride * index + j ] = lastAttrib[ j ];
        attribsOut[ stride * index + j ] = decodeScales[ j ] * ( lastAttrib[ j ] + decodeOffsets[ j ] );
    }

};

THREE.UTF8Loader.prototype.accumulateNormal = function ( i0, i1, i2, attribsOutFixed, crosses ) {

    var p0x = attribsOutFixed[ 8*i0 ];
    var p0y = attribsOutFixed[ 8*i0 + 1 ];
    var p0z = attribsOutFixed[ 8*i0 + 2 ];

    var p1x = attribsOutFixed[ 8*i1 ];
    var p1y = attribsOutFixed[ 8*i1 + 1 ];
    var p1z = attribsOutFixed[ 8*i1 + 2 ];

    var p2x = attribsOutFixed[ 8*i2 ];
    var p2y = attribsOutFixed[ 8*i2 + 1 ];
    var p2z = attribsOutFixed[ 8*i2 + 2 ];

    p1x -= p0x;
    p1y -= p0y;
    p1z -= p0z;

    p2x -= p0x;
    p2y -= p0y;
    p2z -= p0z;

    p0x = p1y*p2z - p1z*p2y;
    p0y = p1z*p2x - p1x*p2z;
    p0z = p1x*p2y - p1y*p2x;

    crosses[ 3*i0 ]     += p0x;
    crosses[ 3*i0 + 1 ] += p0y;
    crosses[ 3*i0 + 2 ] += p0z;

    crosses[ 3*i1 ]     += p0x;
    crosses[ 3*i1 + 1 ] += p0y;
    crosses[ 3*i1 + 2 ] += p0z;

    crosses[ 3*i2 ]     += p0x;
    crosses[ 3*i2 + 1 ] += p0y;
    crosses[ 3*i2 + 2 ] += p0z;

};

THREE.UTF8Loader.prototype.decompressMesh2 = function( str, meshParams, decodeParams, name, idx, callback ) {

    var MAX_BACKREF = 96;

    // Extract conversion parameters from attribArrays.

    var stride = decodeParams.decodeScales.length;

    var decodeOffsets = decodeParams.decodeOffsets;
    var decodeScales = decodeParams.decodeScales;

    var deltaStart = meshParams.attribRange[ 0 ];
    var numVerts = meshParams.attribRange[ 1 ];

    var codeStart = meshParams.codeRange[ 0 ];
    var codeLength = meshParams.codeRange[ 1 ];

    var numIndices = 3 * meshParams.codeRange[ 2 ];

    var indicesOut = new Uint16Array( numIndices );

    var crosses = new Int32Array( 3 * numVerts );

    var lastAttrib = new Uint16Array( stride );

    var attribsOutFixed = new Uint16Array( stride * numVerts );
    var attribsOut = new Float32Array( stride * numVerts );

    var highest = 0;
    var outputStart = 0;

    for ( var i = 0; i < numIndices; i += 3 ) {

        var code = str.charCodeAt( codeStart ++ );

        var max_backref = Math.min( i, MAX_BACKREF );

        if ( code < max_backref ) {

            // Parallelogram

            var winding = code % 3;
            var backref = i - ( code - winding );
            var i0, i1, i2;

            switch ( winding ) {

                case 0:

                    i0 = indicesOut[ backref + 2 ];
                    i1 = indicesOut[ backref + 1 ];
                    i2 = indicesOut[ backref + 0 ];
                    break;

                case 1:

                    i0 = indicesOut[ backref + 0 ];
                    i1 = indicesOut[ backref + 2 ];
                    i2 = indicesOut[ backref + 1 ];
                    break;

                case 2:

                    i0 = indicesOut[ backref + 1 ];
                    i1 = indicesOut[ backref + 0 ];
                    i2 = indicesOut[ backref + 2 ];
                    break;

            }

            indicesOut[ outputStart ++ ] = i0;
            indicesOut[ outputStart ++ ] = i1;

            code = str.charCodeAt( codeStart ++ );

            var index = highest - code;
            indicesOut[ outputStart ++ ] = index;

            if ( code === 0 ) {

                for (var j = 0; j < 5; j ++ ) {

                    var deltaCode = str.charCodeAt( deltaStart + numVerts * j + highest );

                    var prediction = ((deltaCode >> 1) ^ (-(deltaCode & 1))) +
                        attribsOutFixed[stride*i0 + j] +
                        attribsOutFixed[stride*i1 + j] -
                        attribsOutFixed[stride*i2 + j];

                    lastAttrib[j] = prediction;

                    attribsOutFixed[ stride * highest + j ] = prediction;
                    attribsOut[ stride * highest + j ] = decodeScales[ j ] * ( prediction + decodeOffsets[ j ] );

                }

                highest ++;

            } else {

                this.copyAttrib( stride, attribsOutFixed, lastAttrib, index );

            }

            this.accumulateNormal( i0, i1, index, attribsOutFixed, crosses );

        } else {

            // Simple

            var index0 = highest - ( code - max_backref );

            indicesOut[ outputStart ++ ] = index0;

            if ( code === max_backref ) {

                this.decodeAttrib2( str, stride, decodeOffsets, decodeScales, deltaStart,
                    numVerts, attribsOut, attribsOutFixed, lastAttrib,
                    highest ++ );

            } else {

                this.copyAttrib(stride, attribsOutFixed, lastAttrib, index0);

            }

            code = str.charCodeAt( codeStart ++ );

            var index1 = highest - code;
            indicesOut[ outputStart ++ ] = index1;

            if ( code === 0 ) {

                this.decodeAttrib2( str, stride, decodeOffsets, decodeScales, deltaStart,
                    numVerts, attribsOut, attribsOutFixed, lastAttrib,
                    highest ++ );

            } else {

                this.copyAttrib( stride, attribsOutFixed, lastAttrib, index1 );

            }

            code = str.charCodeAt( codeStart ++ );

            var index2 = highest - code;
            indicesOut[ outputStart ++ ] = index2;

            if ( code === 0 ) {

                for ( var j = 0; j < 5; j ++ ) {

                    lastAttrib[ j ] = ( attribsOutFixed[ stride * index0 + j ] + attribsOutFixed[ stride * index1 + j ] ) / 2;

                }

                this.decodeAttrib2( str, stride, decodeOffsets, decodeScales, deltaStart,
                    numVerts, attribsOut, attribsOutFixed, lastAttrib,
                    highest ++ );

            } else {

                this.copyAttrib( stride, attribsOutFixed, lastAttrib, index2 );

            }

            this.accumulateNormal( index0, index1, index2, attribsOutFixed, crosses );

        }

    }

    for ( var i = 0; i < numVerts; i ++ ) {

        var nx = crosses[ 3*i ];
        var ny = crosses[ 3*i + 1 ];
        var nz = crosses[ 3*i + 2 ];

        var norm = 511.0 / Math.sqrt( nx*nx + ny*ny + nz*nz );

        var cx = str.charCodeAt( deltaStart + 5*numVerts + i );
        var cy = str.charCodeAt( deltaStart + 6*numVerts + i );
        var cz = str.charCodeAt( deltaStart + 7*numVerts + i );

        attribsOut[ stride*i + 5 ] = norm*nx + ((cx >> 1) ^ (-(cx & 1)));
        attribsOut[ stride*i + 6 ] = norm*ny + ((cy >> 1) ^ (-(cy & 1)));
        attribsOut[ stride*i + 7 ] = norm*nz + ((cz >> 1) ^ (-(cz & 1)));
    }

    callback( name, idx, attribsOut, indicesOut, undefined, meshParams );

};

THREE.UTF8Loader.prototype.downloadMesh = function ( path, name, meshEntry, decodeParams, callback ) {

    var loader = this;
    var idx = 0;

    function onprogress( req, e ) {

        while ( idx < meshEntry.length ) {

            var meshParams = meshEntry[ idx ];
            var indexRange = meshParams.indexRange;

            if ( indexRange ) {

                var meshEnd = indexRange[ 0 ] + 3 * indexRange[ 1 ];

                if ( req.responseText.length < meshEnd ) break;

                loader.decompressMesh( req.responseText, meshParams, decodeParams, name, idx, callback );

            } else {

                var codeRange = meshParams.codeRange;
                var meshEnd = codeRange[ 0 ] + codeRange[ 1 ];

                if ( req.responseText.length < meshEnd ) break;

                loader.decompressMesh2( req.responseText, meshParams, decodeParams, name, idx, callback );
            }

            ++idx;

        }

    };

    getHttpRequest( path, function( req, e ) {

        if ( req.status === 200 || req.status === 0 ) {

            onprogress( req, e );

        }

        // TODO: handle errors.

    }, onprogress );

};

THREE.UTF8Loader.prototype.downloadMeshes = function ( path, meshUrlMap, decodeParams, callback ) {

    for ( var url in meshUrlMap ) {

        var meshEntry = meshUrlMap[url];
        this.downloadMesh( path + url, url, meshEntry, decodeParams, callback );

    }

};

THREE.UTF8Loader.prototype.createMeshCallback = function( materialBaseUrl, loadModelInfo, allDoneCallback ) {

    var nCompletedUrls = 0;
    var nExpectedUrls = 0;

    var expectedMeshesPerUrl = {};
    var decodedMeshesPerUrl = {};

    var modelParts = {};

    var meshUrlMap = loadModelInfo.urls;

    for ( var url in meshUrlMap ) {

        expectedMeshesPerUrl[ url ] = meshUrlMap[ url ].length;
        decodedMeshesPerUrl[ url ] = 0;

        nExpectedUrls ++;

        modelParts[ url ] = new THREE.Object3D();

    }

    var model = new THREE.Object3D();

    // Prepare materials first...

    var materialCreator = new THREE.MTLLoader.MaterialCreator( materialBaseUrl, loadModelInfo.options );
    materialCreator.setMaterials( loadModelInfo.materials );

    materialCreator.preload();

    // Create callback for creating mesh parts

    var bufferGeometryCreator = new THREE.UTF8Loader.BufferGeometryCreator();

    var meshCallback = function( name, idx, attribArray, indexArray, bboxen, meshParams ) {

        // Got ourselves a new mesh

        // name identifies this part of the model (url)
        // idx is the mesh index of this mesh of the part
        // attribArray defines the vertices
        // indexArray defines the faces
        // bboxen defines the bounding box
        // meshParams contains the material info

        var geometry = bufferGeometryCreator.create( attribArray, indexArray );
        var material = materialCreator.create( meshParams.material );

        var mesh = new THREE.Mesh( geometry, material );
        modelParts[ name ].add( mesh );

        //model.add(new THREE.Mesh(geometry, material));

        decodedMeshesPerUrl[ name ] ++;

        if ( decodedMeshesPerUrl[ name ] === expectedMeshesPerUrl[ name ] ) {

            nCompletedUrls ++;

            model.add( modelParts[ name ] );

            if ( nCompletedUrls === nExpectedUrls ) {

                // ALL DONE!!!

                allDoneCallback( model );

            }

        }

    };

    return meshCallback;

};

THREE.UTF8Loader.prototype.downloadModel = function ( geometryBase, materialBase, model, callback ) {

    var meshCallback = this.createMeshCallback( materialBase, model, callback );
    this.downloadMeshes( geometryBase, model.urls, model.decodeParams, meshCallback );

};

THREE.UTF8Loader.prototype.downloadModelJson = function ( jsonUrl, callback, options ) {

    getJsonRequest( jsonUrl, function( loaded ) {

        if ( ! loaded.decodeParams ) {

            if ( options && options.decodeParams ) {

                loaded.decodeParams = options.decodeParams;

            } else {

                loaded.decodeParams = DEFAULT_DECODE_PARAMS;

            }

        }

        loaded.options = options;

        var geometryBase = jsonUrl.substr( 0, jsonUrl.lastIndexOf( "/" ) + 1 );
        var materialBase = geometryBase;

        if ( options && options.geometryBase ) {

            geometryBase = options.geometryBase;

            if ( geometryBase.charAt( geometryBase.length - 1 ) !== "/" ) {

                geometryBase = geometryBase + "/";

            }

        }

        if ( options && options.materialBase ) {

            materialBase = options.materialBase;

            if ( materialBase.charAt( materialBase.length - 1 ) !== "/" ) {

                materialBase = materialBase  + "/";

            }

        }

        this.downloadModel( geometryBase, materialBase, loaded, callback );

    }.bind( this ) );

};

// XMLHttpRequest stuff

function getHttpRequest( url, onload, opt_onprogress ) {

    var LISTENERS = {

        load: function( e ) { onload( req, e ); },
        progress: function( e ) { opt_onprogress( req, e ); }

    };

    var req = new XMLHttpRequest();
    addListeners( req, LISTENERS );

    req.open( 'GET', url, true );
    req.send( null );
}

function getJsonRequest( url, onjson ) {

    getHttpRequest( url,
        function( e ) { onjson( JSON.parse( e.responseText ) ); },
        function() {} );

}

function addListeners( dom, listeners ) {

    // TODO: handle event capture, object binding.

    for ( var key in listeners ) {

        dom.addEventListener( key, listeners[ key ] );

    }
}
/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.VRMLLoader = function () {};

THREE.VRMLLoader.prototype = {

    constructor: THREE.VRMLLoader,

    // for IndexedFaceSet support
    isRecordingPoints: false,
    isRecordingFaces: false,
    points: [],
    indexes : [],

    // for Background support
    isRecordingAngles: false,
    isRecordingColors: false,
    angles: [],
    colors: [],

    recordingFieldname: null,

    load: function ( url, callback ) {

        var scope = this;
        var request = new XMLHttpRequest();

        request.addEventListener( 'load', function ( event ) {

            var object = scope.parse( event.target.responseText );

            scope.dispatchEvent( { type: 'load', content: object } );

            if ( callback ) callback( object );

        }, false );

        request.addEventListener( 'progress', function ( event ) {

            scope.dispatchEvent( { type: 'progress', loaded: event.loaded, total: event.total } );

        }, false );

        request.addEventListener( 'error', function () {

            scope.dispatchEvent( { type: 'error', message: 'Couldn\'t load URL [' + url + ']' } );

        }, false );

        request.open( 'GET', url, true );
        request.send( null );

    },

    parse: function ( data ) {

        var parseV1 = function ( lines, scene ) {

            console.warn( 'VRML V1.0 not supported yet' );

        };

        var parseV2 = function ( lines, scene ) {

            var defines = {};
            var float_pattern = /(\b|\-|\+)([\d\.e]+)/;
            var float3_pattern = /([\d\.\+\-e]+)\s+([\d\.\+\-e]+)\s+([\d\.\+\-e]+)/g;

            /**
             * Interpolates colors a and b following their relative distance
             * expressed by t.
             *
             * @param float a
             * @param float b
             * @param float t
             * @returns {Color}
             */
            var interpolateColors = function(a, b, t) {
                var deltaR = a.r - b.r;
                var deltaG = a.g - b.g;
                var deltaB = a.b - b.b;

                var c = new THREE.Color();

                c.r = a.r - t * deltaR;
                c.g = a.g - t * deltaG;
                c.b = a.b - t * deltaB;

                return c;
            };

            /**
             * Vertically paints the faces interpolating between the
             * specified colors at the specified angels. This is used for the Background
             * node, but could be applied to other nodes with multiple faces as well.
             *
             * When used with the Background node, default is directionIsDown is true if
             * interpolating the skyColor down from the Zenith. When interpolationg up from
             * the Nadir i.e. interpolating the groundColor, the directionIsDown is false.
             *
             * The first angle is never specified, it is the Zenith (0 rad). Angles are specified
             * in radians. The geometry is thought a sphere, but could be anything. The color interpolation
             * is linear along the Y axis in any case.
             *
             * You must specify one more color than you have angles at the beginning of the colors array.
             * This is the color of the Zenith (the top of the shape).
             *
             * @param geometry
             * @param radius
             * @param angles
             * @param colors
             * @param boolean directionIsDown Whether to work bottom up or top down.
             */
            var paintFaces = function (geometry, radius, angles, colors, directionIsDown) {

                var f, n, p, vertexIndex, color;

                var direction = directionIsDown ? 1 : -1;

                var faceIndices = [ 'a', 'b', 'c', 'd' ];

                var coord = [ ], aColor, bColor, t = 1, A = {}, B = {}, applyColor = false, colorIndex;

                for ( var k = 0; k < angles.length; k++ ) {

                    var vec = { };

                    // push the vector at which the color changes
                    vec.y = direction * ( Math.cos( angles[k] ) * radius);

                    vec.x = direction * ( Math.sin( angles[k] ) * radius);

                    coord.push( vec );

                }

                // painting the colors on the faces
                for ( var i = 0; i < geometry.faces.length ; i++ ) {

                    f  = geometry.faces[ i ];

                    n = ( f instanceof THREE.Face3 ) ? 3 : 4;

                    for ( var j = 0; j < n; j++ ) {

                        vertexIndex = f[ faceIndices[ j ] ];

                        p = geometry.vertices[ vertexIndex ];

                        for ( var index = 0; index < colors.length; index++ ) {

                            // linear interpolation between aColor and bColor, calculate proportion
                            // A is previous point (angle)
                            if ( index === 0 ) {

                                A.x = 0;
                                A.y = directionIsDown ? radius : -1 * radius;

                            } else {

                                A.x = coord[ index-1 ].x;
                                A.y = coord[ index-1 ].y;

                            }

                            // B is current point (angle)
                            B = coord[index];

                            if ( undefined !== B ) {
                                // p has to be between the points A and B which we interpolate
                                applyColor = directionIsDown ? p.y <= A.y && p.y > B.y : p.y >= A.y && p.y < B.y;

                                if (applyColor) {

                                    bColor = colors[ index + 1 ];

                                    aColor = colors[ index ];

                                    // below is simple linear interpolation
                                    t = Math.abs( p.y - A.y ) / ( A.y - B.y );

                                    // to make it faster, you can only calculate this if the y coord changes, the color is the same for points with the same y
                                    color = interpolateColors( aColor, bColor, t );

                                    f.vertexColors[ j ] = color;
                                }

                            } else if ( undefined === f.vertexColors[ j ] ) {
                                colorIndex = directionIsDown ? colors.length -1 : 0;
                                f.vertexColors[ j ] = colors[ colorIndex ];

                            }
                        }

                    }

                }
            };

            var parseProperty = function (node, line) {

                var parts = [], part, property = {}, fieldName;

                /**
                 * Expression for matching relevant information, such as a name or value, but not the separators
                 * @type {RegExp}
                 */
                var regex = /[^\s,\[\]]+/g;

                var point, index, angles, colors;

                while (null != ( part = regex.exec(line) ) ) {
                    parts.push(part[0]);
                }

                fieldName = parts[0];


                // trigger several recorders
                switch (fieldName) {
                    case 'skyAngle':
                    case 'groundAngle':
                        this.recordingFieldname = fieldName;
                        this.isRecordingAngles = true;
                        this.angles = [];
                        break;
                    case 'skyColor':
                    case 'groundColor':
                        this.recordingFieldname = fieldName;
                        this.isRecordingColors = true;
                        this.colors = [];
                        break;
                    case 'point':
                        this.recordingFieldname = fieldName;
                        this.isRecordingPoints = true;
                        this.points = [];
                        break;
                    case 'coordIndex':
                        this.recordingFieldname = fieldName;
                        this.isRecordingFaces = true;
                        this.indexes = [];
                        break;
                }

                if (this.isRecordingFaces) {

                    // the parts hold the indexes as strings
                    if (parts.length > 0) {
                        index = [];

                        for (var ind = 0;ind < parts.length; ind++) {

                            // the part should either be positive integer or -1
                            if (!/(-?\d+)/.test( parts[ind]) ) {
                                continue;
                            }

                            // end of current face
                            if (parts[ind] === "-1") {
                                if (index.length > 0) {
                                    this.indexes.push(index);
                                }

                                // start new one
                                index = [];
                            } else {
                                index.push(parseInt( parts[ind]) );
                            }
                        }

                    }

                    // end
                    if (/]/.exec(line)) {
                        this.isRecordingFaces = false;
                        node.coordIndex = this.indexes;
                    }

                } else if (this.isRecordingPoints) {

                    while ( null !== ( parts = float3_pattern.exec(line) ) ) {
                        point = {
                            x: parseFloat(parts[1]),
                            y: parseFloat(parts[2]),
                            z: parseFloat(parts[3])
                        };

                        this.points.push(point);
                    }

                    // end
                    if ( /]/.exec(line) ) {
                        this.isRecordingPoints = false;
                        node.points = this.points;
                    }

                } else if ( this.isRecordingAngles ) {

                    // the parts hold the angles as strings
                    if ( parts.length > 0 ) {

                        for ( var ind = 0;ind < parts.length; ind++ ) {

                            // the part should be a float
                            if ( ! float_pattern.test( parts[ind] ) ) {
                                continue;
                            }

                            this.angles.push( parseFloat( parts[ind] ) );
                        }

                    }

                    // end
                    if ( /]/.exec(line) ) {
                        this.isRecordingAngles = false;
                        node[this.recordingFieldname] = this.angles;
                    }

                } else if (this.isRecordingColors) {

                    while( null !== ( parts = float3_pattern.exec(line) ) ) {

                        color = {
                            r: parseFloat(parts[1]),
                            g: parseFloat(parts[2]),
                            b: parseFloat(parts[3])
                        };

                        this.colors.push(color);

                    }

                    // end
                    if (/]/.exec(line)) {
                        this.isRecordingColors = false;
                        node[this.recordingFieldname] = this.colors;
                    }

                } else if ( parts[parts.length -1] !== 'NULL' && fieldName !== 'children') {

                    switch (fieldName) {

                        case 'diffuseColor':
                        case 'emissiveColor':
                        case 'specularColor':
                        case 'color':

                            if (parts.length != 4) {
                                console.warn('Invalid color format detected for ' + fieldName );
                                break;
                            }

                            property = {
                                r: parseFloat(parts[1]),
                                g: parseFloat(parts[2]),
                                b: parseFloat(parts[3])
                            }

                            break;

                        case 'translation':
                        case 'scale':
                        case 'size':
                            if (parts.length != 4) {
                                console.warn('Invalid vector format detected for ' + fieldName);
                                break;
                            }

                            property = {
                                x: parseFloat(parts[1]),
                                y: parseFloat(parts[2]),
                                z: parseFloat(parts[3])
                            }

                            break;

                        case 'radius':
                        case 'topRadius':
                        case 'bottomRadius':
                        case 'height':
                        case 'transparency':
                        case 'shininess':
                        case 'ambientIntensity':
                            if (parts.length != 2) {
                                console.warn('Invalid single float value specification detected for ' + fieldName);
                                break;
                            }

                            property = parseFloat(parts[1]);

                            break;

                        case 'rotation':
                            if (parts.length != 5) {
                                console.warn('Invalid quaternion format detected for ' + fieldName);
                                break;
                            }

                            property = {
                                x: parseFloat(parts[1]),
                                y: parseFloat(parts[2]),
                                z: parseFloat(parts[3]),
                                w: parseFloat(parts[4])
                            }

                            break;

                        case 'ccw':
                        case 'solid':
                        case 'colorPerVertex':
                        case 'convex':
                            if (parts.length != 2) {
                                console.warn('Invalid format detected for ' + fieldName);
                                break;
                            }

                            property = parts[1] === 'TRUE' ? true : false;

                            break;
                    }

                    node[fieldName] = property;
                }

                return property;
            };

            var getTree = function ( lines ) {

                var tree = { 'string': 'Scene', children: [] };
                var current = tree;
                var matches;
                var specification;

                for ( var i = 0; i < lines.length; i ++ ) {

                    var comment = '';

                    var line = lines[ i ];

                    // omit whitespace only lines
                    if ( null !== ( result = /^\s+?$/g.exec( line ) ) ) {
                        continue;
                    }

                    line = line.trim();

                    // skip empty lines
                    if (line === '') {
                        continue;
                    }

                    if ( /#/.exec( line ) ) {

                        var parts = line.split('#');

                        // discard everything after the #, it is a comment
                        line = parts[0];

                        // well, let's also keep the comment
                        comment = parts[1];
                    }

                    if ( matches = /([^\s]*){1}\s?{/.exec( line ) ) { // first subpattern should match the Node name

                        var block = { 'nodeType' : matches[1], 'string': line, 'parent': current, 'children': [],'comment' : comment};
                        current.children.push( block );
                        current = block;

                        if ( /}/.exec( line ) ) {
                            // example: geometry Box { size 1 1 1 } # all on the same line
                            specification = /{(.*)}/.exec( line )[ 1 ];

                            // todo: remove once new parsing is complete?
                            block.children.push( specification );

                            parseProperty(current, specification);

                            current = current.parent;

                        }

                    } else if ( /}/.exec( line ) ) {

                        current = current.parent;

                    } else if ( line !== '' ) {

                        parseProperty(current, line);
                        // todo: remove once new parsing is complete? we still do not parse geometry and appearance the new way
                        current.children.push( line );

                    }

                }

                return tree;
            }

            var parseNode = function ( data, parent ) {

                // console.log( data );

                if ( typeof data === 'string' ) {

                    if ( /USE/.exec( data ) ) {

                        var defineKey = /USE\s+?(\w+)/.exec( data )[ 1 ];

                        if (undefined == defines[defineKey]) {
                            console.warn(defineKey + ' is not defined.');
                        } else {

                            if ( /appearance/.exec( data ) && defineKey ) {

                                parent.material = defines[ defineKey ].clone();

                            } else if ( /geometry/.exec( data ) && defineKey ) {

                                parent.geometry = defines[ defineKey ].clone();

                                // the solid property is not cloned with clone(), is only needed for VRML loading, so we need to transfer it
                                if (undefined !== defines[ defineKey ].solid && defines[ defineKey ].solid === false) {
                                    parent.geometry.solid = false;
                                    parent.material.side = THREE.DoubleSide;
                                }

                            } else if (defineKey){

                                var object = defines[ defineKey ].clone();
                                parent.add( object );

                            }

                        }

                    }

                    return;

                }

                var object = parent;

                if ( 'Transform' === data.nodeType || 'Group' === data.nodeType ) {

                    object = new THREE.Object3D();

                    if ( /DEF/.exec( data.string ) ) {
                        object.name = /DEF\s+(\w+)/.exec( data.string )[ 1 ];
                        defines[ object.name ] = object;
                    }

                    if ( undefined !== data['translation'] ) {

                        var t = data.translation;

                        object.position.set(t.x, t.y, t.z);

                    }

                    if ( undefined !== data.rotation ) {

                        var r = data.rotation;

                        object.quaternion.setFromAxisAngle( new THREE.Vector3( r.x, r.y, r.z ), r.w );

                    }

                    if ( undefined !== data.scale ) {

                        var s = data.scale;

                        object.scale.set( s.x, s.y, s.z );

                    }

                    parent.add( object );

                } else if ( 'Shape' === data.nodeType ) {

                    object = new THREE.Mesh();

                    if ( /DEF/.exec( data.string ) ) {

                        object.name = /DEF (\w+)/.exec( data.string )[ 1 ];

                        defines[ object.name ] = object;
                    }

                    parent.add( object );

                } else if ( 'Background' === data.nodeType ) {

                    var segments = 20;

                    // sky (full sphere):

                    var radius = 2e4;

                    var skyGeometry = new THREE.SphereGeometry( radius, segments, segments );
                    var skyMaterial = new THREE.MeshBasicMaterial( { fog: false, side: THREE.BackSide } );

                    if ( data.skyColor.length > 1 ) {

                        paintFaces( skyGeometry, radius, data.skyAngle, data.skyColor, true );

                        skyMaterial.vertexColors = THREE.VertexColors

                    } else {

                        var color = data.skyColor[ 0 ];
                        skyMaterial.color.setRGB( color.r, color.b, color.g );

                    }

                    scene.add( new THREE.Mesh( skyGeometry, skyMaterial ) );

                    // ground (half sphere):

                    if ( data.groundColor !== undefined ) {

                        radius = 1.2e4;

                        var groundGeometry = new THREE.SphereGeometry( radius, segments, segments, 0, 2 * Math.PI, 0.5 * Math.PI, 1.5 * Math.PI );
                        var groundMaterial = new THREE.MeshBasicMaterial( { fog: false, side: THREE.BackSide, vertexColors: THREE.VertexColors } );

                        paintFaces( groundGeometry, radius, data.groundAngle, data.groundColor, false );

                        scene.add( new THREE.Mesh( groundGeometry, groundMaterial ) );

                    }

                } else if ( /geometry/.exec( data.string ) ) {

                    if ( 'Box' === data.nodeType ) {

                        var s = data.size;

                        parent.geometry = new THREE.BoxGeometry( s.x, s.y, s.z );

                    } else if ( 'Cylinder' === data.nodeType ) {

                        parent.geometry = new THREE.CylinderGeometry( data.radius, data.radius, data.height );

                    } else if ( 'Cone' === data.nodeType ) {

                        parent.geometry = new THREE.CylinderGeometry( data.topRadius, data.bottomRadius, data.height );

                    } else if ( 'Sphere' === data.nodeType ) {

                        parent.geometry = new THREE.SphereGeometry( data.radius );

                    } else if ( 'IndexedFaceSet' === data.nodeType ) {

                        var geometry = new THREE.Geometry();

                        var indexes;

                        for ( var i = 0, j = data.children.length; i < j; i++ ) {

                            var child = data.children[ i ];

                            var vec;

                            if ( 'Coordinate' === child.nodeType ) {

                                for ( var k = 0, l = child.points.length; k < l; k++ ) {

                                    var point = child.points[ k ];

                                    vec = new THREE.Vector3( point.x, point.y, point.z );

                                    geometry.vertices.push( vec );
                                }

                                break;
                            }
                        }

                        var skip = 0;

                        // read this: http://math.hws.edu/eck/cs424/notes2013/16_Threejs_Advanced.html
                        for ( var i = 0, j = data.coordIndex.length; i < j; i++ ) {

                            indexes = data.coordIndex[i];

                            // vrml support multipoint indexed face sets (more then 3 vertices). You must calculate the composing triangles here
                            skip = 0;

                            // todo: this is the time to check if the faces are ordered ccw or not (cw)

                            // Face3 only works with triangles, but IndexedFaceSet allows shapes with more then three vertices, build them of triangles
                            while ( indexes.length >= 3 && skip < ( indexes.length -2 ) ) {

                                var face = new THREE.Face3(
                                    indexes[0],
                                    indexes[skip + 1],
                                    indexes[skip + 2],
                                    null // normal, will be added later
                                    // todo: pass in the color, if a color index is present
                                );

                                skip++;

                                geometry.faces.push( face );

                            }


                        }

                        if ( false === data.solid ) {
                            parent.material.side = THREE.DoubleSide;
                        }

                        // we need to store it on the geometry for use with defines
                        geometry.solid = data.solid;

                        geometry.computeFaceNormals();
                        //geometry.computeVertexNormals(); // does not show
                        geometry.computeBoundingSphere();

                        // see if it's a define
                        if ( /DEF/.exec( data.string ) ) {
                            geometry.name = /DEF (\w+)/.exec( data.string )[ 1 ];
                            defines[ geometry.name ] = geometry;
                        }

                        parent.geometry = geometry;
                    }

                    return;

                } else if ( /appearance/.exec( data.string ) ) {

                    for ( var i = 0; i < data.children.length; i ++ ) {

                        var child = data.children[ i ];

                        if ( 'Material' === child.nodeType ) {
                            var material = new THREE.MeshPhongMaterial();

                            if ( undefined !== child.diffuseColor ) {

                                var d = child.diffuseColor;

                                material.color.setRGB( d.r, d.g, d.b );

                            }

                            if ( undefined !== child.emissiveColor ) {

                                var e = child.emissiveColor;

                                material.emissive.setRGB( e.r, e.g, e.b );

                            }

                            if ( undefined !== child.specularColor ) {

                                var s = child.specularColor;

                                material.specular.setRGB( s.r, s.g, s.b );

                            }

                            if ( undefined !== child.transparency ) {

                                var t = child.transparency;

                                // transparency is opposite of opacity
                                material.opacity = Math.abs( 1 - t );

                                material.transparent = true;

                            }

                            if ( /DEF/.exec( data.string ) ) {

                                material.name = /DEF (\w+)/.exec( data.string )[ 1 ];

                                defines[ material.name ] = material;

                            }

                            parent.material = material;

                            // material found, stop looping
                            break;
                        }

                    }

                    return;

                }

                for ( var i = 0, l = data.children.length; i < l; i ++ ) {

                    var child = data.children[ i ];

                    parseNode( data.children[ i ], object );

                }

            }

            parseNode( getTree( lines ), scene );

        };

        var scene = new THREE.Scene();

        var lines = data.split( '\n' );

        var header = lines.shift();

        if ( /V1.0/.exec( header ) ) {

            parseV1( lines, scene );

        } else if ( /V2.0/.exec( header ) ) {

            parseV2( lines, scene );

        }

        return scene;

    }

};

THREE.EventDispatcher.prototype.apply( THREE.VRMLLoader.prototype );

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.VTKLoader = function ( manager ) {

    this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.VTKLoader.prototype = {

    constructor: THREE.VTKLoader,

    load: function ( url, onLoad, onProgress, onError ) {

        var scope = this;

        var loader = new THREE.XHRLoader( scope.manager );
        loader.setCrossOrigin( this.crossOrigin );
        loader.load( url, function ( text ) {

            onLoad( scope.parse( text ) );

        }, onProgress, onError );

    },

    parse: function ( data ) {

        var indices = [];
        var positions = [];

        var pattern, result;

        // float float float

        pattern = /([\+|\-]?[\d]+[\.][\d|\-|e]+)[ ]+([\+|\-]?[\d]+[\.][\d|\-|e]+)[ ]+([\+|\-]?[\d]+[\.][\d|\-|e]+)/g;

        while ( ( result = pattern.exec( data ) ) !== null ) {

            // ["1.0 2.0 3.0", "1.0", "2.0", "3.0"]

            positions.push( parseFloat( result[ 1 ] ), parseFloat( result[ 2 ] ), parseFloat( result[ 3 ] ) );

        }

        // 3 int int int

        pattern = /3[ ]+([\d]+)[ ]+([\d]+)[ ]+([\d]+)/g;

        while ( ( result = pattern.exec( data ) ) !== null ) {

            // ["3 1 2 3", "1", "2", "3"]

            indices.push( parseInt( result[ 1 ] ), parseInt( result[ 2 ] ), parseInt( result[ 3 ] ) );

        }

        // 4 int int int int

        pattern = /4[ ]+([\d]+)[ ]+([\d]+)[ ]+([\d]+)[ ]+([\d]+)/g;

        while ( ( result = pattern.exec( data ) ) !== null ) {

            // ["4 1 2 3 4", "1", "2", "3", "4"]

            indices.push( parseInt( result[ 1 ] ), parseInt( result[ 2 ] ), parseInt( result[ 4 ] ) );
            indices.push( parseInt( result[ 2 ] ), parseInt( result[ 3 ] ), parseInt( result[ 4 ] ) );

        }

        var geometry = new THREE.BufferGeometry();
        geometry.addAttribute( 'index', new THREE.BufferAttribute( new ( indices.length > 65535 ? Uint32Array : Uint16Array )( indices ), 1 ) );
        geometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( positions ), 3 ) );

        return geometry;

    }

};

THREE.EventDispatcher.prototype.apply( THREE.VTKLoader.prototype );

var LZMA = LZMA || {};

// browserify support
if ( typeof module === 'object' ) {

    module.exports = LZMA;

}

LZMA.OutWindow = function(){
    this._windowSize = 0;
};

LZMA.OutWindow.prototype.create = function(windowSize){
    if ( (!this._buffer) || (this._windowSize !== windowSize) ){
        this._buffer = [];
    }
    this._windowSize = windowSize;
    this._pos = 0;
    this._streamPos = 0;
};

LZMA.OutWindow.prototype.flush = function(){
    var size = this._pos - this._streamPos;
    if (size !== 0){
        while(size --){
            this._stream.writeByte(this._buffer[this._streamPos ++]);
        }
        if (this._pos >= this._windowSize){
            this._pos = 0;
        }
        this._streamPos = this._pos;
    }
};

LZMA.OutWindow.prototype.releaseStream = function(){
    this.flush();
    this._stream = null;
};

LZMA.OutWindow.prototype.setStream = function(stream){
    this.releaseStream();
    this._stream = stream;
};

LZMA.OutWindow.prototype.init = function(solid){
    if (!solid){
        this._streamPos = 0;
        this._pos = 0;
    }
};

LZMA.OutWindow.prototype.copyBlock = function(distance, len){
    var pos = this._pos - distance - 1;
    if (pos < 0){
        pos += this._windowSize;
    }
    while(len --){
        if (pos >= this._windowSize){
            pos = 0;
        }
        this._buffer[this._pos ++] = this._buffer[pos ++];
        if (this._pos >= this._windowSize){
            this.flush();
        }
    }
};

LZMA.OutWindow.prototype.putByte = function(b){
    this._buffer[this._pos ++] = b;
    if (this._pos >= this._windowSize){
        this.flush();
    }
};

LZMA.OutWindow.prototype.getByte = function(distance){
    var pos = this._pos - distance - 1;
    if (pos < 0){
        pos += this._windowSize;
    }
    return this._buffer[pos];
};

LZMA.RangeDecoder = function(){
};

LZMA.RangeDecoder.prototype.setStream = function(stream){
    this._stream = stream;
};

LZMA.RangeDecoder.prototype.releaseStream = function(){
    this._stream = null;
};

LZMA.RangeDecoder.prototype.init = function(){
    var i = 5;

    this._code = 0;
    this._range = -1;

    while(i --){
        this._code = (this._code << 8) | this._stream.readByte();
    }
};

LZMA.RangeDecoder.prototype.decodeDirectBits = function(numTotalBits){
    var result = 0, i = numTotalBits, t;

    while(i --){
        this._range >>>= 1;
        t = (this._code - this._range) >>> 31;
        this._code -= this._range & (t - 1);
        result = (result << 1) | (1 - t);

        if ( (this._range & 0xff000000) === 0){
            this._code = (this._code << 8) | this._stream.readByte();
            this._range <<= 8;
        }
    }

    return result;
};

LZMA.RangeDecoder.prototype.decodeBit = function(probs, index){
    var prob = probs[index],
        newBound = (this._range >>> 11) * prob;

    if ( (this._code ^ 0x80000000) < (newBound ^ 0x80000000) ){
        this._range = newBound;
        probs[index] += (2048 - prob) >>> 5;
        if ( (this._range & 0xff000000) === 0){
            this._code = (this._code << 8) | this._stream.readByte();
            this._range <<= 8;
        }
        return 0;
    }

    this._range -= newBound;
    this._code -= newBound;
    probs[index] -= prob >>> 5;
    if ( (this._range & 0xff000000) === 0){
        this._code = (this._code << 8) | this._stream.readByte();
        this._range <<= 8;
    }
    return 1;
};

LZMA.initBitModels = function(probs, len){
    while(len --){
        probs[len] = 1024;
    }
};

LZMA.BitTreeDecoder = function(numBitLevels){
    this._models = [];
    this._numBitLevels = numBitLevels;
};

LZMA.BitTreeDecoder.prototype.init = function(){
    LZMA.initBitModels(this._models, 1 << this._numBitLevels);
};

LZMA.BitTreeDecoder.prototype.decode = function(rangeDecoder){
    var m = 1, i = this._numBitLevels;

    while(i --){
        m = (m << 1) | rangeDecoder.decodeBit(this._models, m);
    }
    return m - (1 << this._numBitLevels);
};

LZMA.BitTreeDecoder.prototype.reverseDecode = function(rangeDecoder){
    var m = 1, symbol = 0, i = 0, bit;

    for (; i < this._numBitLevels; ++ i){
        bit = rangeDecoder.decodeBit(this._models, m);
        m = (m << 1) | bit;
        symbol |= bit << i;
    }
    return symbol;
};

LZMA.reverseDecode2 = function(models, startIndex, rangeDecoder, numBitLevels){
    var m = 1, symbol = 0, i = 0, bit;

    for (; i < numBitLevels; ++ i){
        bit = rangeDecoder.decodeBit(models, startIndex + m);
        m = (m << 1) | bit;
        symbol |= bit << i;
    }
    return symbol;
};

LZMA.LenDecoder = function(){
    this._choice = [];
    this._lowCoder = [];
    this._midCoder = [];
    this._highCoder = new LZMA.BitTreeDecoder(8);
    this._numPosStates = 0;
};

LZMA.LenDecoder.prototype.create = function(numPosStates){
    for (; this._numPosStates < numPosStates; ++ this._numPosStates){
        this._lowCoder[this._numPosStates] = new LZMA.BitTreeDecoder(3);
        this._midCoder[this._numPosStates] = new LZMA.BitTreeDecoder(3);
    }
};

LZMA.LenDecoder.prototype.init = function(){
    var i = this._numPosStates;
    LZMA.initBitModels(this._choice, 2);
    while(i --){
        this._lowCoder[i].init();
        this._midCoder[i].init();
    }
    this._highCoder.init();
};

LZMA.LenDecoder.prototype.decode = function(rangeDecoder, posState){
    if (rangeDecoder.decodeBit(this._choice, 0) === 0){
        return this._lowCoder[posState].decode(rangeDecoder);
    }
    if (rangeDecoder.decodeBit(this._choice, 1) === 0){
        return 8 + this._midCoder[posState].decode(rangeDecoder);
    }
    return 16 + this._highCoder.decode(rangeDecoder);
};

LZMA.Decoder2 = function(){
    this._decoders = [];
};

LZMA.Decoder2.prototype.init = function(){
    LZMA.initBitModels(this._decoders, 0x300);
};

LZMA.Decoder2.prototype.decodeNormal = function(rangeDecoder){
    var symbol = 1;

    do{
        symbol = (symbol << 1) | rangeDecoder.decodeBit(this._decoders, symbol);
    }while(symbol < 0x100);

    return symbol & 0xff;
};

LZMA.Decoder2.prototype.decodeWithMatchByte = function(rangeDecoder, matchByte){
    var symbol = 1, matchBit, bit;

    do{
        matchBit = (matchByte >> 7) & 1;
        matchByte <<= 1;
        bit = rangeDecoder.decodeBit(this._decoders, ( (1 + matchBit) << 8) + symbol);
        symbol = (symbol << 1) | bit;
        if (matchBit !== bit){
            while(symbol < 0x100){
                symbol = (symbol << 1) | rangeDecoder.decodeBit(this._decoders, symbol);
            }
            break;
        }
    }while(symbol < 0x100);

    return symbol & 0xff;
};

LZMA.LiteralDecoder = function(){
};

LZMA.LiteralDecoder.prototype.create = function(numPosBits, numPrevBits){
    var i;

    if (this._coders
        && (this._numPrevBits === numPrevBits)
        && (this._numPosBits === numPosBits) ){
        return;
    }
    this._numPosBits = numPosBits;
    this._posMask = (1 << numPosBits) - 1;
    this._numPrevBits = numPrevBits;

    this._coders = [];

    i = 1 << (this._numPrevBits + this._numPosBits);
    while(i --){
        this._coders[i] = new LZMA.Decoder2();
    }
};

LZMA.LiteralDecoder.prototype.init = function(){
    var i = 1 << (this._numPrevBits + this._numPosBits);
    while(i --){
        this._coders[i].init();
    }
};

LZMA.LiteralDecoder.prototype.getDecoder = function(pos, prevByte){
    return this._coders[( (pos & this._posMask) << this._numPrevBits)
    + ( (prevByte & 0xff) >>> (8 - this._numPrevBits) )];
};

LZMA.Decoder = function(){
    this._outWindow = new LZMA.OutWindow();
    this._rangeDecoder = new LZMA.RangeDecoder();
    this._isMatchDecoders = [];
    this._isRepDecoders = [];
    this._isRepG0Decoders = [];
    this._isRepG1Decoders = [];
    this._isRepG2Decoders = [];
    this._isRep0LongDecoders = [];
    this._posSlotDecoder = [];
    this._posDecoders = [];
    this._posAlignDecoder = new LZMA.BitTreeDecoder(4);
    this._lenDecoder = new LZMA.LenDecoder();
    this._repLenDecoder = new LZMA.LenDecoder();
    this._literalDecoder = new LZMA.LiteralDecoder();
    this._dictionarySize = -1;
    this._dictionarySizeCheck = -1;

    this._posSlotDecoder[0] = new LZMA.BitTreeDecoder(6);
    this._posSlotDecoder[1] = new LZMA.BitTreeDecoder(6);
    this._posSlotDecoder[2] = new LZMA.BitTreeDecoder(6);
    this._posSlotDecoder[3] = new LZMA.BitTreeDecoder(6);
};

LZMA.Decoder.prototype.setDictionarySize = function(dictionarySize){
    if (dictionarySize < 0){
        return false;
    }
    if (this._dictionarySize !== dictionarySize){
        this._dictionarySize = dictionarySize;
        this._dictionarySizeCheck = Math.max(this._dictionarySize, 1);
        this._outWindow.create( Math.max(this._dictionarySizeCheck, 4096) );
    }
    return true;
};

LZMA.Decoder.prototype.setLcLpPb = function(lc, lp, pb){
    var numPosStates = 1 << pb;

    if (lc > 8 || lp > 4 || pb > 4){
        return false;
    }

    this._literalDecoder.create(lp, lc);

    this._lenDecoder.create(numPosStates);
    this._repLenDecoder.create(numPosStates);
    this._posStateMask = numPosStates - 1;

    return true;
};

LZMA.Decoder.prototype.init = function(){
    var i = 4;

    this._outWindow.init(false);

    LZMA.initBitModels(this._isMatchDecoders, 192);
    LZMA.initBitModels(this._isRep0LongDecoders, 192);
    LZMA.initBitModels(this._isRepDecoders, 12);
    LZMA.initBitModels(this._isRepG0Decoders, 12);
    LZMA.initBitModels(this._isRepG1Decoders, 12);
    LZMA.initBitModels(this._isRepG2Decoders, 12);
    LZMA.initBitModels(this._posDecoders, 114);

    this._literalDecoder.init();

    while(i --){
        this._posSlotDecoder[i].init();
    }

    this._lenDecoder.init();
    this._repLenDecoder.init();
    this._posAlignDecoder.init();
    this._rangeDecoder.init();
};

LZMA.Decoder.prototype.decode = function(inStream, outStream, outSize){
    var state = 0, rep0 = 0, rep1 = 0, rep2 = 0, rep3 = 0, nowPos64 = 0, prevByte = 0,
        posState, decoder2, len, distance, posSlot, numDirectBits;

    this._rangeDecoder.setStream(inStream);
    this._outWindow.setStream(outStream);

    this.init();

    while(outSize < 0 || nowPos64 < outSize){
        posState = nowPos64 & this._posStateMask;

        if (this._rangeDecoder.decodeBit(this._isMatchDecoders, (state << 4) + posState) === 0){
            decoder2 = this._literalDecoder.getDecoder(nowPos64 ++, prevByte);

            if (state >= 7){
                prevByte = decoder2.decodeWithMatchByte(this._rangeDecoder, this._outWindow.getByte(rep0) );
            }else{
                prevByte = decoder2.decodeNormal(this._rangeDecoder);
            }
            this._outWindow.putByte(prevByte);

            state = state < 4? 0: state - (state < 10? 3: 6);

        }else{

            if (this._rangeDecoder.decodeBit(this._isRepDecoders, state) === 1){
                len = 0;
                if (this._rangeDecoder.decodeBit(this._isRepG0Decoders, state) === 0){
                    if (this._rangeDecoder.decodeBit(this._isRep0LongDecoders, (state << 4) + posState) === 0){
                        state = state < 7? 9: 11;
                        len = 1;
                    }
                }else{
                    if (this._rangeDecoder.decodeBit(this._isRepG1Decoders, state) === 0){
                        distance = rep1;
                    }else{
                        if (this._rangeDecoder.decodeBit(this._isRepG2Decoders, state) === 0){
                            distance = rep2;
                        }else{
                            distance = rep3;
                            rep3 = rep2;
                        }
                        rep2 = rep1;
                    }
                    rep1 = rep0;
                    rep0 = distance;
                }
                if (len === 0){
                    len = 2 + this._repLenDecoder.decode(this._rangeDecoder, posState);
                    state = state < 7? 8: 11;
                }
            }else{
                rep3 = rep2;
                rep2 = rep1;
                rep1 = rep0;

                len = 2 + this._lenDecoder.decode(this._rangeDecoder, posState);
                state = state < 7? 7: 10;

                posSlot = this._posSlotDecoder[len <= 5? len - 2: 3].decode(this._rangeDecoder);
                if (posSlot >= 4){

                    numDirectBits = (posSlot >> 1) - 1;
                    rep0 = (2 | (posSlot & 1) ) << numDirectBits;

                    if (posSlot < 14){
                        rep0 += LZMA.reverseDecode2(this._posDecoders,
                            rep0 - posSlot - 1, this._rangeDecoder, numDirectBits);
                    }else{
                        rep0 += this._rangeDecoder.decodeDirectBits(numDirectBits - 4) << 4;
                        rep0 += this._posAlignDecoder.reverseDecode(this._rangeDecoder);
                        if (rep0 < 0){
                            if (rep0 === -1){
                                break;
                            }
                            return false;
                        }
                    }
                }else{
                    rep0 = posSlot;
                }
            }

            if (rep0 >= nowPos64 || rep0 >= this._dictionarySizeCheck){
                return false;
            }

            this._outWindow.copyBlock(rep0, len);
            nowPos64 += len;
            prevByte = this._outWindow.getByte(0);
        }
    }

    this._outWindow.flush();
    this._outWindow.releaseStream();
    this._rangeDecoder.releaseStream();

    return true;
};

LZMA.Decoder.prototype.setDecoderProperties = function(properties){
    var value, lc, lp, pb, dictionarySize;

    if (properties.size < 5){
        return false;
    }

    value = properties.readByte();
    lc = value % 9;
    value = ~~(value / 9);
    lp = value % 5;
    pb = ~~(value / 5);

    if ( !this.setLcLpPb(lc, lp, pb) ){
        return false;
    }

    dictionarySize = properties.readByte();
    dictionarySize |= properties.readByte() << 8;
    dictionarySize |= properties.readByte() << 16;
    dictionarySize += properties.readByte() * 16777216;

    return this.setDictionarySize(dictionarySize);
};

LZMA.decompress = function(properties, inStream, outStream, outSize){
    var decoder = new LZMA.Decoder();

    if ( !decoder.setDecoderProperties(properties) ){
        throw "Incorrect stream properties";
    }

    if ( !decoder.decode(inStream, outStream, outSize) ){
        throw "Error in data stream";
    }

    return true;
};
/*
 Copyright (c) 2011 Juan Mellado

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/*
 References:
 - "OpenCTM: The Open Compressed Triangle Mesh file format" by Marcus Geelnard
 http://openctm.sourceforge.net/
 */

var CTM = CTM || {};

// browserify support
if ( typeof module === 'object' ) {

    module.exports = CTM;

}

CTM.CompressionMethod = {
    RAW: 0x00574152,
    MG1: 0x0031474d,
    MG2: 0x0032474d
};

CTM.Flags = {
    NORMALS: 0x00000001
};

CTM.File = function(stream){
    this.load(stream);
};

CTM.File.prototype.load = function(stream){
    this.header = new CTM.FileHeader(stream);

    this.body = new CTM.FileBody(this.header);

    this.getReader().read(stream, this.body);
};

CTM.File.prototype.getReader = function(){
    var reader;

    switch(this.header.compressionMethod){
        case CTM.CompressionMethod.RAW:
            reader = new CTM.ReaderRAW();
            break;
        case CTM.CompressionMethod.MG1:
            reader = new CTM.ReaderMG1();
            break;
        case CTM.CompressionMethod.MG2:
            reader = new CTM.ReaderMG2();
            break;
    }

    return reader;
};

CTM.FileHeader = function(stream){
    stream.readInt32(); //magic "OCTM"
    this.fileFormat = stream.readInt32();
    this.compressionMethod = stream.readInt32();
    this.vertexCount = stream.readInt32();
    this.triangleCount = stream.readInt32();
    this.uvMapCount = stream.readInt32();
    this.attrMapCount = stream.readInt32();
    this.flags = stream.readInt32();
    this.comment = stream.readString();
};

CTM.FileHeader.prototype.hasNormals = function(){
    return this.flags & CTM.Flags.NORMALS;
};

CTM.FileBody = function(header){
    var i = header.triangleCount * 3,
        v = header.vertexCount * 3,
        n = header.hasNormals()? header.vertexCount * 3: 0,
        u = header.vertexCount * 2,
        a = header.vertexCount * 4,
        j = 0;

    var data = new ArrayBuffer(
        (i + v + n + (u * header.uvMapCount) + (a * header.attrMapCount) ) * 4);

    this.indices = new Uint32Array(data, 0, i);

    this.vertices = new Float32Array(data, i * 4, v);

    if ( header.hasNormals() ){
        this.normals = new Float32Array(data, (i + v) * 4, n);
    }

    if (header.uvMapCount){
        this.uvMaps = [];
        for (j = 0; j < header.uvMapCount; ++ j){
            this.uvMaps[j] = {uv: new Float32Array(data,
                (i + v + n + (j * u) ) * 4, u) };
        }
    }

    if (header.attrMapCount){
        this.attrMaps = [];
        for (j = 0; j < header.attrMapCount; ++ j){
            this.attrMaps[j] = {attr: new Float32Array(data,
                (i + v + n + (u * header.uvMapCount) + (j * a) ) * 4, a) };
        }
    }
};

CTM.FileMG2Header = function(stream){
    stream.readInt32(); //magic "MG2H"
    this.vertexPrecision = stream.readFloat32();
    this.normalPrecision = stream.readFloat32();
    this.lowerBoundx = stream.readFloat32();
    this.lowerBoundy = stream.readFloat32();
    this.lowerBoundz = stream.readFloat32();
    this.higherBoundx = stream.readFloat32();
    this.higherBoundy = stream.readFloat32();
    this.higherBoundz = stream.readFloat32();
    this.divx = stream.readInt32();
    this.divy = stream.readInt32();
    this.divz = stream.readInt32();

    this.sizex = (this.higherBoundx - this.lowerBoundx) / this.divx;
    this.sizey = (this.higherBoundy - this.lowerBoundy) / this.divy;
    this.sizez = (this.higherBoundz - this.lowerBoundz) / this.divz;
};

CTM.ReaderRAW = function(){
};

CTM.ReaderRAW.prototype.read = function(stream, body){
    this.readIndices(stream, body.indices);
    this.readVertices(stream, body.vertices);

    if (body.normals){
        this.readNormals(stream, body.normals);
    }
    if (body.uvMaps){
        this.readUVMaps(stream, body.uvMaps);
    }
    if (body.attrMaps){
        this.readAttrMaps(stream, body.attrMaps);
    }
};

CTM.ReaderRAW.prototype.readIndices = function(stream, indices){
    stream.readInt32(); //magic "INDX"
    stream.readArrayInt32(indices);
};

CTM.ReaderRAW.prototype.readVertices = function(stream, vertices){
    stream.readInt32(); //magic "VERT"
    stream.readArrayFloat32(vertices);
};

CTM.ReaderRAW.prototype.readNormals = function(stream, normals){
    stream.readInt32(); //magic "NORM"
    stream.readArrayFloat32(normals);
};

CTM.ReaderRAW.prototype.readUVMaps = function(stream, uvMaps){
    var i = 0;
    for (; i < uvMaps.length; ++ i){
        stream.readInt32(); //magic "TEXC"

        uvMaps[i].name = stream.readString();
        uvMaps[i].filename = stream.readString();
        stream.readArrayFloat32(uvMaps[i].uv);
    }
};

CTM.ReaderRAW.prototype.readAttrMaps = function(stream, attrMaps){
    var i = 0;
    for (; i < attrMaps.length; ++ i){
        stream.readInt32(); //magic "ATTR"

        attrMaps[i].name = stream.readString();
        stream.readArrayFloat32(attrMaps[i].attr);
    }
};

CTM.ReaderMG1 = function(){
};

CTM.ReaderMG1.prototype.read = function(stream, body){
    this.readIndices(stream, body.indices);
    this.readVertices(stream, body.vertices);

    if (body.normals){
        this.readNormals(stream, body.normals);
    }
    if (body.uvMaps){
        this.readUVMaps(stream, body.uvMaps);
    }
    if (body.attrMaps){
        this.readAttrMaps(stream, body.attrMaps);
    }
};

CTM.ReaderMG1.prototype.readIndices = function(stream, indices){
    stream.readInt32(); //magic "INDX"
    stream.readInt32(); //packed size

    var interleaved = new CTM.InterleavedStream(indices, 3);
    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

    CTM.restoreIndices(indices, indices.length);
};

CTM.ReaderMG1.prototype.readVertices = function(stream, vertices){
    stream.readInt32(); //magic "VERT"
    stream.readInt32(); //packed size

    var interleaved = new CTM.InterleavedStream(vertices, 1);
    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);
};

CTM.ReaderMG1.prototype.readNormals = function(stream, normals){
    stream.readInt32(); //magic "NORM"
    stream.readInt32(); //packed size

    var interleaved = new CTM.InterleavedStream(normals, 3);
    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);
};

CTM.ReaderMG1.prototype.readUVMaps = function(stream, uvMaps){
    var i = 0;
    for (; i < uvMaps.length; ++ i){
        stream.readInt32(); //magic "TEXC"

        uvMaps[i].name = stream.readString();
        uvMaps[i].filename = stream.readString();

        stream.readInt32(); //packed size

        var interleaved = new CTM.InterleavedStream(uvMaps[i].uv, 2);
        LZMA.decompress(stream, stream, interleaved, interleaved.data.length);
    }
};

CTM.ReaderMG1.prototype.readAttrMaps = function(stream, attrMaps){
    var i = 0;
    for (; i < attrMaps.length; ++ i){
        stream.readInt32(); //magic "ATTR"

        attrMaps[i].name = stream.readString();

        stream.readInt32(); //packed size

        var interleaved = new CTM.InterleavedStream(attrMaps[i].attr, 4);
        LZMA.decompress(stream, stream, interleaved, interleaved.data.length);
    }
};

CTM.ReaderMG2 = function(){
};

CTM.ReaderMG2.prototype.read = function(stream, body){
    this.MG2Header = new CTM.FileMG2Header(stream);

    this.readVertices(stream, body.vertices);
    this.readIndices(stream, body.indices);

    if (body.normals){
        this.readNormals(stream, body);
    }
    if (body.uvMaps){
        this.readUVMaps(stream, body.uvMaps);
    }
    if (body.attrMaps){
        this.readAttrMaps(stream, body.attrMaps);
    }
};

CTM.ReaderMG2.prototype.readVertices = function(stream, vertices){
    stream.readInt32(); //magic "VERT"
    stream.readInt32(); //packed size

    var interleaved = new CTM.InterleavedStream(vertices, 3);
    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

    var gridIndices = this.readGridIndices(stream, vertices);

    CTM.restoreVertices(vertices, this.MG2Header, gridIndices, this.MG2Header.vertexPrecision);
};

CTM.ReaderMG2.prototype.readGridIndices = function(stream, vertices){
    stream.readInt32(); //magic "GIDX"
    stream.readInt32(); //packed size

    var gridIndices = new Uint32Array(vertices.length / 3);

    var interleaved = new CTM.InterleavedStream(gridIndices, 1);
    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

    CTM.restoreGridIndices(gridIndices, gridIndices.length);

    return gridIndices;
};

CTM.ReaderMG2.prototype.readIndices = function(stream, indices){
    stream.readInt32(); //magic "INDX"
    stream.readInt32(); //packed size

    var interleaved = new CTM.InterleavedStream(indices, 3);
    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

    CTM.restoreIndices(indices, indices.length);
};

CTM.ReaderMG2.prototype.readNormals = function(stream, body){
    stream.readInt32(); //magic "NORM"
    stream.readInt32(); //packed size

    var interleaved = new CTM.InterleavedStream(body.normals, 3);
    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

    var smooth = CTM.calcSmoothNormals(body.indices, body.vertices);

    CTM.restoreNormals(body.normals, smooth, this.MG2Header.normalPrecision);
};

CTM.ReaderMG2.prototype.readUVMaps = function(stream, uvMaps){
    var i = 0;
    for (; i < uvMaps.length; ++ i){
        stream.readInt32(); //magic "TEXC"

        uvMaps[i].name = stream.readString();
        uvMaps[i].filename = stream.readString();

        var precision = stream.readFloat32();

        stream.readInt32(); //packed size

        var interleaved = new CTM.InterleavedStream(uvMaps[i].uv, 2);
        LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

        CTM.restoreMap(uvMaps[i].uv, 2, precision);
    }
};

CTM.ReaderMG2.prototype.readAttrMaps = function(stream, attrMaps){
    var i = 0;
    for (; i < attrMaps.length; ++ i){
        stream.readInt32(); //magic "ATTR"

        attrMaps[i].name = stream.readString();

        var precision = stream.readFloat32();

        stream.readInt32(); //packed size

        var interleaved = new CTM.InterleavedStream(attrMaps[i].attr, 4);
        LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

        CTM.restoreMap(attrMaps[i].attr, 4, precision);
    }
};

CTM.restoreIndices = function(indices, len){
    var i = 3;
    if (len > 0){
        indices[2] += indices[0];
        indices[1] += indices[0];
    }
    for (; i < len; i += 3){
        indices[i] += indices[i - 3];

        if (indices[i] === indices[i - 3]){
            indices[i + 1] += indices[i - 2];
        }else{
            indices[i + 1] += indices[i];
        }

        indices[i + 2] += indices[i];
    }
};

CTM.restoreGridIndices = function(gridIndices, len){
    var i = 1;
    for (; i < len; ++ i){
        gridIndices[i] += gridIndices[i - 1];
    }
};

CTM.restoreVertices = function(vertices, grid, gridIndices, precision){
    var gridIdx, delta, x, y, z,
        intVertices = new Uint32Array(vertices.buffer, vertices.byteOffset, vertices.length),
        ydiv = grid.divx, zdiv = ydiv * grid.divy,
        prevGridIdx = 0x7fffffff, prevDelta = 0,
        i = 0, j = 0, len = gridIndices.length;

    for (; i < len; j += 3){
        x = gridIdx = gridIndices[i ++];

        z = ~~(x / zdiv);
        x -= ~~(z * zdiv);
        y = ~~(x / ydiv);
        x -= ~~(y * ydiv);

        delta = intVertices[j];
        if (gridIdx === prevGridIdx){
            delta += prevDelta;
        }

        vertices[j]     = grid.lowerBoundx +
        x * grid.sizex + precision * delta;
        vertices[j + 1] = grid.lowerBoundy +
        y * grid.sizey + precision * intVertices[j + 1];
        vertices[j + 2] = grid.lowerBoundz +
        z * grid.sizez + precision * intVertices[j + 2];

        prevGridIdx = gridIdx;
        prevDelta = delta;
    }
};

CTM.restoreNormals = function(normals, smooth, precision){
    var ro, phi, theta, sinPhi,
        nx, ny, nz, by, bz, len,
        intNormals = new Uint32Array(normals.buffer, normals.byteOffset, normals.length),
        i = 0, k = normals.length,
        PI_DIV_2 = 3.141592653589793238462643 * 0.5;

    for (; i < k; i += 3){
        ro = intNormals[i] * precision;
        phi = intNormals[i + 1];

        if (phi === 0){
            normals[i]     = smooth[i]     * ro;
            normals[i + 1] = smooth[i + 1] * ro;
            normals[i + 2] = smooth[i + 2] * ro;
        }else{

            if (phi <= 4){
                theta = (intNormals[i + 2] - 2) * PI_DIV_2;
            }else{
                theta = ( (intNormals[i + 2] * 4 / phi) - 2) * PI_DIV_2;
            }

            phi *= precision * PI_DIV_2;
            sinPhi = ro * Math.sin(phi);

            nx = sinPhi * Math.cos(theta);
            ny = sinPhi * Math.sin(theta);
            nz = ro * Math.cos(phi);

            bz = smooth[i + 1];
            by = smooth[i] - smooth[i + 2];

            len = Math.sqrt(2 * bz * bz + by * by);
            if (len > 1e-20){
                by /= len;
                bz /= len;
            }

            normals[i]     = smooth[i]     * nz +
            (smooth[i + 1] * bz - smooth[i + 2] * by) * ny - bz * nx;
            normals[i + 1] = smooth[i + 1] * nz -
            (smooth[i + 2]      + smooth[i]   ) * bz  * ny + by * nx;
            normals[i + 2] = smooth[i + 2] * nz +
            (smooth[i]     * by + smooth[i + 1] * bz) * ny + bz * nx;
        }
    }
};

CTM.restoreMap = function(map, count, precision){
    var delta, value,
        intMap = new Uint32Array(map.buffer, map.byteOffset, map.length),
        i = 0, j, len = map.length;

    for (; i < count; ++ i){
        delta = 0;

        for (j = i; j < len; j += count){
            value = intMap[j];

            delta += value & 1? -( (value + 1) >> 1): value >> 1;

            map[j] = delta * precision;
        }
    }
};

CTM.calcSmoothNormals = function(indices, vertices){
    var smooth = new Float32Array(vertices.length),
        indx, indy, indz, nx, ny, nz,
        v1x, v1y, v1z, v2x, v2y, v2z, len,
        i, k;

    for (i = 0, k = indices.length; i < k;){
        indx = indices[i ++] * 3;
        indy = indices[i ++] * 3;
        indz = indices[i ++] * 3;

        v1x = vertices[indy]     - vertices[indx];
        v2x = vertices[indz]     - vertices[indx];
        v1y = vertices[indy + 1] - vertices[indx + 1];
        v2y = vertices[indz + 1] - vertices[indx + 1];
        v1z = vertices[indy + 2] - vertices[indx + 2];
        v2z = vertices[indz + 2] - vertices[indx + 2];

        nx = v1y * v2z - v1z * v2y;
        ny = v1z * v2x - v1x * v2z;
        nz = v1x * v2y - v1y * v2x;

        len = Math.sqrt(nx * nx + ny * ny + nz * nz);
        if (len > 1e-10){
            nx /= len;
            ny /= len;
            nz /= len;
        }

        smooth[indx]     += nx;
        smooth[indx + 1] += ny;
        smooth[indx + 2] += nz;
        smooth[indy]     += nx;
        smooth[indy + 1] += ny;
        smooth[indy + 2] += nz;
        smooth[indz]     += nx;
        smooth[indz + 1] += ny;
        smooth[indz + 2] += nz;
    }

    for (i = 0, k = smooth.length; i < k; i += 3){
        len = Math.sqrt(smooth[i] * smooth[i] +
        smooth[i + 1] * smooth[i + 1] +
        smooth[i + 2] * smooth[i + 2]);

        if(len > 1e-10){
            smooth[i]     /= len;
            smooth[i + 1] /= len;
            smooth[i + 2] /= len;
        }
    }

    return smooth;
};

CTM.isLittleEndian = (function(){
    var buffer = new ArrayBuffer(2),
        bytes = new Uint8Array(buffer),
        ints = new Uint16Array(buffer);

    bytes[0] = 1;

    return ints[0] === 1;
}());

CTM.InterleavedStream = function(data, count){
    this.data = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    this.offset = CTM.isLittleEndian? 3: 0;
    this.count = count * 4;
    this.len = this.data.length;
};

CTM.InterleavedStream.prototype.writeByte = function(value){
    this.data[this.offset] = value;

    this.offset += this.count;
    if (this.offset >= this.len){

        this.offset -= this.len - 4;
        if (this.offset >= this.count){

            this.offset -= this.count + (CTM.isLittleEndian? 1: -1);
        }
    }
};

CTM.Stream = function(data){
    this.data = data;
    this.offset = 0;
};

CTM.Stream.prototype.TWO_POW_MINUS23 = Math.pow(2, -23);

CTM.Stream.prototype.TWO_POW_MINUS126 = Math.pow(2, -126);

CTM.Stream.prototype.readByte = function(){
    return this.data[this.offset ++] & 0xff;
};

CTM.Stream.prototype.readInt32 = function(){
    var i = this.readByte();
    i |= this.readByte() << 8;
    i |= this.readByte() << 16;
    return i | (this.readByte() << 24);
};

CTM.Stream.prototype.readFloat32 = function(){
    var m = this.readByte();
    m += this.readByte() << 8;

    var b1 = this.readByte();
    var b2 = this.readByte();

    m += (b1 & 0x7f) << 16;
    var e = ( (b2 & 0x7f) << 1) | ( (b1 & 0x80) >>> 7);
    var s = b2 & 0x80? -1: 1;

    if (e === 255){
        return m !== 0? NaN: s * Infinity;
    }
    if (e > 0){
        return s * (1 + (m * this.TWO_POW_MINUS23) ) * Math.pow(2, e - 127);
    }
    if (m !== 0){
        return s * m * this.TWO_POW_MINUS126;
    }
    return s * 0;
};

CTM.Stream.prototype.readString = function(){
    var len = this.readInt32();

    this.offset += len;

    return String.fromCharCode.apply(null,this.data.subarray(this.offset - len, this.offset));
};

CTM.Stream.prototype.readArrayInt32 = function(array){
    var i = 0, len = array.length;

    while(i < len){
        array[i ++] = this.readInt32();
    }

    return array;
};

CTM.Stream.prototype.readArrayFloat32 = function(array){
    var i = 0, len = array.length;

    while(i < len){
        array[i ++] = this.readFloat32();
    }

    return array;
};
/**
 * Loader for CTM encoded models generated by OpenCTM tools:
 *	http://openctm.sourceforge.net/
 *
 * Uses js-openctm library by Juan Mellado
 *	http://code.google.com/p/js-openctm/
 *
 * @author alteredq / http://alteredqualia.com/
 */

THREE.CTMLoader = function ( showStatus ) {

    THREE.Loader.call( this, showStatus );

};

THREE.CTMLoader.prototype = Object.create( THREE.Loader.prototype );
THREE.CTMLoader.prototype.constructor = THREE.CTMLoader;

// Load multiple CTM parts defined in JSON

THREE.CTMLoader.prototype.loadParts = function( url, callback, parameters ) {

    parameters = parameters || {};

    var scope = this;

    var xhr = new XMLHttpRequest();

    var basePath = parameters.basePath ? parameters.basePath : this.extractUrlBase( url );

    xhr.onreadystatechange = function() {

        if ( xhr.readyState === 4 ) {

            if ( xhr.status === 200 || xhr.status === 0 ) {

                var jsonObject = JSON.parse( xhr.responseText );

                var materials = [], geometries = [], counter = 0;

                var callbackFinal = function ( geometry ) {

                    counter += 1;

                    geometries.push( geometry );

                    if ( counter === jsonObject.offsets.length ) {

                        callback( geometries, materials );

                    }

                }


                // init materials

                for ( var i = 0; i < jsonObject.materials.length; i ++ ) {

                    materials[ i ] = scope.createMaterial( jsonObject.materials[ i ], basePath );

                }

                // load joined CTM file

                var partUrl = basePath + jsonObject.data;
                var parametersPart = { useWorker: parameters.useWorker, offsets: jsonObject.offsets };
                scope.load( partUrl, callbackFinal, parametersPart );

            }

        }

    }

    xhr.open( "GET", url, true );
    xhr.setRequestHeader( "Content-Type", "text/plain" );
    xhr.send( null );

};

// Load CTMLoader compressed models
//	- parameters
//		- url (required)
//		- callback (required)

THREE.CTMLoader.prototype.load = function( url, callback, parameters ) {

    parameters = parameters || {};

    var scope = this;

    var offsets = parameters.offsets !== undefined ? parameters.offsets : [ 0 ];

    var xhr = new XMLHttpRequest(),
        callbackProgress = null;

    var length = 0;

    xhr.onreadystatechange = function() {

        if ( xhr.readyState === 4 ) {

            if ( xhr.status === 200 || xhr.status === 0 ) {

                var binaryData = new Uint8Array(xhr.response);

                var s = Date.now();

                if ( parameters.useWorker ) {

                    var worker = parameters.worker || new Worker( "js/loaders/ctm/CTMWorker.js" );

                    worker.onmessage = function( event ) {

                        var files = event.data;

                        for ( var i = 0; i < files.length; i ++ ) {

                            var ctmFile = files[ i ];

                            var e1 = Date.now();
                            // console.log( "CTM data parse time [worker]: " + (e1-s) + " ms" );

                            scope.createModel( ctmFile, callback );

                            var e = Date.now();
                            console.log( "model load time [worker]: " + (e-e1) + " ms, total: " + (e-s));

                        }


                    };

                    worker.postMessage( { "data": binaryData, "offsets": offsets } );

                } else {

                    for ( var i = 0; i < offsets.length; i ++ ) {

                        var stream = new CTM.Stream( binaryData );
                        stream.offset = offsets[ i ];

                        var ctmFile = new CTM.File( stream );

                        scope.createModel( ctmFile, callback );

                    }

                    //var e = Date.now();
                    //console.log( "CTM data parse time [inline]: " + (e-s) + " ms" );

                }

            } else {

                console.error( "Couldn't load [" + url + "] [" + xhr.status + "]" );

            }

        } else if ( xhr.readyState === 3 ) {

            if ( callbackProgress ) {

                if ( length === 0 ) {

                    length = xhr.getResponseHeader( "Content-Length" );

                }

                callbackProgress( { total: length, loaded: xhr.responseText.length } );

            }

        } else if ( xhr.readyState === 2 ) {

            length = xhr.getResponseHeader( "Content-Length" );

        }

    }

    xhr.open( "GET", url, true );
    xhr.responseType = "arraybuffer";

    xhr.send( null );

};


THREE.CTMLoader.prototype.createModel = function ( file, callback ) {

    var Model = function () {

        THREE.BufferGeometry.call( this );

        this.materials = [];

        var indices = file.body.indices,
            positions = file.body.vertices,
            normals = file.body.normals;

        var uvs, colors;

        var uvMaps = file.body.uvMaps;

        if ( uvMaps !== undefined && uvMaps.length > 0 ) {

            uvs = uvMaps[ 0 ].uv;

        }

        var attrMaps = file.body.attrMaps;

        if ( attrMaps !== undefined && attrMaps.length > 0 && attrMaps[ 0 ].name === 'Color' ) {

            colors = attrMaps[ 0 ].attr;

        }

        this.addAttribute( 'index', new THREE.BufferAttribute( indices, 1 ) );
        this.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

        if ( normals !== undefined ) {

            this.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );

        }

        if ( uvs !== undefined ) {

            this.addAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );

        }

        if ( colors !== undefined ) {

            this.addAttribute( 'color', new THREE.BufferAttribute( colors, 4 ) );

        }

    }

    Model.prototype = Object.create( THREE.BufferGeometry.prototype );
    Model.prototype.constructor = Model;

    var geometry = new Model();

    geometry.computeOffsets();

    // compute vertex normals if not present in the CTM model
    if ( geometry.attributes.normal === undefined ) {
        geometry.computeVertexNormals();
    }

    callback( geometry );

};
/**
 * @author mrdoob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author julianwa / https://github.com/julianwa
 */

THREE.RenderableObject = function () {

    this.id = 0;

    this.object = null;
    this.z = 0;

};

//

THREE.RenderableFace = function () {

    this.id = 0;

    this.v1 = new THREE.RenderableVertex();
    this.v2 = new THREE.RenderableVertex();
    this.v3 = new THREE.RenderableVertex();

    this.normalModel = new THREE.Vector3();

    this.vertexNormalsModel = [ new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3() ];
    this.vertexNormalsLength = 0;

    this.color = new THREE.Color();
    this.material = null;
    this.uvs = [ new THREE.Vector2(), new THREE.Vector2(), new THREE.Vector2() ];

    this.z = 0;

};

//

THREE.RenderableVertex = function () {

    this.position = new THREE.Vector3();
    this.positionWorld = new THREE.Vector3();
    this.positionScreen = new THREE.Vector4();

    this.visible = true;

};

THREE.RenderableVertex.prototype.copy = function ( vertex ) {

    this.positionWorld.copy( vertex.positionWorld );
    this.positionScreen.copy( vertex.positionScreen );

};

//

THREE.RenderableLine = function () {

    this.id = 0;

    this.v1 = new THREE.RenderableVertex();
    this.v2 = new THREE.RenderableVertex();

    this.vertexColors = [ new THREE.Color(), new THREE.Color() ];
    this.material = null;

    this.z = 0;

};

//

THREE.RenderableSprite = function () {

    this.id = 0;

    this.object = null;

    this.x = 0;
    this.y = 0;
    this.z = 0;

    this.rotation = 0;
    this.scale = new THREE.Vector2();

    this.material = null;

};

//

THREE.Projector = function () {

    var _object, _objectCount, _objectPool = [], _objectPoolLength = 0,
        _vertex, _vertexCount, _vertexPool = [], _vertexPoolLength = 0,
        _face, _faceCount, _facePool = [], _facePoolLength = 0,
        _line, _lineCount, _linePool = [], _linePoolLength = 0,
        _sprite, _spriteCount, _spritePool = [], _spritePoolLength = 0,

        _renderData = { objects: [], lights: [], elements: [] },

        _vA = new THREE.Vector3(),
        _vB = new THREE.Vector3(),
        _vC = new THREE.Vector3(),

        _vector3 = new THREE.Vector3(),
        _vector4 = new THREE.Vector4(),

        _clipBox = new THREE.Box3( new THREE.Vector3( - 1, - 1, - 1 ), new THREE.Vector3( 1, 1, 1 ) ),
        _boundingBox = new THREE.Box3(),
        _points3 = new Array( 3 ),
        _points4 = new Array( 4 ),

        _viewMatrix = new THREE.Matrix4(),
        _viewProjectionMatrix = new THREE.Matrix4(),

        _modelMatrix,
        _modelViewProjectionMatrix = new THREE.Matrix4(),

        _normalMatrix = new THREE.Matrix3(),

        _frustum = new THREE.Frustum(),

        _clippedVertex1PositionScreen = new THREE.Vector4(),
        _clippedVertex2PositionScreen = new THREE.Vector4();

    //

    this.projectVector = function ( vector, camera ) {

        console.warn( 'THREE.Projector: .projectVector() is now vector.project().' );
        vector.project( camera );

    };

    this.unprojectVector = function ( vector, camera ) {

        console.warn( 'THREE.Projector: .unprojectVector() is now vector.unproject().' );
        vector.unproject( camera );

    };

    this.pickingRay = function ( vector, camera ) {

        console.error( 'THREE.Projector: .pickingRay() is now raycaster.setFromCamera().' );

    };

    //

    var RenderList = function () {

        var normals = [];
        var uvs = [];

        var object = null;
        var material = null;

        var normalMatrix = new THREE.Matrix3();

        var setObject = function ( value ) {

            object = value;
            material = object.material;

            normalMatrix.getNormalMatrix( object.matrixWorld );

            normals.length = 0;
            uvs.length = 0;

        };

        var projectVertex = function ( vertex ) {

            var position = vertex.position;
            var positionWorld = vertex.positionWorld;
            var positionScreen = vertex.positionScreen;

            positionWorld.copy( position ).applyMatrix4( _modelMatrix );
            positionScreen.copy( positionWorld ).applyMatrix4( _viewProjectionMatrix );

            var invW = 1 / positionScreen.w;

            positionScreen.x *= invW;
            positionScreen.y *= invW;
            positionScreen.z *= invW;

            vertex.visible = positionScreen.x >= - 1 && positionScreen.x <= 1 &&
            positionScreen.y >= - 1 && positionScreen.y <= 1 &&
            positionScreen.z >= - 1 && positionScreen.z <= 1;

        };

        var pushVertex = function ( x, y, z ) {

            _vertex = getNextVertexInPool();
            _vertex.position.set( x, y, z );

            projectVertex( _vertex );

        };

        var pushNormal = function ( x, y, z ) {

            normals.push( x, y, z );

        };

        var pushUv = function ( x, y ) {

            uvs.push( x, y );

        };

        var checkTriangleVisibility = function ( v1, v2, v3 ) {

            if ( v1.visible === true || v2.visible === true || v3.visible === true ) return true;

            _points3[ 0 ] = v1.positionScreen;
            _points3[ 1 ] = v2.positionScreen;
            _points3[ 2 ] = v3.positionScreen;

            return _clipBox.isIntersectionBox( _boundingBox.setFromPoints( _points3 ) );

        };

        var checkBackfaceCulling = function ( v1, v2, v3 ) {

            return ( ( v3.positionScreen.x - v1.positionScreen.x ) *
                ( v2.positionScreen.y - v1.positionScreen.y ) -
                ( v3.positionScreen.y - v1.positionScreen.y ) *
                ( v2.positionScreen.x - v1.positionScreen.x ) ) < 0;

        };

        var pushLine = function ( a, b ) {

            var v1 = _vertexPool[ a ];
            var v2 = _vertexPool[ b ];

            _line = getNextLineInPool();

            _line.id = object.id;
            _line.v1.copy( v1 );
            _line.v2.copy( v2 );
            _line.z = ( v1.positionScreen.z + v2.positionScreen.z ) / 2;

            _line.material = object.material;

            _renderData.elements.push( _line );

        };

        var pushTriangle = function ( a, b, c ) {

            var v1 = _vertexPool[ a ];
            var v2 = _vertexPool[ b ];
            var v3 = _vertexPool[ c ];

            if ( checkTriangleVisibility( v1, v2, v3 ) === false ) return;

            if ( material.side === THREE.DoubleSide || checkBackfaceCulling( v1, v2, v3 ) === true ) {

                _face = getNextFaceInPool();

                _face.id = object.id;
                _face.v1.copy( v1 );
                _face.v2.copy( v2 );
                _face.v3.copy( v3 );
                _face.z = ( v1.positionScreen.z + v2.positionScreen.z + v3.positionScreen.z ) / 3;

                for ( var i = 0; i < 3; i ++ ) {

                    var offset = arguments[ i ] * 3;
                    var normal = _face.vertexNormalsModel[ i ];

                    normal.set( normals[ offset ], normals[ offset + 1 ], normals[ offset + 2 ] );
                    normal.applyMatrix3( normalMatrix ).normalize();

                    var offset2 = arguments[ i ] * 2;

                    var uv = _face.uvs[ i ];
                    uv.set( uvs[ offset2 ], uvs[ offset2 + 1 ] );

                }

                _face.vertexNormalsLength = 3;

                _face.material = object.material;

                _renderData.elements.push( _face );

            }

        };

        return {
            setObject: setObject,
            projectVertex: projectVertex,
            checkTriangleVisibility: checkTriangleVisibility,
            checkBackfaceCulling: checkBackfaceCulling,
            pushVertex: pushVertex,
            pushNormal: pushNormal,
            pushUv: pushUv,
            pushLine: pushLine,
            pushTriangle: pushTriangle
        }

    };

    var renderList = new RenderList();

    this.projectScene = function ( scene, camera, sortObjects, sortElements ) {

        _faceCount = 0;
        _lineCount = 0;
        _spriteCount = 0;

        _renderData.elements.length = 0;

        if ( scene.autoUpdate === true ) scene.updateMatrixWorld();
        if ( camera.parent === undefined ) camera.updateMatrixWorld();

        _viewMatrix.copy( camera.matrixWorldInverse.getInverse( camera.matrixWorld ) );
        _viewProjectionMatrix.multiplyMatrices( camera.projectionMatrix, _viewMatrix );

        _frustum.setFromMatrix( _viewProjectionMatrix );

        //

        _objectCount = 0;

        _renderData.objects.length = 0;
        _renderData.lights.length = 0;

        scene.traverseVisible( function ( object ) {

            if ( object instanceof THREE.Light ) {

                _renderData.lights.push( object );

            } else if ( object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Sprite ) {

                if ( object.material.visible === false ) return;

                if ( object.frustumCulled === false || _frustum.intersectsObject( object ) === true ) {

                    _object = getNextObjectInPool();
                    _object.id = object.id;
                    _object.object = object;

                    _vector3.setFromMatrixPosition( object.matrixWorld );
                    _vector3.applyProjection( _viewProjectionMatrix );
                    _object.z = _vector3.z;

                    _renderData.objects.push( _object );

                }

            }

        } );

        if ( sortObjects === true ) {

            _renderData.objects.sort( painterSort );

        }

        //

        for ( var o = 0, ol = _renderData.objects.length; o < ol; o ++ ) {

            var object = _renderData.objects[ o ].object;
            var geometry = object.geometry;

            renderList.setObject( object );

            _modelMatrix = object.matrixWorld;

            _vertexCount = 0;

            if ( object instanceof THREE.Mesh ) {

                if ( geometry instanceof THREE.BufferGeometry ) {

                    var attributes = geometry.attributes;
                    var offsets = geometry.offsets;

                    if ( attributes.position === undefined ) continue;

                    var positions = attributes.position.array;

                    for ( var i = 0, l = positions.length; i < l; i += 3 ) {

                        renderList.pushVertex( positions[ i ], positions[ i + 1 ], positions[ i + 2 ] );

                    }

                    if ( attributes.normal !== undefined ) {

                        var normals = attributes.normal.array;

                        for ( var i = 0, l = normals.length; i < l; i += 3 ) {

                            renderList.pushNormal( normals[ i ], normals[ i + 1 ], normals[ i + 2 ] );

                        }

                    }

                    if ( attributes.uv !== undefined ) {

                        var uvs = attributes.uv.array;

                        for ( var i = 0, l = uvs.length; i < l; i += 2 ) {

                            renderList.pushUv( uvs[ i ], uvs[ i + 1 ] );

                        }

                    }

                    if ( attributes.index !== undefined ) {

                        var indices = attributes.index.array;

                        if ( offsets.length > 0 ) {

                            for ( var o = 0; o < offsets.length; o ++ ) {

                                var offset = offsets[ o ];
                                var index = offset.index;

                                for ( var i = offset.start, l = offset.start + offset.count; i < l; i += 3 ) {

                                    renderList.pushTriangle( indices[ i ] + index, indices[ i + 1 ] + index, indices[ i + 2 ] + index );

                                }

                            }

                        } else {

                            for ( var i = 0, l = indices.length; i < l; i += 3 ) {

                                renderList.pushTriangle( indices[ i ], indices[ i + 1 ], indices[ i + 2 ] );

                            }

                        }

                    } else {

                        for ( var i = 0, l = positions.length / 3; i < l; i += 3 ) {

                            renderList.pushTriangle( i, i + 1, i + 2 );

                        }

                    }

                } else if ( geometry instanceof THREE.Geometry ) {

                    var vertices = geometry.vertices;
                    var faces = geometry.faces;
                    var faceVertexUvs = geometry.faceVertexUvs[ 0 ];

                    _normalMatrix.getNormalMatrix( _modelMatrix );

                    var isFaceMaterial = object.material instanceof THREE.MeshFaceMaterial;
                    var objectMaterials = isFaceMaterial === true ? object.material : null;

                    for ( var v = 0, vl = vertices.length; v < vl; v ++ ) {

                        var vertex = vertices[ v ];
                        renderList.pushVertex( vertex.x, vertex.y, vertex.z );

                    }

                    for ( var f = 0, fl = faces.length; f < fl; f ++ ) {

                        var face = faces[ f ];

                        var material = isFaceMaterial === true
                            ? objectMaterials.materials[ face.materialIndex ]
                            : object.material;

                        if ( material === undefined ) continue;

                        var side = material.side;

                        var v1 = _vertexPool[ face.a ];
                        var v2 = _vertexPool[ face.b ];
                        var v3 = _vertexPool[ face.c ];

                        if ( material.morphTargets === true ) {

                            var morphTargets = geometry.morphTargets;
                            var morphInfluences = object.morphTargetInfluences;

                            var v1p = v1.position;
                            var v2p = v2.position;
                            var v3p = v3.position;

                            _vA.set( 0, 0, 0 );
                            _vB.set( 0, 0, 0 );
                            _vC.set( 0, 0, 0 );

                            for ( var t = 0, tl = morphTargets.length; t < tl; t ++ ) {

                                var influence = morphInfluences[ t ];

                                if ( influence === 0 ) continue;

                                var targets = morphTargets[ t ].vertices;

                                _vA.x += ( targets[ face.a ].x - v1p.x ) * influence;
                                _vA.y += ( targets[ face.a ].y - v1p.y ) * influence;
                                _vA.z += ( targets[ face.a ].z - v1p.z ) * influence;

                                _vB.x += ( targets[ face.b ].x - v2p.x ) * influence;
                                _vB.y += ( targets[ face.b ].y - v2p.y ) * influence;
                                _vB.z += ( targets[ face.b ].z - v2p.z ) * influence;

                                _vC.x += ( targets[ face.c ].x - v3p.x ) * influence;
                                _vC.y += ( targets[ face.c ].y - v3p.y ) * influence;
                                _vC.z += ( targets[ face.c ].z - v3p.z ) * influence;

                            }

                            v1.position.add( _vA );
                            v2.position.add( _vB );
                            v3.position.add( _vC );

                            renderList.projectVertex( v1 );
                            renderList.projectVertex( v2 );
                            renderList.projectVertex( v3 );

                        }

                        if ( renderList.checkTriangleVisibility( v1, v2, v3 ) === false ) continue;

                        var visible = renderList.checkBackfaceCulling( v1, v2, v3 );

                        if ( side !== THREE.DoubleSide ) {
                            if ( side === THREE.FrontSide && visible === false ) continue;
                            if ( side === THREE.BackSide && visible === true ) continue;
                        }

                        _face = getNextFaceInPool();

                        _face.id = object.id;
                        _face.v1.copy( v1 );
                        _face.v2.copy( v2 );
                        _face.v3.copy( v3 );

                        _face.normalModel.copy( face.normal );

                        if ( visible === false && ( side === THREE.BackSide || side === THREE.DoubleSide ) ) {

                            _face.normalModel.negate();

                        }

                        _face.normalModel.applyMatrix3( _normalMatrix ).normalize();

                        var faceVertexNormals = face.vertexNormals;

                        for ( var n = 0, nl = Math.min( faceVertexNormals.length, 3 ); n < nl; n ++ ) {

                            var normalModel = _face.vertexNormalsModel[ n ];
                            normalModel.copy( faceVertexNormals[ n ] );

                            if ( visible === false && ( side === THREE.BackSide || side === THREE.DoubleSide ) ) {

                                normalModel.negate();

                            }

                            normalModel.applyMatrix3( _normalMatrix ).normalize();

                        }

                        _face.vertexNormalsLength = faceVertexNormals.length;

                        var vertexUvs = faceVertexUvs[ f ];

                        if ( vertexUvs !== undefined ) {

                            for ( var u = 0; u < 3; u ++ ) {

                                _face.uvs[ u ].copy( vertexUvs[ u ] );

                            }

                        }

                        _face.color = face.color;
                        _face.material = material;

                        _face.z = ( v1.positionScreen.z + v2.positionScreen.z + v3.positionScreen.z ) / 3;

                        _renderData.elements.push( _face );

                    }

                }

            } else if ( object instanceof THREE.Line ) {

                if ( geometry instanceof THREE.BufferGeometry ) {

                    var attributes = geometry.attributes;

                    if ( attributes.position !== undefined ) {

                        var positions = attributes.position.array;

                        for ( var i = 0, l = positions.length; i < l; i += 3 ) {

                            renderList.pushVertex( positions[ i ], positions[ i + 1 ], positions[ i + 2 ] );

                        }

                        if ( attributes.index !== undefined ) {

                            var indices = attributes.index.array;

                            for ( var i = 0, l = indices.length; i < l; i += 2 ) {

                                renderList.pushLine( indices[ i ], indices[ i + 1 ] );

                            }

                        } else {

                            var step = object.mode === THREE.LinePieces ? 2 : 1;

                            for ( var i = 0, l = ( positions.length / 3 ) - 1; i < l; i += step ) {

                                renderList.pushLine( i, i + 1 );

                            }

                        }

                    }

                } else if ( geometry instanceof THREE.Geometry ) {

                    _modelViewProjectionMatrix.multiplyMatrices( _viewProjectionMatrix, _modelMatrix );

                    var vertices = object.geometry.vertices;

                    if ( vertices.length === 0 ) continue;

                    v1 = getNextVertexInPool();
                    v1.positionScreen.copy( vertices[ 0 ] ).applyMatrix4( _modelViewProjectionMatrix );

                    // Handle LineStrip and LinePieces
                    var step = object.mode === THREE.LinePieces ? 2 : 1;

                    for ( var v = 1, vl = vertices.length; v < vl; v ++ ) {

                        v1 = getNextVertexInPool();
                        v1.positionScreen.copy( vertices[ v ] ).applyMatrix4( _modelViewProjectionMatrix );

                        if ( ( v + 1 ) % step > 0 ) continue;

                        v2 = _vertexPool[ _vertexCount - 2 ];

                        _clippedVertex1PositionScreen.copy( v1.positionScreen );
                        _clippedVertex2PositionScreen.copy( v2.positionScreen );

                        if ( clipLine( _clippedVertex1PositionScreen, _clippedVertex2PositionScreen ) === true ) {

                            // Perform the perspective divide
                            _clippedVertex1PositionScreen.multiplyScalar( 1 / _clippedVertex1PositionScreen.w );
                            _clippedVertex2PositionScreen.multiplyScalar( 1 / _clippedVertex2PositionScreen.w );

                            _line = getNextLineInPool();

                            _line.id = object.id;
                            _line.v1.positionScreen.copy( _clippedVertex1PositionScreen );
                            _line.v2.positionScreen.copy( _clippedVertex2PositionScreen );

                            _line.z = Math.max( _clippedVertex1PositionScreen.z, _clippedVertex2PositionScreen.z );

                            _line.material = object.material;

                            if ( object.material.vertexColors === THREE.VertexColors ) {

                                _line.vertexColors[ 0 ].copy( object.geometry.colors[ v ] );
                                _line.vertexColors[ 1 ].copy( object.geometry.colors[ v - 1 ] );

                            }

                            _renderData.elements.push( _line );

                        }

                    }

                }

            } else if ( object instanceof THREE.Sprite ) {

                _vector4.set( _modelMatrix.elements[ 12 ], _modelMatrix.elements[ 13 ], _modelMatrix.elements[ 14 ], 1 );
                _vector4.applyMatrix4( _viewProjectionMatrix );

                var invW = 1 / _vector4.w;

                _vector4.z *= invW;

                if ( _vector4.z >= - 1 && _vector4.z <= 1 ) {

                    _sprite = getNextSpriteInPool();
                    _sprite.id = object.id;
                    _sprite.x = _vector4.x * invW;
                    _sprite.y = _vector4.y * invW;
                    _sprite.z = _vector4.z;
                    _sprite.object = object;

                    _sprite.rotation = object.rotation;

                    _sprite.scale.x = object.scale.x * Math.abs( _sprite.x - ( _vector4.x + camera.projectionMatrix.elements[ 0 ] ) / ( _vector4.w + camera.projectionMatrix.elements[ 12 ] ) );
                    _sprite.scale.y = object.scale.y * Math.abs( _sprite.y - ( _vector4.y + camera.projectionMatrix.elements[ 5 ] ) / ( _vector4.w + camera.projectionMatrix.elements[ 13 ] ) );

                    _sprite.material = object.material;

                    _renderData.elements.push( _sprite );

                }

            }

        }

        if ( sortElements === true ) {

            _renderData.elements.sort( painterSort );

        }

        return _renderData;

    };

    // Pools

    function getNextObjectInPool() {

        if ( _objectCount === _objectPoolLength ) {

            var object = new THREE.RenderableObject();
            _objectPool.push( object );
            _objectPoolLength ++;
            _objectCount ++;
            return object;

        }

        return _objectPool[ _objectCount ++ ];

    }

    function getNextVertexInPool() {

        if ( _vertexCount === _vertexPoolLength ) {

            var vertex = new THREE.RenderableVertex();
            _vertexPool.push( vertex );
            _vertexPoolLength ++;
            _vertexCount ++;
            return vertex;

        }

        return _vertexPool[ _vertexCount ++ ];

    }

    function getNextFaceInPool() {

        if ( _faceCount === _facePoolLength ) {

            var face = new THREE.RenderableFace();
            _facePool.push( face );
            _facePoolLength ++;
            _faceCount ++;
            return face;

        }

        return _facePool[ _faceCount ++ ];


    }

    function getNextLineInPool() {

        if ( _lineCount === _linePoolLength ) {

            var line = new THREE.RenderableLine();
            _linePool.push( line );
            _linePoolLength ++;
            _lineCount ++
            return line;

        }

        return _linePool[ _lineCount ++ ];

    }

    function getNextSpriteInPool() {

        if ( _spriteCount === _spritePoolLength ) {

            var sprite = new THREE.RenderableSprite();
            _spritePool.push( sprite );
            _spritePoolLength ++;
            _spriteCount ++
            return sprite;

        }

        return _spritePool[ _spriteCount ++ ];

    }

    //

    function painterSort( a, b ) {

        if ( a.z !== b.z ) {

            return b.z - a.z;

        } else if ( a.id !== b.id ) {

            return a.id - b.id;

        } else {

            return 0;

        }

    }

    function clipLine( s1, s2 ) {

        var alpha1 = 0, alpha2 = 1,

        // Calculate the boundary coordinate of each vertex for the near and far clip planes,
        // Z = -1 and Z = +1, respectively.
            bc1near =  s1.z + s1.w,
            bc2near =  s2.z + s2.w,
            bc1far =  - s1.z + s1.w,
            bc2far =  - s2.z + s2.w;

        if ( bc1near >= 0 && bc2near >= 0 && bc1far >= 0 && bc2far >= 0 ) {

            // Both vertices lie entirely within all clip planes.
            return true;

        } else if ( ( bc1near < 0 && bc2near < 0 ) || ( bc1far < 0 && bc2far < 0 ) ) {

            // Both vertices lie entirely outside one of the clip planes.
            return false;

        } else {

            // The line segment spans at least one clip plane.

            if ( bc1near < 0 ) {

                // v1 lies outside the near plane, v2 inside
                alpha1 = Math.max( alpha1, bc1near / ( bc1near - bc2near ) );

            } else if ( bc2near < 0 ) {

                // v2 lies outside the near plane, v1 inside
                alpha2 = Math.min( alpha2, bc1near / ( bc1near - bc2near ) );

            }

            if ( bc1far < 0 ) {

                // v1 lies outside the far plane, v2 inside
                alpha1 = Math.max( alpha1, bc1far / ( bc1far - bc2far ) );

            } else if ( bc2far < 0 ) {

                // v2 lies outside the far plane, v2 inside
                alpha2 = Math.min( alpha2, bc1far / ( bc1far - bc2far ) );

            }

            if ( alpha2 < alpha1 ) {

                // The line segment spans two boundaries, but is outside both of them.
                // (This can't happen when we're only clipping against just near/far but good
                //  to leave the check here for future usage if other clip planes are added.)
                return false;

            } else {

                // Update the s1 and s2 vertices to match the clipped line segment.
                s1.lerp( s2, alpha1 );
                s2.lerp( s1, 1 - alpha2 );

                return true;

            }

        }

    }

};
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

THREE.RaytracingRenderer = function ( parameters ) {

    console.log( 'THREE.RaytracingRenderer', THREE.REVISION );

    parameters = parameters || {};

    var canvas = document.createElement( 'canvas' );
    var context = canvas.getContext( '2d', {
        alpha: parameters.alpha === true
    } );

    var maxRecursionDepth = 3;

    var canvasWidth, canvasHeight;
    var canvasWidthHalf, canvasHeightHalf;

    var clearColor = new THREE.Color( 0x000000 );

    var origin = new THREE.Vector3();
    var direction = new THREE.Vector3();

    var cameraPosition = new THREE.Vector3();

    var raycaster = new THREE.Raycaster( origin, direction );
    var raycasterLight = new THREE.Raycaster();

    var perspective;
    var modelViewMatrix = new THREE.Matrix4();
    var cameraNormalMatrix = new THREE.Matrix3();

    var objects;
    var lights = [];
    var cache = {};

    var animationFrameId = null;

    this.domElement = canvas;

    this.autoClear = true;

    this.setClearColor = function ( color, alpha ) {

        clearColor.set( color );

    };

    this.setSize = function ( width, height ) {

        canvas.width = width;
        canvas.height = height;

        canvasWidth = canvas.width;
        canvasHeight = canvas.height;

        canvasWidthHalf = Math.floor( canvasWidth / 2 );
        canvasHeightHalf = Math.floor( canvasHeight / 2 );

        context.fillStyle = 'white';

    };

    this.setSize( canvas.width, canvas.height );

    this.clear = function () {

    };

    //

    var spawnRay = ( function () {

        var diffuseColor = new THREE.Color();
        var specularColor = new THREE.Color();
        var lightColor = new THREE.Color();
        var schlick = new THREE.Color();

        var lightContribution = new THREE.Color();

        var eyeVector = new THREE.Vector3();
        var lightVector = new THREE.Vector3();
        var normalVector = new THREE.Vector3();
        var halfVector = new THREE.Vector3();

        var localPoint = new THREE.Vector3();
        var reflectionVector = new THREE.Vector3();

        var tmpVec = new THREE.Vector3();

        var tmpColor = [];

        for ( var i = 0; i < maxRecursionDepth; i ++ ) {

            tmpColor[ i ] = new THREE.Color();

        }

        return function ( rayOrigin, rayDirection, outputColor, recursionDepth ) {

            var ray = raycaster.ray;

            ray.origin = rayOrigin;
            ray.direction = rayDirection;

            //

            var rayLight = raycasterLight.ray;

            //

            outputColor.setRGB( 0, 0, 0 );

            //

            var intersections = raycaster.intersectObjects( objects, true );

            // ray didn't find anything
            // (here should come setting of background color?)

            if ( intersections.length === 0 ) {

                return;

            }

            // ray hit

            var intersection = intersections[ 0 ];

            var point = intersection.point;
            var object = intersection.object;
            var material = object.material;
            var face = intersection.face;

            var vertices = object.geometry.vertices;

            //

            var _object = cache[ object.id ];

            localPoint.copy( point ).applyMatrix4( _object.inverseMatrix );
            eyeVector.subVectors( raycaster.ray.origin, point ).normalize();

            // resolve pixel diffuse color

            if ( material instanceof THREE.MeshLambertMaterial ||
                material instanceof THREE.MeshPhongMaterial ||
                material instanceof THREE.MeshBasicMaterial ) {

                diffuseColor.copyGammaToLinear( material.color );

            } else {

                diffuseColor.setRGB( 1, 1, 1 );

            }

            if ( material.vertexColors === THREE.FaceColors ) {

                diffuseColor.multiply( face.color );

            }

            // compute light shading

            rayLight.origin.copy( point );

            if ( material instanceof THREE.MeshBasicMaterial ) {

                for ( var i = 0, l = lights.length; i < l; i ++ ) {

                    var light = lights[ i ];

                    lightVector.setFromMatrixPosition( light.matrixWorld );
                    lightVector.sub( point );

                    rayLight.direction.copy( lightVector ).normalize();

                    var intersections = raycasterLight.intersectObjects( objects, true );

                    // point in shadow

                    if ( intersections.length > 0 ) continue;

                    // point visible

                    outputColor.add( diffuseColor );

                }

            } else if ( material instanceof THREE.MeshLambertMaterial ||
                material instanceof THREE.MeshPhongMaterial ) {

                var normalComputed = false;

                for ( var i = 0, l = lights.length; i < l; i ++ ) {

                    var light = lights[ i ];

                    lightColor.copyGammaToLinear( light.color );

                    lightVector.setFromMatrixPosition( light.matrixWorld );
                    lightVector.sub( point );

                    rayLight.direction.copy( lightVector ).normalize();

                    var intersections = raycasterLight.intersectObjects( objects, true );

                    // point in shadow

                    if ( intersections.length > 0 ) continue;

                    // point lit

                    if ( normalComputed === false ) {

                        // the same normal can be reused for all lights
                        // (should be possible to cache even more)

                        computePixelNormal( normalVector, localPoint, material.shading, face, vertices );
                        normalVector.applyMatrix3( _object.normalMatrix ).normalize();

                        normalComputed = true;

                    }

                    // compute attenuation

                    var attenuation = 1.0;

                    if ( light.physicalAttenuation === true ) {

                        attenuation = lightVector.length();
                        attenuation = 1.0 / ( attenuation * attenuation );

                    }

                    lightVector.normalize();

                    // compute diffuse

                    var dot = Math.max( normalVector.dot( lightVector ), 0 );
                    var diffuseIntensity = dot * light.intensity;

                    lightContribution.copy( diffuseColor );
                    lightContribution.multiply( lightColor );
                    lightContribution.multiplyScalar( diffuseIntensity * attenuation );

                    outputColor.add( lightContribution );

                    // compute specular

                    if ( material instanceof THREE.MeshPhongMaterial ) {

                        halfVector.addVectors( lightVector, eyeVector ).normalize();

                        var dotNormalHalf = Math.max( normalVector.dot( halfVector ), 0.0 );
                        var specularIntensity = Math.max( Math.pow( dotNormalHalf, material.shininess ), 0.0 ) * diffuseIntensity;

                        var specularNormalization = ( material.shininess + 2.0 ) / 8.0;

                        specularColor.copyGammaToLinear( material.specular );

                        var alpha = Math.pow( Math.max( 1.0 - lightVector.dot( halfVector ), 0.0 ), 5.0 );

                        schlick.r = specularColor.r + ( 1.0 - specularColor.r ) * alpha;
                        schlick.g = specularColor.g + ( 1.0 - specularColor.g ) * alpha;
                        schlick.b = specularColor.b + ( 1.0 - specularColor.b ) * alpha;

                        lightContribution.copy( schlick );

                        lightContribution.multiply( lightColor );
                        lightContribution.multiplyScalar( specularNormalization * specularIntensity * attenuation );
                        outputColor.add( lightContribution );

                    }

                }

            }

            // reflection / refraction

            var reflectivity = material.reflectivity;

            if ( ( material.mirror || material.glass ) && reflectivity > 0 && recursionDepth < maxRecursionDepth ) {

                if ( material.mirror ) {

                    reflectionVector.copy( rayDirection );
                    reflectionVector.reflect( normalVector );

                } else if ( material.glass ) {

                    var eta = material.refractionRatio;

                    var dotNI = rayDirection.dot( normalVector )
                    var k = 1.0 - eta * eta * ( 1.0 - dotNI * dotNI );

                    if ( k < 0.0 ) {

                        reflectionVector.set( 0, 0, 0 );

                    } else {

                        reflectionVector.copy( rayDirection );
                        reflectionVector.multiplyScalar( eta );

                        var alpha = eta * dotNI + Math.sqrt( k );
                        tmpVec.copy( normalVector );
                        tmpVec.multiplyScalar( alpha );
                        reflectionVector.sub( tmpVec );

                    }

                }

                var theta = Math.max( eyeVector.dot( normalVector ), 0.0 );
                var rf0 = reflectivity;
                var fresnel = rf0 + ( 1.0 - rf0 ) * Math.pow( ( 1.0 - theta ), 5.0 );

                var weight = fresnel;

                var zColor = tmpColor[ recursionDepth ];

                spawnRay( point, reflectionVector, zColor, recursionDepth + 1 );

                if ( material.specular !== undefined ) {

                    zColor.multiply( material.specular );

                }

                zColor.multiplyScalar( weight );
                outputColor.multiplyScalar( 1 - weight );
                outputColor.add( zColor );

            }

        };

    }() );

    var computePixelNormal = ( function () {

        var tmpVec1 = new THREE.Vector3();
        var tmpVec2 = new THREE.Vector3();
        var tmpVec3 = new THREE.Vector3();

        return function ( outputVector, point, shading, face, vertices ) {

            var faceNormal = face.normal;
            var vertexNormals = face.vertexNormals;

            if ( shading === THREE.FlatShading ) {

                outputVector.copy( faceNormal );

            } else if ( shading === THREE.SmoothShading ) {

                // compute barycentric coordinates

                var vA = vertices[ face.a ];
                var vB = vertices[ face.b ];
                var vC = vertices[ face.c ];

                tmpVec3.crossVectors( tmpVec1.subVectors( vB, vA ), tmpVec2.subVectors( vC, vA ) );
                var areaABC = faceNormal.dot( tmpVec3 );

                tmpVec3.crossVectors( tmpVec1.subVectors( vB, point ), tmpVec2.subVectors( vC, point ) );
                var areaPBC = faceNormal.dot( tmpVec3 );
                var a = areaPBC / areaABC;

                tmpVec3.crossVectors( tmpVec1.subVectors( vC, point ), tmpVec2.subVectors( vA, point ) );
                var areaPCA = faceNormal.dot( tmpVec3 );
                var b = areaPCA / areaABC;

                var c = 1.0 - a - b;

                // compute interpolated vertex normal

                tmpVec1.copy( vertexNormals[ 0 ] );
                tmpVec1.multiplyScalar( a );

                tmpVec2.copy( vertexNormals[ 1 ] );
                tmpVec2.multiplyScalar( b );

                tmpVec3.copy( vertexNormals[ 2 ] );
                tmpVec3.multiplyScalar( c );

                outputVector.addVectors( tmpVec1, tmpVec2 );
                outputVector.add( tmpVec3 );

            }

        };

    }() );

    var renderBlock = ( function () {

        var blockSize = 64;

        var canvasBlock = document.createElement( 'canvas' );
        canvasBlock.width = blockSize;
        canvasBlock.height = blockSize;

        var contextBlock = canvasBlock.getContext( '2d', {

            alpha: parameters.alpha === true

        } );

        var imagedata = contextBlock.getImageData( 0, 0, blockSize, blockSize );
        var data = imagedata.data;

        var pixelColor = new THREE.Color();

        return function ( blockX, blockY ) {

            var index = 0;

            for ( var y = 0; y < blockSize; y ++ ) {

                for ( var x = 0; x < blockSize; x ++, index += 4 ) {

                    // spawn primary ray at pixel position

                    origin.copy( cameraPosition );

                    direction.set( x + blockX - canvasWidthHalf, - ( y + blockY - canvasHeightHalf ), - perspective );
                    direction.applyMatrix3( cameraNormalMatrix ).normalize();

                    spawnRay( origin, direction, pixelColor, 0 );

                    // convert from linear to gamma

                    data[ index ]     = Math.sqrt( pixelColor.r ) * 255;
                    data[ index + 1 ] = Math.sqrt( pixelColor.g ) * 255;
                    data[ index + 2 ] = Math.sqrt( pixelColor.b ) * 255;

                }

            }

            context.putImageData( imagedata, blockX, blockY );

            blockX += blockSize;

            if ( blockX >= canvasWidth ) {

                blockX = 0;
                blockY += blockSize;

                if ( blockY >= canvasHeight ) return;

            }

            context.fillRect( blockX, blockY, blockSize, blockSize );

            animationFrameId = requestAnimationFrame( function () {

                renderBlock( blockX, blockY );

            } );

        };

    }() );

    this.render = function ( scene, camera ) {

        if ( this.autoClear === true ) this.clear();

        cancelAnimationFrame( animationFrameId );

        // update scene graph

        if ( scene.autoUpdate === true ) scene.updateMatrixWorld();

        // update camera matrices

        if ( camera.parent === undefined ) camera.updateMatrixWorld();

        camera.matrixWorldInverse.getInverse( camera.matrixWorld );
        cameraPosition.setFromMatrixPosition( camera.matrixWorld );

        //

        cameraNormalMatrix.getNormalMatrix( camera.matrixWorld );
        origin.copy( cameraPosition );

        perspective = 0.5 / Math.tan( THREE.Math.degToRad( camera.fov * 0.5 ) ) * canvasHeight;

        objects = scene.children;

        // collect lights and set up object matrices

        lights.length = 0;

        scene.traverse( function ( object ) {

            if ( object instanceof THREE.Light ) {

                lights.push( object );

            }

            if ( cache[ object.id ] === undefined ) {

                cache[ object.id ] = {
                    normalMatrix: new THREE.Matrix3(),
                    inverseMatrix: new THREE.Matrix4()
                };

            }

            modelViewMatrix.multiplyMatrices( camera.matrixWorldInverse, object.matrixWorld )

            var _object = cache[ object.id ];

            _object.normalMatrix.getNormalMatrix( modelViewMatrix );
            _object.inverseMatrix.getInverse( object.matrixWorld );

        } );

        renderBlock( 0, 0 );

    };

};/*!

 JSZip - A Javascript class for generating and reading zip files
 <http://stuartk.com/jszip>

 (c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
 Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

 JSZip uses the library pako released under the MIT license :
 https://github.com/nodeca/pako/blob/master/LICENSE
 */
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b.JSZip=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";c.encode=function(a){for(var b,c,e,f,g,h,i,j="",k=0;k<a.length;)b=a.charCodeAt(k++),c=a.charCodeAt(k++),e=a.charCodeAt(k++),f=b>>2,g=(3&b)<<4|c>>4,h=(15&c)<<2|e>>6,i=63&e,isNaN(c)?h=i=64:isNaN(e)&&(i=64),j=j+d.charAt(f)+d.charAt(g)+d.charAt(h)+d.charAt(i);return j},c.decode=function(a){var b,c,e,f,g,h,i,j="",k=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");k<a.length;)f=d.indexOf(a.charAt(k++)),g=d.indexOf(a.charAt(k++)),h=d.indexOf(a.charAt(k++)),i=d.indexOf(a.charAt(k++)),b=f<<2|g>>4,c=(15&g)<<4|h>>2,e=(3&h)<<6|i,j+=String.fromCharCode(b),64!=h&&(j+=String.fromCharCode(c)),64!=i&&(j+=String.fromCharCode(e));return j}},{}],2:[function(a,b){"use strict";function c(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null}c.prototype={getContent:function(){return null},getCompressedContent:function(){return null}},b.exports=c},{}],3:[function(a,b,c){"use strict";c.STORE={magic:"\x00\x00",compress:function(a){return a},uncompress:function(a){return a},compressInputType:null,uncompressInputType:null},c.DEFLATE=a("./flate")},{"./flate":8}],4:[function(a,b){"use strict";var c=a("./utils"),d=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];b.exports=function(a,b){if("undefined"==typeof a||!a.length)return 0;var e="string"!==c.getTypeOf(a);"undefined"==typeof b&&(b=0);var f=0,g=0,h=0;b=-1^b;for(var i=0,j=a.length;j>i;i++)h=e?a[i]:a.charCodeAt(i),g=255&(b^h),f=d[g],b=b>>>8^f;return-1^b}},{"./utils":21}],5:[function(a,b){"use strict";function c(){this.data=null,this.length=0,this.index=0}var d=a("./utils");c.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<a||0>a)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var b,c=0;for(this.checkOffset(a),b=this.index+a-1;b>=this.index;b--)c=(c<<8)+this.byteAt(b);return this.index+=a,c},readString:function(a){return d.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1)}},b.exports=c},{"./utils":21}],6:[function(a,b,c){"use strict";c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!1,c.date=null,c.compression=null,c.comment=null},{}],7:[function(a,b,c){"use strict";var d=a("./utils");c.string2binary=function(a){return d.string2binary(a)},c.string2Uint8Array=function(a){return d.transformTo("uint8array",a)},c.uint8Array2String=function(a){return d.transformTo("string",a)},c.string2Blob=function(a){var b=d.transformTo("arraybuffer",a);return d.arrayBuffer2Blob(b)},c.arrayBuffer2Blob=function(a){return d.arrayBuffer2Blob(a)},c.transformTo=function(a,b){return d.transformTo(a,b)},c.getTypeOf=function(a){return d.getTypeOf(a)},c.checkSupport=function(a){return d.checkSupport(a)},c.MAX_VALUE_16BITS=d.MAX_VALUE_16BITS,c.MAX_VALUE_32BITS=d.MAX_VALUE_32BITS,c.pretty=function(a){return d.pretty(a)},c.findCompression=function(a){return d.findCompression(a)},c.isRegExp=function(a){return d.isRegExp(a)}},{"./utils":21}],8:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,e=a("pako");c.uncompressInputType=d?"uint8array":"array",c.compressInputType=d?"uint8array":"array",c.magic="\b\x00",c.compress=function(a){return e.deflateRaw(a)},c.uncompress=function(a){return e.inflateRaw(a)}},{pako:24}],9:[function(a,b){"use strict";function c(a,b){return this instanceof c?(this.files={},this.comment=null,this.root="",a&&this.load(a,b),void(this.clone=function(){var a=new c;for(var b in this)"function"!=typeof this[b]&&(a[b]=this[b]);return a})):new c(a,b)}var d=a("./base64");c.prototype=a("./object"),c.prototype.load=a("./load"),c.support=a("./support"),c.defaults=a("./defaults"),c.utils=a("./deprecatedPublicUtils"),c.base64={encode:function(a){return d.encode(a)},decode:function(a){return d.decode(a)}},c.compressions=a("./compressions"),b.exports=c},{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":13,"./support":17}],10:[function(a,b){"use strict";var c=a("./base64"),d=a("./zipEntries");b.exports=function(a,b){var e,f,g,h;for(b=b||{},b.base64&&(a=c.decode(a)),f=new d(a,b),e=f.files,g=0;g<e.length;g++)h=e[g],this.file(h.fileName,h.decompressed,{binary:!0,optimizedBinaryString:!0,date:h.date,dir:h.dir,comment:h.fileComment.length?h.fileComment:null,createFolders:b.createFolders});return f.zipComment.length&&(this.comment=f.zipComment),this}},{"./base64":1,"./zipEntries":22}],11:[function(a,b){(function(a){"use strict";b.exports=function(b,c){return new a(b,c)},b.exports.test=function(b){return a.isBuffer(b)}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],12:[function(a,b){"use strict";function c(a){this.data=a,this.length=this.data.length,this.index=0}var d=a("./uint8ArrayReader");c.prototype=new d,c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./uint8ArrayReader":18}],13:[function(a,b){"use strict";var c=a("./support"),d=a("./utils"),e=a("./crc32"),f=a("./signature"),g=a("./defaults"),h=a("./base64"),i=a("./compressions"),j=a("./compressedObject"),k=a("./nodeBuffer"),l=a("./utf8"),m=a("./stringWriter"),n=a("./uint8ArrayWriter"),o=function(a){if(a._data instanceof j&&(a._data=a._data.getContent(),a.options.binary=!0,a.options.base64=!1,"uint8array"===d.getTypeOf(a._data))){var b=a._data;a._data=new Uint8Array(b.length),0!==b.length&&a._data.set(b,0)}return a._data},p=function(a){var b=o(a),e=d.getTypeOf(b);return"string"===e?!a.options.binary&&c.nodebuffer?k(b,"utf-8"):a.asBinary():b},q=function(a){var b=o(this);return null===b||"undefined"==typeof b?"":(this.options.base64&&(b=h.decode(b)),b=a&&this.options.binary?A.utf8decode(b):d.transformTo("string",b),a||this.options.binary||(b=d.transformTo("string",A.utf8encode(b))),b)},r=function(a,b,c){this.name=a,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this._data=b,this.options=c,this._initialMetadata={dir:c.dir,date:c.date}};r.prototype={asText:function(){return q.call(this,!0)},asBinary:function(){return q.call(this,!1)},asNodeBuffer:function(){var a=p(this);return d.transformTo("nodebuffer",a)},asUint8Array:function(){var a=p(this);return d.transformTo("uint8array",a)},asArrayBuffer:function(){return this.asUint8Array().buffer}};var s=function(a,b){var c,d="";for(c=0;b>c;c++)d+=String.fromCharCode(255&a),a>>>=8;return d},t=function(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&&"undefined"==typeof c[b]&&(c[b]=arguments[a][b]);return c},u=function(a){return a=a||{},a.base64!==!0||null!==a.binary&&void 0!==a.binary||(a.binary=!0),a=t(a,g),a.date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),a},v=function(a,b,c){var e,f=d.getTypeOf(b);if(c=u(c),c.createFolders&&(e=w(a))&&x.call(this,e,!0),c.dir||null===b||"undefined"==typeof b)c.base64=!1,c.binary=!1,b=null;else if("string"===f)c.binary&&!c.base64&&c.optimizedBinaryString!==!0&&(b=d.string2binary(b));else{if(c.base64=!1,c.binary=!0,!(f||b instanceof j))throw new Error("The data of '"+a+"' is in an unsupported format !");"arraybuffer"===f&&(b=d.transformTo("uint8array",b))}var g=new r(a,b,c);return this.files[a]=g,g},w=function(a){"/"==a.slice(-1)&&(a=a.substring(0,a.length-1));var b=a.lastIndexOf("/");return b>0?a.substring(0,b):""},x=function(a,b){return"/"!=a.slice(-1)&&(a+="/"),b="undefined"!=typeof b?b:!1,this.files[a]||v.call(this,a,null,{dir:!0,createFolders:b}),this.files[a]},y=function(a,b){var c,f=new j;return a._data instanceof j?(f.uncompressedSize=a._data.uncompressedSize,f.crc32=a._data.crc32,0===f.uncompressedSize||a.dir?(b=i.STORE,f.compressedContent="",f.crc32=0):a._data.compressionMethod===b.magic?f.compressedContent=a._data.getCompressedContent():(c=a._data.getContent(),f.compressedContent=b.compress(d.transformTo(b.compressInputType,c)))):(c=p(a),(!c||0===c.length||a.dir)&&(b=i.STORE,c=""),f.uncompressedSize=c.length,f.crc32=e(c),f.compressedContent=b.compress(d.transformTo(b.compressInputType,c))),f.compressedSize=f.compressedContent.length,f.compressionMethod=b.magic,f},z=function(a,b,c,g){var h,i,j,k,m=(c.compressedContent,d.transformTo("string",l.utf8encode(b.name))),n=b.comment||"",o=d.transformTo("string",l.utf8encode(n)),p=m.length!==b.name.length,q=o.length!==n.length,r=b.options,t="",u="",v="";j=b._initialMetadata.dir!==b.dir?b.dir:r.dir,k=b._initialMetadata.date!==b.date?b.date:r.date,h=k.getHours(),h<<=6,h|=k.getMinutes(),h<<=5,h|=k.getSeconds()/2,i=k.getFullYear()-1980,i<<=4,i|=k.getMonth()+1,i<<=5,i|=k.getDate(),p&&(u=s(1,1)+s(e(m),4)+m,t+="up"+s(u.length,2)+u),q&&(v=s(1,1)+s(this.crc32(o),4)+o,t+="uc"+s(v.length,2)+v);var w="";w+="\n\x00",w+=p||q?"\x00\b":"\x00\x00",w+=c.compressionMethod,w+=s(h,2),w+=s(i,2),w+=s(c.crc32,4),w+=s(c.compressedSize,4),w+=s(c.uncompressedSize,4),w+=s(m.length,2),w+=s(t.length,2);var x=f.LOCAL_FILE_HEADER+w+m+t,y=f.CENTRAL_FILE_HEADER+"\x00"+w+s(o.length,2)+"\x00\x00\x00\x00"+(j===!0?"\x00\x00\x00":"\x00\x00\x00\x00")+s(g,4)+m+t+o;return{fileRecord:x,dirRecord:y,compressedObject:c}},A={load:function(){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(a){var b,c,d,e,f=[];for(b in this.files)this.files.hasOwnProperty(b)&&(d=this.files[b],e=new r(d.name,d._data,t(d.options)),c=b.slice(this.root.length,b.length),b.slice(0,this.root.length)===this.root&&a(c,e)&&f.push(e));return f},file:function(a,b,c){if(1===arguments.length){if(d.isRegExp(a)){var e=a;return this.filter(function(a,b){return!b.dir&&e.test(a)})}return this.filter(function(b,c){return!c.dir&&b===a})[0]||null}return a=this.root+a,v.call(this,a,b,c),this},folder:function(a){if(!a)return this;if(d.isRegExp(a))return this.filter(function(b,c){return c.dir&&a.test(b)});var b=this.root+a,c=x.call(this,b),e=this.clone();return e.root=c.name,e},remove:function(a){a=this.root+a;var b=this.files[a];if(b||("/"!=a.slice(-1)&&(a+="/"),b=this.files[a]),b&&!b.dir)delete this.files[a];else for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d<c.length;d++)delete this.files[c[d].name];return this},generate:function(a){a=t(a||{},{base64:!0,compression:"STORE",type:"base64",comment:null}),d.checkSupport(a.type);var b,c,e=[],g=0,j=0,k=d.transformTo("string",this.utf8encode(a.comment||this.comment||""));for(var l in this.files)if(this.files.hasOwnProperty(l)){var o=this.files[l],p=o.options.compression||a.compression.toUpperCase(),q=i[p];if(!q)throw new Error(p+" is not a valid compression method !");var r=y.call(this,o,q),u=z.call(this,l,o,r,g);g+=u.fileRecord.length+r.compressedSize,j+=u.dirRecord.length,e.push(u)}var v="";v=f.CENTRAL_DIRECTORY_END+"\x00\x00\x00\x00"+s(e.length,2)+s(e.length,2)+s(j,4)+s(g,4)+s(k.length,2)+k;var w=a.type.toLowerCase();for(b="uint8array"===w||"arraybuffer"===w||"blob"===w||"nodebuffer"===w?new n(g+j+v.length):new m(g+j+v.length),c=0;c<e.length;c++)b.append(e[c].fileRecord),b.append(e[c].compressedObject.compressedContent);for(c=0;c<e.length;c++)b.append(e[c].dirRecord);b.append(v);var x=b.finalize();switch(a.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return d.transformTo(a.type.toLowerCase(),x);case"blob":return d.arrayBuffer2Blob(d.transformTo("arraybuffer",x));case"base64":return a.base64?h.encode(x):x;default:return x}},crc32:function(a,b){return e(a,b)},utf8encode:function(a){return d.transformTo("string",l.utf8encode(a))},utf8decode:function(a){return l.utf8decode(a)}};b.exports=A},{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":11,"./signature":14,"./stringWriter":16,"./support":17,"./uint8ArrayWriter":19,"./utf8":20,"./utils":21}],14:[function(a,b,c){"use strict";c.LOCAL_FILE_HEADER="PK",c.CENTRAL_FILE_HEADER="PK",c.CENTRAL_DIRECTORY_END="PK",c.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",c.ZIP64_CENTRAL_DIRECTORY_END="PK",c.DATA_DESCRIPTOR="PK\b"},{}],15:[function(a,b){"use strict";function c(a,b){this.data=a,b||(this.data=e.string2binary(this.data)),this.length=this.data.length,this.index=0}var d=a("./dataReader"),e=a("./utils");c.prototype=new d,c.prototype.byteAt=function(a){return this.data.charCodeAt(a)},c.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)},c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./dataReader":5,"./utils":21}],16:[function(a,b){"use strict";var c=a("./utils"),d=function(){this.data=[]};d.prototype={append:function(a){a=c.transformTo("string",a),this.data.push(a)},finalize:function(){return this.data.join("")}},b.exports=d},{"./utils":21}],17:[function(a,b,c){(function(a){"use strict";if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,c.nodebuffer="undefined"!=typeof a,c.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)c.blob=!1;else{var b=new ArrayBuffer(0);try{c.blob=0===new Blob([b],{type:"application/zip"}).size}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e;f.append(b),c.blob=0===f.getBlob("application/zip").size}catch(d){c.blob=!1}}}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],18:[function(a,b){"use strict";function c(a){a&&(this.data=a,this.length=this.data.length,this.index=0)}var d=a("./dataReader");c.prototype=new d,c.prototype.byteAt=function(a){return this.data[a]},c.prototype.lastIndexOfSignature=function(a){for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.length-4;f>=0;--f)if(this.data[f]===b&&this.data[f+1]===c&&this.data[f+2]===d&&this.data[f+3]===e)return f;return-1},c.prototype.readData=function(a){if(this.checkOffset(a),0===a)return new Uint8Array(0);var b=this.data.subarray(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./dataReader":5}],19:[function(a,b){"use strict";var c=a("./utils"),d=function(a){this.data=new Uint8Array(a),this.index=0};d.prototype={append:function(a){0!==a.length&&(a=c.transformTo("uint8array",a),this.data.set(a,this.index),this.index+=a.length)},finalize:function(){return this.data}},b.exports=d},{"./utils":21}],20:[function(a,b,c){"use strict";for(var d=a("./utils"),e=a("./support"),f=a("./nodeBuffer"),g=new Array(256),h=0;256>h;h++)g[h]=h>=252?6:h>=248?5:h>=240?4:h>=224?3:h>=192?2:1;g[254]=g[254]=1;var i=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h>f;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=128>c?1:2048>c?2:65536>c?3:4;for(b=e.uint8array?new Uint8Array(i):new Array(i),g=0,f=0;i>g;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),128>c?b[g++]=c:2048>c?(b[g++]=192|c>>>6,b[g++]=128|63&c):65536>c?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},j=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return 0>c?b:0===c?b:c+g[a[c]]>b?c:b},k=function(a){var b,c,e,f,h=a.length,i=new Array(2*h);for(c=0,b=0;h>b;)if(e=a[b++],128>e)i[c++]=e;else if(f=g[e],f>4)i[c++]=65533,b+=f-1;else{for(e&=2===f?31:3===f?15:7;f>1&&h>b;)e=e<<6|63&a[b++],f--;f>1?i[c++]=65533:65536>e?i[c++]=e:(e-=65536,i[c++]=55296|e>>10&1023,i[c++]=56320|1023&e)}return i.length!==c&&(i.subarray?i=i.subarray(0,c):i.length=c),d.applyFromCharCode(i)};c.utf8encode=function(a){return e.nodebuffer?f(a,"utf-8"):i(a)},c.utf8decode=function(a){if(e.nodebuffer)return d.transformTo("nodebuffer",a).toString("utf-8");a=d.transformTo(e.uint8array?"uint8array":"array",a);for(var b=[],c=0,f=a.length,g=65536;f>c;){var h=j(a,Math.min(c+g,f));b.push(e.uint8array?k(a.subarray(c,h)):k(a.slice(c,h))),c=h}return b.join("")}},{"./nodeBuffer":11,"./support":17,"./utils":21}],21:[function(a,b,c){"use strict";function d(a){return a}function e(a,b){for(var c=0;c<a.length;++c)b[c]=255&a.charCodeAt(c);return b}function f(a){var b=65536,d=[],e=a.length,f=c.getTypeOf(a),g=0,h=!0;try{switch(f){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0));break;case"nodebuffer":String.fromCharCode.apply(null,j(0))}}catch(i){h=!1}if(!h){for(var k="",l=0;l<a.length;l++)k+=String.fromCharCode(a[l]);return k}for(;e>g&&b>1;)try{d.push("array"===f||"nodebuffer"===f?String.fromCharCode.apply(null,a.slice(g,Math.min(g+b,e))):String.fromCharCode.apply(null,a.subarray(g,Math.min(g+b,e)))),g+=b}catch(i){b=Math.floor(b/2)}return d.join("")}function g(a,b){for(var c=0;c<a.length;c++)b[c]=a[c];return b}var h=a("./support"),i=a("./compressions"),j=a("./nodeBuffer");c.string2binary=function(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(255&a.charCodeAt(c));return b},c.arrayBuffer2Blob=function(a){c.checkSupport("blob");try{return new Blob([a],{type:"application/zip"})}catch(b){try{var d=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,e=new d;return e.append(a),e.getBlob("application/zip")}catch(b){throw new Error("Bug : can't construct the Blob.")}}},c.applyFromCharCode=f;var k={};k.string={string:d,array:function(a){return e(a,new Array(a.length))},arraybuffer:function(a){return k.string.uint8array(a).buffer},uint8array:function(a){return e(a,new Uint8Array(a.length))},nodebuffer:function(a){return e(a,j(a.length))}},k.array={string:f,array:d,arraybuffer:function(a){return new Uint8Array(a).buffer},uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(a)}},k.arraybuffer={string:function(a){return f(new Uint8Array(a))},array:function(a){return g(new Uint8Array(a),new Array(a.byteLength))},arraybuffer:d,uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(new Uint8Array(a))}},k.uint8array={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return a.buffer},uint8array:d,nodebuffer:function(a){return j(a)}},k.nodebuffer={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return k.nodebuffer.uint8array(a).buffer},uint8array:function(a){return g(a,new Uint8Array(a.length))},nodebuffer:d},c.transformTo=function(a,b){if(b||(b=""),!a)return b;c.checkSupport(a);var d=c.getTypeOf(b),e=k[d][a](b);return e},c.getTypeOf=function(a){return"string"==typeof a?"string":"[object Array]"===Object.prototype.toString.call(a)?"array":h.nodebuffer&&j.test(a)?"nodebuffer":h.uint8array&&a instanceof Uint8Array?"uint8array":h.arraybuffer&&a instanceof ArrayBuffer?"arraybuffer":void 0},c.checkSupport=function(a){var b=h[a.toLowerCase()];if(!b)throw new Error(a+" is not supported by this browser")},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(a){var b,c,d="";for(c=0;c<(a||"").length;c++)b=a.charCodeAt(c),d+="\\x"+(16>b?"0":"")+b.toString(16).toUpperCase();return d},c.findCompression=function(a){for(var b in i)if(i.hasOwnProperty(b)&&i[b].magic===a)return i[b];return null},c.isRegExp=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)}},{"./compressions":3,"./nodeBuffer":11,"./support":17}],22:[function(a,b){"use strict";function c(a,b){this.files=[],this.loadOptions=b,a&&this.load(a)}var d=a("./stringReader"),e=a("./nodeBufferReader"),f=a("./uint8ArrayReader"),g=a("./utils"),h=a("./signature"),i=a("./zipEntry"),j=a("./support"),k=a("./object");c.prototype={checkSignature:function(a){var b=this.reader.readString(4);if(b!==a)throw new Error("Corrupted zip or bug : unexpected signature ("+g.pretty(b)+", expected "+g.pretty(a)+")")},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2),this.zipComment=this.reader.readString(this.zipCommentLength),this.zipComment=k.utf8decode(this.zipComment)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var a,b,c,d=this.zip64EndOfCentralSize-44,e=0;d>e;)a=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readString(b),this.zip64ExtensibleData[a]={id:a,length:b,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var a,b;for(a=0;a<this.files.length;a++)b=this.files[a],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8()},readCentralDir:function(){var a;for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===h.CENTRAL_FILE_HEADER;)a=new i({zip64:this.zip64},this.loadOptions),a.readCentralPart(this.reader),this.files.push(a)},readEndOfCentral:function(){var a=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(-1===a)throw new Error("Corrupted zip : can't find end of central directory");if(this.reader.setIndex(a),this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===g.MAX_VALUE_16BITS||this.diskWithCentralDirStart===g.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===g.MAX_VALUE_16BITS||this.centralDirRecords===g.MAX_VALUE_16BITS||this.centralDirSize===g.MAX_VALUE_32BITS||this.centralDirOffset===g.MAX_VALUE_32BITS){if(this.zip64=!0,a=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),-1===a)throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");this.reader.setIndex(a),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}},prepareReader:function(a){var b=g.getTypeOf(a);this.reader="string"!==b||j.uint8array?"nodebuffer"===b?new e(a):new f(g.transformTo("uint8array",a)):new d(a,this.loadOptions.optimizedBinaryString)},load:function(a){this.prepareReader(a),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},b.exports=c},{"./nodeBufferReader":12,"./object":13,"./signature":14,"./stringReader":15,"./support":17,"./uint8ArrayReader":18,"./utils":21,"./zipEntry":23}],23:[function(a,b){"use strict";function c(a,b){this.options=a,this.loadOptions=b}var d=a("./stringReader"),e=a("./utils"),f=a("./compressedObject"),g=a("./object");c.prototype={isEncrypted:function(){return 1===(1&this.bitFlag)},useUTF8:function(){return 2048===(2048&this.bitFlag)},prepareCompressedContent:function(a,b,c){return function(){var d=a.index;a.setIndex(b);var e=a.readData(c);return a.setIndex(d),e}},prepareContent:function(a,b,c,d,f){return function(){var a=e.transformTo(d.uncompressInputType,this.getCompressedContent()),b=d.uncompress(a);if(b.length!==f)throw new Error("Bug : uncompressed data size mismatch");return b}},readLocalPart:function(a){var b,c;if(a.skip(22),this.fileNameLength=a.readInt(2),c=a.readInt(2),this.fileName=a.readString(this.fileNameLength),a.skip(c),-1==this.compressedSize||-1==this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");if(b=e.findCompression(this.compressionMethod),null===b)throw new Error("Corrupted zip : compression "+e.pretty(this.compressionMethod)+" unknown (inner file : "+this.fileName+")");if(this.decompressed=new f,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(a,a.index,this.compressedSize,b),this.decompressed.getContent=this.prepareContent(a,a.index,this.compressedSize,b,this.uncompressedSize),this.loadOptions.checkCRC32&&(this.decompressed=e.transformTo("string",this.decompressed.getContent()),g.crc32(this.decompressed)!==this.crc32))throw new Error("Corrupted zip : CRC32 mismatch")},readCentralPart:function(a){if(this.versionMadeBy=a.readString(2),this.versionNeeded=a.readInt(2),this.bitFlag=a.readInt(2),this.compressionMethod=a.readString(2),this.date=a.readDate(),this.crc32=a.readInt(4),this.compressedSize=a.readInt(4),this.uncompressedSize=a.readInt(4),this.fileNameLength=a.readInt(2),this.extraFieldsLength=a.readInt(2),this.fileCommentLength=a.readInt(2),this.diskNumberStart=a.readInt(2),this.internalFileAttributes=a.readInt(2),this.externalFileAttributes=a.readInt(4),this.localHeaderOffset=a.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");this.fileName=a.readString(this.fileNameLength),this.readExtraFields(a),this.parseZIP64ExtraField(a),this.fileComment=a.readString(this.fileCommentLength),this.dir=16&this.externalFileAttributes?!0:!1},parseZIP64ExtraField:function(){if(this.extraFields[1]){var a=new d(this.extraFields[1].value);this.uncompressedSize===e.MAX_VALUE_32BITS&&(this.uncompressedSize=a.readInt(8)),this.compressedSize===e.MAX_VALUE_32BITS&&(this.compressedSize=a.readInt(8)),this.localHeaderOffset===e.MAX_VALUE_32BITS&&(this.localHeaderOffset=a.readInt(8)),this.diskNumberStart===e.MAX_VALUE_32BITS&&(this.diskNumberStart=a.readInt(4))}},readExtraFields:function(a){var b,c,d,e=a.index;for(this.extraFields=this.extraFields||{};a.index<e+this.extraFieldsLength;)b=a.readInt(2),c=a.readInt(2),d=a.readString(c),this.extraFields[b]={id:b,length:c,value:d}},handleUTF8:function(){if(this.useUTF8())this.fileName=g.utf8decode(this.fileName),this.fileComment=g.utf8decode(this.fileComment);else{var a=this.findExtraFieldUnicodePath();null!==a&&(this.fileName=a);var b=this.findExtraFieldUnicodeComment();null!==b&&(this.fileComment=b)}},findExtraFieldUnicodePath:function(){var a=this.extraFields[28789];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileName)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5))}return null},findExtraFieldUnicodeComment:function(){var a=this.extraFields[25461];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileComment)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5))}return null}},b.exports=c},{"./compressedObject":2,"./object":13,"./stringReader":15,"./utils":21}],24:[function(a,b){"use strict";var c=a("./lib/utils/common").assign,d=a("./lib/deflate"),e=a("./lib/inflate"),f=a("./lib/zlib/constants"),g={};c(g,d,e,f),b.exports=g},{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(a,b,c){"use strict";function d(a,b){var c=new s(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function e(a,b){return b=b||{},b.raw=!0,d(a,b)}function f(a,b){return b=b||{},b.gzip=!0,d(a,b)}var g=a("./zlib/deflate.js"),h=a("./utils/common"),i=a("./utils/strings"),j=a("./zlib/messages"),k=a("./zlib/zstream"),l=0,m=4,n=0,o=1,p=-1,q=0,r=8,s=function(a){this.options=h.assign({level:p,method:r,chunkSize:16384,windowBits:15,memLevel:8,strategy:q,to:""},a||{});var b=this.options;b.raw&&b.windowBits>0?b.windowBits=-b.windowBits:b.gzip&&b.windowBits>0&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var c=g.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(c!==n)throw new Error(j[c]);b.header&&g.deflateSetHeader(this.strm,b.header)
};s.prototype.push=function(a,b){var c,d,e=this.strm,f=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?m:l,e.input="string"==typeof a?i.string2buf(a):a,e.next_in=0,e.avail_in=e.input.length;do{if(0===e.avail_out&&(e.output=new h.Buf8(f),e.next_out=0,e.avail_out=f),c=g.deflate(e,d),c!==o&&c!==n)return this.onEnd(c),this.ended=!0,!1;(0===e.avail_out||0===e.avail_in&&d===m)&&this.onData("string"===this.options.to?i.buf2binstring(h.shrinkBuf(e.output,e.next_out)):h.shrinkBuf(e.output,e.next_out))}while((e.avail_in>0||0===e.avail_out)&&c!==o);return d===m?(c=g.deflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===n):!0},s.prototype.onData=function(a){this.chunks.push(a)},s.prototype.onEnd=function(a){a===n&&(this.result="string"===this.options.to?this.chunks.join(""):h.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Deflate=s,c.deflate=d,c.deflateRaw=e,c.gzip=f},{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(a,b,c){"use strict";function d(a,b){var c=new m(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function e(a,b){return b=b||{},b.raw=!0,d(a,b)}var f=a("./zlib/inflate.js"),g=a("./utils/common"),h=a("./utils/strings"),i=a("./zlib/constants"),j=a("./zlib/messages"),k=a("./zlib/zstream"),l=a("./zlib/gzheader"),m=function(a){this.options=g.assign({chunkSize:16384,windowBits:0,to:""},a||{});var b=this.options;b.raw&&b.windowBits>=0&&b.windowBits<16&&(b.windowBits=-b.windowBits,0===b.windowBits&&(b.windowBits=-15)),!(b.windowBits>=0&&b.windowBits<16)||a&&a.windowBits||(b.windowBits+=32),b.windowBits>15&&b.windowBits<48&&0===(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var c=f.inflateInit2(this.strm,b.windowBits);if(c!==i.Z_OK)throw new Error(j[c]);this.header=new l,f.inflateGetHeader(this.strm,this.header)};m.prototype.push=function(a,b){var c,d,e,j,k,l=this.strm,m=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?i.Z_FINISH:i.Z_NO_FLUSH,l.input="string"==typeof a?h.binstring2buf(a):a,l.next_in=0,l.avail_in=l.input.length;do{if(0===l.avail_out&&(l.output=new g.Buf8(m),l.next_out=0,l.avail_out=m),c=f.inflate(l,i.Z_NO_FLUSH),c!==i.Z_STREAM_END&&c!==i.Z_OK)return this.onEnd(c),this.ended=!0,!1;l.next_out&&(0===l.avail_out||c===i.Z_STREAM_END||0===l.avail_in&&d===i.Z_FINISH)&&("string"===this.options.to?(e=h.utf8border(l.output,l.next_out),j=l.next_out-e,k=h.buf2string(l.output,e),l.next_out=j,l.avail_out=m-j,j&&g.arraySet(l.output,l.output,e,j,0),this.onData(k)):this.onData(g.shrinkBuf(l.output,l.next_out)))}while(l.avail_in>0&&c!==i.Z_STREAM_END);return c===i.Z_STREAM_END&&(d=i.Z_FINISH),d===i.Z_FINISH?(c=f.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===i.Z_OK):!0},m.prototype.onData=function(a){this.chunks.push(a)},m.prototype.onEnd=function(a){a===i.Z_OK&&(this.result="string"===this.options.to?this.chunks.join(""):g.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Inflate=m,c.inflate=d,c.inflateRaw=e,c.ungzip=d},{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;c.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!=typeof c)throw new TypeError(c+"must be non-object");for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}}return a},c.shrinkBuf=function(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a)};var e={arraySet:function(a,b,c,d,e){if(b.subarray&&a.subarray)return void a.set(b.subarray(c,c+d),e);for(var f=0;d>f;f++)a[e+f]=b[c+f]},flattenChunks:function(a){var b,c,d,e,f,g;for(d=0,b=0,c=a.length;c>b;b++)d+=a[b].length;for(g=new Uint8Array(d),e=0,b=0,c=a.length;c>b;b++)f=a[b],g.set(f,e),e+=f.length;return g}},f={arraySet:function(a,b,c,d,e){for(var f=0;d>f;f++)a[e+f]=b[c+f]},flattenChunks:function(a){return[].concat.apply([],a)}};c.setTyped=function(a){a?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,e)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,f))},c.setTyped(d)},{}],28:[function(a,b,c){"use strict";function d(a,b){if(65537>b&&(a.subarray&&g||!a.subarray&&f))return String.fromCharCode.apply(null,e.shrinkBuf(a,b));for(var c="",d=0;b>d;d++)c+=String.fromCharCode(a[d]);return c}var e=a("./common"),f=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch(h){f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(h){g=!1}for(var i=new e.Buf8(256),j=0;256>j;j++)i[j]=j>=252?6:j>=248?5:j>=240?4:j>=224?3:j>=192?2:1;i[254]=i[254]=1,c.string2buf=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h>f;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=128>c?1:2048>c?2:65536>c?3:4;for(b=new e.Buf8(i),g=0,f=0;i>g;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),128>c?b[g++]=c:2048>c?(b[g++]=192|c>>>6,b[g++]=128|63&c):65536>c?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},c.buf2binstring=function(a){return d(a,a.length)},c.binstring2buf=function(a){for(var b=new e.Buf8(a.length),c=0,d=b.length;d>c;c++)b[c]=a.charCodeAt(c);return b},c.buf2string=function(a,b){var c,e,f,g,h=b||a.length,j=new Array(2*h);for(e=0,c=0;h>c;)if(f=a[c++],128>f)j[e++]=f;else if(g=i[f],g>4)j[e++]=65533,c+=g-1;else{for(f&=2===g?31:3===g?15:7;g>1&&h>c;)f=f<<6|63&a[c++],g--;g>1?j[e++]=65533:65536>f?j[e++]=f:(f-=65536,j[e++]=55296|f>>10&1023,j[e++]=56320|1023&f)}return d(j,e)},c.utf8border=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return 0>c?b:0===c?b:c+i[a[c]]>b?c:b}},{"./common":27}],29:[function(a,b){"use strict";function c(a,b,c,d){for(var e=65535&a|0,f=a>>>16&65535|0,g=0;0!==c;){g=c>2e3?2e3:c,c-=g;do e=e+b[d++]|0,f=f+e|0;while(--g);e%=65521,f%=65521}return e|f<<16|0}b.exports=c},{}],30:[function(a,b){b.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],31:[function(a,b){"use strict";function c(){for(var a,b=[],c=0;256>c;c++){a=c;for(var d=0;8>d;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a}return b}function d(a,b,c,d){var f=e,g=d+c;a=-1^a;for(var h=d;g>h;h++)a=a>>>8^f[255&(a^b[h])];return-1^a}var e=c();b.exports=d},{}],32:[function(a,b,c){"use strict";function d(a,b){return a.msg=G[b],b}function e(a){return(a<<1)-(a>4?9:0)}function f(a){for(var b=a.length;--b>=0;)a[b]=0}function g(a){var b=a.state,c=b.pending;c>a.avail_out&&(c=a.avail_out),0!==c&&(C.arraySet(a.output,b.pending_buf,b.pending_out,c,a.next_out),a.next_out+=c,b.pending_out+=c,a.total_out+=c,a.avail_out-=c,b.pending-=c,0===b.pending&&(b.pending_out=0))}function h(a,b){D._tr_flush_block(a,a.block_start>=0?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,g(a.strm)}function i(a,b){a.pending_buf[a.pending++]=b}function j(a,b){a.pending_buf[a.pending++]=b>>>8&255,a.pending_buf[a.pending++]=255&b}function k(a,b,c,d){var e=a.avail_in;return e>d&&(e=d),0===e?0:(a.avail_in-=e,C.arraySet(b,a.input,a.next_in,e,c),1===a.state.wrap?a.adler=E(a.adler,b,e,c):2===a.state.wrap&&(a.adler=F(a.adler,b,e,c)),a.next_in+=e,a.total_in+=e,e)}function l(a,b){var c,d,e=a.max_chain_length,f=a.strstart,g=a.prev_length,h=a.nice_match,i=a.strstart>a.w_size-jb?a.strstart-(a.w_size-jb):0,j=a.window,k=a.w_mask,l=a.prev,m=a.strstart+ib,n=j[f+g-1],o=j[f+g];a.prev_length>=a.good_match&&(e>>=2),h>a.lookahead&&(h=a.lookahead);do if(c=b,j[c+g]===o&&j[c+g-1]===n&&j[c]===j[f]&&j[++c]===j[f+1]){f+=2,c++;do;while(j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&m>f);if(d=ib-(m-f),f=m-ib,d>g){if(a.match_start=b,g=d,d>=h)break;n=j[f+g-1],o=j[f+g]}}while((b=l[b&k])>i&&0!==--e);return g<=a.lookahead?g:a.lookahead}function m(a){var b,c,d,e,f,g=a.w_size;do{if(e=a.window_size-a.lookahead-a.strstart,a.strstart>=g+(g-jb)){C.arraySet(a.window,a.window,g,g,0),a.match_start-=g,a.strstart-=g,a.block_start-=g,c=a.hash_size,b=c;do d=a.head[--b],a.head[b]=d>=g?d-g:0;while(--c);c=g,b=c;do d=a.prev[--b],a.prev[b]=d>=g?d-g:0;while(--c);e+=g}if(0===a.strm.avail_in)break;if(c=k(a.strm,a.window,a.strstart+a.lookahead,e),a.lookahead+=c,a.lookahead+a.insert>=hb)for(f=a.strstart-a.insert,a.ins_h=a.window[f],a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+1])&a.hash_mask;a.insert&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+hb-1])&a.hash_mask,a.prev[f&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=f,f++,a.insert--,!(a.lookahead+a.insert<hb)););}while(a.lookahead<jb&&0!==a.strm.avail_in)}function n(a,b){var c=65535;for(c>a.pending_buf_size-5&&(c=a.pending_buf_size-5);;){if(a.lookahead<=1){if(m(a),0===a.lookahead&&b===H)return sb;if(0===a.lookahead)break}a.strstart+=a.lookahead,a.lookahead=0;var d=a.block_start+c;if((0===a.strstart||a.strstart>=d)&&(a.lookahead=a.strstart-d,a.strstart=d,h(a,!1),0===a.strm.avail_out))return sb;if(a.strstart-a.block_start>=a.w_size-jb&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.strstart>a.block_start&&(h(a,!1),0===a.strm.avail_out)?sb:sb}function o(a,b){for(var c,d;;){if(a.lookahead<jb){if(m(a),a.lookahead<jb&&b===H)return sb;if(0===a.lookahead)break}if(c=0,a.lookahead>=hb&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),0!==c&&a.strstart-c<=a.w_size-jb&&(a.match_length=l(a,c)),a.match_length>=hb)if(d=D._tr_tally(a,a.strstart-a.match_start,a.match_length-hb),a.lookahead-=a.match_length,a.match_length<=a.max_lazy_match&&a.lookahead>=hb){a.match_length--;do a.strstart++,a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart;while(0!==--a.match_length);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+1])&a.hash_mask;else d=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(d&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=a.strstart<hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function p(a,b){for(var c,d,e;;){if(a.lookahead<jb){if(m(a),a.lookahead<jb&&b===H)return sb;if(0===a.lookahead)break}if(c=0,a.lookahead>=hb&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=hb-1,0!==c&&a.prev_length<a.max_lazy_match&&a.strstart-c<=a.w_size-jb&&(a.match_length=l(a,c),a.match_length<=5&&(a.strategy===S||a.match_length===hb&&a.strstart-a.match_start>4096)&&(a.match_length=hb-1)),a.prev_length>=hb&&a.match_length<=a.prev_length){e=a.strstart+a.lookahead-hb,d=D._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-hb),a.lookahead-=a.prev_length-1,a.prev_length-=2;do++a.strstart<=e&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart);while(0!==--a.prev_length);if(a.match_available=0,a.match_length=hb-1,a.strstart++,d&&(h(a,!1),0===a.strm.avail_out))return sb}else if(a.match_available){if(d=D._tr_tally(a,0,a.window[a.strstart-1]),d&&h(a,!1),a.strstart++,a.lookahead--,0===a.strm.avail_out)return sb}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&&(d=D._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart<hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function q(a,b){for(var c,d,e,f,g=a.window;;){if(a.lookahead<=ib){if(m(a),a.lookahead<=ib&&b===H)return sb;if(0===a.lookahead)break}if(a.match_length=0,a.lookahead>=hb&&a.strstart>0&&(e=a.strstart-1,d=g[e],d===g[++e]&&d===g[++e]&&d===g[++e])){f=a.strstart+ib;do;while(d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&f>e);a.match_length=ib-(f-e),a.match_length>a.lookahead&&(a.match_length=a.lookahead)}if(a.match_length>=hb?(c=D._tr_tally(a,1,a.match_length-hb),a.lookahead-=a.match_length,a.strstart+=a.match_length,a.match_length=0):(c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++),c&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function r(a,b){for(var c;;){if(0===a.lookahead&&(m(a),0===a.lookahead)){if(b===H)return sb;break}if(a.match_length=0,c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++,c&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function s(a){a.window_size=2*a.w_size,f(a.head),a.max_lazy_match=B[a.level].max_lazy,a.good_match=B[a.level].good_length,a.nice_match=B[a.level].nice_length,a.max_chain_length=B[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=hb-1,a.match_available=0,a.ins_h=0}function t(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new C.Buf16(2*fb),this.dyn_dtree=new C.Buf16(2*(2*db+1)),this.bl_tree=new C.Buf16(2*(2*eb+1)),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new C.Buf16(gb+1),this.heap=new C.Buf16(2*cb+1),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new C.Buf16(2*cb+1),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function u(a){var b;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=X,b=a.state,b.pending=0,b.pending_out=0,b.wrap<0&&(b.wrap=-b.wrap),b.status=b.wrap?lb:qb,a.adler=2===b.wrap?0:1,b.last_flush=H,D._tr_init(b),M):d(a,O)}function v(a){var b=u(a);return b===M&&s(a.state),b}function w(a,b){return a&&a.state?2!==a.state.wrap?O:(a.state.gzhead=b,M):O}function x(a,b,c,e,f,g){if(!a)return O;var h=1;if(b===R&&(b=6),0>e?(h=0,e=-e):e>15&&(h=2,e-=16),1>f||f>Z||c!==Y||8>e||e>15||0>b||b>9||0>g||g>V)return d(a,O);8===e&&(e=9);var i=new t;return a.state=i,i.strm=a,i.wrap=h,i.gzhead=null,i.w_bits=e,i.w_size=1<<i.w_bits,i.w_mask=i.w_size-1,i.hash_bits=f+7,i.hash_size=1<<i.hash_bits,i.hash_mask=i.hash_size-1,i.hash_shift=~~((i.hash_bits+hb-1)/hb),i.window=new C.Buf8(2*i.w_size),i.head=new C.Buf16(i.hash_size),i.prev=new C.Buf16(i.w_size),i.lit_bufsize=1<<f+6,i.pending_buf_size=4*i.lit_bufsize,i.pending_buf=new C.Buf8(i.pending_buf_size),i.d_buf=i.lit_bufsize>>1,i.l_buf=3*i.lit_bufsize,i.level=b,i.strategy=g,i.method=c,v(a)}function y(a,b){return x(a,b,Y,$,_,W)}function z(a,b){var c,h,k,l;if(!a||!a.state||b>L||0>b)return a?d(a,O):O;if(h=a.state,!a.output||!a.input&&0!==a.avail_in||h.status===rb&&b!==K)return d(a,0===a.avail_out?Q:O);if(h.strm=a,c=h.last_flush,h.last_flush=b,h.status===lb)if(2===h.wrap)a.adler=0,i(h,31),i(h,139),i(h,8),h.gzhead?(i(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),i(h,255&h.gzhead.time),i(h,h.gzhead.time>>8&255),i(h,h.gzhead.time>>16&255),i(h,h.gzhead.time>>24&255),i(h,9===h.level?2:h.strategy>=T||h.level<2?4:0),i(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(i(h,255&h.gzhead.extra.length),i(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(a.adler=F(a.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=mb):(i(h,0),i(h,0),i(h,0),i(h,0),i(h,0),i(h,9===h.level?2:h.strategy>=T||h.level<2?4:0),i(h,wb),h.status=qb);else{var m=Y+(h.w_bits-8<<4)<<8,n=-1;n=h.strategy>=T||h.level<2?0:h.level<6?1:6===h.level?2:3,m|=n<<6,0!==h.strstart&&(m|=kb),m+=31-m%31,h.status=qb,j(h,m),0!==h.strstart&&(j(h,a.adler>>>16),j(h,65535&a.adler)),a.adler=1}if(h.status===mb)if(h.gzhead.extra){for(k=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending!==h.pending_buf_size));)i(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=nb)}else h.status=nb;if(h.status===nb)if(h.gzhead.name){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.gzindex=0,h.status=ob)}else h.status=ob;if(h.status===ob)if(h.gzhead.comment){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.status=pb)}else h.status=pb;if(h.status===pb&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&g(a),h.pending+2<=h.pending_buf_size&&(i(h,255&a.adler),i(h,a.adler>>8&255),a.adler=0,h.status=qb)):h.status=qb),0!==h.pending){if(g(a),0===a.avail_out)return h.last_flush=-1,M}else if(0===a.avail_in&&e(b)<=e(c)&&b!==K)return d(a,Q);if(h.status===rb&&0!==a.avail_in)return d(a,Q);if(0!==a.avail_in||0!==h.lookahead||b!==H&&h.status!==rb){var o=h.strategy===T?r(h,b):h.strategy===U?q(h,b):B[h.level].func(h,b);if((o===ub||o===vb)&&(h.status=rb),o===sb||o===ub)return 0===a.avail_out&&(h.last_flush=-1),M;if(o===tb&&(b===I?D._tr_align(h):b!==L&&(D._tr_stored_block(h,0,0,!1),b===J&&(f(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),g(a),0===a.avail_out))return h.last_flush=-1,M}return b!==K?M:h.wrap<=0?N:(2===h.wrap?(i(h,255&a.adler),i(h,a.adler>>8&255),i(h,a.adler>>16&255),i(h,a.adler>>24&255),i(h,255&a.total_in),i(h,a.total_in>>8&255),i(h,a.total_in>>16&255),i(h,a.total_in>>24&255)):(j(h,a.adler>>>16),j(h,65535&a.adler)),g(a),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?M:N)}function A(a){var b;return a&&a.state?(b=a.state.status,b!==lb&&b!==mb&&b!==nb&&b!==ob&&b!==pb&&b!==qb&&b!==rb?d(a,O):(a.state=null,b===qb?d(a,P):M)):O}var B,C=a("../utils/common"),D=a("./trees"),E=a("./adler32"),F=a("./crc32"),G=a("./messages"),H=0,I=1,J=3,K=4,L=5,M=0,N=1,O=-2,P=-3,Q=-5,R=-1,S=1,T=2,U=3,V=4,W=0,X=2,Y=8,Z=9,$=15,_=8,ab=29,bb=256,cb=bb+1+ab,db=30,eb=19,fb=2*cb+1,gb=15,hb=3,ib=258,jb=ib+hb+1,kb=32,lb=42,mb=69,nb=73,ob=91,pb=103,qb=113,rb=666,sb=1,tb=2,ub=3,vb=4,wb=3,xb=function(a,b,c,d,e){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d,this.func=e};B=[new xb(0,0,0,0,n),new xb(4,4,8,4,o),new xb(4,5,16,8,o),new xb(4,6,32,32,o),new xb(4,4,16,16,p),new xb(8,16,32,32,p),new xb(8,16,128,128,p),new xb(8,32,128,256,p),new xb(32,128,258,1024,p),new xb(32,258,258,4096,p)],c.deflateInit=y,c.deflateInit2=x,c.deflateReset=v,c.deflateResetKeep=u,c.deflateSetHeader=w,c.deflate=z,c.deflateEnd=A,c.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(a,b){"use strict";function c(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}b.exports=c},{}],34:[function(a,b){"use strict";var c=30,d=12;b.exports=function(a,b){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;e=a.state,f=a.next_in,B=a.input,g=f+(a.avail_in-5),h=a.next_out,C=a.output,i=h-(b-a.avail_out),j=h+(a.avail_out-257),k=e.dmax,l=e.wsize,m=e.whave,n=e.wnext,o=e.window,p=e.hold,q=e.bits,r=e.lencode,s=e.distcode,t=(1<<e.lenbits)-1,u=(1<<e.distbits)-1;a:do{15>q&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=r[p&t];b:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,0===w)C[h++]=65535&v;else{if(!(16&w)){if(0===(64&w)){v=r[(65535&v)+(p&(1<<w)-1)];continue b}if(32&w){e.mode=d;break a}a.msg="invalid literal/length code",e.mode=c;break a}x=65535&v,w&=15,w&&(w>q&&(p+=B[f++]<<q,q+=8),x+=p&(1<<w)-1,p>>>=w,q-=w),15>q&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=s[p&u];c:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,!(16&w)){if(0===(64&w)){v=s[(65535&v)+(p&(1<<w)-1)];continue c}a.msg="invalid distance code",e.mode=c;break a}if(y=65535&v,w&=15,w>q&&(p+=B[f++]<<q,q+=8,w>q&&(p+=B[f++]<<q,q+=8)),y+=p&(1<<w)-1,y>k){a.msg="invalid distance too far back",e.mode=c;break a}if(p>>>=w,q-=w,w=h-i,y>w){if(w=y-w,w>m&&e.sane){a.msg="invalid distance too far back",e.mode=c;break a}if(z=0,A=o,0===n){if(z+=l-w,x>w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}else if(w>n){if(z+=l+n-w,w-=n,x>w){x-=w;do C[h++]=o[z++];while(--w);if(z=0,x>n){w=n,x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}}else if(z+=n-w,x>w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}for(;x>2;)C[h++]=A[z++],C[h++]=A[z++],C[h++]=A[z++],x-=3;x&&(C[h++]=A[z++],x>1&&(C[h++]=A[z++]))}else{z=h-y;do C[h++]=C[z++],C[h++]=C[z++],C[h++]=C[z++],x-=3;while(x>2);x&&(C[h++]=C[z++],x>1&&(C[h++]=C[z++]))}break}}break}}while(g>f&&j>h);x=q>>3,f-=x,q-=x<<3,p&=(1<<q)-1,a.next_in=f,a.next_out=h,a.avail_in=g>f?5+(g-f):5-(f-g),a.avail_out=j>h?257+(j-h):257-(h-j),e.hold=p,e.bits=q}},{}],35:[function(a,b,c){"use strict";function d(a){return(a>>>24&255)+(a>>>8&65280)+((65280&a)<<8)+((255&a)<<24)}function e(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function f(a){var b;return a&&a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg="",b.wrap&&(a.adler=1&b.wrap),b.mode=K,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=new r.Buf32(ob),b.distcode=b.distdyn=new r.Buf32(pb),b.sane=1,b.back=-1,C):F}function g(a){var b;return a&&a.state?(b=a.state,b.wsize=0,b.whave=0,b.wnext=0,f(a)):F}function h(a,b){var c,d;return a&&a.state?(d=a.state,0>b?(c=0,b=-b):(c=(b>>4)+1,48>b&&(b&=15)),b&&(8>b||b>15)?F:(null!==d.window&&d.wbits!==b&&(d.window=null),d.wrap=c,d.wbits=b,g(a))):F}function i(a,b){var c,d;return a?(d=new e,a.state=d,d.window=null,c=h(a,b),c!==C&&(a.state=null),c):F}function j(a){return i(a,rb)}function k(a){if(sb){var b;for(p=new r.Buf32(512),q=new r.Buf32(32),b=0;144>b;)a.lens[b++]=8;for(;256>b;)a.lens[b++]=9;for(;280>b;)a.lens[b++]=7;for(;288>b;)a.lens[b++]=8;for(v(x,a.lens,0,288,p,0,a.work,{bits:9}),b=0;32>b;)a.lens[b++]=5;v(y,a.lens,0,32,q,0,a.work,{bits:5}),sb=!1}a.lencode=p,a.lenbits=9,a.distcode=q,a.distbits=5}function l(a,b,c,d){var e,f=a.state;return null===f.window&&(f.wsize=1<<f.wbits,f.wnext=0,f.whave=0,f.window=new r.Buf8(f.wsize)),d>=f.wsize?(r.arraySet(f.window,b,c-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):(e=f.wsize-f.wnext,e>d&&(e=d),r.arraySet(f.window,b,c-d,e,f.wnext),d-=e,d?(r.arraySet(f.window,b,c-d,d,0),f.wnext=d,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&&(f.wnext=0),f.whave<f.wsize&&(f.whave+=e))),0}function m(a,b){var c,e,f,g,h,i,j,m,n,o,p,q,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab=0,Bb=new r.Buf8(4),Cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!a||!a.state||!a.output||!a.input&&0!==a.avail_in)return F;c=a.state,c.mode===V&&(c.mode=W),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,o=i,p=j,xb=C;a:for(;;)switch(c.mode){case K:if(0===c.wrap){c.mode=W;break}for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(2&c.wrap&&35615===m){c.check=0,Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0),m=0,n=0,c.mode=L;break}if(c.flags=0,c.head&&(c.head.done=!1),!(1&c.wrap)||(((255&m)<<8)+(m>>8))%31){a.msg="incorrect header check",c.mode=lb;break}if((15&m)!==J){a.msg="unknown compression method",c.mode=lb;break}if(m>>>=4,n-=4,wb=(15&m)+8,0===c.wbits)c.wbits=wb;else if(wb>c.wbits){a.msg="invalid window size",c.mode=lb;break}c.dmax=1<<wb,a.adler=c.check=1,c.mode=512&m?T:V,m=0,n=0;break;case L:for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.flags=m,(255&c.flags)!==J){a.msg="unknown compression method",c.mode=lb;break}if(57344&c.flags){a.msg="unknown header flags set",c.mode=lb;break}c.head&&(c.head.text=m>>8&1),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=M;case M:for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.time=m),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,Bb[2]=m>>>16&255,Bb[3]=m>>>24&255,c.check=t(c.check,Bb,4,0)),m=0,n=0,c.mode=N;case N:for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.xflags=255&m,c.head.os=m>>8),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=O;case O:if(1024&c.flags){for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length=m,c.head&&(c.head.extra_len=m),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0}else c.head&&(c.head.extra=null);c.mode=P;case P:if(1024&c.flags&&(q=c.length,q>i&&(q=i),q&&(c.head&&(wb=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),r.arraySet(c.head.extra,e,g,q,wb)),512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,c.length-=q),c.length))break a;c.length=0,c.mode=Q;case Q:if(2048&c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&&wb&&c.length<65536&&(c.head.name+=String.fromCharCode(wb));while(wb&&i>q);if(512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a}else c.head&&(c.head.name=null);c.length=0,c.mode=R;case R:if(4096&c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&&wb&&c.length<65536&&(c.head.comment+=String.fromCharCode(wb));while(wb&&i>q);if(512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a}else c.head&&(c.head.comment=null);c.mode=S;case S:if(512&c.flags){for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(65535&c.check)){a.msg="header crc mismatch",c.mode=lb;break}m=0,n=0}c.head&&(c.head.hcrc=c.flags>>9&1,c.head.done=!0),a.adler=c.check=0,c.mode=V;break;case T:for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}a.adler=c.check=d(m),m=0,n=0,c.mode=U;case U:if(0===c.havedict)return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,E;a.adler=c.check=1,c.mode=V;case V:if(b===A||b===B)break a;case W:if(c.last){m>>>=7&n,n-=7&n,c.mode=ib;break}for(;3>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}switch(c.last=1&m,m>>>=1,n-=1,3&m){case 0:c.mode=X;break;case 1:if(k(c),c.mode=bb,b===B){m>>>=2,n-=2;break a}break;case 2:c.mode=$;break;case 3:a.msg="invalid block type",c.mode=lb}m>>>=2,n-=2;break;case X:for(m>>>=7&n,n-=7&n;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if((65535&m)!==(m>>>16^65535)){a.msg="invalid stored block lengths",c.mode=lb;break}if(c.length=65535&m,m=0,n=0,c.mode=Y,b===B)break a;case Y:c.mode=Z;case Z:if(q=c.length){if(q>i&&(q=i),q>j&&(q=j),0===q)break a;r.arraySet(f,e,g,q,h),i-=q,g+=q,j-=q,h+=q,c.length-=q;break}c.mode=V;break;case $:for(;14>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.nlen=(31&m)+257,m>>>=5,n-=5,c.ndist=(31&m)+1,m>>>=5,n-=5,c.ncode=(15&m)+4,m>>>=4,n-=4,c.nlen>286||c.ndist>30){a.msg="too many length or distance symbols",c.mode=lb;break}c.have=0,c.mode=_;case _:for(;c.have<c.ncode;){for(;3>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.lens[Cb[c.have++]]=7&m,m>>>=3,n-=3}for(;c.have<19;)c.lens[Cb[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,yb={bits:c.lenbits},xb=v(w,c.lens,0,19,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg="invalid code lengths set",c.mode=lb;break}c.have=0,c.mode=ab;case ab:for(;c.have<c.nlen+c.ndist;){for(;Ab=c.lencode[m&(1<<c.lenbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(16>sb)m>>>=qb,n-=qb,c.lens[c.have++]=sb;else{if(16===sb){for(zb=qb+2;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m>>>=qb,n-=qb,0===c.have){a.msg="invalid bit length repeat",c.mode=lb;break}wb=c.lens[c.have-1],q=3+(3&m),m>>>=2,n-=2}else if(17===sb){for(zb=qb+3;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qb,n-=qb,wb=0,q=3+(7&m),m>>>=3,n-=3}else{for(zb=qb+7;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qb,n-=qb,wb=0,q=11+(127&m),m>>>=7,n-=7}if(c.have+q>c.nlen+c.ndist){a.msg="invalid bit length repeat",c.mode=lb;break}for(;q--;)c.lens[c.have++]=wb}}if(c.mode===lb)break;if(0===c.lens[256]){a.msg="invalid code -- missing end-of-block",c.mode=lb;break}if(c.lenbits=9,yb={bits:c.lenbits},xb=v(x,c.lens,0,c.nlen,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg="invalid literal/lengths set",c.mode=lb;break}if(c.distbits=6,c.distcode=c.distdyn,yb={bits:c.distbits},xb=v(y,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,yb),c.distbits=yb.bits,xb){a.msg="invalid distances set",c.mode=lb;break}if(c.mode=bb,b===B)break a;case bb:c.mode=cb;case cb:if(i>=6&&j>=258){a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,u(a,p),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,c.mode===V&&(c.back=-1);break}for(c.back=0;Ab=c.lencode[m&(1<<c.lenbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(rb&&0===(240&rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.lencode[vb+((m&(1<<tb+ub)-1)>>tb)],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=tb+qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=tb,n-=tb,c.back+=tb}if(m>>>=qb,n-=qb,c.back+=qb,c.length=sb,0===rb){c.mode=hb;break}if(32&rb){c.back=-1,c.mode=V;break}if(64&rb){a.msg="invalid literal/length code",c.mode=lb;break}c.extra=15&rb,c.mode=db;case db:if(c.extra){for(zb=c.extra;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=eb;case eb:for(;Ab=c.distcode[m&(1<<c.distbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(0===(240&rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.distcode[vb+((m&(1<<tb+ub)-1)>>tb)],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=tb+qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=tb,n-=tb,c.back+=tb}if(m>>>=qb,n-=qb,c.back+=qb,64&rb){a.msg="invalid distance code",c.mode=lb;break}c.offset=sb,c.extra=15&rb,c.mode=fb;case fb:if(c.extra){for(zb=c.extra;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.offset+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}if(c.offset>c.dmax){a.msg="invalid distance too far back",c.mode=lb;break}c.mode=gb;case gb:if(0===j)break a;
    if(q=p-j,c.offset>q){if(q=c.offset-q,q>c.whave&&c.sane){a.msg="invalid distance too far back",c.mode=lb;break}q>c.wnext?(q-=c.wnext,ob=c.wsize-q):ob=c.wnext-q,q>c.length&&(q=c.length),pb=c.window}else pb=f,ob=h-c.offset,q=c.length;q>j&&(q=j),j-=q,c.length-=q;do f[h++]=pb[ob++];while(--q);0===c.length&&(c.mode=cb);break;case hb:if(0===j)break a;f[h++]=c.length,j--,c.mode=cb;break;case ib:if(c.wrap){for(;32>n;){if(0===i)break a;i--,m|=e[g++]<<n,n+=8}if(p-=j,a.total_out+=p,c.total+=p,p&&(a.adler=c.check=c.flags?t(c.check,f,p,h-p):s(c.check,f,p,h-p)),p=j,(c.flags?m:d(m))!==c.check){a.msg="incorrect data check",c.mode=lb;break}m=0,n=0}c.mode=jb;case jb:if(c.wrap&&c.flags){for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(4294967295&c.total)){a.msg="incorrect length check",c.mode=lb;break}m=0,n=0}c.mode=kb;case kb:xb=D;break a;case lb:xb=G;break a;case mb:return H;case nb:default:return F}return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,(c.wsize||p!==a.avail_out&&c.mode<lb&&(c.mode<ib||b!==z))&&l(a,a.output,a.next_out,p-a.avail_out)?(c.mode=mb,H):(o-=a.avail_in,p-=a.avail_out,a.total_in+=o,a.total_out+=p,c.total+=p,c.wrap&&p&&(a.adler=c.check=c.flags?t(c.check,f,p,a.next_out-p):s(c.check,f,p,a.next_out-p)),a.data_type=c.bits+(c.last?64:0)+(c.mode===V?128:0)+(c.mode===bb||c.mode===Y?256:0),(0===o&&0===p||b===z)&&xb===C&&(xb=I),xb)}function n(a){if(!a||!a.state)return F;var b=a.state;return b.window&&(b.window=null),a.state=null,C}function o(a,b){var c;return a&&a.state?(c=a.state,0===(2&c.wrap)?F:(c.head=b,b.done=!1,C)):F}var p,q,r=a("../utils/common"),s=a("./adler32"),t=a("./crc32"),u=a("./inffast"),v=a("./inftrees"),w=0,x=1,y=2,z=4,A=5,B=6,C=0,D=1,E=2,F=-2,G=-3,H=-4,I=-5,J=8,K=1,L=2,M=3,N=4,O=5,P=6,Q=7,R=8,S=9,T=10,U=11,V=12,W=13,X=14,Y=15,Z=16,$=17,_=18,ab=19,bb=20,cb=21,db=22,eb=23,fb=24,gb=25,hb=26,ib=27,jb=28,kb=29,lb=30,mb=31,nb=32,ob=852,pb=592,qb=15,rb=qb,sb=!0;c.inflateReset=g,c.inflateReset2=h,c.inflateResetKeep=f,c.inflateInit=j,c.inflateInit2=i,c.inflate=m,c.inflateEnd=n,c.inflateGetHeader=o,c.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(a,b){"use strict";var c=a("../utils/common"),d=15,e=852,f=592,g=0,h=1,i=2,j=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],k=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],m=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];b.exports=function(a,b,n,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C=s.bits,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=null,O=0,P=new c.Buf16(d+1),Q=new c.Buf16(d+1),R=null,S=0;for(D=0;d>=D;D++)P[D]=0;for(E=0;o>E;E++)P[b[n+E]]++;for(H=C,G=d;G>=1&&0===P[G];G--);if(H>G&&(H=G),0===G)return p[q++]=20971520,p[q++]=20971520,s.bits=1,0;for(F=1;G>F&&0===P[F];F++);for(F>H&&(H=F),K=1,D=1;d>=D;D++)if(K<<=1,K-=P[D],0>K)return-1;if(K>0&&(a===g||1!==G))return-1;for(Q[1]=0,D=1;d>D;D++)Q[D+1]=Q[D]+P[D];for(E=0;o>E;E++)0!==b[n+E]&&(r[Q[b[n+E]]++]=E);if(a===g?(N=R=r,y=19):a===h?(N=j,O-=257,R=k,S-=257,y=256):(N=l,R=m,y=-1),M=0,E=0,D=F,x=q,I=H,J=0,v=-1,L=1<<H,w=L-1,a===h&&L>e||a===i&&L>f)return 1;for(var T=0;;){T++,z=D-J,r[E]<y?(A=0,B=r[E]):r[E]>y?(A=R[S+r[E]],B=N[O+r[E]]):(A=96,B=0),t=1<<D-J,u=1<<I,F=u;do u-=t,p[x+(M>>J)+u]=z<<24|A<<16|B|0;while(0!==u);for(t=1<<D-1;M&t;)t>>=1;if(0!==t?(M&=t-1,M+=t):M=0,E++,0===--P[D]){if(D===G)break;D=b[n+r[E]]}if(D>H&&(M&w)!==v){for(0===J&&(J=H),x+=F,I=D-J,K=1<<I;G>I+J&&(K-=P[I+J],!(0>=K));)I++,K<<=1;if(L+=1<<I,a===h&&L>e||a===i&&L>f)return 1;v=M&w,p[v]=H<<24|I<<16|x-q|0}}return 0!==M&&(p[x+M]=D-J<<24|64<<16|0),s.bits=H,0}},{"../utils/common":27}],37:[function(a,b){"use strict";b.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],38:[function(a,b,c){"use strict";function d(a){for(var b=a.length;--b>=0;)a[b]=0}function e(a){return 256>a?gb[a]:gb[256+(a>>>7)]}function f(a,b){a.pending_buf[a.pending++]=255&b,a.pending_buf[a.pending++]=b>>>8&255}function g(a,b,c){a.bi_valid>V-c?(a.bi_buf|=b<<a.bi_valid&65535,f(a,a.bi_buf),a.bi_buf=b>>V-a.bi_valid,a.bi_valid+=c-V):(a.bi_buf|=b<<a.bi_valid&65535,a.bi_valid+=c)}function h(a,b,c){g(a,c[2*b],c[2*b+1])}function i(a,b){var c=0;do c|=1&a,a>>>=1,c<<=1;while(--b>0);return c>>>1}function j(a){16===a.bi_valid?(f(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):a.bi_valid>=8&&(a.pending_buf[a.pending++]=255&a.bi_buf,a.bi_buf>>=8,a.bi_valid-=8)}function k(a,b){var c,d,e,f,g,h,i=b.dyn_tree,j=b.max_code,k=b.stat_desc.static_tree,l=b.stat_desc.has_stree,m=b.stat_desc.extra_bits,n=b.stat_desc.extra_base,o=b.stat_desc.max_length,p=0;for(f=0;U>=f;f++)a.bl_count[f]=0;for(i[2*a.heap[a.heap_max]+1]=0,c=a.heap_max+1;T>c;c++)d=a.heap[c],f=i[2*i[2*d+1]+1]+1,f>o&&(f=o,p++),i[2*d+1]=f,d>j||(a.bl_count[f]++,g=0,d>=n&&(g=m[d-n]),h=i[2*d],a.opt_len+=h*(f+g),l&&(a.static_len+=h*(k[2*d+1]+g)));if(0!==p){do{for(f=o-1;0===a.bl_count[f];)f--;a.bl_count[f]--,a.bl_count[f+1]+=2,a.bl_count[o]--,p-=2}while(p>0);for(f=o;0!==f;f--)for(d=a.bl_count[f];0!==d;)e=a.heap[--c],e>j||(i[2*e+1]!==f&&(a.opt_len+=(f-i[2*e+1])*i[2*e],i[2*e+1]=f),d--)}}function l(a,b,c){var d,e,f=new Array(U+1),g=0;for(d=1;U>=d;d++)f[d]=g=g+c[d-1]<<1;for(e=0;b>=e;e++){var h=a[2*e+1];0!==h&&(a[2*e]=i(f[h]++,h))}}function m(){var a,b,c,d,e,f=new Array(U+1);for(c=0,d=0;O-1>d;d++)for(ib[d]=c,a=0;a<1<<_[d];a++)hb[c++]=d;for(hb[c-1]=d,e=0,d=0;16>d;d++)for(jb[d]=e,a=0;a<1<<ab[d];a++)gb[e++]=d;for(e>>=7;R>d;d++)for(jb[d]=e<<7,a=0;a<1<<ab[d]-7;a++)gb[256+e++]=d;for(b=0;U>=b;b++)f[b]=0;for(a=0;143>=a;)eb[2*a+1]=8,a++,f[8]++;for(;255>=a;)eb[2*a+1]=9,a++,f[9]++;for(;279>=a;)eb[2*a+1]=7,a++,f[7]++;for(;287>=a;)eb[2*a+1]=8,a++,f[8]++;for(l(eb,Q+1,f),a=0;R>a;a++)fb[2*a+1]=5,fb[2*a]=i(a,5);kb=new nb(eb,_,P+1,Q,U),lb=new nb(fb,ab,0,R,U),mb=new nb(new Array(0),bb,0,S,W)}function n(a){var b;for(b=0;Q>b;b++)a.dyn_ltree[2*b]=0;for(b=0;R>b;b++)a.dyn_dtree[2*b]=0;for(b=0;S>b;b++)a.bl_tree[2*b]=0;a.dyn_ltree[2*X]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0}function o(a){a.bi_valid>8?f(a,a.bi_buf):a.bi_valid>0&&(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0}function p(a,b,c,d){o(a),d&&(f(a,c),f(a,~c)),E.arraySet(a.pending_buf,a.window,b,c,a.pending),a.pending+=c}function q(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}function r(a,b,c){for(var d=a.heap[c],e=c<<1;e<=a.heap_len&&(e<a.heap_len&&q(b,a.heap[e+1],a.heap[e],a.depth)&&e++,!q(b,d,a.heap[e],a.depth));)a.heap[c]=a.heap[e],c=e,e<<=1;a.heap[c]=d}function s(a,b,c){var d,f,i,j,k=0;if(0!==a.last_lit)do d=a.pending_buf[a.d_buf+2*k]<<8|a.pending_buf[a.d_buf+2*k+1],f=a.pending_buf[a.l_buf+k],k++,0===d?h(a,f,b):(i=hb[f],h(a,i+P+1,b),j=_[i],0!==j&&(f-=ib[i],g(a,f,j)),d--,i=e(d),h(a,i,c),j=ab[i],0!==j&&(d-=jb[i],g(a,d,j)));while(k<a.last_lit);h(a,X,b)}function t(a,b){var c,d,e,f=b.dyn_tree,g=b.stat_desc.static_tree,h=b.stat_desc.has_stree,i=b.stat_desc.elems,j=-1;for(a.heap_len=0,a.heap_max=T,c=0;i>c;c++)0!==f[2*c]?(a.heap[++a.heap_len]=j=c,a.depth[c]=0):f[2*c+1]=0;for(;a.heap_len<2;)e=a.heap[++a.heap_len]=2>j?++j:0,f[2*e]=1,a.depth[e]=0,a.opt_len--,h&&(a.static_len-=g[2*e+1]);for(b.max_code=j,c=a.heap_len>>1;c>=1;c--)r(a,f,c);e=i;do c=a.heap[1],a.heap[1]=a.heap[a.heap_len--],r(a,f,1),d=a.heap[1],a.heap[--a.heap_max]=c,a.heap[--a.heap_max]=d,f[2*e]=f[2*c]+f[2*d],a.depth[e]=(a.depth[c]>=a.depth[d]?a.depth[c]:a.depth[d])+1,f[2*c+1]=f[2*d+1]=e,a.heap[1]=e++,r(a,f,1);while(a.heap_len>=2);a.heap[--a.heap_max]=a.heap[1],k(a,b),l(f,j,a.bl_count)}function u(a,b,c){var d,e,f=-1,g=b[1],h=0,i=7,j=4;for(0===g&&(i=138,j=3),b[2*(c+1)+1]=65535,d=0;c>=d;d++)e=g,g=b[2*(d+1)+1],++h<i&&e===g||(j>h?a.bl_tree[2*e]+=h:0!==e?(e!==f&&a.bl_tree[2*e]++,a.bl_tree[2*Y]++):10>=h?a.bl_tree[2*Z]++:a.bl_tree[2*$]++,h=0,f=e,0===g?(i=138,j=3):e===g?(i=6,j=3):(i=7,j=4))}function v(a,b,c){var d,e,f=-1,i=b[1],j=0,k=7,l=4;for(0===i&&(k=138,l=3),d=0;c>=d;d++)if(e=i,i=b[2*(d+1)+1],!(++j<k&&e===i)){if(l>j){do h(a,e,a.bl_tree);while(0!==--j)}else 0!==e?(e!==f&&(h(a,e,a.bl_tree),j--),h(a,Y,a.bl_tree),g(a,j-3,2)):10>=j?(h(a,Z,a.bl_tree),g(a,j-3,3)):(h(a,$,a.bl_tree),g(a,j-11,7));j=0,f=e,0===i?(k=138,l=3):e===i?(k=6,l=3):(k=7,l=4)}}function w(a){var b;for(u(a,a.dyn_ltree,a.l_desc.max_code),u(a,a.dyn_dtree,a.d_desc.max_code),t(a,a.bl_desc),b=S-1;b>=3&&0===a.bl_tree[2*cb[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}function x(a,b,c,d){var e;for(g(a,b-257,5),g(a,c-1,5),g(a,d-4,4),e=0;d>e;e++)g(a,a.bl_tree[2*cb[e]+1],3);v(a,a.dyn_ltree,b-1),v(a,a.dyn_dtree,c-1)}function y(a){var b,c=4093624447;for(b=0;31>=b;b++,c>>>=1)if(1&c&&0!==a.dyn_ltree[2*b])return G;if(0!==a.dyn_ltree[18]||0!==a.dyn_ltree[20]||0!==a.dyn_ltree[26])return H;for(b=32;P>b;b++)if(0!==a.dyn_ltree[2*b])return H;return G}function z(a){pb||(m(),pb=!0),a.l_desc=new ob(a.dyn_ltree,kb),a.d_desc=new ob(a.dyn_dtree,lb),a.bl_desc=new ob(a.bl_tree,mb),a.bi_buf=0,a.bi_valid=0,n(a)}function A(a,b,c,d){g(a,(J<<1)+(d?1:0),3),p(a,b,c,!0)}function B(a){g(a,K<<1,3),h(a,X,eb),j(a)}function C(a,b,c,d){var e,f,h=0;a.level>0?(a.strm.data_type===I&&(a.strm.data_type=y(a)),t(a,a.l_desc),t(a,a.d_desc),h=w(a),e=a.opt_len+3+7>>>3,f=a.static_len+3+7>>>3,e>=f&&(e=f)):e=f=c+5,e>=c+4&&-1!==b?A(a,b,c,d):a.strategy===F||f===e?(g(a,(K<<1)+(d?1:0),3),s(a,eb,fb)):(g(a,(L<<1)+(d?1:0),3),x(a,a.l_desc.max_code+1,a.d_desc.max_code+1,h+1),s(a,a.dyn_ltree,a.dyn_dtree)),n(a),d&&o(a)}function D(a,b,c){return a.pending_buf[a.d_buf+2*a.last_lit]=b>>>8&255,a.pending_buf[a.d_buf+2*a.last_lit+1]=255&b,a.pending_buf[a.l_buf+a.last_lit]=255&c,a.last_lit++,0===b?a.dyn_ltree[2*c]++:(a.matches++,b--,a.dyn_ltree[2*(hb[c]+P+1)]++,a.dyn_dtree[2*e(b)]++),a.last_lit===a.lit_bufsize-1}var E=a("../utils/common"),F=4,G=0,H=1,I=2,J=0,K=1,L=2,M=3,N=258,O=29,P=256,Q=P+1+O,R=30,S=19,T=2*Q+1,U=15,V=16,W=7,X=256,Y=16,Z=17,$=18,_=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ab=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],bb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],db=512,eb=new Array(2*(Q+2));d(eb);var fb=new Array(2*R);d(fb);var gb=new Array(db);d(gb);var hb=new Array(N-M+1);d(hb);var ib=new Array(O);d(ib);var jb=new Array(R);d(jb);var kb,lb,mb,nb=function(a,b,c,d,e){this.static_tree=a,this.extra_bits=b,this.extra_base=c,this.elems=d,this.max_length=e,this.has_stree=a&&a.length},ob=function(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b},pb=!1;c._tr_init=z,c._tr_stored_block=A,c._tr_flush_block=C,c._tr_tally=D,c._tr_align=B},{"../utils/common":27}],39:[function(a,b){"use strict";function c(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}b.exports=c},{}]},{},[9])(9)});/*

 JS Signals <http://millermedeiros.github.com/js-signals/>
 Released under the MIT license
 Author: Miller Medeiros
 Version: 0.7.4 - Build: 252 (2012/02/24 10:30 PM)
 */
(function(h){function g(a,b,c,d,e){this._listener=b;this._isOnce=c;this.context=d;this._signal=a;this._priority=e||0}function f(a,b){if(typeof a!=="function")throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}",b));}var e={VERSION:"0.7.4"};g.prototype={active:!0,params:null,execute:function(a){var b;this.active&&this._listener&&(a=this.params?this.params.concat(a):a,b=this._listener.apply(this.context,a),this._isOnce&&this.detach());return b},detach:function(){return this.isBound()?
    this._signal.remove(this._listener,this.context):null},isBound:function(){return!!this._signal&&!!this._listener},getListener:function(){return this._listener},_destroy:function(){delete this._signal;delete this._listener;delete this.context},isOnce:function(){return this._isOnce},toString:function(){return"[SignalBinding isOnce:"+this._isOnce+", isBound:"+this.isBound()+", active:"+this.active+"]"}};e.Signal=function(){this._bindings=[];this._prevParams=null};e.Signal.prototype={memorize:!1,_shouldPropagate:!0,
    active:!0,_registerListener:function(a,b,c,d){var e=this._indexOfListener(a,c);if(e!==-1){if(a=this._bindings[e],a.isOnce()!==b)throw Error("You cannot add"+(b?"":"Once")+"() then add"+(!b?"":"Once")+"() the same listener without removing the relationship first.");}else a=new g(this,a,b,c,d),this._addBinding(a);this.memorize&&this._prevParams&&a.execute(this._prevParams);return a},_addBinding:function(a){var b=this._bindings.length;do--b;while(this._bindings[b]&&a._priority<=this._bindings[b]._priority);
        this._bindings.splice(b+1,0,a)},_indexOfListener:function(a,b){for(var c=this._bindings.length,d;c--;)if(d=this._bindings[c],d._listener===a&&d.context===b)return c;return-1},has:function(a,b){return this._indexOfListener(a,b)!==-1},add:function(a,b,c){f(a,"add");return this._registerListener(a,!1,b,c)},addOnce:function(a,b,c){f(a,"addOnce");return this._registerListener(a,!0,b,c)},remove:function(a,b){f(a,"remove");var c=this._indexOfListener(a,b);c!==-1&&(this._bindings[c]._destroy(),this._bindings.splice(c,
        1));return a},removeAll:function(){for(var a=this._bindings.length;a--;)this._bindings[a]._destroy();this._bindings.length=0},getNumListeners:function(){return this._bindings.length},halt:function(){this._shouldPropagate=!1},dispatch:function(a){if(this.active){var b=Array.prototype.slice.call(arguments),c=this._bindings.length,d;if(this.memorize)this._prevParams=b;if(c){d=this._bindings.slice();this._shouldPropagate=!0;do c--;while(d[c]&&this._shouldPropagate&&d[c].execute(b)!==!1)}}},forget:function(){this._prevParams=
        null},dispose:function(){this.removeAll();delete this._bindings;delete this._prevParams},toString:function(){return"[Signal active:"+this.active+" numListeners:"+this.getNumListeners()+"]"}};typeof define==="function"&&define.amd?define(e):typeof module!=="undefined"&&module.exports?module.exports=e:h.signals=e})(this);/**
 * @author mrdoob / http://mrdoob.com/
 */

var UI = {};

UI.Element = function ( dom ) {

    this.dom = dom;

};

UI.Element.prototype = {

    setId: function ( id ) {

        this.dom.id = id;

        return this;

    },

    setClass: function ( name ) {

        this.dom.className = name;

        return this;

    },

    setStyle: function ( style, array ) {

        for ( var i = 0; i < array.length; i ++ ) {

            this.dom.style[ style ] = array[ i ];

        }

    },

    setDisabled: function ( value ) {

        this.dom.disabled = value;

        return this;

    },

    setTextContent: function ( value ) {

        this.dom.textContent = value;

        return this;

    }

}

// properties

var properties = [ 'position', 'left', 'top', 'right', 'bottom', 'width', 'height', 'border', 'borderLeft',
    'borderTop', 'borderRight', 'borderBottom', 'borderColor', 'display', 'overflow', 'margin', 'marginLeft', 'marginTop', 'marginRight', 'marginBottom', 'padding', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'color',
    'backgroundColor', 'opacity', 'fontSize', 'fontWeight', 'textAlign', 'textDecoration', 'textTransform', 'cursor', 'zIndex' ];

properties.forEach( function ( property ) {

    var method = 'set' + property.substr( 0, 1 ).toUpperCase() + property.substr( 1, property.length );

    UI.Element.prototype[ method ] = function () {

        this.setStyle( property, arguments );
        return this;

    };

} );

// events

var events = [ 'KeyUp', 'KeyDown', 'MouseOver', 'MouseOut', 'Click', 'DblClick', 'Change' ];

events.forEach( function ( event ) {

    var method = 'on' + event;

    UI.Element.prototype[ method ] = function ( callback ) {

        this.dom.addEventListener( event.toLowerCase(), callback.bind( this ), false );

        return this;

    };

} );


// Panel

UI.Panel = function () {

    UI.Element.call( this );

    var dom = document.createElement( 'div' );
    dom.className = 'Panel';

    this.dom = dom;

    return this;
};

UI.Panel.prototype = Object.create( UI.Element.prototype );
UI.Panel.prototype.constructor = UI.Panel;

UI.Panel.prototype.add = function () {

    for ( var i = 0; i < arguments.length; i ++ ) {

        var argument = arguments[ i ];

        if ( argument instanceof UI.Element ) {

            this.dom.appendChild( argument.dom );

        } else {

            console.error( 'UI.Panel:', argument, 'is not an instance of UI.Element.' )

        }

    }

    return this;

};


UI.Panel.prototype.remove = function () {

    for ( var i = 0; i < arguments.length; i ++ ) {

        var argument = arguments[ i ];

        if ( argument instanceof UI.Element ) {

            this.dom.removeChild( argument.dom );

        } else {

            console.error( 'UI.Panel:', argument, 'is not an instance of UI.Element.' )

        }

    }

    return this;

};

UI.Panel.prototype.clear = function () {

    while ( this.dom.children.length ) {

        this.dom.removeChild( this.dom.lastChild );

    }

};


// Collapsible Panel

UI.CollapsiblePanel = function () {

    UI.Panel.call( this );

    this.setClass( 'Panel Collapsible' );

    var scope = this;

    this._static = new UI.Panel();
    this._static.setClass( 'Static' );
    this._static.onClick( function () {
        scope.toggle();
    } );
    this.dom.appendChild( this._static.dom );

    this.contents = new UI.Panel();
    this.contents.setClass( 'Content' );
    this.dom.appendChild( this.contents.dom );

    var button = new UI.Panel();
    button.setClass( 'Button' );
    this._static.add( button );

    this.isCollapsed = false;

    return this;

};

UI.CollapsiblePanel.prototype = Object.create( UI.Panel.prototype );
UI.CollapsiblePanel.prototype.constructor = UI.CollapsiblePanel;

UI.CollapsiblePanel.prototype.addStatic = function () {

    this._static.add.apply( this._static, arguments );
    return this;

};

UI.CollapsiblePanel.prototype.removeStatic = function () {

    this._static.remove.apply( this._static, arguments );
    return this;

};

UI.CollapsiblePanel.prototype.clearStatic = function () {

    this._static.clear();
    return this;

};

UI.CollapsiblePanel.prototype.add = function () {

    this.contents.add.apply( this.contents, arguments );
    return this;

};

UI.CollapsiblePanel.prototype.remove = function () {

    this.contents.remove.apply( this.contents, arguments );
    return this;

};

UI.CollapsiblePanel.prototype.clear = function () {

    this.contents.clear();
    return this;

};

UI.CollapsiblePanel.prototype.toggle = function() {

    this.setCollapsed( !this.isCollapsed );

};

UI.CollapsiblePanel.prototype.collapse = function() {

    this.setCollapsed( true );

};

UI.CollapsiblePanel.prototype.expand = function() {

    this.setCollapsed( false );

};

UI.CollapsiblePanel.prototype.setCollapsed = function( _boolean ) {

    if ( _boolean ) {

        this.dom.classList.add( 'collapsed' );

    } else {

        this.dom.classList.remove( 'collapsed' );

    }

    this.isCollapsed = _boolean;

    if ( this.onCollapsedChangeCallback !== undefined ) {

        this.onCollapsedChangeCallback( _boolean );

    }

};

UI.CollapsiblePanel.prototype.onCollapsedChange = function ( callback ) {

    this.onCollapsedChangeCallback = callback;

};

// Text

UI.Text = function ( text ) {

    UI.Element.call( this );

    var dom = document.createElement( 'span' );
    dom.className = 'Text';
    dom.style.cursor = 'default';
    dom.style.display = 'inline-block';
    dom.style.verticalAlign = 'middle';

    this.dom = dom;
    this.setValue( text );

    return this;

};

UI.Text.prototype = Object.create( UI.Element.prototype );
UI.Text.prototype.constructor = UI.Text;

UI.Text.prototype.getValue = function () {

    return this.dom.textContent;

};

UI.Text.prototype.setValue = function ( value ) {

    if ( value !== undefined ) {

        this.dom.textContent = value;

    }

    return this;

};


// Input

UI.Input = function ( text ) {

    UI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'input' );
    dom.className = 'Input';
    dom.style.padding = '2px';
    dom.style.border = '1px solid #ccc';

    dom.addEventListener( 'keydown', function ( event ) {

        event.stopPropagation();

    }, false );

    this.dom = dom;
    this.setValue( text );

    return this;

};

UI.Input.prototype = Object.create( UI.Element.prototype );
UI.Input.prototype.constructor = UI.Input;

UI.Input.prototype.getValue = function () {

    return this.dom.value;

};

UI.Input.prototype.setValue = function ( value ) {

    this.dom.value = value;

    return this;

};


// TextArea

UI.TextArea = function () {

    UI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'textarea' );
    dom.className = 'TextArea';
    dom.style.padding = '2px';
    dom.style.border = '1px solid #ccc';
    dom.spellcheck = false;

    dom.addEventListener( 'keydown', function ( event ) {

        event.stopPropagation();

        if ( event.keyCode === 9 ) {

            event.preventDefault();

            var cursor = dom.selectionStart;

            dom.value = dom.value.substring( 0, cursor ) + '\t' + dom.value.substring( cursor );
            dom.selectionStart = cursor + 1;
            dom.selectionEnd = dom.selectionStart;

        }

    }, false );

    this.dom = dom;

    return this;

};

UI.TextArea.prototype = Object.create( UI.Element.prototype );
UI.TextArea.prototype.constructor = UI.TextArea;

UI.TextArea.prototype.getValue = function () {

    return this.dom.value;

};

UI.TextArea.prototype.setValue = function ( value ) {

    this.dom.value = value;

    return this;

};


// Select

UI.Select = function () {

    UI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'select' );
    dom.className = 'Select';
    dom.style.width = '64px';
    dom.style.height = '16px';
    dom.style.border = '0px';
    dom.style.padding = '0px';

    this.dom = dom;

    return this;

};

UI.Select.prototype = Object.create( UI.Element.prototype );
UI.Select.prototype.constructor = UI.Select;

UI.Select.prototype.setMultiple = function ( _boolean ) {

    this.dom.multiple = _boolean;

    return this;

};

UI.Select.prototype.setOptions = function ( options ) {

    var selected = this.dom.value;

    while ( this.dom.children.length > 0 ) {

        this.dom.removeChild( this.dom.firstChild );

    }

    for ( var key in options ) {

        var option = document.createElement( 'option' );
        option.value = key;
        option.innerHTML = options[ key ];
        this.dom.appendChild( option );

    }

    this.dom.value = selected;

    return this;

};

UI.Select.prototype.getValue = function () {

    return this.dom.value;

};

UI.Select.prototype.setValue = function ( value ) {

    value = String( value );

    if ( this.dom.value !== value ) {

        this.dom.value = value;

    }

    return this;

};

// FancySelect

UI.FancySelect = function () {

    UI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'div' );
    dom.className = 'FancySelect';
    dom.tabIndex = 0;	// keyup event is ignored without setting tabIndex

    // Broadcast for object selection after arrow navigation
    var changeEvent = document.createEvent('HTMLEvents');
    changeEvent.initEvent( 'change', true, true );

    // Prevent native scroll behavior
    dom.addEventListener( 'keydown', function (event) {

        switch ( event.keyCode ) {
            case 38: // up
            case 40: // down
                event.preventDefault();
                event.stopPropagation();
                break;
        }

    }, false);

    // Keybindings to support arrow navigation
    dom.addEventListener( 'keyup', function (event) {

        switch ( event.keyCode ) {
            case 38: // up
            case 40: // down
                scope.selectedIndex += ( event.keyCode == 38 ) ? -1 : 1;

                if ( scope.selectedIndex >= 0 && scope.selectedIndex < scope.options.length ) {

                    // Highlight selected dom elem and scroll parent if needed
                    scope.setValue( scope.options[ scope.selectedIndex ].value );

                    scope.dom.dispatchEvent( changeEvent );

                }

                break;
        }

    }, false);

    this.dom = dom;

    this.options = [];
    this.selectedIndex = -1;
    this.selectedValue = null;

    return this;

};

UI.FancySelect.prototype = Object.create( UI.Element.prototype );
UI.FancySelect.prototype.constructor = UI.FancySelect;

UI.FancySelect.prototype.setOptions = function ( options ) {

    var scope = this;

    var changeEvent = document.createEvent( 'HTMLEvents' );
    changeEvent.initEvent( 'change', true, true );

    while ( scope.dom.children.length > 0 ) {

        scope.dom.removeChild( scope.dom.firstChild );

    }

    scope.options = [];

    for ( var i = 0; i < options.length; i ++ ) {

        var option = options[ i ];

        var div = document.createElement( 'div' );
        div.className = 'option';
        div.innerHTML = option.html;
        div.value = option.value;
        scope.dom.appendChild( div );

        scope.options.push( div );

        div.addEventListener( 'click', function ( event ) {

            scope.setValue( this.value );
            scope.dom.dispatchEvent( changeEvent );

        }, false );

    }

    return scope;

};

UI.FancySelect.prototype.getValue = function () {

    return this.selectedValue;

};

UI.FancySelect.prototype.setValue = function ( value ) {

    for ( var i = 0; i < this.options.length; i ++ ) {

        var element = this.options[ i ];

        if ( element.value === value ) {

            element.classList.add( 'active' );

            // scroll into view

            var y = element.offsetTop - this.dom.offsetTop;
            var bottomY = y + element.offsetHeight;
            var minScroll = bottomY - this.dom.offsetHeight;

            if ( this.dom.scrollTop > y ) {

                this.dom.scrollTop = y

            } else if ( this.dom.scrollTop < minScroll ) {

                this.dom.scrollTop = minScroll;

            }

            this.selectedIndex = i;

        } else {

            element.classList.remove( 'active' );

        }

    }

    this.selectedValue = value;

    return this;

};


// Checkbox

UI.Checkbox = function ( _boolean ) {

    UI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'input' );
    dom.className = 'Checkbox';
    dom.type = 'checkbox';

    this.dom = dom;
    this.setValue( _boolean );

    return this;

};

UI.Checkbox.prototype = Object.create( UI.Element.prototype );
UI.Checkbox.prototype.constructor = UI.Checkbox;

UI.Checkbox.prototype.getValue = function () {

    return this.dom.checked;

};

UI.Checkbox.prototype.setValue = function ( value ) {

    if ( value !== undefined ) {

        this.dom.checked = value;

    }

    return this;

};


// Color

UI.Color = function () {

    UI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'input' );
    dom.className = 'Color';
    dom.style.width = '64px';
    dom.style.height = '16px';
    dom.style.border = '0px';
    dom.style.padding = '0px';
    dom.style.backgroundColor = 'transparent';

    try {

        dom.type = 'color';
        dom.value = '#ffffff';

    } catch ( exception ) {}

    this.dom = dom;

    return this;

};

UI.Color.prototype = Object.create( UI.Element.prototype );
UI.Color.prototype.constructor = UI.Color;

UI.Color.prototype.getValue = function () {

    return this.dom.value;

};

UI.Color.prototype.getHexValue = function () {

    return parseInt( this.dom.value.substr( 1 ), 16 );

};

UI.Color.prototype.setValue = function ( value ) {

    this.dom.value = value;

    return this;

};

UI.Color.prototype.setHexValue = function ( hex ) {

    this.dom.value = '#' + ( '000000' + hex.toString( 16 ) ).slice( -6 );

    return this;

};


// Number

UI.Number = function ( number ) {

    UI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'input' );
    dom.className = 'Number';
    dom.value = '0.00';

    dom.addEventListener( 'keydown', function ( event ) {

        event.stopPropagation();

        if ( event.keyCode === 13 ) dom.blur();

    }, false );

    this.min = - Infinity;
    this.max = Infinity;

    this.precision = 2;
    this.step = 1;

    this.dom = dom;
    this.setValue( number );

    var changeEvent = document.createEvent( 'HTMLEvents' );
    changeEvent.initEvent( 'change', true, true );

    var distance = 0;
    var onMouseDownValue = 0;

    var pointer = new THREE.Vector2();
    var prevPointer = new THREE.Vector2();

    var onMouseDown = function ( event ) {

        event.preventDefault();

        distance = 0;

        onMouseDownValue = parseFloat( dom.value );

        prevPointer.set( event.clientX, event.clientY );

        document.addEventListener( 'mousemove', onMouseMove, false );
        document.addEventListener( 'mouseup', onMouseUp, false );

    };

    var onMouseMove = function ( event ) {

        var currentValue = dom.value;

        pointer.set( event.clientX, event.clientY );

        distance += ( pointer.x - prevPointer.x ) - ( pointer.y - prevPointer.y );

        var number = onMouseDownValue + ( distance / ( event.shiftKey ? 5 : 50 ) ) * scope.step;

        dom.value = Math.min( scope.max, Math.max( scope.min, number ) ).toFixed( scope.precision );

        if ( currentValue !== dom.value ) dom.dispatchEvent( changeEvent );

        prevPointer.set( event.clientX, event.clientY );

    };

    var onMouseUp = function ( event ) {

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );

        if ( Math.abs( distance ) < 2 ) {

            dom.focus();
            dom.select();

        }

    };

    var onChange = function ( event ) {

        var value = 0;

        try {

            value = eval( dom.value );

        } catch ( error ) {

            console.error( error.message );

        }

        dom.value = parseFloat( value );

    };

    var onFocus = function ( event ) {

        dom.style.backgroundColor = '';
        dom.style.borderColor = '#ccc';
        dom.style.cursor = '';

    };

    var onBlur = function ( event ) {

        dom.style.backgroundColor = 'transparent';
        dom.style.borderColor = 'transparent';
        dom.style.cursor = 'col-resize';

    };

    dom.addEventListener( 'mousedown', onMouseDown, false );
    dom.addEventListener( 'change', onChange, false );
    dom.addEventListener( 'focus', onFocus, false );
    dom.addEventListener( 'blur', onBlur, false );

    return this;

};

UI.Number.prototype = Object.create( UI.Element.prototype );
UI.Number.prototype.constructor = UI.Number;

UI.Number.prototype.getValue = function () {

    return parseFloat( this.dom.value );

};

UI.Number.prototype.setValue = function ( value ) {

    if ( value !== undefined ) {

        this.dom.value = value.toFixed( this.precision );

    }

    return this;

};

UI.Number.prototype.setRange = function ( min, max ) {

    this.min = min;
    this.max = max;

    return this;

};

UI.Number.prototype.setPrecision = function ( precision ) {

    this.precision = precision;

    return this;

};


// Integer

UI.Integer = function ( number ) {

    UI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'input' );
    dom.className = 'Number';
    dom.value = '0.00';

    dom.addEventListener( 'keydown', function ( event ) {

        event.stopPropagation();

    }, false );

    this.min = - Infinity;
    this.max = Infinity;

    this.step = 1;

    this.dom = dom;
    this.setValue( number );

    var changeEvent = document.createEvent( 'HTMLEvents' );
    changeEvent.initEvent( 'change', true, true );

    var distance = 0;
    var onMouseDownValue = 0;

    var pointer = new THREE.Vector2();
    var prevPointer = new THREE.Vector2();

    var onMouseDown = function ( event ) {

        event.preventDefault();

        distance = 0;

        onMouseDownValue = parseFloat( dom.value );

        prevPointer.set( event.clientX, event.clientY );

        document.addEventListener( 'mousemove', onMouseMove, false );
        document.addEventListener( 'mouseup', onMouseUp, false );

    };

    var onMouseMove = function ( event ) {

        var currentValue = dom.value;

        pointer.set( event.clientX, event.clientY );

        distance += ( pointer.x - prevPointer.x ) - ( pointer.y - prevPointer.y );

        var number = onMouseDownValue + ( distance / ( event.shiftKey ? 5 : 50 ) ) * scope.step;

        dom.value = Math.min( scope.max, Math.max( scope.min, number ) ) | 0;

        if ( currentValue !== dom.value ) dom.dispatchEvent( changeEvent );

        prevPointer.set( event.clientX, event.clientY );

    };

    var onMouseUp = function ( event ) {

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );

        if ( Math.abs( distance ) < 2 ) {

            dom.focus();
            dom.select();

        }

    };

    var onChange = function ( event ) {

        var value = 0;

        try {

            value = eval( dom.value );

        } catch ( error ) {

            console.error( error.message );

        }

        dom.value = parseInt( value );

    };

    var onFocus = function ( event ) {

        dom.style.backgroundColor = '';
        dom.style.borderColor = '#ccc';
        dom.style.cursor = '';

    };

    var onBlur = function ( event ) {

        dom.style.backgroundColor = 'transparent';
        dom.style.borderColor = 'transparent';
        dom.style.cursor = 'col-resize';

    };

    dom.addEventListener( 'mousedown', onMouseDown, false );
    dom.addEventListener( 'change', onChange, false );
    dom.addEventListener( 'focus', onFocus, false );
    dom.addEventListener( 'blur', onBlur, false );

    return this;

};

UI.Integer.prototype = Object.create( UI.Element.prototype );
UI.Integer.prototype.constructor = UI.Integer;

UI.Integer.prototype.getValue = function () {

    return parseInt( this.dom.value );

};

UI.Integer.prototype.setValue = function ( value ) {

    if ( value !== undefined ) {

        this.dom.value = value | 0;

    }

    return this;

};

UI.Integer.prototype.setRange = function ( min, max ) {

    this.min = min;
    this.max = max;

    return this;

};


// Break

UI.Break = function () {

    UI.Element.call( this );

    var dom = document.createElement( 'br' );
    dom.className = 'Break';

    this.dom = dom;

    return this;

};

UI.Break.prototype = Object.create( UI.Element.prototype );
UI.Break.prototype.constructor = UI.Break;


// HorizontalRule

UI.HorizontalRule = function () {

    UI.Element.call( this );

    var dom = document.createElement( 'hr' );
    dom.className = 'HorizontalRule';

    this.dom = dom;

    return this;

};

UI.HorizontalRule.prototype = Object.create( UI.Element.prototype );
UI.HorizontalRule.prototype.constructor = UI.HorizontalRule;


// Button

UI.Button = function ( value ) {

    UI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'button' );
    dom.className = 'Button';
    this.dom = dom;
    this.dom.textContent = value;
    return this;

};

UI.Button.prototype = Object.create( UI.Element.prototype );
UI.Button.prototype.constructor = UI.Button;

UI.Button.prototype.setLabel = function ( value ) {

    this.dom.textContent = value;

    return this;

};


// Dialog

UI.Dialog = function ( value ) {

    var scope = this;

    var dom = document.createElement( 'dialog' );

    if ( dom.showModal === undefined ) {

        // fallback

        dom = document.createElement( 'div' );
        dom.style.display = 'none';

        dom.showModal = function () {

            dom.style.position = 'absolute';
            dom.style.left = '100px';
            dom.style.top = '100px';
            dom.style.zIndex = 1;
            dom.style.display = '';

        };

    }

    dom.className = 'Dialog';

    this.dom = dom;

    return this;

};

UI.Dialog.prototype = Object.create( UI.Panel.prototype );
UI.Dialog.prototype.constructor = UI.Dialog;

UI.Dialog.prototype.showModal = function () {

    this.dom.showModal();

    return this;

};
/**
 * @author mrdoob / http://mrdoob.com/
 */

var APP = {

    Player: function () {

        var loader = new THREE.ObjectLoader();
        var camera, scene, renderer;

        var scripts = {};

        this.dom = undefined;

        this.width = 500;
        this.height = 500;

        this.load = function ( json ) {

            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );

            camera = loader.parse( json.camera );
            scene = loader.parse( json.scene );

            scripts = {
                keydown: [],
                keyup: [],
                mousedown: [],
                mouseup: [],
                mousemove: [],
                update: []
            };

            for ( var uuid in json.scripts ) {

                var object = scene.getObjectByProperty( 'uuid', uuid, true );

                var sources = json.scripts[ uuid ];

                for ( var i = 0; i < sources.length; i ++ ) {

                    var script = sources[ i ];

                    var events = ( new Function( 'player', 'scene', 'keydown', 'keyup', 'mousedown', 'mouseup', 'mousemove', 'update', script.source + '\nreturn { keydown: keydown, keyup: keyup, mousedown: mousedown, mouseup: mouseup, mousemove: mousemove, update: update };' ).bind( object ) )( this, scene );

                    for ( var name in events ) {

                        if ( events[ name ] === undefined ) continue;

                        if ( scripts[ name ] === undefined ) {

                            console.warn( 'APP.Player: event type not supported (', name, ')' );
                            continue;

                        }

                        scripts[ name ].push( events[ name ].bind( object ) );

                    }

                }

            }

            this.dom = renderer.domElement;

        };

        this.setCamera = function ( value ) {

            camera = value;
            camera.aspect = this.width / this.height;
            camera.updateProjectionMatrix();

        };

        this.setSize = function ( width, height ) {

            this.width = width;
            this.height = height;

            camera.aspect = this.width / this.height;
            camera.updateProjectionMatrix();

            renderer.setSize( width, height );

        };

        var dispatch = function ( array, event ) {

            for ( var i = 0, l = array.length; i < l; i ++ ) {

                array[ i ]( event );

            }

        };

        var request;

        var animate = function ( time ) {

            request = requestAnimationFrame( animate );

            dispatch( scripts.update, { time: time } );

            renderer.render( scene, camera );

        };

        this.play = function () {

            document.addEventListener( 'keydown', onDocumentKeyDown );
            document.addEventListener( 'keyup', onDocumentKeyUp );
            document.addEventListener( 'mousedown', onDocumentMouseDown );
            document.addEventListener( 'mouseup', onDocumentMouseUp );
            document.addEventListener( 'mousemove', onDocumentMouseMove );

            request = requestAnimationFrame( animate );

        };

        this.stop = function () {

            document.removeEventListener( 'keydown', onDocumentKeyDown );
            document.removeEventListener( 'keyup', onDocumentKeyUp );
            document.removeEventListener( 'mousedown', onDocumentMouseDown );
            document.removeEventListener( 'mouseup', onDocumentMouseUp );
            document.removeEventListener( 'mousemove', onDocumentMouseMove );

            cancelAnimationFrame( request );

        };

        //

        var onDocumentKeyDown = function ( event ) {

            dispatch( scripts.keydown, event );

        };

        var onDocumentKeyUp = function ( event ) {

            dispatch( scripts.keyup, event );

        };

        var onDocumentMouseDown = function ( event ) {

            dispatch( scripts.mousedown, event );

        };

        var onDocumentMouseUp = function ( event ) {

            dispatch( scripts.mouseup, event );

        };

        var onDocumentMouseMove = function ( event ) {

            dispatch( scripts.mousemove, event );

        };

    }

};
/**
 * @author mrdoob / http://mrdoob.com/
 */

var Storage = function () {

    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    if ( indexedDB === undefined  ) {
        console.warn( 'Storage: IndexedDB not available.' );
        return { init: function (){}, get: function (){}, set: function (){}, clear: function (){} };
    }

    var name = 'threejs-editor';
    var version = 1;

    var database;

    return {

        init: function ( callback ) {

            var request = indexedDB.open( name, version );
            request.onupgradeneeded = function ( event ) {

                var db = event.target.result;

                if ( db.objectStoreNames.contains( 'states' ) === false ) {

                    db.createObjectStore( 'states' );

                }

            };
            request.onsuccess = function ( event ) {

                database = event.target.result;

                callback();

            };
            request.onerror = function ( event ) {

                console.error( 'IndexedDB', event );

            };


        },

        get: function ( callback ) {

            var transaction = database.transaction( [ 'states' ], 'readwrite' );
            var objectStore = transaction.objectStore( 'states' );
            var request = objectStore.get( 0 );
            request.onsuccess = function ( event ) {

                callback( event.target.result );

            };

        },

        set: function ( data, callback ) {

            var start = performance.now();

            var transaction = database.transaction( [ 'states' ], 'readwrite' );
            var objectStore = transaction.objectStore( 'states' );
            var request = objectStore.put( data, 0 );
            request.onsuccess = function ( event ) {

                console.log( '[' + /\d\d\:\d\d\:\d\d/.exec( new Date() )[ 0 ] + ']', 'Saved state to IndexedDB. ' + ( performance.now() - start ).toFixed( 2 ) + 'ms' );

            };

        },

        clear: function ( callback ) {

            var transaction = database.transaction( [ 'states' ], 'readwrite' );
            var objectStore = transaction.objectStore( 'states' );
            var request = objectStore.clear();
            request.onsuccess = function ( event ) {

                callback();

            };

        }

    }

};
/**
 * @author mrdoob / http://mrdoob.com/
 */

var Editor = function () {

    var SIGNALS = signals;

    this.signals = {

        // script

        editScript: new SIGNALS.Signal(),

        // player

        startPlayer: new SIGNALS.Signal(),
        stopPlayer: new SIGNALS.Signal(),

        // actions

        playAnimation: new SIGNALS.Signal(),
        stopAnimation: new SIGNALS.Signal(),

        showDialog: new SIGNALS.Signal(),

        // notifications

        editorCleared: new SIGNALS.Signal(),

        savingStarted: new SIGNALS.Signal(),
        savingFinished: new SIGNALS.Signal(),

        themeChanged: new SIGNALS.Signal(),

        transformModeChanged: new SIGNALS.Signal(),
        snapChanged: new SIGNALS.Signal(),
        spaceChanged: new SIGNALS.Signal(),
        rendererChanged: new SIGNALS.Signal(),

        sceneGraphChanged: new SIGNALS.Signal(),

        cameraChanged: new SIGNALS.Signal(),

        geometryChanged: new SIGNALS.Signal(),

        objectSelected: new SIGNALS.Signal(),
        objectFocused: new SIGNALS.Signal(),

        objectAdded: new SIGNALS.Signal(),
        objectChanged: new SIGNALS.Signal(),
        objectRemoved: new SIGNALS.Signal(),

        helperAdded: new SIGNALS.Signal(),
        helperRemoved: new SIGNALS.Signal(),

        materialChanged: new SIGNALS.Signal(),

        scriptAdded: new SIGNALS.Signal(),
        scriptChanged: new SIGNALS.Signal(),
        scriptRemoved: new SIGNALS.Signal(),

        fogTypeChanged: new SIGNALS.Signal(),
        fogColorChanged: new SIGNALS.Signal(),
        fogParametersChanged: new SIGNALS.Signal(),
        windowResize: new SIGNALS.Signal(),

        showGridChanged: new SIGNALS.Signal(),
        saveObjects: new SIGNALS.Signal(),
        onBed: new SIGNALS.Signal(),
        objectMove: new SIGNALS.Signal(),
        objectRotate: new SIGNALS.Signal(),
        objectCenter: new SIGNALS.Signal(),
        objectReset: new SIGNALS.Signal(),
        objectAdded3dviewer : new SIGNALS.Signal()

    };

    this.config = new Config();

    this.config.clear();

    this.loader = new Loader( this );

    this.scene = new THREE.Scene();
    this.scene.name = 'Scene';
    this.rootMesh = new THREE.Mesh();
    this.rootMesh.rotation.x += -90 * (Math.PI / 180);

    this.scene.add(this.rootMesh);
    this.camera = new THREE.PerspectiveCamera( 50, 1, 1, 5000 );
    //this.camera.position.set(0, 0, 250 );
    //this.camera.lookAt(this.scene.position);
    //this.camera.rotation.x = 45 * (Math.PI / 180);
    this.camera.name = 'Camera';



    this.sceneHelpers = new THREE.Scene();

    this.object = {};
    this.geometries = {};
    this.materials = {};
    this.textures = {};
    this.scripts = {};

    this.selected = null;
    this.helpers = {};
    this.only3dviewer = false;
};

Editor.prototype = {

    setTheme: function ( value ) {

        document.getElementById( 'theme' ).href =  value;

        this.signals.themeChanged.dispatch( value );


    },

    /*
     showDialog: function ( value ) {

     this.signals.showDialog.dispatch( value );

     },
     */

    //

    setScene: function ( scene ) {

        this.scene.uuid = scene.uuid;
        this.scene.name = scene.name;
        this.scene.userData = JSON.parse( JSON.stringify( scene.userData ) );

        // avoid render per object

        this.signals.sceneGraphChanged.active = false;

        while ( scene.children.length > 0 ) {

            this.addObject( scene.children[ 0 ] );

        }

        this.signals.sceneGraphChanged.active = true;
        this.signals.sceneGraphChanged.dispatch();

    },

    //

    addObject: function ( object ) {

        var scope = this;

        object.traverse( function ( child ) {

            if ( child.geometry !== undefined ) scope.addGeometry( child.geometry );
            if ( child.material !== undefined ) scope.addMaterial( child.material );

            scope.addHelper( child );

        } );
        this.rootMesh.add( object );

        this.signals.objectAdded.dispatch( object );
        if (this.only3dviewer == true){
            this.signals.objectAdded3dviewer.dispatch( object );
        }
        this.signals.sceneGraphChanged.dispatch();

    },

    setObjectName: function ( object, name ) {

        object.name = name;
        this.signals.sceneGraphChanged.dispatch();

    },

    removeObject: function ( object ) {

        if ( object.parent === undefined ) return; // avoid deleting the camera or scene

        var scope = this;

        object.traverse( function ( child ) {

            scope.removeHelper( child );

        } );

        object.parent.remove( object );

        this.signals.objectRemoved.dispatch( object );
        this.signals.sceneGraphChanged.dispatch();

    },

    addGeometry: function ( geometry ) {

        this.geometries[ geometry.uuid ] = geometry;

    },

    setGeometryName: function ( geometry, name ) {

        geometry.name = name;
        this.signals.sceneGraphChanged.dispatch();

    },

    addMaterial: function ( material ) {

        this.materials[ material.uuid ] = material;

    },

    setMaterialName: function ( material, name ) {

        material.name = name;
        this.signals.sceneGraphChanged.dispatch();

    },

    addTexture: function ( texture ) {

        this.textures[ texture.uuid ] = texture;

    },

    //

    addHelper: function () {

        var geometry = new THREE.SphereGeometry( 20, 4, 2 );
        var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

        return function ( object ) {

            var helper;

            if ( object instanceof THREE.Camera ) {

                helper = new THREE.CameraHelper( object, 10 );

            } else if ( object instanceof THREE.PointLight ) {

                helper = new THREE.PointLightHelper( object, 10 );

            } else if ( object instanceof THREE.DirectionalLight ) {

                helper = new THREE.DirectionalLightHelper( object, 20 );

            } else if ( object instanceof THREE.SpotLight ) {

                helper = new THREE.SpotLightHelper( object, 10 );

            } else if ( object instanceof THREE.HemisphereLight ) {

                helper = new THREE.HemisphereLightHelper( object, 10 );

            } else if ( object instanceof THREE.SkinnedMesh ) {

                helper = new THREE.SkeletonHelper( object );

            } else {

                // no helper for this object type
                return;

            }

            var picker = new THREE.Mesh( geometry, material );
            picker.name = 'picker';
            picker.userData.object = object;
            picker.visible = false;
            helper.add( picker );

            this.sceneHelpers.add( helper );
            this.helpers[ object.id ] = helper;

            this.signals.helperAdded.dispatch( helper );

        };

    }(),

    removeHelper: function ( object ) {

        if ( this.helpers[ object.id ] !== undefined ) {

            var helper = this.helpers[ object.id ];
            helper.parent.remove( helper );

            delete this.helpers[ object.id ];

            this.signals.helperRemoved.dispatch( helper );

        }

    },

    //

    addScript: function ( object, script ) {

        if ( this.scripts[ object.uuid ] === undefined ) {

            this.scripts[ object.uuid ] = [];

        }

        this.scripts[ object.uuid ].push( script );

        this.signals.scriptAdded.dispatch( script );

    },

    removeScript: function ( object, script ) {

        if ( this.scripts[ object.uuid ] === undefined ) return;

        var index = this.scripts[ object.uuid ].indexOf( script );

        if ( index !== - 1 ) {

            this.scripts[ object.uuid ].splice( index, 1 );

        }

        this.signals.scriptRemoved.dispatch( script );

    },

    //

    parent: function ( object, parent ) {

        if ( parent === undefined ) {

            parent = this.scene;

        }

        parent.add( object );

        this.signals.sceneGraphChanged.dispatch();

    },

    //

    select: function ( object ) {
        if (this.only3dviewer == true){
            return;
        }
        if ( this.selected === object ) return;

        var uuid = null;

        if ( object !== null ) {

            uuid = object.uuid;

        }

        this.selected = object;

        this.config.setKey( 'selected', uuid );
        this.signals.objectSelected.dispatch( object );

    },

    selectById: function ( id ) {

        if ( id === this.camera.id ) {

            this.select( this.camera );
            return;

        }

        this.select( this.scene.getObjectById( id, true ) );

    },

    selectByUuid: function ( uuid ) {

        var scope = this;

        this.scene.traverse( function ( child ) {

            if ( child.uuid === uuid ) {

                scope.select( child );

            }

        } );

    },

    deselect: function () {

        this.select( null );

    },

    focus: function ( object ) {

        this.signals.objectFocused.dispatch( object );

    },

    focusById: function ( id ) {

        this.focus( this.scene.getObjectById( id, true ) );

    },

    clear: function () {

        this.camera.position.set( 500, 250, 500 );
        this.camera.lookAt( new THREE.Vector3() );

        var objects = this.scene.children;

        while ( objects.length > 0 ) {

            this.removeObject( objects[ 0 ] );

        }

        this.geometries = {};
        this.materials = {};
        this.textures = {};
        this.scripts = {};

        this.deselect();

        this.signals.editorCleared.dispatch();

    },

    //

    fromJSON: function ( json ) {

        var loader = new THREE.ObjectLoader();

        // backwards

        if ( json.scene === undefined ) {

            var scene = loader.parse( json );

            this.setScene( scene );

            return;

        }

        // TODO: Clean this up somehow

        var camera = loader.parse( json.camera );

        this.camera.position.copy( camera.position );
        this.camera.rotation.copy( camera.rotation );
        this.camera.aspect = camera.aspect;
        this.camera.near = camera.near;
        this.camera.far = camera.far;

        this.setScene( loader.parse( json.scene ) );
        this.scripts = json.scripts;

    },

    toJSON: function () {

        return {

            camera: this.camera.toJSON(),
            scene: this.scene.toJSON(),
            scripts: this.scripts

        };

    }

}
/**
 * @author mrdoob / http://mrdoob.com/
 */

var Config = function () {

    var name = 'threejs-editor';

    var storage = {
        'autosave': true,
        'theme': '/assets/c/threejs/light.css',

        'renderer': 'WebGLRenderer',
        'renderer/antialias': true,

        'camera/position': [ 500, 250, 500 ],
        'camera/target': [ 0, 0, 0 ],

        'ui/sidebar/animation/collapsed': true,
        'ui/sidebar/geometry/collapsed': true,
        'ui/sidebar/material/collapsed': true,
        'ui/sidebar/object3d/collapsed': false,
        'ui/sidebar/renderer/collapsed': true,
        'ui/sidebar/scene/collapsed': false,
        'ui/sidebar/script/collapsed': true
    };

    if ( window.localStorage[ name ] === undefined ) {

        window.localStorage[ name ] = JSON.stringify( storage );

    } else {

        var data = JSON.parse( window.localStorage[ name ] );

        for ( var key in data ) {

            storage[ key ] = data[ key ];

        }

    }

    return {

        getKey: function ( key ) {

            return storage[ key ];

        },

        setKey: function () { // key, value, key, value ...

            for ( var i = 0, l = arguments.length; i < l; i += 2 ) {

                storage[ arguments[ i ] ] = arguments[ i + 1 ];

            }

            window.localStorage[ name ] = JSON.stringify( storage );

            console.log( '[' + /\d\d\:\d\d\:\d\d/.exec( new Date() )[ 0 ] + ']', 'Saved config to LocalStorage.' );

        },

        clear: function () {

            delete window.localStorage[ name ];

        }

    }

};
/**
 * @author mrdoob / http://mrdoob.com/
 */

var Loader = function ( editor ) {

    var scope = this;
    var signals = editor.signals;
    this.filename = null;
    this.fileId = null;
    this.afterLoading = function(mesh){
        var startMatrix =[];
        var startMatrixWorld = []
        for (var i in mesh.matrix.elements){
            startMatrix[i] = mesh.matrix.elements[i];
        }

        mesh.name = this.filename;
        mesh.fileId = this.fileId;
        var geometry = mesh.geometry;
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();
        var box = new THREE.BoundingBoxHelper( geometry );
        var meshX = (box.object.boundingBox.min.x + box.object.boundingBox.max.x)/2;
        var meshY = (box.object.boundingBox.min.y + box.object.boundingBox.max.y)/2;
        var meshZ = (box.object.boundingBox.min.z + box.object.boundingBox.max.z)/2;
        mesh.realCenter = {"x":meshX,"y":meshY,"z":meshZ};
        THREE.GeometryUtils.center( mesh.geometry );
        mesh.position.set(mesh.realCenter.x,mesh.realCenter.y,mesh.realCenter.z);
        mesh.updateMatrix();
        mesh.startOffset = {"12":mesh.matrix.elements[12]-startMatrix[12],
            "13":mesh.matrix.elements[13]-startMatrix[13],
            "14":mesh.matrix.elements[14]-startMatrix[14]
        };
        return mesh;
    }

    this.loadFile = function ( file ) {

        this.filename = file.name;
        this.fileId = file.name;
        if (file.fileId !== undefined){
            this.fileId = file.fileId;
        }
        var extension = this.filename.split( '.' ).pop().toLowerCase();
        var material = aseMaterial.get('object');
        switch ( extension ) {

            case 'awd':

                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {

                    var loader = new THREE.AWDLoader();
                    var scene = loader.parse( event.target.result );

                    editor.setScene( scene );

                }, false );
                reader.readAsArrayBuffer( file );

                break;

            case 'babylon':

                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {

                    var contents = event.target.result;
                    var json = JSON.parse( contents );

                    var loader = new THREE.BabylonLoader();
                    var scene = loader.parse( json );

                    editor.setScene( scene );

                }, false );
                reader.readAsText( file );

                break;

            case 'babylonmeshdata':

                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {

                    var contents = event.target.result;
                    var json = JSON.parse( contents );

                    var loader = new THREE.BabylonLoader();

                    var geometry = loader.parseGeometry( json );


                    var mesh = new THREE.Mesh( geometry, material );
                    mesh = scope.afterLoading(mesh);

                    editor.addObject( mesh );
                    editor.select( mesh );

                }, false );
                reader.readAsText( file );

                break;

            case 'ctm':

                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {

                    var data = new Uint8Array( event.target.result );

                    var stream = new CTM.Stream( data );
                    stream.offset = 0;

                    var loader = new THREE.CTMLoader();
                    loader.createModel( new CTM.File( stream ), function( geometry ) {

                        geometry.sourceType = "ctm";
                        geometry.sourceFile = file.name;



                        var mesh = new THREE.Mesh( geometry, material );
                        mesh = scope.afterLoading(mesh);
                        editor.addObject( mesh );
                        editor.select( mesh );

                    } );

                }, false );
                reader.readAsArrayBuffer( file );

                break;

            case 'dae':

                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {

                    var contents = event.target.result;

                    var parser = new DOMParser();
                    var xml = parser.parseFromString( contents, 'text/xml' );

                    var loader = new THREE.ColladaLoader();
                    loader.parse( xml, function ( collada ) {

                        collada.scene.name = filename;

                        editor.addObject( collada.scene );
                        editor.select( collada.scene );

                    } );

                }, false );
                reader.readAsText( file );

                break;

            case 'js':
            case 'json':

            case '3geo':
            case '3mat':
            case '3obj':
            case '3scn':

                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {

                    var contents = event.target.result;

                    // 2.0

                    if ( contents.indexOf( 'postMessage' ) !== -1 ) {

                        var blob = new Blob( [ contents ], { type: 'text/javascript' } );
                        var url = URL.createObjectURL( blob );

                        var worker = new Worker( url );

                        worker.onmessage = function ( event ) {

                            event.data.metadata = { version: 2 };
                            handleJSON( event.data, file, filename );

                        };

                        worker.postMessage( Date.now() );

                        return;

                    }

                    // >= 3.0

                    var data;

                    try {

                        data = JSON.parse( contents );

                    } catch ( error ) {

                        alert( error );
                        return;

                    }

                    handleJSON( data, file, filename );

                }, false );
                reader.readAsText( file );

                break;

            case 'obj':

                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {

                    var contents = event.target.result;

                    var object = new THREE.OBJLoader().parse( contents );
                    object.name = filename;

                    editor.addObject( object );
                    editor.select( object );

                }, false );
                reader.readAsText( file );

                break;

            case 'ply':

                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {

                    var contents = event.target.result;

                    var geometry = new THREE.PLYLoader().parse( contents );
                    geometry.sourceType = "ply";
                    geometry.sourceFile = file.name;



                    var mesh = new THREE.Mesh( geometry, material );
                    mesh = scope.afterLoading(mesh);
                    editor.addObject( mesh );
                    editor.select( mesh );

                }, false );
                reader.readAsText( file );

                break;

            case 'stl':

                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {

                    var contents = event.target.result;

                    var geometry = new THREE.STLLoader().parse( contents );
                    geometry.sourceType = "stl";
                    geometry.sourceFile = file.name;


                    var mesh = new THREE.Mesh( geometry, material );
                    mesh = scope.afterLoading(mesh);
                    editor.addObject( mesh );
                    editor.select( mesh );

                }, false );

                if ( reader.readAsBinaryString !== undefined ) {

                    reader.readAsBinaryString( file );

                } else {

                    reader.readAsArrayBuffer( file );

                }

                break;

            /*
             case 'utf8':

             var reader = new FileReader();
             reader.addEventListener( 'load', function ( event ) {

             var contents = event.target.result;

             var geometry = new THREE.UTF8Loader().parse( contents );
             var material = new THREE.MeshLambertMaterial();

             var mesh = new THREE.Mesh( geometry, material );

             editor.addObject( mesh );
             editor.select( mesh );

             }, false );
             reader.readAsBinaryString( file );

             break;
             */

            case 'vtk':

                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {

                    var contents = event.target.result;

                    var geometry = new THREE.VTKLoader().parse( contents );
                    geometry.sourceType = "vtk";
                    geometry.sourceFile = file.name;



                    var mesh = new THREE.Mesh( geometry, material );
                    mesh = scope.afterLoading(mesh);
                    editor.addObject( mesh );
                    editor.select( mesh );

                }, false );
                reader.readAsText( file );

                break;

            case 'wrl':

                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {

                    var contents = event.target.result;

                    var result = new THREE.VRMLLoader().parse( contents );

                    editor.setScene( result );

                }, false );
                reader.readAsText( file );

                break;
            case 'gcode':
                var reader = new FileReader();
                reader.addEventListener( 'load', function ( event ) {
                    var contents = event.target.result;
                    var gParser = new GCodeParser();
                    var gm = gParser.parse(contents);
                    var gRender = new GCodeRenderer();

                    var mesh = gRender.render(gm);
                    mesh.name = filename;
                    editor.addObject( mesh );
                    editor.select( mesh );

                }, false );
                reader.readAsText( file );
                break;
            default:

                alert( 'Unsupported file format (' + extension +  ').' );

                break;

        }
        stopProgressBgAnimate();

    }

    var handleJSON = function ( data, file, filename ) {

        if ( data.metadata === undefined ) { // 2.0

            data.metadata = { type: 'Geometry' };

        }

        if ( data.metadata.type === undefined ) { // 3.0

            data.metadata.type = 'Geometry';

        }

        if ( data.metadata.version === undefined ) {

            data.metadata.version = data.metadata.formatVersion;

        }

        if ( data.metadata.type === 'BufferGeometry' ) {

            var loader = new THREE.BufferGeometryLoader();
            var result = loader.parse( data );

            var mesh = new THREE.Mesh( result );

            editor.addObject( mesh );
            editor.select( mesh );

        } else if ( data.metadata.type.toLowerCase() === 'geometry' ) {

            var loader = new THREE.JSONLoader();
            var result = loader.parse( data );

            var geometry = result.geometry;
            var material;

            if ( result.materials !== undefined ) {

                if ( result.materials.length > 1 ) {

                    material = new THREE.MeshFaceMaterial( result.materials );

                } else {

                    material = result.materials[ 0 ];

                }

            } else {

                material = new THREE.MeshPhongMaterial();

            }

            geometry.sourceType = "ascii";
            geometry.sourceFile = file.name;

            var mesh;

            if ( geometry.animation && geometry.animation.hierarchy ) {

                mesh = new THREE.SkinnedMesh( geometry, material );

            } else {

                mesh = new THREE.Mesh( geometry, material );

            }

            mesh = scope.afterLoading(mesh);

            editor.addObject( mesh );
            editor.select( mesh );

        } else if ( data.metadata.type.toLowerCase() === 'object' ) {

            var loader = new THREE.ObjectLoader();
            var result = loader.parse( data );

            if ( result instanceof THREE.Scene ) {

                editor.setScene( result );

            } else {

                editor.addObject( result );
                editor.select( result );

            }

        } else if ( data.metadata.type.toLowerCase() === 'scene' ) {

            // DEPRECATED

            var loader = new THREE.SceneLoader();
            loader.parse( data, function ( result ) {

                editor.setScene( result.scene );

            }, '' );

        }

    };

}

var asePlane = function(width,depth,height,step,majorstep,round){


    var roundheatbed = round;

    var outerWidth = width +0.1;
    var outerDepth = depth +0.1;
    var outerHeight = height +0.1;

    var outerWidthSafe = width -10;
    var outerDepthSafe = depth -10;
    var outerHeightSafe = height -10;

    var gridOutlineMaterial = new THREE.LineBasicMaterial({
        color: 0xffb233
    });

    var gridOutlineMaterialInner = new THREE.LineBasicMaterial({
        color: 0xffffff,
        opacity: 0.5,
        transparent: true
    });
    var gridOutlineMaterialInnerMajor = new THREE.LineBasicMaterial({
        color: 0xffffff
    });

    var dashedMaterial = new THREE.LineDashedMaterial({
        color: 0x00d2ff,
        dashSize: 2,
        gapSize: 1
    });


    var grid = new THREE.Mesh()

    // Center --->

    var AxisColorX = new THREE.LineBasicMaterial({
        color: 0xf46577
    });
    var AxisColorY = new THREE.LineBasicMaterial({
        color: 0x69de77
    });
    var AxisColorZ = new THREE.LineBasicMaterial({
        color: 0x63b8ff
    });

    var geometryCenterX = new THREE.Geometry();
    geometryCenterX.vertices.push(new THREE.Vector3(-10,0.1,0));
    geometryCenterX.vertices.push(new THREE.Vector3(10,0.1,0));
    var centerLineX = new THREE.Line(geometryCenterX, AxisColorX);

    var geometryCenterY = new THREE.Geometry();
    geometryCenterY.vertices.push(new THREE.Vector3(0,0.1,-10));
    geometryCenterY.vertices.push(new THREE.Vector3(0,0.1,10));
    var centerLineY = new THREE.Line(geometryCenterY, AxisColorY);

    var geometryCenterZ = new THREE.Geometry();
    geometryCenterZ.vertices.push(new THREE.Vector3(0,-10,0));
    geometryCenterZ.vertices.push(new THREE.Vector3(0,10,0));
    var centerLineZ = new THREE.Line(geometryCenterZ, AxisColorZ);


    grid.add(centerLineX)
    grid.add(centerLineY)
    grid.add(centerLineZ)

    // Center <---


    if ( roundheatbed == true ) {


        var geometryGridCirc = new THREE.Geometry();
        var geometryGridMajorCirc = new THREE.Geometry();



        for ( var i = 0; i < width/2 ; i += step ) {



            var rarDepth = Math.sqrt(width*width/4 - i*i);


            geometryGridCirc.vertices.push(
                new THREE.Vector3( - rarDepth, 0, i ), new THREE.Vector3( rarDepth, 0, i )

            );
            geometryGridCirc.vertices.push(
                new THREE.Vector3( - rarDepth, 0, -i ), new THREE.Vector3( rarDepth, 0, -i )

            );


        }


        for ( var i = 0; i < width/2 ; i += step ) {

            var rarDepth = Math.sqrt(width*width/4 - i*i);

            geometryGridCirc.vertices.push(
                new THREE.Vector3( i, 0, - rarDepth ), new THREE.Vector3( i, 0, rarDepth )

            );

            geometryGridCirc.vertices.push(
                new THREE.Vector3( -i, 0, - rarDepth ), new THREE.Vector3( -i, 0, rarDepth )

            );

        }

        for ( var i = 0; i <= width/2 ; i += majorstep ) {

            var rarDepth = Math.sqrt(width*width/4 - i*i);

            geometryGridMajorCirc.vertices.push(
                new THREE.Vector3( - rarDepth, 0, i ), new THREE.Vector3( rarDepth, 0, i )

            );
            geometryGridMajorCirc.vertices.push(
                new THREE.Vector3( - rarDepth, 0, -i ), new THREE.Vector3( rarDepth, 0, -i )

            );


        }

        for ( var i = 0; i <= depth/2 ; i += majorstep ) {

            var rarDepth = Math.sqrt(width*width/4 - i*i);

            geometryGridMajorCirc.vertices.push(
                new THREE.Vector3( i, 0, - rarDepth ), new THREE.Vector3( i, 0, rarDepth )

            );

            geometryGridMajorCirc.vertices.push(
                new THREE.Vector3( -i, 0, - rarDepth ), new THREE.Vector3( -i, 0, rarDepth )

            );

        }



        var geometryGridCirc = new THREE.Line(geometryGridCirc, gridOutlineMaterialInner,THREE.LinePieces);
        var geometryGridCircMajor = new THREE.Line(geometryGridMajorCirc, gridOutlineMaterialInnerMajor,THREE.LinePieces);


        var radiusOut   = outerWidth/2,
            segments = 120,
            circleGeometryOut = new THREE.CircleGeometry( radiusOut, segments );

        var radiusIn   = outerWidthSafe/2,
            circleGeometryIn = new THREE.CircleGeometry( radiusIn, segments );


        // Remove center vertex
        circleGeometryIn.vertices.shift();
        circleGeometryOut.vertices.shift();

        var circularBead = new THREE.Mesh()
        var lineCircleIn = new THREE.Line(circleGeometryIn, dashedMaterial,THREE.LinePieces);
        var lineCircleOut = new THREE.Line(circleGeometryOut, gridOutlineMaterial);

        circularBead.add(geometryGridCirc);
        circularBead.add(geometryGridCircMajor);

        grid.add(circularBead);
        circularBead.add(lineCircleIn);
        circularBead.add(lineCircleOut);
        //circularBead.rotation.x += -90 * (Math.PI / 180);
        lineCircleIn.rotation.x += 90 * (Math.PI / 180);
        lineCircleOut.rotation.x += 90 * (Math.PI / 180);

    } else {

        var geometryOut = new THREE.Geometry();
        geometryOut.vertices.push(new THREE.Vector3(-outerDepth/2, 0, outerWidth/2));
        geometryOut.vertices.push(new THREE.Vector3(outerDepth/2, 0, outerWidth/2));
        geometryOut.vertices.push(new THREE.Vector3(outerDepth/2, 0, -outerWidth/2));
        geometryOut.vertices.push(new THREE.Vector3(-outerDepth/2, 0, -outerWidth/2));
        geometryOut.vertices.push(new THREE.Vector3(-outerDepth/2, 0, outerWidth/2))
        geometryOut.computeLineDistances()

        var line = new THREE.Line(geometryOut, gridOutlineMaterial);

        var geometryIn = new THREE.Geometry();
        geometryIn.vertices.push(new THREE.Vector3(-outerDepthSafe/2, 0, outerWidthSafe/2));
        geometryIn.vertices.push(new THREE.Vector3(outerDepthSafe/2, 0, outerWidthSafe/2));
        geometryIn.vertices.push(new THREE.Vector3(outerDepthSafe/2, 0, -outerWidthSafe/2));
        geometryIn.vertices.push(new THREE.Vector3(-outerDepthSafe/2, 0, -outerWidthSafe/2));
        geometryIn.vertices.push(new THREE.Vector3(-outerDepthSafe/2, 0, outerWidthSafe/2))
        geometryIn.computeLineDistances()

        var lineSafe = new THREE.Line(geometryIn, dashedMaterial);

        var geometryGridOutline = new THREE.Geometry();
        geometryGridOutline.vertices.push(new THREE.Vector3(-height/2, 0, width/2));
        geometryGridOutline.vertices.push(new THREE.Vector3(height/2, 0, width/2));

        var geometryGrid = new THREE.Geometry();
        var geometryGridMajor = new THREE.Geometry();



        for ( var i = 0; i < width/2 ; i += step ) {

            geometryGrid.vertices.push(
                new THREE.Vector3( - depth/2, 0, i ), new THREE.Vector3( depth/2, 0, i )

            );
            geometryGrid.vertices.push(
                new THREE.Vector3( - depth/2, 0, -i ), new THREE.Vector3( depth/2, 0, -i )

            );


        }

        for ( var i = 0; i < depth/2 ; i += step ) {

            geometryGrid.vertices.push(
                new THREE.Vector3( i, 0, - width/2 ), new THREE.Vector3( i, 0, width/2 )

            );

            geometryGrid.vertices.push(
                new THREE.Vector3( -i, 0, - width/2 ), new THREE.Vector3( -i, 0, width/2 )

            );

        }

        for ( var i = 0; i <= width/2 ; i += majorstep ) {

            geometryGridMajor.vertices.push(
                new THREE.Vector3( - depth/2, 0, i ), new THREE.Vector3( depth/2, 0, i )

            );
            geometryGridMajor.vertices.push(
                new THREE.Vector3( - depth/2, 0, -i ), new THREE.Vector3( depth/2, 0, -i )

            );


        }

        for ( var i = 0; i <= depth/2 ; i += majorstep ) {

            geometryGridMajor.vertices.push(
                new THREE.Vector3( i, 0, - width/2 ), new THREE.Vector3( i, 0, width/2 )

            );

            geometryGridMajor.vertices.push(
                new THREE.Vector3( -i, 0, - width/2 ), new THREE.Vector3( -i, 0, width/2 )

            );

        }



        var lineVertical = new THREE.Line(geometryGrid, gridOutlineMaterialInner,THREE.LinePieces);
        var lineVerticalMajor = new THREE.Line(geometryGridMajor, gridOutlineMaterialInnerMajor,THREE.LinePieces);
        var normalGrid =  new THREE.Mesh();


        grid.add(normalGrid);
        normalGrid.add(lineVertical);
        normalGrid.position.z = - width/2;
        normalGrid.position.y = -0.01;
        normalGrid.position.z = 0;


        normalGrid.add(line);
        normalGrid.add(lineSafe);
        normalGrid.add(lineVerticalMajor);


        line.position.y = 0.1;


    };
    //grid.rotation.x += -90 * (Math.PI / 180);
    grid.name = "bed";
    return grid;


};


var aseLight = function(){
    var lights = [];
    var light = new THREE.HemisphereLight(16777215, 0);
    light.position.set(70,100,70);
    lights.push(light);
    return lights;
}/**
 * @author alteredq / http://alteredqualia.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author davidedc / http://www.sketchpatch.net/
 *
 * ShaderExtras currently contains:
 *
 *	screen
 *	convolution
 *	film
 * 	bokeh
 *  sepia
 *	dotscreen
 *	vignette
 *  bleachbypass
 *	basic
 *  dofmipmap
 *  focus
 *  triangleBlur
 *  horizontalBlur + verticalBlur
 *  horizontalTiltShift + verticalTiltShift
 *  blend
 *  fxaa
 *  luminosity
 *  colorCorrection
 *  normalmap
 *  ssao
 *  colorify
 *  unpackDepthRGBA
 */

THREE.ShaderExtras = {

    /* -------------------------------------------------------------------------
     //	Full-screen textured quad shader
     ------------------------------------------------------------------------- */

    'screen': {

        uniforms: {

            tDiffuse: { type: "t", value: null },
            opacity:  { type: "f", value: 1.0 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform float opacity;",

            "uniform sampler2D tDiffuse;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 texel = texture2D( tDiffuse, vUv );",
            "gl_FragColor = opacity * texel;",

            "}"

        ].join("\n")

    },

    /* ------------------------------------------------------------------------
     //	Convolution shader
     //	  - ported from o3d sample to WebGL / GLSL
     //			http://o3d.googlecode.com/svn/trunk/samples/convolution.html
     ------------------------------------------------------------------------ */

    'convolution': {

        uniforms: {

            "tDiffuse" : 		{ type: "t", value: null },
            "uImageIncrement" : { type: "v2", value: new THREE.Vector2( 0.001953125, 0.0 ) },
            "cKernel" : 		{ type: "fv1", value: [] }

        },

        vertexShader: [

            //"#define KERNEL_SIZE 25.0",

            "uniform vec2 uImageIncrement;",

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv - ( ( KERNEL_SIZE - 1.0 ) / 2.0 ) * uImageIncrement;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            //"#define KERNEL_SIZE 25",
            "uniform float cKernel[ KERNEL_SIZE ];",

            "uniform sampler2D tDiffuse;",
            "uniform vec2 uImageIncrement;",

            "varying vec2 vUv;",

            "void main() {",

            "vec2 imageCoord = vUv;",
            "vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );",

            "for( int i = 0; i < KERNEL_SIZE; i ++ ) {",

            "sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];",
            "imageCoord += uImageIncrement;",

            "}",

            "gl_FragColor = sum;",

            "}"


        ].join("\n")

    },

    /* -------------------------------------------------------------------------

     // Film grain & scanlines shader

     //	- ported from HLSL to WebGL / GLSL
     //	  http://www.truevision3d.com/forums/showcase/staticnoise_colorblackwhite_scanline_shaders-t18698.0.html

     // Screen Space Static Postprocessor
     //
     // Produces an analogue noise overlay similar to a film grain / TV static
     //
     // Original implementation and noise algorithm
     // Pat 'Hawthorne' Shearon
     //
     // Optimized scanlines + noise version with intensity scaling
     // Georg 'Leviathan' Steinrohder

     // This version is provided under a Creative Commons Attribution 3.0 License
     // http://creativecommons.org/licenses/by/3.0/
     ------------------------------------------------------------------------- */

    'film': {

        uniforms: {

            tDiffuse:   { type: "t", value: null },
            time: 	    { type: "f", value: 0.0 },
            nIntensity: { type: "f", value: 0.5 },
            sIntensity: { type: "f", value: 0.05 },
            sCount: 	{ type: "f", value: 4096 },
            grayscale:  { type: "i", value: 1 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            // control parameter
            "uniform float time;",

            "uniform bool grayscale;",

            // noise effect intensity value (0 = no effect, 1 = full effect)
            "uniform float nIntensity;",

            // scanlines effect intensity value (0 = no effect, 1 = full effect)
            "uniform float sIntensity;",

            // scanlines effect count value (0 = no effect, 4096 = full effect)
            "uniform float sCount;",

            "uniform sampler2D tDiffuse;",

            "varying vec2 vUv;",

            "void main() {",

            // sample the source
            "vec4 cTextureScreen = texture2D( tDiffuse, vUv );",

            // make some noise
            "float x = vUv.x * vUv.y * time *  1000.0;",
            "x = mod( x, 13.0 ) * mod( x, 123.0 );",
            "float dx = mod( x, 0.01 );",

            // add noise
            "vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );",

            // get us a sine and cosine
            "vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );",

            // add scanlines
            "cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;",

            // interpolate between source and result by intensity
            "cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );",

            // convert to grayscale if desired
            "if( grayscale ) {",

            "cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );",

            "}",

            "gl_FragColor =  vec4( cResult, cTextureScreen.a );",

            "}"

        ].join("\n")

    },


    /* -------------------------------------------------------------------------
     //	Depth-of-field shader with bokeh
     //	ported from GLSL shader by Martins Upitis
     //	http://artmartinsh.blogspot.com/2010/02/glsl-lens-blur-filter-with-bokeh.html
     ------------------------------------------------------------------------- */

    'bokeh'	: {

        uniforms: { tColor:   { type: "t", value: null },
            tDepth:   { type: "t", value: null },
            focus:    { type: "f", value: 1.0 },
            aspect:   { type: "f", value: 1.0 },
            aperture: { type: "f", value: 0.025 },
            maxblur:  { type: "f", value: 1.0 }
        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "varying vec2 vUv;",

            "uniform sampler2D tColor;",
            "uniform sampler2D tDepth;",

            "uniform float maxblur;",  	// max blur amount
            "uniform float aperture;",	// aperture - bigger values for shallower depth of field

            "uniform float focus;",
            "uniform float aspect;",

            "void main() {",

            "vec2 aspectcorrect = vec2( 1.0, aspect );",

            "vec4 depth1 = texture2D( tDepth, vUv );",

            "float factor = depth1.x - focus;",

            "vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );",

            "vec2 dofblur9 = dofblur * 0.9;",
            "vec2 dofblur7 = dofblur * 0.7;",
            "vec2 dofblur4 = dofblur * 0.4;",

            "vec4 col = vec4( 0.0 );",

            "col += texture2D( tColor, vUv.xy );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );",

            "col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );",

            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );",

            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );",

            "gl_FragColor = col / 41.0;",
            "gl_FragColor.a = 1.0;",

            "}"

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Depth-of-field shader using mipmaps
     //	- from Matt Handley @applmak
     //	- requires power-of-2 sized render target with enabled mipmaps
     ------------------------------------------------------------------------- */

    'dofmipmap': {

        uniforms: {

            tColor:   { type: "t", value: null },
            tDepth:   { type: "t", value: null },
            focus:    { type: "f", value: 1.0 },
            maxblur:  { type: "f", value: 1.0 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform float focus;",
            "uniform float maxblur;",

            "uniform sampler2D tColor;",
            "uniform sampler2D tDepth;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 depth = texture2D( tDepth, vUv );",

            "float factor = depth.x - focus;",

            "vec4 col = texture2D( tColor, vUv, 2.0 * maxblur * abs( focus - depth.x ) );",

            "gl_FragColor = col;",
            "gl_FragColor.a = 1.0;",

            "}"

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Sepia tone shader
     //  - based on glfx.js sepia shader
     //		https://github.com/evanw/glfx.js
     ------------------------------------------------------------------------- */

    'sepia': {

        uniforms: {

            tDiffuse: { type: "t", value: null },
            amount:   { type: "f", value: 1.0 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform float amount;",

            "uniform sampler2D tDiffuse;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 color = texture2D( tDiffuse, vUv );",
            "vec3 c = color.rgb;",

            "color.r = dot( c, vec3( 1.0 - 0.607 * amount, 0.769 * amount, 0.189 * amount ) );",
            "color.g = dot( c, vec3( 0.349 * amount, 1.0 - 0.314 * amount, 0.168 * amount ) );",
            "color.b = dot( c, vec3( 0.272 * amount, 0.534 * amount, 1.0 - 0.869 * amount ) );",

            "gl_FragColor = vec4( min( vec3( 1.0 ), color.rgb ), color.a );",

            "}"

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Dot screen shader
     //  - based on glfx.js sepia shader
     //		https://github.com/evanw/glfx.js
     ------------------------------------------------------------------------- */

    'dotscreen': {

        uniforms: {

            tDiffuse: { type: "t", value: null },
            tSize:    { type: "v2", value: new THREE.Vector2( 256, 256 ) },
            center:   { type: "v2", value: new THREE.Vector2( 0.5, 0.5 ) },
            angle:	  { type: "f", value: 1.57 },
            scale:	  { type: "f", value: 1.0 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform vec2 center;",
            "uniform float angle;",
            "uniform float scale;",
            "uniform vec2 tSize;",

            "uniform sampler2D tDiffuse;",

            "varying vec2 vUv;",

            "float pattern() {",

            "float s = sin( angle ), c = cos( angle );",

            "vec2 tex = vUv * tSize - center;",
            "vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;",

            "return ( sin( point.x ) * sin( point.y ) ) * 4.0;",

            "}",

            "void main() {",

            "vec4 color = texture2D( tDiffuse, vUv );",

            "float average = ( color.r + color.g + color.b ) / 3.0;",

            "gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );",

            "}"

        ].join("\n")

    },

    /* ------------------------------------------------------------------------------------------------
     //	Vignette shader
     //	- based on PaintEffect postprocess from ro.me
     //		http://code.google.com/p/3-dreams-of-black/source/browse/deploy/js/effects/PaintEffect.js
     ------------------------------------------------------------------------------------------------ */

    'vignette': {

        uniforms: {

            tDiffuse: { type: "t", value: null },
            offset:   { type: "f", value: 1.0 },
            darkness: { type: "f", value: 1.0 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform float offset;",
            "uniform float darkness;",

            "uniform sampler2D tDiffuse;",

            "varying vec2 vUv;",

            "void main() {",

            // Eskil's vignette

            "vec4 texel = texture2D( tDiffuse, vUv );",
            "vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );",
            "gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );",

            /*
             // alternative version from glfx.js
             // this one makes more "dusty" look (as opposed to "burned")

             "vec4 color = texture2D( tDiffuse, vUv );",
             "float dist = distance( vUv, vec2( 0.5 ) );",
             "color.rgb *= smoothstep( 0.8, offset * 0.799, dist *( darkness + offset ) );",
             "gl_FragColor = color;",
             */

            "}"

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Bleach bypass shader [http://en.wikipedia.org/wiki/Bleach_bypass]
     //	- based on Nvidia example
     //		http://developer.download.nvidia.com/shaderlibrary/webpages/shader_library.html#post_bleach_bypass
     ------------------------------------------------------------------------- */

    'bleachbypass': {

        uniforms: {

            tDiffuse: { type: "t", value: null },
            opacity:  { type: "f", value: 1.0 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform float opacity;",

            "uniform sampler2D tDiffuse;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 base = texture2D( tDiffuse, vUv );",

            "vec3 lumCoeff = vec3( 0.25, 0.65, 0.1 );",
            "float lum = dot( lumCoeff, base.rgb );",
            "vec3 blend = vec3( lum );",

            "float L = min( 1.0, max( 0.0, 10.0 * ( lum - 0.45 ) ) );",

            "vec3 result1 = 2.0 * base.rgb * blend;",
            "vec3 result2 = 1.0 - 2.0 * ( 1.0 - blend ) * ( 1.0 - base.rgb );",

            "vec3 newColor = mix( result1, result2, L );",

            "float A2 = opacity * base.a;",
            "vec3 mixRGB = A2 * newColor.rgb;",
            "mixRGB += ( ( 1.0 - A2 ) * base.rgb );",

            "gl_FragColor = vec4( mixRGB, base.a );",

            "}"

        ].join("\n")

    },

    /* --------------------------------------------------------------------------------------------------
     //	Focus shader
     //	- based on PaintEffect postprocess from ro.me
     //		http://code.google.com/p/3-dreams-of-black/source/browse/deploy/js/effects/PaintEffect.js
     -------------------------------------------------------------------------------------------------- */

    'focus': {

        uniforms : {

            "tDiffuse": 		{ type: "t", value: null },
            "screenWidth": 		{ type: "f", value: 1024 },
            "screenHeight": 	{ type: "f", value: 1024 },
            "sampleDistance": 	{ type: "f", value: 0.94 },
            "waveFactor": 		{ type: "f", value: 0.00125 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform float screenWidth;",
            "uniform float screenHeight;",
            "uniform float sampleDistance;",
            "uniform float waveFactor;",

            "uniform sampler2D tDiffuse;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 color, org, tmp, add;",
            "float sample_dist, f;",
            "vec2 vin;",
            "vec2 uv = vUv;",

            "add = color = org = texture2D( tDiffuse, uv );",

            "vin = ( uv - vec2( 0.5 ) ) * vec2( 1.4 );",
            "sample_dist = dot( vin, vin ) * 2.0;",

            "f = ( waveFactor * 100.0 + sample_dist ) * sampleDistance * 4.0;",

            "vec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2( f );",

            "add += tmp = texture2D( tDiffuse, uv + vec2( 0.111964, 0.993712 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( 0.846724, 0.532032 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( 0.943883, -0.330279 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( 0.330279, -0.943883 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( -0.532032, -0.846724 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( -0.993712, -0.111964 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( -0.707107, 0.707107 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "color = color * vec4( 2.0 ) - ( add / vec4( 8.0 ) );",
            "color = color + ( add / vec4( 8.0 ) - color ) * ( vec4( 1.0 ) - vec4( sample_dist * 0.5 ) );",

            "gl_FragColor = vec4( color.rgb * color.rgb * vec3( 0.95 ) + color.rgb, 1.0 );",

            "}"


        ].join("\n")
    },

    /* -------------------------------------------------------------------------
     //	Triangle blur shader
     //  - based on glfx.js triangle blur shader
     //		https://github.com/evanw/glfx.js

     // 	A basic blur filter, which convolves the image with a
     // 	pyramid filter. The pyramid filter is separable and is applied as two
     //  perpendicular triangle filters.
     ------------------------------------------------------------------------- */

    'triangleBlur': {


        uniforms : {

            "texture": 	{ type: "t", value: null },
            "delta": 	{ type: "v2", value:new THREE.Vector2( 1, 1 )  }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "#define ITERATIONS 10.0",

            "uniform sampler2D texture;",
            "uniform vec2 delta;",

            "varying vec2 vUv;",

            "float random( vec3 scale, float seed ) {",

            // use the fragment position for a different seed per-pixel

            "return fract( sin( dot( gl_FragCoord.xyz + seed, scale ) ) * 43758.5453 + seed );",

            "}",

            "void main() {",

            "vec4 color = vec4( 0.0 );",

            "float total = 0.0;",

            // randomize the lookup values to hide the fixed number of samples

            "float offset = random( vec3( 12.9898, 78.233, 151.7182 ), 0.0 );",

            "for ( float t = -ITERATIONS; t <= ITERATIONS; t ++ ) {",

            "float percent = ( t + offset - 0.5 ) / ITERATIONS;",
            "float weight = 1.0 - abs( percent );",

            "color += texture2D( texture, vUv + delta * percent ) * weight;",
            "total += weight;",

            "}",

            "gl_FragColor = color / total;",

            "}",

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Simple test shader
     ------------------------------------------------------------------------- */

    'basic': {

        uniforms: {},

        vertexShader: [

            "void main() {",

            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "void main() {",

            "gl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );",

            "}"

        ].join("\n")

    },

    /* --------------------------------------------------------------------------------------------------
     //	Two pass Gaussian blur filter (horizontal and vertical blur shaders)
     //	- described in http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/
     //	  and used in http://www.cake23.de/traveling-wavefronts-lit-up.html
     //
     //	- 9 samples per pass
     //	- standard deviation 2.7
     //	- "h" and "v" parameters should be set to "1 / width" and "1 / height"
     -------------------------------------------------------------------------------------------------- */

    'horizontalBlur': {

        uniforms: {

            "tDiffuse": { type: "t", value: null },
            "h": 		{ type: "f", value: 1.0 / 512.0 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform sampler2D tDiffuse;",
            "uniform float h;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 sum = vec4( 0.0 );",

            "sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;",
            "sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, 		  	vUv.y ) ) * 0.1633;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;",

            "gl_FragColor = sum;",

            "}"


        ].join("\n")

    },

    'verticalBlur': {

        uniforms: {

            "tDiffuse": { type: "t", value: null },
            "v": 		{ type: "f", value: 1.0 / 512.0 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform sampler2D tDiffuse;",
            "uniform float v;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 sum = vec4( 0.0 );",

            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y			  ) ) * 0.1633;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;",

            "gl_FragColor = sum;",

            "}"


        ].join("\n")

    },

    /* --------------------------------------------------------------------------------------------------
     //	Simple fake tilt-shift effect, modulating two pass Gaussian blur (see above) by vertical position
     //
     //	- 9 samples per pass
     //	- standard deviation 2.7
     //	- "h" and "v" parameters should be set to "1 / width" and "1 / height"
     //	- "r" parameter control where "focused" horizontal line lies
     -------------------------------------------------------------------------------------------------- */

    'horizontalTiltShift': {

        uniforms: {

            "tDiffuse": { type: "t", value: null },
            "h": 		{ type: "f", value: 1.0 / 512.0 },
            "r": 		{ type: "f", value: 0.35 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform sampler2D tDiffuse;",
            "uniform float h;",
            "uniform float r;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 sum = vec4( 0.0 );",

            "float hh = h * abs( r - vUv.y );",

            "sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;",
            "sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, 		  	 vUv.y ) ) * 0.1633;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;",

            "gl_FragColor = sum;",

            "}"


        ].join("\n")

    },

    'verticalTiltShift': {

        uniforms: {

            "tDiffuse": { type: "t", value: null },
            "v": 		{ type: "f", value: 1.0 / 512.0 },
            "r": 		{ type: "f", value: 0.35 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform sampler2D tDiffuse;",
            "uniform float v;",
            "uniform float r;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 sum = vec4( 0.0 );",

            "float vv = v * abs( r - vUv.y );",

            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vv ) ) * 0.051;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vv ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vv ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vv ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y			   ) ) * 0.1633;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vv ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vv ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vv ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vv ) ) * 0.051;",

            "gl_FragColor = sum;",

            "}"


        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Blend two textures
     ------------------------------------------------------------------------- */

    'blend': {

        uniforms: {

            tDiffuse1: { type: "t", value: null },
            tDiffuse2: { type: "t", value: null },
            mixRatio:  { type: "f", value: 0.5 },
            opacity:   { type: "f", value: 1.0 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform float opacity;",
            "uniform float mixRatio;",

            "uniform sampler2D tDiffuse1;",
            "uniform sampler2D tDiffuse2;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 texel1 = texture2D( tDiffuse1, vUv );",
            "vec4 texel2 = texture2D( tDiffuse2, vUv );",
            "gl_FragColor = opacity * mix( texel1, texel2, mixRatio );",

            "}"

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	NVIDIA FXAA by Timothy Lottes
     //		http://timothylottes.blogspot.com/2011/06/fxaa3-source-released.html
     //	- WebGL port by @supereggbert
     //		http://www.glge.org/demos/fxaa/
     ------------------------------------------------------------------------- */

    'fxaa': {

        uniforms: {

            "tDiffuse": 	{ type: "t", value: null },
            "resolution": 	{ type: "v2", value: new THREE.Vector2( 1 / 1024, 1 / 512 )  }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",

            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform sampler2D tDiffuse;",
            "uniform vec2 resolution;",

            "varying vec2 vUv;",

            "#define FXAA_REDUCE_MIN   (1.0/128.0)",
            "#define FXAA_REDUCE_MUL   (1.0/8.0)",
            "#define FXAA_SPAN_MAX     8.0",

            "void main() {",

            "vec3 rgbNW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ).xyz;",
            "vec3 rgbNE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ).xyz;",
            "vec3 rgbSW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ).xyz;",
            "vec3 rgbSE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ).xyz;",
            "vec4 rgbaM  = texture2D( tDiffuse,  gl_FragCoord.xy  * resolution );",
            "vec3 rgbM  = rgbaM.xyz;",
            "float opacity  = rgbaM.w;",

            "vec3 luma = vec3( 0.299, 0.587, 0.114 );",

            "float lumaNW = dot( rgbNW, luma );",
            "float lumaNE = dot( rgbNE, luma );",
            "float lumaSW = dot( rgbSW, luma );",
            "float lumaSE = dot( rgbSE, luma );",
            "float lumaM  = dot( rgbM,  luma );",
            "float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );",
            "float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );",

            "vec2 dir;",
            "dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));",
            "dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));",

            "float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );",

            "float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );",
            "dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),",
            "max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),",
            "dir * rcpDirMin)) * resolution;",

            "vec3 rgbA = 0.5 * (",
            "texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ).xyz +",
            "texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ).xyz );",

            "vec3 rgbB = rgbA * 0.5 + 0.25 * (",
            "texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * -0.5 ).xyz +",
            "texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * 0.5 ).xyz );",

            "float lumaB = dot( rgbB, luma );",

            "if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {",

            "gl_FragColor = vec4( rgbA, opacity );",

            "} else {",

            "gl_FragColor = vec4( rgbB, opacity );",

            "}",

            "}",

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Luminosity
     //	http://en.wikipedia.org/wiki/Luminosity
     ------------------------------------------------------------------------- */

    'luminosity': {

        uniforms: {

            "tDiffuse": 	{ type: "t", value: null }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",

            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform sampler2D tDiffuse;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 texel = texture2D( tDiffuse, vUv );",

            "vec3 luma = vec3( 0.299, 0.587, 0.114 );",

            "float v = dot( texel.xyz, luma );",

            "gl_FragColor = vec4( v, v, v, texel.w );",

            "}"

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Color correction
     ------------------------------------------------------------------------- */

    'colorCorrection': {

        uniforms: {

            "tDiffuse" : 	{ type: "t", value: null },
            "powRGB" :		{ type: "v3", value: new THREE.Vector3( 2, 2, 2 ) },
            "mulRGB" :		{ type: "v3", value: new THREE.Vector3( 1, 1, 1 ) }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",

            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform sampler2D tDiffuse;",
            "uniform vec3 powRGB;",
            "uniform vec3 mulRGB;",

            "varying vec2 vUv;",

            "void main() {",

            "gl_FragColor = texture2D( tDiffuse, vUv );",
            "gl_FragColor.rgb = mulRGB * pow( gl_FragColor.rgb, powRGB );",

            "}"

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Normal map shader
     //	- compute normals from heightmap
     ------------------------------------------------------------------------- */

    'normalmap': {

        uniforms: {

            "heightMap"	: { type: "t", value: null },
            "resolution": { type: "v2", value: new THREE.Vector2( 512, 512 ) },
            "scale"		: { type: "v2", value: new THREE.Vector2( 1, 1 ) },
            "height"	: { type: "f", value: 0.05 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",

            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform float height;",
            "uniform vec2 resolution;",
            "uniform sampler2D heightMap;",

            "varying vec2 vUv;",

            "void main() {",

            "float val = texture2D( heightMap, vUv ).x;",

            "float valU = texture2D( heightMap, vUv + vec2( 1.0 / resolution.x, 0.0 ) ).x;",
            "float valV = texture2D( heightMap, vUv + vec2( 0.0, 1.0 / resolution.y ) ).x;",

            "gl_FragColor = vec4( ( 0.5 * normalize( vec3( val - valU, val - valV, height  ) ) + 0.5 ), 1.0 );",

            "}",

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Screen-space ambient occlusion shader
     //	- ported from
     //		SSAO GLSL shader v1.2
     //		assembled by Martins Upitis (martinsh) (http://devlog-martinsh.blogspot.com)
     //		original technique is made by ArKano22 (http://www.gamedev.net/topic/550699-ssao-no-halo-artifacts/)
     //	- modifications
     //		- modified to use RGBA packed depth texture (use clear color 1,1,1,1 for depth pass)
     //		- made fog more compatible with three.js linear fog
     //		- refactoring and optimizations
     ------------------------------------------------------------------------- */

    'ssao': {

        uniforms: {

            "tDiffuse": 	{ type: "t", value: null },
            "tDepth":   	{ type: "t", value: null },
            "size": 		{ type: "v2", value: new THREE.Vector2( 512, 512 ) },
            "cameraNear":	{ type: "f", value: 1 },
            "cameraFar":	{ type: "f", value: 100 },
            "fogNear":		{ type: "f", value: 5 },
            "fogFar":		{ type: "f", value: 100 },
            "fogEnabled":	{ type: "i", value: 0 },
            "onlyAO":		{ type: "i", value: 0 },
            "aoClamp":		{ type: "f", value: 0.3 },
            "lumInfluence":	{ type: "f", value: 0.9 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",

            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform float cameraNear;",
            "uniform float cameraFar;",

            "uniform float fogNear;",
            "uniform float fogFar;",

            "uniform bool fogEnabled;",		// attenuate AO with linear fog
            "uniform bool onlyAO;", 		// use only ambient occlusion pass?

            "uniform vec2 size;",			// texture width, height
            "uniform float aoClamp;", 		// depth clamp - reduces haloing at screen edges

            "uniform float lumInfluence;",  // how much luminance affects occlusion

            "uniform sampler2D tDiffuse;",
            "uniform sampler2D tDepth;",

            "varying vec2 vUv;",

            //"#define PI 3.14159265",
            "#define DL 2.399963229728653", // PI * ( 3.0 - sqrt( 5.0 ) )
            "#define EULER 2.718281828459045",

            // helpers

            "float width = size.x;", 	// texture width
            "float height = size.y;", 	// texture height

            "float cameraFarPlusNear = cameraFar + cameraNear;",
            "float cameraFarMinusNear = cameraFar - cameraNear;",
            "float cameraCoef = 2.0 * cameraNear;",

            // user variables

            "const int samples = 8;", 		// ao sample count
            "const float radius = 5.0;", 	// ao radius

            "const bool useNoise = false;", 		 // use noise instead of pattern for sample dithering
            "const float noiseAmount = 0.0003;", // dithering amount

            "const float diffArea = 0.4;", 		// self-shadowing reduction
            "const float gDisplace = 0.4;", 	// gauss bell center

            "const vec3 onlyAOColor = vec3( 1.0, 0.7, 0.5 );",
            //"const vec3 onlyAOColor = vec3( 1.0, 1.0, 1.0 );",


            // RGBA depth

            "float unpackDepth( const in vec4 rgba_depth ) {",

            "const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );",
            "float depth = dot( rgba_depth, bit_shift );",
            "return depth;",

            "}",

            // generating noise / pattern texture for dithering

            "vec2 rand( const vec2 coord ) {",

            "vec2 noise;",

            "if ( useNoise ) {",

            "float nx = dot ( coord, vec2( 12.9898, 78.233 ) );",
            "float ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );",

            "noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );",

            "} else {",

            "float ff = fract( 1.0 - coord.s * ( width / 2.0 ) );",
            "float gg = fract( coord.t * ( height / 2.0 ) );",

            "noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;",

            "}",

            "return ( noise * 2.0  - 1.0 ) * noiseAmount;",

            "}",

            "float doFog() {",

            "float zdepth = unpackDepth( texture2D( tDepth, vUv ) );",
            "float depth = -cameraFar * cameraNear / ( zdepth * cameraFarMinusNear - cameraFar );",

            "return smoothstep( fogNear, fogFar, depth );",

            "}",

            "float readDepth( const in vec2 coord ) {",

            //"return ( 2.0 * cameraNear ) / ( cameraFar + cameraNear - unpackDepth( texture2D( tDepth, coord ) ) * ( cameraFar - cameraNear ) );",
            "return cameraCoef / ( cameraFarPlusNear - unpackDepth( texture2D( tDepth, coord ) ) * cameraFarMinusNear );",


            "}",

            "float compareDepths( const in float depth1, const in float depth2, inout int far ) {",

            "float garea = 2.0;", 						 // gauss bell width
            "float diff = ( depth1 - depth2 ) * 100.0;", // depth difference (0-100)

            // reduce left bell width to avoid self-shadowing

            "if ( diff < gDisplace ) {",

            "garea = diffArea;",

            "} else {",

            "far = 1;",

            "}",

            "float dd = diff - gDisplace;",
            "float gauss = pow( EULER, -2.0 * dd * dd / ( garea * garea ) );",
            "return gauss;",

            "}",

            "float calcAO( float depth, float dw, float dh ) {",

            "float dd = radius - depth * radius;",
            "vec2 vv = vec2( dw, dh );",

            "vec2 coord1 = vUv + dd * vv;",
            "vec2 coord2 = vUv - dd * vv;",

            "float temp1 = 0.0;",
            "float temp2 = 0.0;",

            "int far = 0;",
            "temp1 = compareDepths( depth, readDepth( coord1 ), far );",

            // DEPTH EXTRAPOLATION

            "if ( far > 0 ) {",

            "temp2 = compareDepths( readDepth( coord2 ), depth, far );",
            "temp1 += ( 1.0 - temp1 ) * temp2;",

            "}",

            "return temp1;",

            "}",

            "void main() {",

            "vec2 noise = rand( vUv );",
            "float depth = readDepth( vUv );",

            "float tt = clamp( depth, aoClamp, 1.0 );",

            "float w = ( 1.0 / width )  / tt + ( noise.x * ( 1.0 - noise.x ) );",
            "float h = ( 1.0 / height ) / tt + ( noise.y * ( 1.0 - noise.y ) );",

            "float pw;",
            "float ph;",

            "float ao;",

            "float dz = 1.0 / float( samples );",
            "float z = 1.0 - dz / 2.0;",
            "float l = 0.0;",

            "for ( int i = 0; i <= samples; i ++ ) {",

            "float r = sqrt( 1.0 - z );",

            "pw = cos( l ) * r;",
            "ph = sin( l ) * r;",
            "ao += calcAO( depth, pw * w, ph * h );",
            "z = z - dz;",
            "l = l + DL;",

            "}",

            "ao /= float( samples );",
            "ao = 1.0 - ao;",

            "if ( fogEnabled ) {",

            "ao = mix( ao, 1.0, doFog() );",

            "}",

            "vec3 color = texture2D( tDiffuse, vUv ).rgb;",

            "vec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );",
            "float lum = dot( color.rgb, lumcoeff );",
            "vec3 luminance = vec3( lum );",

            "vec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );", // mix( color * ao, white, luminance )

            "if ( onlyAO ) {",

            "final = onlyAOColor * vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );", // ambient occlusion only

            "}",

            "gl_FragColor = vec4( final, 1.0 );",

            "}"

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Colorify shader
     ------------------------------------------------------------------------- */

    'colorify': {

        uniforms: {

            tDiffuse: { type: "t", value: null },
            color:    { type: "c", value: new THREE.Color( 0xffffff ) }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform vec3 color;",
            "uniform sampler2D tDiffuse;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 texel = texture2D( tDiffuse, vUv );",

            "vec3 luma = vec3( 0.299, 0.587, 0.114 );",
            "float v = dot( texel.xyz, luma );",

            "gl_FragColor = vec4( v * color, texel.w );",

            "}"

        ].join("\n")

    },

    /* -------------------------------------------------------------------------
     //	Unpack RGBA depth shader
     //	- show RGBA encoded depth as monochrome color
     ------------------------------------------------------------------------- */

    'unpackDepthRGBA': {

        uniforms: {

            tDiffuse: { type: "t", value: null },
            opacity:  { type: "f", value: 1.0 }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "uniform float opacity;",

            "uniform sampler2D tDiffuse;",

            "varying vec2 vUv;",

            // RGBA depth

            "float unpackDepth( const in vec4 rgba_depth ) {",

            "const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );",
            "float depth = dot( rgba_depth, bit_shift );",
            "return depth;",

            "}",

            "void main() {",

            "float depth = 1.0 - unpackDepth( texture2D( tDiffuse, vUv ) );",
            "gl_FragColor = opacity * vec4( vec3( depth ), 1.0 );",

            "}"

        ].join("\n")

    },

    // METHODS

    buildKernel: function( sigma ) {

        // We lop off the sqrt(2 * pi) * sigma term, since we're going to normalize anyway.

        function gauss( x, sigma ) {

            return Math.exp( - ( x * x ) / ( 2.0 * sigma * sigma ) );

        }

        var i, values, sum, halfWidth, kMaxKernelSize = 25, kernelSize = 2 * Math.ceil( sigma * 3.0 ) + 1;

        if ( kernelSize > kMaxKernelSize ) kernelSize = kMaxKernelSize;
        halfWidth = ( kernelSize - 1 ) * 0.5;

        values = new Array( kernelSize );
        sum = 0.0;
        for ( i = 0; i < kernelSize; ++i ) {

            values[ i ] = gauss( i - halfWidth, sigma );
            sum += values[ i ];

        }

        // normalize the kernel

        for ( i = 0; i < kernelSize; ++i ) values[ i ] /= sum;

        return values;

    }

};

/**
 * @author alteredq / http://alteredqualia.com/
 */
/*
 THREE.EffectComposer = function ( renderer, renderTarget ) {

 this.renderer = renderer;

 this.renderTarget1 = renderTarget;

 if ( this.renderTarget1 === undefined ) {

 var width = window.innerWidth || 1;
 var height = window.innerHeight || 1;

 this.renderTargetParameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };
 this.renderTarget1 = new THREE.WebGLRenderTarget( width, height, this.renderTargetParameters );

 }

 this.renderTarget2 = this.renderTarget1.clone();

 this.writeBuffer = this.renderTarget1;
 this.readBuffer = this.renderTarget2;

 this.passes = [];

 this.copyPass = new THREE.ShaderPass( THREE.ShaderExtras[ "screen" ] );

 };

 THREE.EffectComposer.prototype = {

 swapBuffers: function() {

 var tmp = this.readBuffer;
 this.readBuffer = this.writeBuffer;
 this.writeBuffer = tmp;

 },

 addPass: function ( pass ) {

 this.passes.push( pass );

 },

 render: function ( delta ) {

 this.writeBuffer = this.renderTarget1;
 this.readBuffer = this.renderTarget2;

 var maskActive = false;

 var pass, i, il = this.passes.length;

 for ( i = 0; i < il; i ++ ) {

 pass = this.passes[ i ];

 if ( !pass.enabled ) continue;

 pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

 if ( pass.needsSwap ) {

 if ( maskActive ) {

 var context = this.renderer.context;

 context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

 this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

 context.stencilFunc( context.EQUAL, 1, 0xffffffff );

 }

 this.swapBuffers();

 }

 if ( pass instanceof THREE.MaskPass ) {

 maskActive = true;

 } else if ( pass instanceof THREE.ClearMaskPass ) {

 maskActive = false;

 }

 }

 },

 reset: function ( renderTarget ) {

 this.renderTarget1 = renderTarget;

 if ( this.renderTarget1 === undefined ) {

 this.renderTarget1 = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, this.renderTargetParameters );

 }

 this.renderTarget2 = this.renderTarget1.clone();

 this.writeBuffer = this.renderTarget1;
 this.readBuffer = this.renderTarget2;

 THREE.EffectComposer.quad.scale.set( window.innerWidth, window.innerHeight, 1 );

 THREE.EffectComposer.camera.left = window.innerWidth / - 2;
 THREE.EffectComposer.camera.right = window.innerWidth / 2;
 THREE.EffectComposer.camera.top = window.innerHeight / 2;
 THREE.EffectComposer.camera.bottom = window.innerHeight / - 2;

 THREE.EffectComposer.camera.updateProjectionMatrix();

 }

 };

 // shared ortho camera

 THREE.EffectComposer.initWidth = window.innerWidth || 1;
 THREE.EffectComposer.initHeight = window.innerHeight || 1;

 THREE.EffectComposer.camera = new THREE.OrthographicCamera( THREE.EffectComposer.initWidth / - 2, THREE.EffectComposer.initWidth / 2, THREE.EffectComposer.initHeight / 2, THREE.EffectComposer.initHeight / - 2, -10000, 10000 );

 // shared fullscreen quad scene

 THREE.EffectComposer.geometry = new THREE.PlaneGeometry( 1, 1 );

 THREE.EffectComposer.quad = new THREE.Mesh( THREE.EffectComposer.geometry, null );
 THREE.EffectComposer.quad.position.z = -100;
 THREE.EffectComposer.quad.scale.set( THREE.EffectComposer.initWidth, THREE.EffectComposer.initHeight, 1 );

 THREE.EffectComposer.scene = new THREE.Scene();
 THREE.EffectComposer.scene.add( THREE.EffectComposer.quad );
 THREE.EffectComposer.scene.add( THREE.EffectComposer.camera );


 /**
 * @author alteredq / http://alteredqualia.com/
 */
/*
 THREE.MaskPass = function ( scene, camera ) {

 this.scene = scene;
 this.camera = camera;

 this.enabled = true;
 this.clear = true;
 this.needsSwap = false;

 this.inverse = false;

 };

 THREE.MaskPass.prototype = {

 render: function ( renderer, writeBuffer, readBuffer, delta ) {

 var context = renderer.context;

 // don't update color or depth

 context.colorMask( false, false, false, false );
 context.depthMask( false );

 // set up stencil

 var writeValue, clearValue;

 if ( this.inverse ) {

 writeValue = 0;
 clearValue = 1;

 } else {

 writeValue = 1;
 clearValue = 0;

 }

 context.enable( context.STENCIL_TEST );
 context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
 context.stencilFunc( context.ALWAYS, writeValue, 0xffffffff );
 context.clearStencil( clearValue );

 // draw into the stencil buffer

 renderer.render( this.scene, this.camera, readBuffer, this.clear );
 renderer.render( this.scene, this.camera, writeBuffer, this.clear );

 // re-enable update of color and depth

 context.colorMask( true, true, true, true );
 context.depthMask( true );

 // only render where stencil is set to 1

 context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
 context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

 }

 };


 THREE.ClearMaskPass = function () {

 this.enabled = true;

 };

 THREE.ClearMaskPass.prototype = {

 render: function ( renderer, writeBuffer, readBuffer, delta ) {

 var context = renderer.context;

 context.disable( context.STENCIL_TEST );

 }

 };


 /**
 * @author alteredq / http://alteredqualia.com/
 */
/*
 THREE.RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

 this.scene = scene;
 this.camera = camera;

 this.overrideMaterial = overrideMaterial;

 this.clearColor = clearColor;
 this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 1;

 this.oldClearColor = new THREE.Color();
 this.oldClearAlpha = 1;

 this.enabled = true;
 this.clear = true;
 this.needsSwap = false;

 };

 THREE.RenderPass.prototype = {

 render: function ( renderer, writeBuffer, readBuffer, delta ) {

 this.scene.overrideMaterial = this.overrideMaterial;

 if ( this.clearColor ) {

 this.oldClearColor.copy( renderer.getClearColor() );
 this.oldClearAlpha = renderer.getClearAlpha();

 renderer.setClearColor( this.clearColor, this.clearAlpha );

 }

 renderer.render( this.scene, this.camera, readBuffer, this.clear );

 if ( this.clearColor ) {

 renderer.setClearColor( this.oldClearColor, this.oldClearAlpha );

 }

 this.scene.overrideMaterial = null;

 }

 };


 /**
 * @author alteredq / http://alteredqualia.com/
 */
/*
 THREE.ShaderPass = function ( shader, textureID ) {

 this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

 this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

 this.material = new THREE.ShaderMaterial( {

 uniforms: this.uniforms,
 vertexShader: shader.vertexShader,
 fragmentShader: shader.fragmentShader

 } );

 this.renderToScreen = false;

 this.enabled = true;
 this.needsSwap = true;
 this.clear = false;

 };

 THREE.ShaderPass.prototype = {

 render: function ( renderer, writeBuffer, readBuffer, delta ) {

 if ( this.uniforms[ this.textureID ] ) {

 this.uniforms[ this.textureID ].value = readBuffer;

 }

 THREE.EffectComposer.quad.material = this.material;

 if ( this.renderToScreen ) {

 renderer.render( THREE.EffectComposer.scene, THREE.EffectComposer.camera );

 } else {

 renderer.render( THREE.EffectComposer.scene, THREE.EffectComposer.camera, writeBuffer, this.clear );

 }

 }

 };


 /**
 * @author alteredq / http://alteredqualia.com/
 */
/*
 THREE.BloomPass = function ( strength, kernelSize, sigma, resolution ) {

 strength = ( strength !== undefined ) ? strength : 1;
 kernelSize = ( kernelSize !== undefined ) ? kernelSize : 25;
 sigma = ( sigma !== undefined ) ? sigma : 4.0;
 resolution = ( resolution !== undefined ) ? resolution : 256;

 // render targets

 var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };

 this.renderTargetX = new THREE.WebGLRenderTarget( resolution, resolution, pars );
 this.renderTargetY = new THREE.WebGLRenderTarget( resolution, resolution, pars );

 // screen material

 var screenShader = THREE.ShaderExtras[ "screen" ];

 this.screenUniforms = THREE.UniformsUtils.clone( screenShader.uniforms );

 this.screenUniforms[ "opacity" ].value = strength;

 this.materialScreen = new THREE.ShaderMaterial( {

 uniforms: this.screenUniforms,
 vertexShader: screenShader.vertexShader,
 fragmentShader: screenShader.fragmentShader,
 blending: THREE.AdditiveBlending,
 transparent: true

 } );

 // convolution material

 var convolutionShader = THREE.ShaderExtras[ "convolution" ];

 this.convolutionUniforms = THREE.UniformsUtils.clone( convolutionShader.uniforms );

 this.convolutionUniforms[ "uImageIncrement" ].value = THREE.BloomPass.blurx;
 this.convolutionUniforms[ "cKernel" ].value = THREE.ShaderExtras.buildKernel( sigma );

 this.materialConvolution = new THREE.ShaderMaterial( {

 uniforms: this.convolutionUniforms,
 vertexShader:   "#define KERNEL_SIZE " + kernelSize + ".0\n" + convolutionShader.vertexShader,
 fragmentShader: "#define KERNEL_SIZE " + kernelSize + "\n"   + convolutionShader.fragmentShader

 } );

 this.enabled = true;
 this.needsSwap = false;
 this.clear = false;

 };

 THREE.BloomPass.prototype = {

 render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

 if ( maskActive ) renderer.context.disable( renderer.context.STENCIL_TEST );

 // Render quad with blured scene into texture (convolution pass 1)

 THREE.EffectComposer.quad.material = this.materialConvolution;

 this.convolutionUniforms[ "tDiffuse" ].value = readBuffer;
 this.convolutionUniforms[ "uImageIncrement" ].value = THREE.BloomPass.blurX;

 renderer.render( THREE.EffectComposer.scene, THREE.EffectComposer.camera, this.renderTargetX, true );


 // Render quad with blured scene into texture (convolution pass 2)

 this.convolutionUniforms[ "tDiffuse" ].value = this.renderTargetX;
 this.convolutionUniforms[ "uImageIncrement" ].value = THREE.BloomPass.blurY;

 renderer.render( THREE.EffectComposer.scene, THREE.EffectComposer.camera, this.renderTargetY, true );

 // Render original scene with superimposed blur to texture

 THREE.EffectComposer.quad.material = this.materialScreen;

 this.screenUniforms[ "tDiffuse" ].value = this.renderTargetY;

 if ( maskActive ) renderer.context.enable( renderer.context.STENCIL_TEST );

 renderer.render( THREE.EffectComposer.scene, THREE.EffectComposer.camera, readBuffer, this.clear );

 }

 };

 THREE.BloomPass.blurX = new THREE.Vector2( 0.001953125, 0.0 );
 THREE.BloomPass.blurY = new THREE.Vector2( 0.0, 0.001953125 );
 */

function GCodeModel() {
    this.codes = [];
};

GCodeModel.prototype.toString = function() {
    var self = this,
        output = "";
    self.codes.forEach(function(code) {
        output += code.toString() + "\n";
    });
    return output;
};

function GCode() {
    this.words = [];
    this.comments = [];
    // this.lineNumbers = [];
    this.index = 0;
};

GCode.prototype.toString = function() {
    var self = this,
        output = "";

    if(self.comments.length > 0) {
        output = self.comments.join(' ') + "\n";
    }

    self.words.forEach(function(word) {
        output += word.toString() + "\n";
    });

    return output;
};

function GWord(letter, value, raw) {
    this.letter = letter;
    this.value = value;
    this.raw = raw;
};

GWord.prototype.toString = function() {
    return this.letter + ":" + this.value + " (" + this.raw + ")";
};


/*
 Based on https://github.com/grbl/grbl/blob/edge/gcode.c
 */

function GCodeParser() {
    this.model = new GCodeModel();
}

GCodeParser.prototype.parseComments = function(line) {
    var self = this,
        comments = [];

    function addComments(matches) {
        if( matches ) {
            matches.forEach( function(comment) {
                comments.push(comment);
            });
        }
    }

    // Full line parenthesis style comments
    addComments(line.match(/\((.*)\)$/g, ''));

    // Inline parenthesis style comments
    addComments(line.match(/\((.*?)\)/g, ''));

    // Semicolon style comments
    addComments(line.match(/;(.*$)/g, ''));

    return comments;
}

// Parses the next statement and leaves the counter on the first character following
// the statement. Returns 1 if there was a statements, 0 if end of string was reached
// or there was an error (check state.status_code).
GCodeParser.prototype.parseWord = function(word)
{
    if (!word.length) {
        throw new Error('Bad word format: "' + word + '"');
    }

    var letter = word[0].toUpperCase(),
        value;

    if((letter < 'A') || (letter > 'Z')) {
        throw new Error('Unexpected command letter: ' + letter + ' from word: ' + word);
    }

    value = word.slice(1);
    // value = parseFloat(word.slice(1));
    // if (isNaN(value)) {
    //   throw new Error('Bad number format: ' + value);
    // }

    return new GWord(letter, value, word);
};

GCodeParser.prototype.parseLine = function(line) {

    var self = this,
        words,
        i = 0,
        l = 0,
        pLine = new GCode(),
        pWord;

    pLine.comments = self.parseComments(line);
    pLine.comments.forEach( function(comment) {
        // console.log("Removing comment: " +  comment);
        line = line.replace(comment, '');
    });

    words = line.trim().split(' ');
    l = words.length;

    for ( ; i < l; i++) {

        if(!words[i] || words[i].length <= 0) {
            // console.log('skipping blank word');
            continue;
        }

        // console.log('parsing word: "' + words[i] + '"');
        try {
            pWord = this.parseWord(words[i]);
            pLine.words.push(pWord);
        }
        catch(e) {
            console.log(e.message);
        }

        // var message = words[i] + " code: " + pWord.letter + " val: " + pWord.value + " group: ";
        // console.log(message);
    }
    return pLine;
};

GCodeParser.prototype.parse = function(gcode) {
    var lines = gcode.split('\n'),
        i = 0,
        n = 0,
        l = lines.length,
        self = this,
        lineCode,
        current = new GCode();
    for ( ; i < l; i++) {
        // self.model.codes.push(self.parseLine(lines[i]));

        lineCode = self.parseLine(lines[i]);
        // Trying to auto-group words across multiple lines and split single lines
        lineCode.words.forEach(function(word) {
            switch(word.letter) {
                // Detect new code group, add current group to model & start a new group
                case 'G': case 'M':
                if(current.words.length > 0) {
                    self.model.codes.push(current);
                    current = new GCode();
                    current.index = ++n;
                }
                break;
            }
            current.words.push(word);
        });
    }
    self.model.codes.push(current);
    return self.model;
};

// var gp = new GCodeParser();
// var gm = gp.parse('G1 X79 Y84.9665 Z0.25 F900.0 E5.628');
// console.log(gm.toString());



















































// From Original GCode Viewer code

/**
 * Parses a string of gcode instructions, and invokes handlers for
 * each type of command.
 *
 * Special handler:
 *   'default': Called if no other handler matches.
 */
function OldGCodeParser(handlers) {
    this.handlers = handlers || {};
}

OldGCodeParser.prototype.parseLine = function(text) {
    text = text.replace(/[;(].*$/, '').trim(); // Remove comments
    if (text) {
        var tokens = text.split(' ');
        if (tokens) {
            var cmd = tokens[0];
            var args = {
                'cmd': cmd
            };
            tokens.splice(1).forEach(function(token) {
                var key = token[0].toLowerCase(),
                    value = parseFloat(token.substring(1));
                args[key] = value;
            });
            var handler = this.handlers[cmd] || this.handlers['default'];
            if (handler) {
                return handler(args, text);
            }
        }
    }
};

OldGCodeParser.prototype.parse = function(gcode) {
    var lines = gcode.split('\n'),
        i = 0,
        l = lines.length;
    for ( ; i < l; i++) {
        if (this.parseLine(lines[i]) === false) {
            break;
        }
    }
};


/*
 Based on https://github.com/grbl/grbl/blob/edge/gcode.c
 */

var settings = {
    default_feed_rate: undefined,
    steps_per_mm: new Array(3),
    default_seek_rate: undefined
}

var sys = {
    opt_stop: undefined,
    coord_select: undefined
}

// TODO: add more axes
var X_AXIS = 0,
    Y_AXIS = 1,
    Z_AXIS = 2;

function GCodeInterpreter() {
    this.gc = new GCodeInterpreterState();
}

function GCodeInterpreterState() {
    this.status_code;              // Parser status for current block
    this.motion_mode;              // {G0, G1, G2, G3, G80}
    this.inverse_feed_rate_mode;   // {G93, G94}
    this.inches_mode = false;      // 0 = millimeter mode, 1 = inches mode {G20, G21}
    this.absolute_mode = true;     // 0 = relative motion, 1 = absolute motion {G90, G91}
    this.program_flow;             // {M0, M1, M2, M30}
    this.spindle_direction;        // 1 = CW, -1 = CCW, 0 = Stop {M3, M4, M5}
    this.feed_rate = settings.default_feed_rate; // Millimeters/second
    this.seek_rate = settings.default_seek_rate; // Millimeters/second
    this.position = new Array(3);  // Where the interpreter considers the tool to be at this point in the code
    this.tool;
    this.spindle_speed;            // RPM/100
    this.plane_axis_0;
    this.plane_axis_1;
    this.plane_axis_2;             // The axes of the selected plane

    this.selectPlane(X_AXIS, Y_AXIS, Z_AXIS);
}

GCodeInterpreterState.prototype.selectPlane = function(axis_0, axis_1, axis_2) {
    this.plane_axis_0 = axis_0;
    this.plane_axis_1 = axis_1;
    this.plane_axis_2 = axis_2;
}


// Define modal group internal numbers for checking multiple command violations and tracking the
// type of command that is called in the block. A modal group is a group of g-code commands that are
// mutually exclusive, or cannot exist on the same line, because they each toggle a state or execute
// a unique motion. These are defined in the NIST RS274-NGC v3 g-code standard, available online,
// and are similar/identical to other g-code interpreters by manufacturers (Haas,Fanuc,Mazak,etc).
var MODAL_GROUP_NONE = 0,
    MODAL_GROUP_0 = 1, // [G4,G10,G28,G30,G53,G92,G92.1] Non-modal ( [G92.2,G92.3] not supported by grbl )
    MODAL_GROUP_1 = 2, // [G0,G1,G2,G3,G80] Motion ( [G38.2,G81,G82,G83,G84,G85,G86,G87,G88,G89] not supported by grbl )
    MODAL_GROUP_2 = 3, // [G17,G18,G19] Plane selection
    MODAL_GROUP_3 = 4, // [G90,G91] Distance mode
    MODAL_GROUP_4 = 5, // [M0,M1,M2,M30] Stopping ( [M60] not supported by grbl )
    MODAL_GROUP_5 = 6, // [G93,G94] Feed rate mode
    MODAL_GROUP_6 = 7, // [G20,G21] Units ( [M6] not supported by grbl )
    MODAL_GROUP_7 = 8, // [M3,M4,M5] Spindle turning, ( [G40,G41,G42] Cutter radius compensation: not supported by grbl )
    MODAL_GROUP_8 = 9, // (not supported by grbl) [G43,G49] Tool length offset, [M7,M8,M9] Coolant (special case: M7 & M8 may be active at the same time)
    MODAL_GROUP_9 = 10,  // (not supported by grbl) [M48,M49] Enable/disable feed and speed override switches
    MODAL_GROUP_10 = 11, // (not supported by grbl) [G98,G99] Return mode in canned cycles
    MODAL_GROUP_12 = 12, // [G54,G55,G56,G57,G58,G59] Coordinate system selection ( [G59.1,G59.2,G59.3] not supported by grbl )
    MODAL_GROUP_13 = 13; // (not supported by grbl) [G61,G61.1,G64] path control mode

// Define command actions for within execution-type modal groups (motion, stopping, non-modal). Used
// internally by the parser to know which command to execute.
var MOTION_MODE_SEEK = 0, // G0
    MOTION_MODE_LINEAR = 1, // G1
    MOTION_MODE_CW_ARC = 2,  // G2
    MOTION_MODE_CCW_ARC = 3,  // G3
    MOTION_MODE_CANCEL = 4; // G80

var PROGRAM_FLOW_RUNNING = 0,
    PROGRAM_FLOW_PAUSED = 1, // M0, M1
    PROGRAM_FLOW_COMPLETED = 2; // M2, M30

var NON_MODAL_NONE = 0,
    NON_MODAL_DWELL = 1, // G4
    NON_MODAL_SET_COORDINATE_DATA = 2, // G10
    NON_MODAL_GO_HOME = 3, // G28,G30
    NON_MODAL_SET_COORDINATE_OFFSET = 4, // G92
    NON_MODAL_RESET_COORDINATE_OFFSET = 5; //G92.1

var STATUS_UNSUPPORTED_STATEMENT = "Unsupported statement.";


GCodeInterpreter.prototype.interpretGCode = function(code) {

    var group_number = MODAL_GROUP_NONE,
        int_value,
        non_modal_action = NON_MODAL_NONE, // Tracks the actions of modal group 0 (non-modal)
        absolute_override = false, // true(1) = absolute motion for this block only {G53}
        gc = this.gc;

    code.words.forEach(function(word) {

        int_value = parseInt(word.value, 10);
        switch(word.letter) {
            case 'G':
                // Set modal group values
                switch(int_value) {

                    // group 0: non-modal gcodes
                    case 4: case 10: case 28: case 30: case 53: case 92:
                    group_number = MODAL_GROUP_0; break;

                    // group 1: motion
                    // codes supported by grbl:
                    case 0: case 1: case 2: case 3: case 80:
                    // codes not supported by grbl:
                    case 38: case 81: case 82: case 83: case 84:
                    case 85: case 86: case 87: case 88: case 89:
                    group_number = MODAL_GROUP_1; break;

                    // group 2: plane selection
                    case 17: case 18: case 19: group_number = MODAL_GROUP_2; break;

                    // group 3: distance mode
                    case 90: case 91: group_number = MODAL_GROUP_3; break;

                    // group 5: feed rate mode
                    case 93: case 94: group_number = MODAL_GROUP_5; break;

                    // group 6: units
                    case 20: case 21: group_number = MODAL_GROUP_6; break;

                    // group 7: cutter radius compensation (not supported by grbl)
                    case 40: case 41: case 42: group_number = MODAL_GROUP_7; break;

                    // group 8: tool length offset (not supported by grbl)
                    case 43: case 49: group_number = MODAL_GROUP_8; break;

                    // group 10: return mode in canned cycles (not supported by grbl)
                    case 98: case 99: group_number = MODAL_GROUP_10; break;

                    // group 12: coordinate system selection
                    case 54: case 55: case 56: case 57: case 58: case 59:
                    group_number = MODAL_GROUP_12; break;

                    // group 13: path control mode (not supported by grbl)
                    case 61: case 64: group_number = MODAL_GROUP_13; break;
                }
                // Set 'G' commands
                switch(int_value) {
                    case 0:
                        gc.motion_mode = MOTION_MODE_SEEK;
                        console.log("MOTION_MODE_SEEK");
                        break;
                    case 1:
                        gc.motion_mode = MOTION_MODE_LINEAR;
                        console.log("MOTION_MODE_LINEAR");
                        break;
                    case 2:
                        gc.motion_mode = MOTION_MODE_CW_ARC;
                        console.log("MOTION_MODE_CW_ARC");
                        break;
                    case 3:
                        gc.motion_mode = MOTION_MODE_CCW_ARC;
                        console.log("MOTION_MODE_CCW_ARC");
                        break;
                    case 4:
                        non_modal_action = NON_MODAL_DWELL;
                        console.log("NON_MODAL_DWELL");
                        break;
                    case 10:
                        non_modal_action = NON_MODAL_SET_COORDINATE_DATA;
                        console.log("NON_MODAL_SET_COORDINATE_DATA");
                        break;
                    case 17:
                        gc.selectPlane(X_AXIS, Y_AXIS, Z_AXIS);
                        console.log("PLANE: XYZ");
                        break;
                    case 18:
                        gc.selectPlane(X_AXIS, Z_AXIS, Y_AXIS);
                        console.log("PLANE: XZY");
                        break;
                    case 19:
                        gc.selectPlane(Y_AXIS, Z_AXIS, X_AXIS);
                        console.log("PLANE: YZX");
                        break;
                    case 20:
                        gc.inches_mode = true;
                        console.log("UNITS: inches");
                        break;
                    case 21:
                        gc.inches_mode = false;
                        console.log("UNITS: millimeters");
                        break;
                    case 28: case 30:
                    non_modal_action = NON_MODAL_GO_HOME;
                    console.log("NON_MODAL_GO_HOME");
                    break;
                    case 53:
                        absolute_override = true;
                        console.log("absolute_override ON");
                        break;
                    case 54: case 55: case 56: case 57: case 58: case 59:
                    int_value -= 54; // Compute coordinate system row index (0=G54,1=G55,...)
                    if (int_value < N_COORDINATE_SYSTEM) {
                        sys.coord_select = int_value;
                    } else {
                        throw new Error(STATUS_UNSUPPORTED_STATEMENT);
                    }
                    console.log("coordinate system selection");
                    break;
                    case 80:
                        gc.motion_mode = MOTION_MODE_CANCEL;
                        console.log("MOTION_MODE_CANCEL");
                        break;
                    case 90:
                        gc.absolute_mode = true;
                        console.log("absolute_mode ON");
                        break;
                    case 91:
                        gc.absolute_mode = false;
                        console.log("absolute_mode OFF");
                        break;
                    case 92:
                        int_value = parseInt(10*word.value); // Multiply by 10 to pick up G92.1
                        switch(int_value) {
                            case 920:
                                non_modal_action = NON_MODAL_SET_COORDINATE_OFFSET;
                                console.log("NON_MODAL_SET_COORDINATE_OFFSET");
                                break;
                            case 921:
                                non_modal_action = NON_MODAL_RESET_COORDINATE_OFFSET;
                                console.log("NON_MODAL_RESET_COORDINATE_OFFSET");
                                break;
                            default: throw new Error(STATUS_UNSUPPORTED_STATEMENT);
                        }
                        break;
                    case 93:
                        gc.inverse_feed_rate_mode = true;
                        console.log("inverse_feed_rate_mode ON");
                        break;
                    case 94:
                        gc.inverse_feed_rate_mode = false;
                        console.log("inverse_feed_rate_mode OFF");
                        break;
                    default: throw new Error(STATUS_UNSUPPORTED_STATEMENT);
                }
                break;
            case 'M':
                // Set modal group values
                switch(int_value) {

                    // group 4: Stopping
                    // codes supported by grbl:
                    case 0: case 1: case 2: case 30:
                    // codes not supported by grbl:
                    case 60:
                        group_number = MODAL_GROUP_4; break;

                    // group 6: units (not supported by grbl)
                    case 6: group_number = MODAL_GROUP_6; break;

                    // group 7: Spindle turning
                    case 3: case 4: case 5: group_number = MODAL_GROUP_7; break;

                    // group 8: Coolant (special case: M7 & M8 may be active at the same time) (not supported by grbl)
                    case 7: case 8: case 9: group_number = MODAL_GROUP_8; break;

                    // group 9: Enable/disable feed and speed override switches (not supported by grbl)
                    case 48: case 49: group_number = MODAL_GROUP_9; break;
                }
            //   // Set 'M' commands
            //   switch(int_value) {
            //     case 0: gc.program_flow = PROGRAM_FLOW_PAUSED; break; // Program pause
            //     case 1: // Program pause with optional stop on
            //       // if (sys.opt_stop) { // TODO: Add system variable for optional stop.
            //       gc.program_flow = PROGRAM_FLOW_PAUSED; break;
            //       // }
            //     case 2: case 30: gc.program_flow = PROGRAM_FLOW_COMPLETED; break; // Program end and reset
            //     case 3: gc.spindle_direction = 1; break;
            //     case 4: gc.spindle_direction = -1; break;
            //     case 5: gc.spindle_direction = 0; break;
            //     default: throw new Error(STATUS_UNSUPPORTED_STATEMENT);
            //   }
            //   break;
        }
        // Check for modal group multiple command violations in the current block
        // if (group_number) {
        //   if ( bit_istrue(modal_group_words,bit(group_number)) ) {
        //     throw new Error(STATUS_MODAL_GROUP_VIOLATION);
        //   } else {
        //     bit_true(modal_group_words,bit(group_number));
        //   }
        //   group_number = MODAL_GROUP_NONE; // Reset for next command.
        // }


        var message = word + " code: " + word.letter + " val: " + word.value + " group: ";
        switch(group_number) {
            case MODAL_GROUP_NONE: message += "no group"; break;
            case MODAL_GROUP_0:    message += "non modal"; break;
            case MODAL_GROUP_1:    message += "motion"; break;
            case MODAL_GROUP_2:    message += "plane selection"; break;
            case MODAL_GROUP_3:    message += "distance mode"; break;
            case MODAL_GROUP_4:    message += "stopping"; break;
            case MODAL_GROUP_5:    message += "feed rate mode"; break;
            case MODAL_GROUP_6:    message += "units"; break;
            case MODAL_GROUP_7:    message += (word.letter == "G" ? "cutter radius compensation" : "spindle turning"); break;
            case MODAL_GROUP_8:    message += (word.letter == "G" ? "tool length offset" : "coolant"); break;
            case MODAL_GROUP_9:    message += "enable/disable feed and speed override switches"; break;
            case MODAL_GROUP_10:   message += "return mode in canned cycles"; break;
            case MODAL_GROUP_12:   message += "coordinate system selection"; break;
            case MODAL_GROUP_13:   message += "path control mode"; break;
        }

        console.log(message);

    });
};

GCodeInterpreter.prototype.interpret = function(gcodeModel) {

    var self = this;

    self.model = gcodeModel;

    self.model.codes.forEach(function(code) {
        self.interpretGCode(code);
    });

};



function FileIO() { }

FileIO.error = function(msg) {
    alert(msg);
}

FileIO.loadPath = function(path, callback) {
    var self = this;
    $.get(path, null, callback, 'text')
        .error(function() { self.error('Unable to load gcode.') });
}

FileIO.load = function(files, callback) {
    if (files.length) {
        var i = 0, l = files.length;
        for ( ; i < l; i++) {
            FileIO.load(files[i], callback);
        }
    }
    else {
        var reader = new FileReader();
        reader.onload = function() {
            callback(reader.result);
        };
        reader.readAsText(files);
    }
}

///////////////////////////////////////////////////////////////////////////////


function GCodeViewModel(code) {
    this.code = code;
    this.vertexIndex = 0;
    this.vertexLength = 0;
}

function GCodeRenderer() {

    var self = this;

    this.viewModels = [];
    this.index = 0;
    this.baseObject = new THREE.Object3D();

    this.motionGeo = new THREE.Geometry();
    this.motionMat = new THREE.LineBasicMaterial({
        opacity: 0.2,
        transparent: true,
        linewidth: 1,
        vertexColors: THREE.VertexColors });

    this.motionIncGeo = new THREE.Geometry();
    this.motionIncMat = new THREE.LineBasicMaterial({
        opacity: 0.2,
        transparent: true,
        linewidth: 1,
        vertexColors: THREE.VertexColors });

    this.feedAllGeo = new THREE.Geometry();

    this.feedGeo = new THREE.Geometry();
    this.feedMat = new THREE.LineBasicMaterial({
        opacity: 0.8,
        transparent: true,
        linewidth: 2,
        vertexColors: THREE.VertexColors });

    this.feedIncGeo = new THREE.Geometry();
    this.feedIncMat = new THREE.LineBasicMaterial({
        opacity: 0.2,
        transparent: true,
        linewidth: 2,
        vertexColors: THREE.VertexColors });

    this.lastLine = {x:0, y:0, z:0, e:0, f:0};
    this.relative = false;

    // this.renderer = renderer;
    this.bounds = {
        min: { x: 100000, y: 100000, z: 100000 },
        max: { x:-100000, y:-100000, z:-100000 }
    };

    this.geometryHandlers = {

        G0: function(viewModel) {
            // console.log("in g0 renderer handler " + code)

            var newLine = {};

            viewModel.code.words.forEach(function(word) {
                // TODO: handle non-numerical values
                switch(word.letter) {
                    case 'X': case 'Y': case 'Z':  case 'E':  case 'F':
                    var p = word.letter.toLowerCase();
                    newLine[p] = self.absolute(self.lastLine[p], parseFloat(word.value));
                    break;
                }
            });

            ['x','y','z','e','f'].forEach(function(prop) {
                if (newLine[prop] === undefined) {
                    newLine[prop] = self.lastLine[prop];
                }
            });

            viewModel.vertexIndex = self.motionGeo.vertices.length;

            // var color =  new THREE.Color(GCodeRenderer.motionColors[viewModel.code.index%GCodeRenderer.motionColors.length]);
            var color =  GCodeRenderer.motionColors[viewModel.code.index%GCodeRenderer.motionColors.length];
            self.motionGeo.vertices.push(new THREE.Vector3(self.lastLine.x, self.lastLine.y, self.lastLine.z));
            self.motionGeo.vertices.push(new THREE.Vector3(newLine.x, newLine.y, newLine.z));

            self.motionGeo.colors.push(color);
            self.motionGeo.colors.push(color);

            viewModel.vertexLength = self.motionGeo.vertices.length - viewModel.vertexIndex;

            self.lastLine = newLine;

            return self.motionGeo;
        },
        G1: function(viewModel) {
            // console.log("in g1 renderer handler " + viewModel.code)

            var newLine = {};

            viewModel.code.words.forEach(function(word) {
                // TODO: handle non-numerical values
                switch(word.letter) {
                    case 'X': case 'Y': case 'Z':  case 'E':  case 'F':
                    var p = word.letter.toLowerCase();
                    newLine[p] = self.absolute(self.lastLine[p], parseFloat(word.value));
                    break;
                }
            });

            ['x','y','z','e','f'].forEach(function(prop) {
                if (newLine[prop] === undefined) {
                    newLine[prop] = self.lastLine[prop];
                }
            });

            // var color =  new THREE.Color(GCodeRenderer.feedColors[viewModel.code.index%GCodeRenderer.feedColors.length]);
            var color =  GCodeRenderer.feedColors[viewModel.code.index%GCodeRenderer.feedColors.length];
            var p1 = new THREE.Vector3(self.lastLine.x, self.lastLine.y, self.lastLine.z);
            var p2 = new THREE.Vector3(newLine.x, newLine.y, newLine.z);

            viewModel.vertexIndex = self.feedAllGeo.vertices.length;

            if( viewModel.code.index <= self.index ) {
                self.feedGeo.vertices.push(p1);
                self.feedGeo.vertices.push(p2);
                self.feedGeo.colors.push(color);
                self.feedGeo.colors.push(color);
            }
            else {
                self.feedIncGeo.colors.push(color);
                self.feedIncGeo.colors.push(color);
                self.feedIncGeo.vertices.push(p1);
                self.feedIncGeo.vertices.push(p2);
            }

            self.feedAllGeo.vertices.push(p1);
            self.feedAllGeo.vertices.push(p2);
            self.feedAllGeo.colors.push(color);
            self.feedAllGeo.colors.push(color);

            viewModel.vertexLength = self.feedAllGeo.vertices.length - viewModel.vertexIndex;

            self.lastLine = newLine;

            return self.feedGeo;
        },
        G2: function(viewModel) {
        }

    } // end geometryHandlers

    this.materialHandlers = {

        G0: function(viewModel) {
            return this.motionMat;
        },
        G1: function(viewModel) {
            return this.feedMat;
        },
        G2: function(viewModel) {
            return this.feedMat;
        }

    } // end materialHandlers

};

GCodeRenderer.motionColors = [ new THREE.Color(0xdddddd) ]
GCodeRenderer.feedColors = [
    // new THREE.Color(0xffcc66), // canteloupe
    new THREE.Color(0x66ccff), // sky
    new THREE.Color(0x22bb22), // honeydew
    // new THREE.Color(0xff70cf), // carnation
    new THREE.Color(0xcc66ff), // lavender
    new THREE.Color(0xfffe66), // banana
    new THREE.Color(0xff6666) // salmon
    // new THREE.Color(0x66ffcc), // spindrift
    // new THREE.Color(0x66ff66), // flora
]

GCodeRenderer.prototype.absolute = function(v1, v2) {
    return this.relative ? v1 + v2 : v2;
}

GCodeRenderer.prototype.render = function(model) {
    var self = this;
    self.model = model;

    self.model.codes.forEach(function(code) {
        self.renderGCode(code);
    });

    self.updateLines();

    // Center
    self.feedAllGeo.computeBoundingBox();
    self.bounds = self.feedAllGeo.boundingBox;

    self.center = new THREE.Vector3(
        self.bounds.min.x + ((self.bounds.max.x - self.bounds.min.x) / 2),
        self.bounds.min.y + ((self.bounds.max.y - self.bounds.min.y) / 2),
        self.bounds.min.z + ((self.bounds.max.z - self.bounds.min.z) / 2));

    var zScale = window.innerHeight / (self.bounds.max.z - self.bounds.min.z),
        yScale = window.innerWidth / (self.bounds.max.y - self.bounds.min.y),
        xScale = window.innerWidth / (self.bounds.max.x - self.bounds.min.x),

        scale = Math.min(zScale, Math.min(xScale, yScale));

    self.baseObject.position = self.center.multiplyScalar(-scale);
    self.baseObject.scale.multiplyScalar(scale);

    return self.baseObject;
};

GCodeRenderer.prototype.updateLines = function() {
    var self = this;

    while( self.baseObject.children.length > 0 ) {
        self.baseObject.remove(self.baseObject.children[0]);
    }

    var motionLine = new THREE.Line(this.motionGeo, this.motionMat, THREE.LinePieces);
    var feedLine = new THREE.Line(this.feedGeo, this.feedMat, THREE.LinePieces);
    var feedIncLine = new THREE.Line(this.feedIncGeo, this.feedIncMat, THREE.LinePieces);
    self.baseObject.add(motionLine);
    self.baseObject.add(feedLine);
    self.baseObject.add(feedIncLine);
};

/* returns THREE.Object3D */
GCodeRenderer.prototype.renderGCode = function(code) {
    var cmd = code.words[0].letter+code.words[0].value;
    var viewModel = new GCodeViewModel(code);

    var geometryHandler = this.geometryHandlers[cmd] || this.geometryHandlers['default'];
    if (geometryHandler) {
        geometryHandler(viewModel);
    }
    var materialHandler = this.materialHandlers[cmd] || this.materialHandlers['default'];
    if (materialHandler) {
        materialHandler(viewModel);
    }

    if(viewModel.vertexLength > 0) {
        this.viewModels.push(viewModel);
    }
};


GCodeRenderer.prototype.setIndex = function(index) {
    index = Math.floor(index);
    if( this.index == index ) { return; }
    if( index < 0 || index >= this.viewModels.length ) {
        if (index >= this.viewModels.length ){
            return "finish";
        }
        throw new Error("invalid index",index);
    }

    var vm = this.viewModels[index];

    this.feedGeo = new THREE.Geometry();

    var vertices = this.feedAllGeo.vertices.slice(0, vm.vertexIndex + vm.vertexLength);
    Array.prototype.push.apply( this.feedGeo.vertices, vertices );

    var colors = this.feedAllGeo.colors.slice(0, vm.vertexIndex + vm.vertexLength);
    Array.prototype.push.apply( this.feedGeo.colors, colors );


    this.index = index;
    this.updateLines();
};
/**
 * @author mrdoob / http://mrdoob.com/
 */

var Viewport = function ( editor,id ) {

    var signals = editor.signals;
    /*
     var container = new UI.Panel();
     container.setId( 'viewport' );
     container.setPosition();
     container.add( new Viewport.Info( editor ) );
     */
    var container = document.getElementById(id);
    container.dom = document.createElement( 'div' );
    container.dom.className = 'Panel';
    container.dom.style.height = container.offsetHeight + "px";

    var scene = editor.scene;
    var sceneHelpers = editor.sceneHelpers;
    //light

    var lights =  new aseLight();
    for (var i =0;i <= lights.length;i++){
        scene.add(lights[i]);
    }
    var objects = [];

    // helpers

    var grid = new asePlane(152,246,100,5,50);
    grid.name = "bed"
    sceneHelpers.add( grid );
    grid.position.set(0,0,0);
    //

    var camera = editor.camera;
    camera.position.set( 160, 120, 100 );
    camera.lookAt( new THREE.Vector3() );




    var selectionBox = new THREE.BoxHelper();
    selectionBox.material.depthTest = false;
    selectionBox.material.transparent = true;
    selectionBox.visible = false;
    selectionBox.material = aseMaterial.get('box');
    sceneHelpers.add( selectionBox );

    var transformControls = new THREE.TransformControls( camera, container.dom );
    transformControls.addEventListener( 'change', function () {

        var object = transformControls.object;

        if ( object !== undefined ) {

            if ( editor.helpers[ object.id ] !== undefined ) {

                editor.helpers[ object.id ].update();

            }

        }

        render();

    } );
    transformControls.addEventListener( 'mouseDown', function () {

        controls.enabled = false;

    } );
    transformControls.addEventListener( 'mouseUp', function () {

        signals.objectChanged.dispatch( transformControls.object );
        controls.enabled = true;

    } );

    sceneHelpers.add( transformControls );

    // fog

    var oldFogType = "None";
    var oldFogColor = 0xaaaaaa;
    var oldFogNear = 1;
    var oldFogFar = 5000;
    var oldFogDensity = 0.00025;

    // object picking

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    // events

    var getIntersects = function ( point, object ) {

        mouse.set( ( point.x * 2 ) - 1, - ( point.y * 2 ) + 1 );

        raycaster.setFromCamera( mouse, camera );

        if ( object instanceof Array ) {

            return raycaster.intersectObjects( object );

        }

        return raycaster.intersectObject( object );

    };

    var onDownPosition = new THREE.Vector2();
    var onUpPosition = new THREE.Vector2();
    var onDoubleClickPosition = new THREE.Vector2();

    var getMousePosition = function ( dom, x, y ) {

        var rect = dom.getBoundingClientRect();
        return [ ( x - rect.left ) / rect.width, ( y - rect.top ) / rect.height ];

    };

    var handleClick = function () {

        if ( onDownPosition.distanceTo( onUpPosition ) == 0 ) {

            var intersects = getIntersects( onUpPosition, objects );

            if ( intersects.length > 0 ) {

                var object = intersects[ 0 ].object;

                if ( object.userData.object !== undefined ) {

                    // helper

                    editor.select( object.userData.object );

                } else {

                    editor.select( object );

                }

            } else {

                editor.select( null );

            }

            render();

        }

    };

    var onMouseDown = function ( event ) {

        event.preventDefault();

        var array = getMousePosition( container.dom, event.clientX, event.clientY );
        onDownPosition.fromArray( array );

        document.addEventListener( 'mouseup', onMouseUp, false );

    };

    var onMouseUp = function ( event ) {

        var array = getMousePosition( container.dom, event.clientX, event.clientY );
        onUpPosition.fromArray( array );

        handleClick();

        document.removeEventListener( 'mouseup', onMouseUp, false );

    };

    var onTouchStart = function ( event ) {

        var touch = event.changedTouches[ 0 ];

        var array = getMousePosition( container.dom, touch.clientX, touch.clientY );
        onDownPosition.fromArray( array );

        document.addEventListener( 'touchend', onTouchEnd, false );

    };

    var onTouchEnd = function ( event ) {

        var touch = event.changedTouches[ 0 ];

        var array = getMousePosition( container.dom, touch.clientX, touch.clientY );
        onUpPosition.fromArray( array );

        handleClick();

        document.removeEventListener( 'touchend', onTouchEnd, false );

    };

    var onDoubleClick = function ( event ) {

        var array = getMousePosition( container.dom, event.clientX, event.clientY );
        onDoubleClickPosition.fromArray( array );

        var intersects = getIntersects( onDoubleClickPosition, objects );

        if ( intersects.length > 0 ) {

            var intersect = intersects[ 0 ];

            signals.objectFocused.dispatch( intersect.object );

        }

    };

    container.dom.addEventListener( 'mousedown', onMouseDown, false );
    container.dom.addEventListener( 'touchstart', onTouchStart, false );
    container.dom.addEventListener( 'dblclick', onDoubleClick, false );

    // controls need to be added *after* main logic,
    // otherwise controls.enabled doesn't work.

    var controls = new THREE.EditorControls( camera, container.dom );
    controls.center.fromArray( editor.config.getKey( 'camera/target' ) );
    controls.addEventListener( 'change', function () {

        transformControls.update();
        signals.cameraChanged.dispatch( camera );

    } );

    // signals

    signals.editorCleared.add( function () {

        controls.center.set( 0, 0, 0 );
        render();

    } );

    signals.themeChanged.add( function ( value ) {

        clearColor = 0xE1F1F2;
        renderer.setClearColor( clearColor );

        render();

    } );
    signals.saveObjects.add(function(){
        var saveObjects = {};
        var json,matrix;
        var objects = editor.scene.children[0].children;
        for (var i in objects) {
            if (objects[i].fileId !== undefined){
                json = objects[i].toJSON();
                matrix = json.object.matrix;
                if (objects[i].startOffset !== undefined){
                    matrix[3] = objects[i].startOffset[12];
                    matrix[7] = objects[i].startOffset[13];
                    matrix[11] = objects[i].startOffset[14];
                }
                saveObjects[objects[i].fileId] = matrix;
            }
        }
        editor.exportObjects(saveObjects);
    });
    signals.objectCenter.add(function(){
        if (editor.selected != undefined){
            var position = THREE.GeometryUtils.center( editor.selected.geometry );

            var box = new THREE.BoundingBoxHelper( editor.selected );
            box.update();
            editor.selected.position.set(position.x,position.y,editor.selected.position.z -= box.position.y - (box.box.max.y - box.box.min.y)/2);
            editor.selected.updateMatrix();
            transformControls.update();
            render();
        }
    });

    signals.objectMove.add(function(x,y,z){
        if (editor.selected != undefined){
            var position = THREE.GeometryUtils.center( editor.selected.geometry );
            var geometry = editor.selected.geometry;
            geometry.computeBoundingBox();
            geometry.computeBoundingSphere();
            var box = new THREE.BoundingBoxHelper( geometry );
            editor.selected.position.set(x,y,z + (box.object.boundingBox.max.z - box.object.boundingBox.min.z)/2);
            editor.selected.updateMatrix();
            transformControls.update();
            render();
        }
    });


    signals.objectRotate.add(function(x,y,z){
        if (editor.selected != undefined){
            editor.selected.rotation.set(x,y,z);
            editor.selected.updateMatrix();
            transformControls.update();
            render();
        }
    });


    signals.objectReset.add(function(){
        if (editor.selected != undefined){

            //console.log(editor.selected.startMatrix);
            //editor.selected.matrixWorldNeedsUpdate = true;
            editor.selected.matrix.set(editor.selected.startMatrix[0],editor.selected.startMatrix[1],editor.selected.startMatrix[2],editor.selected.startMatrix[3],
                editor.selected.startMatrix[4],editor.selected.startMatrix[5],editor.selected.startMatrix[6],editor.selected.startMatrix[7],
                editor.selected.startMatrix[8],editor.selected.startMatrix[9],editor.selected.startMatrix[10],editor.selected.startMatrix[11],
                editor.selected.startMatrix[12],editor.selected.startMatrix[13],editor.selected.startMatrix[14],editor.selected.startMatrix[15]);

            for (var i in editor.selected.startMatrix){

                // editor.selected.matrix.elements[i] = editor.selected.startMatrix[i];
                //console.log(i + " :: " + editor.selected.startMatrix[i],editor.selected.matrix.elements[i],editor.selected.matrix);
            }
            editor.selected.matrixAutoUpdate = false;
            editor.selected.updateMatrix();
            //transformControls.update();

            render();
        }
    });
    signals.onBed.add(function(){
        if (editor.selected != undefined){
            var box = new THREE.BoundingBoxHelper( editor.selected );
            box.update();
            var y = box.position.y;
            box.position.y = (box.box.max.y - box.box.min.y)/2;
            box.updateMatrix();
            editor.selected.position.z -= y - (box.box.max.y - box.box.min.y)/2;
            editor.selected.updateMatrix();
            selectionBox.update( editor.selected );
            transformControls.update();
            render();
        }
    });
    signals.transformModeChanged.add( function ( mode ) {

        transformControls.setMode( mode );

    } );

    signals.snapChanged.add( function ( dist ) {

        transformControls.setSnap( dist );

    } );

    signals.spaceChanged.add( function ( space ) {

        transformControls.setSpace( space );

    } );

    signals.rendererChanged.add( function ( type, antialias ) {

        container.dom.removeChild( renderer.domElement );

        renderer = createRenderer( type, antialias );
        renderer.setClearColor( clearColor );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( container.dom.offsetWidth, container.dom.offsetHeight );

        container.dom.appendChild( renderer.domElement );

        render();

    } );

    signals.sceneGraphChanged.add( function () {

        render();

    } );

    var saveTimeout;

    signals.cameraChanged.add( function () {
        /*
         if ( saveTimeout !== undefined ) {

         clearTimeout( saveTimeout );

         }

         saveTimeout = setTimeout( function () {

         editor.config.setKey(
         'camera/position', camera.position.toArray(),
         'camera/target', controls.center.toArray()
         );

         }, 1000 );
         */
        render();

    } );

    signals.objectSelected.add( function ( object ) {

        selectionBox.visible = false;
        transformControls.detach();

        if ( object !== null ) {

            if ( object.geometry !== undefined &&
                object instanceof THREE.Sprite === false ) {

                selectionBox.update( object );
                selectionBox.visible = true;

            }

            transformControls.attach( object );

        }

        render();

    } );

    signals.objectFocused.add( function ( object ) {

        controls.focus( object );

    } );

    signals.geometryChanged.add( function ( geometry ) {

        selectionBox.update( editor.selected );

        render();

    } );

    signals.objectAdded.add( function ( object ) {
        //object.rotation.x= -(Math.PI / 2);
        var materialsNeedUpdate = false;

        object.traverse( function ( child ) {

            if ( child instanceof THREE.Light ) materialsNeedUpdate = true;

            objects.push( child );

        } );

        if ( materialsNeedUpdate === true ) updateMaterials();

    } );

    signals.objectChanged.add( function ( object ) {

        transformControls.update();

        if ( object.geometry !== undefined ) {

            selectionBox.update( object );

        }

        if ( object instanceof THREE.PerspectiveCamera ) {

            object.updateProjectionMatrix();

        }

        if ( editor.helpers[ object.id ] !== undefined ) {

            editor.helpers[ object.id ].update();

        }

        render();

    } );

    signals.objectRemoved.add( function ( object ) {

        var materialsNeedUpdate = false;

        object.traverse( function ( child ) {

            if ( child instanceof THREE.Light ) materialsNeedUpdate = true;

            objects.splice( objects.indexOf( child ), 1 );

        } );

        if ( materialsNeedUpdate === true ) updateMaterials();

    } );

    signals.helperAdded.add( function ( object ) {

        objects.push( object.getObjectByName( 'picker' ) );

    } );

    signals.helperRemoved.add( function ( object ) {

        objects.splice( objects.indexOf( object.getObjectByName( 'picker' ) ), 1 );

    } );

    signals.materialChanged.add( function ( material ) {

        render();

    } );

    signals.fogTypeChanged.add( function ( fogType ) {

        if ( fogType !== oldFogType ) {

            if ( fogType === "None" ) {

                scene.fog = null;

            } else if ( fogType === "Fog" ) {

                scene.fog = new THREE.Fog( oldFogColor, oldFogNear, oldFogFar );

            } else if ( fogType === "FogExp2" ) {

                scene.fog = new THREE.FogExp2( oldFogColor, oldFogDensity );

            }

            updateMaterials();

            oldFogType = fogType;

        }

        render();

    } );

    signals.fogColorChanged.add( function ( fogColor ) {

        oldFogColor = fogColor;

        updateFog( scene );

        render();

    } );

    signals.fogParametersChanged.add( function ( near, far, density ) {

        oldFogNear = near;
        oldFogFar = far;
        oldFogDensity = density;

        updateFog( scene );

        render();

    } );

    signals.windowResize.add( function () {
        camera.aspect = container.dom.offsetWidth / container.dom.offsetHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( container.dom.offsetWidth, container.dom.offsetHeight );

        render();

    } );

    signals.showGridChanged.add( function ( showGrid ) {

        grid.visible = showGrid;
        render();

    } );

    var animations = [];

    signals.playAnimation.add( function ( animation ) {

        animations.push( animation );

    } );

    signals.stopAnimation.add( function ( animation ) {

        var index = animations.indexOf( animation );

        if ( index !== -1 ) {

            animations.splice( index, 1 );

        }

    } );

    //

    var createRenderer = function ( type, antialias ) {

        if ( type === 'WebGLRenderer' && System.support.webgl === false ) {

            type = 'CanvasRenderer';

        }

        //var renderer = new THREE[ type ](  );
        var renderer = new THREE[ type ]( { antialias: antialias } );  //vkljuchennoe rasglazivanie
        renderer.autoClear = false;
        renderer.autoUpdateScene = false;

        return renderer;

    };

    var clearColor;
    var renderer = createRenderer( editor.config.getKey( 'renderer' ), editor.config.getKey( 'renderer/antialias' ) );
    container.dom.appendChild( renderer.domElement );

    animate();

    //

    function updateMaterials() {

        editor.scene.traverse( function ( node ) {

            if ( node.material ) {

                node.material.needsUpdate = true;

                if ( node.material instanceof THREE.MeshFaceMaterial ) {

                    for ( var i = 0; i < node.material.materials.length; i ++ ) {

                        node.material.materials[ i ].needsUpdate = true;

                    }

                }

            }

        } );

    }

    function updateFog( root ) {

        if ( root.fog ) {

            root.fog.color.setHex( oldFogColor );

            if ( root.fog.near !== undefined ) root.fog.near = oldFogNear;
            if ( root.fog.far !== undefined ) root.fog.far = oldFogFar;
            if ( root.fog.density !== undefined ) root.fog.density = oldFogDensity;

        }

    }

    function animate() {

        requestAnimationFrame( animate );

        // animations

        if ( THREE.AnimationHandler.animations.length > 0 ) {

            THREE.AnimationHandler.update( 0.016 );

            for ( var i = 0, l = sceneHelpers.children.length; i < l; i ++ ) {

                var helper = sceneHelpers.children[ i ];

                if ( helper instanceof THREE.SkeletonHelper ) {

                    helper.update();

                }

            }

            render();

        }

    }

    function render() {

        sceneHelpers.updateMatrixWorld();
        scene.updateMatrixWorld();

        renderer.clear();
        renderer.render( scene, camera );

        if ( renderer instanceof THREE.RaytracingRenderer === false ) {

            renderer.render( sceneHelpers, camera );

        }

    }
    return container;

}
/**
 * @author mrdoob / http://mrdoob.com/
 */

Viewport.Info = function ( editor ) {

    var signals = editor.signals;

    var container = new UI.Panel();
    container.setId( 'info' );
    container.setPosition( 'absolute' );
    container.setLeft( '10px' );
    container.setBottom( '10px' );
    container.setFontSize( '12px' );
    container.setColor( '#fff' );

    var objectsText = new UI.Text( '0' ).setMarginLeft( '6px' );
    var verticesText = new UI.Text( '0' ).setMarginLeft( '6px' );
    var trianglesText = new UI.Text( '0' ).setMarginLeft( '6px' );

    container.add( new UI.Text( 'objects' ), objectsText, new UI.Break() );
    container.add( new UI.Text( 'vertices' ), verticesText, new UI.Break() );
    container.add( new UI.Text( 'triangles' ), trianglesText, new UI.Break() );

    signals.objectAdded.add( update );
    signals.objectRemoved.add( update );
    signals.geometryChanged.add( update );

    //

    function update() {

        var scene = editor.scene;

        var objects = 0, vertices = 0, triangles = 0;

        for ( var i = 0, l = scene.children.length; i < l; i ++ ) {

            var object = scene.children[ i ];

            object.traverseVisible( function ( object ) {

                objects ++;

                if ( object instanceof THREE.Mesh ) {

                    var geometry = object.geometry;

                    if ( geometry instanceof THREE.Geometry ) {

                        vertices += geometry.vertices.length;
                        triangles += geometry.faces.length;

                    } else if ( geometry instanceof THREE.BufferGeometry ) {

                        vertices += geometry.attributes.position.array.length / 3;

                        if ( geometry.attributes.index !== undefined ) {

                            triangles += geometry.attributes.index.array.length / 3;

                        } else {

                            triangles += geometry.attributes.position.array.length / 9;

                        }

                    }

                }

            } );

        }

        objectsText.setValue( objects.format() );
        verticesText.setValue( vertices.format() );
        trianglesText.setValue( triangles.format() );

    }

    return container;

}
/**
 * Created by Igor on 13.03.2015.
 */

var PaneleEditor =  function ( editor ) {

    var signals = editor.signals;

    var container = new UI.CollapsiblePanel();
    container.setCollapsed( editor.config.getKey( 'ui/sidebar/object3d/collapsed' ) );
    container.onCollapsedChange( function ( _boolean ) {

        editor.config.setKey( 'ui/sidebar/object3d/collapsed', _boolean );

    } );

    var objectType = new UI.Text().setTextTransform( 'uppercase' );
    container.addStatic( objectType );
    container.add( new UI.Break() );

    // uuid

    var objectUUIDRow = new UI.Panel();
    var objectUUID = new UI.Input().setWidth( '115px' ).setColor( '#444' ).setFontSize( '12px' ).setDisabled( true );
    var objectUUIDRenew = new UI.Button( '⟳' ).setMarginLeft( '7px' ).onClick( function () {

        objectUUID.setValue( THREE.Math.generateUUID() );

        editor.selected.uuid = objectUUID.getValue();

    } );

    objectUUIDRow.add( new UI.Text( 'UUID' ).setWidth( '90px' ) );
    objectUUIDRow.add( objectUUID );
    objectUUIDRow.add( objectUUIDRenew );

    container.add( objectUUIDRow );

    // name

    var objectNameRow = new UI.Panel();
    var objectName = new UI.Input().setWidth( '150px' ).setFontSize( '12px' ).onChange( function () {

        editor.setObjectName( editor.selected, objectName.getValue() );

    } );

    objectNameRow.add( new UI.Text( 'Name' ).setWidth( '90px' ) );
    objectNameRow.add( objectName );

    container.add( objectNameRow );

    // parent

    var objectParentRow = new UI.Panel();
    var objectParent = new UI.Select().setWidth( '150px' ).setFontSize( '12px' ).onChange( update );

    objectParentRow.add( new UI.Text( 'Parent' ).setWidth( '90px' ) );
    objectParentRow.add( objectParent );

    container.add( objectParentRow );

    // position

    var objectPositionRow = new UI.Panel();
    var objectPositionX = new UI.Number().setWidth( '50px' ).onChange( update );
    var objectPositionY = new UI.Number().setWidth( '50px' ).onChange( update );
    var objectPositionZ = new UI.Number().setWidth( '50px' ).onChange( update );

    objectPositionRow.add( new UI.Text( 'Position' ).setWidth( '90px' ) );
    objectPositionRow.add( objectPositionX, objectPositionY, objectPositionZ );

    container.add( objectPositionRow );

    // rotation

    var objectRotationRow = new UI.Panel();
    var objectRotationX = new UI.Number().setWidth( '50px' ).onChange( update );
    var objectRotationY = new UI.Number().setWidth( '50px' ).onChange( update );
    var objectRotationZ = new UI.Number().setWidth( '50px' ).onChange( update );

    objectRotationRow.add( new UI.Text( 'Rotation' ).setWidth( '90px' ) );
    objectRotationRow.add( objectRotationX, objectRotationY, objectRotationZ );

    container.add( objectRotationRow );

    // scale

    var objectScaleRow = new UI.Panel();
    var objectScaleLock = new UI.Checkbox().setPosition( 'absolute' ).setLeft( '75px' );
    var objectScaleX = new UI.Number( 1 ).setRange( 0.01, Infinity ).setWidth( '50px' ).onChange( updateScaleX );
    var objectScaleY = new UI.Number( 1 ).setRange( 0.01, Infinity ).setWidth( '50px' ).onChange( updateScaleY );
    var objectScaleZ = new UI.Number( 1 ).setRange( 0.01, Infinity ).setWidth( '50px' ).onChange( updateScaleZ );

    objectScaleRow.add( new UI.Text( 'Scale' ).setWidth( '90px' ) );
    objectScaleRow.add( objectScaleLock );
    objectScaleRow.add( objectScaleX, objectScaleY, objectScaleZ );

    container.add( objectScaleRow );

    // fov

    var objectFovRow = new UI.Panel();
    var objectFov = new UI.Number().onChange( update );

    objectFovRow.add( new UI.Text( 'Fov' ).setWidth( '90px' ) );
    objectFovRow.add( objectFov );

    container.add( objectFovRow );

    // near

    var objectNearRow = new UI.Panel();
    var objectNear = new UI.Number().onChange( update );

    objectNearRow.add( new UI.Text( 'Near' ).setWidth( '90px' ) );
    objectNearRow.add( objectNear );

    container.add( objectNearRow );

    // far

    var objectFarRow = new UI.Panel();
    var objectFar = new UI.Number().onChange( update );

    objectFarRow.add( new UI.Text( 'Far' ).setWidth( '90px' ) );
    objectFarRow.add( objectFar );

    container.add( objectFarRow );

    // intensity

    var objectIntensityRow = new UI.Panel();
    var objectIntensity = new UI.Number().setRange( 0, Infinity ).onChange( update );

    objectIntensityRow.add( new UI.Text( 'Intensity' ).setWidth( '90px' ) );
    objectIntensityRow.add( objectIntensity );

    container.add( objectIntensityRow );

    // color

    var objectColorRow = new UI.Panel();
    var objectColor = new UI.Color().onChange( update );

    objectColorRow.add( new UI.Text( 'Color' ).setWidth( '90px' ) );
    objectColorRow.add( objectColor );

    container.add( objectColorRow );

    // ground color

    var objectGroundColorRow = new UI.Panel();
    var objectGroundColor = new UI.Color().onChange( update );

    objectGroundColorRow.add( new UI.Text( 'Ground color' ).setWidth( '90px' ) );
    objectGroundColorRow.add( objectGroundColor );

    container.add( objectGroundColorRow );

    // distance

    var objectDistanceRow = new UI.Panel();
    var objectDistance = new UI.Number().setRange( 0, Infinity ).onChange( update );

    objectDistanceRow.add( new UI.Text( 'Distance' ).setWidth( '90px' ) );
    objectDistanceRow.add( objectDistance );

    container.add( objectDistanceRow );

    // angle

    var objectAngleRow = new UI.Panel();
    var objectAngle = new UI.Number().setPrecision( 3 ).setRange( 0, Math.PI / 2 ).onChange( update );

    objectAngleRow.add( new UI.Text( 'Angle' ).setWidth( '90px' ) );
    objectAngleRow.add( objectAngle );

    container.add( objectAngleRow );

    // exponent

    var objectExponentRow = new UI.Panel();
    var objectExponent = new UI.Number().setRange( 0, Infinity ).onChange( update );

    objectExponentRow.add( new UI.Text( 'Exponent' ).setWidth( '90px' ) );
    objectExponentRow.add( objectExponent );

    container.add( objectExponentRow );

    // visible

    var objectVisibleRow = new UI.Panel();
    var objectVisible = new UI.Checkbox().onChange( update );

    objectVisibleRow.add( new UI.Text( 'Visible' ).setWidth( '90px' ) );
    objectVisibleRow.add( objectVisible );

    container.add( objectVisibleRow );

    // user data

    var timeout;

    var objectUserDataRow = new UI.Panel();
    var objectUserData = new UI.TextArea().setWidth( '150px' ).setHeight( '40px' ).setColor( '#444' ).setFontSize( '12px' ).onChange( update );
    objectUserData.onKeyUp( function () {

        try {

            JSON.parse( objectUserData.getValue() );

            objectUserData.dom.classList.add( 'success' );
            objectUserData.dom.classList.remove( 'fail' );

        } catch ( error ) {

            objectUserData.dom.classList.remove( 'success' );
            objectUserData.dom.classList.add( 'fail' );

        }

    } );

    objectUserDataRow.add( new UI.Text( 'User data' ).setWidth( '90px' ) );
    objectUserDataRow.add( objectUserData );

    container.add( objectUserDataRow );


    //

    function updateScaleX() {

        var object = editor.selected;

        if ( objectScaleLock.getValue() === true ) {

            var scale = objectScaleX.getValue() / object.scale.x;

            objectScaleY.setValue( objectScaleY.getValue() * scale );
            objectScaleZ.setValue( objectScaleZ.getValue() * scale );

        }

        update();

    }

    function updateScaleY() {

        var object = editor.selected;

        if ( objectScaleLock.getValue() === true ) {

            var scale = objectScaleY.getValue() / object.scale.y;

            objectScaleX.setValue( objectScaleX.getValue() * scale );
            objectScaleZ.setValue( objectScaleZ.getValue() * scale );

        }

        update();

    }

    function updateScaleZ() {

        var object = editor.selected;

        if ( objectScaleLock.getValue() === true ) {

            var scale = objectScaleZ.getValue() / object.scale.z;

            objectScaleX.setValue( objectScaleX.getValue() * scale );
            objectScaleY.setValue( objectScaleY.getValue() * scale );

        }

        update();

    }

    function update() {

        var object = editor.selected;

        if ( object !== null ) {

            if ( object.parent !== undefined ) {

                var newParentId = parseInt( objectParent.getValue() );

                if ( object.parent.id !== newParentId && object.id !== newParentId ) {

                    editor.parent( object, editor.scene.getObjectById( newParentId, true ) );

                }

            }

            object.position.x = objectPositionX.getValue();
            object.position.y = objectPositionY.getValue();
            object.position.z = objectPositionZ.getValue();


            object.rotation.x = objectRotationX.getValue();
            object.rotation.y = objectRotationY.getValue();
            object.rotation.z = objectRotationZ.getValue();

            object.scale.x = objectScaleX.getValue();
            object.scale.y = objectScaleY.getValue();
            object.scale.z = objectScaleZ.getValue();

            if ( object.fov !== undefined ) {

                object.fov = objectFov.getValue();
                object.updateProjectionMatrix();

            }

            if ( object.near !== undefined ) {

                object.near = objectNear.getValue();

            }

            if ( object.far !== undefined ) {

                object.far = objectFar.getValue();

            }

            if ( object.intensity !== undefined ) {

                object.intensity = objectIntensity.getValue();

            }

            if ( object.color !== undefined ) {

                object.color.setHex( objectColor.getHexValue() );

            }

            if ( object.groundColor !== undefined ) {

                object.groundColor.setHex( objectGroundColor.getHexValue() );

            }

            if ( object.distance !== undefined ) {

                object.distance = objectDistance.getValue();

            }

            if ( object.angle !== undefined ) {

                object.angle = objectAngle.getValue();

            }

            if ( object.exponent !== undefined ) {

                object.exponent = objectExponent.getValue();

            }

            object.visible = objectVisible.getValue();

            try {

                object.userData = JSON.parse( objectUserData.getValue() );

            } catch ( exception ) {

                console.warn( exception );

            }

            signals.objectChanged.dispatch( object );

        }

    }

    function updateRows( object ) {

        var properties = {
            'parent': objectParentRow,
            'fov': objectFovRow,
            'near': objectNearRow,
            'far': objectFarRow,
            'intensity': objectIntensityRow,
            'color': objectColorRow,
            'groundColor': objectGroundColorRow,
            'distance' : objectDistanceRow,
            'angle' : objectAngleRow,
            'exponent' : objectExponentRow
        };

        for ( var property in properties ) {

            properties[ property ].setDisplay( object[ property ] !== undefined ? '' : 'none' );

        }

    }

    function updateTransformRows( object ) {

        if ( object instanceof THREE.Light ||
            ( object instanceof THREE.Object3D && object.userData.targetInverse ) ) {

            objectRotationRow.setDisplay( 'none' );
            objectScaleRow.setDisplay( 'none' );

        } else {

            objectRotationRow.setDisplay( '' );
            objectScaleRow.setDisplay( '' );

        }
    }

    // events

    signals.objectSelected.add( function ( object ) {

        if ( object !== null ) {

            container.setDisplay( 'block' );

            updateRows( object );
            updateUI( object );

        } else {

            container.setDisplay( 'none' );

        }
    } );

    signals.sceneGraphChanged.add( function () {

        var scene = editor.scene;
        var options = {};

        scene.traverse( function ( object ) {

            options[ object.id ] = object.name;

        } );

        objectParent.setOptions( options );

    } );

    signals.objectChanged.add( function ( object ) {

        if ( object !== editor.selected ) return;

        updateUI( object );

    } );
    function updateUI( object ) {

        objectType.setValue( object.type );

        objectUUID.setValue( object.uuid );
        objectName.setValue( object.name );

        if ( object.parent !== undefined ) {

            objectParent.setValue( object.parent.id );

        }

        objectPositionX.setValue(  );
        objectPositionY.setValue( object.position.y );
        objectPositionZ.setValue( object.position.z );

        setPositionObject( object.position.x , object.position.y , object.position.z);

        objectRotationX.setValue( object.rotation.x );
        objectRotationY.setValue( object.rotation.y );
        objectRotationZ.setValue( object.rotation.z );

        objectScaleX.setValue( object.scale.x );
        objectScaleY.setValue( object.scale.y );
        objectScaleZ.setValue( object.scale.z );

        if ( object.fov !== undefined ) {

            objectFov.setValue( object.fov );

        }

        if ( object.near !== undefined ) {

            objectNear.setValue( object.near );

        }

        if ( object.far !== undefined ) {

            objectFar.setValue( object.far );

        }

        if ( object.intensity !== undefined ) {

            objectIntensity.setValue( object.intensity );

        }

        if ( object.color !== undefined ) {

            objectColor.setHexValue( object.color.getHexString() );

        }

        if ( object.groundColor !== undefined ) {

            objectGroundColor.setHexValue( object.groundColor.getHexString() );

        }

        if ( object.distance !== undefined ) {

            objectDistance.setValue( object.distance );

        }

        if ( object.angle !== undefined ) {

            objectAngle.setValue( object.angle );

        }

        if ( object.exponent !== undefined ) {

            objectExponent.setValue( object.exponent );

        }

        objectVisible.setValue( object.visible );

        try {

            objectUserData.setValue( JSON.stringify( object.userData, null, '  ' ) );

        } catch ( error ) {

            console.log( error );

        }

        objectUserData.setBorderColor( '#ccc' );
        objectUserData.setBackgroundColor( '' );

        updateTransformRows( object );

    }

    //* custom UI Function



    return container;

}